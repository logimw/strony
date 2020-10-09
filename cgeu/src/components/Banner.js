import React from "react";
import styles from "../css/banner.module.css";

const Banner = ({ title, children }) => {
  return (
    <div className={styles.banner}>
      <h1>{title}</h1>
      <div className={styles.logoContainer}>{children}</div>
    </div>
  );
};

export default Banner;
