import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/Avatar';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/DropdownMenu';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/Table';
import { fetchAccountBalance, fetchRecentTransactions, fetchMarketOverview } from '../utils/api';
import MarketChart from '@/components/charts/MarketChart';
import TradeSection from '@/components/TradeSection';

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
  const [balance, setBalance] = useState<number | null>(null);
  const [recentTransactions, setRecentTransactions] = useState<Transaction[]>([]);
  const [marketData, setMarketData] = useState<MarketData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const balanceData = await fetchAccountBalance();
      setBalance(balanceData);

      const transactionsData = await fetchRecentTransactions();
      setRecentTransactions(transactionsData);

      const marketData = await fetchMarketOverview();
      setMarketData(marketData);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col h-screen bg-white">
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
          <Button variant="outline" size="sm">
            Sign In
          </Button>
          <Button size="sm">Sign Up</Button>
        </div>
      </header>
      <main className="flex-1 grid grid-cols-1 md:grid-cols-[300px_1fr] bg-white">
        <div className="bg-gray-100 dark:bg-gray-950 dark:text-white p-6 md:p-6 lg:p-8">
          <div className="grid gap-4">
            <Card className="account-balance-card bg-teal-500 text-white">
              <CardHeader>
                <CardTitle className="text-sm">Account Balance</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <div>
                  <div className="text-4xl font-bold">${balance !== null ? balance.toFixed(2) : 'Loading...'}</div>
                  <div className="text-gray-300 text-xs">≈ 1.23 BTC</div>
                </div>
                <Button variant="outline" size="sm" className="text-white border-white">
                  Deposit
                </Button>
              </CardContent>
            </Card>
            <Card className="recent-transactions-card">
              <CardHeader>
                <CardTitle className="text-sm">Recent Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  {recentTransactions.map((transaction) => (
                    <div className="flex items-center justify-between" key={transaction.id}>
                      <div className="flex items-center gap-2">
                        <Avatar className="w-8 h-8 border">
                          <AvatarImage src="/placeholder-user.jpg" />
                          <AvatarFallback>{transaction.coin}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium text-sm">{transaction.coin}</div>
                          <div className="text-gray-500 dark:text-gray-400 text-xs">
                            {transaction.type} {transaction.amount} {transaction.coin}
                          </div>
                        </div>
                      </div>
                      <div className={`font-medium text-sm ${transaction.type === 'Bought' ? 'text-green-500' : 'text-red-500'}`}>
                        {transaction.type === 'Bought' ? '+' : '-'}${transaction.value.toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-950 dark:text-white p-6 md:p-6 lg:p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold">Market Overview</h2>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <RefreshCwIcon className="w-4 h-4 mr-2" />
                Refresh
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <FilterIcon className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <TrendingUpIcon className="w-4 h-4 mr-2" />
                    Top Gainers
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <TrendingDownIcon className="w-4 h-4 mr-2" />
                    Top Losers
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <CoinsIcon className="w-4 h-4 mr-2" />
                    All Coins
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="grid gap-4">
            <Card className="market-overview-card">
              <CardHeader>
                <CardTitle className="text-sm">Top Cryptocurrencies</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-sm">Coin</TableHead>
                      <TableHead className="text-sm">Price</TableHead>
                      <TableHead className="text-sm">Change</TableHead>
                      <TableHead className="text-sm">Market Cap</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {marketData.map((coin) => (
                      <TableRow key={coin.coin}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar className="w-8 h-8 border">
                              <AvatarImage src="/placeholder-user.jpg" />
                              <AvatarFallback>{coin.coin}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium text-sm">{coin.coin}</div>
                              <div className="text-gray-500 dark:text-gray-400 text-xs">{coin.coin}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-sm">${coin.price.toFixed(2)}</TableCell>
                        <TableCell className={`text-sm ${coin.change > 0 ? 'text-green-500' : 'text-red-500'}`}>{coin.change.toFixed(2)}%</TableCell>
                        <TableCell className="text-sm">${(coin.marketCap / 1e9).toFixed(2)}B</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card className="trade-section">
              <CardHeader>
                <CardTitle className="text-sm">Trade</CardTitle>
              </CardHeader>
              <CardContent>
                <TradeSection /> {/* Use the TradeSection component here */}
              </CardContent>
            </Card>
            <Card className="market-chart">
              <CardHeader>
                <CardTitle className="text-sm">Market Chart</CardTitle>
              </CardHeader>
              <CardContent>
                <MarketChart /> {/* Adding the MarketChart component */}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

function CoinsIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="8" cy="8" r="6" />
      <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
      <path d="M7 6h1v4" />
      <path d="m16.71 13.88.7.71-2.82 2.82" />
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

function MoonIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

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

function TrendingDownIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
      <polyline points="16 17 22 17 22 11" />
    </svg>
  );
}

function TrendingUpIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}
