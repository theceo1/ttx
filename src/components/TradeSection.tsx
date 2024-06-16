import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div className="p-4 bg-white shadow rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Trade</h3>
      <select value={crypto} onChange={(e) => setCrypto(e.target.value)} className="w-full p-2 mb-4 border rounded">
        <option value="btc">Bitcoin (BTC)</option>
        <option value="eth">Ethereum (ETH)</option>
        <option value="usdc">USDC</option>
      </select>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        placeholder="Amount"
        className="w-full p-2 mb-4 border rounded"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        placeholder="Price"
        className="w-full p-2 mb-4 border rounded"
      />
      <select value={orderType} onChange={(e) => setOrderType(e.target.value)} className="w-full p-2 mb-4 border rounded">
        <option value="market">Market Order</option>
        <option value="limit">Limit Order</option>
        <option value="stop-loss">Stop-Loss Order</option>
      </select>
      <button type="button" onClick={() => handleTrade('buy')} className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">Buy</button>
      <button type="button" onClick={() => handleTrade('sell')} className="w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 mt-2">Sell</button>
    </div>
  );
};

export default TradeSection;
