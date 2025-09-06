// Atalho raface

"use client"

import React from "react";
import styles from "./style.module.css";
import Image from "next/image";

// Componentes
import Header from "../../components/Header";
import InfoCards from "../../components/InfoCards";
import ButtonUp from "../../components/ButtonUp";

export default function Api() {
  return (
    <main className="bg-gray-100">
      <Header />
      <section className={styles.Section}>
        <div className={styles.SectionBanner}>
            <div className={styles.BannerContent}>
              <div className={styles.InfoBanner}>
                <p className={styles.BannerTitle}>Filme Dory • </p>
                <p className={styles.BannerTitle}>6+ • </p>
                <p className={styles.BannerTitle}>1h 37m • </p>
                <p className={styles.BannerTitle}>2020</p>
              </div>

              <h1 className={styles.BannerText}>Explore a API</h1>
              <p className={styles.BannerSubText}>A API da Disney é uma API RESTful e GraphQL não oficial que fornece informações sobre personagens, filmes e outros conteúdos da Disney. </p>
            <div>
              <div className={styles.PlayButtonContainer}>
                <button className={styles.PlayButton}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
                  </svg>
                </button>
                <span className={styles.ExploreText}>Explore mais</span>
              </div>
            </div>
            </div>
        </div>
      </section>
      <section className={styles.SectionContent}>
        <div className={styles.ApiTitle}>
          <h2 className={styles.ApiTitleText}>API da Disney</h2>
          <h2 className={styles.ApiTitleSubTitle}>Um universo de possibilidades!</h2>
          <p className={styles.ApiDescription}>Conheça esta API incrível que traz o mundo da Disney para suas aplicações!</p>
        </div>

        <div className={styles.ApiContent}>
          <InfoCards 
            HeaderImage="/images/Carros.jpg"
            title="Conheça a API da Disney"
            description="A API da Disney é uma API RESTful e GraphQL baseada em personagens da Disney. "
            WindowUrl="https://disneyapi.dev/"
            ButtonTitle="Visite o site oficial"
          />
          <InfoCards 
            HeaderImage="/images/Monstros.jpg"
            title="Possibilidade de Uso"
            description="Usando esta API, é possível obter informações como, catálogo de filmes, descrição,  sobre os personagens da Disney."
            WindowUrl="https://api.disneyapi.dev/character"
            ButtonTitle="Pegar personagens"
          />
          <InfoCards 
            HeaderImage="/images/Divertidamente.jpg"
            title="Mais Informações"
            description="Esta API não oficial, foi criado por uma Engenheira de SoftWare e fã da disney chamada Manu Castrillon."
            WindowUrl="https://github.com/manuCastrillonM/"
            ButtonTitle="Conheça a Criadora"
          />
        </div>
      </section>

      <ButtonUp />
    </main>
  );
}
