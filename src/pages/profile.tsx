import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile: React.FC = () => {
  const [user, setUser] = useState({ name: '', email: '', username: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('/api/user-profile');
        setUser(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch profile');
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put('/api/user-profile', user);
      alert('Profile updated successfully');
    } catch (err) {
      setError('Failed to update profile');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4 text-center">User Profile</h1>
      <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded-lg max-w-md mx-auto">
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Username</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
