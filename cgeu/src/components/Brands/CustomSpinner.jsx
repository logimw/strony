import React from "react";
import styles from "../layout.css";

export default class CustomSpinner extends React.Component {
  static meta = {
    VERSION: "0.0.0",
  };

  render() {
    return (
      <svg className={styles.spinner} viewBox="0 0 50 50">
        <circle
          className={styles.path}
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
        />
      </svg>
    );
  }
}
