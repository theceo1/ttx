import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Heading, Select, Input, Button } from '@chakra-ui/react';

const TradeSection: React.FC = () => {
  const [crypto, setCrypto] = useState('btc');
  const [amount, setAmount] = useState(0);
  const [price, setPrice] = useState(0);
  const [orderType, setOrderType] = useState('market');
  const [ws, setWs] = useState<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');
    setWs(ws);

    ws.onmessage = (event) => {
      console.log('Received:', event.data);
    };

    ws.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => {
      ws.close();
    };
  }, []);

  const handleTrade = async (action: 'buy' | 'sell') => {
    try {
      await axios.post('/api/trade', { action, crypto, amount, price, orderType });
      if (ws) {
        ws.send(`${action.toUpperCase()}: ${amount} ${crypto} at ${price} (${orderType})`);
      }
      alert(`${action.charAt(0).toUpperCase() + action.slice(1)} action successful`);
    } catch (error) {
      alert(`${action.charAt(0).toUpperCase() + action.slice(1)} action failed`);
    }
  };

  return (
    <Box p={4} bg="white" shadow="md" borderRadius="lg">
      <Heading as="h3" size="md" mb={4}>Trade</Heading>
      <Select value={crypto} onChange={(e) => setCrypto(e.target.value)} mb={4}>
        <option value="btc">Bitcoin (BTC)</option>
        <option value="eth">Ethereum (ETH)</option>
        <option value="usdc">USDC</option>
      </Select>
      <Input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        placeholder="Amount"
        mb={4}
      />
      <Input
        type="number"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        placeholder="Price"
        mb={4}
      />
      <Select value={orderType} onChange={(e) => setOrderType(e.target.value)} mb={4}>
        <option value="market">Market Order</option>
        <option value="limit">Limit Order</option>
        <option value="stop-loss">Stop-Loss Order</option>
      </Select>
      <Button colorScheme="green" onClick={() => handleTrade('buy')} width="full" mb={2}>
        Buy
      </Button>
      <Button colorScheme="red" onClick={() => handleTrade('sell')} width="full">
        Sell
      </Button>
    </Box>
  );
};

export default TradeSection;
