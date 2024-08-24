import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

type Props = { progress: number; mode: "thin" | "thick" };

export const ProgressBar = ({ progress, mode }: Props) => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: mode === "thick" ? 30 : 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "#e5e9f2",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#6576ff" : "#308fe8",
    },
  }));
  return (
    <div style={{ minWidth: "60%" }}>
      <BorderLinearProgress
        variant="determinate"
        value={Math.floor(progress)}
      />
    </div>
  );
};
