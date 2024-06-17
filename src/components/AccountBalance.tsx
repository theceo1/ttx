import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import  Button  from '@/components/ui/Button';

const AccountBalance = () => {
  return (
    <Card className="bg-[#0097A7] text-white">
      <CardHeader>
        <CardTitle className="text-sm">Account Balance</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <div>
          <div className="text-4xl font-bold">$12,345.67</div>
          <div className="text-gray-200 text-xs">≈ 1.23 BTC</div>
        </div>
        <Button variant="outline" size="sm" className="text-white border-white">
          Deposit
        </Button>
      </CardContent>
    </Card>
  );
};

export default AccountBalance;
