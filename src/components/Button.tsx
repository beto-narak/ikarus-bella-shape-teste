import React from 'react';
import { SHOPIFY_URL } from '../constants';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  onClick
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-wider uppercase transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-white text-black hover:bg-brand-accent hover:text-black border border-transparent shadow-[0_0_0_0_rgba(255,255,255,0.7)] hover:shadow-[0_0_20px_rgba(0,229,255,0.6)]",
    outline: "bg-transparent border border-white/30 text-white hover:border-brand-accent hover:text-brand-accent",
    ghost: "bg-transparent text-gray-400 hover:text-white"
  };

  const widthClass = fullWidth ? "w-full" : "";
  const sizeClass = className.includes('px-') ? "" : "px-8 py-4 text-sm"; // Default padding if not provided

  const trackAndRedirect = () => {
    if (onClick) {
      onClick();
    } else {
      window.location.href = SHOPIFY_URL;
    }
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${sizeClass} ${className}`}
      onClick={trackAndRedirect}
    >
      {children}
    </button>
  );
};