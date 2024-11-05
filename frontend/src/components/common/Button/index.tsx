import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button = ({ children, className, onClick }: ButtonProps) => {
  return <button className={`${className} rounded-lg px-4 py-2`} onClick={onClick}>{children}</button>;
}