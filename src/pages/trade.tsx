// src/pages/trade.tsx
import { useState } from 'react';
import Button from '@/components/ui/Button';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/Select';
import { Input } from '@/components/ui/Input';

const TradePage = () => {
  const [coin, setCoin] = useState('BTC');
  const [amount, setAmount] = useState('');

  const handleBuy = () => {
    // Handle buy logic
    console.log(`Buying ${amount} of ${coin}`);
  };

  const handleSell = () => {
    // Handle sell logic
    console.log(`Selling ${amount} of ${coin}`);
  };

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-4">Trade Cryptocurrencies</h1>
      <div className="grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" size="sm" onClick={handleBuy}>
            Buy
          </Button>
          <Button variant="outline" size="sm" onClick={handleSell}>
            Sell
          </Button>
        </div>
        <div className="grid gap-2">
          <label htmlFor="coin" className="text-sm">
            Coin
          </label>
          <Select id="coin" defaultValue={coin} onChange={(value: string) => setCoin(value)}>
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
          <label htmlFor="amount" className="text-sm">
            Amount
          </label>
          <Input
            id="amount"
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)}
          />
        </div>
        <Button size="sm" onClick={handleBuy}>
          Place Order
        </Button>
      </div>
    </div>
  );
};

export default TradePage;
