import { ReactNode } from "react";
import "./Block.scss";

type Props = {
  heading: string;
  children: ReactNode;
};
export const Block = ({ heading, children }: Props) => {
  return (
    <div className={`block__container`}>
      <h2>{heading}</h2>
      {children}
    </div>
  );
};
