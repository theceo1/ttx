import React, { useState } from 'react';
import { Label } from '@/components/ui/Label';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/Select';
import { Input } from '@/components/ui/Input';
import Button from '@/components/ui/Button';

const TradeSection = () => {
  const [selectedCoin, setSelectedCoin] = useState<string>('BTC');
  const [amount, setAmount] = useState<number | string>('');

  return (
    <div className="trade-section">
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
          <Select value={selectedCoin} onValueChange={setSelectedCoin}>
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
        <Button size="sm">Place Order</Button>
      </div>
    </div>
  );
};

export default TradeSection;
