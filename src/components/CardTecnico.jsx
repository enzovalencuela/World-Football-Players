import React, { useState } from "react";
import TabelaTitulosIndiividuais from "./TabelaTitulosIndividuais";
import TabelaTitulosPorEquipe from "./TabelaTitulosPorEquipe";
import ListaClubesJogador from "./ListaClubesJogador";
import { calcularIdade, calcularPeriodoAtividade } from "@/utils/JogadorUtils";
import CardSuperior from "./CardSuperior";

function CardTecnico({ tecnico }) {
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);

  const idade = calcularIdade(tecnico.dataNascimento, tecnico.dataFalecimento);

  const clubes = tecnico.clubes || [];
  const clubeAtual = clubes.length > 0 ? [clubes[clubes.length - 1]] : null;
  const clubesAnteriores = clubes.slice(0, -1);

  return (
    <div className="jogador" id={tecnico.background}>
      <img className="img-grampo" src="/img__fundos/Fundo_Grampo.png" alt="" />
      <div className="div-superior">
        <CardSuperior pessoa={tecnico} />
        <div className="div-info">
          <div className="numero-nome-nacionalidade">
            <a href={tecnico.pagina} target="_blank">
              <h2 id="nome">{tecnico.nome}</h2>
            </a>
            <img
              className="nacionalidade"
              src={`/img__equipes/Logo_${tecnico.nacionalidade.replace(
                / /g,
                "_"
              )}.png`}
              alt={tecnico.alt}
            />
            {tecnico.status === "Ativo" && clubeAtual && (
              <ListaClubesJogador clubes={clubeAtual} />
            )}
          </div>
          <h3>Status</h3>
          <p id="info">
            {tecnico.status}
            {tecnico.status === "Aposentado" &&
              ` (${calcularPeriodoAtividade(tecnico)})`}
          </p>
          <h3>Clubes com passagens</h3>
          <ListaClubesJogador
            clubes={
              tecnico.status === "Ativo" ? clubesAnteriores : tecnico.clubes
            }
          />
          <h3>Nascimento</h3>
          <p id="info">
            {tecnico.dataNascimento} ({idade})
          </p>
          <h3>Esquemas Táticos</h3>
          <p id="info">{tecnico.esquemasTaticos}</p>
          <h3>Estilo de jogo</h3>
          <p id="info">{tecnico.filosofiaDeJogo}</p>
          <h3>Influências</h3>
          <p id="info">{tecnico.influencias}</p>
          <h3>Curiosidades</h3>
          <p id="info">{tecnico.curiosidades}</p>
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
            <TabelaTitulosIndiividuais jogador={tecnico} />
          </div>
          <div className="tabelas-right">
            <TabelaTitulosPorEquipe jogador={tecnico} />
          </div>
        </div>
      )}
    </div>
  );
}

export default CardTecnico;
