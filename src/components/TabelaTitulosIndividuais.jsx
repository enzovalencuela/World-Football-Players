import React from "react";
import { gerarURLImagem } from "@/utils/JogadorUtils";

const extrairPrimeiroAno = (datas) => {
  if (Array.isArray(datas) && datas.length > 0) {
    const anoStr = datas[0];
    const match = anoStr.match(/\d{4}/);
    return match ? parseInt(match[0], 10) : 0;
  }

  if (typeof datas === "string" && datas) {
    const match = datas.match(/\d{4}/);
    return match ? parseInt(match[0], 10) : 0;
  }

  return 0;
};

const formatarAnosParaExibicao = (datas) => {
  if (Array.isArray(datas)) {
    return datas.join(", ");
  }
  return datas || "";
};

function TabelaTitulosIndividuais({ jogador }) {
  const titulosIndividuais = jogador.titulosIndividuais || [];

  if (titulosIndividuais.length === 0) {
    return null;
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
            Premiações Individuais
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
                alt={`Logo ${titulo.nome}`}
              />
              <div className="titulo-status-img">
                <img
                  src={gerarURLImagem(titulo).replace(/ /g, "_")}
                  alt={`Logo ${titulo.nome}`}
                />
              </div>
            </td>
            <td className="item-titulo">{titulo.nome}</td>
            <td className="item-titulo">
              {formatarAnosParaExibicao(titulo.anos)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TabelaTitulosIndividuais;
