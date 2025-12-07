import React from "react";
import styles from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loaderInner}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
    </div>
  );
};

export default Loader;
