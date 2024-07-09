import { Avatar } from "@mui/material";
import { FC } from "react";

/**
 • If there is an error loading the avatar image, the component falls back to an alternative in below order:
 --→ The provided children
 --→ The first letter of the alt text
 --→ a generic avatar icon
* */

interface ApAvatarProps {
  alt?: string;
  src?: string;
  size: number;
  color?: string;
  border?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

const ApAvatar: FC<ApAvatarProps> = ({ alt, src, size, color, border, children, ...restProps }) => {
  return (
    <Avatar
      alt={alt}
      src={src}
      sx={{ width: `${size}px`, height: `${size}px`, bgcolor: color, border }}
      {...restProps}
    >
      {children}
    </Avatar>
  );
};

export default ApAvatar;
