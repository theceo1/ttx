import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
    fill: boolean;
    tension: number;
  }[];
}

const MarketChart: React.FC = () => {
  const [data, setData] = useState<ChartData>({
    labels: ['Loading...'],
    datasets: [
      {
        label: 'Bitcoin Price',
        data: [],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      // Replace with your real-time data fetching logic
      const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
      const result = await response.json();

      setData({
        labels: ['Time 1', 'Time 2', 'Time 3'],
        datasets: [
          {
            label: 'Bitcoin Price',
            data: [result.bpi.USD.rate_float, result.bpi.USD.rate_float, result.bpi.USD.rate_float],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
            tension: 0.4,
          },
        ],
      });
    };

    fetchData();
    const interval = setInterval(fetchData, 60000); // Update every 60 seconds

    return () => clearInterval(interval);
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Bitcoin Price Chart',
      },
    },
    elements: {
      line: {
        tension: 0.4, // Adds smooth curves
      },
      point: {
        radius: 5, // Adds points at each data point
        backgroundColor: 'rgba(75, 192, 192, 1)',
      },
    },
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <Line data={data} options={options} />
    </div>
  );
};

export default MarketChart;
