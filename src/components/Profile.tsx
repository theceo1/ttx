import { useSession } from 'next-auth/react';
import Image from 'next/image';

const Profile: React.FC = () => {
  const { data: session } = useSession();

  if (!session || !session.user) return null;

  return (
    <div className="flex items-center space-x-4 p-4 bg-white shadow-md rounded-md">
      <Image
        src={session.user.image || '/placeholder-user.jpg'}
        alt="User Avatar"
        width={50}
        height={50}
        className="rounded-full"
      />
      <div>
        <h2 className="text-lg font-bold">{session.user.name}</h2>
        <p className="text-sm text-gray-600">{session.user.email}</p>
      </div>
    </div>
  );
};

export default Profile;
