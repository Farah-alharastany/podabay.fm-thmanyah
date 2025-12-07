"use client";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    //Button element
    <button
      onClick={onClick}
      className={`
        cursor-pointer
        px-4 self-start py-2 rounded-md !text-xs text-white transition-all duration-300
         bg-gradient-to-b from-[#40678c] to-[#2c5378]
        hover:brightness-120
        ${className ?? ""}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
