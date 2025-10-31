import React from "react";
import { gerarURLImagem } from "@/utils/JogadorUtils";

const extrairPrimeiroAno = (anosString) => {
  if (typeof anosString !== "string" || !anosString) {
    return 0;
  }

  const match = anosString.match(/\d{4}/);
  return match ? parseInt(match[0], 10) : 0;
};

function TabelaTitulosIndividuais({ jogador }) {
  const titulosIndividuais = (jogador.titulos || []).filter(
    (titulo) => titulo.categoria === "individual"
  );

  if (titulosIndividuais.length === 0) {
    return;
  }

  const titulosOrdenados = [...titulosIndividuais].sort((a, b) => {
    const anoA = extrairPrimeiroAno(a.anos);
    const anoB = extrairPrimeiroAno(b.anos);
    return anoA - anoB;
  });

  return (
    <table className="tabela-titulos">
      <thead>
        <tr>
          <th className="th-titulos" colSpan="4">
            Títulos Individuais
          </th>
        </tr>
      </thead>
      <tbody>
        {titulosOrdenados.map((titulo, index) => (
          <tr className="div-titulos" key={index}>
            <td className="item-titulo img-titulo">
              <img
                className="campeonato"
                src={gerarURLImagem(titulo).replace(/ /g, "_")}
                alt=""
              />
              <div className="titulo-status-img">
                <img src={gerarURLImagem(titulo).replace(/ /g, "_")} alt="" />
              </div>
            </td>
            <td className="item-titulo">{titulo.nome}</td>
            <td className="item-titulo">{titulo.anos}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TabelaTitulosIndividuais;
