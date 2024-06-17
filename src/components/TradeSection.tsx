import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Label } from '@/components/ui/Label';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/Select';
import { Input } from '@/components/ui/Input';

const TradeSection = () => {
  return (
    <Card className="bg-white text-dark">
      <CardHeader>
        <CardTitle className="text-sm">Trade</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" size="sm">
              Buy
            </Button>
            <Button variant="outline" size="sm">
              Sell
            </Button>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="coin" className="text-sm">
              Coin
            </Label>
            <Select id="coin" defaultValue="BTC">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Coin" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="BTC">Bitcoin (BTC)</SelectItem>
                <SelectItem value="ETH">Ethereum (ETH)</SelectItem>
                <SelectItem value="USDC">USDC</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="amount" className="text-sm">
              Amount
            </Label>
            <Input id="amount" type="number" placeholder="Enter amount" />
          </div>
          <Button size="sm">Place Order</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TradeSection;
