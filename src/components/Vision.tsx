// src/components/Vision.tsx
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import React from 'react';
export default function Vision() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" prefetch={false} legacyBehavior>
            <a className="text-2xl font-bold">trustBank</a>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link href="/dashboard" prefetch={false} legacyBehavior>
              <a className="hover:text-gray-400">Trade</a>
            </Link>
            <Link href="/dashboard" prefetch={false} legacyBehavior>
              <a className="hover:text-gray-400">Earn</a>
            </Link>
            <Link href="/dashboard" prefetch={false} legacyBehavior>
              <a className="hover:text-gray-400">Wallet</a>
            </Link>
            <Link href="/dashboard" prefetch={false} legacyBehavior>
              <a className="hover:text-gray-400">Markets</a>
            </Link>
            <Link href="/vision" prefetch={false} legacyBehavior>
              <a className="hover:text-gray-400">Vision</a>
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
      <main className="flex-1 bg-gray-100 dark:bg-gray-950 dark:text-white p-6 md:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">Our Vision</h1>
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                At trustBank, our vision is to revolutionize the way people
                interact with their finances. We believe that everyone should
                have access to secure, transparent, and empowering financial
                tools that help them increase economic and financial freedom.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Empowering Individuals
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                Our platform is designed to be user-friendly and accessible,
                making it easy for anyone to manage digital assets, invest, and
                grow their wealth.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Fostering Innovation</h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                We are committed to driving innovation in the financial
                industry. By leveraging cutting-edge technologies and
                blockchain-based solutions, we are creating new opportunities
                for our users to participate in the digital economy and explore
                emerging asset classes.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Building Trust</h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                At the heart of our vision is a commitment to building trust
                with our users. We believe that transparency, security, and
                ethical practices are essential for creating a financial
                ecosystem that truly serves the needs of individuals and
                communities.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Debit Card</h2>
              <div className="flex justify-center">
                <Image
                  src="/placeholder.svg"
                  alt="trustBank Debit Card"
                  width={400}
                  height={250}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-lg mt-4">
                Our trustBank debit card is designed to provide you with a
                secure and convenient way to manage your finances. With the
                trustBank logo prominently displayed, this card is a symbol of
                our commitment to empowering you and building a trustworthy
                financial ecosystem.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
