// Obtém a seção onde os resultados da pesquisa serão exibidos
const dadosTec = document.getElementById("resultados-pesquisa");

const botao2 = document.getElementById("mostrarTecnicos");

// Array com os dados dos times
const tecnicos = [
  // Pep Guardiola
  {
    nome: "Pep Guardiola",
    nacionalidade: "Espanha",
    dataNascimento: "18/01/1971",
    status: "Ativo",
    pagina: "https://pt.wikipedia.org/wiki/Josep_Guardiola#",
    clubes: [
      createClub("Barcelona", { inicio: "2007", fim: "2012" }, { jogos: 285 }),
      createClub(
        "Bayern de Munique",
        { inicio: "2013", fim: "2016" },
        { jogos: 161 }
      ),
      createClub(
        "Manchester City",
        { inicio: "2016", fim: "atual" },
        { jogos: 456 }
      ),
    ],
    esquemasTaticos: ["4-3-3, 3-4-3"], // Esquemas mais utilizados
    filosofiaDeJogo:
      "Posse de bola, jogo ofensivo e construção a partir da defesa.",
    conquistas: [
      //Barcelona
      {
        nome: "La Liga",
        anos: "2009, 2010, 2011",
        clube: "Barcelona",
      },
      {
        nome: "Copa Del Rey",
        anos: "2009, 2012",
        clube: "Barcelona",
      },
      {
        nome: "UEFA Champions League",
        anos: "2009, 2011",
        clube: "Barcelona",
      },
      {
        nome: "Supercopa da Espanha",
        anos: "2009, 2010, 2011",
        clube: "Barcelona",
      },
      {
        nome: "Supercopa da UEFA",
        anos: "2009, 2011",
        clube: "Barcelona",
      },
      {
        nome: "Mundial de Clubes",
        anos: "2009, 2011",
        clube: "Barcelona",
      },

      //Bayern de Munique
      {
        nome: "Supercopa da UEFA",
        anos: "2013",
        clube: "Bayern de Munique",
      },
      {
        nome: "Mundial de Clubes",
        anos: "2013",
        clube: "Bayern de Munique",
      },
      {
        nome: "Bundesliga",
        anos: "2014, 2015, 2016",
        clube: "Bayern de Munique",
      },
      {
        nome: "Copa da Alemanha",
        anos: "2014, 2016",
        clube: "Bayern de Munique",
      },

      //Manchester City
      {
        nome: "Premier League",
        anos: "2018, 2019, 2021, 2022, 2023 e 2024",
        clube: "Manchester City",
      },
      {
        nome: "EFL Cup",
        anos: "2018, 2019, 2020 e 2021",
        clube: "Manchester City",
      },
      {
        nome: "Supercopa da Inglaterra",
        anos: "2018, 2019, 2024",
        clube: "Manchester City",
      },
      {
        nome: "FA Cup",
        anos: "2019, 2023",
        clube: "Manchester City",
      },
      {
        nome: "UEFA Champions League",
        anos: "2023",
        clube: "Manchester City",
      },
      {
        nome: "Supercopa da UEFA",
        anos: "2023",
        clube: "Manchester City",
      },
      {
        nome: "Mundial de Clubes",
        anos: "2023",
        clube: "Manchester City",
      },

      //Individuais
      {
        nome: "Melhor treinador do ano",
        anos: "2009, 2010",
        categoria: "individual",
        logo: "Don Balón",
      },
      {
        nome: "Trofeo Miguel Muñoz",
        anos: "2009, 2010",
        categoria: "individual",
      },
      {
        nome: "Treinador do ano",
        anos: "2009, 2011, 2012",
        categoria: "individual",
        logo: "Onze d'Or",
      },
      {
        nome: "Melhor treinador do ano",
        anos: "2009, 2011",
        categoria: "individual",
        logo: "Revista World Soccer",
      },
      {
        nome: "Melhor treinador do mundo",
        anos: "2009, 2011, 2023",
        categoria: "individual",
        logo: "IFFHS",
      },
      {
        nome: "Melhor treinador do mundo",
        anos: "2023",
        categoria: "individual",
        logo: "Globe Soccer Awards",
      },
      {
        nome: "Treinador do Ano da FIFA",
        anos: "2011, 2023",
        categoria: "individual",
        logo: "FIFA",
      },
      {
        nome: "18º Melhor Treinador de Todos os Tempos",
        anos: "2023",
        categoria: "individual",
        logo: "ESPN",
        ranking: 18,
      },
      {
        nome: "5º Melhor Treinador de Todos os Tempos",
        anos: "2023",
        categoria: "individual",
        logo: "Revista World Soccer",
        ranking: 5,
      },
      {
        nome: "5º Melhor Treinador de Todos os Tempos",
        anos: "2019",
        categoria: "individual",
        logo: "France Football",
        ranking: 5,
      },
      {
        nome: "Treinadores do século XXI",
        anos: "2023",
        categoria: "individual",
        logo: "Globe Soccer Awards",
      },
    ],
    influencias: ["Johan Cruyff, Marcelo Bielsa"],
    curiosidades:
      "Considerado um dos maiores técnicos da história, Guardiola revolucionou o futebol com seu estilo de jogo.",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/b/be/Pep_2017_%28cropped%29.jpg",
  },
];

