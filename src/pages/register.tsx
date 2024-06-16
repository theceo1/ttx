import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const Register: React.FC = () => {
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/api/register', user);
      router.push('/login');
    } catch (err) {
      setError('Failed to register');
    }
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded-lg max-w-md w-full">
        <h1 className="text-2xl font-semibold mb-4 text-center">Register</h1>
        {error && <div className="mb-4 text-red-500">{error}</div>}
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
          <label className="block mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
