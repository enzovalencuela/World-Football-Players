import React from "react";
import { gerarURLImagem } from "@/utils/JogadorUtils";

const extrairPrimeiraDataParaOrdenacao = (datasArray) => {
  if (!Array.isArray(datasArray) || datasArray.length === 0)
    return "0000-00-00";

  const datasFormatadas = datasArray.map((periodo) => {
    const dataStr = periodo.inicio;

    if (typeof dataStr === "string" && dataStr.split) {
      const partes = dataStr.split("/");
      if (partes.length === 3) {
        return `${partes[2]}-${partes[1]}-${partes[0]}`;
      }
    }
    return "9999-12-31";
  });

  datasFormatadas.sort();

  return datasFormatadas[0];
};

const formatarDatasParaAnos = (datasArray) => {
  if (!Array.isArray(datasArray) || datasArray.length === 0) return "";

  const anosUnicos = [
    ...new Set(
      datasArray
        .map((periodo) => {
          const dataStr = periodo.fim;
          if (typeof dataStr === "string") {
            const match = dataStr.match(/\d{4}$/);
            return match ? match[0] : null;
          }
          return null;
        })
        .filter((ano) => ano !== null)
    ),
  ];

  return anosUnicos.join(", ");
};

function TabelaTitulosClube({ equipe }) {
  const titulosDoClube = equipe.titulos;

  const titulosOrdenados = [...titulosDoClube].sort((a, b) => {
    const datasA = Array.isArray(a.datas) ? a.datas : [];
    const datasB = Array.isArray(b.datas) ? b.datas : [];

    const dataMaisAntigaA = extrairPrimeiraDataParaOrdenacao(datasA);
    const dataMaisAntigaB = extrairPrimeiraDataParaOrdenacao(datasB);

    if (dataMaisAntigaA < dataMaisAntigaB) {
      return -1;
    }
    if (dataMaisAntigaA > dataMaisAntigaB) {
      return 1;
    }
    return 0;
  });

  if (titulosOrdenados.length > 0) {
    return (
      <table className="tabela-titulos">
        <thead>
          <tr>
            <th className="th-titulos" colSpan="4">
              Principais Títulos
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
              <td className="item-titulo ">{titulo.nome}</td>
              <td className="item-titulo">
                {formatarDatasParaAnos(titulo.datas)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default TabelaTitulosClube;
