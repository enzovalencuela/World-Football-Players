import React, { useState } from "react";
import TabelaTitulosClube from "./TabelaTitulosClube";

function CardClubes({ clube }) {
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);

  return (
    <div className="jogador selecao-clube" id={clube.background}>
      <div className="div-superior">
        <div className="div-left">
          <img
            className="dado-imagem-clube-selecao"
            src={`/img__equipes/Logo_${clube.nome.replace(/ /g, "_")}.png`}
            alt=""
          />
        </div>
        <div className="div-info">
          <div className="numero-nome-time">
            <a className="link-pagina" href={clube.pagina} target="_blank">
              <h2 id="nome">{clube.nome}</h2>
            </a>
          </div>
          <h3>Localização</h3>
          <p id="info">{clube.localizacao}</p>
          <h3>Fundação</h3>
          <p id="info">{clube.fundacao}</p>
          <h3>Curiosidades</h3>
          <p id="info">{clube.curiosidades}</p>
        </div>
      </div>
      <p className="descricao-meta">{clube.descricao}</p>
      <div className={`conteudo-oculto ${mostrarDetalhes ? "aberto" : ""}`}>
        <div className="tabelas-right">
          <TabelaTitulosClube equipe={clube} />
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
    </div>
  );
}

export default CardClubes;
