"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import CardJogador from "../components/CardJogador";
import CardClubes from "../components/CardClubes";
import CardSelecao from "../components/CardSelecao";
import CardTecnico from "../components/CardTecnico";
import Loading from "../components/Loading";

const FILTRO_PADRAO = "JOGADORES";
const FILTRO_TECNICOS = "TECNICOS";
const FILTRO_CLUBES = "CLUBES";
const FILTRO_SELECOES = "SELECOES";
const ITENS_POR_CARGA = 20;

const filtros = [
  { nome: "Jogadores", termo: FILTRO_PADRAO },
  { nome: "Tecnicos", termo: FILTRO_TECNICOS },
  { nome: "Clubes", termo: FILTRO_CLUBES },
  { nome: "Selecoes", termo: FILTRO_SELECOES },
];

const endpoints = {
  [FILTRO_PADRAO]: "/api/jogadores",
  [FILTRO_TECNICOS]: "/api/tecnicos",
  [FILTRO_CLUBES]: "/api/clubes",
  [FILTRO_SELECOES]: "/api/selecoes",
};

export default function HomePage() {
  const [termoPesquisa, setTermoPesquisa] = useState("");
  const [textoInput, setTextoInput] = useState("");
  const [categoriaAtiva, setCategoriaAtiva] = useState(FILTRO_PADRAO);
  const [buscaAcionada, setBuscaAcionada] = useState(false);
  const [loading, setLoading] = useState(false);
  const [itensVisiveis, setItensVisiveis] = useState(ITENS_POR_CARGA);
  const [resultadosPorCategoria, setResultadosPorCategoria] = useState({
    [FILTRO_PADRAO]: [],
    [FILTRO_TECNICOS]: [],
    [FILTRO_CLUBES]: [],
    [FILTRO_SELECOES]: [],
  });
  const [sugestoesPorCategoria, setSugestoesPorCategoria] = useState({
    [FILTRO_PADRAO]: [],
    [FILTRO_TECNICOS]: [],
    [FILTRO_CLUBES]: [],
    [FILTRO_SELECOES]: [],
  });
  const [erroBusca, setErroBusca] = useState("");
  const loadingTimeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }
    };
  }, []);

  const pararLoading = () => {
    if (loadingTimeoutRef.current) {
      clearTimeout(loadingTimeoutRef.current);
    }

    setLoading(false);
  };

  const fetchCategoria = async ({
    categoria,
    termo,
    mode,
    signal,
  }) => {
    const response = await fetch(
      `${endpoints[categoria]}?mode=${mode}&q=${encodeURIComponent(termo)}`,
      { signal }
    );

    if (!response.ok) {
      throw new Error("Falha ao carregar dados.");
    }

    const data = await response.json();
    return data.items || [];
  };

  useEffect(() => {
    if (!textoInput || textoInput.length < 2 || buscaAcionada) {
      setSugestoesPorCategoria((current) => ({
        ...current,
        [categoriaAtiva]: [],
      }));
      return;
    }

    const controller = new AbortController();

    async function carregarSugestoes() {
      try {
        setLoading(true);
        setErroBusca("");

        const items = await fetchCategoria({
          categoria: categoriaAtiva,
          termo: textoInput,
          mode: "suggestions",
          signal: controller.signal,
        });

        setSugestoesPorCategoria((current) => ({
          ...current,
          [categoriaAtiva]: items,
        }));
      } catch (error) {
        if (error.name !== "AbortError") {
          setErroBusca("Nao foi possivel carregar as sugestoes.");
          setSugestoesPorCategoria((current) => ({
            ...current,
            [categoriaAtiva]: [],
          }));
        }
      } finally {
        if (!controller.signal.aborted) {
          pararLoading();
        }
      }
    }

    carregarSugestoes();

    return () => {
      controller.abort();
    };
  }, [buscaAcionada, categoriaAtiva, textoInput]);

  useEffect(() => {
    if (!buscaAcionada) {
      return;
    }

    const controller = new AbortController();

    async function carregarResultados() {
      try {
        setLoading(true);
        setErroBusca("");

        const items = await fetchCategoria({
          categoria: categoriaAtiva,
          termo: termoPesquisa,
          mode: "search",
          signal: controller.signal,
        });

        setResultadosPorCategoria((current) => ({
          ...current,
          [categoriaAtiva]: items,
        }));
      } catch (error) {
        if (error.name !== "AbortError") {
          setErroBusca("Nao foi possivel carregar os dados.");
          setResultadosPorCategoria((current) => ({
            ...current,
            [categoriaAtiva]: [],
          }));
        }
      } finally {
        if (!controller.signal.aborted) {
          pararLoading();
        }
      }
    }

    carregarResultados();

    return () => {
      controller.abort();
    };
  }, [buscaAcionada, categoriaAtiva, termoPesquisa]);

  const handleInputTextChange = (e) => {
    setTextoInput(e.target.value);
    setBuscaAcionada(false);
    setItensVisiveis(ITENS_POR_CARGA);
  };

  const handleSuggestionClick = (nomeDoItem) => {
    setTextoInput(nomeDoItem);
    setTermoPesquisa(nomeDoItem);
    setBuscaAcionada(true);
    setItensVisiveis(ITENS_POR_CARGA);
    setLoading(true);
  };

  const sugestoes = useMemo(
    () => sugestoesPorCategoria[categoriaAtiva] || [],
    [categoriaAtiva, sugestoesPorCategoria]
  );

  const resultadosFinais = useMemo(
    () => resultadosPorCategoria[categoriaAtiva] || [],
    [categoriaAtiva, resultadosPorCategoria]
  );

  const handleMostrarMais = () => {
    setLoading(true);
    setTimeout(() => {
      setItensVisiveis((prev) => prev + ITENS_POR_CARGA);
      setLoading(false);
    }, 300);
  };

  const renderizarCards = () => {
    const dadosParaRenderizar = resultadosFinais.slice(0, itensVisiveis);

    if (erroBusca) {
      return <p className="sem-resultados">{erroBusca}</p>;
    }

    if (resultadosFinais.length === 0 && buscaAcionada) {
      return (
        <p className="sem-resultados">
          Nenhum resultado encontrado para "{termoPesquisa}".
        </p>
      );
    }

    const config = {
      [FILTRO_TECNICOS]: { component: CardTecnico, prop: "tecnico" },
      [FILTRO_CLUBES]: { component: CardClubes, prop: "clube" },
      [FILTRO_SELECOES]: { component: CardSelecao, prop: "selecao" },
      [FILTRO_PADRAO]: { component: CardJogador, prop: "jogador" },
    };

    const { component: Card, prop } =
      config[categoriaAtiva] || config[FILTRO_PADRAO];

    return dadosParaRenderizar.map((item) => (
      <Card key={item.nomeCompleto || item.nome} {...{ [prop]: item }} />
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBuscaAcionada(true);
    setItensVisiveis(ITENS_POR_CARGA);
    setTermoPesquisa(textoInput);
    setLoading(true);
  };

  const handleFiltroClick = (termoFiltro) => {
    setCategoriaAtiva(termoFiltro);
    setBuscaAcionada(true);
    setTermoPesquisa("");
    setTextoInput("");
    setItensVisiveis(ITENS_POR_CARGA);
    setErroBusca("");
    setLoading(true);
  };

  return (
    <header className="pagina">
      <div className="div-resultados">
        <section id="home">
          <h1>Tudo sobre Futebol</h1>
          <form className="barra-pesquisa" onSubmit={handleSubmit}>
            <div className="search-input-wrapper">
              <input
                type="text"
                placeholder="digite o atleta, equipe ou pais"
                className="search-input-field"
                value={textoInput}
                onChange={handleInputTextChange}
                onFocus={() => setBuscaAcionada(false)}
              />
              {textoInput.length > 1 &&
                sugestoes.length > 0 &&
                !buscaAcionada && (
                  <ul className="suggestion-dropdown">
                    {sugestoes.map((item) => (
                      <li
                        key={item.nomeCompleto || item.nome}
                        onClick={() => handleSuggestionClick(item.nome)}
                        className="suggestion-item"
                      >
                        <img
                          src={
                            item.imagem ||
                            item.img ||
                            item.logo ||
                            "/img__fundos/default.png"
                          }
                          alt={item.nome}
                          className="suggestion-image"
                        />
                        <div className="suggestion-text-container">
                          <span className="suggestion-name">{item.nome}</span>
                          <span className="suggestion-category">
                            {categoriaAtiva.toLowerCase()}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
            </div>
            <button className="pagina__btn" type="submit">
              {textoInput === "" ? "Pesquisar todos" : "Pesquisar"}
            </button>
          </form>
          <div className="btn-filtros">
            <ul className="ul-filtros">
              {filtros.map((filtro) => (
                <li key={filtro.termo}>
                  <button
                    className={`btn-nav ${
                      categoriaAtiva === filtro.termo ? "active" : ""
                    }`}
                    onClick={() => handleFiltroClick(filtro.termo)}
                  >
                    {filtro.nome}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <main className="resultados-pesquisa">
          {loading && <Loading />}
          {buscaAcionada ? (
            <>
              {renderizarCards()}
              {itensVisiveis < resultadosFinais.length && (
                <button
                  className="btn-mostrar-mais"
                  onClick={handleMostrarMais}
                  disabled={loading}
                >
                  Mostrar mais <span className="fa-solid fa-chevron-down"></span>
                </button>
              )}
            </>
          ) : (
            <>
              <p id="p-resultados">
                Pesquise por jogadores e clubes mundiais sem nenhuma
                dificuldade.
              </p>
              <img
                id="img-resultados"
                src="/img__fundos/Fundo_messi.png"
                alt="Messi"
              />
            </>
          )}
        </main>

        <footer>
          <p>2025 - Atletas do Mundo. Todos direitos reservados</p>
        </footer>
      </div>
    </header>
  );
}
