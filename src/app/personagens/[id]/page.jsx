"use client";
import { useRouter } from "next/navigation"
import axios from "axios";
import { Card, Carousel, Pagination, Skeleton, Input } from "antd";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

import styles from "./style.module.css";
import Image from "next/image";

// Componentes
import Header from "../../../components/Header";

export default function Personagens() {

    
    return(
    <main className={styles.main}>
    <section className={styles.SectionHeader}>
       <Header /> 
    </section>

    <section className={styles.CharacterSection}>
       <Card className={styles.CharacterCard}>
        <div className={styles.CharacterBox}>
        <div className={styles.CardImage}>
            <Image
                src="/images/Monstros.jpg"  
                alt="Capa do filme Carros"
                width={1200}
                height={400}
                className={styles.CharacterImage}
                priority
            />
        </div >

        <div className={styles.CharacterContent}>
            <h1 className={styles.CharacterName}>Nome do Personagem</h1>
            <p className={styles.CharacterDescription}><span>Filmes:</span> Monstros S.A.</p>       
        </div>
        </div>
       </Card>

       <Card className={styles.CharacterDetails}>
        <div className={styles.InfoBox}>
            <h2 className={styles.InfoTitle}>Informações do Personagem</h2>
            <div className={styles.InfoGrid}>
                <div className={styles.InfoItem}>
                    <span className={styles.InfoLabel}>Nome:</span>
                    <span className={styles.InfoValue}>Mike Wazowski</span>
                </div>
                <div className={styles.InfoItem}>
                    <span className={styles.InfoLabel}>Filme:</span>
                    <span className={styles.InfoValue}>Monstros S.A.</span>
                </div>
                <div className={styles.InfoItem}>
                    <span className={styles.InfoLabel}>Ano:</span>
                    <span className={styles.InfoValue}>2001</span>
                </div>
                <div className={styles.InfoItem}>
                    <span className={styles.InfoLabel}>Diretor:</span>
                    <span className={styles.InfoValue}>Pete Docter</span>
                </div>
                <div className={styles.InfoItem}>
                    <span className={styles.InfoLabel}>Gênero:</span>
                    <span className={styles.InfoValue}>Animação, Comédia</span>
                </div>
                <div className={styles.InfoItem}>
                    <span className={styles.InfoLabel}>Dublador:</span>
                    <span className={styles.InfoValue}>Billy Crystal</span>
                </div>
            </div>
        </div>
       </Card>
    </section>
    </main>
    )
}
