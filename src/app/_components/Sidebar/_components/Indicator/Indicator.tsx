import { FC, useMemo } from "react";
import useResponsivePoint from "@/hooks/useResponsivePoint";
import styles from "./Indicator.module.scss";

const SIDE_BAR_GAP = 15;
const TAB_HEIGHT = 60;

interface IndicatorProps {
  selectedIndex: number;
  position: number;
  isExpanded: boolean;
}

interface IndicatorStyle {
  indicator: object;
  circle: object;
}

const Indicator: FC<IndicatorProps> = ({ selectedIndex, position, isExpanded }) => {
  const { responsivePoint, isLarger } = useResponsivePoint();
  const currentPosition = useMemo<number>(
    () => position + selectedIndex * (SIDE_BAR_GAP + TAB_HEIGHT),
    [selectedIndex, position],
  );

  const style = useMemo<IndicatorStyle>(() => {
    const isLargerTablet = isLarger("tablet");

    return {
      indicator: isLargerTablet ? { top: `${currentPosition}px` } : { left: `${currentPosition}px` },
      circle: isLargerTablet ? { top: `${currentPosition + 6}px` } : { left: `${currentPosition + 6}px` },
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPosition, responsivePoint]);

  return (
    <>
      <div className={styles.indicator} style={style.indicator} />
      <div className={styles.circle} style={style.circle} />
      <div className={styles.title} style={{ ...style.indicator, width: isExpanded ? "100%" : 0 }} />
    </>
  );
};

export default Indicator;
