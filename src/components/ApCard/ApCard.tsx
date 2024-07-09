import { Paper } from "@mui/material";
import { FC } from "react";
import { mixin } from "@/utils/themes";

interface ApCardProps {
  children: React.ReactNode;
  sx?: object;
  [key: string]: any;
}

const ApCard: FC<ApCardProps> = ({ children, sx, ...restProps }) => {
  return (
    <Paper sx={{ borderRadius: "25px", ...mixin.baseGradient, ...sx }} {...restProps}>
      {children}
    </Paper>
  );
};

export default ApCard;
