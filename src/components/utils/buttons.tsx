import React from "react";

interface Props {
  children: React.ReactNode;
}

export const Button = ({ children }: Props) => {
  return (
    <div className="h-[52px] flex justify-center items-center bg-[var(--button-color)] rounded-md hover:bg-[var(--hover-color)]">
      {children}
    </div>
  );
};
