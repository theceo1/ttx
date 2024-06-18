// src/layouts/Layout.tsx
import React, { ReactNode } from 'react';
import Navbar from '@/components/Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="p-4">{children}</main>
    </div>
  );
};

export default Layout;
