// src/pages/_app.tsx
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '@/components/Header'; // Import the Header component

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header /> {/* Include the Header component here */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
