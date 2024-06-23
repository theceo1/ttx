import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '../../../lib/mongodb';
import bcrypt from 'bcryptjs';
import { ObjectId } from 'mongodb';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'your-email@example.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        console.log('Authorize Attempt:', credentials);

        try {
          if (!credentials?.email || !credentials.password) {
            console.error('Missing required fields', credentials);
            throw new Error('Missing required fields');
          }

          const client = await clientPromise;
          const db = client.db('trustbank');
          const usersCollection = db.collection('users');

          console.log('Looking for user:', credentials.email);
          const user = await usersCollection.findOne({ email: credentials.email });
          if (!user) {
            console.error('User not found');
            throw new Error('User not found');
          }

          const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
          if (!isPasswordValid) {
            console.error('Invalid credentials');
            throw new Error('Invalid credentials');
          }

          console.log('Authorization successful:', { id: user._id.toString(), email: user.email });
          return { id: user._id.toString(), email: user.email };
        } catch (error) {
          console.error('Authorization error:', (error as Error).message);
          throw new Error('Authorization failed');
        }
      },
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async session({ session, token, user }) {
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
  events: {
    async signIn(message) { /* on successful sign in */ },
    async signOut(message) { /* on signout */ },
    async createUser(message) { /* user created */ },
    async updateUser(message) { /* user updated */ },
    async linkAccount(message) { /* account linked to a user */ },
    async session(message) { /* session is active */ },
  },
  debug: true,
};

export default NextAuth(authOptions);
