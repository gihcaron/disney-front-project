import React from "react";
import styles from "./CardCharacter.module.css"
import Image from "next/image";
import { Card } from "antd";


export default function CardCharacter({id, imageUrl, Alt,  name, films }) {
  return (
    <Card className={styles.CharacterCard} key={id}>
      <div className={styles.CharacterBox}>
        <div className={styles.CardImage}>
          <Image
            src={imageUrl}
            alt={ Alt}
            width={300}
            height={300}
            className={styles.CharacterImage}
            priority
          />
        </div>

        <div className={styles.CharacterContent}>
          <h1 className={styles.CharacterName}>{name}</h1>
          <p className={styles.CharacterDescription}>
            <span>Filmes:</span> {films}
          </p>
        </div>
      </div>
    </Card>
  );
};
