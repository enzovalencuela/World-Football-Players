// src/components/ListaClubesJogador.jsx
import React from "react";

function ListaClubesJogador({ jogador }) {
  if (!jogador.clubes || jogador.clubes.length === 0) {
    return <p>Nenhum clube encontrado.</p>;
  }

  return (
    <div className="clubes-tecnicos">
      {jogador.clubes.map((clube, index) => {
        const nomeClubeFormatado = clube.nome.replace(/ /g, "_");
        const pathImagem = `/img__equipes/Logo_${nomeClubeFormatado}.png`;

        return (
          <img
            key={index}
            className="clubes"
            src={pathImagem}
            alt={clube.nome}
          />
        );
      })}
    </div>
  );
}

export default ListaClubesJogador;
