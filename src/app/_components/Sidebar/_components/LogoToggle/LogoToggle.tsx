import { FC } from "react";
import clsx from "clsx";
import { ApAvatar } from "@/components";
import styles from "./LogoToggle.module.scss";

interface LogoToggleProps {
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const LogoToggle: FC<LogoToggleProps> = ({ isExpanded, setIsExpanded }) => {
  return (
    <div
      className={clsx(styles.logo, { [styles.logoExpanded]: isExpanded }, { [styles.logoCollapsed]: !isExpanded })}
    >
      <ApAvatar alt="Self" size={45} src="/icon.png" onClick={() => setIsExpanded(!isExpanded)} />
    </div>
  );
};

export default LogoToggle;
