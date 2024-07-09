"use client";

import { useTheme } from "@/components";
import styles from "./page.module.scss";

const Learn = () => {
  const { state, setTheme } = useTheme();

  return (
    <div>
      <button onClick={() => setTheme(state === "original" ? "dark" : "original")}>Change</button>
      <div className={styles.title}>Primary:</div>
      <div className={styles.primary} />
      <div className={styles.primaryDark} />
      <div className={styles.primaryLight} />
      <div className={styles.title}>Secondary:</div>
      <div className={styles.secondary} />
      <div className={styles.secondaryLight} />
      <div className={styles.title}>Side bar & Background:</div>
      <div className={styles.sidebar} />
      <div className={styles.background} />
      <div className={styles.title}>Text:</div>
      <div className={styles.text}>Text</div>
      <div className={styles.textContrast}>Text Contrast</div>
    </div>
  );
};

export default Learn;
