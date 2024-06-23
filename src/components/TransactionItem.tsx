// src/components/TransactionItem.tsx
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/Avatar';

interface TransactionItemProps {
  iconSrc: string;
  fallbackText: string;
  title: string;
  subtitle: string;
  amount: string;
  amountClass: string;
}

const TransactionItem = ({
  iconSrc,
  fallbackText,
  title,
  subtitle,
  amount,
  amountClass,
}: TransactionItemProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Avatar className="w-8 h-8 border">
          <AvatarImage src={iconSrc} />
          <AvatarFallback>{fallbackText}</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-medium text-sm">{title}</div>
          <div className="text-gray-500 dark:text-gray-400 text-xs">
            {subtitle}
          </div>
        </div>
      </div>
      <div className={`${amountClass} font-medium text-sm`}>{amount}</div>
    </div>
  );
};

export default TransactionItem;
