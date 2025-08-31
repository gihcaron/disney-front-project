"use client"

import React from "react";
import styles from "./Header.module.css"
import Link from "next/link";

const Links = [

    {name: "homeee",
    path: "/"
    },

    {name: "Conheça a API",
    path: "/api"
    },

    {name: "personagens",
    path: "/personagens"
    },
];

export default function Header() {
    return (
        <header>
            <div className={styles.logo}>
                <h1>Caron.</h1>
            </div>
            <nav>
                <ul>
                    {Links.map ((Link, index) => {
                        <Link href={Link.path} key={index}>{Link.name}</Link>
                    })}
                </ul>
            </nav>
        </header>
    );
}

