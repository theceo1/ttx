import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Notifications: React.FC = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('/api/notifications');
        setNotifications(response.data);
      } catch (error) {
        console.error('Failed to fetch notifications', error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Notifications</h3>
      <ul>
        {notifications.map((notification: any) => (
          <li key={notification.id} className="mb-2 p-2 border rounded-lg">
            <span className="block text-lg">{notification.message}</span>
            <span className="block text-gray-500">{notification.timestamp}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
