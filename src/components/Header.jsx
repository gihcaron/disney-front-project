"use client"

import React from "react";
import styles from "./Header.module.css"

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <h1 className={styles.title} onClick={() => window.location.href = "/"}> <span className="text-blue-700">Caron</span>.</h1>
            </div>
            <div className={styles.navigation}>
                <nav className={styles.nav}>
                    <ul className={styles.list}>
                        <li className={styles.item}><a href="/">Home</a></li>
                        <li className={styles.item}><a href="/api">Conheça a API</a></li>
                        <li className={styles.item}><a href="/personagens">Personagens</a></li>
                        <div className={styles.contatoContainer}>
                        <li className={styles.contato}><a href="/contato">Contato</a></li>
                        </div>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

