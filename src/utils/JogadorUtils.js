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

function extrairPrimeiroAno(conquistas) {
  let anoString = "";

  if (
    conquistas.datas &&
    Array.isArray(conquistas.datas) &&
    conquistas.datas.length > 0
  ) {
    const primeiraData = conquistas.datas[0].fim.trim();
    const match = primeiraData.match(/\d{4}$/);
    if (match) {
      anoString = match[0];
    }
  } else if (conquistas.datas) {
    const primeiraData = conquistas.datas.split(",")[0].trim();
    const match = primeiraData.match(/\d{4}$/);
    if (match) {
      anoString = match[0];
    }
  } else if (
    conquistas.anos &&
    Array.isArray(conquistas.anos) &&
    conquistas.anos.length > 0
  ) {
    anoString = conquistas.anos[0];
  }

  return anoString;
}

export function gerarURLImagem(conquistas) {
  const ano = conquistas.logoVariavel ? extrairPrimeiroAno(conquistas) : null;

  if (conquistas.logo) {
    let logoConquista = conquistas.logo;

    if (conquistas.logoVariavel) {
      logoConquista += `_${ano}`;
    }
    return `/img__titulos/Logo_${logoConquista}.png`;
  }

  let logoConquista = conquistas.nome;

  if (conquistas.logoVariavel) {
    logoConquista += `_${ano}`;
  }

  return `/img__titulos/Logo_${logoConquista}.png`;
}

export function calcularPeriodoAtividade(jogador) {
  if (!jogador.clubes || jogador.clubes.length === 0) {
    return jogador;
  }

  const extrairAnoNumerico = (dataString) => {
    if (dataString === "Presente") {
      return new Date().getFullYear();
    }
    const partes = dataString.split("/");
    return parseInt(partes[2], 10);
  };

  const anosInicio = jogador.clubes.map((clube) =>
    extrairAnoNumerico(clube.periodo.inicio)
  );
  const anosFim = jogador.clubes.map((clube) =>
    extrairAnoNumerico(clube.periodo.fim)
  );

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
