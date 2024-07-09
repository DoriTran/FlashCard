"use client";

import { Pack } from "@/actions/dataType";
import { FC, useMemo } from "react";
import toPercent from "@/utils/toPercent";
import { useTheme } from "@/components";
import styles from "./LatestPack.module.scss";

interface LatestPackProps {
  pack: Pack;
  reverse?: boolean;
}

type FlexDirection =
  | "column"
  | "inherit"
  | "-moz-initial"
  | "initial"
  | "revert"
  | "unset"
  | "column-reverse"
  | "row"
  | "row-reverse"
  | undefined;

interface PackInfo {
  remain: number;
  percent: number;
  color: string;
  textColor: string;
  containerFlex: FlexDirection;
}

const LatestPack: FC<LatestPackProps> = ({ pack, reverse }) => {
  const { theme } = useTheme();
  const packInfo = useMemo<PackInfo>(() => {
    const totalCardInLearningSet = pack.learning?.set.length || 0;
    const currentLearningAt = pack.learning?.at || 0;

    return {
      remain: totalCardInLearningSet - currentLearningAt,
      percent: toPercent(currentLearningAt, totalCardInLearningSet) as number,
      color: !reverse ? theme.color.primary : theme.color.secondary,
      textColor: !reverse ? theme.color.primaryDarl : theme.color.secondaryDark,
      containerFlex: !reverse ? "column" : "column-reverse",
    };
  }, [pack, theme, reverse]);

  return (
    <div className={styles.container} style={{ flexDirection: packInfo.containerFlex }}>
      <div className={styles.remain}>{packInfo.remain}</div>
      <div className={styles.name} style={{ backgroundColor: packInfo.color }}>
        {pack.name}
      </div>
      <div className={styles.round} style={{ backgroundColor: packInfo.color, color: packInfo.textColor }}>
        <div
          className={styles.progress}
          data-percent={packInfo.percent}
          style={{
            background: `conic-gradient(${packInfo.color} ${packInfo.percent}%, ${theme.color.white} 0)`,
          }}
        />
      </div>
    </div>
  );
};

export default LatestPack;
