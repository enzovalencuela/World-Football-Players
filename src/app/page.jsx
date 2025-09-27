// src/app/page.js
"use client";

import React, { useEffect, useState } from "react";
import { jogadores } from "../data/jogadores";
import { tecnicos } from "../data/tecnicos";
import { selecoes } from "../data/selecoes";
import { times } from "../data/times";
import CardJogador from "../components/CardJogador";
import CardTecnico from "@/components/CardTecnico";
import CardClubes from "@/components/CardClubes";
import CardSelecao from "@/components/CardSelecao";
import Loading from "@/components/Loading";

const FILTRO_PADRAO = "JOGADORES";
const FILTRO_TECNICOS = "TECNICOS";
const FILTRO_CLUBES = "CLUBES";
const FILTRO_SELECOES = "SELECOES";

const filtros = [
  { nome: "Jogadores", termo: FILTRO_PADRAO },
  { nome: "Técnicos", termo: FILTRO_TECNICOS },
  { nome: "Clubes", termo: FILTRO_CLUBES },
  { nome: "Seleções", termo: FILTRO_SELECOES },
];

export default function HomePage() {
  const [termoPesquisa, setTermoPesquisa] = useState("");
  const [categoriaAtiva, setCategoriaAtiva] = useState(FILTRO_PADRAO);
  const [buscaAcionada, setBuscaAcionada] = useState(false);
  const [loading, setLoading] = useState(false);

  if (loading) {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  const dadosAtivos = (() => {
    switch (categoriaAtiva) {
      case FILTRO_TECNICOS:
        return tecnicos;
      case FILTRO_CLUBES:
        return times;
      case FILTRO_SELECOES:
        return selecoes;
      case FILTRO_PADRAO:
      default:
        return jogadores;
    }
  })();

  const resultadosFiltrados = dadosAtivos.filter((item) => {
    const termo = termoPesquisa.toLowerCase();

    const correspondeNomeOuDescricao =
      item.nome?.toLowerCase().includes(termo) ||
      item.descricao?.toLowerCase().includes(termo);

    const correspondeClube = (item.clubes || []).some((clube) =>
      clube.nome?.toLowerCase().includes(termo)
    );

    return correspondeNomeOuDescricao || correspondeClube;
  });

  const renderizarCards = () => {
    let CardComponent;
    let propName;

    if (resultadosFiltrados.length === 0) {
      return (
        <p className="sem-resultados">
          Nenhum resultado encontrado para "{termoPesquisa}".
        </p>
      );
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

    return resultadosFiltrados.map((item) => (
      <CardComponent key={item.nome} {...{ [propName]: item }} />
    ));
  };

  return (
    <header className="pagina">
      <div className="div-resultados">
        <section id="home">
          <h1>Tudo sobre Futebol</h1>
          <div className="barra-pesquisa">
            <input
              type="text"
              placeholder="digite o atleta, time ou país"
              id="campo-pesquisa"
              value={termoPesquisa}
              onChange={(e) => setTermoPesquisa(e.target.value)}
            />
            <button
              className="pagina__btn"
              onClick={() => {
                setLoading(true);
                setBuscaAcionada(true);
              }}
            >
              {termoPesquisa === "" ? "Pesquisar todos" : "Pesquisar"}
            </button>
          </div>
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
        </section>

        <main className="resultados-pesquisa">
          {loading && <Loading />}
          {buscaAcionada ? (
            renderizarCards()
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
