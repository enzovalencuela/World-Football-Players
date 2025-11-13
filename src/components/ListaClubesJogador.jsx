import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const getClubesOrdenados = (clubes) => {
  if (!clubes || clubes.length === 0) {
    return [];
  }

  const clubesOrdenados = [...(clubes || [])].sort((a, b) => {
    return parseInt(a.periodo.inicio) - parseInt(b.periodo.inicio);
  });

  return clubesOrdenados;
};

function ListaClubesJogador({ clubes }) {
  const clubesParaMostrar = getClubesOrdenados(clubes);

  if (clubesParaMostrar.length === 0) {
    return <p>Nenhum clube encontrado.</p>;
  }

  if (clubesParaMostrar.length > 1) {
    return (
      <Swiper
        breakpoints={{
          0: { slidesPerView: 6 },
          660: { slidesPerView: 10 },
          860: { slidesPerView: 6 },
          1020: { slidesPerView: 8 },
          1200: { slidesPerView: 10 },
        }}
        className="clubes-tecnicos"
      >
        {clubesParaMostrar.map((clube, index) => {
          const nomeClubeFormatado = clube.nome.replace(/ /g, "_");
          const pathImagem = `/img__equipes/Logo_${nomeClubeFormatado}.png`;

          return (
            <SwiperSlide key={index} className="div-clube">
              <img className="clubes" src={pathImagem} alt={clube.nome} />
              <div className="clube-status">
                <h3>{clube.nome}</h3>
                <p>
                  ({clube.periodo.inicio} - {clube.periodo.fim})
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  }

  return (
    <div className="clubes-tecnicos">
      {clubesParaMostrar.map((clube, index) => {
        const nomeClubeFormatado = clube.nome.replace(/ /g, "_");
        const pathImagem = `/img__equipes/Logo_${nomeClubeFormatado}.png`;

        return (
          <div key={index} className="div-clube">
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
