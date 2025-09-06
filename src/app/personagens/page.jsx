"use client"
import React, { use } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import {Card} from "antd";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

import styles from "./style.module.css";
import Image from "next/image";

// Componentes
import Header from "../../components/Header";

export default function Personagens() {

    const [data, setData] = useState(null);
    const [curtidos, setCurtidos] = useState({});
    const router = useRouter();
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

    const handleCurtir = (_id) => {
      setCurtidos((prev) => ({
        ...prev,
        [_id]: !prev[_id]
      }))
    }


  return (
    <main className={styles.main}>
        <Header />
      <section className={styles.banner}>
        <h1 className={styles.title}>Conheça os Personagens</h1>
      </section>
    <section className={styles.personagens}>
       <div className={styles.cardsContainer}>
  {loading && <p>Carregando...</p>}
        {data?.data?.map((character) => (
          <Card
            key={character._id}
            className={styles.card}
            hoverable
            cover={
                <Image
                    alt={character.name}
                    className={styles.image}
                    src={character.imageUrl || "/images/userPadrao.jpg"}
                    width={150}
                    height={150}
                />
            }
          >
            <Card.Meta
            title={character.name}
            description={character.films?.join(", ") || "Sem filmes"}

            />
        <div className={styles.detailsContainer}>
        <div className={styles.details}>
            <p onClick={() => router.push(`/character/${character._id}`)} className={styles.MoreDetails}>Ver Detalhes</p>
        </div>
         <div className={styles.heart}>
            <Heart
              size={28}
              color={curtidos[character._id] ? "#1d4ed8" : "black"}
              fill={curtidos[character._id] ? "#1d4ed8" : "none"}
              style={{ cursor: "pointer" }}
              aria-label="Curtir"
              onClick={() => handleCurtir(character._id)}
            />
         </div>
        </div>
          </Card>
          
        ))}

       </div>
    </section>
    </main>
  )
}
