import React from 'react';
import { signIn } from 'next-auth/react';

const Login: React.FC = () => {
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { username, password } = e.currentTarget as any;
    await signIn('credentials', {
      redirect: true,
      username: username.value,
      password: password.value,
    });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
        <div className="flex justify-center items-center mb-6">
          <h1 className="text-4xl font-bold text-blue-500">trust</h1>
          <div className="bg-blue-500 text-white px-2 ml-1 rounded">Bank</div>
        </div>
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <input type="text" name="username" placeholder="Username" required className="w-full p-2 mb-4 border rounded" />
          <input type="password" name="password" placeholder="Password" required className="w-full p-2 mb-4 border rounded" />
          <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Login</button>
        </form>
        <p className="mt-4 text-center">Don't have an account? <a href="/register" className="text-blue-500">Register</a></p>
      </div>
    </div>
  );
};

export default Login;
