// src/components/Header.tsx
import Link from "next/link";
import Button from '@/components/ui/Button';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link href="/" className="text-2xl font-bold" prefetch={false}>
          trustBank
        </Link>
        <nav className="hidden md:flex items-center gap-4">
          <Link href="/trade" className="hover:text-gray-400" prefetch={false}>
            Trade
          </Link>
          <Link href="/earn" className="hover:text-gray-400" prefetch={false}>
            Earn
          </Link>
          <Link href="/wallet" className="hover:text-gray-400" prefetch={false}>
            Wallet
          </Link>
          <Link href="/markets" className="hover:text-gray-400" prefetch={false}>
            Markets
          </Link>
          <Link href="/vision" className="hover:text-gray-400" prefetch={false}>
            Vision
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm">
          Sign In
        </Button>
        <Button size="sm">Sign Up</Button>
      </div>
    </header>
  );
};

export default Header;
