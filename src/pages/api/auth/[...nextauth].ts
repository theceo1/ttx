import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      authorize: async (credentials) => {
        // Replace this with your own logic to validate user credentials
        const user = {
          id: '1', // Ensure id is a string
          name: 'John Doe',
          email: 'john.doe@example.com'
        };
        if (user) {
          return user;
        } else {
          return null;
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as { name?: string | null; email?: string | null; image?: string | null };
      return session;
    }
  }
});
