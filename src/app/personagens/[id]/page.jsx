"use client";
import { useRouter, useParams } from "next/navigation"
import Link from "next/link";
import axios from "axios";
import { Card, Carousel, Pagination, Skeleton, Input } from "antd";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import {toast, ToastContainer } from 'react-toastify';

// Componentes
import Header from "../../../components/Header";
import CardCharacter from "../../../components/CardCharacter";
import CardDetails from "../../../components/CardDetails";
import ButtonUp from "../../../components/ButtonUp";
import Footer from "../../../components/Footer";

export default function Personagens() {

    const {id} = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    // Teste com Id
    console.log(id);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.disneyapi.dev/character/${id}`
        );
        console.log("Resposta da API:", response.data); 
        setData(response.data);
        toast.success(`Personagem ${response.data.data?.name} carregado com sucesso!`);
      } catch (error) {
        console.error("Erro ao buscar personagens:", error);
        toast.error(`Personagem ${response.data.data?.name} não encontrado!`);
      } finally {
        setLoading(false);
      }
    };
    fetchCharacters();
  }, [id]);

    return(
    <main className={styles.main}>
    <section className={styles.SectionHeader}>
       <Header /> 
    </section>
    

    <section className={styles.CharacterSection}>
        <div>
        {
            data && (
                <CardCharacter 
                    id={data.data?._id}
                    imageUrl={data.data?.imageUrl || "/images/userPadrao.jpg"}
                    Alt={data.data?.name || "Personagem Disney"}
                    name={data.data?.name}
                    films={data.data?.films?.join(", ") || "Sem filmes"}
                />
             )
            
        }
           

        </div>

        <CardDetails 
            tvShows={data?.data?.tvShows?.join(", ") || "Nenhuma série"}
            shortFilms={data?.data?.shortFilms?.join(", ") || "Sem curtas"}
            videoGames={data?.data?.videoGames?.join(", ") || "Nenhum jogo"}
            parkAttractions={data?.data?.parkAttractions?.join(", ") || "Nenhuma atração"}
            allies={data?.data?.allies?.join(", ") || "Não informado"}
            enemies={data?.data?.enemies?.join(", ") || "Não informado"}
        />
    </section>

    <section className={styles.SectionButtons}>
        <div className={styles.ButtonsContainer}>
            <Link href="/personagens" className={styles.ButtonLink}>
                <button className={styles.Button}>
                    Página Anterior
                </button>
            </Link>
            <Link href="/" className={styles.ButtonLink}>
                <button className={styles.Button}>
                    Voltar a Home
                </button>
            </Link>
        </div>
    </section>

    <ButtonUp />

    <Footer />

    <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"/>
    </main>
    )
}
