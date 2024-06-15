import React from 'react';
import { useNotifications } from '../services/dataService';

const Notifications: React.FC = () => {
  const { data, error } = useNotifications();

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="notifications">
      <h3>Notifications</h3>
      <ul>
        {data.map((notification: any, index: number) => (
          <li key={index}>{notification.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default Notifications;
