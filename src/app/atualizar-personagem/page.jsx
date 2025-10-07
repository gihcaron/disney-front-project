"use client";
import styles from "./style.module.css";
import { useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ButtonUp from "../../components/ButtonUp";

export default function AtualizarPersonagem() {
    const [characterId, setCharacterId] = useState("");
    const [form, setForm] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const buscarPersonagem = async () => {
        if (!characterId) return;
        setLoading(true);
        setError(false);
        try {
            const { data } = await axios.get(
                `https://api.disneyapi.dev/character/${characterId}`
            );
            const personagemApi = data.data;
            const salvoLocal = localStorage.getItem(`personagem-${characterId}`);
            if (salvoLocal) {
                setForm(JSON.parse(salvoLocal));
            } else {
                setForm(personagemApi);
            }
        } catch {
            setError(true);
        } finally {
            setLoading(false);
        }
    };
    const editarPersonagem = () => {
        localStorage.setItem(`personagem-${characterId}`, JSON.stringify(form));
        setSuccess(true);
        setTimeout(() => setSuccess(false), 2000);
    };

    return (
        <main className={styles.main}>
            <Header />
            <div className={styles.mainContainer}>
                <div className={styles.putContainer}>
                    <h1>Editar Personagem</h1>
                    <div>
                        <input
                            type="number"
                            value={characterId}
                            onChange={(e) => setCharacterId(e.target.value)}
                            placeholder="ID do personagem"
                        />
                        <button onClick={buscarPersonagem} disabled={loading}>
                            {loading ? "Buscando..." : "Buscar"}
                        </button>
                    </div>
                    {form.name && (
                        <div>
                            <h2>Editando Personagem #{characterId}</h2>
                            <input
                                type="text"
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                placeholder="Nome"
                            />

                            <p className={styles.EditarText}>Editar Link da Imagem</p>

                            <input
                                type="text"
                                value={form.imageUrl || ""}
                                onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
                                placeholder="URL da Imagem"
                            />

                            <p className={styles.EditarText}>Editar Séries</p>

                            <input
                                type="text"
                                value={form.tvShows?.join(", ") || ""}
                                onChange={(e) =>
                                    setForm({ ...form, tvShows: e.target.value.split(",").map(s => s.trim()) })
                                }
                                placeholder="Séries de TV (separadas por vírgula)"
                            />

                            <p className={styles.EditarText}>Editar Video Games</p>

                            <input
                                type="text"
                                value={form.videoGames?.join(", ") || ""}
                                onChange={(e) =>
                                    setForm({ ...form, videoGames: e.target.value.split(",").map(s => s.trim()) })
                                }
                                placeholder="Jogos de Vídeo (separados por vírgula)"
                            />

                            <p className={styles.EditarText}>Editar Filmes</p>

                            <input
                                type="text"
                                value={form.shortFilms?.join(", ") || ""}
                                onChange={(e) =>
                                    setForm({ ...form, shortFilms: e.target.value.split(",").map(s => s.trim()) })
                                }
                                placeholder="Curta-metragens (separados por vírgula)"
                            />

                            <p className={styles.EditarText}>Editar Relações</p>

                            <input
                                type="text"
                                value={form.allies?.join(", ") || ""}
                                onChange={(e) =>
                                    setForm({ ...form, allies: e.target.value.split(",").map(s => s.trim()) })
                                }
                                placeholder="Aliados (separados por vírgula)"
                            />

                            <p className={styles.EditarText}>Editar Relações</p>

                            <input
                                type="text"
                                value={form.enemies?.join(", ") || ""}
                                onChange={(e) =>
                                    setForm({ ...form, enemies: e.target.value.split(",").map(s => s.trim()) })
                                }
                                placeholder="Inimigos (separados por vírgula)"
                            />

                            <p className={styles.EditarText}>Editar Atrações do Parque</p>

                            <input
                                type="text"
                                value={form.parkAttractions?.join(", ") || ""}
                                onChange={(e) =>
                                    setForm({ ...form, parkAttractions: e.target.value.split(",").map(s => s.trim()) })
                                }
                                placeholder="Atrações do Parque (separadas por vírgula)"
                            />


                            <br />
                            <button onClick={editarPersonagem} disabled={loading || !form.name?.trim()}>
                                Salvar Alterações (local)
                            </button>
                        </div>
                    )}
                    {error && <p style={{ color: "red" }}>❌ Erro na operação</p>}
                    {success && <p style={{ color: "green" }}>✅ Personagem editado localmente!</p>}
                </div>
            </div>
            <Footer />
            <ButtonUp />
        </main>
    );
}
