import clsx from "clsx";
import { ApIcon, useTheme } from "@/components";
import { useRouter } from "next/navigation";
import { FC } from "react";
import styles from "./SideTab.module.scss";
import { Tab } from "../../SideTab.type";

interface SideTabProps {
  tab: Tab;
  selected: boolean;
}

const SideTab: FC<SideTabProps> = ({ tab, selected }) => {
  const router = useRouter();
  const { theme } = useTheme();

  return (
    <div className={styles.tab} onClick={() => router.push(tab.path)}>
      <div className={clsx(styles.tabTitle, { [styles.tabTitleSelected]: selected })}>{tab.title}</div>
      <div className={clsx(styles.icon, { [styles.iconSelected]: selected })}>
        <ApIcon
          icon={tab.icon}
          size={25}
          color={selected ? theme.color.primaryDark : theme.color.primaryLight}
          fixedWidth
        />
      </div>
    </div>
  );
};

export default SideTab;
