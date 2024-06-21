// src/pages/auth/register.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Button, Input } from '@/components/ui';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui';
import Image from 'next/image';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [error, setError] = useState('');
  const [subscribeMessage, setSubscribeMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      await axios.post('/api/auth/register', { email, password });
      await signIn('credentials', { email, password });
      router.push('/dashboard');
    } catch (err) {
      setError('Failed to register user');
    }
  };

  const handleGoogleSignIn = () => {
    signIn('google');
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
    <div className="min-h-screen flex">
      <div className="w-1/2 bg-teal-600 flex flex-col justify-start items-center text-white p-8 relative">
        <Image src="/credit-card.png" alt="Credit Card" className="absolute top-20 left-40 w-80 h-80" width={320} height={320} />
        <div className="mt-64 text-center z-10">
          <h2 className="text-4xl font-bold mb-2">trustBank</h2>
          <p className="text-lg mb-4 text-center">SPEND | EARN | TRADE</p>
          <ul className="text-base mb-8 list-disc list-inside">
            <li>Spend your crypto securely in real-time with trustCard</li>
            <li>Earn rewards on every transaction</li>
            <li>ZERO hidden fees</li>
            <li>Trade Swift, Secure and with confidence on our exchange</li>
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
          <span className="text-sm text-gray-300 italic font-light mt-8">Powered by trustBank</span>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center p-8">
        <Card className="w-full max-w-md">
          <CardHeader className="mb-6 text-center">
            <CardTitle className="text-2xl font-bold">Register</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div className="relative">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <div>
                <Button
                  type="submit"
                  className="w-full bg-teal-500 text-white hover:bg-teal-600 rounded-md py-2 text-lg font-semibold"
                >
                  Register
                </Button>
              </div>
            </form>
            <div className="mt-6">
              <Button
                type="button"
                className="w-full bg-red-500 text-white hover:bg-red-600 rounded-md py-2 text-lg font-semibold"
                onClick={handleGoogleSignIn}
              >
                Continue with Google
              </Button>
            </div>
            <div className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{' '}
              <Link href="/auth/signin" className="font-medium text-teal-500 hover:text-teal-800">
                Sign In
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;
