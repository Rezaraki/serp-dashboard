import { ReactNode } from "react";
import "./Block.scss";

type Props = {
  mode?: "lined" | "simple";
  heading: string;
  children: ReactNode;
};
export const Block = ({ mode = "simple", heading, children }: Props) => {
  return (
    <div className={`block__container ${mode === "lined" ? "lined" : ""}`}>
      <h2>{heading}</h2>
      {children}
    </div>
  );
};
