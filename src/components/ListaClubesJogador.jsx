function ListaClubesJogador({ clubes }) {
  if (!clubes || clubes.length === 0) {
    return <p>Nenhum clube encontrado.</p>;
  }

  return (
    <div className="clubes-tecnicos">
      {clubes.map((clube, index) => {
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
