// src/app/page.js
"use client";

import React, { useMemo, useState } from "react";
import { jogadores } from "../data/jogadores";
import { tecnicos } from "../data/tecnicos";
import { selecoes } from "../data/selecoes";
import { clubes } from "../data/clubes";
import CardJogador from "../components/CardJogador";
import CardTecnico from "@/components/CardTecnico";
import CardClubes from "@/components/CardClubes";
import CardSelecao from "@/components/CardSelecao";
import Loading from "@/components/Loading";

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
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }

  const dadosAtivos = (() => {
    switch (categoriaAtiva) {
      case FILTRO_TECNICOS:
        return tecnicos;
      case FILTRO_CLUBES:
        return clubes;
      case FILTRO_SELECOES:
        return selecoes;
      case FILTRO_PADRAO:
      default:
        return jogadores;
    }
  })();

  const resultadosFinais = useMemo(() => {
    if (!buscaAcionada) return [];

    const resultadosFiltrados = dadosAtivos.filter((item) => {
      const termo = termoPesquisa.toLowerCase();

      return item.nome?.toLowerCase().includes(termo)
        ? true
        : item.background?.toLowerCase().includes(termo)
        ? true
        : item.nacionalidade?.toLowerCase().includes(termo)
        ? true
        : item.posicao?.toLowerCase().includes(termo)
        ? true
        : (item.clubes || []).some((clube) =>
            clube.nome?.toLowerCase().includes(termo)
          )
        ? true
        : (item.tags || []).some((tag) => tag.toLowerCase().includes(termo))
        ? true
        : (item.titulos || []).some((titulo) =>
            titulo.nome.toLowerCase().includes(termo)
          )
        ? true
        : false;
    });

    let resultadosOrdenados = resultadosFiltrados;

    if (categoriaAtiva === FILTRO_PADRAO) {
      resultadosOrdenados = resultadosFiltrados.slice().sort((a, b) => {
        const termo = termoPesquisa.toLowerCase();

        const ultimoClubeA =
          a.clubes && a.clubes.length > 0
            ? a.clubes[a.clubes.length - 1]
            : null;
        const ultimoClubeB =
          b.clubes && b.clubes.length > 0
            ? b.clubes[b.clubes.length - 1]
            : null;

        const isPlayingA = ultimoClubeA?.nome?.toLowerCase().includes(termo);
        const isPlayingB = ultimoClubeB?.nome?.toLowerCase().includes(termo);

        if (isPlayingA && !isPlayingB) {
          return -1;
        }
        if (!isPlayingA && isPlayingB) {
          return 1;
        }

        const statusA = a.status === "Ativo";
        const statusB = b.status === "Ativo";

        if (statusA && !statusB) {
          return -1;
        }
        if (!statusA && statusB) {
          return 1;
        }

        return a.nome.localeCompare(b.nome);
      });
    }

    return categoriaAtiva === FILTRO_PADRAO
      ? resultadosOrdenados
      : resultadosFiltrados;
  }, [termoPesquisa, dadosAtivos, categoriaAtiva, buscaAcionada]);

  const handleMostrarMais = () => {
    setLoading(true);

    setTimeout(() => {
      setItensVisiveis((prev) => prev + ITENS_POR_CARGA);
      setLoading(false);
    }, 300);
  };

  const renderizarCards = () => {
    let CardComponent;
    let propName;

    const dadosParaRenderizar = resultadosFinais.slice(0, itensVisiveis);

    if (resultadosFinais.length === 0 && buscaAcionada) {
      return (
        <p className="sem-resultados">
          Nenhum resultado encontrado para "{termoPesquisa}".
        </p>
      );
    }

    if (dadosParaRenderizar.length === 0 && !loading) {
      return null;
    }

    switch (categoriaAtiva) {
      case FILTRO_TECNICOS:
        CardComponent = CardTecnico;
        propName = "tecnico";
        break;
      case FILTRO_CLUBES:
        CardComponent = CardClubes;
        propName = "clube";
        break;
      case FILTRO_SELECOES:
        CardComponent = CardSelecao;
        propName = "selecao";
        break;
      case FILTRO_PADRAO:
      default:
        CardComponent = CardJogador;
        propName = "jogador";
        break;
    }

    return dadosParaRenderizar.map((item) => (
      <CardComponent key={item.nome} {...{ [propName]: item }} />
    ));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setLoading(true);
    setBuscaAcionada(true);
    setItensVisiveis(ITENS_POR_CARGA);
    setTermoPesquisa(textoInput);
  };

  const exibirBotaoMais =
    buscaAcionada && itensVisiveis < resultadosFinais.length;

  return (
    <header className="pagina">
      <div className="div-resultados">
        <section id="home">
          <h1>Tudo sobre Futebol</h1>
          <form className="barra-pesquisa" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="digite o atleta, equipe ou país"
              id="campo-pesquisa"
              value={textoInput}
              onChange={(e) => setTextoInput(e.target.value)}
            />
            <button className="pagina__btn" type="submit">
              {textoInput === "" ? "Pesquisar todos" : "Pesquisar"}
            </button>
          </form>
          {/* 
          <div className="btn-filtros">
            <ul>
              {filtros.map((filtro, index) => (
                <li key={index}>
                  <button
                    className={`btn-nav ${
                      categoriaAtiva === filtro.termo ? "active" : ""
                    }`}
                    onClick={() => {
                      setLoading(true);
                      setCategoriaAtiva(filtro.termo);
                      setBuscaAcionada(true);
                      setTermoPesquisa("");
                    }}
                  >
                    {filtro.nome}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          */}
        </section>

        <main className="resultados-pesquisa">
          {loading && <Loading />}
          {buscaAcionada ? (
            <>
              {renderizarCards()}
              {exibirBotaoMais && (
                <button
                  className="btn-mostrar-mais"
                  onClick={handleMostrarMais}
                  disabled={loading}
                >
                  Mostrar mais
                  <span className="fa-solid fa-chevron-down"></span>
                </button>
              )}
            </>
          ) : (
            <>
              <p id="p-resultados">
                Aqui você fica por dentro de tudo do futebol mundial! Pesquise
                por jogadores e clubes mundiais sem nenhuma dificuldade.
              </p>
              <img
                id="img-resultados"
                src="/img__fundos/Fundo_messi.png"
                alt=""
                width="100%"
              />
            </>
          )}
        </main>
        <a href="#home">
          <button className="btnTopo" title="Voltar ao topo">
            <i className="fa-regular fa-circle-up" aria-hidden></i>
          </button>
        </a>
        <footer>
          <p>2024 - Atletas do Mundo. todos direitos reservados</p>
          <p>Entre em contato pelo email: esilvavalencuela@gmail.com</p>
        </footer>
      </div>
    </header>
  );
}
