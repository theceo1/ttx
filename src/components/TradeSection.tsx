import React from 'react';

const TradeSection: React.FC = () => {
  const handleBuy = () => {
    alert('Buy action');
  };

  const handleSell = () => {
    alert('Sell action');
  };

  return (
    <div className="trade-section">
      <h3>Trade</h3>
      <form>
        <select>
          <option value="btc">Bitcoin (BTC)</option>
          <option value="eth">Ethereum (ETH)</option>
          <option value="usdc">USDC</option>
        </select>
        <button type="button" onClick={handleBuy}>Buy</button>
        <button type="button" onClick={handleSell}>Sell</button>
      </form>
    </div>
  );
}

export default TradeSection;
