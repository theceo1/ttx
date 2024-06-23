// src/components/TradeSection.tsx
import React, { useState } from 'react';
import { Flex, Box, Heading } from '@chakra-ui/react';
import Button from '@/components/ui/Button';
import { Select, SelectItem } from '@/components/ui/Select';
import Input from '@/components/ui/Input';

const TradeSection: React.FC = () => {
  const [coin, setCoin] = useState('BTC');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const handleBuy = () => {
    if (!amount) {
      setError('Invalid amount entered');
      return;
    }
    console.log(`Buying ${amount} of ${coin}`);
  };

  const handleSell = () => {
    if (!amount) {
      setError('Invalid amount entered');
      return;
    }
    console.log(`Selling ${amount} of ${coin}`);
  };

  const handleCoinChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCoin(e.target.value);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  return (
    <Box>
      <Heading as="h3" size="lg" mb={4}>
        Trade Cryptocurrencies
      </Heading>
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
          <Select
            id="coin"
            value={coin}
            onChange={handleCoinChange}
            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
          >
            <SelectItem value="BTC">Bitcoin (BTC)</SelectItem>
            <SelectItem value="ETH">Ethereum (ETH)</SelectItem>
            <SelectItem value="USDC">USDC</SelectItem>
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
            onChange={handleAmountChange}
            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <Button
          size="sm"
          onClick={handleBuy}
          className="bg-teal-600 text-white mt-4"
        >
          Place Order
        </Button>
      </div>
    </Box>
  );
};

export default TradeSection;
