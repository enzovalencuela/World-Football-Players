import React from "react";
import { gerarURLImagem } from "@/utils/JogadorUtils";

function TabelaTitulosIndividuais({ jogador }) {
  const titulosIndividuais = (jogador.titulos || []).filter(
    (titulo) => titulo.categoria === "individual"
  );

  if (titulosIndividuais.length === 0) {
    return <p>Nenhum título individual encontrado.</p>;
  }

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
        {titulosIndividuais.map((titulo, index) => (
          <tr className="div-titulos" key={index}>
            <td className="item-titulo">
              <img
                className="campeonato"
                src={gerarURLImagem(titulo).replace(/ /g, "_")}
                alt=""
              />
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
