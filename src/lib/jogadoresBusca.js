import { processarTitulosDoJogador } from "@/utils/ProcessarTitulos";

function normalizarJogador(jogador) {
  return {
    ...jogador,
    periodos_inativos:
      jogador.periodos_inativos || jogador.periodosInativos || [],
    ultima_atualizacao:
      jogador.ultima_atualizacao || jogador.ultimaAtualizacao || null,
  };
}

function prepararJogadorParaBusca(jogadorNormalizado, titulosProcessados = []) {
  return {
    ...jogadorNormalizado,
    nomesTitulosCompletos: [
      ...(jogadorNormalizado.titulosIndividuais || []).map((titulo) => titulo.nome),
      ...titulosProcessados.map((titulo) => titulo.nome),
    ]
      .join(" ")
      .toLowerCase(),
  };
}

function termoMatch(valor, termo) {
  return valor?.toLowerCase().includes(termo);
}

function obterClubesComTag(termo, clubes) {
  return clubes
    .filter((clube) => clube.tags?.some((tag) => tag.toLowerCase().includes(termo)))
    .map((clube) => clube.nome);
}

function obterSelecoesComTag(termo, selecoes) {
  return selecoes
    .filter((selecao) =>
      selecao.tags?.some((tag) => tag.toLowerCase().includes(termo))
    )
    .map((selecao) => selecao.nome);
}

function filtrarJogadores(
  jogadores,
  termo,
  clubes,
  selecoes,
  incluirPosicaoETitulos = false
) {
  const clubesComTag = obterClubesComTag(termo, clubes);
  const selecoesComTag = obterSelecoesComTag(termo, selecoes);

  const filtrados = jogadores.filter((jogador) => {
    if (
      termoMatch(jogador.nome, termo) ||
      termoMatch(jogador.nomeCompleto, termo) ||
      termoMatch(jogador.nacionalidade, termo) ||
      (incluirPosicaoETitulos && termoMatch(jogador.posicao, termo))
    ) {
      return true;
    }

    if (jogador.tags?.some((tag) => tag.toLowerCase().includes(termo))) {
      return true;
    }

    if (jogador.clubes?.some((clube) => clubesComTag.includes(clube.nome))) {
      return true;
    }

    if (jogador.selecao && selecoesComTag.includes(jogador.selecao.nome)) {
      return true;
    }

    if (jogador.clubes?.some((clube) => termoMatch(clube.nome, termo))) {
      return true;
    }

    if (jogador.selecao && termoMatch(jogador.selecao.nome, termo)) {
      return true;
    }

    if (incluirPosicaoETitulos) {
      if (jogador.nomesTitulosCompletos?.includes(termo)) {
        return true;
      }

      const titulos = [
        ...(jogador.titulosIndividuais || []),
        ...(jogador.titulos || []),
      ];

      if (titulos.some((titulo) => termoMatch(titulo.nome, termo))) {
        return true;
      }
    }

    return false;
  });

  return filtrados.sort((a, b) => {
    const nomeA = a.nome.toLowerCase();
    const nomeB = b.nome.toLowerCase();

    if (nomeA === termo && nomeB !== termo) return -1;
    if (nomeB === termo && nomeA !== termo) return 1;

    const isPresente = (jogador) =>
      jogador.clubes?.some(
        (clube) =>
          (clube.nome.toLowerCase().includes(termo) ||
            clubesComTag.includes(clube.nome)) &&
          clube.periodo.fim === "Presente"
      );

    const jogandoA = isPresente(a);
    const jogandoB = isPresente(b);

    if (jogandoA && !jogandoB) return -1;
    if (!jogandoA && jogandoB) return 1;

    return a.nome.localeCompare(b.nome);
  });
}

export function buscarJogadores(
  jogadores,
  clubes,
  selecoes,
  termoPesquisa = "",
  options = {}
) {
  const termo = termoPesquisa.trim().toLowerCase();
  const { mode = "search", limit } = options;

  const jogadoresPreparados = jogadores.map((jogador) => {
    const jogadorNormalizado = normalizarJogador(jogador);
    const titulosProcessados = processarTitulosDoJogador(
      jogadorNormalizado,
      clubes,
      selecoes
    );

    return {
      ...prepararJogadorParaBusca(jogadorNormalizado, titulosProcessados),
      titulosProcessados,
    };
  });
  const resultados = filtrarJogadores(
    jogadoresPreparados,
    termo,
    clubes,
    selecoes,
    mode === "search"
  );

  if (mode === "suggestions") {
    return resultados.slice(0, limit || 5);
  }

  if (limit) {
    return resultados.slice(0, limit);
  }

  return resultados;
}
