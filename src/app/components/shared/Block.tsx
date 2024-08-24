import { ReactNode } from "react";
import "./Block.scss";

type Props = {
  heading: string;
  className?: string;
  children: ReactNode;
};
export const Block = ({ heading, children, className }: Props) => {
  return (
    <div className={`block__container ${className}`}>
      <h2>{heading}</h2>
      {children}
    </div>
  );
};
