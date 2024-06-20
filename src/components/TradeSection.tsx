import React, { useState } from 'react';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/Select';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

const TradeSection: React.FC = () => {
  const [coin, setCoin] = useState('BTC');
  const [amount, setAmount] = useState('');

  const handleTrade = () => {
    // Implement trade logic here
  };

  return (
    <div className="trade-section p-4 bg-white shadow rounded-lg">
      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" size="sm" className="hover:bg-teal-500">
          Buy
        </Button>
        <Button variant="outline" size="sm" className="hover:bg-teal-500">
          Sell
        </Button>
      </div>
      <div className="grid gap-2 mt-4">
        <label htmlFor="coin" className="text-sm">Coin</label>
        <Select value={coin} onValueChange={setCoin}>
          <SelectTrigger className="w-full">
            {coin ? <SelectValue>{coin}</SelectValue> : <span className="text-gray-500">Select Coin</span>}
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="BTC">Bitcoin (BTC)</SelectItem>
            <SelectItem value="ETH">Ethereum (ETH)</SelectItem>
            <SelectItem value="USDC">USDC</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2 mt-4">
        <label htmlFor="amount" className="text-sm">Amount</label>
        <Input id="amount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount" />
      </div>
      <Button className="mt-4 bg-teal-500 text-white hover:bg-teal-600" onClick={handleTrade}>Place Order</Button>
    </div>
  );
};

export default TradeSection;
