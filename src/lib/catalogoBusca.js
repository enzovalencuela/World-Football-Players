function termoMatch(valor, termo) {
  return valor?.toLowerCase().includes(termo);
}

function ordenarPorNome(items, termo) {
  return [...items].sort((a, b) => {
    const nomeA = a.nome.toLowerCase();
    const nomeB = b.nome.toLowerCase();

    if (nomeA === termo && nomeB !== termo) return -1;
    if (nomeB === termo && nomeA !== termo) return 1;

    return a.nome.localeCompare(b.nome);
  });
}

function buscarNosTitulos(item, termo) {
  return item.titulos?.some((titulo) => {
    if (termoMatch(titulo.nome, termo)) {
      return true;
    }

    return titulo.datas?.some(
      (periodo) =>
        termoMatch(periodo.inicio, termo) || termoMatch(periodo.fim, termo)
    );
  });
}

export function buscarCatalogo(items, termoPesquisa = "", fields = [], options = {}) {
  const termo = termoPesquisa.trim().toLowerCase();
  const { mode = "search", limit } = options;

  const resultadosBase =
    termo === ""
      ? items
      : items.filter((item) => {
          if (fields.some((field) => termoMatch(item[field], termo))) {
            return true;
          }

          if (item.tags?.some((tag) => tag.toLowerCase().includes(termo))) {
            return true;
          }

          return buscarNosTitulos(item, termo);
        });

  const resultados = ordenarPorNome(resultadosBase, termo);

  if (mode === "suggestions") {
    return resultados.slice(0, limit || 5);
  }

  if (limit) {
    return resultados.slice(0, limit);
  }

  return resultados;
}
