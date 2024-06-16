import React from 'react';
import { VStack, HStack, Text, Heading } from '@chakra-ui/react';

const MarketOverview: React.FC = () => {
  const marketData = [
    { coin: 'Bitcoin (BTC)', price: '$56,789.00', change: '+2.5%', marketCap: '$1.2T' },
    { coin: 'Ethereum (ETH)', price: '$1,789.00', change: '-1.2%', marketCap: '$210B' },
    { coin: 'USDC (USDC)', price: '$1.00', change: '+0.1%', marketCap: '$55B' }
  ];

  return (
    <VStack mt={4} align="start" spacing={3}>
      <Heading as="h4" size="md">Market Overview</Heading>
      <HStack width="100%" justify="space-between" fontWeight="bold">
        <Text>Coin</Text>
        <Text>Price</Text>
        <Text>Change</Text>
        <Text>Market Cap</Text>
      </HStack>
      {marketData.map((data, index) => (
        <HStack key={index} width="100%" justify="space-between">
          <Text>{data.coin}</Text>
          <Text>{data.price}</Text>
          <Text color={data.change.startsWith('+') ? 'green.500' : 'red.500'}>{data.change}</Text>
          <Text>{data.marketCap}</Text>
        </HStack>
      ))}
    </VStack>
  );
};

export default MarketOverview;
