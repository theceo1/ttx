import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Input,
  Button,
} from '@/components/ui';

const SignInPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
        callbackUrl: '/dashboard',
      });
      if (result?.error) {
        setError(result.error);
      } else {
        router.push(result?.url || '/dashboard');
      }
    } catch (error: any) {
      setError('Sign in failed');
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <div className="hidden md:flex md:w-1/2 bg-teal-600 text-white justify-center items-center">
        <div className="max-w-lg text-center space-y-4">
          <h2 className="text-4xl font-bold">Welcome Back to trustBank</h2>
          <p className="text-xl">We've missed you!</p>
          <p>Sign in to continue managing your finances.</p>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center p-4">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-semibold">Sign In</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 w-full"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1 w-full"
                />
              </div>
              {error && <div className="text-red-500 text-sm">{error}</div>}
              <Button type="submit" className="w-full bg-teal-600 text-white py-2 rounded-md">
                Sign In
              </Button>
              <Button
                type="button"
                className="w-full mt-2 bg-red-600 text-white py-2 rounded-md"
                onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
              >
                Continue with Google
              </Button>
            </form>
            <p className="mt-6 text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <Link href="/auth/register" className="text-teal-500 font-medium">
                Register
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignInPage;
