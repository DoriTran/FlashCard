"use client";

import { FC, useMemo, useRef } from "react";
import CustomScrollbar from "./CustomScrollbar";
import { useTheme } from "../Theme/ThemeProvider";

interface AppScrollbarProps {
  maxWidth?: string;
  maxHeight?: string;
  hidden?: boolean;
  hideHorizontal?: boolean;
  hideVertical?: boolean;
  size?: number;
  color?: string;
  style?: object;
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

const AppScrollbar: FC<AppScrollbarProps> = ({
  maxWidth = "100vw",
  maxHeight = "100vh",
  hidden,
  hideHorizontal,
  hideVertical,
  size = 8,
  color,
  style,
  className,
  children,
  ...restProps
}) => {
  const scrollbarRef = useRef(null);
  const { theme } = useTheme();
  const scrollbarColor = useMemo<string>(() => {
    return color || theme.color.primaryDark;
  }, [color, theme]);

  return (
    <CustomScrollbar
      ref={scrollbarRef}
      className={className}
      style={{
        overflowX: hideHorizontal ? "hidden" : "scroll",
        overflowY: hideVertical ? "hidden" : "scroll",
        ...(!className && { maxWidth }),
        ...(!className && { maxHeight }),
        ...style,
      }}
      display={hidden ? "none" : "unset"}
      size={size}
      color={scrollbarColor}
      {...restProps}
    >
      {children}
    </CustomScrollbar>
  );
};

export default AppScrollbar;
