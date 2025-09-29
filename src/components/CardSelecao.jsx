import React, { useState } from "react";
import TabelaTitulosIndividuais from "./TabelaTitulosIndividuais";

function CardSelecao({ selecao }) {
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);

  return (
    <div className="jogador selecao-clube" id={selecao.background}>
      <div className="div-superior">
        <div className="div-left">
          <img
            className="dado-imagem-clube-selecao"
            src={selecao.imagem}
            alt=""
          />
        </div>
        <div className="div-info">
          <div className="numero-nome-selecao">
            <a href={selecao.pagina} target="_blank">
              <h2 id="nome">{selecao.nome}</h2>
            </a>
            <h3 id="sub-info">{selecao.confederacao}</h3>
          </div>
          <h3>Fundação</h3>
          <p id="info">{selecao.fundacao}</p>
          <h3>Mascote</h3>
          <p id="info">{selecao.mascote}</p>
          <h3>Cores</h3>
          <p id="info">{selecao.cores}</p>
          <h3>Curiosidades</h3>
          <p id="info">{selecao.curiosidades}</p>
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
          <div className="tabelas-right">
            <TabelaTitulosIndividuais jogador={selecao} />
          </div>
        </div>
      )}
    </div>
  );
}

export default CardSelecao;
