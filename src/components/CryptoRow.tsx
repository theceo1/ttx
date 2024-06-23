// src/components/CryptoRow.tsx
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/Avatar';
import { TableRow, TableCell } from '@/components/ui/Table';

interface CryptoRowProps {
  iconSrc: string;
  fallbackText: string;
  name: string;
  symbol: string;
  price: string;
  change: string;
  changeClass: string;
  marketCap: string;
}

const CryptoRow = ({ iconSrc, fallbackText, name, symbol, price, change, changeClass, marketCap }: CryptoRowProps) => {
  return (
    <TableRow>
      <TableCell>
        <div className="flex items-center gap-2">
          <Avatar className="w-8 h-8 border">
            <AvatarImage src={iconSrc} />
            <AvatarFallback>{fallbackText}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium text-sm">{name}</div>
            <div className="text-gray-500 dark:text-gray-400 text-xs">{symbol}</div>
          </div>
        </div>
      </TableCell>
      <TableCell className="text-sm">{price}</TableCell>
      <TableCell className={`${changeClass} text-sm`}>{change}</TableCell>
      <TableCell className="text-sm">{marketCap}</TableCell>
    </TableRow>
  );
};

export default CryptoRow;
