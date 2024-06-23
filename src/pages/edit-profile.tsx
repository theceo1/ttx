import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const EditProfile: React.FC = () => {
  const router = useRouter();
  const [user, setUser] = useState({ username: '', email: '' });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('/api/user-profile');
        setUser(response.data);
      } catch (error) {
        setError('Failed to load user data');
      }
    };

    fetchUser();
  }, []);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put('/api/user-profile', user);
      router.push('/');
    } catch (err) {
      setError('Update failed. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Edit Profile
        </h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            placeholder="Username"
            required
            className="w-full p-2 mb-4 border rounded"
          />
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full p-2 mb-4 border rounded"
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
