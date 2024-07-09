"use client";

import { useState } from "react";
import clsx from "clsx";
import { ApScrollbar } from "@/components";
import useResponsivePoint from "@/hooks/useResponsivePoint";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./App.module.scss";

const App = ({ children }: { children: React.ReactNode }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const { isLarger } = useResponsivePoint();

  return (
    <>
      <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <div
        className={clsx(
          styles.mainContainer,
          { [styles.expandedContainer]: isExpanded },
          { [styles.collapsedContainer]: !isExpanded },
        )}
      >
        <ApScrollbar maxHeight={isLarger("tablet") ? "100vh" : "calc(100vh - 80px)"}>{children}</ApScrollbar>
      </div>
    </>
  );
};

export default App;
