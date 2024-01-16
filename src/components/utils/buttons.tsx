import React from "react";

interface Props {
  children: React.ReactNode;
}

export const Button = ({ children }: Props) => {
  return (
    <div className="h-20 border flex justify-center items-center">
      {children}
    </div>
  );
};
