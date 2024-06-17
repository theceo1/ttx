import Link from 'next/link';
import Button from '@/components/ui/Button';
import { MoonIcon } from '@/components/icons';

const Header = () => {
  return (
    <header className="bg-black text-white py-4 px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link href="#" className="text-2xl font-bold" prefetch={false}>
          trustBank
        </Link>
        <nav className="hidden md:flex items-center gap-4">
          <Link href="#" className="hover:text-gray-400" prefetch={false}>
            Trade
          </Link>
          <Link href="#" className="hover:text-gray-400" prefetch={false}>
            Earn
          </Link>
          <Link href="#" className="hover:text-gray-400" prefetch={false}>
            Wallet
          </Link>
          <Link href="#" className="hover:text-gray-400" prefetch={false}>
            Markets
          </Link>
          <Link href="#" className="hover:text-gray-400" prefetch={false}>
            Vision
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" className="text-white border-white">
          Sign In
        </Button>
        <Button size="sm" className="bg-[#0097A7] text-white">
          Sign Up
        </Button>
      </div>
    </header>
  );
};

export default Header;
