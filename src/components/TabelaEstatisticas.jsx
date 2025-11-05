// src/components/TabelaEstatisticas.jsx
import React from "react";

function calcularTotais(jogador) {
  let totais = jogador.clubes.reduce(
    (acc, clube) => {
      if (clube.estatisticas) {
        return {
          jogos: acc.jogos + clube.estatisticas.jogos,
          gols: acc.gols + clube.estatisticas.gols,
          assistencias: acc.assistencias + clube.estatisticas.assistencias,
        };
      }
      return acc;
    },
    { jogos: 0, gols: 0, assistencias: 0 }
  );

  if (jogador.selecao && jogador.selecao.estatisticas) {
    totais.jogos += jogador.selecao.estatisticas.jogos;
    totais.gols += jogador.selecao.estatisticas.gols;
    totais.assistencias += jogador.selecao.estatisticas.assistencias;
  }

  return totais;
}

function TabelaEstatisticas({ jogador }) {
  if (!jogador.clubes || jogador.clubes.length === 0) {
    return [];
  }
  const totais = calcularTotais(jogador);

  return (
    <table className="tabela-estatisticas">
      <thead>
        <tr>
          <th>Clube/Seleção</th>
          <th>Jogos</th>
          <th>Gols</th>
          <th>Assist.</th>
        </tr>
      </thead>
      <tbody>
        {jogador.clubes.map(
          (clube, index) =>
            clube.estatisticas && (
              <tr key={index}>
                <td>{clube.nome}</td>
                <td>{clube.estatisticas.jogos}</td>
                <td>{clube.estatisticas.gols}</td>
                <td>{clube.estatisticas.assistencias}</td>
              </tr>
            )
        )}

        {/* Linha da Seleção: Renderização Condicional (se existir) */}
        {jogador.selecao && jogador.selecao.estatisticas && (
          <tr key={jogador.selecao.nome}>
            <td>{jogador.selecao.nome}</td>
            <td>{jogador.selecao.estatisticas.jogos}</td>
            <td>{jogador.selecao.estatisticas.gols}</td>
            <td>{jogador.selecao.estatisticas.assistencias}</td>
          </tr>
        )}

        {/* Linha dos Totais */}
        <tr>
          <td>
            <strong>Total</strong>
          </td>
          <td>{totais.jogos}</td>
          <td>{totais.gols}</td>
          <td>{totais.assistencias}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default TabelaEstatisticas;
