// src/pages/api/auth/[...nextauth].ts

import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '../../../lib/mongodb';
import bcrypt from 'bcryptjs';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'your-email@example.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        console.log('Authorize Attempt:', credentials);

        if (!credentials?.email || !credentials.password) {
          console.error('Missing required fields', credentials);
          throw new Error('Missing required fields');
        }

        const client = await clientPromise;
        const db = client.db('trustbank');
        const usersCollection = db.collection('users');

        console.log('Looking for user:', credentials.email);
        const user = await usersCollection.findOne({
          email: credentials.email,
        });
        if (!user) {
          console.error('User not found');
          throw new Error('User not found');
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password,
        );
        if (!isPasswordValid) {
          console.error('Invalid credentials');
          throw new Error('Invalid credentials');
        }

        console.log('Authorization successful:', {
          id: user._id.toString(),
          email: user.email,
        });
        return { id: user._id.toString(), email: user.email };
      },
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async signIn() {
      return true;
    },
    async session({ session }) {
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
  events: {
    async signIn() {
      /* on successful sign in */
    },
    async signOut() {
      /* on signout */
    },
    async createUser() {
      /* user created */
    },
    async updateUser() {
      /* user updated */
    },
    async linkAccount() {
      /* account linked to a user */
    },
    async session() {
      /* session is active */
    },
  },
  debug: true,
};

export default NextAuth(authOptions);
