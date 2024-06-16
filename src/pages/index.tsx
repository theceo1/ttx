import { useSession, signOut } from 'next-auth/react';
import Head from 'next/head';
import Layout from '@/layouts/Layout';
import dynamic from 'next/dynamic';

// Use dynamic imports for code splitting
const AccountBalance = dynamic(() => import('@/components/AccountBalance'), { ssr: false });
const RecentTransactions = dynamic(() => import('@/components/RecentTransactions'), { ssr: false });
const MarketOverview = dynamic(() => import('@/components/MarketOverview'), { ssr: false });
const TradeSection = dynamic(() => import('@/components/TradeSection'), { ssr: false });
const UserProfile = dynamic(() => import('@/components/UserProfile'), { ssr: false });
const Notifications = dynamic(() => import('@/components/Notifications'), { ssr: false });
const MarketChart = dynamic(() => import('@/components/MarketChart'), { ssr: false });

export default function Home() {
  const { data: session, status } = useSession();

  if (status === 'loading') return <div>Loading...</div>;

  if (!session) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <h1 className="text-3xl font-semibold">You are not authenticated</h1>
        <a href="/login" className="text-blue-500 ml-2">Login</a>
      </div>
    );
  }

  return (
    <Layout>
      <Head>
        <title>TrustBank</title>
        <meta name="description" content="TrustBank Dashboard" />
      </Head>
      <div className="flex justify-between items-center p-4 bg-white shadow">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button onClick={() => signOut()} className="py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600">Logout</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
        <div className="col-span-1 md:col-span-1 space-y-4">
          <UserProfile />
          <AccountBalance />
          <RecentTransactions />
          <Notifications />
        </div>
        <div className="col-span-1 md:col-span-3 space-y-4">
          <MarketOverview />
          <TradeSection />
          <MarketChart />
        </div>
      </div>
    </Layout>
  );
}
