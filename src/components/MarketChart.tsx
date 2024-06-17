// src/components/MarketChart.tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

const MarketChart = () => {
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="text-sm">Market Chart</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Add your chart component here */}
        <div className="h-64">
          {/* Example chart placeholder */}
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="white" />
          </svg>
        </div>
      </CardContent>
    </Card>
  );
};

export default MarketChart;
