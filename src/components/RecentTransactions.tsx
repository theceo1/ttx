import React from 'react';
import { Box, VStack, Text, Heading, List, ListItem } from '@chakra-ui/react';

const RecentTransactions: React.FC = () => {
  const transactions = [
    { id: 1, type: 'Bought', amount: '0.05 BTC', status: 'Success' },
    { id: 2, type: 'Sold', amount: '0.25 ETH', status: 'Failed' },
    { id: 3, type: 'Deposited', amount: '$500 USDC', status: 'Success' },
  ];

  return (
    <Box p={4} bg="white" shadow="md" borderRadius="lg">
      <Heading as="h3" size="md" mb={4}>Recent Transactions</Heading>
      <List spacing={3}>
        {transactions.map((transaction) => (
          <ListItem key={transaction.id} p={2} border="1px solid #ddd" borderRadius="md">
            <Text fontSize="lg">{transaction.type}</Text>
            <Text color="gray.500">{transaction.amount}</Text>
            <Text color={transaction.status === 'Success' ? 'green.500' : 'red.500'}>
              {transaction.status}
            </Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default RecentTransactions;
