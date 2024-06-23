import { FC, ReactNode } from 'react';
import React from 'react';

interface FormElementProps {
  children: ReactNode;
}

export const Label: FC<FormElementProps> = ({ children }) => <label>{children}</label>;
export const Input: FC<{ type: string, placeholder: string }> = ({ type, placeholder }) => (
  <input type={type} placeholder={placeholder} />
);
