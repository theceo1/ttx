import React from 'react';
import { useUserProfile } from '../services/dataService';

const UserProfile: React.FC = () => {
  const { data, error } = useUserProfile();

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="user-profile">
      <img src={data.avatar} alt={`${data.name}'s avatar`} />
      <h2>{data.name}</h2>
      <p>{data.email}</p>
      <button>Edit Profile</button>
    </div>
  );
}

export default UserProfile;
