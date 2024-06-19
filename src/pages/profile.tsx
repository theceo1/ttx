import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import { Button, Input, Card, CardHeader, CardTitle, CardContent } from '@/components/ui';

const Profile = () => {
  const { data: session, status } = useSession();
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (status === 'authenticated') {
      const fetchData = async () => {
        const response = await axios.get('/api/profile', {
          params: { email: session.user.email },
        });
        setUser(response.data);
        setName(response.data.name);
        setEmail(response.data.email);
      };
      fetchData();
    }
  }, [session, status]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/profile/update', { name, email });
      setMessage('Profile updated successfully');
    } catch (error) {
      setMessage('Failed to update profile');
    }
  };

  if (status !== 'authenticated') {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader className="mb-6 text-center">
          <CardTitle className="text-2xl font-bold">Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={handleUpdate}>
            <div className="relative">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
              />
            </div>
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
            {message && <p className="text-teal-500 text-sm">{message}</p>}
            <div>
              <Button
                type="submit"
                className="w-full bg-teal-500 text-white hover:bg-teal-600 rounded-md py-2 text-lg font-semibold"
              >
                Update Profile
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
