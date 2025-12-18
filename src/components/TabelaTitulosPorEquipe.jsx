import React from "react";
import { gerarURLImagem } from "@/utils/JogadorUtils";
import { processarTitulosDoJogador } from "../utils/ProcessarTitulos";

const extrairPrimeiraDataParaOrdenacao = (datasString) => {
  if (!datasString) return "0000-00-00";

  const datasArray = datasString.split(",").map((data) => data.trim());

  const datasFormatadas = datasArray.map((dataStr) => {
    const partes = dataStr.split("/");
    if (partes.length === 3) {
      return `${partes[2]}-${partes[1]}-${partes[0]}`;
    }
    return "9999-12-31";
  });

  datasFormatadas.sort();

  return datasFormatadas[0];
};

const extrairAno = (dataStr) => {
  const partes = dataStr.split("/");
  return partes.length === 3 ? partes[2] : null;
};

const descompactarTitulosVariaveis = (titulos) => {
  let titulosDescompactados = [];

  titulos.forEach((titulo) => {
    if (titulo.logoVariavel && titulo.datasArray) {
      titulo.datasArray.forEach((dataCompleta) => {
        const ano = extrairAno(dataCompleta);
        if (ano) {
          titulosDescompactados.push({
            ...titulo,
            datas: dataCompleta,
            descompactado: true,
          });
        }
      });
    } else {
      titulosDescompactados.push(titulo);
    }
  });

  return titulosDescompactados;
};

const formatarDatasParaAnos = (datasString, descompactado) => {
  if (!datasString) return "";
  if (descompactado) {
    const ano = extrairAno(datasString);
    return ano || "";
  }
  const datasArray = datasString.split(",").map((data) => data.trim());

  const anosUnicos = [
    ...new Set(
      datasArray
        .map((dataStr) => {
          const match = dataStr.match(/\d{4}$/);
          return match ? match[0] : null;
        })
        .filter((ano) => ano !== null)
    ),
  ];

  return anosUnicos.join(", ");
};

function TabelaTitulosPorEquipe({ jogador }) {
  const clubesQueJogou = processarTitulosDoJogador(jogador);
  const titulosParaExibir = descompactarTitulosVariaveis(clubesQueJogou);
  const titulosOrdenados = [...titulosParaExibir].sort((a, b) => {
    const dataMaisAntigaA = extrairPrimeiraDataParaOrdenacao(a.datas);
    const dataMaisAntigaB = extrairPrimeiraDataParaOrdenacao(b.datas);

    const getNomeEquipeParaImagem = (titulo, jogador) => {
      if (titulo.clube) return titulo.clube;
      if (titulo.selecao) return titulo.selecao;
      return jogador.nacionalidade || "Individual";
    };

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
                {formatarDatasParaAnos(titulo.datas, titulo.descompactado)}     
              </td>
              <td className="item-titulo img-titulo">
                <img
                  className="clubes"
                  src={`/img__equipes/Logo_${(
                    titulo.clube ||
                    titulo.selecao ||
                    jogador.nacionalidade ||
                    "Individual"
                  ).replace(/[ /]+/g, "_")}.png`}
                  alt=""
                />
                <div className="clube-status-img">
                  <img
                    src={`/img__equipes/Logo_${(
                      titulo.clube ||
                      titulo.selecao ||
                      jogador.nacionalidade ||
                      "Individual"
                    ).replace(/[ /]+/g, "_")}.png`}
                    alt=""
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default TabelaTitulosPorEquipe;
