import React from "react";
import styles from "./CardDetails.module.css"
import { Card } from "antd";

export default function CardDetails({ tvShows, shortFilms, videoGames, parkAttractions, allies, enemies }) {
  return (
    
       <Card className={styles.CharacterDetails}>
        <div className={styles.InfoBox}>
            <h2 className={styles.InfoTitle}>Informações do Personagem</h2>
            <div className={styles.InfoGrid}>
                <div className={styles.InfoItem}>
                    <span className={styles.InfoLabel}>Séries de TV:</span>
                    <span className={styles.InfoValue}>{tvShows}</span>
                </div>
                <div className={styles.InfoItem}>
                    <span className={styles.InfoLabel}>Curta-metragens:</span>
                    <span className={styles.InfoValue}>{shortFilms}</span>
                </div>
                <div className={styles.InfoItem}>
                    <span className={styles.InfoLabel}>Jogos:</span>
                    <span className={styles.InfoValue}>{videoGames}</span>
                </div>
                <div className={styles.InfoItem}>
                    <span className={styles.InfoLabel}>Atrações do parque:</span>
                    <span className={styles.InfoValue}>{parkAttractions}</span>
                </div>
                <div className={styles.InfoItem}>
                    <span className={styles.InfoLabel}>Aliados:</span>
                    <span className={styles.InfoValue}>{allies}</span>
                </div>
                <div className={styles.InfoItem}>
                    <span className={styles.InfoLabel}>Inimigos:</span>
                    <span className={styles.InfoValue}>{enemies}</span>
                </div>
            </div>
        </div>
       </Card>
  )
}
