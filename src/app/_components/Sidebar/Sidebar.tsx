"use client";

import { FC, useMemo, useRef } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import useWindowSizeEffect from "@/hooks/useWindowSizeEffect";
import useResponsivePoint from "@/hooks/useResponsivePoint";
import SideTab from "./_components/SideTab/SideTab";
import tabs from "./SideTab.type";
import { Indicator, LogoToggle } from "./_components";
import styles from "./Sidebar.module.scss";

interface SidebarProps {
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: FC<SidebarProps> = ({ isExpanded, setIsExpanded }) => {
  const pathname = usePathname();
  const tabsArray = useMemo(() => Object.entries(tabs), []);
  const selectedIndex = useMemo(() => {
    return tabsArray.findIndex(([, value]) => value.path === pathname);
  }, [tabsArray, pathname]);

  const sideTabsWrapperRef = useRef<HTMLDivElement>(null);
  const { isLarger } = useResponsivePoint();
  const position = useWindowSizeEffect(() => {
    const firstChild = sideTabsWrapperRef.current?.children[0] as HTMLElement;
    return isLarger("tablet") ? firstChild.offsetTop : firstChild.offsetLeft;
  });

  return (
    <div className={clsx(styles.sidebar, { [styles.notExpanded]: !isExpanded })}>
      <LogoToggle isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <div className={styles.mainAction}>
        <Indicator selectedIndex={selectedIndex} position={position} isExpanded={isExpanded} />
        <div className={styles.sideTabsWrapper} ref={sideTabsWrapperRef}>
          {tabsArray.map(([, eachTab]) => (
            <SideTab key={eachTab.path} tab={eachTab} selected={pathname.startsWith(eachTab.path)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
