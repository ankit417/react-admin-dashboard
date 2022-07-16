import React, { FC } from "react";

interface ButtonProps {
  title: String;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const Button: FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <div className="button-wrapper" onClick={onClick}>
      <div>{title}</div>
    </div>
  );
};
