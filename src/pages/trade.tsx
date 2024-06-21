import React, { useState, ChangeEvent } from 'react';
import { Flex, Box, Heading } from '@chakra-ui/react';
import Button from '@/components/ui/Button';
import { Select, SelectItem } from '@/components/ui/Select';
import  Input  from '@/components/ui/Input';
import Header from '@/components/Header';

const TradePage: React.FC = () => {
  const [coin, setCoin] = useState('BTC');
  const [amount, setAmount] = useState('');

  const handleBuy = () => {
    console.log(`Buying ${amount} of ${coin}`);
  };

  const handleSell = () => {
    console.log(`Selling ${amount} of ${coin}`);
  };

  const handleCoinChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCoin(e.target.value);
  };

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  return (
    <Flex direction="column" minHeight="100vh" width="100vw">
      <Header />
      <Flex direction="column" p={4} flex="1" bg="gray.50">
        <Flex width="100%" maxW="1200px" mx="auto" flex="1" gap={4}>
          <Box flex="1" p={4} bg="white" boxShadow="md" borderRadius="md" overflowY="auto">
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
                />
              </div>
              <Button size="sm" onClick={handleBuy} className="bg-teal-600 text-white mt-4">
                Place Order
              </Button>
            </div>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TradePage;
