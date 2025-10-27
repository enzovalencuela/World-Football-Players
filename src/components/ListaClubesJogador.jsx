function ListaClubesJogador({ clubes }) {
  if (!clubes || clubes.length === 0) {
    return <p>Nenhum clube encontrado.</p>;
  }

  const mostrar =
    innerWidth > 1200 ? 0 : clubes.length > 6 ? clubes.length - 6 : "";

  return (
    <div className="clubes-tecnicos">
      {clubes.slice(mostrar).map((clube, index) => {
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
