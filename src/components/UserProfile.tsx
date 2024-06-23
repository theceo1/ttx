import React from 'react';
import Image from 'next/image';
import { useUserProfile } from '../services/dataService';

const UserProfile: React.FC = () => {
  const { data, error } = useUserProfile();

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <Image
        className="w-16 h-16 rounded-full mx-auto"
        src={data.avatar}
        alt={`${data.name}'s avatar`}
        width={64}
        height={64}
      />
      <h2 className="text-center text-xl font-semibold mt-4">{data.name}</h2>
      <p className="text-center text-gray-600">{data.email}</p>
      <button className="mt-4 w-full py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600">
        Edit Profile
      </button>
    </div>
  );
};

export default UserProfile;
