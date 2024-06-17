import React, { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/Avatar';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator
} from '@/components/ui/DropdownMenu';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/Table';
import { Label } from '@/components/ui/Label';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/Select';
import { Input } from '@/components/ui/Input';
import { MoonIcon, RefreshCwIcon, FilterIcon, TrendingUpIcon, TrendingDownIcon, CoinsIcon } from '@/components/icons';

// Local component declarations
interface TransactionItemProps {
  iconSrc: string;
  fallbackText: string;
  title: string;
  subtitle: string;
  amount: string;
  amountClass: string;
}

interface CryptoRowProps {
  iconSrc: string;
  fallbackText: string;
  name: string;
  symbol: string;
  price: string;
  change: string;
  changeClass: string;
  marketCap: string;
}

function TransactionItem({ iconSrc, fallbackText, title, subtitle, amount, amountClass }: TransactionItemProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Avatar className="w-8 h-8 border">
          <AvatarImage src={iconSrc} />
          <AvatarFallback>{fallbackText}</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-medium text-sm">{title}</div>
          <div className="text-gray-500 dark:text-gray-400 text-xs">{subtitle}</div>
        </div>
      </div>
      <div className={`${amountClass} font-medium text-sm`}>{amount}</div>
    </div>
  );
}

function CryptoRow({ iconSrc, fallbackText, name, symbol, price, change, changeClass, marketCap }: CryptoRowProps) {
  return (
    <TableRow>
      <TableCell>
        <div className="flex items-center gap-2">
          <Avatar className="w-8 h-8 border">
            <AvatarImage src={iconSrc} />
            <AvatarFallback>{fallbackText}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium text-sm">{name}</div>
            <div className="text-gray-500 dark:text-gray-400 text-xs">{symbol}</div>
          </div>
        </div>
      </TableCell>
      <TableCell className="text-sm">{price}</TableCell>
      <TableCell className={`${changeClass} text-sm`}>{change}</TableCell>
      <TableCell className="text-sm">{marketCap}</TableCell>
    </TableRow>
  );
}

export default function Component() {
  const [coin, setCoin] = useState('BTC');
  const [amount, setAmount] = useState('');

  const handleBuy = () => {
    console.log(`Buying ${amount} of ${coin}`);
  };

  const handleSell = () => {
    console.log(`Selling ${amount} of ${coin}`);
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-2xl font-bold" prefetch={false}>
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
      <main className="flex-1 grid grid-cols-1 md:grid-cols-[300px_1fr] bg-gray-100">
        <aside className="bg-white border-r border-gray-200 p-6 md:p-6 lg:p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold">Dashboard</h2>
            <Button variant="ghost" size="icon" className="ml-auto">
              <MoonIcon className="h-5 w-5" />
            </Button>
          </div>
          <div className="grid gap-4">
            <Card className="dark:bg-gray-800 dark:text-gray-300">
              <CardHeader>
                <CardTitle className="text-sm">Account Balance</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <div>
                  <div className="text-4xl font-bold text-sm">$12,345.67</div>
                  <div className="text-gray-500 dark:text-gray-400 text-xs">≈ 1.23 BTC</div>
                </div>
                <Button variant="outline" size="sm">
                  Deposit
                </Button>
              </CardContent>
            </Card>
            <Card className="dark:bg-gray-800 dark:text-gray-300">
              <CardHeader>
                <CardTitle className="text-sm">Recent Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <TransactionItem
                    iconSrc="/placeholder-user.jpg"
                    fallbackText="BTC"
                    title="Bitcoin"
                    subtitle="Bought 0.05 BTC"
                    amount="+$1,250.00"
                    amountClass="text-green-500"
                  />
                  <TransactionItem
                    iconSrc="/placeholder-user.jpg"
                    fallbackText="ETH"
                    title="Ethereum"
                    subtitle="Sold 0.25 ETH"
                    amount="-$750.00"
                    amountClass="text-red-500"
                  />
                  <TransactionItem
                    iconSrc="/placeholder-user.jpg"
                    fallbackText="USDC"
                    title="USDC"
                    subtitle="Deposited $500"
                    amount="+$500.00"
                    amountClass="text-green-500"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </aside>
        <section className="bg-gray-100 dark:bg-gray-950 dark:text-white p-6 md:p-6 lg:p-8">
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
            <Card className="dark:bg-gray-800 dark:text-gray-300">
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
                    <CryptoRow
                      iconSrc="/placeholder-user.jpg"
                      fallbackText="BTC"
                      name="Bitcoin"
                      symbol="BTC"
                      price="$56,789.00"
                      change="+2.5%"
                      changeClass="text-green-500"
                      marketCap="$1.2T"
                    />
                    <CryptoRow
                      iconSrc="/placeholder-user.jpg"
                      fallbackText="ETH"
                      name="Ethereum"
                      symbol="ETH"
                      price="$1,789.00"
                      change="-1.2%"
                      changeClass="text-red-500"
                      marketCap="$210B"
                    />
                    <CryptoRow
                      iconSrc="/placeholder-user.jpg"
                      fallbackText="USDC"
                      name="USDC"
                      symbol="USDC"
                      price="$1.00"
                      change="+0.1%"
                      changeClass="text-green-500"
                      marketCap="$55B"
                    />
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card className="dark:bg-gray-800 dark:text-gray-300">
              <CardHeader>
                <CardTitle className="text-sm">Trade</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" size="sm">
                      Buy
                    </Button>
                    <Button variant="outline" size="sm">
                      Sell
                    </Button>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="coin" className="text-sm">
                      Coin
                    </Label>
                    <Select
                      id="coin"
                      defaultValue={coin}
                      onChange={(e) => setCoin(e.target.value)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Coin" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="BTC">Bitcoin (BTC)</SelectItem>
                        <SelectItem value="ETH">Ethereum (ETH)</SelectItem>
                        <SelectItem value="USDC">USDC</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="amount" className="text-sm">
                      Amount
                    </Label>
                    <Input
                      id="amount"
                      type="number"
                      placeholder="Enter amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>
                  <Button size="sm" onClick={handleBuy}>
                    Place Order
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
