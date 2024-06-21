import React, { useState, useEffect, ChangeEvent } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import { Button, Input, Switch, Select, SelectItem } from '@/components/ui';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui';

const Settings = () => {
  const { data: session } = useSession();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    notifications: false,
    theme: 'light',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (session?.user) {
      setUserData((prevUserData) => ({
        ...prevUserData,
        name: session.user.name || '',
        email: session.user.email || '',
      }));
    }
  }, [session]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      await axios.post('/api/user/update', userData);
      setSuccess('Profile updated successfully!');
    } catch (err) {
      setError('Failed to update profile');
    }
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setUserData({ ...userData, theme: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <Card className="w-full max-w-md">
        <CardHeader className="mb-6 text-center">
          <CardTitle className="text-2xl font-bold">User Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <Input
                id="name"
                type="text"
                required
                placeholder="Name"
                value={userData.name}
                onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div className="relative">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <Input
                id="email"
                type="email"
                required
                placeholder="Email"
                value={userData.email}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div className="relative flex items-center">
              <label htmlFor="notifications" className="mr-2">
                Notifications
              </label>
              <Switch
                id="notifications"
                checked={userData.notifications}
                onChange={(e) => setUserData({ ...userData, notifications: e.target.checked })}
                className="focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            <div className="relative">
              <label htmlFor="theme" className="sr-only">
                Theme
              </label>
              <Select
                id="theme"
                value={userData.theme}
                onChange={handleSelectChange}
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
              >
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
              </Select>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-500 text-sm">{success}</p>}
            <div>
              <Button
                type="submit"
                className="w-full bg-teal-500 text-white hover:bg-teal-600 rounded-md py-2 text-lg font-semibold"
              >
                Save Changes
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;
