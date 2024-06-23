export interface CustomUser {
  image: string;
  id: string;
  name: string;
  email: string;
}

declare module 'next-auth' {
  interface Session {
    user: CustomUser;
  }

  interface User extends CustomUser {}
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    name: string;
    email: string;
  }
}
