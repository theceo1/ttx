import { signIn } from "next-auth/react";
import { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    signIn("email", { email });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6">Sign In</h1>
        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
