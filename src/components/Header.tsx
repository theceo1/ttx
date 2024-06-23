// src/components/Header.tsx
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { MoonIcon } from '@/components/icons';
import React from 'react';

const Header = () => {
  return (
    <header className="bg-black text-white py-4 px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link href="/" prefetch={false} legacyBehavior>
          <a className="text-2xl font-bold">
            trustBank
          </a>
        </Link>
        <nav className="hidden md:flex items-center gap-4">
          <Link href="#" prefetch={false} legacyBehavior>
            <a className="hover:text-gray-400">
              Trade
            </a>
          </Link>
          <Link href="#" prefetch={false} legacyBehavior>
            <a className="hover:text-gray-400">
              Earn
            </a>
          </Link>
          <Link href="#" prefetch={false} legacyBehavior>
            <a className="hover:text-gray-400">
              Wallet
            </a>
          </Link>
          <Link href="#" prefetch={false} legacyBehavior>
            <a className="hover:text-gray-400">
              Markets
            </a>
          </Link>
          <Link href="#" prefetch={false} legacyBehavior>
            <a className="hover:text-gray-400">
              Vision
            </a>
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" className="border-white text-white">
          Sign In
        </Button>
        <Button size="sm" className="bg-teal-600 text-white">
          Sign Up
        </Button>
      </div>
    </header>
  );
};

export default Header;
