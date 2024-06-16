import React from 'react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const { data: session } = useSession();

  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        <Link href="/dashboard">trustBank</Link>
      </h1>
      <div className="flex space-x-4">
        {session ? (
          <>
            <Link href="/transactions" className="py-2 px-4 text-blue-500">Transactions</Link>
            <Link href="/profile" className="py-2 px-4 text-blue-500">Profile</Link>
            <Link href="/trade-history" className="py-2 px-4 text-blue-500">Trade History</Link>
            <button onClick={() => signOut()} className="py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600">Logout</button>
          </>
        ) : (
          <Link href="/login" className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
