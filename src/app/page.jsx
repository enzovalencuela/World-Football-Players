"use client";

import React, { useMemo, useState } from "react";
import { jogadores } from "../data/jogadores";
import { tecnicos } from "../data/tecnicos";
import { selecoes } from "../data/selecoes";
import { clubes } from "../data/clubes";
import CardJogador from "../components/CardJogador";
import CardTecnico from "../components/CardTecnico";
import CardClubes from "../components/CardClubes";
import CardSelecao from "../components/CardSelecao";
import Loading from "../components/Loading";
import { processarTitulosDoJogador } from "../utils/ProcessarTitulos";

const FILTRO_PADRAO = "JOGADORES";
const FILTRO_TECNICOS = "TECNICOS";
const FILTRO_CLUBES = "CLUBES";
const FILTRO_SELECOES = "SELECOES";
const ITENS_POR_CARGA = 20;

const filtros = [
  { nome: "Jogadores", termo: FILTRO_PADRAO },
  { nome: "Técnicos", termo: FILTRO_TECNICOS },
  { nome: "Clubes", termo: FILTRO_CLUBES },
  { nome: "Seleções", termo: FILTRO_SELECOES },
];

export default function HomePage() {
  const [termoPesquisa, setTermoPesquisa] = useState("");
  const [textoInput, setTextoInput] = useState("");
  const [categoriaAtiva, setCategoriaAtiva] = useState(FILTRO_PADRAO);
  const [buscaAcionada, setBuscaAcionada] = useState(false);
  const [loading, setLoading] = useState(false);
  const [itensVisiveis, setItensVisiveis] = useState(ITENS_POR_CARGA);

  if (loading) {
    setTimeout(() => setLoading(false), 500);
  }

  const dadosAtivos = useMemo(() => {
    switch (categoriaAtiva) {
      case FILTRO_TECNICOS:
        return tecnicos;
      case FILTRO_CLUBES:
        return clubes;
      case FILTRO_SELECOES:
        return selecoes;
      case FILTRO_PADRAO:
      default:
        return jogadores.map((jogador) => ({
          ...jogador,
          nomesTitulosCompletos: [
            ...(jogador.titulosIndividuais || []).map((t) => t.nome),
            ...(processarTitulosDoJogador(jogador) || []).map((t) => t.nome),
          ]
            .join(" ")
            .toLowerCase(),
        }));
    }
  }, [categoriaAtiva]);

  const handleInputTextChange = (e) => {
    setTextoInput(e.target.value);
    setBuscaAcionada(false);
    setItensVisiveis(ITENS_POR_CARGA);
  };

  const handleSuggestionClick = (nomeDoItem) => {
    setTextoInput(nomeDoItem);
    setTermoPesquisa(nomeDoItem);
    setLoading(true);
    setBuscaAcionada(true);
    setItensVisiveis(ITENS_POR_CARGA);
  };

  // --- Lógica de Sugestões Otimizada ---
  const sugestoes = useMemo(() => {
    if (!textoInput || textoInput.length < 2 || buscaAcionada) return [];
    const termo = textoInput.toLowerCase();

    // Pré-calcula nomes de clubes/seleções que possuem a tag pesquisada
    const clubesComTag = clubes
      .filter((c) => c.tags?.some((t) => t.toLowerCase().includes(termo)))
      .map((c) => c.nome);
    const selecoesComTag = selecoes
      .filter((s) => s.tags?.some((t) => t.toLowerCase().includes(termo)))
      .map((s) => s.nome);

    return dadosAtivos
      .filter((item) => {
        const termoMatch = (field) => field?.toLowerCase().includes(termo);

        if (
          termoMatch(item.nome) ||
          termoMatch(item.nomeCompleto) ||
          termoMatch(item.nacionalidade)
        )
          return true;
        if (item.tags?.some((tag) => tag.toLowerCase().includes(termo)))
          return true;

        // Busca nas tags relacionadas
        if (categoriaAtiva === FILTRO_PADRAO) {
          if (item.clubes?.some((c) => clubesComTag.includes(c.nome)))
            return true;
          if (item.selecao && selecoesComTag.includes(item.selecao.nome))
            return true;
        }

        if (item.clubes?.some((c) => termoMatch(c.nome))) return true;
        if (item.selecao && termoMatch(item.selecao.nome)) return true;

        return false;
      })
      .slice(0, 5);
  }, [textoInput, dadosAtivos, buscaAcionada, categoriaAtiva]);

  // --- Lógica de Resultados Finais Otimizada ---
  const resultadosFinais = useMemo(() => {
    if (!buscaAcionada) return [];
    const termo = termoPesquisa.toLowerCase();

    const clubesComTag = clubes
      .filter((c) => c.tags?.some((t) => t.toLowerCase().includes(termo)))
      .map((c) => c.nome);
    const selecoesComTag = selecoes
      .filter((s) => s.tags?.some((t) => t.toLowerCase().includes(termo)))
      .map((s) => s.nome);

    const filtrados = dadosAtivos.filter((item) => {
      const termoMatch = (field) => field?.toLowerCase().includes(termo);

      if (
        termoMatch(item.nome) ||
        termoMatch(item.nomeCompleto) ||
        termoMatch(item.nacionalidade) ||
        termoMatch(item.posicao)
      )
        return true;
      if (item.tags?.some((tag) => tag.toLowerCase().includes(termo)))
        return true;

      if (categoriaAtiva === FILTRO_PADRAO) {
        if (item.clubes?.some((c) => clubesComTag.includes(c.nome)))
          return true;
        if (item.selecao && selecoesComTag.includes(item.selecao.nome))
          return true;
        if (item.nomesTitulosCompletos?.includes(termo)) return true;
      }

      if (item.clubes?.some((c) => termoMatch(c.nome))) return true;
      if (item.selecao && termoMatch(item.selecao.nome)) return true;

      const titulos = [
        ...(item.titulosIndividuais || []),
        ...(item.titulos || []),
      ];
      if (titulos.some((t) => termoMatch(t.nome))) return true;

      return false;
    });

    if (categoriaAtiva === FILTRO_PADRAO) {
      return filtrados.sort((a, b) => {
        const nomeA = a.nome.toLowerCase();
        const nomeB = b.nome.toLowerCase();

        if (nomeA === termo && nomeB !== termo) return -1;
        if (nomeB === termo && nomeA !== termo) return 1;

        // Ordenação por quem joga no time pesquisado (Presente)
        const isPresente = (jogador) =>
          jogador.clubes?.some(
            (c) =>
              (c.nome.toLowerCase().includes(termo) ||
                clubesComTag.includes(c.nome)) &&
              c.periodo.fim === "Presente"
          );

        const playingA = isPresente(a);
        const playingB = isPresente(b);

        if (playingA && !playingB) return -1;
        if (!playingA && playingB) return 1;

        return a.nome.localeCompare(b.nome);
      });
    }

    return filtrados;
  }, [termoPesquisa, dadosAtivos, categoriaAtiva, buscaAcionada]);

  // --- Funções de interface (Mostrar mais e Renderização) ---
  const handleMostrarMais = () => {
    setLoading(true);
    setTimeout(() => {
      setItensVisiveis((prev) => prev + ITENS_POR_CARGA);
      setLoading(false);
    }, 300);
  };

  const renderizarCards = () => {
    const dadosParaRenderizar = resultadosFinais.slice(0, itensVisiveis);
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
      <Card key={item.nome} {...{ [prop]: item }} />
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setBuscaAcionada(true);
    setItensVisiveis(ITENS_POR_CARGA);
    setTermoPesquisa(textoInput);
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
                placeholder="digite o atleta, equipe ou país"
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
                        key={item.nome}
                        onClick={() => handleSuggestionClick(item.nome)}
                        className="suggestion-item"
                      >
                        <img
                          src={
                            item.imagem ||
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
              {filtros.map((f, i) => (
                <li key={i}>
                  <button
                    className={`btn-nav ${
                      categoriaAtiva === f.termo ? "active" : ""
                    }`}
                    onClick={() => {
                      setLoading(true);
                      setCategoriaAtiva(f.termo);
                      setBuscaAcionada(true);
                      setTermoPesquisa("");
                    }}
                  >
                    {f.nome}
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
                  Mostrar mais{" "}
                  <span className="fa-solid fa-chevron-down"></span>
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
