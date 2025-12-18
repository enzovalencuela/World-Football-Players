import React from "react";

function CardSuperior({ pessoa }) {
  return (
    <div className="div-left cards">
      <div className="card">
        <img
          className="dado-imagem-background"
          src="/img__fundos/Fundo_Card_Foto.png"
          alt=""
        />
        <img className="dado-imagem" src={pessoa.imagem} alt="" />
        <img
          className="dado_imgMarca"
          src={`/img__players/Logo_${pessoa.nomeCompleto.replace(
            / /g,
            "_"
          )}.png`}
          alt=""
        />
        <img
          className="img-superior"
          src={`/img__detalhes/${pessoa.background}_1.png`}
          alt=""
        />
        <img
          className="img-inferior"
          src={`/img__detalhes/${pessoa.background}_2.png`}
          alt=""
        />
      </div>
    </div>
  );
}

export default CardSuperior;
