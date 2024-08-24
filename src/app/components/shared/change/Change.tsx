import "./Change.scss";
type Props = { percent: number };
export const Change = ({ percent }: Props) => {
  let changeClass = "";
  let displayPercent = String(percent);

  if (percent > 0) {
    changeClass = "green";
    displayPercent = `+${percent}`;
  } else if (percent < 0) {
    changeClass = "red";
    displayPercent = `${percent}`;
  }

  return <span className={`change ${changeClass}`}>{displayPercent}%</span>;
};
