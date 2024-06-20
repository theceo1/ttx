import React from 'react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const { data: session } = useSession();

  return (
    <nav className="bg-black shadow p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-white">
        <Link href="/dashboard">trustBank</Link>
      </h1>
      <div className="flex space-x-4">
        {session ? (
          <>
            <Link href="/transactions" className="py-2 px-4 text-teal-500 hover:text-teal-700">Transactions</Link>
            <Link href="/profile" className="py-2 px-4 text-teal-500 hover:text-teal-700">Profile</Link>
            <Link href="/trade-history" className="py-2 px-4 text-teal-500 hover:text-teal-700">Trade History</Link>
            <button onClick={() => signOut()} className="py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600">Logout</button>
          </>
        ) : (
          <Link href="/login" className="py-2 px-4 bg-teal-500 text-white rounded-lg hover:bg-teal-600">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
