import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-4 text-center">
      <p>&copy; {new Date().getFullYear()} trustBank. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
