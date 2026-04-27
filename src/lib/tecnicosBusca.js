import { processarTitulosDoJogador } from "@/utils/ProcessarTitulos";

function normalizarTecnico(tecnico) {
  return {
    ...tecnico,
    esquemasTaticos: tecnico.esquemasTaticos || tecnico.esquemas_taticos || [],
    filosofiaDeJogo: tecnico.filosofiaDeJogo || tecnico.filosofia_de_jogo || null,
    ultima_atualizacao:
      tecnico.ultima_atualizacao || tecnico.ultimaAtualizacao || null,
  };
}

function termoMatch(valor, termo) {
  return valor?.toLowerCase().includes(termo);
}

export function buscarTecnicos(tecnicos, clubes, termoPesquisa = "", options = {}) {
  const termo = termoPesquisa.trim().toLowerCase();
  const { mode = "search", limit } = options;

  const tecnicosPreparados = tecnicos.map((tecnico) => {
    const tecnicoNormalizado = normalizarTecnico(tecnico);
    const titulosProcessados = processarTitulosDoJogador(
      tecnicoNormalizado,
      clubes,
      []
    );

    return {
      ...tecnicoNormalizado,
      titulosProcessados,
      nomesTitulosCompletos: [
        ...(tecnicoNormalizado.titulos || []).map((titulo) => titulo.nome),
        ...titulosProcessados.map((titulo) => titulo.nome),
      ]
        .join(" ")
        .toLowerCase(),
    };
  });

  const filtrados = tecnicosPreparados.filter((tecnico) => {
    if (!termo) return true;

    if (
      termoMatch(tecnico.nome, termo) ||
      termoMatch(tecnico.nomeCompleto, termo) ||
      termoMatch(tecnico.nacionalidade, termo) ||
      termoMatch(tecnico.descricao, termo) ||
      termoMatch(tecnico.curiosidades, termo) ||
      termoMatch(tecnico.filosofiaDeJogo, termo) ||
      termoMatch(tecnico.nomesTitulosCompletos, termo)
    ) {
      return true;
    }

    if (tecnico.tags?.some((tag) => tag.toLowerCase().includes(termo))) {
      return true;
    }

    if (
      tecnico.influencias?.some((influencia) =>
        influencia.toLowerCase().includes(termo)
      )
    ) {
      return true;
    }

    if (
      tecnico.esquemasTaticos?.some((esquema) =>
        esquema.toLowerCase().includes(termo)
      )
    ) {
      return true;
    }

    if (tecnico.clubes?.some((clube) => termoMatch(clube.nome, termo))) {
      return true;
    }

    return (tecnico.titulos || []).some((titulo) => termoMatch(titulo.nome, termo));
  });

  const ordenados = filtrados.sort((a, b) => {
    const nomeA = a.nome.toLowerCase();
    const nomeB = b.nome.toLowerCase();

    if (nomeA === termo && nomeB !== termo) return -1;
    if (nomeB === termo && nomeA !== termo) return 1;

    const isPresente = (tecnico) =>
      tecnico.clubes?.some(
        (clube) => clube.nome.toLowerCase().includes(termo) && clube.periodo.fim === "Presente"
      );

    const ativoA = isPresente(a);
    const ativoB = isPresente(b);

    if (ativoA && !ativoB) return -1;
    if (!ativoA && ativoB) return 1;

    return a.nome.localeCompare(b.nome);
  });

  if (mode === "suggestions") {
    return ordenados.slice(0, limit || 5);
  }

  if (limit) {
    return ordenados.slice(0, limit);
  }

  return ordenados;
}
