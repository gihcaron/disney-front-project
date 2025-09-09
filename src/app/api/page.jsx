// Atalho raface

"use client";

import React from "react";
import styles from "./style.module.css";
import Image from "next/image";

// Componentes
import Header from "../../components/Header";
import InfoCards from "../../components/InfoCards";
import ButtonUp from "../../components/ButtonUp";
import Footer from "../../components/Footer";

export default function Api() {
  return (
    <main className="bg-gray-100">
      <Header />
      <section className={styles.SectionHeader}>


        </section>
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
            <p className={styles.BannerSubText}>
              A API da Disney é uma API RESTful e GraphQL não oficial que
              fornece informações sobre personagens, filmes e outros conteúdos
              da Disney.{" "}
            </p>
            <div>
              <div className={styles.PlayButtonContainer}>
                <button className={styles.PlayButton}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
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
          <h2 className={styles.ApiTitleSubTitle}>
            Um universo de possibilidades!
          </h2>
          <p className={styles.ApiDescription}>
            Conheça esta API incrível que traz o mundo da Disney para suas
            aplicações!
          </p>
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
            description="Usando esta API, é possível obter informações como filmes,jogos e atrações  sobre os personagens. Não é possível fazer alterações ou adicionar novos dados."
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


      <section className={styles.SectionUsageinProject}>
        <h2 className={styles.ApiTitleText}>Uso no Projeto</h2>
        <p className={styles.ApiDescription}>
          Confira abaixo os endpoints e lista de atributos utilizados.{" "}
        </p>

        <div className={styles.UsageContainer}>
          <div className={styles.UsageBox}>
            <h3 className={styles.UsageTitle}>Endpoints Utilizados</h3>
            <ul className={styles.EndpointList}>
              <p className={styles.EndPointDescription}>
                {" "}
                1. Endpoint para renderizar a lista de personagens e páginas no campo para personagens.{" "}
              </p>
              <li className={styles.EndpointItem}>
                https://api.disneyapi.dev/character?page=${"page"}
              </li>
              <p className={styles.EndPointDescription}>
                {" "}
                2. Endpoint para exibir e buscar personagens pelo nome na pagina de personagens.{" "}
              </p>
              <li className={styles.EndpointItem}>
                https://api.disneyapi.dev/character?name=${"name"}
              </li>
              <p className={styles.EndPointDescription}>
                {" "}
                3. Endpoint para exibir e buscar personagens pelo ID.{" "}
              </p>

              <li className={styles.EndpointItem}>
                https://api.disneyapi.dev/character/{"{id}"}
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.AtributosContainer}>
          <h3 className={styles.AtributosTitle}>Atributos Utilizados</h3>
          <ul className={styles.AtributosList}>
            <li className={styles.AtributosItem}>
              <span className={styles.Atributos}>id:</span> Identificador único do personagem
            </li>
            <li className={styles.AtributosItem}>
              <span className={styles.Atributos}>name:</span> Nome do personagem
            </li>
            <li className={styles.AtributosItem}>
              <span className={styles.Atributos}>films:</span> Lista de filmes em que o personagem aparece
            </li>
            <li className={styles.AtributosItem}>
              <span className={styles.Atributos}>imageUrl:</span> Exibe imagens do personagem
            </li>
            <li className={styles.AtributosItem}>
              <span className={styles.Atributos}>tvShows:</span> Lista de programas de TV em que o personagem aparece
            </li>
            <li className={styles.AtributosItem}>
              <span className={styles.Atributos}>shortFilms:</span> Lista de curtas-metragens em que o personagem aparece
            </li>
            <li className={styles.AtributosItem}>
              <span className={styles.Atributos}>videoGames:</span> Lista de videogames em que o personagem aparece
            </li>
            <li className={styles.AtributosItem}>
              <span className={styles.Atributos}>parkAttractions:</span> Lista de atrações de parques temáticos
              relacionadas ao personagem
            </li>
            <li className={styles.AtributosItem}>
              <span className={styles.Atributos}>allies:</span> Lista de aliados do personagem
            </li>
            <li className={styles.AtributosItem}>
              <span className={styles.Atributos}>enemies:</span> Lista de inimigos do personagem
            </li>
          </ul>
        </div>
      </section>

      <ButtonUp />

      <Footer />
    </main>
  );
}
