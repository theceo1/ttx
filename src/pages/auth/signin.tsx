import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import axios from 'axios';
import { Card, CardHeader, CardTitle, CardContent, Input, Button } from '@/components/ui';
import Image from 'next/image';

const SignInPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [subscribeMessage, setSubscribeMessage] = useState('');

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

  const handleSubscribe = async () => {
    try {
      await axios.post('/api/subscribe', { email: subscribeEmail });
      setSubscribeMessage('Subscribed successfully!');
      setSubscribeEmail('');
    } catch (err) {
      setSubscribeMessage('Failed to subscribe');
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <div className="hidden md:flex md:w-1/2 bg-teal-600 text-white justify-center items-center">
        <Image src="/credit-card.png" alt="Credit Card" className="absolute top-20 left-40 w-80 h-80" width={320} height={320} />
        <div className="max-w-lg text-center space-y-4">
          <h2 className="text-4xl font-bold mb-2">trustBank</h2>
          <ul>
            <li>A crypto card that let you SPEND | EARN | TRADE in real time. </li>
            <br />Pay for food, Ride, Bills with our crypto to fiat debit card, all on the go.
          </ul>
          <p className="text-base italic text-center">
            Want to be the first to know when we launch the trustCard?
            <br />Subscribe to our waiting list now! It&apos;s FREE.
          </p>
          <div className="mt-4 flex flex-col items-center">
            <Input
              id="subscribeEmail"
              type="email"
              placeholder="Enter your email"
              value={subscribeEmail}
              onChange={(e) => setSubscribeEmail(e.target.value)}
              className="appearance-none rounded-md px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm mb-2"
            />
            <Button
              type="button"
              onClick={handleSubscribe}
              className="bg-white text-teal-500 hover:bg-gray-100 hover:text-white rounded-md py-2 px-4 text-lg font-semibold"
            >
              Subscribe
            </Button>
            {subscribeMessage && <p className="mt-2 text-sm">{subscribeMessage}</p>}
          </div>
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
              Don&apos;t have an account?{' '}
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
