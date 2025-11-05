export function createClub(nome, periodo, estatisticas) {
  return {
    nome,
    periodo,
    estatisticas,
  };
}

export function calcularIdade(dataNascimento, dataFalecimento = null) {
  const partesNascimento = dataNascimento.split("/");
  const partesFalecimento = dataFalecimento ? dataFalecimento.split("/") : null;

  const nascimento = new Date(
    partesNascimento[2],
    partesNascimento[1] - 1,
    partesNascimento[0]
  );
  const falecimento = dataFalecimento
    ? new Date(
        partesFalecimento[2],
        partesFalecimento[1] - 1,
        partesFalecimento[0]
      )
    : null;

  if (falecimento) {
    const idade = Math.floor(
      (falecimento.getTime() - nascimento.getTime()) /
        (1000 * 60 * 60 * 24 * 365.25)
    );
    return `Faleceu em ${dataFalecimento} com ${idade} anos.`;
  } else {
    const idade = Math.floor(
      (Date.now() - nascimento.getTime()) / (1000 * 60 * 60 * 24 * 365.25)
    );
    return `${idade} anos`;
  }
}

export function calcularIdadeAposentadoria(dataNascimento, anoFimMax) {
  const anoNascimento = parseInt(dataNascimento.split("/")[2]);
  const anoAposentadoria = parseInt(anoFimMax);

  if (isNaN(anoNascimento) || isNaN(anoAposentadoria)) {
    return null;
  }

  const idade = anoAposentadoria - anoNascimento;

  return idade;
}

export function gerarURLImagem(conquistas) {
  if (conquistas.logo) {
    let logoConquista = conquistas.logo;
    if (conquistas.logoVariavel) {
      logoConquista += `_${conquistas.anos}`;
    }
    return `/img__titulos/Logo_${logoConquista}.png`;
  }
  let logoConquistaNome = conquistas.nome;
  if (conquistas.logoVariavel) {
    logoConquistaNome += `_${conquistas.anos}`;
  }
  return `/img__titulos/Logo_${logoConquistaNome}.png`;
}

export function calcularPeriodoAtividade(jogador) {
  if (!jogador.clubes || jogador.clubes.length === 0) {
    return [];
  }

  const anosInicio = jogador.clubes.map((clube) => clube.periodo.inicio);
  const anosFim = jogador.clubes.map((clube) => clube.periodo.fim);
  const anoInicioMin = Math.min(...anosInicio);
  const anoFimMax = Math.max(...anosFim);
  let periodo = `(${anoInicioMin} - ${anoFimMax})`;

  if (jogador.status === "Aposentado") {
    const idadeAposentadoria = calcularIdadeAposentadoria(
      jogador.dataNascimento,
      anoFimMax
    );

    jogador.status =
      periodo + ` Aposentou-se aos ${idadeAposentadoria} anos de idade`;
  } else {
    jogador.status += periodo;
  }

  return jogador;
}
