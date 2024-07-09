"use client";

import { UserLearningProgress } from "@/actions/dataType";
import { FC } from "react";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { ApIcon, useTheme } from "@/components";
import clsx from "clsx";
import styles from "./HomeAction.module.scss";

interface HomeInfoProps {
  info: string;
  data: string | number;
  hideOnTabletOrBelow?: boolean;
}

const HomeInfo: FC<HomeInfoProps> = ({ info, data, hideOnTabletOrBelow = false }) => {
  return (
    <div className={clsx(styles.homeInfoWrapper, { [styles.hidden]: hideOnTabletOrBelow })}>
      <div className={styles.data}>{data}</div>
      <div className={styles.info}>{info}</div>
    </div>
  );
};

interface HomeActionProps {
  learningProgress: UserLearningProgress;
}

const HomeAction: FC<HomeActionProps> = ({ learningProgress }) => {
  const { theme } = useTheme();

  return (
    <div className={styles.homeActionWrapper}>
      <HomeInfo info="Packs" data={learningProgress.packs} />
      <HomeInfo info="Cards" data={learningProgress.cards} hideOnTabletOrBelow />
      <div className={styles.action}>
        <ApIcon icon={faPlay} size="3.75rem" color={theme.color.primaryDark} />
      </div>
      <HomeInfo info="Learned" data={learningProgress.learned} />
      <HomeInfo info="Hours" data={learningProgress.hours} hideOnTabletOrBelow />
    </div>
  );
};

export default HomeAction;
