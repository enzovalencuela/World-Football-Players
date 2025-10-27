import React, { useState } from "react";
import ListaClubesJogador from "./ListaClubesJogador";
import TabelaEstatisticas from "./TabelaEstatisticas";
import { calcularIdade, calcularPeriodoAtividade } from "../utils/JogadorUtils";
import TabelaTitulosIndiividuais from "./TabelaTitulosIndividuais";
import TabelaTitulosPorEquipe from "./TabelaTitulosPorEquipe";

function CardJogador({ jogador }) {
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);
  const idade = calcularIdade(jogador.dataNascimento, jogador.dataFalecimento);

  const clubes = jogador.clubes || [];
  const clubeAtual = clubes.length > 0 ? [clubes[clubes.length - 1]] : null;
  const clubesAnteriores = clubes.slice(0, -1);

  return (
    <div className="jogador" id={jogador.background}>
      <div className="div-superior">
        <div className="div-left">
          <img className="dado-imagem" src={jogador.imagem} alt="" />
          <img
            className="dado_imgMarca"
            src={`/img__players/Logo_${jogador.nome.replace(/ /g, "_")}.png`}
            alt=""
          />
        </div>
        <div className="div-info">
          <div className="numero-nome-nacionalidade">
            <h2 className="numero">{jogador.numero}</h2>
            <a href={jogador.pagina} target="_blank">
              <h2 id="nome">{jogador.nome}</h2>
            </a>
            <div className="div-clube">
              <img
                className="nacionalidade"
                src={`/img__equipes/Logo_${jogador.nacionalidade.replace(
                  / /g,
                  "_"
                )}.png`}
                alt={jogador.alt}
              />
              {jogador.selecao?.nome && (
                <div className="clube-status">
                  <h3>{jogador.selecao?.nome}</h3>
                  <p>
                    ({jogador.selecao?.periodo?.inicio} -
                    {jogador.selecao?.periodo?.fim})
                  </p>
                </div>
              )}
            </div>

            {jogador.status === "Ativo" && clubeAtual && (
              <ListaClubesJogador clubes={clubeAtual} />
            )}
          </div>
          <h3>Status</h3>
          <p id="info">
            {jogador.status}
            {jogador.status === "Aposentado" &&
              ` (${calcularPeriodoAtividade(jogador)})`}
          </p>
          <h3>Clubes com passagens</h3>
          <ListaClubesJogador
            clubes={
              jogador.status === "Ativo" ? clubesAnteriores : jogador.clubes
            }
          />
          <h3>Posição</h3>
          <p id="info">{jogador.posicao}</p>
          <h3>Nascimento</h3>
          <p id="info">
            {jogador.dataNascimento} ({idade})
          </p>
          <h3>Sobre</h3>
          <p className="descricao-meta">{jogador.descricao}</p>
        </div>
      </div>

      <button
        className="mostrar-esconder"
        onClick={() => setMostrarDetalhes(!mostrarDetalhes)}
      >
        {mostrarDetalhes ? "Mostrar menos" : "Mostrar mais"}
        <span
          className={`fa-solid fa-chevron-${mostrarDetalhes ? "up" : "down"}`}
        ></span>
      </button>

      {mostrarDetalhes && (
        <div className="conteudo-oculto">
          <div className="tabelas-left">
            <TabelaEstatisticas jogador={jogador} />
            <TabelaTitulosIndiividuais jogador={jogador} />
          </div>
          <div className="tabelas-right">
            <TabelaTitulosPorEquipe jogador={jogador} />
          </div>
        </div>
      )}
    </div>
  );
}

export default CardJogador;