botao2.addEventListener("click", () => {
  let htmlContent = "";

  tecnicos.forEach((tecnico) => {
    tecnico.idade = calcularIdade(
      tecnico.dataNascimento,
      tecnico.dataFalecimento
    );
    tecnico = calcularPeriodoAtividade(tecnico);
    const tabelaTitulosTecnico = criarTabelaTitulosTecnico(tecnico);
    const tabelaTitulosPorClube = criarTabelaTitulosPorClube(tecnico);
    htmlContent += `
      <div class="jogador">
        <div class="div-superior">
          <div class="div-left">
              <img class="dado-imagem" src="${tecnico.imagem}" alt="">
          </div>
          <div class="div-info">
            <div class="numero-nome-nacionalidade">
              <a href="${tecnico.pagina}" target="_blank"><h2 id="nome">${
      tecnico.nome
    }</h2></a>
              <img class="nacionalidade" src="./assets/img__equipes/Logo_${
                tecnico.nacionalidade
              }.png" alt="">
            </div>
            <h3>Nascimento</h3>
            <p id="info">${tecnico.dataNascimento}  (${tecnico.idade})</p>
            <h3>Status</h3>
            <p id="info">${tecnico.status}</p>
            <h3>Principais Clubes</h3>
            ${gerarTabelaClubesTecnico(tecnico)}
            <h3>Esquemas Táticos</h3>
            <p id="info">${tecnico.esquemasTaticos}</p>
            <h3>Estilo de jogo</h3>
            <p id="info">${tecnico.filosofiaDeJogo}</p>
            <h3>Influências</h3>
            <p id="info">${tecnico.influencias}</p>
            <h3>Curiosidades</h3>
            <p id="info">${tecnico.curiosidades}</p>
          </div>
        </div>
        <button class="mostrar-esconder">Mostrar mais<span class="fa-solid fa-chevron-down"></span></button>
        <div class="conteudo-oculto" style="display: none;">
          <div class="tabelas-left">
            ${tabelaTitulosTecnico}
          </div>
          <div class="tabelas-right">
            ${tabelaTitulosPorClube}
          </div>
        </div>
      </div>
      `;
  });

  dadosTec.innerHTML = htmlContent;

  const botoes = document.querySelectorAll(".mostrar-esconder");
  const conteudos = document.querySelectorAll(".conteudo-oculto");

  botoes.forEach((botao, index) => {
    botao.addEventListener("click", () => {
      if (conteudos[index].style.display === "none") {
        conteudos[index].style.display = "flex";
        botao.innerHTML =
          'Mostrar menos<span class="fa-solid fa-chevron-up"></span>';
      } else {
        conteudos[index].style.display = "none";
        botao.innerHTML =
          'Mostrar mais<span class="fa-solid fa-chevron-down"></span>';
      }
    });
  });
});

