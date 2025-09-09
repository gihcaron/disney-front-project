import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.Footer}>
      <h1 className={styles.title} onClick={() => (window.location.href = "/")}>
        <span className="text-white">Caron</span>.
      </h1>
      <p className={styles.copy}>&copy; 2023 Your Company Name. All rights reserved.</p>

    </div>
  );
}
