import React, { type ButtonHTMLAttributes } from 'react';
import './Button.css';

export type ButtonVariant =
  | 'primary'
  | 'secondary-pill'
  | 'dark-utility'
  | 'pearl-capsule'
  | 'icon-circular';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  className = '',
  children,
  ...props
}) => {
  return (
    <button
      className={`apple-btn btn-${variant} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
