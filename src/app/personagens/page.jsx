"use client"

import React from "react";
import axios from "axios";
import {Card} from "antd";
import { useEffect, useState } from "react";

import styles from "./style.module.css";
import Image from "next/image";

// Componentes
import Header from "../../components/Header";

export default function Personagens() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const FetchPersonagens = async () => {
            try{
                const response = await axios.get("https://api.disneyapi.dev/character");
                setData(response.data);
                console.log(response.data)

            }
            catch(error){
                console.error("Erro ao buscar personagens:", error);
            }
            finally {
                setLoading(false);
            }
            
        }
        FetchPersonagens();
    }, []);


  return (
    <main>
        <Header />
    <section className={styles.personagens}>
       <div>
  {loading && <p>Carregando...</p>}
        {data?.data?.map((character) => (
          <Card
            key={character.id}
            hoverable
          >
            <Card.Meta
            title={character.name}
            description={character.films?.join(", ") || "Sem filmes"}
            />
          </Card>
          
        ))}

       </div>
    </section>
    </main>
  )
}
