import React from "react";
import styles from "./ButtonUp.module.css"
import Image from "next/image";
import { Card } from "antd";


export default function CardCharacter({id, imageUrl, Alt,  name, films }) {
  return (
   <button 
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className={styles.ButtonUp}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
   </button>
  );
};
