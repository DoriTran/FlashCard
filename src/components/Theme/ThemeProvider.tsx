"use client";

import { createContext, useContext, useMemo, useState } from "react";
import global, { GlobalStyle } from "@/app/globals";
import originalTheme from "./original/theme.module.scss";
import darkTheme from "./dark/theme.module.scss";
import { color as originalColor } from "./original/theme";
import { color as darkColor } from "./dark/theme";

interface Theme {
  readonly [key: string]: string;
}

interface ThemeContextType {
  state: string;
  theme: GlobalStyle;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const initialTheme: ThemeContextType = {
  state: "original",
  theme: { ...global, color: originalColor },
  setTheme: () => {},
};

const ThemeContext = createContext<ThemeContextType>(initialTheme);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setTheme] = useState<string>("original");

  const themeClass = useMemo<Theme>(() => {
    switch (state) {
      case "original":
        return originalTheme;
      case "dark":
        return darkTheme;
      default:
        return originalTheme;
    }
  }, [state]);

  const theme = useMemo<GlobalStyle>(() => {
    switch (state) {
      case "original":
        return { ...global, color: originalColor };
      case "dark":
        return { ...global, color: darkColor };
      default:
        return { ...global, color: originalColor };
    }
  }, [state]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ThemeContext.Provider value={{ state, theme, setTheme }}>
      <div className={themeClass.theme}>{children}</div>
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);
export { ThemeProvider, useTheme };