// FUNÇÃO QUE VÊ PERÍODO DE ATIVIDADE DO JOGADOR --------------------------------------------------------------------------------

function calcularPeriodoAtividade(tecnico) {
  // Encontrar o ano inicial e final da carreira
  const anosInicio = tecnico.clubes.map((clube) => clube.periodo.inicio);
  const anosFim = tecnico.clubes.map((clube) => clube.periodo.fim);

  const anoInicioMin = Math.min(...anosInicio);
  const anoFimMax = Math.max(...anosFim);

  // Formatar o período
  const periodo = `(${anoInicioMin}-${anoFimMax})`;

  // Concatenar ao status se o tecnico estiver aposentado
  if (tecnico.status === "Aposentado") {
    tecnico.status += " " + periodo;
  }

  return tecnico;
}

//---------------------------------------------------------------------------------------------------------------------------------
// Função para criar objetos de clube
function createClub(nome, periodo, estatisticas) {
  return {
    nome,
    periodo,
    estatisticas,
  };
}

// FUNÇÃO PARA OS CLUBES -------------------------------------------------------------------------------------------------

function gerarTabelaClubesTecnico(tecnico) {
  let html = "";
  let contador = 1;

  tecnico.clubes.forEach((clube) => {
    html += `<img class="clubes" src="./assets/img__equipes/Logo_${clube.nome.replace(
      / /g,
      "_"
    )}.png" alt="">`;
    contador++;
    if (contador > 4) {
      return;
    }
  });

  return html;
}

// FUNÇÕES PARA A TABELA DE TITULOS---------------------------------------------------------------------------------------------

function criarTabelaTitulosTecnico(tecnico) {
  const titulosTecnico = tecnico.conquistas.filter(
    (conquistas) => conquistas.categoria === "individual"
  );

  if (titulosTecnico.length === 0) {
    return "<p>Nenhum título individual encontrado.</p>";
  }

  return `
      <table class="tabela-titulos">
        <thead>
          <tr>
            <th class="th-titulos" colspan="4">Títulos Individuais</th>
          </tr>
        </thead>
          <tbody>
              ${titulosTecnico
                .map(
                  (conquistas) => `
<tr class="div-titulos">
  <td class="item-titulo">
    <img class="campeonato" src="${gerarURLImagem(conquistas).replace(
      / /g,
      "_"
    )}" alt="">
  </td>
  <td class="item-titulo">
    ${conquistas.nome}
  </td>
  <td class="item-titulo">
    ${conquistas.anos}
  </td>
</tr>
              `
                )
                .join("")}
          </tbody>
      </table>
  `;
}

function criarTabelaTitulosPorClube(tecnico) {
  const titulosPorClube = tecnico.conquistas.filter(
    (conquistas) => conquistas.categoria !== "individual"
  );

  if (titulosPorClube.length === 0) {
    return "<p>Nenhum título por equipe encontrado.</p>";
  }

  return `
      <table class="tabela-titulos">
        <thead>
          <tr>
            <th class="th-titulos" colspan="4">Principais Títulos</th>
          </tr>
        </thead>
          <tbody>
              ${titulosPorClube
                .map(
                  (conquistas) => `
<tr class="div-titulos">
  <td class="item-titulo">
    <img class="campeonato" src="${gerarURLImagem(conquistas).replace(
      / /g,
      "_"
    )}" alt="">
  </td>
  <td class="item-titulo ">
    ${conquistas.nome}
  </td>
  <td class="item-titulo">
    ${conquistas.anos}
  </td>
  <td class="item-titulo">
    <img class="clubes" src="./assets/img__equipes/Logo_${conquistas.clube.replace(
      / /g,
      "_"
    )}.png" alt="">
  </td>
</tr>
              `
                )
                .join("")}
          </tbody>
      </table>
  `;
}
