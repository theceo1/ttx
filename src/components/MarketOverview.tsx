import React from 'react';
import { fetchMarketOverview } from '../utils/api';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/Table';
import { useEffect, useState } from 'react';

interface MarketData {
  coin: string;
  price: number;
  change: number;
  marketCap: number;
}

const MarketOverview: React.FC = () => {
  const [marketData, setMarketData] = useState<MarketData[]>([]);

  useEffect(() => {
    const getMarketData = async () => {
      const data = await fetchMarketOverview();
      setMarketData(data);
    };
    getMarketData();
  }, []);

  return (
    <Card className="card bg-white text-black market-overview-card">
      <CardHeader>
        <CardTitle>Top Cryptocurrencies</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Coin</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Change</TableHead>
              <TableHead>Market Cap</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {marketData.map((coin: MarketData, index: number) => (
              <TableRow key={index}>
                <TableCell>{coin.coin}</TableCell>
                <TableCell>${coin.price.toFixed(2)}</TableCell>
                <TableCell className={coin.change >= 0 ? 'text-green-500' : 'text-red-500'}>
                  {coin.change >= 0 ? '+' : ''}{coin.change}%
                </TableCell>
                <TableCell>${(coin.marketCap / 1e9).toFixed(2)} B</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default MarketOverview;
