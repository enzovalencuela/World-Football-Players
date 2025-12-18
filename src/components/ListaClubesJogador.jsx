import { useEffect, useState } from "react";

const extractYear = (dateString) => {
  if (dateString.toLowerCase() === "presente") {
    return "Presente";
  }
  const parts = dateString.split("/");
  return parts.length === 3 ? parts[2] : dateString;
};

const getClubesOrdenados = (clubes, larguraTela) => {
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

  const MAX_CLUBES_PEQUENO = 6;
  const MAX_CLUBES_MEDIO = 12;
  const MAX_CLUBES_GRANDE = 9;
  const LARGURA_CORTE_PEQUENO = 800;
  const LARGURA_CORTE_GRANDE = 1200;

  if (
    larguraTela <= LARGURA_CORTE_PEQUENO &&
    clubesOrdenados.length > MAX_CLUBES_PEQUENO
  ) {
    return clubesOrdenados.slice(0, MAX_CLUBES_PEQUENO);
  } else if (
    larguraTela >= LARGURA_CORTE_GRANDE &&
    clubesOrdenados.length > MAX_CLUBES_GRANDE
  ) {
    return clubesOrdenados.slice(0, MAX_CLUBES_GRANDE);
  } else if (
    larguraTela <= LARGURA_CORTE_GRANDE &&
    larguraTela >= LARGURA_CORTE_PEQUENO &&
    clubesOrdenados.length > MAX_CLUBES_PEQUENO
  ) {
    return clubesOrdenados.slice(0, MAX_CLUBES_PEQUENO);
  } else {
    return clubesOrdenados.slice(0, MAX_CLUBES_MEDIO);
  }
};

function ListaClubesJogador({ clubes }) {
  const [larguraTela, setLarguraTela] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setLarguraTela(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const clubesParaMostrar = getClubesOrdenados(clubes, larguraTela);

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
