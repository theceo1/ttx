import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderHistory: React.FC = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('/api/orders');
        setOrders(response.data);
      } catch (error) {
        console.error('Failed to fetch orders', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Order History</h3>
      <ul>
        {orders.map((order: any) => (
          <li key={order.id} className="mb-2 p-2 border rounded-lg">
            <span className="block text-lg">{order.type}</span>
            <span className="block text-gray-500">{order.amount} {order.crypto}</span>
            <span className={`block ${order.status === 'Success' ? 'text-green-500' : 'text-red-500'}`}>
              {order.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistory;
