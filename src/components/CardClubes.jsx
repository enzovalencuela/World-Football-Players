import React from "react";

function CardClubes({ clube }) {
  return (
    <div className="jogador selecao-clube">
      <div className="div-superior">
        <img className="dado-imagem-clube-selecao" src={clube.img} alt="" />
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
          <h3>Principais Títulos</h3>
          <p id="info">{clube.titulos}</p>
          <h3>Curiosidades</h3>
          <p id="info">{clube.curiosidades}</p>
        </div>
      </div>
      <p className="descricao-meta">{clube.descricao}</p>
    </div>
  );
}

export default CardClubes;
