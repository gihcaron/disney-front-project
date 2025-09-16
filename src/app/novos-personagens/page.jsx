"use client";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import styles from "./styles.module.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function NovosPersnagens() {
    const [loading, setLoading] = useState(false);
    const [personagens, setPersonagens] = useState([]);
    const [form, setForm] = useState({
        id: null,
        name: "",
        films: "",
        imageUrl: "",
        allies: "",
        enemies: "",
    });
    const [error, setError] = useState(false);

    useEffect(() => {
        const localData = localStorage.getItem("personagens");
        if (localData) {
            setPersonagens(JSON.parse(localData));
        } else {
            localStorage.setItem("personagens", JSON.stringify([]));
        }
    }, []);

    const salvarStorage = (data) => {
        localStorage.setItem("personagens", JSON.stringify(data));
        setPersonagens(data);
    };

    const salvarPersonagem = () => {
        setLoading(true);
        setError(false);

        try {
            let updated;

            if (form.id) {
                updated = personagens.map((p) =>
                    p.id === form.id ? { ...form, films: form.films.split(",") } : p
                );
                toast.success("✅ Personagem atualizado!");
            } else {
                const novo = {
                    ...form,
                    id: Date.now(),
                    films: form.films ? form.films.split(",") : [],
                };
                updated = [novo, ...personagens];
                toast.success("✨ Personagem criado!");
            }

            salvarStorage(updated);

            setForm({
                id: null,
                name: "",
                films: "",
                imageUrl: "",
                allies: "",
                enemies: "",
            });
        } catch (err) {
            setError(true);
            toast.error("❌ Erro ao salvar personagem!");
        } finally {
            setLoading(false);
        }
    };

    const editarPersonagem = (id) => {
        const p = personagens.find((item) => item.id === id);
        setForm({ ...p, films: p.films.join(",") });
    };

    const deletarPersonagem = (id) => {
        const updated = personagens.filter((p) => p.id !== id);
        salvarStorage(updated);
        toast.info("🗑️ Personagem removido!");
    };

    const atualizarForm = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    return (
        <main className={styles.main}>
            <Header />

            <section className={styles.container}>
                <h2 className={styles.title}>Adicionar/Editar Personagem</h2>

                <div className={styles.formContainer}>
                    <label className={styles.formLabel}>Nome:</label>
                    <input
                        className={styles.formInput}
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={atualizarForm}
                        placeholder="Nome"
                        required
                        style={{ borderRadius: "8px", margin: "8px 0" }}
                    />
                    <br />
                    <label className={styles.formLabel}>Filmes (separados por vírgula):</label>
                    <input
                        className={styles.formInput}
                        type="text"
                        name="films"
                        value={form.films}
                        onChange={atualizarForm}
                        placeholder="Filmes (separados por vírgula)"
                        style={{ borderRadius: "8px", margin: "8px 0" }}
                    />
                    <br />
                    <label className={styles.formLabel}>URL da Imagem:</label>
                    <input
                        className={styles.formInput}
                        type="text"
                        name="imageUrl"
                        value={form.imageUrl}
                        onChange={atualizarForm}
                        placeholder="URL da Imagem"
                        style={{ borderRadius: "8px", margin: "8px 0" }}
                    />
                    <br />
                    <label className={styles.formLabel}>Aliados:</label>
                    <input
                        className={styles.formInput}
                        type="text"
                        name="allies"
                        value={form.allies}
                        onChange={atualizarForm}
                        placeholder="Aliados"
                        style={{ borderRadius: "8px", margin: "8px 0" }}
                    />
                    <br />
                    <label className={styles.formLabel}>Inimigos:</label>
                    <input
                        className={styles.formInput}
                        type="text"
                        name="enemies"
                        value={form.enemies}
                        onChange={atualizarForm}
                        placeholder="Inimigos"
                        style={{ borderRadius: "8px", margin: "8px 0" }}
                    />
                    <br />

                    <button
                        className={styles.formButton}
                        onClick={salvarPersonagem}
                        disabled={!form.name.trim() || loading}
                        style={{ backgroundColor: "#1d4ed8", color: "#fff", borderRadius: "8px", margin: "8px 0", padding: "12px 24px", fontSize: "16px" }}
                    >
                        {loading ? "Salvando..." : form.id ? "Atualizar" : "Criar"}
                    </button>
                </div>

                <div className={styles.personagensList}>
                    {personagens.length === 0 && <p className={styles.emptyMessage}>Nenhum personagem adicionado.</p>}
                    {personagens.map((p) => (
                        <div
                            key={p.id}
                            className={styles.personagemCard}
                            style={{ borderRadius: "8px", margin: "16px 0", padding: "8px" }}
                        >
                            <h3 className={styles.personagemName}>{p.name}</h3>
                            {p.imageUrl && (
                                <img
                                    className={styles.personagemImage}
                                    src={p.imageUrl}
                                    alt={p.name}
                                    width={120}
                                    height={120}
                                    style={{ borderRadius: "8px" }}
                                />
                            )}
                            <p className={styles.personagemFilms}>
                                <strong>Filmes:</strong> {p.films.join(", ")}
                            </p>
                            <p className={styles.personagemAllies}>
                                <strong>Aliados:</strong> {p.allies}
                            </p>
                            <p className={styles.personagemEnemies}>
                                <strong>Inimigos:</strong> {p.enemies}
                            </p>

                            <button
                                className={styles.editButton}
                                onClick={() => editarPersonagem(p.id)}
                                style={{ backgroundColor: "#1d4ed8", color: "#fff", borderRadius: "8px", margin: "4px", padding: "10px 20px", fontSize: "14px" }}
                            >
                                Editar
                            </button>
                            <button
                                className={styles.deleteButton}
                                onClick={() => deletarPersonagem(p.id)}
                                style={{ backgroundColor: "#1d4ed8", color: "#fff", borderRadius: "8px", margin: "4px", padding: "10px 20px", fontSize: "14px" }}
                            >
                                Excluir
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            <ToastContainer />
            <Footer />
        </main>
    );
}
