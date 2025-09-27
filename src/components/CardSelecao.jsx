import React from "react";

function CardSelecao({ selecao }) {
  return (
    <div className="jogador selecao-clube">
      <div className="div-superior">
        <img
          className="dado-imagem-clube-selecao"
          src={selecao.imagem}
          alt=""
        />
        <div className="div-info">
          <div className="numero-nome-selecao">
            <a href={selecao.pagina} target="_blank">
              <h2 id="nome">{selecao.nome}</h2>
            </a>
            <h3 id="sub-info">{selecao.confederacao}</h3>
          </div>
          <h3>Fundação</h3>
          <p id="info">{selecao.fundacao}</p>
          <h3>Principais Títulos</h3>
          <p id="info">{selecao.titulos}</p>
          <h3>Mascote</h3>
          <p id="info">{selecao.mascote}</p>
          <h3>Cores</h3>
          <p id="info">{selecao.cores}</p>
          <h3>Curiosidades</h3>
          <p id="info">{selecao.curiosidades}</p>
        </div>
      </div>
    </div>
  );
}

export default CardSelecao;
