import Head from 'next/head';
import Layout from '@/layouts/Layout';
import AccountBalance from '@/components/AccountBalance';
import RecentTransactions from '@/components/RecentTransactions';
import MarketOverview from '@/components/MarketOverview';
import TradeSection from '@/components/TradeSection';
import UserProfile from '@/components/UserProfile';
import Notifications from '@/components/Notifications';
import MarketChart from '@/components/MarketChart';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>TrustBank</title>
        <meta name="description" content="TrustBank Dashboard" />
      </Head>
      <div className="dashboard">
        <div className="sidebar">
          <UserProfile />
          <AccountBalance />
          <RecentTransactions />
          <Notifications />
        </div>
        <div className="main-content">
          <MarketOverview />
          <TradeSection />
          <MarketChart />
        </div>
      </div>
    </Layout>
  );
}
