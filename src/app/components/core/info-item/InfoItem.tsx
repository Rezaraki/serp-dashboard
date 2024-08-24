import { Block } from "../../shared/Block";
import { ProgressBar } from "../../shared/progress-bar/ProgressBar";
import "./InfoItem.scss";

type Props = {
  heading: string;
  progresss: number;
};
export const InfoItem = ({ heading, progresss }: Props) => {
  return (
    <Block className="info-item__wrapper" heading={heading}>
      <ProgressBar mode="thin" progress={progresss} />
      <h3 className="info-item__progress">{progresss}%</h3>
    </Block>
  );
};
