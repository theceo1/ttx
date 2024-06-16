import React from 'react';
import AccountBalance from '@/components/AccountBalance';
import RecentTransactions from '@/components/RecentTransactions';
import MarketOverview from '@/components/MarketOverview';
import TradeSection from '@/components/TradeSection';
import MarketChart from '@/components/MarketChart';
import { Box, Flex, VStack, HStack, Text, Heading, Button } from '@chakra-ui/react';

const Dashboard: React.FC = () => {
  return (
    <Flex direction="column" align="center" p={4} bg="gray.50" minHeight="100vh">
      <HStack spacing={4} justify="space-between" width="100%" p={4} bg="white" boxShadow="md">
        <Text fontSize="2xl" fontWeight="bold" color="blue.600">trustBank</Text>
        <Button variant="outline" colorScheme="blue">Login</Button>
      </HStack>
      <Flex mt={8} width="100%" maxW="1200px" bg="white" boxShadow="md" borderRadius="md">
        <Box width="30%" p={4} borderRight="1px solid #ddd">
          <Heading as="h3" size="lg" mb={4}>Dashboard</Heading>
          <AccountBalance />
          <Button mt={4} colorScheme="blue" width="full">Deposit</Button>
          <RecentTransactions />
        </Box>
        <Box width="70%" p={4}>
          <Heading as="h3" size="lg" mb={4}>Market Overview</Heading>
          <MarketOverview />
          <TradeSection />
          <MarketChart />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
