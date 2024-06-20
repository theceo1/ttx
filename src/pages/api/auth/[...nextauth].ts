import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { MongoClient } from 'mongodb';
import bcrypt from 'bcryptjs';

const clientPromise = MongoClient.connect(process.env.MONGODB_URI as string);

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        if (!credentials) {
          console.log('No credentials provided');
          return null;
        }

        const client = await clientPromise;
        const db = client.db('trustbank');
        const user = await db.collection('users').findOne({
          email: credentials.email,
        });

        if (user && bcrypt.compareSync(credentials.password, user.password)) {
          console.log('User authenticated successfully');
          return { id: user._id.toString(), name: user.name, email: user.email };
        }
        console.log('Failed to authenticate user');
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as { id?: string; name?: string | null; email?: string | null; image?: string | null };
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin', // Custom sign-in page path
  },
  debug: process.env.NODE_ENV === 'development',
  secret: process.env.NEXTAUTH_SECRET,
});
