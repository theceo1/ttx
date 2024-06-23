import { useState } from 'react';
import axios from 'axios';
import React from 'react';

const BtcToFiatConverter = () => {
  const [btcAmount, setBtcAmount] = useState<number>(0);
  const [fiatCurrency, setFiatCurrency] = useState<string>('usd');
  const [convertedValue, setConvertedValue] = useState<number | null>(null);

  const handleConvert = async () => {
    try {
      const response = await axios.get('/api/convert-btc-to-fiat', {
        params: { btcAmount, fiatCurrency },
      });
      setConvertedValue(response.data.value);
    } catch (error) {
      console.error('Error converting BTC to fiat:', error);
    }
  };

  return (
    <div>
      <h2>Convert BTC to Fiat</h2>
      <input
        type="number"
        value={btcAmount}
        onChange={(e) => setBtcAmount(parseFloat(e.target.value))}
        placeholder="BTC Amount"
      />
      <input
        type="text"
        value={fiatCurrency}
        onChange={(e) => setFiatCurrency(e.target.value)}
        placeholder="Fiat Currency (e.g., usd)"
      />
      <button onClick={handleConvert}>Convert</button>
      {convertedValue !== null && <div>Converted Value: ${convertedValue}</div>}
    </div>
  );
};

export default BtcToFiatConverter;
