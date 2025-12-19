import { useEffect, useState } from "react";

const extractYear = (dateString) => {
  if (dateString.toLowerCase() === "presente") {
    return "Presente";
  }
  const parts = dateString.split("/");
  return parts.length === 3 ? parts[2] : dateString;
};

const getClubesOrdenados = (clubes) => {
  if (!clubes || clubes.length === 0) {
    return [];
  }

  const parseDate = (dateString) => {
    if (dateString.toLowerCase() === "presente") {
      return new Date(2100, 0, 1);
    }
    const [day, month, year] = dateString.split("/").map(Number);
    return new Date(year, month - 1, day);
  };

  const clubesOrdenados = [...(clubes || [])].sort((a, b) => {
    const dateA = parseDate(a.periodo.inicio);
    const dateB = parseDate(b.periodo.inicio);

    return dateA.getTime() - dateB.getTime();
  });

  return clubesOrdenados;
};

function ListaClubesJogador({ clubes }) {
  const clubesParaMostrar = getClubesOrdenados(clubes);

  if (clubesParaMostrar.length === 0) {
    return <p>Nenhum clube encontrado.</p>;
  }

  return (
    <div className="clubes-tecnicos">
      {clubesParaMostrar.map((clube, index) => {
        const nomeClubeFormatado = clube.nome.replace(/ /g, "_");
        const pathImagem = `/img__equipes/Logo_${nomeClubeFormatado}.png`;
        const inicioAno = extractYear(clube.periodo.inicio);
        const fimAno = extractYear(clube.periodo.fim);

        return (
          <div className="div-clube" key={index}>
            <img className="clubes" src={pathImagem} alt={clube.nome} />
            <div className="clube-status">
              <h3>{clube.nome}</h3>
              <p>
                ({inicioAno} - {fimAno})
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ListaClubesJogador;
