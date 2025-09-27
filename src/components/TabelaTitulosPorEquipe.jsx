import React from "react";
import { gerarURLImagem } from "@/utils/JogadorUtils";

function TabelaTitulosPorEquipe({ jogador }) {
  const titulosPorEquipe =
    jogador.titulos || [].filter((titulo) => titulo.categoria !== "individual");

  if (titulosPorEquipe.length === 0) {
    return <p>Nenhum título por equipe encontrado.</p>;
  }

  return (
    <table className="tabela-titulos">
      <thead>
        <tr>
          <th className="th-titulos" colspan="4">
            Principais Títulos
          </th>
        </tr>
      </thead>
      <tbody>
        {titulosPorEquipe.map((titulo) => (
          <tr className="div-titulos">
            <td className="item-titulo">
              <img
                className="campeonato"
                src={gerarURLImagem(titulo).replace(/ /g, "_")}
                alt=""
              />
            </td>
            <td className="item-titulo ">{titulo.nome}</td>
            <td className="item-titulo">{titulo.anos}</td>
            <td className="item-titulo">
              <img
                className="clubes"
                src={`/img__equipes/Logo_${titulo.clube.replace(
                  / /g,
                  "_"
                )}.png`}
                alt=""
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TabelaTitulosPorEquipe;
