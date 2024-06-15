import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/Avatar';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/Table';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select, SelectItem, SelectTrigger, SelectValue, SelectContent } from '@/components/ui/Select';
import Modal from '@/components/Modal';

const Component = () => {
  const [data, setData] = useState({
    balance: "$12,345.67",
    btcBalance: "≈ 1.23 BTC",
    transactions: [
      { coin: "Bitcoin", action: "Bought 0.05 BTC", amount: "+$1,250.00", color: "text-green-500" },
      { coin: "Ethereum", action: "Sold 0.25 ETH", amount: "-$750.00", color: "text-red-500" },
      { coin: "USDC", action: "Deposited $500", amount: "+$500.00", color: "text-green-500" },
    ],
    market: [
      { coin: "Bitcoin", price: "$56,789.00", change: "+2.5%", marketCap: "$1.2T", color: "text-green-500" },
      { coin: "Ethereum", price: "$1,789.00", change: "-1.2%", marketCap: "$210B", color: "text-red-500" },
      { coin: "USDC", price: "$1.00", change: "+0.1%", marketCap: "$55B", color: "text-green-500" },
    ]
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRefresh = () => {
    // Dummy refresh functionality
    const refreshedData = {
      balance: "$13,000.00",
      btcBalance: "≈ 1.30 BTC",
      transactions: [
        { coin: "Bitcoin", action: "Bought 0.10 BTC", amount: "+$2,500.00", color: "text-green-500" },
        { coin: "Ethereum", action: "Sold 0.30 ETH", amount: "-$1,000.00", color: "text-red-500" },
        { coin: "USDC", action: "Deposited $700", amount: "+$700.00", color: "text-green-500" },
      ],
      market: [
        { coin: "Bitcoin", price: "$57,000.00", change: "+3.0%", marketCap: "$1.3T", color: "text-green-500" },
        { coin: "Ethereum", price: "$1,800.00", change: "-1.0%", marketCap: "$220B", color: "text-red-500" },
        { coin: "USDC", price: "$1.00", change: "+0.2%", marketCap: "$56B", color: "text-green-500" },
      ]
    };
    setData(refreshedData);
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-2xl font-bold">
            trustBank
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link href="/trade" className="hover:text-gray-400">Trade</Link>
            <Link href="/earn" className="hover:text-gray-400">Earn</Link>
            <Link href="/wallet" className="hover:text-gray-400">Wallet</Link>
            <Link href="/markets" className="hover:text-gray-400">Markets</Link>
            <Link href="/vision" className="hover:text-gray-400">Vision</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm">Sign In</Button>
          <Button size="sm">Sign Up</Button>
        </div>
      </header>
      <main className="flex-1 grid grid-cols-1 md:grid-cols-[300px_1fr] bg-gray-100">
        <div className="bg-white border-r border-gray-200 p-6 md:p-6 lg:p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <h2 className="text-lg font-bold">Dashboard</h2>
              <Button variant="ghost" size="icon" className="ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </svg>
              </Button>
            </div>
          </div>
          <div className="grid gap-4">
            <Card className="dark:bg-gray-800 dark:text-gray-300">
              <CardHeader>
                <CardTitle className="text-sm">Account Balance</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <div>
                  <div className="text-4xl font-bold text-sm">{data.balance}</div>
                  <div className="text-gray-500 dark:text-gray-400 text-xs">{data.btcBalance}</div>
                </div>
                <Button variant="outline" size="sm">Deposit</Button>
              </CardContent>
            </Card>
            <Card className="dark:bg-gray-800 dark:text-gray-300">
              <CardHeader>
                <CardTitle className="text-sm">Recent Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  {data.transactions.map((tx, index) => (
                    <div className="flex items-center justify-between" key={index}>
                      <div className="flex items-center gap-2">
                        <Avatar className="w-8 h-8 border">
                          <AvatarImage src="/placeholder-user.jpg" />
                          <AvatarFallback>{tx.coin.substring(0, 3).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium text-sm">{tx.coin}</div>
                          <div className="text-gray-500 dark:text-gray-400 text-xs">{tx.action}</div>
                        </div>
                      </div>
                      <div className={`${tx.color} font-medium text-sm`}>{tx.amount}</div>
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
              <Button variant="outline" size="sm" onClick={handleRefresh}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 mr-2"
                >
                  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                  <path d="M21 3v5h-5"></path>
                  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                  <path d="M8 16H3v5"></path>
                </svg>
                Refresh
              </Button>
              <Button variant="outline" size="sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 mr-2"
                >
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                </svg>
                Filter
              </Button>
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
                    {data.market.map((coin, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar className="w-8 h-8 border">
                              <AvatarImage src="/placeholder-user.jpg" />
                              <AvatarFallback>{coin.coin.substring(0, 3).toUpperCase()}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium text-sm">{coin.coin}</div>
                              <div className="text-gray-500 dark:text-gray-400 text-xs">{coin.coin}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-sm">{coin.price}</TableCell>
                        <TableCell className={`${coin.color} text-sm`}>{coin.change}</TableCell>
                        <TableCell className="text-sm">{coin.marketCap}</TableCell>
                      </TableRow>
                    ))}
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
                    <Button variant="outline" size="sm" onClick={() => setIsModalOpen(true)}>Buy</Button>
                    <Button variant="outline" size="sm">Sell</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="grid gap-2">
          <h3 className="text-lg font-bold mb-4">Place Order</h3>
          <Label htmlFor="coin-modal" className="text-sm">Coin</Label>
          <Select id="coin-modal" defaultValue="BTC">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Coin" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="BTC">Bitcoin (BTC)</SelectItem>
              <SelectItem value="ETH">Ethereum (ETH)</SelectItem>
              <SelectItem value="USDC">USDC</SelectItem>
            </SelectContent>
          </Select>
          <Label htmlFor="amount-modal" className="text-sm">Amount</Label>
          <Input id="amount-modal" type="number" placeholder="Enter amount" />
          <Button size="sm" className="mt-4">Place Order</Button>
        </div>
      </Modal>
    </div>
  );
};

export default Component;
