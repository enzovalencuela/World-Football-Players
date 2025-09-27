import React, { useState } from "react";
import TabelaTitulosIndiividuais from "./TabelaTitulosIndividuais";
import TabelaTitulosPorEquipe from "./TabelaTitulosPorEquipe";
import ListaClubesJogador from "./ListaClubesJogador";
import { calcularIdade } from "@/utils/JogadorUtils";

function CardTecnico({ tecnico }) {
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);

  const idade = calcularIdade(tecnico.dataNascimento, tecnico.dataFalecimento);

  return (
    <div className="jogador">
      <div className="div-superior">
        <div className="div-left">
          <img className="dado-imagem" src={tecnico.imagem} alt="" />
        </div>
        <div className="div-info">
          <div className="numero-nome-nacionalidade">
            <a href={tecnico.pagina} target="_blank">
              <h2 id="nome">{tecnico.nome}</h2>
            </a>
            <img
              className="nacionalidade"
              src={`/img__equipes/Logo_${tecnico.nacionalidade}.png`}
              alt=""
            />
          </div>
          <h3>Nascimento</h3>
          <p id="info">
            {tecnico.dataNascimento} ({idade})
          </p>
          <h3>Status</h3>
          <p id="info">{tecnico.status}</p>
          <h3>Principais Clubes</h3>
          <ListaClubesJogador jogador={tecnico} />
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
        Mostrar mais<span className="fa-solid fa-chevron-down"></span>
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
