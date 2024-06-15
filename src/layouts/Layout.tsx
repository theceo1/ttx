import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <div className="container mx-auto">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
