import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/Avatar';

const RecentTransactions = () => {
  return (
    <Card className="bg-white text-dark">
      <CardHeader>
        <CardTitle className="text-sm">Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar className="w-8 h-8 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>BTC</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium text-sm">Bitcoin</div>
                <div className="text-gray-500 text-xs">Bought 0.05 BTC</div>
              </div>
            </div>
            <div className="text-green-500 font-medium text-sm">+$1,250.00</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar className="w-8 h-8 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>ETH</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium text-sm">Ethereum</div>
                <div className="text-gray-500 text-xs">Sold 0.25 ETH</div>
              </div>
            </div>
            <div className="text-red-500 font-medium text-sm">-$750.00</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar className="w-8 h-8 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>USDC</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium text-sm">USDC</div>
                <div className="text-gray-500 text-xs">Deposited $500</div>
              </div>
            </div>
            <div className="text-green-500 font-medium text-sm">+$500.00</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentTransactions;
