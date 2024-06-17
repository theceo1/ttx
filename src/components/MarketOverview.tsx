import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/Table';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/Avatar';

const MarketOverview = () => {
  return (
    <Card className="bg-white text-dark">
      <CardHeader>
        <CardTitle className="text-sm">Top Cryptocurrencies</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-sm">Coin</TableHead>
              <TableHead className="text-sm">Price</TableHead>
              <TableHead className="text-sm">Change</TableHead>
              <TableHead className="text-sm">Market Cap</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8 border">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>BTC</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-sm">Bitcoin</div>
                    <div className="text-gray-500 text-xs">BTC</div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-sm">$56,789.00</TableCell>
              <TableCell className="text-green-500 text-sm">+2.5%</TableCell>
              <TableCell className="text-sm">$1.2T</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8 border">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>ETH</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-sm">Ethereum</div>
                    <div className="text-gray-500 text-xs">ETH</div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-sm">$1,789.00</TableCell>
              <TableCell className="text-red-500 text-sm">-1.2%</TableCell>
              <TableCell className="text-sm">$210B</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8 border">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>USDC</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-sm">USDC</div>
                    <div className="text-gray-500 text-xs">USDC</div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-sm">$1.00</TableCell>
              <TableCell className="text-green-500 text-sm">+0.1%</TableCell>
              <TableCell className="text-sm">$55B</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default MarketOverview;
