import { ApIcon } from "@/components";
import { themes } from "@/utils/themes";
import { FC } from "react";
import { SideActionProps } from "./SideAction.type";
import styles from "./SideAction.module.scss";

const SideAction: FC<SideActionProps> = ({ icon, onClick }) => {
  return (
    <div className={styles.action} onClick={onClick}>
      <ApIcon icon={icon} size={27} color={themes.color.black} fixedWidth />
    </div>
  );
};

export default SideAction;
