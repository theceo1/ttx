// src/pages/dashboard.tsx
import React, { useEffect, useState, ChangeEvent } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import Button from '@/components/ui/Button';
import MarketChart from '@/components/charts/MarketChart';
import TradeSection from '@/components/TradeSection';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Avatar,
  AvatarImage,
  AvatarFallback,
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Input,
  Select,
  SelectItem,
} from '@/components/ui';
import {
  fetchAccountBalance,
  fetchRecentTransactions,
  fetchMarketOverview,
  fetchBtcToFiat,
} from '../services/cryptoService';

interface Transaction {
  id: number;
  type: string;
  coin: string;
  amount: number;
  value: number;
}

interface MarketData {
  coin: string;
  price: number;
  change: number;
  marketCap: number;
}

const Dashboard = () => {
  const { data: session, status } = useSession();
  const [balance, setBalance] = useState<number | null>(null);
  const [recentTransactions, setRecentTransactions] = useState<Transaction[]>(
    [],
  );
  const [marketData, setMarketData] = useState<MarketData[]>([]);
  const [btcValue, setBtcValue] = useState<number | null>(null);
  const [fiatValue, setFiatValue] = useState<string>('');
  const [cryptoCoin, setCryptoCoin] = useState('BTC');
  const [fiatCurrency, setFiatCurrency] = useState('USD');
  const [userPreferences, setUserPreferences] = useState({
    notifications: false,
    theme: 'light',
  });

  useEffect(() => {
    const fetchUserPreferences = async () => {
      if (session?.user) {
        try {
          const response = await axios.get('/api/user/preferences');
          setUserPreferences(response.data);
        } catch (err) {
          console.error('Failed to fetch user preferences', err);
        }
      }
    };

    fetchUserPreferences();
  }, [session]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const balanceData = await fetchAccountBalance();
        setBalance(balanceData);

        const transactionsData = await fetchRecentTransactions();
        setRecentTransactions(transactionsData);

        const marketData = await fetchMarketOverview();
        setMarketData(marketData);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  const handleBtcToFiat = async () => {
    if (btcValue !== null) {
      try {
        const result = await fetchBtcToFiat(btcValue, fiatCurrency);
        setFiatValue(result);
      } catch (error) {
        console.error('Error converting BTC to Fiat', error);
      }
    }
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>You must be logged in to view this page.</div>;
  }

  return (
    <div
      className={`flex flex-col h-screen ${userPreferences.theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}
    >
      <header className="bg-black text-white py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" prefetch={false} legacyBehavior>
            <a className="text-2xl font-bold">trustBank</a>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link href="/trade" prefetch={false} legacyBehavior>
              <a className="hover:text-teal-500">Trade</a>
            </Link>
            <Link href="/earn" prefetch={false} legacyBehavior>
              <a className="hover:text-teal-500">Earn</a>
            </Link>
            <Link href="/wallet" prefetch={false} legacyBehavior>
              <a className="hover:text-teal-500">Wallet</a>
            </Link>
            <Link href="/markets" prefetch={false} legacyBehavior>
              <a className="hover:text-teal-500">Markets</a>
            </Link>
            <Link href="/vision" prefetch={false} legacyBehavior>
              <a className="hover:text-teal-500">Vision</a>
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            className="hover:bg-teal-500 rounded-full border-none"
          >
            Sign In
          </Button>
          <Button
            size="sm"
            className="hover:bg-teal-500 rounded-full border-none"
          >
            Sign Up
          </Button>
        </div>
      </header>
      <main className="flex-1 grid grid-cols-1 md:grid-cols-[300px_1fr] gap-4 p-4">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Dashboard</h1>
          </div>
          <Card className="card card-account-balance relative">
            <CardHeader className="card-header">
              <CardTitle className="card-title">Account Balance</CardTitle>
            </CardHeader>
            <CardContent className="card-content flex items-center justify-between">
              <div>
                <div className="text-4xl font-bold">
                  ${balance !== null ? balance.toFixed(2) : 'Loading...'}
                </div>
                <div className="text-xs">≈ 1.23 BTC</div>
              </div>
              <Button
                variant="outline"
                size="md"
                className="button-black hover:bg-teal-500 absolute -right-4 -bottom-2 rounded-full border-none"
              >
                Deposit
              </Button>
            </CardContent>
          </Card>
          <Card className="card card-recent-transactions">
            <CardHeader className="card-header">
              <CardTitle className="card-title">Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent className="card-content">
              <div className="grid gap-2">
                {recentTransactions.map((transaction) => (
                  <div
                    className="flex items-center justify-between"
                    key={transaction.id}
                  >
                    <div className="flex items-center gap-2">
                      <Avatar className="avatar">
                        <AvatarImage
                          className="avatar-image"
                          src="/placeholder-user.jpg"
                        />
                        <AvatarFallback className="avatar-fallback">
                          {transaction.coin}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium text-sm">
                          {transaction.coin}
                        </div>
                        <div className="text-xs">
                          {transaction.type} {transaction.amount}{' '}
                          {transaction.coin}
                        </div>
                      </div>
                    </div>
                    <div
                      className={`font-medium text-sm ${transaction.type === 'Bought' ? 'text-green-500' : 'text-red-500'}`}
                    >
                      {transaction.type === 'Bought' ? '+' : '-'}$
                      {transaction.value.toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="card card-btc-fiat-converter">
            <CardHeader className="card-header">
              <CardTitle className="card-title text-teal-500">
                Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="card-content">
              <div className="grid gap-2 mt-4">
                <label htmlFor="cryptoCoin" className="text-sm">
                  Select Crypto Currency
                </label>
                <Select
                  value={cryptoCoin}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setCryptoCoin(e.target.value)
                  }
                >
                  <SelectItem value="BTC">Bitcoin (BTC)</SelectItem>
                  <SelectItem value="ETH">Ethereum (ETH)</SelectItem>
                  <SelectItem value="USDC">USDC</SelectItem>
                </Select>
              </div>
              <div className="grid gap-2 mt-4">
                <label htmlFor="fiatCurrency" className="text-sm">
                  Select Fiat Currency
                </label>
                <Select
                  value={fiatCurrency}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setFiatCurrency(e.target.value)
                  }
                >
                  <SelectItem value="USD">USD</SelectItem>
                  <SelectItem value="EUR">EUR</SelectItem>
                  <SelectItem value="GBP">GBP</SelectItem>
                </Select>
              </div>
              <div className="grid gap-2 mt-4">
                <label htmlFor="btcValue" className="text-sm">
                  Amount
                </label>
                <Input
                  id="btcValue"
                  type="number"
                  value={btcValue !== null ? btcValue.toString() : ''}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setBtcValue(parseFloat(e.target.value) || null)
                  }
                  placeholder="Enter amount"
                />
              </div>
              <Button
                className="button-black mt-4 hover:bg-teal-500 rounded-full border-none"
                onClick={handleBtcToFiat}
              >
                Convert
              </Button>
              {fiatValue && (
                <div className="mt-4">
                  <div className="text-lg font-semibold">Converted Value:</div>
                  <div className="text-2xl">
                    {fiatValue} {fiatCurrency}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold">Market Overview</h2>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                className="hover:bg-teal-500 rounded-full border-none"
              >
                <RefreshCwIcon className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="hover:bg-teal-500 rounded-full border-none"
              >
                <FilterIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <Card className="card card-top-cryptocurrencies">
            <CardHeader className="card-header">
              <CardTitle className="card-title">Top Cryptocurrencies</CardTitle>
            </CardHeader>
            <CardContent className="card-content">
              <Table className="table">
                <TableHeader className="table-header">
                  <TableRow className="table-row">
                    <TableHead className="table-head">Coin</TableHead>
                    <TableHead className="table-head">Price</TableHead>
                    <TableHead className="table-head">24h Change</TableHead>
                    <TableHead className="table-head">Market Cap</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="table-body">
                  {marketData.map((data) => (
                    <TableRow className="table-row" key={data.coin}>
                      <TableCell className="table-cell">{data.coin}</TableCell>
                      <TableCell className="table-cell">
                        ${data.price.toFixed(2)}
                      </TableCell>
                      <TableCell
                        className={`table-cell ${data.change > 0 ? 'text-green-500' : 'text-red-500'}`}
                      >
                        {data.change > 0 ? '+' : ''}
                        {data.change.toFixed(2)}%
                      </TableCell>
                      <TableCell className="table-cell">
                        ${data.marketCap.toFixed(2)}
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="table-row">
                    <TableCell className="table-cell">USDT</TableCell>
                    <TableCell className="table-cell">$1.00</TableCell>
                    <TableCell className="table-cell text-gray-500">
                      0.00%
                    </TableCell>
                    <TableCell className="table-cell">
                      $65,000,000,000
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card className="card card-trade">
            <CardHeader className="card-header">
              <CardTitle className="card-title">Trade</CardTitle>
            </CardHeader>
            <CardContent className="card-content">
              <TradeSection />
            </CardContent>
          </Card>
          <Card className="card card-market-chart">
            <CardHeader className="card-header">
              <CardTitle className="card-title">Market Chart</CardTitle>
            </CardHeader>
            <CardContent className="card-content">
              <MarketChart />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

function RefreshCwIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </svg>
  );
}

function FilterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

export default Dashboard;
