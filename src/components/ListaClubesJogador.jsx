import { useEffect, useState } from "react";

const getClubesOrdenados = (clubes, larguraTela) => {
  if (!clubes || clubes.length === 0) {
    return [];
  }

  const clubesOrdenados = [...(clubes || [])].sort((a, b) => {
    return parseInt(a.periodo.inicio) - parseInt(b.periodo.inicio);
  });

  const MAX_CLUBES_PEQUENO = 6;
  const MAX_CLUBES_MEDIO = 12;
  const MAX_CLUBES_GRANDE = 10;
  const LARGURA_CORTE_PEQUENO = 800;
  const LARGURA_CORTE_GRANDE = 1200;

  if (
    larguraTela <= LARGURA_CORTE_PEQUENO &&
    clubesOrdenados.length >= MAX_CLUBES_PEQUENO
  ) {
    return clubesOrdenados.slice(0, MAX_CLUBES_PEQUENO);
  } else if (
    larguraTela >= LARGURA_CORTE_GRANDE &&
    clubesOrdenados.length >= MAX_CLUBES_GRANDE
  ) {
    return clubesOrdenados.slice(0, MAX_CLUBES_GRANDE);
  } else if (
    larguraTela <= LARGURA_CORTE_GRANDE &&
    larguraTela >= LARGURA_CORTE_PEQUENO &&
    clubesOrdenados.length >= MAX_CLUBES_PEQUENO
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

        return (
          <div className="div-clube" key={index}>
            <img className="clubes" src={pathImagem} alt={clube.nome} />
            <div className="clube-status">
              <h3>{clube.nome}</h3>
              <p>
                ({clube.periodo.inicio} - {clube.periodo.fim})
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ListaClubesJogador;
