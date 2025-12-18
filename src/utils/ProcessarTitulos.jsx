import { clubes } from "../data/clubes";
import { selecoes } from "../data/selecoes";

function converterParaDataUTC(dataStr) {
  if (!dataStr) return null;
  const partes = dataStr.split("/");
  const ano = partes.length === 3 ? parseInt(partes[2]) : 2000;
  return new Date(Date.UTC(ano, parseInt(partes[1]) - 1, parseInt(partes[0])));
}

function verificarPeriodoInativo(dataTitulo, periodosInativos) {
  if (!periodosInativos || periodosInativos.length === 0) {
    return false;
  }

  for (const periodo of periodosInativos) {
    const inicioInativo = converterParaDataUTC(periodo.inicio);
    const fimInativo = converterParaDataUTC(periodo.fim);

    if (dataTitulo && inicioInativo && fimInativo) {
      if (
        dataTitulo.getTime() >= inicioInativo.getTime() &&
        dataTitulo.getTime() <= fimInativo.getTime()
      ) {
        return true;
      }
    }
  }
  return false;
}

export function processarTitulosDoJogador(jogador) {
  let titulosFinais = [];
  const listaClubesGlobais = clubes;
  const listaSelecoesGlobais = selecoes;

  const periodosInativosDoJogador = jogador.periodos_inativos || [];

  const processarPassagem = (passagem, listaTitulosGlobais, contextoNome) => {
    const nomeContexto = passagem.nome || jogador.selecao.nome;

    const dataInicioPassagem = converterParaDataUTC(passagem.periodo.inicio);
    let dataFimPassagem;

    if (passagem.periodo.fim === "Presente") {
      const hoje = converterParaDataUTC(jogador.ultima_atualizacao);
      dataFimPassagem =
        hoje || new Date(Date.UTC(new Date().getFullYear(), 11, 31));
    } else {
      dataFimPassagem = converterParaDataUTC(passagem.periodo.fim);
    }

    if (!dataInicioPassagem || !dataFimPassagem) return;

    for (const tituloGlobal of listaTitulosGlobais) {
      if (!tituloGlobal.datas || tituloGlobal.datas.length === 0) continue;

      let datasGanhosNoPeriodo = [];

      for (const periodoTitulo of tituloGlobal.datas) {
        const inicioTitulo = converterParaDataUTC(periodoTitulo.inicio);
        const fimTitulo = converterParaDataUTC(periodoTitulo.fim);

        if (inicioTitulo && fimTitulo) {
          const haIntersecao =
            dataInicioPassagem.getTime() <= fimTitulo.getTime() &&
            dataFimPassagem.getTime() >= inicioTitulo.getTime();

          const estaInativo = verificarPeriodoInativo(
            inicioTitulo,
            periodosInativosDoJogador
          );

          if (haIntersecao && !estaInativo) {
            datasGanhosNoPeriodo.push(periodoTitulo.fim);
          }
        }
      }

      if (datasGanhosNoPeriodo.length > 0) {
        const novoTitulo = {
          nome: tituloGlobal.nome,
          logo: tituloGlobal.logo || null,
          logoVariavel: tituloGlobal.logoVariavel || null,
        };

        if (tituloGlobal.logoVariavel) {
          novoTitulo.datasArray = datasGanhosNoPeriodo;
          novoTitulo.datas = datasGanhosNoPeriodo.join(", ");
        } else {
          novoTitulo.datas = datasGanhosNoPeriodo.join(", ");
        }

        novoTitulo[contextoNome] =
          contextoNome === "selecao"
            ? listaTitulosGlobais[0].selecaoNomeGlobal
            : nomeContexto;

        novoTitulo[contextoNome] = nomeContexto;

        titulosFinais.push(novoTitulo);
      }
    }
  };

  for (const passagem of jogador.clubes) {
    const clubeGlobal = listaClubesGlobais.find(
      (c) => c.nome === passagem.nome
    );
    if (clubeGlobal && clubeGlobal.titulos) {
      processarPassagem(passagem, clubeGlobal.titulos, "clube");
    }
  }

  if (jogador.selecao && jogador.selecao.nome) {
    const nomeSelecaoComposto = jogador.selecao.nome;
    const nomesSelecao = nomeSelecaoComposto
      .split(/[ /]+/)
      .map((n) => n.trim())
      .filter((n) => n.length > 0);

    for (const nomeIndividual of nomesSelecao) {
      const selecaoGlobal = listaSelecoesGlobais.find(
        (s) => s.nome === nomeIndividual
      );
      if (selecaoGlobal && selecaoGlobal.titulos) {
        const passagemTemporaria = {
          ...jogador.selecao,
          nome: nomeIndividual,
        };

        processarPassagem(passagemTemporaria, selecaoGlobal.titulos, "selecao");
      }
    }
  }

  return titulosFinais;
}
