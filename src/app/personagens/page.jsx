"use client";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Card, Carousel, Pagination, Skeleton, Input } from "antd";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import {toast, ToastContainer } from 'react-toastify';


import styles from "./style.module.css";
import Image from "next/image";
import Footer from "../../components/Footer";

// Componentes
import Header from "../../components/Header";
import ButtonUp from "../../components/ButtonUp";
export default function Personagens() {
  const [data, setData] = useState(null);
  const [curtidos, setCurtidos] = useState({});
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchPersonagens = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.disneyapi.dev/character?page=${page}`
        );
        setData(response.data);
        toast.success("Personagens carregados com sucesso!");
      } catch (error) {
        toast.error("Erro ao buscar personagens");
        console.error("Erro ao buscar personagens:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPersonagens();
  }, [page]);

  const handleSearch = async () => {
    const name = search.trim();
    if (!name) return;
    
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.disneyapi.dev/character?name=${name}`
      );
      setData(response.data);
    } catch (error) {
      console.error("Erro ao buscar personagens:", error);
    } finally {
      setLoading(false);
    }
  };

  const cardPerPage = 3;
  const paginatedCharacters = () => {
    const start = (page - 1) * cardPerPage;
    return data?.data.slice(start, start + cardPerPage) || [];
  };

  const handleCurtir = (_id) => {
    setCurtidos((prev) => ({
      ...prev,
      [_id]: !prev[_id],
    }));
  };

  const contentStyle = {
    height: "340px",
    color: "#fff",
    lineHeight: "200px",
    textAlign: "center",
  };

  return (
    <main className={styles.main}>
      <Header />
      <section className={styles.banner}>{/* Banner aqui */}</section>
      <section className={styles.personagens}>
        <div className={styles.ContentPersonagens}>
          <h2 className={styles.titlePersonagens}>Personagens</h2>
          <p className={styles.descriptionPersonagens}>
            Explore os personagens da Disney
          </p>

          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Pesquisar personagens..."
              className={styles.searchInput}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className={styles.searchButton} onClick={handleSearch}>Buscar</button>
          </div>
        </div>
        <div className={styles.cardsContainer}>
          {loading && <p>Carregando...</p>}
          {paginatedCharacters().map((character) => (
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
                  <p
                    onClick={() => router.push(`/personagens/${character._id}`)}
                    className={styles.MoreDetails}
                  >
                    Ver Detalhes
                  </p>
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
        <Pagination
          className={styles.pagination}
          current={page}
          pageSize={cardPerPage}
          total={data?.data?.length || 0}
          onChange={setPage}
        />
      </section>

      <ButtonUp />
      
      <Footer />

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
    </main>
  );
}
