import React from "react";
import styles from "../styles/not-found.module.css";
import Link from "next/link";
import Image from "next/image";

const NotFound = () => {
  return (
    <main className={styles.main}>
      <section className={styles.SectionHeader}>
        <Image
          src="/images/error404.jpeg"
          alt="Página Não Encontrada"
          width={300}
          height={300}
          className={styles.Image}
          priority
        />
        <h1 className={styles.Title}> Erro 404 </h1>
        <h2 className={styles.Subtitle}> Página Não Encontrada </h2>
        <p className={styles.Description}>

          A página que você está procurando não existe ou foi movida.{" "}
        </p>
      </section>
      <section className={styles.SectionButtons}>
        <div className={styles.ButtonsContainer}>
          <Link href="/personagens" className={styles.ButtonLink}>
            <button className={styles.Button}>Página Anterior</button>
          </Link>
          <Link href="/" className={styles.ButtonLink}>
            <button className={styles.Button}>Voltar a Home</button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
