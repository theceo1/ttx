// src/pages/dashboard.tsx
import { VStack, HStack, Box, Text } from '@chakra-ui/react';
import AccountBalance from '@/components/AccountBalance';
import RecentTransactions from '@/components/RecentTransactions';
import MarketOverview from '@/components/MarketOverview';
import TradeSection from '@/components/TradeSection';
import MarketChart from '@/components/MarketChart';

const Dashboard: React.FC = () => {
  return (
    <VStack align="stretch" spacing={4} p={4} bg="gray.50" minHeight="100vh">
      <HStack spacing={4} align="stretch" width="100%" maxW="1200px" bg="white" boxShadow="md" borderRadius="md">
        <VStack spacing={4} width="30%" p={4} borderRight="1px solid #ddd">
          <AccountBalance />
          <RecentTransactions />
        </VStack>
        <VStack spacing={4} width="70%" p={4}>
          <MarketOverview />
          <TradeSection />
          <MarketChart />
        </VStack>
      </HStack>
    </VStack>
  );
};

export default Dashboard;
