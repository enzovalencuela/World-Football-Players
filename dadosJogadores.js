const jogadores = [
  // ALEMANHA -------------------------------------------------------------------------------------------------------------------------------------------------------
  // Ballack
  {
    nome: "Ballack",
    background: "plate",
    descricao:
      "Meio-campista alemão conhecido por sua força física, visão de jogo e chutes potentes. Ballack foi um dos principais jogadores da seleção alemã e de clubes como Bayern de Munique e Chelsea.",
    pagina: "https://www.instagram.com/michaelballackofficial/",
    numero: "13",
    posicao: "Meio-campista",
    dataNascimento: "26/09/1976",
    status: "Aposentado",
    nacionalidade: "Alemanha",
    imagem:
      "https://tmssl.akamaized.net/images/foto/galerie/michael-ballack-wm-2006-1588067616-37229.jpg",
    clubes: [
      createClub(
        "Chemnitzer",
        { inicio: "1995", fim: "1997" },
        { jogos: 51, gols: 18, assistencias: 0 }
      ),
      createClub(
        "Kaiserslautern",
        { inicio: "1997", fim: "1999" },
        { jogos: 57, gols: 21, assistencias: 0 }
      ),
      createClub(
        "Bayer Leverkusen",
        { inicio: "1999", fim: "2002" },
        { jogos: 156, gols: 70, assistencias: 32 }
      ),
      createClub(
        "Bayern de Munique",
        { inicio: "2002", fim: "2006" },
        { jogos: 157, gols: 62, assistencias: 45 }
      ),
      createClub(
        "Chelsea",
        { inicio: "2006", fim: "2010" },
        { jogos: 167, gols: 26, assistencias: 30 }
      ),
    ],
    selecao: {
      nome: "Alemanha",
      periodo: { inicio: "1999", fim: "2010" },
      estatisticas: { jogos: 98, gols: 42, assistencias: 20 },
    },
    titulos: [
      {
        nome: "Premier League",
        anos: "2010",
        clube: "Chelsea",
      },
      {
        nome: "Supercopa da Inglaterra",
        anos: "2009",
        clube: "Chelsea",
      },
      {
        nome: "FA Cup",
        anos: "2007, 2009, 2010",
        clube: "Chelsea",
      },
      {
        nome: "EFL Cup",
        anos: "2007",
        clube: "Chelsea",
      },
      {
        nome: "FIFA 100",
        anos: "2004",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Copa da Liga Alemã",
        anos: "2004",
        clube: "Bayern de Munique",
      },
      {
        nome: "Copa da Alemanha",
        anos: "2003, 2005, 2006",
        clube: "Bayern de Munique",
      },
      {
        nome: "Bundesliga",
        anos: "2003, 2005, 2006",
        clube: "Bayern de Munique",
      },
      {
        nome: "Bundesliga",
        anos: "1998",
        clube: "Kaiserslautern",
      },
    ],
    tags: [],
  },

  // Franz Beckenbauer
  {
    nome: "Franz Beckenbauer",
    background: "gold",
    descricao:
      "Considerado um dos maiores defensores de todos os tempos, Franz Beckenbauer era conhecido por sua elegância, visão de jogo e habilidade com a bola. Campeão mundial como jogador e técnico pela Alemanha, ele revolucionou a posição de líbero.",
    pagina: "https://en.wikipedia.org/wiki/Franz_Beckenbauer", // Ajustar para uma página com informações mais detalhadas em português, se disponível
    numero: "5", // Número tradicionalmente associado a Beckenbauer
    posicao: "Líbero",
    dataNascimento: "11/09/1945",
    dataFalecimento: "07/01/2024",
    status: "Aposentado",
    nacionalidade: "Alemanha",
    imagem:
      "https://destaqueregional.jor.br/images/noticias/1767/7a05deec0feab99a37bb0c03a2958c8e.jpeg",
    clubes: [
      createClub(
        "Bayern de Munique",
        { inicio: "1964", fim: "1977" },
        { jogos: 584, gols: 76, assistencias: 0 }
      ),
      createClub(
        "New York Cosmos",
        { inicio: "1977", fim: "1980" },
        { jogos: 105, gols: 21, assistencias: 0 }
      ),
      createClub(
        "Hamburgo",
        { inicio: "1980", fim: "1982" },
        { jogos: 37, gols: 0, assistencias: 0 }
      ),
      createClub(
        "New York Cosmos",
        { inicio: "1983", fim: "1983" },
        { jogos: 27, gols: 2, assistencias: 0 }
      ),
    ],
    selecao: {
      nome: "Alemanha",
      periodo: { inicio: "1965", fim: "1977" },
      estatisticas: { jogos: 103, gols: 14, assistencias: 0 },
    },
    titulos: [
      //Bayern de Munique
      {
        nome: "Copa da Alemanha",
        anos: "1966, 1967, 1969 e 1971",
        clube: "Bayern de Munique",
      },
      {
        nome: "Recopa Europeia",
        anos: "1967",
        clube: "Bayern de Munique",
      },
      {
        nome: "Bundesliga",
        anos: "1969, 1972, 1973 e 1974",
        clube: "Bayern de Munique",
      },
      {
        nome: "UEFA Champions League",
        anos: "1974, 1975 e 1976",
        clube: "Bayern de Munique",
      },
      {
        nome: "Copa Intercontinental",
        anos: "1976",
        clube: "Bayern de Munique",
      },

      //New York Cosmos
      {
        nome: "North American Soccer League",
        anos: "1977, 1978 e 1980",
        clube: "New York Cosmos",
      },

      //Hamburgo
      {
        nome: "Bundesliga",
        anos: "1982",
        clube: "Hamburgo",
      },

      // Seleção Alemã
      {
        nome: "Eurocopa",
        anos: "1972",
        clube: "Alemanha",
        logoVariavel: true,
      },
      {
        nome: "Copa do Mundo",
        anos: "1974",
        clube: "Alemanha",
        logoVariavel: true,
      },
    ],
    tags: [],
  },

  // Gerd Müller
  {
    nome: "Gerd Müller",
    background: "gold",
    descricao:
      "Considerado um dos maiores artilheiros da história do futebol, Müller era conhecido por sua precisão e faro de gol. Sua eficiência nas finalizações o tornou uma lenda do Bayern de Munique e da seleção alemã.",
    pagina: "https://pt.wikipedia.org/wiki/Gerd_Muller",
    nacionalidade: "Alemanha",
    imagem:
      "https://lendasdofutebol.com/wp-content/uploads/2021/01/gerd-muller-perfil-optimized.jpg",
    numero: "9",
    posicao: "Atacante",
    dataNascimento: "03/11/1945",
    dataFalecimento: "15/08/2021",
    status: "Aposentado",
    curiosidades:
      "Müller detém o recorde de gols em uma única temporada da Bundesliga (40 gols) e é o maior artilheiro da história da competição. Ele era conhecido como 'Der Bomber' por sua capacidade de marcar gols.",
    clubes: [
      createClub("Bayern de Munique", { inicio: "1964", fim: "1979" }),
      createClub("Fort Lauderdale Strikers", { inicio: "1979", fim: "1982" }),
    ],
    selecao: {},
    titulos: [
      {
        nome: "FIFA 100",
        anos: "2004",
        clube: "Individual",
      },
      {
        nome: "Copa Intercontinental",
        anos: "1976",
        clube: "Bayern de Munique",
      },
      {
        nome: "Champions League",
        anos: "1974, 1975 e 1976",
        clube: "Bayern de Munique",
      },
      {
        nome: "Copa do Mundo",
        anos: "1974",
        clube: "Alemanha",
        logoVariavel: true,
      },
      {
        nome: "Eurocopa",
        anos: "1972",
        clube: "Alemanha",
        logoVariavel: true,
      },
      {
        nome: "Bola de Ouro",
        anos: "1970",
        clube: "Individual",
      },
      {
        nome: "Bundesliga",
        anos: "1969, 1972, 1973 e 1974",
        clube: "Bayern de Munique",
      },
      {
        nome: "Copa da Alemanha",
        anos: "1966, 1967, 1969 e 1971",
        clube: "Bayern de Munique",
      },
    ],
    tags: [],
  },

  // Jerome Boateng
  {
    nome: "Jerome Boateng",
    background: "#",
    descricao:
      "Zagueiro central conhecido por sua velocidade, força física e habilidade com a bola nos pés. Boateng foi peça fundamental nas conquistas do Bayern de Munique e da seleção alemã, demonstrando grande versatilidade e liderança.",
    pagina: "https://pt.wikipedia.org/wiki/Jerome_Boateng",
    nacionalidade: "Alemanha",
    imagem:
      "https://tmssl.akamaized.net/images/foto/galerie/jerome-boateng-olympique-lyon-2021-1631513447-70946.jpg",
    numero: "17",
    posicao: "Zagueiro",
    dataNascimento: "3/09/1988",
    status: "Ativo",
    curiosidades:
      "Boateng é filho de um jogador de futebol ghanense e de uma alemã. Ele representou a Alemanha em diversas competições internacionais, incluindo a Copa do Mundo e a Eurocopa.",
    clubes: [
      {
        nome: "Hertha Berlim",
        periodo: "2006-2007",
      },
      {
        nome: "Hamburgo",
        periodo: "2007-2010",
      },
      {
        nome: "Manchester City",
        periodo: "2010-2011",
      },
      {
        nome: "Bayern de Munique",
        periodo: "2011-2021",
      },
      {
        nome: "Lyon",
        periodo: "2021-2022",
      },
      {
        nome: "Salernitana",
        periodo: "2024",
      },
      {
        nome: "LASK",
        periodo: "2024",
      },
    ],
    selecao: {},
    titulos: [
      {
        nome: "Mundial de Clubes",
        anos: "2013, 2020",
        clube: "Bayern de Munique",
      },
      {
        nome: "Supercopa da UEFA",
        anos: "2013, 2020",
        clube: "Bayern de Munique",
      },
      {
        nome: "Copa da Alemanha",
        anos: "2013, 2014, 2016, 2019, 2020",
        clube: "Bayern de Munique",
      },
      {
        nome: "Champions League",
        anos: "2013, 2020",
        clube: "Bayern de Munique",
      },
      {
        nome: "Bundesliga",
        anos: "2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020",
        clube: "Bayern de Munique",
      },
      {
        nome: "Copa do Mundo",
        anos: "2014",
        clube: "Alemanha",
        logoVariavel: true,
      },
      {
        nome: "Supercopa da Alemanha",
        anos: "2012",
        clube: "Bayern de Munique",
      },
      {
        nome: "FA Cup",
        anos: "2011",
        clube: "Manchester City",
      },
    ],
    tags: [],
  },

  // Julian Draxler
  {
    nome: "Julian Draxler",
    background: "#",
    descricao:
      "Meia-atacante alemão conhecido por sua habilidade técnica, dribles e visão de jogo. Draxler teve passagens por clubes como Schalke 04, Wolfsburg e Paris Saint-Germain.",
    pagina: "https://www.instagram.com/draxlerofficial/",
    nacionalidade: "Alemanha",
    imagem:
      "https://assets.goal.com/images/v3/blt0dd0f38fabb3a5c6/GettyImages-1748703894.jpg",
    numero: "7",
    posicao: "Meia-atacante",
    dataNascimento: "20/09/1993",
    status: "Ativo",
    curiosidades:
      "Draxler foi um dos jogadores mais promissores da nova geração de jogadores alemães e conquistou diversos títulos com o Paris Saint-Germain.",
    clubes: [
      {
        nome: "Schalke 04",
        periodo: "2011-2015",
      },
      {
        nome: "Wolfsburg",
        periodo: "2015-2017",
      },
      {
        nome: "Paris Saint-Germain",
        periodo: "2017-2023",
      },
      {
        nome: "Benfica",
        periodo: "2022-2023",
      },
      {
        nome: "Al-Ahli",
        periodo: "2023-presente",
      },
    ],
    selecao: {},
    titulos: [
      {
        nome: "Primeira Liga",
        anos: "2023",
        clube: "Benfica",
      },
      {
        nome: "Ligue 1",
        anos: "2018, 2019, 2020, 2022",
        clube: "Paris Saint-Germain",
      },
      {
        nome: "Copa da França",
        anos: "2018, 2020",
        clube: "Paris Saint-Germain",
      },
      {
        nome: "Copa da Liga Francesa",
        anos: "2020",
        clube: "Paris Saint-Germain",
      },
      {
        nome: "Copa das Confederações",
        anos: "2017",
        clube: "Alemanha",
        logoVariavel: true,
      },
      {
        nome: "Copa do Mundo",
        anos: "2014",
        clube: "Alemanha",
        logoVariavel: true,
      },
      {
        nome: "Supercopa da Alemanha",
        anos: "2011",
        clube: "Schalke 04",
      },
      {
        nome: "Copa da Alemanha",
        anos: "2011",
        clube: "Schalke 04",
      },
    ],
    tags: [],
  },

  //Marco Reus
  {
    nome: "Marco Reus",
    background: "plate",
    imagem:
      "https://s3-images.sportnews.bz/_images/fit/1000x563/img/2024/12/marco-reus-im-trikot-von-los-angeles-galaxy.jpg",
    pagina: "https://www.instagram.com/marcinho11/",
    descricao:
      "Meio-campista ofensivo alemão, ícone e ex-capitão do Borussia Dortmund, reverenciado por sua velocidade, dribles precisos, inteligência tática, e uma incrível capacidade de marcar gols e dar assistências. Apesar das lesões que marcaram sua carreira, Reus é amplamente considerado um dos jogadores mais talentosos de sua geração na Alemanha, um verdadeiro 'Fussballgott' para os torcedores do BVB.",
    numero: "18",
    posicao: "Meia Ofensivo",
    nacionalidade: "Alemanha",
    dataNascimento: "31/05/1989",
    status: "Ativo (Los Angeles Galaxy)",
    clubes: [
      createClub(
        "Rot Weiss Ahlen",
        { inicio: "2006", fim: "2009" },
        { jogos: 48, gols: 6, assistencias: 0 }
      ),
      createClub(
        "Borussia Mönchengladbach",
        { inicio: "2009", fim: "2012" },
        { jogos: 109, gols: 41, assistencias: 28 }
      ),
      createClub(
        "Borussia Dortmund",
        { inicio: "2012", fim: "2024" },
        { jogos: 429, gols: 170, assistencias: 131 }
      ),
      createClub(
        "Los Angeles Galaxy",
        { inicio: "2024", fim: "Presente" },
        { jogos: 1, gols: 1, assistencias: 0 }
      ),
    ],
    selecao: {
      nome: "Alemanha",
      periodo: { inicio: "2011", fim: "2023" },
      estatisticas: { jogos: 48, gols: 15, assistencias: 14 },
    },
    titulos: [
      // Los Angeles Galaxy
      {
        nome: "MLS Cup",
        anos: "2024",
        clube: "Los Angeles Galaxy",
      },
      {
        nome: "Conferência Oeste",
        anos: "2024",
        clube: "Los Angeles Galaxy",
      },
      // Borussia Dortmund
      {
        nome: "Copa da Alemanha",
        anos: "2016-17, 2020-21",
        clube: "Borussia Dortmund",
      },
      {
        nome: "Supercopa da Alemanha",
        anos: "2013, 2014, 2019",
        clube: "Borussia Dortmund",
      },
      {
        nome: "UEFA Champions League (Vice-campeão)",
        logo: "UEFA Champions League",
        anos: "2012-13, 2023-24",
        clube: "Borussia Dortmund",
      },
      // Individuais
      {
        nome: "Futebolista Alemão do Ano",
        anos: "2012, 2019",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Jogador da Temporada da Bundesliga",
        logo: "Bundesliga",
        anos: "2011-12, 2013-14, 2015-16, 2018-19",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Time do Ano da Bundesliga",
        logo: "Bundesliga",
        anos: "2011-12, 2013-14, 2014-15, 2015-16, 2018-19",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Jogador do Mês da Bundesliga",
        logo: "Bundesliga",
        anos: "Setembro 2018, Novembro 2018, Dezembro 2018, Março 2019",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Equipe do Ano da UEFA Champions League",
        logo: "UEFA Champions League",
        anos: "2013-14",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Melhor Jogador do Borussia Dortmund da Temporada",
        anos: "2013-14, 2015-16, 2018-19",
        clube: "Individual",
        categoria: "individual",
      },
    ],
    tags: [
      "Reus",
      "Marco Reus",
      "Borussia Dortmund",
      "BVB",
      "Alemanha",
      "Meia Ofensivo",
      "Ponta",
      "Capitão",
      "Lenda",
      "MR11",
      "Fussballgott",
      "Bundesliga",
    ],
  },

  // Musiala
  {
    nome: "Musiala",
    background: "promise",
    descricao:
      "Joia da seleção alemã, Musiala é um meia-atacante com grande potencial e habilidade técnica. Destaca-se pela sua versatilidade e visão de jogo.",
    pagina: "https://www.instagram.com/jamalmusiala10/",
    nacionalidade: "Alemanha",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/15/2024/11/09/musiala-do-bayern-comemora-gol-marcado-sobre-o-st-pauli-pelo-campeonato-alemao-1731172956821_v2_450x600.jpg",
    numero: "42",
    posicao: "Meia-atacante",
    dataNascimento: "18/2/2003",
    status: "Ativo",
    curiosidades: "Nasceu em Stuttgart, mas representa a seleção alemã.",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Niclas Füllkrug
  {
    nome: "Niclas Füllkrug",
    background: "#",
    descricao:
      "Atacante alemão conhecido por sua habilidade nas finalizações e representou a Alemanha na Copa do Mundo de 2022.",
    pagina: "https://www.instagram.com/niclas.fuellkrug24/",
    nacionalidade: "Alemanha",
    imagem:
      "https://static.standard.co.uk/2024/10/17/16/36/GettyImages-2166240259.jpg?trim=0,0,171,0&quality=75&auto=webp&width=1000",
    numero: "11",
    posicao: "Atacante",
    dataNascimento: "09/02/1993",
    status: "Ativo",
    curiosidades:
      "Teve uma lesão grave no joelho que o afastou dos gramados, mas conseguiu se recuperar e se tornar um dos principais atacantes da Alemanha.",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Oliver Kahn
  {
    nome: "Oliver Kahn",
    background: "plate",
    descricao:
      "Um dos maiores goleiros da história, Kahn era conhecido por sua agressividade e liderança. Ele foi fundamental para a conquista da Copa do Mundo de 2002 pela Alemanha.",
    pagina: "https://www.instagram.com/oliver_kahn/",
    nacionalidade: "Alemanha",
    imagem:
      "https://i.pinimg.com/736x/24/86/68/248668603987acaac362ce1e18161269.jpg",
    numero: "1",
    posicao: "Goleiro",
    dataNascimento: "31/06/1969",
    status: "Aposentado",
    curiosidades:
      "Kahn é conhecido por suas defesas espetaculares e por sua personalidade forte.",
    clubes: [],
    selecao: {},
    titulos: [
      {
        nome: "Bundesliga",
        anos: "1997, 1999, 2000, 2001, 2003, 2005, 2006, 2008",
        clube: "Bayern de Munique",
      },
      {
        nome: "Copa da Alemanha",
        anos: "1998, 2000, 2003, 2005, 2006, 2008",
        clube: "Bayern de Munique",
      },
      {
        nome: "UEFA Champions League",
        anos: "2001",
        clube: "Bayern de Munique",
      },
      {
        nome: "Copa Intercontinental",
        anos: "2001",
        clube: "Bayern de Munique",
      },
      {
        nome: "Eurocopa",
        anos: "1996",
        clube: "Alemanha",
        logoVariavel: true,
      },
      {
        nome: "FIFA 100",
        anos: "2004",
        clube: "Individual",
        categoria: "individual",
      },
    ],
    tags: [],
  },

  // Schweinsteiger
  {
    nome: "Schweinsteiger",
    background: "plate",
    descricao:
      "Um dos maiores meio-campistas da história, Schweinsteiger era conhecido por sua visão de jogo e liderança. Foi campeão do mundo em 2014 com a Alemanha.",
    pagina: "https://pt.wikipedia.org/wiki/Bastian_Schweinsteiger",
    nacionalidade: "Alemanha",
    imagem:
      "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2016/06/12/1874896-39494913-2560-1440.jpg",
    numero: "31",
    posicao: "Meio-campista",
    dataNascimento: "1/8/1984",
    status: "Aposentado",
    curiosidades: "Considerado um dos maiores ídolos do Bayern de Munique.",
    clubes: [
      {
        nome: "Bayern de Munique",
        periodo: "2002-2015",
      },
      {
        nome: "Manchester United",
        periodo: "2015-2017",
      },
      {
        nome: "Chicago Fire",
        periodo: "2017-2019",
      },
    ],
    selecao: {},
    titulos: [
      {
        img: "Bundesliga",
        nome: "Campeonato Alemão",
        anos: "2003, 2005, 2006, 2008, 2010, 2013",
        clube: "Bayern_de_Munique",
      },
      {
        img: "Copa_da_Alemanha",
        nome: "Copa da Alemanha",
        anos: "2003, 2005, 2006, 2008, 2010, 2013, 2014",
        clube: "Bayern_de_Munique",
      },
      {
        img: "Champions_League",
        nome: "Liga dos Campeões da UEFA",
        anos: "2013",
        clube: "Bayern_de_Munique",
      },
      {
        img: "Copa_do_Mundo_2014",
        nome: "Copa do Mundo",
        anos: "2014",
        clube: "Alemanha",
      },
      // ... outros títulos
    ],
    tags: [],
  },

  //Ter Stegen
  {
    nome: "Ter Stegen",
    background: "plate",
    descricao:
      "Goleiro alemão conhecido por suas defesas difíceis e habilidade com os pés, Ter Stegen foi um dos pilares do Barcelona por muitos anos.",
    pagina: "https://www.instagram.com/mterstegen1/",
    nacionalidade: "Alemanha",
    imagem:
      "https://i.pinimg.com/736x/ca/48/22/ca48220e5fc8f5efdf7c972b842de539.jpg",
    numero: "1",
    posicao: "Goleiro",
    dataNascimento: "30/04/1992",
    curiosidades:
      "Ter Stegen iniciou sua carreira no Borussia Mönchengladbach antes de se transferir para o Barcelona.",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Thomas Müller
  {
    nome: "Thomas Müller",
    background: "plate",
    descricao:
      "Um dos jogadores mais versáteis de sua geração, Müller é conhecido por seu faro de gol e inteligência tática. Ele foi fundamental para os sucessos do Bayern de Munique e da seleção alemã.",
    pagina: "https://www.instagram.com/thomasmueller/",
    nacionalidade: "Alemanha",
    imagem:
      "https://cdn.vox-cdn.com/thumbor/VrZJTattJWa3HDFRunS2N2rtfCc=/0x0:6245x4466/1200x800/filters:focal(2264x1187:3262x2185)/cdn.vox-cdn.com/uploads/chorus_image/image/73756315/2186511097.0.jpg",
    numero: "25",
    posicao: "Atacante",
    dataNascimento: "13/09/1989",
    status: "Ativo",
    curiosidades:
      "Müller é conhecido por sua comemoração característica de deslizar de joelhos e por sua capacidade de jogar em diversas posições do ataque.",
    clubes: [],
    selecao: {},
    titulos: [
      {
        img: "Bundesliga",
        nome: "Campeonato Alemão",
        anos: "2010, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023",
        clube: "Bayern_de_Munique",
      },
      {
        img: "Copa_da_Alemanha",
        nome: "Copa da Alemanha",
        anos: "2010, 2013, 2014, 2016, 2019, 2020",
        clube: "Bayern_de_Munique",
      },
      {
        img: "DFL-Supercup",
        nome: "Supercopa da Alemanha",
        anos: "2010, 2012, 2016, 2017, 2018, 2020, 2021, 2022",
        clube: "Bayern_de_Munique",
      },
      {
        img: "Champions_League",
        nome: "Liga dos Campeões da UEFA",
        anos: "2013, 2020",
        clube: "Bayern_de_Munique",
      },
      {
        img: "Supercopa_da_UEFA",
        nome: "Supercopa da UEFA",
        anos: "2013, 2020",
        clube: "Bayern_de_Munique",
      },
      {
        img: "Copa_do_Mundo_2014",
        nome: "Copa do Mundo",
        anos: "2014",
        clube: "Alemanha",
      },
    ],
    tags: [],
  },

  // Toni Kroos
  {
    nome: "Toni Kroos",
    background: "plate",
    descricao:
      "Meia alemão conhecido por sua precisão nos passes e visão de jogo, Kroos foi um dos pilares do Real Madrid por muitos anos.",
    pagina: "https://www.instagram.com/toni.kroos/",
    nacionalidade: "Alemanha",
    imagem:
      "https://cdn-thegame.imago-images.com/wp-content/uploads/imago1045901715h-860x1149.jpg",
    numero: "8",
    posicao: "Meia",
    dataNascimento: "04/01/1990",
    status: "Aposentado",
    curiosidades:
      "Kroos começou sua carreira no Bayern de Munique e foi campeão da Copa do Mundo de 2014 com a Alemanha.",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // ARGENTINA -------------------------------------------------------------------------------------------------------------------------------------------------------

  //Agustin Rossi
  {
    nome: "Agustin Rossi",
    background: "#",
    descricao:
      "Goleiro argentino conhecido por suas defesas difíceis e segurança sob as traves. Um dos destaques do Flamengo.",
    pagina: "#",
    nacionalidade: "Argentina",
    imagem:
      "https://medias.itatiaia.com.br/dims4/default/86b8c18/2147483647/strip/true/crop/4186x2357+0+0/resize/1000x563!/quality/90/?url=https%3A%2F%2Fk2-prod-radio-itatiaia.s3.us-east-1.amazonaws.com%2Fbrightspot%2F93%2F66%2F76dec9294d0bae050aedb4e8bbfa%2Fflamengo-x-fluminense-campeonato-carioca-maracana-16-03-2024-126.jpg",
    numero: "1",
    posicao: "Goleiro",
    dataNascimento: "09/01/1995",
    status: "Ativo",
    curiosidades:
      "Chegou ao Flamengo em 2022 e logo se tornou ídolo da torcida. Conhecido por sua liderança e habilidade em cobranças de pênalti.",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Alejandro Garnacho
  {
    nome: "Alejandro Garnacho",
    background: "promise",
    descricao:
      "Um jovem talento que vem se destacando no futebol mundial! Garnacho é conhecido por sua velocidade, dribles e habilidade de finalizar as jogadas. Mesmo sendo muito jovem ele já é considerado uma das maiores promessas do futebol.",
    pagina: "https://www.instagram.com/alejandrogarnacho/",
    nacionalidade: "Argentina",
    imagem:
      "https://talksport.com/wp-content/uploads/sites/5/2025/01/alejandro-garnacho-manchester-united-reacts-958596867.jpg?strip=all&quality=100&w=1080&h=1080&crop=1",
    numero: "17",
    posicao: "Ponta-Esquerda",
    dataNascimento: "01/07/2004",
    status: "Ativo",
    curiosidades:
      "Garnacho é um jogador muito versátil, podendo atuar tanto pela esquerda como pela direita. Ele é um grande fã de Cristiano Ronaldo e busca seguir seus passos.",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Ángel Di María
  {
    nome: "Ángel Di María",
    background: "plate",
    descricao:
      "Extremo veloz e habilidoso, conhecido por suas arrancadas e cruzamentos precisos. Foi fundamental nas conquistas da Copa do Mundo de 2022 e da Champions League com o Real Madrid.",
    pagina: "https://www.instagram.com/angeldimariajm/",
    nacionalidade: "Argentina",
    imagem:
      "https://conteudo.imguol.com.br/c/galeria/0f/2022/12/18/di-maria-celebra-seu-gol-sobre-a-franca-na-final-da-copa-1671379257343_v2_450x600.jpg",
    numero: "11",
    posicao: "Ponta-Direita",
    dataNascimento: "14/02/1988",
    status: "Ativo",
    curiosidades:
      "Considerado um dos melhores jogadores argentinos da atualidade, Di María é conhecido por sua versatilidade, atuando tanto por dentro quanto por fora.",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Carlos Alcaraz
  {
    nome: "Carlos Alcaraz",
    background: "#",
    descricao:
      "Meia argentino com grande técnica e visão de jogo. Chegou ao Flamengo em 2024 e rapidamente se adaptou ao estilo de jogo do time.",
    pagina: "https://www.instagram.com/_alcaraz22/",
    nacionalidade: "Argentina",
    imagem:
      "https://lncimg.lance.com.br/uploads/2025/02/alcaraz-everton-flamengo-scaled-aspect-ratio-512-320.jpg",
    numero: "8",
    posicao: "Meia",
    dataNascimento: "22/07/1998",
    status: "Ativo",
    curiosidades:
      "Conhecido por sua habilidade em passes longos e visão de jogo, Alcaraz é um dos principais armadores do Flamengo.",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Carlos Tevez
  {
    nome: "Carlos Tévez",
    background: "#",
    descricao:
      "Considerado um dos maiores atacantes argentinos da sua geração, Carlos Tévez é conhecido por sua força física, dribles e gols decisivos. Tendo jogado por grandes clubes como Boca Juniors, Manchester United e Juventus, conquistou diversos títulos e se tornou um ídolo da torcida.",
    pagina: "https://pt.wikipedia.org/wiki/Carlos_Tévez",
    nacionalidade: "Argentina",
    imagem:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgBvPjh1bPMfnrNr40d1EgnVJcAqJufU_x0ltn5cIIdDSisyq_oVNplviZTXpNd9kw1Lix4d-8hd0VnF-inblh4MYdpDF0MDy_5C19_u-g8-_2qaMgzqNs6eySo66gan88bHPWh6FV0pQ/s1600/tevez+argentina.jpg",
    numero: "32",
    posicao: "Atacante",
    dataNascimento: "05/02/1984",
    status: "Aposentado",
    curiosidades:
      "Tevez começou sua carreira no Boca Juniors e rapidamente se tornou ídolo da torcida. Sua história de vida, marcada por dificuldades, inspirou muitas pessoas.",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Diego Maradona
  {
    nome: "Diego Maradona",
    background: "gold",
    descricao:
      "Considerado um dos maiores jogadores de todos os tempos, Maradona era conhecido por sua habilidade, dribles desconcertantes e visão de jogo. Foi campeão mundial em 1986 com a Argentina.",
    pagina: "https://www.instagram.com/diegoarmandomaradona/",
    nacionalidade: "Argentina",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Maradona-Mundial_86_con_la_copa.JPG/330px-Maradona-Mundial_86_con_la_copa.JPG",
    numero: "10",
    posicao: "Meia-atacante",
    dataNascimento: "30/10/1960",
    dataFalecimento: "25/11/2020",
    status: "Aposentado",
    curiosidades:
      "Maradona é um ícone do futebol argentino e mundial, sendo lembrado por seus gols históricos, como o 'Gol do Século' na Copa de 1986.",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Enzo Fernández
  {
    nome: "Enzo Fernández",
    background: "#",
    descricao:
      "Meio-campista argentino que se destacou no Benfica e na Copa do Mundo de 2022. Conhecido por sua visão de jogo e passes precisos.",
    pagina: "https://www.instagram.com/enzofernandez24/",
    nacionalidade: "Argentina",
    imagem: "https://pbs.twimg.com/media/FoEwSiNWQAABDgp.jpg:large",
    numero: "8",
    posicao: "Meio-campista",
    dataNascimento: "17/1/2001",
    status: "Ativo",
    curiosidades: "Foi eleito o melhor jovem jogador da Copa do Mundo de 2022.",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Germán Cano
  {
    nome: "Germán Cano",
    background: "#",
    descricao:
      "Atacante argentino com faro de gol, Cano é conhecido por sua precisão nos finalizações e por ser um verdadeiro artilheiro. Atualmente, é o principal jogador do Fluminense e um dos artilheiros do Campeonato Brasileiro.",
    pagina: "https://www.instagram.com/germancano/",
    nacionalidade: "Argentina",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/ce/2022/11/05/cano-brilhou-em-fluminense-x-sao-paulo-jogo-do-campeonato-brasileiro-1667683140925_v2_450x600.jpg",
    numero: "14",
    posicao: "Atacante",
    dataNascimento: "02/02/1988",
    status: "Ativo",
    curiosidades:
      "Cano já jogou em diversos clubes da América Latina e é conhecido por sua paixão pelo futebol.",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  //Gonzalo Higuaín
  {
    nome: "Gonzalo Higuaín",
    background: "#",
    descricao:
      "Atacante argentino conhecido por sua finalização precisa, Higuaín já atuou por grandes clubes como Real Madrid e Juventus.",
    pagina: "https://www.instagram.com/ghiguain9/",
    nacionalidade: "Argentina",
    imagem:
      "https://i.pinimg.com/736x/9f/45/07/9f4507e6faa726b496586221291608cc.jpg",
    titulos:
      "Serie A (2016/2017, 2018/2019) - Juventus <br>Copa da Itália (2015/2016, 2016/2017) - Juventus <br>Copa del Rey (2010/2011) - Real Madrid",
    numero: "9",
    posicao: "Atacante",
    dataNascimento: "10/12/1987",
    status: "Aposentado",
    curiosidades:
      "Higuain é conhecido por ter marcado gols importantes em momentos decisivos de sua carreira.",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Javier Zanetti
  {
    nome: "Javier Zanetti",
    background: "plate",
    descricao:
      "Uma lenda do futebol, Zanetti é conhecido por sua lealdade à Internazionale, onde jogou por quase duas décadas. Ele era um exemplo de profissionalismo em campo e um líder nato.",
    pagina: "https://www.instagram.com/javierzanetti/",
    nacionalidade: "Argentina",
    imagem:
      "https://ilmanifesto.it/cdn-cgi/image/format=auto,width=1400/https://static.ilmanifesto.it/2013/08/08/Javier-Zanetti1.jpg",
    titulos:
      "Serie A, Copa da Itália, Supercopa Italiana, Liga dos Campeões, Copa UEFA",
    numero: "4",
    posicao: "Lateral-direito",
    dataNascimento: "10/08/1973",
    status: "Aposentado",
    curiosidades:
      "Zanetti foi capitão da Internazionale por muitos anos e é considerado um dos maiores jogadores da história do clube. Ele também jogou pela seleção argentina em diversas Copas do Mundo.",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Juan Román Riquelme
  {
    nome: "Juan Riquelme",
    background: "Plate",
    descricao:
      "Meia armador elegante e visionário, Riquelme era conhecido por seus passes precisos e chutes de falta. Foi ídolo do Boca Juniors e da seleção argentina.",
    pagina: "https://www.instagram.com/juanromanriquelme/",
    nacionalidade: "Argentina",
    imagem:
      "https://images.ecestaticos.com/ONBP-O3SReLBO4HmbItj7pOAFsk=/0x0:991x1605/992x1606/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F796%2Fcc2%2F46f%2F796cc246fab342b516e75a02b8685972.jpg",
    numero: "10",
    posicao: "Meia",
    dataNascimento: "24/06/1978",
    status: "Aposentado",
    curiosidades:
      "Riquelme é considerado um dos maiores ídolos da história do Boca Juniors e um dos melhores meias da sua geração.",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Julián Álvarez
  {
    nome: "Julián Álvarez",
    background: "#",
    descricao:
      "Atacante jovem e promissor, conhecido por sua versatilidade e finalização precisa. Campeão mundial com a Argentina em 2022, Álvarez tem se destacado no Manchester City.",
    pagina: "https://www.instagram.com/julianalvarez9/",
    nacionalidade: "Argentina",
    imagem:
      "https://sportsmanbio.com/wp-content/uploads/2024/10/Julian-Alvarez-Atletico-Madrid-jpg.webp",
    numero: "19",
    posicao: "Atacante",
    dataNascimento: "31/01/2000",
    status: "Ativo",
    curiosidades:
      "Considerado um dos maiores talentos do futebol argentino, Álvarez é conhecido por sua habilidade de jogar em diversas posições no ataque.",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  //Lautaro Martínez
  {
    nome: "Lautaro Martínez",
    background: "plate",
    imagem:
      "https://tntsports.com.br/__export/1708455600218/sites/esporteinterativo/img/2024/02/20/lautaro_martxnez.jpg_1586065124.jpg",
    pagina: "https://www.instagram.com/lautaromartinez/",
    descricao:
      "Centroavante argentino e capitão da Inter de Milão, conhecido por sua agilidade, força, faro de gol e capacidade de jogar em diversas situações de ataque. Martínez é uma peça fundamental tanto para a Inter de Milão, onde se tornou um dos maiores artilheiros, quanto para a seleção argentina, com quem conquistou a Copa América e a Copa do Mundo.",
    numero: "10",
    posicao: "Centroavante",
    nacionalidade: "Argentina",
    dataNascimento: "22/08/1997",
    status: "Ativo (Inter de Milão)",
    clubes: [
      createClub(
        "Racing",
        { inicio: "2015", fim: "2018" },
        { jogos: 62, gols: 27, assistencias: 6 }
      ),
      createClub(
        "Internazionale",
        { inicio: "2018", fim: "Presente" },
        { jogos: 284, gols: 129, assistencias: 43 }
      ),
    ],
    selecao: {
      nome: "Argentina",
      periodo: { inicio: "2018", fim: "Presente" },
      estatisticas: { jogos: 59, gols: 28, assistencias: 10 },
    },
    titulos: [
      // Inter de Milão
      {
        nome: "Serie A",
        anos: "2020-21, 2023-24",
        clube: "Internazionale",
      },
      {
        nome: "Copa da Itália",
        anos: "2021-22, 2022-23",
        clube: "Internazionale",
      },
      {
        nome: "Supercopa da Itália",
        anos: "2021, 2022, 2023",
        clube: "Internazionale",
      },
      {
        nome: "UEFA Champions League (Vice-campeão)",
        logo: "UEFA Champions League",
        anos: "2022-23",
        clube: "Internazionale",
      },
      // Seleção Argentina
      {
        nome: "Superclássico das Américas",
        anos: "2019",
        clube: "Argentina",
      },
      {
        nome: "Copa América",
        anos: "2021",
        clube: "Argentina",
        logoVariavel: true,
      },
      {
        nome: "Copa dos Campeões CONMEBOL–UEFA",
        anos: "2022",
        clube: "Argentina",
      },
      {
        nome: "Copa do Mundo",
        anos: "2022",
        clube: "Argentina",
        logoVariavel: true,
      },
      {
        nome: "Copa América",
        anos: "2024",
        clube: "Argentina",
        logoVariavel: true,
      },
      // Individuais
      {
        nome: "Equipe ideal da Copa América",
        logo: "Copa América",
        anos: "2024",
        clube: "Individual",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Artilheiro da Serie A",
        logo: "Serie A",
        anos: "2023-24",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Time do Ano da Serie A",
        logo: "Serie A",
        anos: "2023-24",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Jogador do Mês da Serie A",
        logo: "Serie A",
        anos: "Outubro 2023",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "100 Melhores Jogadores do Ano",
        logo: "The Guardian",
        anos: "2022",
        clube: "Individual",
        categoria: "individual",
      },
    ],
    tags: [
      "Lautaro",
      "Martinez",
      "Lautaro Martinez",
      "Inter de Milão",
      "Argentina",
      "Centroavante",
      "Atacante",
      "El Toro",
      "Serie A",
      "Capitão",
      "LM10",
    ],
  },

  // Mascherano
  {
    nome: "Mascherano",
    background: "plate",
    descricao:
      "Volante de marcação forte e inteligente, Mascherano era conhecido por sua liderança e capacidade de desarmar jogadas. Foi um dos pilares da seleção argentina por muitos anos.",
    pagina: "https://www.instagram.com/javiermascherano/",
    nacionalidade: "Argentina",
    imagem:
      "https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2016/01/21143207/Javier-Mascherano.jpg",
    numero: "14",
    posicao: "Volante",
    dataNascimento: "08/06/1984",
    status: "Aposentado",
    curiosidades:
      "Mascherano também atuou como zagueiro em algumas oportunidades, mostrando sua versatilidade.",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Mauro Icardi
  {
    nome: "Mauro Icardi",
    apelido: "El Niño",
    background: "#",
    descricao:
      "Considerado um dos melhores finalizadores da sua geração, Icardi se destaca por sua precisão nos chutes e habilidade dentro da área. Seus gols foram decisivos em diversas conquistas ao longo de sua carreira.",
    pagina: "https://www.instagram.com/mauroicardi/",
    nacionalidade: "Argentina",
    imagem:
      "https://cdn.ntvspor.net/1129133954844d5ba2efd0a49e4d7e4d.jpg?crop=0,51,940,580&w=940&h=529&mode=crop",
    numero: "9",
    posicao: "Atacante",
    dataNascimento: "19/02/1993",
    curiosidades:
      "Icardi é conhecido por sua comemoração característica, onde aponta para o escudo do clube.",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Paulo Dybala
  {
    nome: "Paulo Dybala",
    background: "#",
    descricao:
      "Atacante argentino conhecido por sua habilidade com a bola, chutes precisos e visão de jogo. Ficou mais conhecido pelo seu futebol na Juventus e atualmente joga no Roma.",
    pagina: "https://www.instagram.com/paulodybala/",
    nacionalidade: "Argentina",
    imagem:
      "https://st.depositphotos.com/58427640/52190/i/450/depositphotos_521908034-stock-photo-paulo-dybala-juventus-portrait-italian.jpg",
    numero: "21",
    posicao: "Atacante",
    dataNascimento: "15/11/1993",
    status: "Ativo",
    curiosidades:
      "Dybala é conhecido por sua comemoração característica, onde finge usar um relógio. Ele também é um grande fã de música e costuma compartilhar suas playlists com os fãs.",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Sergio Agüero
  {
    nome: "Sergio Agüero",
    background: "plate",
    descricao:
      "Lenda do Manchester City e ídolo da torcida argentina, Agüero era conhecido por sua habilidade de marcar gols importantes. É o maior artilheiro da história do City.",
    pagina: "https://www.instagram.com/kunaguero/",
    nacionalidade: "Argentina",
    imagem:
      "https://media.gettyimages.com/id/1176148803/pt/foto/manchester-england-sergio-aguero-of-manchester-city-celebrates-after-scoring-his-teams-second.jpg?s=612x612&w=gi&k=20&c=x6LvUh7mYS1zGzO2pmlkOkJ5o--VTfKT1pZTEH1Fc9w=",
    numero: "10",
    posicao: "Atacante",
    dataNascimento: "02/06/1988",
    status: "Aposentado",
    curiosidades:
      "Agüero é lembrado por seu gol histórico no último minuto contra o Queens Park Rangers, que garantiu o título da Premier League para o Manchester City em 2012.",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Lionel Messi
  {
    nome: "Lionel Messi",
    background: "gold",
    descricao:
      "Atacante argentino considerado um dos maiores jogadores de todos os tempos. Conhecido por sua habilidade, dribles e visão de jogo, Messi conquistou diversos títulos com o Barcelona e a Seleção Argentina.",
    pagina: "https://www.instagram.com/leomessi/",
    numero: "10",
    posicao: "Atacante",
    dataNascimento: "24/06/1987",
    status: "Ativo",
    nacionalidade: "Argentina",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Lionel-Messi-Argentina-2022-FIFA-World-Cup_sharpness.jpg/1200px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_sharpness.jpg",
    clubes: [
      createClub(
        "Barcelona",
        { inicio: "2004", fim: "2021" },
        { jogos: 778, gols: 672, assistencias: 301 }
      ),
      createClub(
        "Paris Saint-Germain",
        { inicio: "2021", fim: "2023" },
        { jogos: 75, gols: 32, assistencias: 35 }
      ),
      createClub(
        "Inter Miami",
        { inicio: "2023", fim: "atual" },
        { jogos: 39, gols: 34, assistencias: 18 }
      ),
    ],
    selecao: {
      nome: "Argentina",
      periodo: { inicio: 2005, fim: "atual" },
      estatisticas: { jogos: 191, gols: 112, assistencias: 58 },
    },
    titulos: [
      // Títulos com o Barcelona
      {
        nome: "La Liga",
        anos: "2005, 2006, 2009, 2010, 2011, 2013, 2015, 2016, 2018, 2019",
        clube: "Barcelona",
      },
      {
        nome: "Copa del Rey",
        anos: "2009, 2012, 2015, 2016, 2017, 2018, 2021",
        clube: "Barcelona",
      },
      {
        nome: "Supercopa da Espanha",
        anos: "2009, 2010, 2011, 2013, 2016, 2018",
        clube: "Barcelona",
      },
      {
        nome: "UEFA Champions League",
        anos: "2006, 2009, 2011, 2015",
        clube: "Barcelona",
      },
      {
        nome: "Supercopa da UEFA",
        anos: "2009, 2011, 2015",
        clube: "Barcelona",
      },
      {
        nome: "Mundial de Clubes",
        anos: "2009, 2011, 2015",
        clube: "Barcelona",
      },
      // Títulos com o PSG
      {
        nome: "Ligue 1",
        anos: "2022, 2023",
        clube: "Paris Saint-Germain",
      },
      {
        nome: "Supercopa da França",
        anos: "2022",
        clube: "Paris Saint-Germain",
      },
      // Títulos com o Inter Miami
      {
        nome: "Leagues Cup",
        anos: "2023",
        clube: "Inter Miami",
      },
      {
        nome: "MLS Supporters' Shield",
        anos: "2024",
        clube: "Inter Miami",
      },
      // Títulos com a Seleção Argentina
      {
        nome: "Copa América",
        anos: "2024",
        clube: "Argentina",
        logoVariavel: true,
      },
      {
        nome: "Copa do Mundo",
        anos: "2022",
        clube: "Argentina",
        logoVariavel: true,
      },
      {
        nome: "Copa América",
        anos: "2021",
        clube: "Argentina",
        logoVariavel: true,
      },
      {
        nome: "Jogos Olímpicos",
        anos: "2008",
        clube: "Argentina",
        logoVariavel: true,
      },

      // Títulos Individuais
      {
        nome: "Bola de Ouro",
        anos: "2009, 2010, 2011, 2012, 2015, 2019, 2021, 2023",
        categoria: "individual",
      },
      {
        nome: "Bola de Ouro Dream Team",
        anos: "2020",
        categoria: "individual",
        logo: "IFFHS",
      },
    ],
    tags: [],
  },

  // BÉLGICA --------------------------------------------------------------------------------------------------

  // Eden Hazard
  {
    nome: "Eden Hazard",
    background: "#",
    descricao:
      "Considerado um dos jogadores mais habilidosos de sua geração, Hazard é conhecido por seus dribles desconcertantes e finalizações precisas. Teve destaque no Chelsea e na seleção belga.",
    pagina: "https://www.instagram.com/hazardeden10/",
    nacionalidade: "Bélgica",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/4f/2022/12/07/eden-hazard-disputou-seu-ultimo-jogo-pela-belgica-em-partida-contra-a-croacia-na-copa-do-mundo-do-qatar-1670411702623_v2_3x4.jpg",
    numero: "7",
    posicao: "Atacante",
    dataNascimento: "7/1/1991",
    status: "Aposentado",
    curiosidades:
      "Hazard foi eleito o melhor jogador da Premier League em duas oportunidades e considerado um dos principais candidatos à Bola de Ouro.",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Kevin De Bruyne
  {
    nome: "Kevin De Bruyne",
    background: "plate",
    descricao:
      "Meia armador talentoso e visionário, De Bruyne é conhecido por seus passes precisos, chutes de longa distância e visão de jogo. É um dos principais jogadores do Manchester City.",
    pagina: "https://www.instagram.com/kevindebruyne28/",
    nacionalidade: "Bélgica",
    imagem:
      "https://s2-ge.glbimg.com/9kJDOob3zGpMZRxxez8jkW6wQ68=/0x0:1415x1757/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/A/3/AXKKLjTPWAY8uL8XARPA/000-3242462.jpg", // Trocar por uma imagem do De Bruyne
    numero: "17",
    posicao: "Meia",
    dataNascimento: "28/06/1991",
    status: "Ativo",
    curiosidades:
      "De Bruyne é considerado um dos melhores meias do mundo e um dos principais responsáveis pelo sucesso do Manchester City nos últimos anos.",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Romelu Lukaku
  {
    nome: "Romelu Lukaku",
    background: "#",
    descricao:
      "Conhecido por sua força física e habilidade de marcar gols, Romelu Lukaku é um dos atacantes mais temidos do futebol mundial. Com uma carreira marcada por passagens por grandes clubes como Chelsea, Manchester United e Inter de Milão, o belga conquistou diversos títulos e se destacou pela sua capacidade de decidir jogos importantes.",
    pagina: "https://pt.wikipedia.org/wiki/Romelu_Lukaku",
    nacionalidade: "Bélgica",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/f1/2022/11/27/lukaku-em-acao-pela-belgica-durante-partida-contra-o-marrocos-na-copa-do-mundo-1669560569630_v2_720x1024.jpg",
    numero: "9",
    posicao: "Atacante",
    dataNascimento: "13 de maio de 1993",
    status: "Ativo",
    curiosidades:
      "Lukaku começou sua carreira profissional no Anderlecht, na Bélgica. Sua força física e habilidade para finalizar o fizeram se destacar rapidamente nos principais campeonatos europeus.",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Thibaut Courtois
  {
    nome: "Thibaut Courtois",
    background: "plate",
    descricao:
      "Goleiro alto e ágil, Courtois é conhecido por suas defesas difíceis e reflexos rápidos. Atualmente, é um dos melhores goleiros do mundo e defende o Real Madrid.",
    pagina: "https://www.instagram.com/thibautcourtois/",
    nacionalidade: "Bélgica",
    imagem:
      "https://africafootunited.com/wp-content/uploads/2024/08/IMG-20240822-WA0018-1-768x949.jpg", // Trocar por uma imagem do Courtois
    numero: "1",
    posicao: "Goleiro",
    dataNascimento: "11/05/1992",
    status: "Ativo",
    curiosidades:
      "Courtois foi eleito o melhor goleiro da Copa do Mundo de 2018.",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Vincent Kompany
  {
    nome: "Vincent Kompany",
    background: "Plate",
    descricao:
      "Ex-zagueiro belga, conhecido por sua liderança e habilidade aérea. Atuou por muitos anos no Manchester City, onde foi capitão e ídolo da torcida.",
    pagina: "https://www.instagram.com/vincentkompany/",
    nacionalidade: "Bélgica",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/0/02/Vincent_Kompany.jpg",
    numero: "4",
    posicao: "Zagueiro",
    dataNascimento: "10/04/1986",
    status: "Aposentado",
    curiosidades:
      "Kompany é considerado um dos maiores capitães da história do Manchester City. Ele também teve uma breve passagem como jogador e treinador do Anderlecht, seu clube de formação.",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // BRASIL--------------------------------------------------------------------------------------------------------------------------------------

  // Andreas Pereira
  {
    nome: "Andreas Pereira",
    background: "#",
    pagina: "https://www.instagram.com/andreaspereira/",
    nacionalidade: "Brasil",
    numero: "18",
    posicao: "Meio-campo",
    dataNascimento: "01/01/1996",
    status: "Ativo",
    imagem:
      "https://cdn.vox-cdn.com/thumbor/RQrhCL51jZYIednFEQnHttcnJCA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/25501470/2143714215.jpg",
    descricao:
      "Meia talentoso e versátil, Andreas Pereira é conhecido por sua habilidade com a bola, visão de jogo e capacidade de marcar gols. Ele já defendeu grandes clubes como Manchester United e Flamengo.",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Adriano Imperador
  {
    nome: "Adriano Imperador",
    background: "plate",
    pagina: "https://www.instagram.com/adrianoimperador/",
    nacionalidade: "Brasil",
    numero: "9",
    posicao: "Atacante",
    dataNascimento: "17/02/1982",
    status: "Aposentado",
    imagem: "https://a.espncdn.com/photo/2021/1222/r954331_1296x729_16-9.jpg",
    descricao:
      "Um dos maiores atacantes brasileiros de sua geração, Adriano era conhecido por sua força física, técnica apurada e gols espetaculares. Ele conquistou títulos importantes com Flamengo e Internazionale de Milão.",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  //Alex Sandro
  {
    nome: "Alex Sandro",
    background: "#",
    pagina: "https://www.instagram.com/alxsndro12/",
    nacionalidade: "Brasil",
    numero: "13",
    posicao: "Lateral-esquerdo",
    dataNascimento: "26/01/1991",
    status: "Ativo",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/bf/2024/10/02/alex-sandro-comemora-gol-em-flamengo-x-corinthians-partida-da-copa-do-brasil-1727920868687_v2_3x4.jpg",
    descricao:
      "Lateral-esquerdo brasileiro com vasta experiência no futebol europeu. Chegou ao Flamengo em 2024 e traz consigo muita experiência e qualidade.",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Alisson Becker
  {
    nome: "Alisson Becker",
    background: "plate",
    pagina: "https://www.instagram.com/alissonbecker/",
    nacionalidade: "Brasil",
    numero: "1",
    posicao: "Goleiro",
    dataNascimento: "02/08/1992",
    status: "Ativo",
    imagem:
      "https://www.ogol.com.br/wimg/n757268b/1257103-de-substituivel-a-melhor-do-mundo-alisson-marca-territorio-n.jpg",
    descricao:
      "Goleiro brasileiro conhecido por suas defesas espetaculares, reflexos rápidos e tranquilidade sob pressão. É um dos principais goleiros do mundo e fundamental para a conquista da Copa do Mundo de 2019 pela Seleção Brasileira.",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  //Antony
  {
    nome: "Antony",
    background: "#",
    pagina: "https://www.instagram.com/antony00/",
    nacionalidade: "Brasil",
    numero: "7",
    posicao: "Ponta-Direita",
    dataNascimento: "22/02/2000",
    status: "Ativo",
    imagem:
      "https://lncimg.lance.com.br/cdn-cgi/image/width=950,quality=75,fit=pad,format=webp/uploads/2025/05/antony-real-betis-aspect-ratio-512-320.jpeg",
    descricao:
      "Atacante brasileiro conhecido como 'Goat' e por sua habilidade nos dribles e velocidade, Antony é um dos principais jogadores do Real Betis.",
    clubes: [
      createClub(
        "São Paulo",
        { inicio: "2018", fim: "2020" },
        { jogos: 52, gols: 7, assistencias: 6 }
      ),
      createClub(
        "Ajax",
        { inicio: "2020", fim: "2022" },
        { jogos: 82, gols: 26, assistencias: 22 }
      ),
      createClub(
        "Manchester United",
        { inicio: "2022", fim: "2025" },
        { jogos: 96, gols: 12, assistencias: 5 }
      ),
      createClub(
        "Real Betis",
        { inicio: "2025", fim: "Atual" },
        { jogos: 96, gols: 12, assistencias: 5 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2021", fim: "2023" },
      estatisticas: { jogos: 16, gols: 2, assistencias: 2 },
    },
    titulos: [
      {
        nome: "Eredivisie",
        anos: "2021, 2022",
        clube: "Ajax",
      },
      {
        nome: "Copa da Holanda",
        anos: "2021",
        clube: "Ajax",
      },
      {
        nome: "EFL Cup",
        anos: "2023",
        clube: "Manchester United",
      },
      {
        nome: "FA Cup",
        anos: "2024",
        clube: "Manchester United",
      },
      {
        nome: "Jogos Olímpicos",
        anos: "2020",
        clube: "Brasil",
      },
    ],
    tags: [],
  },

  //Arthur
  {
    nome: "Arthur",
    background: "#",
    pagina: "https://www.instagram.com/arthurgomes/",
    nacionalidade: "Brasil",
    numero: "18",
    posicao: "Volante",
    dataNascimento: "12/05/1996",
    status: "Ativo",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/FC_Zenit_Saint_Petersburg_vs._Juventus%2C_20_October_2021_52_%28Arthur_Melo%29.jpg/640px-FC_Zenit_Saint_Petersburg_vs._Juventus%2C_20_October_2021_52_%28Arthur_Melo%29.jpg",
    descricao:
      "Volante brasileiro conhecido por sua técnica e visão de jogo, Arthur já atuou por grandes clubes como Grêmio e Barcelona.",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Ayrton Lucas
  {
    nome: "Ayrton Lucas",
    background: "#",
    pagina: "https://www.instagram.com/ayrtonlucas/",
    nacionalidade: "Brasil",
    numero: "6",
    posicao: "Lateral-esquerdo",
    dataNascimento: "08/05/1998",
    status: "Ativo",
    imagem:
      "https://i.pinimg.com/originals/c8/96/79/c896795ae03e335e9dd1850de9ee5df4.png",
    descricao:
      "Lateral-esquerdo brasileiro conhecido por sua velocidade e habilidade nos cruzamentos. Um dos pilares da defesa do Flamengo.",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Bebeto
  {
    nome: "Bebeto",
    background: "plate",
    pagina: "http://www.bebetotetra.com.br/",
    nacionalidade: "Brasil",
    numero: "7",
    posicao: "Atacante",
    dataNascimento: "16/02/1964",
    status: "Aposentado",
    imagem:
      "https://lncimg.lance.com.br/cdn-cgi/image/width=828,quality=75,fit=pad,format=webp/uploads/2016/12/14/5851ada21eb19.jpeg",
    descricao:
      "Lenda do futebol brasileiro, conhecido por sua habilidade, gols importantes e comemorações marcantes, como o 'embala neném'. Foi campeão mundial em 1994.",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Bruno Henrique
  {
    nome: "Bruno Henrique",
    background: "#",
    pagina: "https://www.instagram.com/b.henrique/",
    nacionalidade: "Brasil",
    numero: "27",
    posicao: "Ponta-Esquerda",
    dataNascimento: "30/12/1990",
    status: "Ativo",
    imagem:
      "https://res.cloudinary.com/idemo/image/fetch/q_auto:good,f_auto/https://conteudo.imguol.com.br/c/esporte/52/2021/07/25/bruno-henrique-comemora-gol-marcado-pelo-flamengo-1627245296459_v2_3x4.jpg",
    descricao:
      "Atacante brasileiro conhecido por sua velocidade, finalização e versatilidade. Um dos principais jogadores do Flamengo titular absoluto.",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Caça-Rato
  {
    nome: "Caça Rato",
    background: "#",
    pagina: "https://www.instagram.com/cr7.flavio/",
    nacionalidade: "Brasil",
    numero: "7",
    posicao: "Atacante",
    dataNascimento: "29/06/1986",
    status: "Ativo",
    imagem:
      "https://fferj.azurewebsites.net/admin/AzureStorage/GetImage?path=2016/4/12/cd232328-abec-4f47-9015-585e40217e36.jpg",
    descricao:
      "Atacante rápido e habilidoso, Caça-Rato é conhecido por sua agilidade e capacidade de marcar gols. Ele já passou por diversos clubes brasileiros, sempre buscando novas oportunidades.",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Cafu
  {
    nome: "Cafu",
    background: "gold",
    pagina: "https://www.instagram.com/cafuoficial/",
    nacionalidade: "Brasil",
    numero: "2",
    posicao: "Lateral-direito",
    dataNascimento: "7 de junho de 1970",
    status: "Aposentado",
    imagem:
      "https://www.imortaisdofutebol.com/wp-content/uploads/2012/07/cafu-3.jpg",
    descricao:
      "Lendário lateral-direito brasileiro, conhecido por sua energia, velocidade e cruzamentos precisos. Foi um dos principais jogadores da Seleção Brasileira e de grandes clubes europeus.",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Carlinhos
  {
    nome: "Carlinhos",
    background: "#",
    pagina: "https://www.instagram.com/carlinhos_l9/",
    nacionalidade: "Brasil",
    numero: "22",
    posicao: "Atacante",
    dataNascimento: "18/09/1994",
    status: "Ativo",
    imagem:
      "https://tntsports.com.br/__export/1712606644898/sites/esporteinterativo/img/2024/04/08/carlinhos_marcelo_cortes_crf_-_gkqumcixaaaaovk.jpg_742406227.jpg",
    descricao:
      "Atacante versátil, capaz de atuar por diversas posições no ataque. Conhecido por sua força física e finalizações de média distância.",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Carlos Alberto
  {
    nome: "Carlos Alberto",
    background: "plate",
    descricao:
      "Considerado um dos maiores laterais-direitos da história do futebol, Carlos Alberto Torres foi capitão da seleção brasileira campeã da Copa do Mundo de 1970. Conhecido por sua liderança e chute potente, ele marcou um dos gols mais icônicos da história das Copas.",
    pagina: "https://www.instagram.com/carlosalbertotorresoficial/",
    nacionalidade: "Brasil",
    imagem:
      "https://www.ogol.com.br/img/jogadores/74/768474_med__20210401105208_carlos_alberto.jpg",
    numero: "4",
    posicao: "Lateral-direito",
    dataNascimento: "07/01/1944",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Casemiro
  {
    nome: "Casemiro",
    background: "plate",
    descricao:
      "Um dos melhores volantes do mundo, conhecido por sua força física e marcação implacável.",
    pagina: "https://www.instagram.com/casemiro/",
    nacionalidade: "Brasil",
    imagem:
      "https://cloudfront-eu-central-1.images.arcpublishing.com/diarioas/PIKOJ4P6O5B33KOGSQL2BDHFXQ.jpg",
    numero: "18",
    posicao: "Volante",
    dataNascimento: "23/2/1992",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Cássio
  {
    nome: "Cássio",
    background: "#",
    descricao:
      "Ídolo da torcida corintiana, Cássio é um goleiro experiente e conhecido por suas defesas milagrosas. Recentemente, o jogador foi transferido ao Cruzeiro.",
    pagina: "https://www.instagram.com/cassio/",
    nacionalidade: "Brasil",
    imagem:
      "https://i.pinimg.com/736x/8a/12/a2/8a12a2fbb94de06eda7d951104f6ebd4.jpg",
    numero: "12",
    posicao: "Goleiro",
    dataNascimento: "	6 de junho de 1987",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Craque Neto
  {
    nome: "Craque Neto",
    background: "#",
    descricao:
      "Ex-jogador de futebol brasileiro, conhecido por sua habilidade com a bola parada e sua paixão pelo Corinthians. Atualmente, é um dos comentaristas esportivos mais populares do Brasil, famoso por suas opiniões fortes e polêmicas sobre o futebol.",
    pagina: "https://www.instagram.com/craquenetooficial/",
    nacionalidade: "Brasil",
    imagem: "https://pbs.twimg.com/media/FyoUpeGXoAETtzq.jpg:large",
    numero: "10",
    posicao: "Meio-campo",
    dataNascimento: "09/09/1966",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Daniel Alves
  {
    nome: "Daniel Alves",
    background: "plate",
    descricao:
      "Lateral-direito conhecido por sua energia e experiência. Um dos maiores vencedores da história do futebol com 42 títulos, ficando apenas atrás de Lionel Messi.",
    pagina: "https://www.instagram.com/danialves/",
    nacionalidade: "Brasil",
    imagem:
      "https://i.pinimg.com/736x/f3/6d/2b/f36d2b620ba51444445e50f1849e7869.jpg",
    numero: "33",
    posicao: "Lateral-direito",
    dataNascimento: "06/05/1983",
    status: "Aposentado",
    clubes: [
      createClub(
        "Bahia",
        { inicio: "2001", fim: "2002" },
        { jogos: 53, gols: 2, assistencias: 0 }
      ),
      createClub(
        "Sevilla",
        { inicio: "2003", fim: "2008" },
        { jogos: 247, gols: 16, assistencias: 38 }
      ),
      createClub(
        "Barcelona",
        { inicio: "2008", fim: "2016" },
        { jogos: 391, gols: 21, assistencias: 101 }
      ),
      createClub(
        "Juventus",
        { inicio: "2016", fim: "2017" },
        { jogos: 33, gols: 6, assistencias: 7 }
      ),
      createClub(
        "Paris Saint-Germain",
        { inicio: "2017", fim: "2019" },
        { jogos: 73, gols: 8, assistencias: 18 }
      ),
      createClub(
        "São Paulo",
        { inicio: "2019", fim: "2021" },
        { jogos: 95, gols: 10, assistencias: 15 }
      ),
      createClub(
        "Barcelona", // Retorno ao Barcelona
        { inicio: "2021", fim: "2022" },
        { jogos: 15, gols: 1, assistencias: 2 }
      ),
      createClub(
        "Pumas",
        { inicio: "2022", fim: "2023" },
        { jogos: 12, gols: 0, assistencias: 0 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2006", fim: "2022" },
      estatisticas: { jogos: 126, gols: 8, assistencias: 21 },
    },
    titulos: [
      //Bahia
      { nome: "Copa do Nordeste", anos: "2002", clube: "Bahia" },
      // Sevilla
      { nome: "UEFA Europa League", anos: "2006, 2007", clube: "Sevilla" },
      { nome: "Supercopa da UEFA", anos: "2006", clube: "Sevilla" },
      { nome: "Copa del Rey", anos: "2007", clube: "Sevilla" },
      { nome: "Supercopa da Espanha", anos: "2007", clube: "Sevilla" },
      // Barcelona - Uma era de domínio
      {
        nome: "La Liga",
        anos: "2009, 2012, 2015, 2016",
        clube: "Barcelona",
      },
      {
        nome: "UEFA Champions League",
        anos: "2009, 2011, 2015",
        clube: "Barcelona",
      },
      {
        nome: "Copa del Rey",
        anos: "2009, 2012, 2015, 2016",
        clube: "Barcelona",
      },
      {
        nome: "Supercopa da Espanha",
        anos: "2009, 2010, 2011, 2013",
        clube: "Barcelona",
      },
      {
        nome: "Supercopa da UEFA",
        anos: "2009, 2011, 2015",
        clube: "Barcelona",
      },
      {
        nome: "Mundial de Clubes",
        anos: "2009, 2011, 2015",
        clube: "Barcelona",
      },
      // Juventus
      { nome: "Serie A", anos: "2017", clube: "Juventus" },
      { nome: "Copa Da Itália", anos: "2017", clube: "Juventus" },
      // Paris Saint-Germain
      {
        nome: "Ligue 1",
        anos: "2018, 2019",
        clube: "Paris Saint-Germain",
      },
      {
        nome: "Copa da França",
        anos: "2018",
        clube: "Paris Saint-Germain",
      },
      {
        nome: "Copa da Liga Francesa",
        anos: "2018",
        clube: "Paris Saint-Germain",
      },
      {
        nome: "Supercopa_da_França",
        anos: "2017",
        clube: "Paris Saint-Germain",
      },
      // São Paulo
      { nome: "Campeonato Paulista", anos: "2021", clube: "São Paulo" },
      // Seleção Brasileira
      {
        nome: "Copa América",
        anos: "2007",
        clube: "Brasil",
        logoVariavel: true,
      },
      {
        nome: "Copa América",
        anos: "2019",
        clube: "Brasil",
        logoVariavel: true,
      },
      ,
      {
        nome: "Copa das Confederações",
        anos: "2009",
        clube: "Brasil",
        logoVariavel: true,
      },
      {
        nome: "Copa das Confederações",
        anos: "2013",
        clube: "Brasil",
        logoVariavel: true,
      },
      {
        nome: "Jogos Olímpicos",
        anos: "2020",
        clube: "Brasil",
        logoVariavel: true,
      },
      {
        nome: "Copa América",
        anos: "2007",
        clube: "Brasil",
        logoVariavel: true,
      },
      {
        nome: "Copa América",
        anos: "2019",
        clube: "Brasil",
        logoVariavel: true,
      },
    ],
    tags: [],
  },

  // Danilo Andrade
  {
    nome: "Danilo Andrade",
    background: "#",
    descricao:
      "Meia de grande talento e habilidade, Danilo se destacou por sua visão de jogo e passes precisos. Teve passagens marcantes por Goiás, São Paulo e Corinthians.",
    pagina: "https://www.instagram.com/20_danilo/",
    nacionalidade: "Brasil",
    imagem:
      "https://static.corinthians.com.br/uploads/1654537893b28d8e3ccb1ff9d46fa2d9e70222c9e7.jpg",
    numero: "20",
    posicao: "Meio-campista",
    dataNascimento: "11/06/1979",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  {
    nome: "Danilo da Silva",
    background: "#",
    descricao:
      "Lateral-esquerdo versátil e habilidoso, Danilo se destaca por sua força física e qualidade nos passes. Atualmente é um dos principais jogadores da Seleção Brasileira.",
    pagina: "https://www.instagram.com/danilodls/",
    nacionalidade: "Brasil",
    imagem:
      "https://livesport-ott-images.ssl.cdn.cra.cz/r900xfq60/0e4537bc-f240-4550-a0bb-8551f8cbdd48.jpeg",
    numero: "6",
    posicao: "Lateral-esquerdo",
    dataNascimento: "15/07/1991",
    status: "Ativo",
    clubes: [
      createClub(
        "América-MG",
        { inicio: "2009", fim: "2011" },
        { jogos: 69, gols: 7, assistencias: 0 } // Estatísticas encontradas
      ),
      createClub(
        "Santos",
        { inicio: "2011", fim: "2012" },
        { jogos: 46, gols: 2, assistencias: 0 } // Estatísticas encontradas
      ),
      createClub(
        "Porto",
        { inicio: "2012", fim: "2015" },
        { jogos: 141, gols: 9, assistencias: 17 } // Estatísticas Transfermarkt
      ),
      createClub(
        "Real Madrid",
        { inicio: "2015", fim: "2017" },
        { jogos: 56, gols: 3, assistencias: 9 } // Estatísticas Transfermarkt
      ),
      createClub(
        "Manchester City",
        { inicio: "2017", fim: "2019" },
        { jogos: 60, gols: 4, assistencias: 5 } // Estatísticas Transfermarkt
      ),
      createClub(
        "Juventus",
        { inicio: "2019", fim: "2023" },
        { jogos: 142, gols: 8, assistencias: 14 } // Estatísticas Transfermarkt
      ),
      createClub(
        "Flamengo",
        { inicio: "2023", fim: null }, // Fim nulo pois está no clube atualmente
        { jogos: 71, gols: 5, assistencias: 7 } // Estatísticas até a data atual (aproximadamente)
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2011", fim: null }, // Fim nulo pois ainda é convocado
      estatisticas: { jogos: 56, gols: 1, assistencias: 6 }, // Estatísticas Transfermarkt
    },
    titulos: [
      {
        nome: "Campeonato Mineiro",
        anos: "2009, 2010, 2011",
        clube: "América-MG",
      },
      {
        nome: "Copa Libertadores",
        anos: "2011",
        clube: "Santos",
      },
      {
        nome: "Recopa Sul-Americana",
        anos: "2012",
        clube: "Santos",
      },
      {
        nome: "Superliga Portuguesa",
        anos: "2012/13",
        clube: "Porto",
      },
      {
        nome: "Supertaça Cândido de Oliveira",
        anos: "2012",
        clube: "Porto",
      },
      {
        nome: "UEFA Champions League",
        anos: "2015/16, 2016/17",
        clube: "Real Madrid",
      },
      {
        nome: "Supercopa da UEFA",
        anos: "2016",
        clube: "Real Madrid",
      },
      {
        nome: "Mundial de Clubes",
        anos: "2016",
        clube: "Real Madrid",
      },
      {
        nome: "La Liga",
        anos: "2016/17",
        clube: "Real Madrid",
      },
      {
        nome: "Premier League",
        anos: "2017/18, 2018/19",
        clube: "Manchester City",
      },
      {
        nome: "EFL Cup",
        anos: "2017/18, 2018/19",
        clube: "Manchester City",
      },
      {
        nome: "FA Cup",
        anos: "2018/19",
        clube: "Manchester City",
      },
      {
        nome: "Serie A",
        anos: "2019/20, 2020/21, 2021/22",
        clube: "Juventus",
      },
      {
        nome: "Copa da Itália",
        anos: "2020/21",
        clube: "Juventus",
      },
      {
        nome: "Supercopa da Itália",
        anos: "2020",
        clube: "Juventus",
      },
      {
        nome: "Copa do Brasil",
        anos: "2025",
        clube: "Flamengo",
      },
      {
        nome: "Campeonato Carioca",
        anos: "2025",
        clube: "Flamengo",
      },
      {
        nome: "Taça Guanabara",
        anos: "2025",
        clube: "Flamengo",
      },
    ],
    tags: [],
  },

  // Dante
  {
    nome: "Dante",
    background: "#",
    descricao:
      "Zagueiro brasileiro conhecido por sua liderança, força física e bom jogo aéreo. Dante conquistou diversos títulos na Europa, incluindo a Bundesliga pelo Bayern de Munique.",
    pagina: "https://www.instagram.com/dantebonfim/",
    nacionalidade: "Brasil",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/b4/2023/11/29/defesa-do-nice-liderada-pelo-brasileiro-dante-nao-sofre-gols-desde-setembro-1701279114528_v2_3x4.jpg",
    numero: "4",
    posicao: "Zagueiro",
    dataNascimento: "18/03/1983",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // David Luiz
  {
    nome: "David Luiz",
    background: "#",
    descricao:
      "Zagueiro brasileiro conhecido por sua habilidade com a bola nos pés e liderança em campo. Teve passagens por grandes clubes europeus.",
    pagina: "https://www.instagram.com/davidluiz23/",
    nacionalidade: "Brasil",
    imagem:
      "https://static.wixstatic.com/media/df5c0a_3fa004c4349745bebc4f1bb2caea3291~mv2.jpg/v1/fill/w_540,h_720,al_c,lg_1,q_85,enc_auto/df5c0a_3fa004c4349745bebc4f1bb2caea3291~mv2.jpg",
    numero: "23",
    posicao: "Zagueiro",
    dataNascimento: "22/04/1987",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Denilson Show
  {
    nome: "Denilson Show",
    background: "#",
    descricao:
      "Ex-jogador de futebol brasileiro, conhecido por sua habilidade com a bola nos pés e sua alegria dentro de campo. Campeão mundial em 2002, Denilson encantou a todos com seus dribles e passes precisos.",
    pagina: "https://www.instagram.com/denilsonshowoficial/",
    nacionalidade: "Brasil",
    imagem:
      "https://i.pinimg.com/564x/49/37/b1/4937b1b194e778900e5cf4a635e3138a.jpg",
    numero: "17",
    posicao: "Meia-atacante",
    dataNascimento: "24/08/1977",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Dida
  {
    nome: "Dida",
    background: "#",
    descricao:
      "Lendário goleiro brasileiro, conhecido por suas defesas espetaculares e personalidade marcante. Foi fundamental para os títulos da Seleção Brasileira e do Milan.",
    pagina: "https://www.instagram.com/didaoficial/",
    nacionalidade: "Brasil",
    imagem:
      "https://lncimg.lance.com.br/cdn-cgi/image/width=828,quality=75,fit=pad,format=webp/uploads/2018/10/11/5bbf6cc273f47.jpeg",
    numero: "1",
    posicao: "Goleiro",
    dataNascimento: "07/10/1973",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Diego Alves
  {
    nome: "Diego Alves",
    background: "#",
    descricao:
      "Goleiro brasileiro conhecido por suas defesas difíceis e personalidade marcante. Atuou por grandes clubes como Flamengo e Valencia.",
    pagina: "https://www.instagram.com/diegoalves/",
    nacionalidade: "Brasil",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/b2/2020/07/08/diego-alves-goleiro-do-flamengo-sinaliza-para-companheiros-durante-final-contra-o-fluminense-1594256515230_v2_3x4.jpg",
    numero: "1",
    posicao: "Goleiro",
    dataNascimento: "24/06/1985",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  //Diego Ribas
  {
    nome: "Diego Ribas",
    background: "#",
    descricao:
      "Meia central com grande visão de jogo e habilidade para ditar o ritmo da partida. Conhecido por sua liderança e experiência.",
    pagina: "https://www.instagram.com/diegoribas/",
    nacionalidade: "Brasil",
    imagem:
      "https://assets.folhavitoria.com.br/images/b761c840-5598-0137-7b01-6231c35b6685--minified.jpg",
    numero: "10",
    posicao: "Meia",
    dataNascimento: "14/02/1985",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Djalma Santos
  {
    nome: "Djalma Santos",
    background: "plate",
    descricao:
      "Considerado um dos maiores laterais-direitos de todos os tempos, Djalma Santos era conhecido por sua marcação forte, velocidade e cruzamentos precisos. Ele foi fundamental para os títulos da Seleção Brasileira nas Copas do Mundo de 1958 e 1962.",
    pagina: "https://pt.wikipedia.org/wiki/Djalma_Santos",
    nacionalidade: "Brasil",
    imagem:
      "https://bolaclassica.wordpress.com/wp-content/uploads/2024/03/djalma-santos.jpg",
    numero: "2",
    posicao: "Lateral-direito",
    dataNascimento: "27/02/1929",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Douglas Costa
  {
    nome: "Douglas Costa",
    background: "#",
    descricao:
      "Um ponta-direita brasileiro conhecido por sua velocidade, dribles e habilidade de fazer jogadas individuais. Douglas Costa já jogou em grandes clubes europeus e se destacou pela Seleção Brasileira.",
    pagina: "https://www.instagram.com/douglascosta/",
    nacionalidade: "Brasil",
    imagem:
      "https://www.rbsdirect.com.br/filestore/2/8/2/6/4/0/5_24ef7b27287fa17/5046282_282e133883ec924.jpg?version=1575255600",
    numero: "11",
    posicao: "Ponta-direita",
    dataNascimento: "14/09/1990",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Dudu
  {
    nome: "Dudu",
    background: "#",
    descricao:
      "Ponta ou meia-atacante brasileiro conhecido por sua habilidade, velocidade e dribles, Dudu é um dos maiores ídolos recentes do Palmeiras. Sua trajetória inclui passagens por grandes clubes brasileiros e internacionais.",
    pagina: "https://www.instagram.com/duduoficial/",
    nacionalidade: "Brasil",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/d3/2023/08/28/dudu-do-palmeiras-no-jogo-contra-o-barcelona-equ-pela-libertadores-1693252363826_v2_1x1.jpg",
    numero: "7",
    posicao: "Ponta / Meia-atacante",
    dataNascimento: "07/01/1992",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Éder Militão
  {
    nome: "Éder Militão",
    background: "#",
    descricao:
      "Zagueiro brasileiro, conhecido por sua velocidade, força física e habilidade nos desarmes. É considerado uma das maiores promessas da defesa mundial.",
    pagina: "https://www.instagram.com/edermilitao/",
    nacionalidade: "Brasil",
    imagem:
      "https://es.coachesvoice.com/wp-content/uploads/2019/03/MilitaoMobile.jpg",
    numero: "3",
    posicao: "Zagueiro",
    dataNascimento: "18 de janeiro de 1998",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Ederson
  {
    nome: "Ederson",
    background: "plate",
    descricao:
      "Goleiro brasileiro, conhecido por suas defesas espetaculares, habilidade com os pés e por ser um dos melhores passadores entre os goleiros. É peça fundamental no esquema de jogo do Manchester City.",
    pagina: "https://www.instagram.com/ederson93/",
    nacionalidade: "Brasil",
    imagem:
      "https://i.pinimg.com/474x/09/72/1a/09721af7435e7ecf2298a0689e558f21.jpg",
    numero: "31",
    posicao: "Goleiro",
    dataNascimento: "17 de agosto de 1993",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Edílson Capetinha
  {
    nome: "Edílson Capetinha",
    background: "#",
    descricao:
      "Conhecido por sua habilidade e personalidade marcante, Edílson Capetinha foi um atacante rápido e driblador, que se destacou por seus gols importantes e comemorações exuberantes. Fez parte da Seleção Brasileira campeã mundial em 2002.",
    pagina: "https://www.instagram.com/edilsoncapetinhaoficial/",
    nacionalidade: "Brasil",
    imagem:
      "https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2014/07/06/edilsongetty.jpg",
    numero: "20",
    posicao: "Atacante",
    dataNascimento: "17 de setembro de 1970",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Endrick
  {
    nome: "Endrick",
    background: "promise",
    descricao:
      "Joia do futebol brasileiro, Endrick é um atacante veloz e habilidoso, com grande potencial para se tornar um dos maiores jogadores do mundo. Despertou o interesse de grandes clubes europeus.",
    pagina: "https://www.instagram.com/endrickfelder/",
    nacionalidade: "Brasil",
    imagem:
      "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/10/endrick-real-madrid-champions-league-e1727895962399.jpg?w=1200&h=1200&crop=1",
    numero: "16",
    posicao: "Atacante",
    dataNascimento: "21/07/2006",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Estêvão Willian
  {
    nome: "Estêvão",
    background: "promise",
    descricao:
      "Joia brasileira com grande potencial, conhecido por sua habilidade e dribles. Atualmente, joga pelo Palmeiras e já recebeu comparações com grandes nomes do futebol.",
    pagina: "https://www.instagram.com/estevaowillian/",
    nacionalidade: "Brasil",
    imagem:
      "https://s2-oglobo.glbimg.com/RWSeKGipHdDIGf62euluxvuJ1vw=/0x0:828x827/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2024/D/u/zAdCgPTGy06oxwNI5tkg/whatsapp-image-2024-11-09-at-13.20.38.jpeg",
    numero: "41",
    posicao: "Ponta-direita e meio-campista",
    dataNascimento: "24/04/2007",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Everton Cebolinha
  {
    nome: "Everton Cebolinha",
    background: "#",
    imagem:
      "https://tntsports.com.br/__export/1718325351451/sites/esporteinterativo/img/2024/06/13/20240613-213214_2060267_2871.jpg",
    pagina: "https://www.instagram.com/evertons/",
    descricao:
      "Atacante brasileiro conhecido por sua velocidade, habilidade no drible e finalização precisa. Everton Cebolinha destacou-se no Grêmio, onde foi peça fundamental na conquista da Copa Libertadores e foi um dos principais jogadores na conquista da Copa América de 2019, e, posteriormente, ao futebol europeu, antes de retornar ao Brasil para atuar no Flamengo.",
    numero: "11",
    posicao: "Atacante",
    nacionalidade: "Brasil",
    dataNascimento: "22/03/1996",
    status: "Ativo (Flamengo)",
    clubes: [
      createClub(
        "Grêmio",
        { inicio: "2014", fim: "2020" },
        { jogos: 274, gols: 69, assistencias: 35 }
      ),
      createClub(
        "Benfica",
        { inicio: "2020", fim: "2022" },
        { jogos: 95, gols: 15, assistencias: 17 }
      ),
      createClub(
        "Flamengo",
        { inicio: "2022", fim: "Presente" },
        { jogos: 133, gols: 14, assistencias: 19 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2018", fim: "Presente" },
      estatisticas: { jogos: 27, gols: 3, assistencias: 4 },
    },
    titulos: [
      // Grêmio
      {
        nome: "Copa do Brasil",
        anos: "2016",
        clube: "Grêmio",
      },
      {
        nome: "Copa Libertadores",
        anos: "2017",
        clube: "Grêmio",
      },
      {
        nome: "Recopa Sul-Americana",
        anos: "2018",
        clube: "Grêmio",
      },
      {
        nome: "Campeonato Gaúcho",
        anos: "2018, 2019, 2020",
        clube: "Grêmio",
      },
      // Flamengo
      {
        nome: "Copa do Brasil",
        anos: "2022",
        clube: "Flamengo",
      },
      {
        nome: "Copa Libertadores",
        anos: "2022",
        clube: "Flamengo",
      },
      {
        nome: "Campeonato Carioca",
        anos: "2024",
        clube: "Flamengo",
      },
      // Seleção Brasileira
      {
        nome: "Copa América",
        anos: "2019",
        clube: "Brasil",
        logoVariavel: true,
      },
      // Individuais
      {
        nome: "Artilheiro da Copa América",
        logo: "Copa América",
        anos: "2019",
        clube: "Individual",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Melhor jogador da final da Copa América",
        logo: "Copa América",
        anos: "2019",
        clube: "Individual",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Equipe ideal da Copa América",
        logo: "Copa América",
        anos: "2019",
        clube: "Individual",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Bola de Prata",
        anos: "2018",
        clube: "Individual",
        categoria: "individual",
      },
    ],
    tags: [
      "Everton",
      "Cebolinha",
      "Everton Cebolinha",
      "Flamengo",
      "Grêmio",
      "Benfica",
      "Brasil",
      "Atacante",
      "Ponta Esquerda",
    ],
  },

  // Éverton Ribeiro
  {
    nome: "Éverton Ribeiro",
    background: "#",
    descricao:
      "Meia brasileiro conhecido por sua visão de jogo, passes precisos e habilidade em cobranças de falta. Já atuou por grandes clubes como Cruzeiro e Flamengo.",
    pagina: "https://www.instagram.com/evertonribeiro/",
    nacionalidade: "Brasil",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/72/2024/01/24/everton-ribeiro-comemora-primeiro-gol-pelo-bahia-1706143661502_v2_450x600.jpg",
    numero: "7",
    posicao: "Meia",
    dataNascimento: "10/04/1989",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Fabinho
  {
    nome: "Fabinho",
    background: "#",
    descricao:
      "Volante completo e versátil, Fabinho se destaca por sua força física, boa distribuição de bola e capacidade de marcação. Seus passes longos precisos são uma de suas principais características.",
    pagina: "https://www.instagram.com/fabinho_",
    nacionalidade: "Brasil",
    imagem:
      "https://resources.saudi-pro-league.pulselive.com/photo-resources/2024/10/31/a936a8e2-21b0-4048-8e37-47b6b5f41621/GettyImages-2165213163.jpg?width=1868&height=1136",
    numero: "8",
    posicao: "Volante",
    dataNascimento: "23/10/1993",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Fabrício Bruno
  {
    nome: "Fabrício Bruno",
    background: "#",
    descricao:
      "Zagueiro brasileiro conhecido por sua força física e bom posicionamento em campo, Fabrício Bruno se destacou no Flamengo e conquistou diversos títulos.",
    pagina: "https://www.instagram.com/fabriciobrunoo/",
    nacionalidade: "Brasil",
    imagem:
      "https://static.gazetaesportiva.com/uploads/Flamengo-Fabricio-Bruno.png",
    numero: "15",
    posicao: "Zagueiro",
    dataNascimento: "12/02/1996",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Fagner
  {
    nome: "Fagner",
    background: "#",
    descricao:
      "Lateral-direito brasileiro, conhecido por sua versatilidade e cruzamentos precisos. Fagner é um dos principais jogadores do Corinthians e já defendeu a Seleção Brasileira. Destaca-se por sua força física e marcação rigorosa.",
    pagina: "https://www.instagram.com/fagner/",
    nacionalidade: "Brasil",
    imagem:
      "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/10/04/571455842-whatsapp-image-2023-10-04-at-153515.jpeg",
    numero: "23",
    posicao: "Lateral-direito",
    dataNascimento: "11 de junho de 1989",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Fernandinho
  {
    nome: "Fernandinho",
    background: "#",
    descricao:
      "Volante brasileiro conhecido por sua versatilidade e capacidade de marcação, Fernandinho se destacou no Shakhtar Donetsk e Manchester City, atualmente joga no Athletico-PR.",
    pagina: "https://www.instagram.com/fernandinho/",
    nacionalidade: "Brasil",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/43/2018/10/20/fernandinho-comemora-gol-durante-manchester-city-x-burnley-neste-sabado-1540051315426_v2_450x600.jpg",
    numero: "5",
    posicao: "Volante",
    dataNascimento: "04/05/1985",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Filipe Luís
  {
    nome: "Filipe Luís",
    background: "#",
    descricao:
      "Lateral-esquerdo brasileiro conhecido por sua experiência e qualidade defensiva. Foi um dos principais jogadores do Atlético de Madrid e do Chelsea.",
    pagina: "https://www.instagram.com/filipeluis/",
    nacionalidade: "Brasil",
    imagem:
      "https://media.gettyimages.com/id/1148766587/pt/foto/porto-alegre-brazil-filipe-luis-of-brazil-controls-the-ball-during-the-international-friendly.jpg?s=612x612&w=gi&k=20&c=ChNTgB3M5x8MaaaerHnNqWn7Isbw2PwgRKYtQf82GxY=",
    numero: "6",
    posicao: "Lateral-esquerdo",
    dataNascimento: "09/08/1985",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Gabriel Barbosa
  {
    nome: "Gabriel Barbosa",
    background: "#",
    descricao:
      "Atacante brasileiro conhecido por sua finalização e habilidade, artilheiro em diversas competições, ganhando o apelido de Gabigol. Ídolo do time.",
    pagina: "https://www.instagram.com/gabigol/",
    nacionalidade: "Brasil",
    imagem:
      "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2025/01/17/532288004-542694910180da12ab0c1k-1.jpg",
    numero: "99",
    posicao: "Atacante",
    dataNascimento: "30/08/1996",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Gabriel Jesus
  {
    nome: "Gabriel Jesus",
    background: "#",
    descricao:
      "Atacante brasileiro conhecido por sua velocidade, dribles e finalizações precisas, Gabriel Jesus se destacou no Palmeiras e Manchester City e atualmente joga no Asenal.",
    pagina: "https://www.instagram.com/gabrieljesus/",
    nacionalidade: "Brasil",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/69/2019/07/07/gabriel-jesus-comemora-gol-da-selecao-brasileira-na-final-da-copa-america-2019-no-maracana-rj-1562533448865_v2_3x4.jpg",
    numero: "9",
    posicao: "Atacante",
    dataNascimento: "03/04/1997",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Gabriel Menino
  {
    nome: "Gabriel Menino",
    background: "#",
    descricao:
      "Meia versátil e com muita energia, Gabriel Menino é conhecido por sua força física e capacidade de marcar gols. É uma das grandes promessas do futebol brasileiro.",
    pagina: "https://www.instagram.com/gabrielmenino/",
    nacionalidade: "Brasil",
    imagem:
      "https://s2-ge.glbimg.com/HkmGTOMyK2VKU1cy59Se57bfscg=/0x0:2047x1365/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2025/r/Q/QICO5pTfC3sRRmX1MQyg/54272838982-41e50e91b4-k.jpg",
    numero: "25",
    posicao: "Meia",
    dataNascimento: "29/09/2000",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Garrincha
  {
    nome: "Garrincha",
    background: "gold",
    descricao:
      "Considerado um dos maiores gênios do futebol, Garrincha era famoso por seus dribles desconcertantes e sua alegria dentro de campo. Sua habilidade era tão grande que compensava suas pernas tortas, que o tornaram ainda mais especial.",
    pagina:
      "https://www.transfermarkt.com.br/mane-garrincha/profil/spieler/151263",
    nacionalidade: "Brasil",
    imagem:
      "https://media.gettyimages.com/id/639617883/pt/foto/brazilian-soccer-legend-garrincha-from-botafogo.jpg?s=612x612&w=gi&k=20&c=pPL3wZwTAyPiG9yX39hcRxdzyxnrtk8h9TxL46wO9EI=",
    numero: "7",
    posicao: "Ponta-direita",
    dataNascimento: "28/10/1933",
    dataFalecimento: "20/01/1983",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Gerson
  {
    nome: "Gerson",
    background: "#",
    descricao:
      "Meia brasileiro conhecido por sua força física, desarmes e passes precisos. Um dos pilares do meio-campo do Flamengo que completa o time.",
    pagina: "https://www.instagram.com/gersonsantoss/",
    nacionalidade: "Brasil",
    imagem:
      "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/08/GettyImages-1496527295-e1692115533923.jpg?w=1200&h=1200&crop=1",
    numero: "8",
    posicao: "Volante",
    dataNascimento: "20/05/1997",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Gilberto Silva
  {
    nome: "Gilberto Silva",
    background: "plate",
    descricao:
      "Um dos maiores volantes de sua geração, Gilberto Silva era conhecido por sua força física, marcação implacável e visão de jogo. Ele foi fundamental para a conquista da Copa do Mundo de 2002 pela Seleção Brasileira.",
    pagina: "https://www.instagram.com/gilbertosilvaoficial/",
    nacionalidade: "Brasil",
    imagem:
      "https://media.gettyimages.com/id/102416694/pt/foto/durban-south-africa-gilberto-silva-of-brazil-in-action-during-the-2010-fifa-world-cup-south.jpg?s=612x612&w=gi&k=20&c=Kb7Ahtpo6C4BbOG1SMFGtCFe-U5OHgK9Trc1B3Xe94I=",
    numero: "8",
    posicao: "Volante",
    dataNascimento: "07/10/1976",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Gustavo Scarpa
  {
    nome: "Gustavo Scarpa",
    background: "#",
    descricao:
      "Meia talentoso e elegante, Gustavo Scarpa é conhecido por sua visão de jogo e passes precisos. Atualmente, é um dos principais jogadores do Atlético Mineiro.",
    pagina: "https://www.instagram.com/gustavoscarpa/",
    nacionalidade: "Brasil",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/fa/2023/12/29/montagem-de-gustavo-scarpa-com-a-camisa-do-atletico-mg-divulgada-pelo-clube-1703871050362_v2_1x1.jpg",
    numero: "6",
    posicao: "Meia",
    dataNascimento: "05/01/1994",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Hernanes
  {
    nome: "Hernanes",
    background: "#",
    descricao:
      "Conhecido como 'O Profeta', Hernanes é um meio-campista brasileiro com grande habilidade técnica. Destaca-se por seus passes precisos, chutes de longa distância e visão de jogo. Atuou em diversos clubes importantes do Brasil e da Europa.",
    pagina: "https://www.instagram.com/hernanes/",
    nacionalidade: "Brasil",
    imagem:
      "https://media.gettyimages.com/id/450748026/photo/sao-paulo-brazil-hernanes-of-brazil-in-action-during-the-2014-fifa-world-cup-brazil-group-a.jpg?s=612x612&w=gi&k=20&c=0J6kpRUwWKu9JdSjzLW3t1qS9ogk7mrKuT3o554zsOg=",
    numero: "8",
    posicao: "Meio-campista",
    dataNascimento: "29 de maio de 1985",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  //Hulk
  {
    nome: "Hulk",
    background: "plate",
    descricao:
      "Atacante brasileiro conhecido por sua força física, chutes potentes e velocidade. Hulk é um dos jogadores mais experientes do futebol brasileiro e tem passagens por diversos clubes de destaque.",
    pagina: "https://www.instagram.com/hulkparaiba/",
    numero: "7",
    posicao: "Atacante",
    dataNascimento: "25/07/1986",
    status: "Ativo",
    nacionalidade: "Brasil",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/93/2023/01/27/hulk-do-atletico-mg-em-partida-contra-a-caldense-pelo-campeonato-mineiro-1674821833447_v2_450x600.jpg",
    clubes: [
      createClub(
        "Vitória",
        { inicio: "2004", fim: "2005" },
        { jogos: 2, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Kawasaki Frontale",
        { inicio: "2005", fim: "2008" },
        { jogos: 14, gols: 3, assistencias: 1 }
      ),
      createClub(
        "Consadole Sapporo",
        { inicio: "2005", fim: "2008" },
        { jogos: 41, gols: 26, assistencias: 1 }
      ),
      createClub(
        "Tokyo Verdy",
        { inicio: "2006", fim: "2008" },
        { jogos: 56, gols: 45, assistencias: 2 }
      ),
      createClub(
        "Porto",
        { inicio: "2008", fim: "2012" },
        { jogos: 169, gols: 77, assistencias: 65 }
      ),
      createClub(
        "Zenit São Petersburgo",
        { inicio: "2012", fim: "2016" },
        { jogos: 148, gols: 77, assistencias: 59 }
      ),
      createClub(
        "Shanghai SIPG",
        { inicio: "2016", fim: "2021" },
        { jogos: 145, gols: 77, assistencias: 59 }
      ),
      createClub(
        "Atlético Mineiro",
        { inicio: "2021", fim: "Presente" },
        { jogos: 234, gols: 122, assistencias: 45 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2009", fim: "2016" },
      estatisticas: { jogos: 49, gols: 11, assistencias: 11 },
    },
    titulos: [
      //Vitória
      {
        nome: "Campeonato Baiano",
        anos: "2005",
        clube: "Vitória",
      },

      //Porto
      {
        nome: "Taça de Portugal",
        anos: "2009, 2010, 2011",
        clube: "Porto",
      },
      {
        nome: "Primeira Liga",
        anos: "2009, 2011, 2012",
        clube: "Porto",
      },
      {
        nome: "Supertaça Cândido de Oliveira",
        anos: "2009, 2010, 2011, 2012",
        clube: "Porto",
      },
      {
        nome: "UEFA Europa League",
        anos: "2011",
        clube: "Porto",
      },
      {
        nome: "Campeonato Russo",
        anos: "2015",
        clube: "Zenit São Petersburgo",
      },
      {
        nome: "Copa da Rússia",
        anos: "2016",
        clube: "Zenit São Petersburgo",
      },
      {
        nome: "Supercopa da Rússia",
        anos: "2015, 2016",
        clube: "Zenit São Petersburgo",
      },
      {
        nome: "Superliga Chinesa",
        anos: "2018",
        clube: "Shanghai SIPG",
      },
      {
        nome: "Supercopa da China",
        anos: "2019",
        clube: "Shanghai SIPG",
      },
      {
        nome: "Campeonato Mineiro",
        anos: "2021, 2022, 2023, 2024",
        clube: "Atlético Mineiro",
      },
      {
        nome: "Campeonato Brasileiro",
        anos: "2021",
        clube: "Atlético Mineiro",
      },
      {
        nome: "Copa do Brasil",
        anos: "2021",
        clube: "Atlético Mineiro",
      },
      {
        nome: "Supercopa do Brasil",
        anos: "2022",
        clube: "Atlético Mineiro",
      },
      {
        nome: "Copa das Confederações",
        anos: "2013",
        clube: "Brasil",
        logoVariavel: true,
      },
    ],
    tags: [],
  },

  // Jairzinho
  {
    nome: "Jairzinho",
    background: "plate",
    descricao:
      "Atacante brasileiro conhecido por sua velocidade, dribles e finalizações precisas. Jairzinho foi um dos principais jogadores da seleção brasileira campeã da Copa do Mundo de 1970.",
    pagina: "https://pt.wikipedia.org/wiki/Jairzinho",
    nacionalidade: "Brasil",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/8/8f/Jairzinho_1970s.jpg",
    numero: "7",
    posicao: "Ponta-Direita",
    dataNascimento: "25/03/1944",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Júlio César
  {
    nome: "Júlio César",
    background: "#",
    descricao:
      "Um dos maiores goleiros brasileiros de todos os tempos, Júlio César era conhecido por suas defesas espetaculares, liderança e tranquilidade. Ele foi fundamental para a conquista de diversos títulos com o Flamengo e a Internazionale de Milão.",
    pagina: "https://www.instagram.com/juliocesaroficial/",
    nacionalidade: "Brasil",
    imagem:
      "https://static.gazetaesportiva.com/uploads/imagem/2018/01/29/JC-Djalma.jpg",
    numero: "12",
    posicao: "Goleiro",
    dataNascimento: "03/09/1979",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Juninho Pernambucano
  {
    nome: "Juninho Pernambucano",
    background: "#",
    descricao:
      "Um dos maiores meio-campistas da história do futebol, conhecido mundialmente por suas cobranças de falta perfeitas. Foi ídolo em clubes como Vasco da Gama e Olympique Lyonnais.",
    pagina: "https://www.instagram.com/juninhopeoficial/",
    nacionalidade: "Brasil",
    imagem:
      "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/10/30/1414685159982/fe1aab0f-be05-4bee-a022-883cc839bd49-1336x2040.jpeg?width=445&dpr=1&s=none",
    numero: "8",
    posicao: "Meio-campo",
    dataNascimento: "30 de janeiro de 1975",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  //Kaká
  {
    nome: "Kaká",
    background: "plate",
    descricao:
      "Um dos maiores meio-campistas da história do futebol, conhecido por sua técnica apurada, visão de jogo e passes precisos. Venceu a Bola de Ouro e a Copa do Mundo, além de ter brilhado em grandes clubes como Milan e Real Madrid.",
    pagina: "http://www.kakaww.com/",
    nacionalidade: "Brasil",
    imagem:
      "https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2013/11/23/kaka-comemora-rt.JPG",
    numero: "22",
    posicao: "Meia",
    dataNascimento: "22/04/1982",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  //Léo Ortiz
  {
    nome: "Léo Ortiz",
    background: "#",
    descricao:
      "Zagueiro brasileiro conhecido por sua técnica e visão de jogo. Chegou ao Flamengo em 2024 e já se destaca pela sua qualidade.",
    pagina: "https://www.instagram.com/leortiz33/",
    nacionalidade: "Brasil",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/85/2024/04/11/leo-ortiz-durante-a-vitoria-do-flamengo-sobre-o-palestino-na-libertadores-1712809854387_v2_450x600.jpg",
    numero: "4",
    posicao: "Zagueiro",
    dataNascimento: "11/01/1997",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Léo Pereira
  {
    nome: "Léo Pereira",
    background: "#",
    descricao:
      "Zagueiro brasileiro conhecido por sua força física e bom posicionamento defensivo. Um dos pilares da defesa do Flamengo.",
    pagina: "https://www.instagram.com/leopereira4/",
    nacionalidade: "Brasil",
    imagem:
      "https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2023/07/04/1588391585-leo-pereira.jpeg",
    numero: "4",
    posicao: "Zagueiro",
    dataNascimento: "05/01/1998",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Lincoln
  {
    nome: "Lincoln",
    background: "#",
    descricao:
      "Atacante promissor, conhecido por sua velocidade e habilidade nos dribles. Lincoln é considerado uma das maiores promessas do futebol brasileiro.",
    pagina: "https://www.instagram.com/lincolnoficial/",
    nacionalidade: "Brasil",
    imagem:
      "https://www.bundesliga.at/_next/image?url=https%3A%2F%2Foefbl-production-bucket-public.s3.eu-central-1.amazonaws.com%2Fcraft-cms-oefbl%2FProfile%2FSpieler%2F66270.jpg%3Ftimestamp%3D1731409444132&w=1920&q=75",
    numero: "10",
    posicao: "Atacante",
    dataNascimento: "05/05/2000",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  //Lucas Moura
  {
    nome: "Lucas Moura",
    background: "#",
    descricao:
      "Meia-atacante brasileiro conhecido por sua velocidade e habilidade nos dribles, Lucas Moura já atuou por grandes clubes como São Paulo, Paris Saint-Germain e Tottenham.",
    pagina: "https://www.instagram.com/lucasmoura/",
    nacionalidade: "Brasil",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/d1/2023/02/06/lucas-moura-esta-no-tottenham-desde-janeiro-de-2018-1675718802147_v2_450x600.jpg",
    numero: "7",
    posicao: "Meia-atacante",
    dataNascimento: "13/08/1992",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  //Lucas Paquetá
  {
    nome: "Lucas Paquetá",
    background: "#",
    descricao:
      "Meio-campista brasileiro conhecido por sua técnica refinada, visão de jogo e versatilidade. Paquetá é um dos principais jogadores do West Ham e da seleção brasileira.",
    pagina: "https://www.instagram.com/lucaspaqueta/",
    numero: "10",
    posicao: "Meio-campista",
    dataNascimento: "27/08/1997",
    status: "Ativo",
    nacionalidade: "Brasil",
    imagem:
      "https://p2.trrsf.com/image/fget/cf/1200/1200/middle/images.terra.com/2024/02/23/1430895059-lucas-paqueta-fulham-fc-v-west-ham-united-premier-league-2048x1366.jpg",
    clubes: [
      createClub(
        "Flamengo",
        { inicio: "2016", fim: "2019" },
        { jogos: 95, gols: 18, assistencias: 13 }
      ),
      createClub(
        "AC Milan",
        { inicio: "2019", fim: "2020" },
        { jogos: 44, gols: 2, assistencias: 3 }
      ),
      createClub(
        "Lyon",
        { inicio: "2020", fim: "2022" },
        { jogos: 80, gols: 21, assistencias: 14 }
      ),
      createClub(
        "West Ham",
        { inicio: "2022", fim: "Presente" },
        { jogos: 102, gols: 16, assistencias: 14 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2018", fim: "Presente" },
      estatisticas: { jogos: 55, gols: 11, assistencias: 3 },
    },
    titulos: [
      {
        nome: "Campeonato Carioca",
        anos: "2017, 2019",
        clube: "Flamengo",
      },
      {
        nome: "Taça Guanabara",
        anos: "2018",
        clube: "Flamengo",
      },
      {
        nome: "Taça Rio",
        anos: "2019",
        clube: "Flamengo",
      },
      {
        nome: "Copa América",
        anos: "2019",
        clube: "Brasil",
        logoVariavel: true,
      },
      {
        nome: "UEFA Conference League",
        anos: "2023",
        clube: "West Ham",
      },
    ],
    tags: [],
  },

  // Lúcio
  {
    nome: "Lúcio",
    background: "plate",
    descricao:
      "Considerado um dos maiores zagueiros da história do futebol brasileiro, Lúcio era conhecido por sua força física, liderança e excelente jogo aéreo. Tendo atuado por grandes clubes como Bayer Leverkusen, Bayern de Munique e Inter de Milão, conquistou diversos títulos e se tornou um dos principais jogadores da Seleção Brasileira.",
    pagina: "https://pt.wikipedia.org/wiki/Lúcio_(futebolista)",
    nacionalidade: "Brasil",
    imagem:
      "https://s2.glbimg.com/_7aal7kSC2Pnb04XJAdGWdxW3h0=/186x0:541x469/300x397/s.glbimg.com/es/ge/f/original/2010/06/29/lucio_get620.jpg",
    numero: "4",
    posicao: "Zagueiro",
    dataNascimento: "08/05/1978",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Luiz Araújo
  {
    nome: "Luiz Araújo",
    background: "#",
    descricao:
      "Atacante rápido e habilidoso, conhecido por seus dribles e finalizações precisas. Uma das principais armas do ataque do Flamengo.",
    pagina: "#",
    nacionalidade: "Brasil",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/c5/2024/06/13/luiz-araujo-e-wesley-comemoram-gol-marcado-pelo-flamengo-contra-o-gremio-pelo-brasileirao-1718325992042_v2_3x4.jpg",
    numero: "7",
    posicao: "Atacante",
    dataNascimento: "02/06/1996",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  //Marcelo
  {
    nome: "Marcelo",
    background: "plate",
    descricao:
      "Lateral-esquerdo habilidoso e ofensivo, Marcelo é considerado um dos maiores laterais da história do futebol. Famoso por seus dribles, cruzamentos e visão de jogo, ele conquistou diversos títulos pelo Real Madrid e pela Seleção Brasileira.",
    pagina: "https://www.instagram.com/marceloviieira/",
    nacionalidade: "Brasil",
    imagem:
      "https://i.pinimg.com/736x/9f/d5/87/9fd587b97780c61629ec5933895a43db.jpg",
    numero: "12",
    posicao: "Lateral-esquerdo",
    dataNascimento: "12/05/1988",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Marquinhos
  {
    nome: "Marquinhos",
    background: "#",
    descricao:
      "Um zagueiro sólido e elegante, conhecido por sua liderança e habilidade no jogo aéreo. Marquinhos é peça fundamental da defesa do Paris Saint-Germain e da Seleção Brasileira.",
    pagina: "https://www.instagram.com/marquinhosm5/",
    nacionalidade: "Brasil",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/32/2024/02/19/marquinhos-joga-no-paris-saint-germain-desde-2013-e-tem-mais-4-anos-de-contrato-1708370727790_v2_3x4.jpg",
    numero: "5",
    posicao: "Zagueiro",
    dataNascimento: "14/05/1994",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  //Miranda
  {
    nome: "Miranda",
    background: "#",
    descricao:
      "Zagueiro brasileiro conhecido por sua liderança e experiência, Miranda já defendeu grandes clubes como Atlético de Madrid e Internazionale, além da Seleção Brasileira.",
    pagina: "https://www.instagram.com/mirandaoficial/",
    nacionalidade: "Brasil",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Miranda_850_1585.jpg/640px-20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Miranda_850_1585.jpg",
    numero: "4",
    posicao: "Zagueiro",
    dataNascimento: "07/08/1984",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Marinho
  {
    nome: "Marinho",
    background: "#",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/3a/2024/09/18/marinho-do-fortaleza-em-acao-no-jogo-contra-o-corinthians-pela-ida-das-quartas-da-sul-americana-1726659062687_v2_4x3.jpg",
    pagina: "https://www.instagram.com/marinhooficial/",
    descricao:
      "Marinho ganhou notoriedade no cenário nacional por suas passagens de destaque por clubes como Vitória e Santos, onde foi vice-campeão e eleito Rei da América da Copa Libertadores de 2020. Atualmente defende o Fortaleza.",
    numero: "15",
    posicao: "Atacante",
    nacionalidade: "Brasil",
    dataNascimento: "29/05/1990",
    status: "Ativo (Fortaleza)",
    clubes: [
      createClub(
        "Fluminense",
        { inicio: "2008", fim: "2011" },
        { jogos: 13, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Internacional",
        { inicio: "2012", fim: "2013" },
        { jogos: 1, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Caxias",
        { inicio: "2013", fim: "2013" },
        { jogos: 1, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Ituano",
        { inicio: "2014", fim: "2014" },
        { jogos: 4, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Náutico",
        { inicio: "2014", fim: "2014" },
        { jogos: 19, gols: 2, assistencias: 1 }
      ),
      createClub(
        "Ceará",
        { inicio: "2015", fim: "2015" },
        { jogos: 35, gols: 9, assistencias: 4 }
      ),
      createClub(
        "Cruzeiro",
        { inicio: "2015", fim: "2016" },
        { jogos: 12, gols: 1, assistencias: 0 }
      ),
      createClub(
        "Vitória",
        { inicio: "2016", fim: "2017" },
        { jogos: 43, gols: 21, assistencias: 7 }
      ),
      createClub(
        "Changchun Yatai",
        { inicio: "2017", fim: "2018" },
        { jogos: 20, gols: 3, assistencias: 1 }
      ),
      createClub(
        "Grêmio",
        { inicio: "2018", fim: "2019" },
        { jogos: 28, gols: 4, assistencias: 3 }
      ),
      createClub(
        "Santos",
        { inicio: "2019", fim: "2022" },
        { jogos: 113, gols: 41, assistencias: 17 }
      ),
      createClub(
        "Flamengo",
        { inicio: "2022", fim: "2023" },
        { jogos: 58, gols: 6, assistencias: 6 }
      ),
      createClub(
        "Fortaleza",
        { inicio: "2023", fim: "Presente" },
        { jogos: 71, gols: 9, assistencias: 6 }
      ),
    ],
    selecao: null,
    titulos: [
      // Clubes
      {
        nome: "Campeonato Goiano",
        anos: "2013",
        clube: "Goiás",
      },
      {
        nome: "Copa do Nordeste",
        anos: "2015",
        clube: "Ceará",
      },
      {
        nome: "Campeonato Baiano",
        anos: "2016",
        clube: "Vitória",
      },
      {
        nome: "Campeonato Gaúcho",
        anos: "2019",
        clube: "Grêmio",
      },
      {
        nome: "Copa Libertadores",
        anos: "2022",
        clube: "Flamengo",
      },
      {
        nome: "Copa do Brasil",
        anos: "2022",
        clube: "Flamengo",
      },
      {
        nome: "Copa do Nordeste",
        anos: "2024",
        clube: "Fortaleza",
      },
      // Individuais
      {
        nome: "Rei da América",
        logo: "Copa Libertadores",
        anos: "2020",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Melhor Jogador da Libertadores",
        logo: "Copa Libertadores",
        anos: "2020",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Seleção da Libertadores",
        logo: "Copa Libertadores",
        anos: "2020",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Bola de Prata",
        anos: "2016, 2019, 2020",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Craque do Brasileirão",
        logo: "Campeonato Brasileiro",
        anos: "2020",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Melhor Jogador do Campeonato Baiano",
        logo: "Campeonato Baiano",
        anos: "2016",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Artilheiro do Campeonato Baiano",
        logo: "Campeonato Baiano",
        anos: "2016",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Artilheiro da Copa do Brasil",
        logo: "Copa do Brasil",
        anos: "2016",
        clube: "Individual",
        categoria: "individual",
      },
    ],
    tags: [
      "Marinho",
      "Fortaleza",
      "Flamengo",
      "Santos",
      "Grêmio",
      "Vitória",
      "Atacante",
      "Ponta Direita",
      "Rei da América",
    ],
  },

  //Matheus Cunha
  {
    nome: "Matheus Cunha",
    background: "#",
    descricao:
      "Goleiro brasileiro, jovem promessa das categorias de base do Flamengo. Destaca-se por suas reflexões e agilidade.",
    pagina: "https://www.instagram.com/matheuscunha_01/",
    nacionalidade: "Brasil",
    imagem:
      "https://images.flamengo.com.br/public/images/players/1/1710271566.png",
    numero: "30",
    posicao: "Goleiro",
    dataNascimento: "15/03/2004",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Matheus Gonçalves
  {
    nome: "Matheus Gonçalves",
    background: "#",
    descricao:
      "Meia brasileiro com grande potencial, conhecido por sua habilidade nos dribles e visão de jogo. Uma das maiores promessas das categorias de base do Flamengo.",
    pagina: "https://www.instagram.com/oficialm10_/",
    nacionalidade: "Brasil",
    imagem:
      "https://s2-ge.glbimg.com/Us7cCi69LTiaZR7vzIKXuTzaMp0=/0x0:1125x1388/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/o/O/EWqDSpQzqUWvQCfoZlgg/whatsapp-image-2024-04-07-at-21.55.55.jpeg",
    numero: "10",
    posicao: "Meia",
    dataNascimento: "15/03/2004",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Neymar Jr.
  {
    nome: "Neymar Jr.",
    background: "plate",
    descricao:
      "Atacante brasileiro conhecido por sua habilidade, dribles e finalizações. Considerado um dos melhores jogadores do mundo, Neymar já atuou por Santos, Barcelona e PSG.",
    pagina: "https://www.neymarjr.com/",
    numero: "10",
    posicao: "Atacante",
    dataNascimento: "05/02/1992",
    status: "Ativo",
    nacionalidade: "Brasil",
    imagem:
      "https://cdn.esbrasil.com.br/wp-content/uploads/2024/09/6d2nqshw9lodueisju2k2bwyl.jpg",
    clubes: [
      createClub(
        "Santos",
        { inicio: "2009", fim: "2013" },
        { jogos: 225, gols: 136, assistencias: 64 } // Dados aproximados
      ),
      createClub(
        "Barcelona",
        { inicio: "2013", fim: "2017" },
        { jogos: 186, gols: 105, assistencias: 76 } // Dados aproximados
      ),
      createClub(
        "Paris Saint-Germain",
        { inicio: "2017", fim: "2023" },
        { jogos: 173, gols: 118, assistencias: 77 } // Dados aproximados
      ),
      createClub(
        "Al-Hilal",
        { inicio: "2023", fim: "atual" },
        { jogos: 7, gols: 1, assistencias: 3 } // Dados aproximados
      ),
      createClub(
        "Santos",
        { inicio: "2025", fim: "atual" },
        { jogos: 7, gols: 3, assistencias: 3 } // Dados aproximados
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2010", fim: "atual" }, // Ajuste o ano final
      estatisticas: { jogos: 128, gols: 79, assistencias: 40 }, // Dados aproximados
    },
    titulos: [
      // Santos
      {
        nome: "Campeonato Paulista",
        anos: "2010, 2011, 2012",
        clube: "Santos",
      },
      {
        nome: "Copa do Brasil",
        anos: "2010",
        clube: "Santos",
      },
      {
        nome: "Copa Libertadores",
        anos: "2011",
        clube: "Santos",
      },
      {
        nome: "Recopa Sul-Americana",
        anos: "2012",
        clube: "Santos",
      },

      //Barcelona
      {
        nome: "La Liga",
        anos: "2015, 2016",
        clube: "Barcelona",
      },
      {
        nome: "Copa del Rey",
        anos: "2015, 2016, 2017",
        clube: "Barcelona",
      },
      {
        nome: "UEFA Champions League",
        anos: "2015",
        clube: "Barcelona",
      },
      {
        nome: "Mundial de Clubes",
        anos: "2015",
        clube: "Barcelona",
      },
      {
        nome: "Supercopa da Espanha",
        anos: "2013",
        clube: "Barcelona",
      },

      // Paris Saint-Germain
      {
        nome: "Ligue 1",
        anos: "2018, 2019, 2020, 2022, 2023",
        clube: "Paris Saint-Germain",
      },
      {
        nome: "Copa da França",
        anos: "2018, 2020, 2021",
        clube: "Paris Saint-Germain",
      },
      {
        nome: "Copa da Liga Francesa",
        anos: "2018, 2020",
        clube: "Paris Saint-Germain",
      },
      {
        nome: "Supercopa da França",
        anos: "2018, 2020, 2022",
        clube: "Paris Saint-Germain",
      },

      // Al-Hilal
      {
        nome: "Campeonato Saudita",
        anos: "2024",
        clube: "Al-Hilal",
      },

      //Seleção Brasileira
      {
        nome: "Jogos Olímpicos",
        anos: "2016",
        clube: "Brasil",
        logoVariavel: true,
      },
      {
        nome: "Copa das Confederações",
        anos: "2013",
        clube: "Brasil",
        logoVariavel: true,
      },
    ],
    tags: [],
  },

  //Paulinho
  {
    nome: "Paulinho",
    background: "#",
    descricao:
      "Volante brasileiro conhecido por sua força física e habilidade na marcação, Paulinho já atuou por grandes clubes como Corinthians e Tottenham, além da Seleção Brasileira.",
    pagina: "https://www.instagram.com/paulinho/",
    nacionalidade: "Brasil",
    imagem:
      "https://lncimg.lance.com.br/cdn-cgi/image/width=828,quality=75,fit=pad,format=webp/uploads/2018/06/27/5b340c97edaab.png",
    numero: "15",
    posicao: "Volante",
    dataNascimento: "25/07/1988",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Pedrinho (ex-Corinthians, Atlético-MG, Benfica)
  {
    nome: "Pedrinho",
    background: "#",
    descricao:
      "Habilidoso meia-atacante brasileiro, conhecido por sua velocidade e dribles. Atuou por Corinthians, Atlético-MG e Benfica, destacando-se por sua habilidade e gols.",
    pagina: "https://www.instagram.com/pedrovictor38_/",
    nacionalidade: "Brasil",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/e5/2019/08/17/pedrinho-jogador-do-corinthians-enfrenta-o-botafogo-na-arena-1566077435320_v2_3x4.jpg",
    numero: "38",
    posicao: "Meia-atacante",
    dataNascimento: "13/09/1997",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Pedro Guilherme
  {
    nome: "Pedro",
    background: "#",
    descricao:
      "Atacante brasileiro conhecido por sua força física e finalização precisa. Fundamental nos títulos recentes do Flamengo, jogador decisivo.",
    pagina: "https://www.instagram.com/pedroguilherme/",
    nacionalidade: "Brasil",
    imagem:
      "https://s2-ge.glbimg.com/rMCO5KgxVRD89sEZmqrRbL11SAU=/0x0:4277x3056/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/r/G/jNEx1CQomqICu6sXlPhg/81-2-.jpg",
    numero: "9",
    posicao: "Atacante",
    dataNascimento: "20/06/1997",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Pelé
  {
    nome: "Pelé",
    background: "gold", // Mantém o fundo dourado para destacar o status de lenda
    descricao:
      "Considerado por muitos o maior jogador de futebol de todos os tempos, Pelé era conhecido por sua habilidade técnica, dribles desconcertantes e incrível capacidade de marcar gols. Ele conquistou três Copas do Mundo com a Seleção Brasileira e revolucionou o futebol mundial.",
    pagina: "https://pt.wikipedia.org/wiki/Pelé",
    numero: "10", // Número icônico de Pelé
    posicao: "Atacante",
    dataNascimento: "23/10/1940",
    dataFalecimento: "29/12/2022",
    status: "Aposentado",
    nacionalidade: "Brasil",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/5/5e/Pele_con_brasil_%28cropped%29.jpg",
    clubes: [
      createClub(
        "Santos",
        { inicio: "1956", fim: "1974" },
        { jogos: 1116, gols: 1091, assistencias: 0 }
      ),
      createClub(
        "New York Cosmos",
        { inicio: "1975", fim: "1977" },
        { jogos: 111, gols: 65, assistencias: 0 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "1957", fim: "1971" },
      estatisticas: { jogos: 92, gols: 77, assistencias: 0 },
    },
    titulos: [
      // Santos
      {
        nome: "Campeonato Brasileiro",
        anos: "1961, 1962, 1963, 1964, 1965, 1968",
        clube: "Santos",
      },
      {
        nome: "Recopa dos Campeões Intercontinentais",
        anos: "1968",
        clube: "Santos",
      },
      {
        nome: "Copa Libertadores",
        anos: "1962, 1963",
        clube: "Santos",
      },
      {
        nome: "Copa Intercontinental",
        anos: "1962, 1963",
        clube: "Santos",
      },
      {
        nome: "Campeonato Paulista",
        anos: "1958, 1960, 1961, 1962, 1964, 1965, 1967, 1968, 1969, 1973",
        clube: "Santos",
      },
      {
        nome: "Torneio Rio–São Paulo",
        anos: "1959, 1963, 1964",
        clube: "Santos",
      },

      //New York Cosmos
      {
        nome: "North American Soccer League",
        anos: "1977",
        clube: "New York Cosmos",
      },

      //Seleção Brasileira
      {
        nome: "Copa do Mundo",
        anos: "1958",
        clube: "Brasil",
        logoVariavel: true,
      },
      {
        nome: "Copa do Mundo",
        anos: "1962",
        clube: "Brasil",
        logoVariavel: true,
      },
      {
        nome: "Copa do Mundo",
        anos: "1970",
        clube: "Brasil",
        logoVariavel: true,
      },
      {
        nome: "Taça do Atlântico",
        anos: "1960",
        clube: "Brasil",
      },
      {
        nome: "Copa Roca",
        anos: "1957, 1963",
        clube: "Brasil",
      },
      {
        nome: "Taça Oswaldo Cruz",
        anos: "1958, 1962, 1968",
        clube: "Brasil",
      },
      {
        nome: "Taça Bernardo O'Higgins",
        anos: "1959",
        clube: "Brasil",
      },

      //Individuais
      {
        nome: "Número 10 aposentado pelo New York Cosmos",
        anos: "#",
        categoria: "individual",
      },
      {
        nome: "Bola de Ouro Dream Team",
        anos: "2020",
        categoria: "individual",
        logo: "IFFHS",
      },
      {
        nome: "FIFA 100",
        anos: "2004",
        categoria: "individual",
      },
      {
        nome: "Melhor Jogador do Século",
        anos: "2000",
        categoria: "individual",
        logo: "FIFA",
      },
      {
        nome: "ALL TIME WORLD MEN'S DREAM TEAM",
        anos: "2000",
        categoria: "individual",
        logo: "IFFHS",
      },
      {
        nome: "Ordem de Mérito da FIFA",
        anos: "1984",
        categoria: "individual",
        logo: "FIFA",
      },
      {
        nome: "Bola de Prata",
        anos: "1970",
        categoria: "individual",
      },
      {
        nome: "Bola de Ouro",
        anos: "1958, 1959, 1960, 1961, 1963, 1964, 1970",
        categoria: "individual",
      },
    ],
    tags: [],
  },

  // Philippe Coutinho
  {
    nome: "Philippe Coutinho",
    background: "#",
    descricao:
      "Meia-atacante talentoso e habilidoso, Coutinho é conhecido por seus dribles, chutes de longa distância e visão de jogo. Atualmente, joga no Vasco da Gama.",
    pagina: "https://www.instagram.com/phil.coutinho/",
    nacionalidade: "Brasil",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/6e/2024/07/21/philippe-coutinho-jogador-do-vasco-durante-partida-contra-o-atletico-mg-na-arena-mrv-1721595034327_v2_3x4.jpg",
    numero: "11",
    posicao: "Meia-atacante",
    dataNascimento: "12/06/1992",
    status: "Ativo",
    clubes: [
      createClub(
        "Vasco da Gama",
        { inicio: "2009", fim: "2010" },
        { jogos: 43, gols: 5, assistencias: 0 }
      ),
      createClub(
        "Internazionale",
        { inicio: "2010", fim: "2013" },
        { jogos: 47, gols: 5, assistencias: 3 }
      ),
      createClub(
        "Espanyol",
        { inicio: "2012", fim: "2012" },
        { jogos: 16, gols: 5, assistencias: 1 }
      ),
      createClub(
        "Liverpool",
        { inicio: "2013", fim: "2018" },
        { jogos: 201, gols: 54, assistencias: 45 }
      ),
      createClub(
        "Barcelona",
        { inicio: "2018", fim: "2020" },
        { jogos: 76, gols: 21, assistencias: 11 }
      ),
      createClub(
        "Bayern de Munique",
        { inicio: "2019", fim: "2020" },
        { jogos: 38, gols: 11, assistencias: 9 }
      ),
      createClub(
        "Barcelona",
        { inicio: "2020", fim: "2022" },
        { jogos: 16, gols: 3, assistencias: 2 }
      ),
      createClub(
        "Aston Villa",
        { inicio: "2022", fim: "2022" },
        { jogos: 19, gols: 5, assistencias: 3 }
      ),
      createClub(
        "Aston Villa",
        { inicio: "2022", fim: "2023" },
        { jogos: 27, gols: 1, assistencias: 1 }
      ),
      createClub(
        "Al-Duhail",
        { inicio: "2023", fim: "2024" },
        { jogos: 22, gols: 6, assistencias: 3 }
      ),
      createClub(
        "Vasco da Gama",
        { inicio: "2024", fim: "Atual" },
        { jogos: 39, gols: 8, assistencias: 0 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2010", fim: null },
      estatisticas: { jogos: 69, gols: 21, assistencias: 13 },
    },
    titulos: [
      // Vasco da Gama
      {
        nome: "Campeonato Brasileiro Série B",
        anos: "2009",
        clube: "Vasco da Gama",
      },
      // Internazionale
      { nome: "Supercopa da Itália", anos: "2010", clube: "Internazionale" },
      { nome: "Copa da Itália", anos: "2011", clube: "Internazionale" },
      //Barcelona
      {
        nome: "La Liga",
        anos: "2018, 2019",
        clube: "Barcelona",
      },
      {
        nome: "Copa del Rey",
        anos: "2018",
        clube: "Barcelona",
      },
      {
        nome: "Supercopa da Espanha",
        anos: "2018",
        clube: "Barcelona",
      },
      // Bayern de Munique
      {
        nome: "UEFA Champions League",
        anos: "2020",
        clube: "Bayern de Munique",
      },
      { nome: "Bundesliga", anos: "2020", clube: "Bayern de Munique" },
      { nome: "Copa da Alemanha", anos: "2020", clube: "Bayern de Munique" },
      // Seleção Brasileira
      {
        nome: "Copa América",
        anos: "2019",
        clube: "Brasil",
        logoVariavel: true,
      },
      // Títulos Individuais
      {
        nome: "Gol do mês da Bundesliga",
        logo: "Bundesliga",
        anos: "dezembro de 2019",
        clube: "Bayern de Munique",
        categoria: "individual",
      },
      {
        nome: "Seleção da Copa do Mundo FIFA",
        logo: "Copa do Mundo",
        logoVariavel: true,
        anos: "2018",
        clube: "Brasil",
        categoria: "individual",
      },
      {
        nome: "Samba de Ouro",
        anos: "2016",
        clube: "Liverpool",
        categoria: "individual",
      },
      {
        nome: "Seleção da Liga Europa da UEFA",
        logo: "UEFA Europa League",
        anos: "2016",
        clube: "Liverpool",
        categoria: "individual",
      },
      {
        nome: "Melhor Jogador da Temporada",
        logo: "Northwest Football Awards",
        anos: "2016",
        clube: "Liverpool",
        categoria: "individual",
      },
      {
        nome: "Gol da Temporada do Liverpool",
        logo: "Liverpool",
        anos: "2015, 2016",
        clube: "Liverpool",
        categoria: "individual",
      },
      {
        nome: "Melhor Jogador do Liverpool",
        logo: "Liverpool",
        anos: "2015, 2016",
        clube: "Liverpool",
        categoria: "individual",
      },
      {
        nome: "Jogador do Mês da Premier League",
        logo: "Premier League",
        anos: "Janeiro 2016",
        clube: "Liverpool",
        categoria: "individual",
      },
      {
        nome: "Time do Ano da PFA",
        logo: "Professional Footballers Association",
        anos: "2015",
        clube: "Liverpool",
        categoria: "individual",
      },
      {
        nome: "Seleção do Campeonato Carioca",
        logo: "Campeonato Carioca",
        anos: "2010",
        clube: "Vasco da Gama",
        categoria: "individual",
      },
    ],
    tags: [],
  },

  // Rafinha
  {
    nome: "Rafinha",
    background: "#",
    descricao:
      "Rafinha, é um futebolista brasileiro que atua como lateral-direito. Atualmente joga no São Paulo, onde é capitão. Em 2019, entrou para a seleta lista de futebolistas campeões da Copa Libertadores da América e da Liga dos Campeões da UEFA.",
    pagina: "https://www.instagram.com/rafinha/",
    nacionalidade: "Brasil",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/00/2022/07/20/rafinha-e-o-capitao-do-sao-paulo-contra-o-inter-pelo-brasileirao-1658364465364_v2_450x600.jpg",
    numero: "13",
    posicao: "Zagueiro",
    dataNascimento: "18/09/1985",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Raphael Veiga
  {
    nome: "Raphael Veiga",
    background: "#",
    descricao:
      "Meia talentoso e artilheiro, Raphael Veiga é conhecido por seus chutes poderosos e visão de jogo. Atualmente, é um dos principais jogadores do Palmeiras.",
    pagina: "https://www.instagram.com/raphael_veiga/",
    nacionalidade: "Brasil",
    imagem: "https://pbs.twimg.com/media/F5JCyvuWQAASJlw.jpg:large",
    numero: "23",
    posicao: "Meia",
    dataNascimento: "19/06/1995",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  //Reinier
  {
    nome: "Reinier",
    background: "#",
    descricao:
      "Meia-atacante com grande potencial técnico e driblador habilidoso. Conhecido por sua visão de jogo e capacidade de finalizar.",
    pagina: "https://www.instagram.com/reinierjesus/",
    nacionalidade: "Brasil",
    imagem:
      "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2024/06/20/17188607039601.jpg",
    numero: "19",
    posicao: "Meia-atacante",
    dataNascimento: "19/01/2002",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  //Renato Augusto
  {
    nome: "Renato Augusto",
    background: "#",
    descricao:
      "Meia elegante e técnico, Renato Augusto é conhecido por sua visão de jogo e passes precisos. Atualmente, é um dos líderes do Corinthians.",
    pagina: "https://www.instagram.com/renatoaugusto/",
    nacionalidade: "Brasil",
    imagem:
      "https://odia.ig.com.br/_midias/jpg/2024/03/01/1200x1920/1_renato_augusto-32166853.jpg?65e23a17bdf23",
    numero: "8",
    posicao: "Meia",
    dataNascimento: "08/02/1988",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Renê
  {
    nome: "Renê",
    background: "#",
    descricao:
      "Lateral-esquerdo brasileiro conhecido por sua habilidade nos lançamentos e pela sua força física. Atualmente joga pelo Internacional.",
    pagina: "https://www.instagram.com/reneoficial/",
    time: "Internacional",
    nacionalidade: "Brasil",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/5e/2022/06/10/rene-lateral-esquerdo-do-inter-resolve-problema-antigo-no-clube-1654898694132_v2_3x4.jpg",
    numero: "6",
    posicao: "Lateral-esquerdo",
    dataNascimento: "16/02/1992",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Richarlison
  {
    nome: "Richarlison",
    background: "#",
    descricao:
      "Artilheiro da Seleção Brasileira em diversas campanhas, conhecido por sua força física e finalização precisa. Marcado pelo seu gol contra a Croácia na Copa de 2022.",
    pagina: "https://www.instagram.com/richarlison/",
    nacionalidade: "Brasil",
    imagem:
      "https://s2-ge.glbimg.com/r1crSs6Eo5TfEmBeNX5zlrPiI9c=/0x0:1023x1280/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/X/A/GA28b4TdCWT7puCrVDyg/whatsapp-image-2022-11-24-at-21.21.50.jpeg",
    numero: "9",
    posicao: "Atacante",
    dataNascimento: "10/5/1997",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  //Rivaldo
  {
    nome: "Rivaldo",
    background: "plate",
    descricao:
      "Considerado um dos maiores jogadores brasileiros de sua geração, Rivaldo era conhecido por sua habilidade técnica, chutes precisos e visão de jogo. Eleito o melhor jogador do mundo em 1999, conquistou diversos títulos importantes na carreira.",
    pagina: "https://www.instagram.com/rivaldooficial/",
    nacionalidade: "Brasil",
    imagem:
      "https://i.pinimg.com/736x/ba/b9/8e/bab98e203e6860c6e92a29db981f8919.jpg",
    numero: "10",
    posicao: "Meia-atacante",
    dataNascimento: "19/04/1972",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Rivellino
  {
    nome: "Rivellino",
    background: "gold",
    descricao:
      "Considerado um dos maiores meias da história do futebol, Rivellino era conhecido por sua habilidade com a bola, chutes precisos e a famosa 'folha seca'. Foi um dos principais jogadores da seleção brasileira campeã da Copa do Mundo de 1970.",
    pagina:
      "https://www.instagram.com/rivellinooficial/  // (Criar caso não exista uma página oficial)",
    nacionalidade: "Brasil",
    imagem:
      "https://cultura.uol.com.br/upload/tvcultura/esporte/20240701161939_f9mt18hxoaaxz0n-1-1-.jpg",
    numero: "10",
    posicao: "Meia",
    dataNascimento: "01/01/1946",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Roberto Carlos
  {
    nome: "Roberto Carlos",
    background: "gold",
    descricao:
      "Lateral-esquerdo brasileiro conhecido por seus chutes potentes e precisos, especialmente as faltas. Foi um dos principais jogadores da seleção brasileira campeã mundial em 2002.",
    pagina: "https://www.instagram.com/robertocarlosoficial/",
    nacionalidade: "Brasil",
    imagem:
      "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/M4G6JQ2SMFM7VK2V6Z5RRR3RYI.jpg",
    posicao: "Lateral-esquerdo",
    numero: "6",
    dataNascimento: "10/04/1973",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Roberto Firmino
  {
    nome: "Roberto Firmino",
    background: "#",
    descricao:
      "Atacante brasileiro conhecido por sua inteligência tática, movimentação constante, habilidade de finalização e por popularizar a função de 'falso 9'. Peça fundamental no vitorioso time do Liverpool e presença constante na seleção brasileira.",
    imagem:
      "https://lncimg.lance.com.br/uploads/2024/08/Roberto-Firmino-Al-Ahli-aspect-ratio-512-320.jpeg",
    pagina: "https://www.instagram.com/roberto_firmino9/",
    numero: "9",
    posicao: "Atacante",
    dataNascimento: "02/10/1991",
    status: "Ativo",
    nacionalidade: "Brasil",
    clubes: [
      createClub(
        "Figueirense",
        { inicio: "2009", fim: "2010" },
        { jogos: 57, gols: 12, assistencias: 0 }
      ),
      createClub(
        "TSG Hoffenheim",
        { inicio: "2011", fim: "2015" },
        { jogos: 153, gols: 49, assistencias: 36 }
      ),
      createClub(
        "Liverpool",
        { inicio: "2015", fim: "2023" },
        { jogos: 362, gols: 111, assistencias: 79 }
      ),
      createClub(
        "Al-Ahli",
        { inicio: "2023", fim: "Presente" },
        { jogos: 33, gols: 9, assistencias: 7 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2014", fim: "Presente" },
      estatisticas: { jogos: 55, gols: 17, assistencias: 7 },
    },
    titulos: [
      // Liverpool
      {
        nome: "UEFA Champions League",
        anos: "2019",
        clube: "Liverpool",
      },
      {
        nome: "Supercopa da UEFA",
        anos: "2019",
        clube: "Liverpool",
      },
      {
        nome: "Mundial de Clubes",
        anos: "2019",
        clube: "Liverpool",
      },
      {
        nome: "Premier League",
        anos: "2020",
        clube: "Liverpool",
      },
      {
        nome: "EFL Cup",
        anos: "2022",
        clube: "Liverpool",
      },
      {
        nome: "FA Cup",
        anos: "2022",
        clube: "Liverpool",
      },
      {
        nome: "Supercopa da Inglaterra",
        anos: "2022",
        clube: "Liverpool",
      },
      // Seleção Brasileira
      {
        nome: "Copa América",
        anos: "2019",
        clube: "Brasil",
        logoVariavel: true,
      },
      // Al-Ahli (se houver títulos até o momento da consulta ou no futuro)
      // {
      //   nome: "Nome do Título",
      //   anos: "Ano",
      //   clube: "Al-Ahli",
      // },
    ],
    tags: [],
  },

  // Robinho
  {
    nome: "Robinho",
    background: "#",
    descricao:
      "Um dos maiores dribladores do futebol brasileiro, Robinho era conhecido por sua velocidade, habilidade com a bola e finalizações precisas. Ele encantou torcidas por onde passou, principalmente no Santos.",
    pagina: "https://www.instagram.com/robinhooficial/",
    nacionalidade: "Brasil",
    imagem: "https://static.poder360.com.br/2023/05/robinho-848x477.jpeg",
    numero: "20",
    posicao: "Atacante",
    dataNascimento: "25/01/1984",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Rodinei
  {
    nome: "Rodinei",
    background: "#",
    descricao:
      "Lateral-direito brasileiro conhecido por sua força física, velocidade e cruzamentos precisos. Atualmente joga no Olympiacos F.C.",
    pagina: "https://www.instagram.com/rodineioficial/",
    nacionalidade: "Brasil",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/57/2021/06/02/lateral-direito-rodinei-se-reapresentou-ao-flamengo-apos-defender-o-internacional-por-emprestimo-1622672201174_v2_3x4.jpg",
    numero: "23",
    posicao: "Zagueiro",
    dataNascimento: "13/03/1992",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Rodrigo Caio
  {
    nome: "Rodrigo Caio",
    background: "#",
    descricao:
      "Zagueiro brasileiro conhecido por sua boa técnica e liderança dentro de campo. Atuou por grandes clubes como São Paulo e Flamengo.",
    pagina: "https://www.instagram.com/rodrigocaio/",
    nacionalidade: "Brasil",
    imagem:
      "https://tntsports.com.br/__export/1662748924441/sites/esporteinterativo/img/2022/09/09/gettyimages-1407905644.jpg",
    numero: "30",
    posicao: "Zagueiro",
    dataNascimento: "22/08/1993",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Rodrigo Muniz
  {
    nome: "Rodrigo Muniz",
    background: "#",
    descricao:
      "Atacante promissor, Rodrigo Muniz é conhecido por sua força física e habilidade para marcar gols. Atualmente, ele defende o Fulham, na Inglaterra.",
    pagina: "https://www.instagram.com/rodrigomuniz/",
    nacionalidade: "Brasil",
    imagem:
      "https://tntsports.com.br/__export/1712251727586/sites/esporteinterativo/img/2024/04/04/muniz_fulham.jpg",
    numero: "9",
    posicao: "Atacante",
    dataNascimento: "04/05/2001",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Romário
  {
    nome: "Romário",
    background: "gold",
    descricao:
      "É um dos maiores artilheiros do história do futebol, e o quarto maior artilheiro da Seleção Brasileira segundo a FIFA, com 55 gols marcados contando apenas jogos oficiais, ficando em segundo lugar na posição até outubro de 2004[3] quando foi ultrapassado por Ronaldo, após a sua aposentadoria da Seleção.",
    pagina: "https://www.instagram.com/romario/",
    nacionalidade: "Brasil",
    imagem:
      "https://i.pinimg.com/736x/0d/dc/02/0ddc026d4756d61834d8dd45d2fae54d.jpg",
    numero: "11",
    posicao: "Atacante",
    dataNascimento: "	29/01/1966",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Ronaldinho Gaúcho
  {
    nome: "Ronaldinho Gaúcho",
    background: "gold",
    descricao:
      "Considerado um dos maiores jogadores de futebol de todos os tempos, Ronaldinho Gaúcho é conhecido por sua habilidade, dribles e visão de jogo excepcionais. Seu estilo de jogo alegre e criativo o tornou um ídolo mundial.",
    pagina: "https://www.instagram.com/ronaldinho/",
    nacionalidade: "Brasil",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/77/2021/06/02/ronaldinho-gaucho-em-atuacao-pelo-barcelona-1622663451254_v2_3x4.jpg",
    numero: "10",
    posicao: "Meia-atacante",
    dataNascimento: "21/03/1980",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Ronaldo Nazário
  {
    nome: "Ronaldo Nazário",
    background: "gold",
    descricao:
      "Considerado um dos maiores atacantes de todos os tempos, Ronaldo Fenômeno era conhecido por sua velocidade, finalização e habilidade técnica. Atuou por grandes clubes como Inter de Milão, Real Madrid e Barcelona, conquistando diversos títulos e artilharias.",
    pagina: "https://www.instagram.com/ronaldofeno/",
    nacionalidade: "Brasil",
    imagem:
      "https://terceirotempo.uol.com.br/imagens/57/70/w500_h140_qfl_fto_15770.webp",
    numero: "9",
    posicao: "Atacante",
    dataNascimento: "18/09/1976",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Sócrates
  {
    nome: "Sócrates",
    background: "plate",
    descricao:
      "Considerado um dos maiores jogadores brasileiros de todos os tempos, Sócrates era conhecido por seu talento com a bola, visão de jogo e liderança. Além de sua carreira brilhante nos gramados, ele era médico e um grande ativista político.",
    pagina: "https://pt.wikipedia.org/wiki/S%C3%B3crates_(futebolista)",
    nacionalidade: "Brasil",
    imagem:
      "https://s2-ge.glbimg.com/ljdhSITgqpxxLYlb1bf9DeGmUjE=/0x0:683x1024/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/v/D/bLQYAbSEmBHlSlkCXvtg/gettyimages-650937640.jpg",
    numero: "8",
    posicao: "Meia",
    dataNascimento: "19/02/1954",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Taffarel
  {
    nome: "Taffarel",
    background: "plate",
    descricao:
      "Lenda do futebol brasileiro, conhecido por suas defesas espetaculares e por ter sido fundamental na conquista da Copa do Mundo de 1994.",
    pagina: "https://www.instagram.com/taffarel/",
    nacionalidade: "Brasil",
    imagem: "https://www.rbsdirect.com.br/imagesrc/15826575.jpg?w=700",
    numero: "1",
    posicao: "Goleiro",
    dataNascimento: "08/05/1966",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Thiago Silva
  {
    nome: "Thiago Silva",
    background: "plate",
    descricao:
      "Zagueiro experiente e líder nato, conhecido por sua habilidade no jogo aéreo, passes precisos e liderança dentro de campo. Um dos melhores defensores da sua geração.",
    pagina: "https://www.instagram.com/thiagosilva/",
    nacionalidade: "Brasil",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/26/2022/12/05/thiago-silva-durante-a-partida-do-brasil-contra-a-coreia-do-sul-1670294743840_v2_450x450.jpg",
    numero: "3",
    posicao: "Zagueiro",
    dataNascimento: "22/09/1984",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Vitinho
  {
    nome: "Vitinho",
    background: "#",
    descricao:
      "Atacante brasileiro conhecido por sua habilidade nos dribles e velocidade. Teve passagens marcantes por clubes como Flamengo e Internacional.",
    pagina: "https://www.instagram.com/vitinhooficial/",
    nacionalidade: "Brasil",
    imagem:
      "https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2022/10/11/1602259754-6345ec8f2ce7d.jpeg",
    numero: "14",
    posicao: "Atacante",
    dataNascimento: "02/10/1993",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Vinícius Júnior
  {
    nome: "Vinícius Júnior",
    background: "plate",
    descricao:
      "Um dos maiores talentos do futebol brasileiro da atualidade, Vinícius Júnior se destacou no Flamengo antes de ser contratado pelo Real Madrid. Conhecido por sua velocidade, dribles e finalizações, ele é uma peça fundamental na equipe merengue.",
    pagina: "https://www.instagram.com/vinijr/",
    numero: "20",
    posicao: "Atacante",
    dataNascimento: "12/07/2000",
    status: "Ativo",
    nacionalidade: "Brasil",
    imagem:
      "https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2024/03/07/29438833-vinicius-junior-real-madrid-cf-v-rb-leipzig-round-of-16-second-leg-uefa-champions-league-2023-24-2048x1365.jpg",
    clubes: [
      createClub(
        "Flamengo",
        { inicio: "2017", fim: "2018" },
        { jogos: 69, gols: 14, assistencias: 5 }
      ),
      createClub(
        "Real Madrid",
        { inicio: "2018", fim: "atual" },
        { jogos: 281, gols: 101, assistencias: 65 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2018", fim: "atual" },
      estatisticas: { jogos: 32, gols: 5, assistencias: 3 },
    },
    titulos: [
      // Real Madrid
      {
        nome: "Copa Intercontinental da FIFA",
        anos: "2024",
        clube: "Real Madrid",
      },
      {
        nome: "UEFA Champions League",
        anos: "2022, 2024",
        clube: "Real Madrid",
      },
      { nome: "Supercopa da UEFA", anos: "2022, 2024", clube: "Real Madrid" },
      { nome: "La Liga", anos: "2020, 2022, 2024", clube: "Real Madrid" },
      { nome: "Copa Del Rey", anos: "2023", clube: "Real Madrid" },
      {
        nome: "Supercopa da Espanha",
        anos: "2020, 2022, 2024",
        clube: "Real Madrid",
      },
      { nome: "Mundial de Clubes", anos: "2018, 2022", clube: "Real Madrid" },

      // Flamengo
      { nome: "Campeonato Brasileiro", anos: "2019", clube: "Flamengo" },
      { nome: "Copa Libertadores", anos: "2019", clube: "Flamengo" },

      //Individual
      {
        nome: "The Best FIFA",
        anos: "2024",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Globe Soccer Awards",
        anos: "2024",
        clube: "Individual",
        categoria: "individual",
      },
    ],
    tags: [],
  },

  //Wesley
  {
    nome: "Wesley",
    background: "#",
    descricao:
      "Meio-campista brasileiro conhecido por sua versatilidade e habilidade nos passes. Destaca-se por sua rápida adaptação ao time titular do Flamengo.",
    pagina: "https://www.instagram.com/wesleyfranca03_/?hl=pt",
    nacionalidade: "Brasil",
    imagem:
      "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2025/01/wesley_flamengo-e1735914081692.jpg",
    numero: "43",
    posicao: "Meio-campista",
    dataNascimento: "06/09/2003",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // William Arão
  {
    nome: "William Arão",
    background: "#",
    descricao:
      "Volante conhecido por sua força física, marcação e boa distribuição de bola. Arão é um dos líderes do time e fundamental para o equilíbrio da equipe.",
    pagina: "https://www.instagram.com/w_arao/",
    nacionalidade: "Brasil",
    imagem:
      "https://s2-ge.glbimg.com/F6cxRN9PbhdZLboPLoHzS2Kgnqc=/0x0:1080x1083/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/9/m/iJWnfGRsy3aBZ0T1Ao8A/arao2.jfif",
    numero: "55",
    posicao: "Meia",
    dataNascimento: "12/04/1992",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Willian
  {
    nome: "Willian Borges",
    background: "#",
    descricao:
      "Meia-atacante habilidoso e veloz, Willian é conhecido por seus dribles e passes precisos. Ele já defendeu grandes clubes como Chelsea e Arsenal.",
    pagina: "https://www.instagram.com/willianborges88/",
    nacionalidade: "Brasil",
    imagem:
      "https://www.olympiacos.org/wp-content/uploads/2024/09/02/STEF1798.jpg",
    numero: "18",
    posicao: "Meia-atacante",
    dataNascimento: "09/08/1988",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  //Yuri Alberto
  {
    nome: "Yuri Alberto",
    background: "#",
    descricao:
      "Atacante promissor, Yuri Alberto é conhecido por sua finalização precisa e habilidade de se movimentar dentro da área. Atualmente, é um dos destaques do Corinthians.",
    pagina: "https://www.instagram.com/yurialberto/",
    nacionalidade: "Brasil",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Sulamericana_CUP_2023_Semifinal_-_Corinthians_x_Fortaleza-CE_%2853553783422%29_%28cropped%29.jpg/250px-Sulamericana_CUP_2023_Semifinal_-_Corinthians_x_Fortaleza-CE_%2853553783422%29_%28cropped%29.jpg",
    numero: "9",
    posicao: "Atacante",
    dataNascimento: "10/01/2000",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Zico
  {
    nome: "Zico",
    background: "gold",
    descricao:
      "Considerado um dos maiores jogadores brasileiros de todos os tempos, Zico era conhecido por sua habilidade técnica, visão de jogo e chutes precisos. Ídolo do Flamengo, ele encantou o mundo com seu futebol artístico.",
    pagina: "https://www.instagram.com/zico/",
    nacionalidade: "Brasil",
    imagem:
      "https://i.pinimg.com/736x/8c/36/0a/8c360a9982ae6c6b687112e11ac4e139.jpg",
    numero: "10",
    posicao: "Meia",
    dataNascimento: "03/03/1953",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // BULGÁRIA ---------------------------------------------------------------------------------------------------

  // Hristo Stoichkov
  {
    nome: "Hristo Stoichkov",
    background: "gold",
    descricao:
      "Atacante búlgaro conhecido por sua habilidade, dribles e chutes poderosos. Stoichkov foi um dos maiores jogadores da história do Barcelona e um dos principais responsáveis por levar a Bulgária à semifinal da Copa do Mundo de 1994.",
    pagina: "https://www.instagram.com/hristo_stoichkov_official/",
    nacionalidade: "Bulgária",
    imagem:
      "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/854_stoitxkov.jpg",
    numero: "8",
    posicao: "Atacante",
    dataNascimento: "08/02/1966",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // CAMARÕES ---------------------------------------------------------------------------------------------------

  //Choupo-Moting
  {
    nome: "Choupo-Moting",
    background: "#",
    descricao:
      "Atacante camaronês conhecido por sua força física e habilidade aérea. Apesar de não ser um titular absoluto, Choupo-Moting já provou seu valor em grandes jogos, como nas finais da Liga dos Campeões com o Bayern de Munique.",
    pagina: "https://www.instagram.com/choupomoting/",
    nacionalidade: "Camarões",
    imagem:
      "https://www.shutterstock.com/editorial/image-editorial/MeTdM433N4j2E1z6NTAwODA=/eric-maxim-choupo-moting-cameroon-during-fifa-world-440nw-13641138am.jpg",
    numero: "13",
    posicao: "Atacante",
    dataNascimento: "23/03/1989",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Samuel Eto'o
  {
    nome: "Samuel Eto'o",
    background: "plate",
    descricao:
      "Atacante camaronês conhecido por sua velocidade, finalização e habilidade. Eto'o conquistou diversos títulos por clubes como Barcelona, Inter de Milão e Chelsea.",
    pagina: "https://pt.wikipedia.org/wiki/Samuel_Eto%C3%B3",
    nacionalidade: "Camarões",
    imagem:
      "https://lncimg.lance.com.br/cdn-cgi/image/width=828,quality=75,fit=pad,format=webp/uploads/2017/05/04/590b404b6fea1.jpeg",
    numero: "9",
    posicao: "Atacante",
    dataNascimento: "10/03/1981",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // CANADÁ -----------------------------------------------------------------------------------------------------

  // Alphonso Davies
  {
    nome: "Alphonso Davies",
    background: "#",
    descricao:
      "Lateral-esquerdo canadense conhecido por sua velocidade e habilidade nos dribles, Davies se destaca no Bayern de Munique.",
    pagina: "https://www.instagram.com/alphonsodavies/",
    nacionalidade: "Canadá",
    imagem:
      "https://tntsports.com.br/__export/1694365196315/sites/esporteinterativo/img/2023/09/10/gettyimages-1643058731_1.jpg_742406227.jpg",
    numero: "19",
    posicao: "Lateral-esquerdo",
    dataNascimento: "02/11/2000",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // CHILE ------------------------------------------------------------------------------------------------------

  // Alexis Sánchez
  {
    nome: "Alexis Sánchez",
    background: "#",
    descricao:
      "Um dos maiores atacantes da história do futebol chileno! Conhecido por sua velocidade, dribles e habilidade de finalizar, Sánchez já vestiu as camisas de grandes clubes europeus como Barcelona, Arsenal e Manchester United. Sua experiência e talento o tornam um jogador completo e inspirador.",
    pagina: "https://www.instagram.com/alexis_official/",
    nacionalidade: "Chile",
    imagem:
      "https://media.gettyimages.com/id/107931998/pt/foto/udine-italy-alexis-sanchez-of-udinese-calcio-in-action-during-the-serie-a-match-between-udinese.jpg?s=612x612&w=gi&k=20&c=PB1jyaAOfPgtmHL48vHQoIsTNgQ11mbpkXzSBIFOdWs=",
    numero: "7",
    posicao: "Atacante",
    dataNascimento: "19/12/1988",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Arturo Vidal
  {
    nome: "Arturo Vidal",
    background: "#",
    descricao:
      "Volante chileno conhecido por sua energia, combatividade e habilidade nos chutes de longa distância. Foi um dos principais jogadores da Juventus, Bayern de Munique e da seleção chilena.",
    pagina: "https://www.instagram.com/kingarturo23oficial/",
    nacionalidade: "Chile",
    imagem:
      "https://images2-mega.cdn.mdstrm.com/meganoticias/2024/02/11/arturo-vidal_439046_1_65c8ee105733f.jpg",
    numero: "23",
    posicao: "Volante",
    dataNascimento: "22/05/1987",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Erick Pulgar
  {
    nome: "Erick Pulgar",
    background: "#",
    descricao:
      "Meia-campo chileno conhecido por sua força física e qualidade na marcação. Chegou ao Flamengo em 2022.",
    pagina: "#",
    nacionalidade: "Chile",
    imagem:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1z9JpW.img?w=768&h=474&m=6&x=528&y=88&s=88&d=88",
    numero: "5",
    posicao: "Meia",
    dataNascimento: "15/01/1994",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // COLÔMBIA ---------------------------------------------------------------------------------------------------

  // Radamel Falcao
  {
    nome: "Radamel Falcao",
    background: "plate",
    descricao:
      "Um dos maiores artilheiros colombianos de todos os tempos, conhecido por sua força física e habilidade de marcar gols.",
    pagina: "https://www.instagram.com/falcaogarcia/",
    nacionalidade: "Colômbia",
    imagem:
      "https://media.gettyimages.com/id/1367435292/pt/foto/barranquilla-colombia-radamel-falcao-of-colombia-stands-for-the-national-anthem-prior-to-a.jpg?s=612x612&w=gi&k=20&c=BeVAkl_gEcyxVfS9otsV0B5HEREkUZOdgOy8cVwcAaA=",
    numero: "9",
    posicao: "Centroavante",
    dataNascimento: "10/02/1986",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // James Rodríguez
  {
    nome: "James Rodríguez",
    background: "#",
    descricao:
      "Um dos maiores talentos da sua geração, conhecido por sua visão de jogo e chutes precisos.",
    pagina: "https://www.instagram.com/jamesrodriguez10/",
    nacionalidade: "Colômbia",
    imagem:
      "https://gmconline.com.br/wp-content/uploads/2024/07/libertadoresbr_1721048915_3412728108970842786_8277311211-1-819x1024.jpg",
    numero: "10",
    posicao: "Meia",
    dataNascimento: "12/07/1991",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Carlos Valderrama
  {
    nome: "Carlos Valderrama",
    background: "#",
    descricao:
      "Um ícone do futebol colombiano, conhecido por seu cabelo loiro e seu estilo de jogo elegante.",
    pagina: "//",
    nacionalidade: "Colômbia",
    imagem:
      "https://lendasdofutebol.com/wp-content/uploads/2021/03/carlos-valderrama-em-movimento-3-optimized.jpg",
    numero: "10",
    posicao: "Meia",
    dataNascimento: "02/09/1961",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Faustino Asprilla
  {
    nome: "Faustino Asprilla",
    background: "#",
    descricao:
      "Um atacante rápido e habilidoso, conhecido por seus dribles e gols espetaculares.",
    pagina: "//",
    nacionalidade: "Colômbia",
    imagem:
      "https://i.pinimg.com/474x/07/68/6a/07686addc69ad3efd4f237b5764b93d9.jpg",
    numero: "21",
    posicao: "Atacante",
    dataNascimento: "10/11/1969",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  //COREIA DO SUL -------------------------------------------------------------------------------------------

  //Son Heung-min
  {
    nome: "Son Heung-min",
    background: "plate",
    imagem:
      "https://cdn1-production-images-kly.akamaized.net/Vk_c5aMJUupK8TXYbbUKFt39XHc=/800x1066/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4621407/original/031600900_1698102412-AP23296724254352.jpg",
    descricao:
      "Atacante sul-coreano, capitão do Tottenham Hotspur e da seleção da Coreia do Sul, conhecido por sua velocidade, finalização precisa com ambos os pés e capacidade de jogar em diversas posições no ataque. Son é um ícone asiático no futebol europeu, sendo o maior artilheiro asiático na história da Premier League e um dos jogadores mais influentes de sua geração.",
    numero: "7",
    posicao: "Ponta-esquerda",
    nacionalidade: "Coreia do Sul",
    dataNascimento: "08/07/1992",
    status: "Ativo (Tottenham Hotspur)",
    pagina: "https://www.instagram.com/hm_son7/",

    clubes: [
      createClub(
        "Hamburgo II",
        { inicio: "2009", fim: "2010" },
        { jogos: 6, gols: 1, assistencias: 0 }
      ),
      createClub(
        "Hamburgo",
        { inicio: "2010", fim: "2013" },
        { jogos: 78, gols: 20, assistencias: 3 }
      ),
      createClub(
        "Bayer Leverkusen",
        { inicio: "2013", fim: "2015" },
        { jogos: 87, gols: 29, assistencias: 11 }
      ),
      createClub(
        "Tottenham Hotspur",
        { inicio: "2015", fim: "Presente" },
        { jogos: 408, gols: 162, assistencias: 84 }
      ),
    ],
    selecao: {
      nome: "Coreia do Sul",
      periodo: { inicio: "2010", fim: "Presente" },
      estatisticas: { jogos: 126, gols: 48, assistencias: 20 },
    },
    titulos: [
      // Hamburgo
      {
        nome: "Copa da Paz",
        anos: "2012",
        clube: "Hamburgo",
      },
      // Tottenham Hotspur
      {
        nome: "UEFA Europa League",
        anos: "2025",
        clube: "Tottenham Hotspur",
      },
      {
        nome: "Copa da Liga Inglesa (Vice-campeão)",
        logo: "EFL Cup",
        anos: "2021",
        clube: "Tottenham Hotspur",
      },
      {
        nome: "UEFA Champions League (Vice-campeão)",
        logo: "UEFA Champions League",
        anos: "2019",
        clube: "Tottenham Hotspur",
      },
      {
        nome: "Copa Audi",
        anos: "2019",
        clube: "Tottenham Hotspur",
      },
      {
        nome: "International Champions Cup",
        anos: "2018",
        clube: "Tottenham Hotspur",
      },

      // Seleção Coreana
      {
        nome: "Jogos Asiáticos",
        anos: "2018",
        clube: "Coreia do Sul",
        logoVariavel: true,
      },
      {
        nome: "Copa da Ásia (Vice-campeão)",
        logo: "Copa da Ásia",
        anos: "2015",
        clube: "Coreia do Sul",
        logoVariavel: true,
      },
      // Individuais
      {
        nome: "Jogador Asiático do Ano",
        anos: "2015, 2017, 2019, 2020, 2021",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Prêmio Puskás",
        logo: "FIFA",
        anos: "2020",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Chuteira de Ouro da Premier League",
        anos: "2022",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Equipe do Ano da PFA Premier League",
        logo: "Premier League",
        anos: "2021",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Jogador do Mês da Premier League",
        logo: "Premier League",
        anos: "Setembro 2016, Abril 2017, Outubro 2020, Outubro 2023",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Melhor Jogador do Tottenham Hotspur da Temporada",
        anos: "2018-19, 2019-20, 2021-22",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Melhor Gol da Temporada do Tottenham Hotspur",
        anos: "2018-19, 2019-20, 2021-22",
        clube: "Individual",
        categoria: "individual",
      },
    ],
    tags: [
      "Son",
      "Son Heung-min",
      "Heung-min Son",
      "Tottenham",
      "Coreia do Sul",
      "Atacante",
      "Ponta",
      "Premier League",
      "Chuteira de Ouro",
      "Puskas",
      "Sonny",
      "Capitão",
      "SPURS",
    ],
  },

  //COSTA DO MARFIM---------------------------------------------------------------------------------------------

  // Yaya Touré
  {
    nome: "Yaya Touré",
    background: "plate",
    descricao:
      "Um dos maiores meio-campistas da sua geração, Yaya Touré era conhecido por sua força física, habilidade com a bola e visão de jogo. Ele foi fundamental para os sucessos do Barcelona e do Manchester City.",
    pagina: "https://www.instagram.com/yaya.toure/",
    nacionalidade: "Costa_do_Marfim",
    imagem:
      "https://s2-ge.glbimg.com/DXeJyG6LQgK7dEhF-bwMEF-iAkQ=/0x0:3000x2011/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2017/A/3/OzErNNTPiCAYZif5ozMA/020-450630754.jpg",
    numero: "19",
    posicao: "Meia",
    dataNascimento: "13/05/1983",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // COSTA RICA ------------------------------------------------------------------------------------------------

  // Keylor Navas
  {
    nome: "Keylor Navas",
    background: "plate",
    descricao:
      "Goleiro costarriquenho conhecido por suas defesas espetaculares e reflexos rápidos. Campeão da UEFA Champions League com o Real Madrid, Navas é um dos melhores goleiros da sua geração.",
    pagina: "https://www.instagram.com/keylornavas/",
    nacionalidade: "Costa Rica",
    imagem:
      "https://media.gettyimages.com/id/1402932635/pt/foto/doha-qatar-keylor-navas-of-costa-rica-gives-their-team-instructions-during-the-2022-fifa-world.jpg?s=612x612&w=gi&k=20&c=7JkMKYl5-DPGVXUPrvNgrhcT1TWU6HBbS1309IfMAgk=",
    numero: "1",
    posicao: "Goleiro",
    dataNascimento: "15/12/1986",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // CROÁCIA ---------------------------------------------------------------------------------------------------

  //Ivan Perišić
  {
    nome: "Ivan Perišić",
    background: "#",
    descricao:
      "Jogador croata versátil, conhecido por sua habilidade com a bola, cruzamentos precisos e chutes de longa distância. Atuou em diversos grandes clubes europeus.",
    pagina: "https://www.instagram.com/ivanperisic/",
    nacionalidade: "Croácia",
    imagem:
      "https://www.thesun.co.uk/wp-content/uploads/2023/07/ivan-perisic-tottenham-hotspur-looks-795773625.jpg",
    numero: "14",
    posicao: "Ponta Esquerda",
    dataNascimento: "02/02/1989",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Ivan Rakitica
  {
    nome: "Ivan Rakitic",
    background: "#",
    descricao:
      "Meia croata conhecido por sua visão de jogo, passes precisos e chutes de média distância. Foi peça fundamental nos títulos do Barcelona, incluindo a Liga dos Campeões de 2015.",
    pagina: "https://www.instagram.com/ivanrakitic/",
    nacionalidade: "Croácia",
    imagem:
      "https://i.pinimg.com/736x/b6/26/44/b626446ced2fd5818fb00cf16a566692.jpg",
    numero: "11",
    posicao: "Meia central",
    dataNascimento: "10/03/1988",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  //Joško Gvardiol
  {
    nome: "Joško Gvardiol",
    background: "#",
    descricao:
      "Zagueiro croata conhecido por sua força física, velocidade e habilidade com a bola. É considerado um dos maiores talentos da nova geração do futebol.",
    pagina: "https://www.instagram.com/jgvardool/",
    nacionalidade: "Croácia",
    imagem:
      "https://media.gettyimages.com/id/1468623531/pt/foto/leipzig-germany-josko-gvardiol-of-rb-leipzig-celebrates-after-scoring-the-teams-first-goal.jpg?s=612x612&w=gi&k=20&c=jY93sZmKpMbI2BFozj_ccnIC-4TolSYVtiCsnJt8X9Y=",
    numero: "24",
    posicao: "Zagueiro",
    dataNascimento: "23/01/2002",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  //Kovačić
  {
    nome: "Kovačić",
    background: "#",
    descricao:
      "Meio-campista croata conhecido por sua habilidade técnica, visão de jogo e passes precisos. Destaca-se por sua capacidade de controlar o ritmo da partida e criar oportunidades para seus companheiros.",
    pagina: "https://www.instagram.com/mateokova/",
    nacionalidade: "Croácia",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Chelsea_vs._Arsenal%2C_29_May_2019_18_Kovacic.jpg",
    numero: "8",
    posicao: "Meio-campista",
    dataNascimento: "06/05/1994",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  //Luka Modrić
  {
    nome: "Luka Modrić",
    background: "plate",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/11/2022/12/01/luka-modric-da-croacia-em-acao-contra-a-belgica-na-fase-de-grupos-da-copa-do-qatar-1669910441519_v2_450x600.jpg",
    pagina: "https://www.instagram.com/lukamodric10/",
    descricao:
      "Maestro croata do meio-campo, reverenciado por sua visão de jogo excepcional, passes precisos, controle de bola e incrível longevidade. Modrić é um dos meio-campistas mais condecorados de sua geração, liderando o Real Madrid a múltiplas conquistas da Champions League e a Croácia a campanhas históricas em Copas do Mundo, além de ter conquistado a Bola de Ouro.",
    numero: "10",
    posicao: "Meia",
    nacionalidade: "Croácia",
    dataNascimento: "09/09/1985",
    status: "Ativo (Sem clube)",
    clubes: [
      createClub(
        "Zrinjski Mostar",
        { inicio: "2003", fim: "2004" },
        { jogos: 25, gols: 8, assistencias: 0 }
      ),
      createClub(
        "Inter Zaprešić", // Empréstimo
        { inicio: "2004", fim: "2005" },
        { jogos: 20, gols: 4, assistencias: 0 }
      ),
      createClub(
        "Dinamo Zagreb",
        { inicio: "2005", fim: "2008" },
        { jogos: 128, gols: 32, assistencias: 21 }
      ),
      createClub(
        "Tottenham Hotspur",
        { inicio: "2008", fim: "2012" },
        { jogos: 160, gols: 17, assistencias: 26 }
      ),
      createClub(
        "Real Madrid",
        { inicio: "2012", fim: "2025" },
        { jogos: 534, gols: 39, assistencias: 86 }
      ),
    ],
    selecao: {
      nome: "Croácia",
      periodo: { inicio: "2006", fim: "Presente" },
      estatisticas: { jogos: 178, gols: 25, assistencias: 28 },
    },
    titulos: [
      // Dinamo Zagreb
      {
        nome: "Prva HNL",
        anos: "2006, 2007, 2008",
        clube: "Dinamo Zagreb",
      },
      {
        nome: "Copa da Croácia",
        anos: "2007, 2008",
        clube: "Dinamo Zagreb",
      },
      {
        nome: "Supercopa da Croácia",
        anos: "2006",
        clube: "Dinamo Zagreb",
      },
      // Real Madrid
      {
        nome: "La Liga",
        anos: "2017, 2020, 2022, 2024",
        clube: "Real Madrid",
      },
      {
        nome: "Copa del Rey",
        anos: "2014, 2023",
        clube: "Real Madrid",
      },
      {
        nome: "Supercopa da Espanha",
        anos: "2012, 2017, 2020, 2022, 2024",
        clube: "Real Madrid",
      },
      {
        nome: "UEFA Champions League",
        anos: "2014, 2016, 2017, 2018, 2022, 2024",
        clube: "Real Madrid",
      },
      {
        nome: "Supercopa da UEFA",
        anos: "2014, 2016, 2017, 2022, 2024",
        clube: "Real Madrid",
      },
      {
        nome: "Mundial de Clubes",
        anos: "2014, 2016, 2017, 2018, 2022",
        clube: "Real Madrid",
      },
      // Seleção Croata (Conquistas Notáveis)
      {
        nome: "Copa do Mundo (Vice-campeão)",
        logo: "Copa do Mundo",
        anos: "2018",
        clube: "Croácia",
        logoVariavel: true,
      },
      {
        nome: "Copa do Mundo (Terceiro lugar)",
        logo: "Copa do Mundo",
        anos: "2022",
        clube: "Croácia",
        logoVariavel: true,
      },
      {
        nome: "Liga das Nações da UEFA (Vice-campeão)",
        logo: "UEFA Nations League",
        anos: "2023",
        clube: "Croácia",
      },
      // Individuais
      {
        nome: "Ballon d'Or",
        logo: "Bola de Ouro",
        anos: "2018",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "The Best FIFA Men's Player",
        logo: "FIFA",
        anos: "2018",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "UEFA Men's Player of the Year Award",
        logo: "UEFA",
        anos: "2018",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Prêmio Golden Foot",
        anos: "2019",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Melhor Jogador da Copa do Mundo da FIFA",
        logo: "FIFA",
        anos: "2018",
        clube: "Individual",
        categoria: "individual",
      },
    ],
    tags: [
      "Modrić",
      "Modric",
      "Luka Modric",
      "Luka Modrić",
      "Modrik",
      "Real Madrid",
      "Croácia",
      "Meio-campista",
      "Meia Central",
      "Ballon d'Or",
      "LM10",
      "Croatian Maestro",
      "Tottenham",
    ],
  },

  //Marcelo Brozović
  {
    nome: "Marcelo Brozović",
    background: "#",
    descricao:
      "Um volante croata conhecido por sua força física, excelente passe e habilidade de marcar. É um jogador fundamental para o meio-campo de sua equipe, com uma visão de jogo impressionante.",
    pagina: "https://www.instagram.com/marcelobrozovic/",
    nacionalidade: "Croácia",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/c/c9/Marcelo_Brozovi%C4%87_2021_%28cropped%29.jpg",
    numero: "11",
    posicao: "Volante",
    dataNascimento: "16/11/1992",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // DINAMARCA --------------------------------------------------------------------------------------------------

  // Andreas Christensen
  {
    nome: "Andreas Christensen",
    background: "#",
    descricao:
      "Zagueiro dinamarquês conhecido por sua elegância e precisão nos passes. Destaca-se por sua capacidade de construir o jogo a partir da defesa e por sua liderança em campo.",
    pagina: "https://www.instagram.com/andreashchristensen/",
    nacionalidade: "Dinamarca",
    imagem:
      "https://media.lex.dk/media/164431/standard_compressed_20220908-075539-L-1760x2640ma.jpg",
    numero: "15",
    posicao: "Zagueiro",
    dataNascimento: "10/04/1996",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Christian Eriksen
  {
    nome: "Christian Eriksen",
    background: "plate",
    descricao:
      "Meia dinamarquês conhecido por sua visão de jogo, passes precisos e chutes de longa distância. É um dos principais jogadores da seleção dinamarquesa e já atuou em grandes clubes europeus.",
    pagina: "https://www.instagram.com/christianeriksenofficial/",
    nacionalidade: "Dinamarca",
    imagem:
      "https://conteudo.imguol.com.br/c/entretenimento/0f/2022/11/22/christian-eriksen-em-jogo-contra-a-tunisia-na-copa-do-qatar-1669128331095_v2_450x600.jpg",
    numero: "14",
    posicao: "Meia",
    dataNascimento: "14/02/1992",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Kasper Schmeichel
  {
    nome: "Kasper Schmeichel",
    background: "#",
    descricao:
      "Goleiro dinamarquês conhecido por suas defesas espetaculares e por ser um líder nato. Filho do lendário goleiro Peter Schmeichel, Kasper seguiu os passos do pai e se tornou um dos melhores goleiros da sua geração.",
    pagina: "https://www.instagram.com/kschmeichel1/",
    nacionalidade: "Dinamarca",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk8wCJWWbwU8AjtTWhArzxOm7_XNWVmeoo7w&s",
    numero: "1",
    posicao: "Goleiro",
    dataNascimento: "05/11/1986",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Pierre-Emile Højbjerg
  {
    nome: "Pierre Højbjerg",
    background: "#",
    descricao:
      "Meio-campista dinamarquês conhecido por sua força física, desarmes e passes precisos. Destaca-se por sua capacidade de recuperar a bola e distribuir o jogo, sendo um jogador fundamental na organização do meio-campo.",
    pagina: "https://www.instagram.com/hojbjerg/",
    nacionalidade: "Dinamarca",
    imagem:
      "https://cdn-s-www.ledauphine.com/images/E9E99855-90E3-4E8F-AC24-23392B11A674/NW_raw/pierre-emile-hojbjerg-photo-maxppp-nigel-french-1723487883.jpg",
    numero: "23",
    posicao: "Meio-campista",
    dataNascimento: "05/08/1995",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // EGITO --------------------------------------------------------------------------------------------------

  // Mohamed Salah
  {
    nome: "Mohamed Salah",
    background: "plate",
    descricao:
      "Atacante egípcio conhecido por sua velocidade, finalização precisa e dribles. Um dos principais jogadores do Liverpool, Salah é ídolo nacional no Egito.",
    pagina: "https://www.instagram.com/mosalah/",
    nacionalidade: "Egito",
    imagem:
      "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2018_21/2444601/180525-mohamed-salah-liverpool-mn-0815.jpg",
    numero: "11",
    posicao: "Atacante",
    dataNascimento: "15/06/1992",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // ESCÓCIA -------------------------------------------------------------------------------------------------

  // Andrew Robertson
  {
    nome: "Robertson",
    background: "#",
    descricao:
      "Lateral-esquerdo escocês conhecido por sua habilidade nos cruzamentos e sua capacidade de atuar tanto na defesa quanto no ataque. É considerado um dos melhores laterais do mundo.",
    pagina: "https://www.instagram.com/andrewrobertson5/",
    nacionalidade: "Escócia",
    imagem:
      "https://i.pinimg.com/474x/fd/fc/ab/fdfcab24b444121095318d4c3ef1016c.jpg",
    numero: "26",
    posicao: "Lateral-esquerdo",
    dataNascimento: "11/03/1994",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // ESLOVÊNIA -----------------------------------------------------------------------------------------------

  // Jan Oblak
  {
    nome: "Jan Oblak",
    background: "plate",
    descricao:
      "Jan Oblak é um dos melhores goleiros do mundo, conhecido por suas defesas espetaculares e reflexos rápidos. Ele é fundamental para a segurança da defesa do Atlético de Madrid.",
    pagina: "https://www.instagram.com/oblakjan/",
    nacionalidade: "Eslovênia",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Jan_Oblak_2019.jpg/640px-Jan_Oblak_2019.jpg",
    numero: "13",
    posicao: "Goleiro",
    dataNascimento: "07/01/1993",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  //ESPANHA---------------------------------------------------------------------------------------------------

  // Alfredo Di Stéfano
  {
    nome: "Alfredo Di Stéfano",
    background: "gold",
    descricao:
      "Atacante argentino-espanhol considerado um dos maiores jogadores de todos os tempos. Di Stéfano era conhecido por sua velocidade, habilidade técnica e faro de gol, sendo fundamental para o sucesso do Real Madrid nos anos 50 e 60.",
    pagina: "https://www.instagram.com/alfredodistefano/",
    nacionalidade: "Argentino-espanhol",

    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/b/bb/Mcu_Alfredo_Di_Stefano.jpg",
    numero: "9",
    posicao: "Atacante",
    dataNascimento: "04/07/1926",
    dataFalecimento: "07/07/2014",
    status: "Aposentado",
    tags: ["argentina", "espanha", "atacante", "Alfredo Di Stefano", "gold"],
    clubes: [],
    selecao: {},
    titulos: [],
  },

  // Álvaro Morata
  {
    nome: "Álvaro Morata",
    background: "#",
    descricao:
      "Atacante forte e completo, Morata é conhecido por sua habilidade no jogo aéreo e por marcar gols decisivos. É um dos principais atacantes da seleção espanhola.",
    pagina: "https://www.instagram.com/alvaromorata/",
    nacionalidade: "Espanha",
    imagem:
      "https://media.gettyimages.com/id/2166654167/photo/milan-italy-alvaro-morata-of-ac-milan-looks-on-during-the-trofeo-berlusconi-match-between-ac.jpg?s=612x612&w=gi&k=20&c=lbB-9Al4947HAJ2qSA6SJoTrjQ-9AEy4PGD2b1HdgZM=",
    numero: "9",
    posicao: "Atacante",
    dataNascimento: "23/10/1992",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Andrés Iniesta
  {
    nome: "Andrés Iniesta",
    background: "plate",
    descricao:
      "Um dos maiores meias da história do futebol, conhecido por sua habilidade e gols decisivos.",
    pagina: "https://www.instagram.com/andiniesta8/",
    nacionalidade: "Espanha",
    alt: "Espanha",
    imagem:
      "https://cdn-s-www.leprogres.fr/images/FB18B92B-D189-4989-8F3F-29180DDF0DAC/NW_raw/andres-iniesta-photo-afp-1522783770.jpg",
    numero: "8",
    posicao: "Meia",
    dataNascimento: "11/05/1984",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Carvajal
  {
    nome: "Carvajal",
    background: "plate",
    descricao:
      "Lateral-direito rápido e habilidoso, Carvajal é conhecido por seus cruzamentos precisos e sua solidez defensiva. Ele é um dos principais jogadores do Real Madrid e da seleção espanhola.",
    pagina:
      "https://www.realmadrid.com/pt-PT/futebol/primeira-equipa/plantel/daniel-carvajal-ramos",
    nacionalidade: "Espanha",
    imagem:
      "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--e6263595-3f05-459b-b73a-ee23af676971/ND_CARVAJAL__AV13707.app.webp?preferwebp=true",
    numero: "2",
    posicao: "Lateral-direito",
    dataNascimento: "11/01/1992",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Carles Puyol
  {
    nome: "Carles Puyol",
    background: "plate",
    descricao:
      "Lenda do Barcelona, Puyol era um zagueiro central conhecido por sua liderança, força física e lealdade ao clube. Ele era o capitão do time em diversos títulos importantes e era muito querido pelos torcedores.",
    pagina: "https://www.instagram.com/carlespuyolofficial/",
    nacionalidade: "Espanha",
    imagem:
      "https://preview.redd.it/g00wwalqrzq71.jpg?width=720&format=pjpg&auto=webp&s=e93d818b89b53619dece276056c1643b11ddc7ba",
    numero: "5",
    posicao: "Zagueiro",
    dataNascimento: "13/04/1978",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // David Silva
  {
    nome: "David Silva",
    background: "plate",
    descricao:
      "Considerado um dos maiores meio-campistas da sua geração, David Silva é conhecido por sua visão de jogo, passes precisos e habilidade técnica. Atuou por grandes clubes como Valencia e Manchester City.",
    pagina: "https://www.instagram.com/david21silva/",
    nacionalidade: "Espanha",
    imagem:
      "https://tmssl.akamaized.net/images/foto/galerie/david-silva-1407846069-2263.jpg",
    numero: "21",
    posicao: "Meia",
    dataNascimento: "8/1/1986",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // David Villa
  {
    nome: "David Villa",
    background: "plate",
    descricao:
      "Considerado um dos maiores atacantes da história do futebol espanhol, David Villa é conhecido por sua habilidade de finalização, velocidade e inteligência tática. Atuou por grandes clubes como Valencia, Barcelona e Atlético de Madrid.",
    pagina: "https://www.instagram.com/davidvilla/",
    nacionalidade: "Espanha",
    imagem:
      "https://i.pinimg.com/474x/b9/24/f3/b924f3a6439c12e0897a1fe7449f1e41.jpg",
    numero: "7",
    posicao: "Atacante",
    dataNascimento: "03/12/1981",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Diego Costa
  {
    nome: "Diego Costa",
    background: "#",
    descricao:
      "Atacante brasileiro, naturalizado espanhol, conhecido por sua força física, estilo de jogo intenso e habilidade para marcar gols. Foi um dos principais jogadores do Atlético de Madrid e do Chelsea.",
    pagina: "https://www.instagram.com/diegoftcosta/",
    nacionalidade: "Espanha",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/da/2024/04/06/diego-costa-comemorando-o-gol-do-gremio-diante-do-juventude-1712436063964_v2_3x4.jpg",
    numero: "19",
    posicao: "Atacante",
    dataNascimento: "7 de outubro de 1988",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Gavi
  {
    nome: "Gavi",
    background: "promise",
    descricao:
      "Meia talentoso e promissor, Gavi é conhecido por sua técnica, visão de jogo e personalidade forte. É um dos pilares do meio-campo do Barcelona e da Seleção Espanhola.",
    pagina: "https://www.instagram.com/gavim10/",
    nacionalidade: "Espanha",
    imagem:
      "https://i0.statig.com.br/bancodeimagens/imgalta/3h/8q/8o/3h8q8ojw0jskjajveof8osndc.jpg",
    numero: "6",
    posicao: "Meia",
    dataNascimento: "05/08/2004",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  //Gerard Piqué
  {
    nome: "Gerard Piqué",
    background: "plate",
    descricao:
      "Zagueiro espanhol conhecido por sua liderança e habilidade no jogo aéreo, Piqué foi um dos maiores ídolos do Barcelona.",
    pagina: "https://www.instagram.com/3gerardpique/",
    nacionalidade: "Espanha",
    imagem:
      "https://i.pinimg.com/736x/81/22/82/8122821e9935101f424a159b1d36dc65.jpg",
    numero: "3",
    posicao: "Zagueiro",
    dataNascimento: "2/2/1987",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Iker Casillas
  {
    nome: "Iker Casillas",
    background: "plate",
    descricao:
      "Um dos maiores goleiros da história do futebol, conhecido por suas defesas espetaculares e liderança.",
    pagina: "https://www.instagram.com/ikercasillasoficial/",
    nacionalidade: "Espanha",
    imagem:
      "https://s.glbimg.com/es/ge/f/original/2012/09/12/iker_casillas_real_madrid_2.jpg",
    numero: "1",
    posicao: "Goleiro",
    dataNascimento: "20/05/1981",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  //Isco Alarcón
  {
    nome: "Isco Alarcón",
    background: "#",
    descricao:
      "Meia espanhol conhecido por sua técnica e visão de jogo, Isco já atuou por Real Madrid e agora defende o [time atual].",
    pagina: "https://www.instagram.com/iscoalarcon/",
    nacionalidade: "Espanha",
    imagem:
      "https://pbs.twimg.com/media/FT__o9JXEAMIakS?format=jpg&name=4096x4096",
    numero: "22",
    posicao: "Meia",
    dataNascimento: "21/04/1992",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Jordi Alba
  {
    nome: "Jordi Alba",
    background: "plate",
    descricao:
      "Lateral-esquerdo conhecido por sua velocidade, cruzamentos precisos e habilidade de apoiar o ataque. Campeão da Eurocopa e da Copa do Mundo com a Espanha, Alba é um dos melhores laterais do mundo.",
    pagina: "https://www.instagram.com/jordialba/",
    nacionalidade: "Espanha",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/ed/2023/02/05/jordi-alba-do-barcelona-comemora-gol-contra-o-sevilla-pelo-espanhol-1675632855082_v2_450x600.jpg",
    numero: "18",
    posicao: "Lateral-esquerdo",
    dataNascimento: "21/03/1989",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  //Lamine Yamal
  {
    nome: "Lamine Yamal",
    background: "promise",
    descricao:
      "Joia do Barcelona, Yamal é um dos jogadores mais promissores do mundo. Com apenas 17, ele já chama atenção pela habilidade e maturidade em campo.",
    pagina: "https://www.instagram.com/laminyamal/",
    nacionalidade: "Espanha",
    imagem:
      "https://tntsports.com.br/__export/1720996103480/sites/esporteinterativo/img/2024/07/14/yamal_melhor_jogador_jovem_da_euro_1.jpg_742406227.jpg",
    numero: "19",
    posicao: "Atacante",
    dataNascimento: "13/07/2007",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  //Marco Asensio
  {
    nome: "Marco Asensio",
    background: "#",
    descricao:
      "Meia-atacante espanhol conhecido por sua técnica e finalização, Asensio é um dos jovens talentos do futebol espanhol, atualmente joga no PSG.",
    pagina: "https://www.instagram.com/marcoasensio10/",
    nacionalidade: "Espanha",
    imagem:
      "https://i.pinimg.com/736x/12/7b/39/127b39af9a1cd4b4f762bb6a4215b426.jpg",
    numero: "10",
    posicao: "Meia-atacante",
    dataNascimento: "21/1/1996",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  //Pablo Marí
  {
    nome: "Pablo Marí",
    background: "#",
    descricao:
      "Zagueiro central conhecido por sua serenidade e habilidade na construção de jogadas. Possui boa visão de jogo e é forte no jogo aéreo.",
    pagina: "https://www.instagram.com/pablomari/",
    nacionalidade: "Espanha",
    imagem:
      "https://s2-ge.glbimg.com/qogF2UGSzzSn4gNmDqGN0o6TFnA=/0x0:2505x3248/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/u/j/ypDYBSQZ6DJjbPAJXFSQ/pablo-mari-monza.jpg",
    numero: "22",
    posicao: "Zagueiro",
    dataNascimento: "31/08/1993",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Pedri
  {
    nome: "Pedri",
    background: "promise",
    descricao:
      "Meia talentoso e elegante, Pedri é conhecido por sua técnica apurada, visão de jogo e habilidade de controlar o ritmo do jogo. É um dos pilares do meio-campo do Barcelona e da Seleção Espanhola.",
    pagina: "https://www.instagram.com/pedri/",
    nacionalidade: "Espanha",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ16ZnYJ1uRd7jU7W5NAY4QgY9e2Qu8LNYVcA&s",
    numero: "8",
    posicao: "Meia",
    dataNascimento: "25/11/2002",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Pep Guardiola
  {
    nome: "Pep Guardiola",
    background: "#",
    descricao:
      "Ex-volante espanhol conhecido por sua inteligência tática e visão de jogo, Guardiola foi capitão do Barcelona e conquistou diversos títulos como jogador. Atualmente, é um dos treinadores mais renomados do mundo.",
    pagina: "https://www.instagram.com/pepguardiola/",
    nacionalidade: "Espanha",
    imagem:
      "https://cdn.theathletic.com/app/uploads/2019/10/23004016/guardiola1-664x1024.png",
    numero: "4",
    posicao: "Volante",
    dataNascimento: "18/01/1971",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Raúl González
  {
    nome: "Raúl González",
    background: "#",
    descricao:
      "Um dos maiores atacantes da história do Real Madrid, conhecido por sua eficiência e liderança.",
    pagina: "https://www.instagram.com/raulgonzalez/",
    nacionalidade: "Espanha",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Ra%C3%BAl_Gonz%C3%A1lez_in_Real_Madrid_2009.jpg/450px-Ra%C3%BAl_Gonz%C3%A1lez_in_Real_Madrid_2009.jpg",
    numero: "7",
    posicao: "Atacante",
    dataNascimento: "27/06/1977",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Sergio Busquets
  {
    nome: "Sergio Busquets",
    background: "plate",
    descricao:
      "Volante conhecido por sua inteligência tática e passes precisos. Um dos pilares do Barcelona por muitos anos, Busquets é considerado um dos melhores volantes de sua geração.",
    pagina: "https://www.instagram.com/5sergiobusquets/",
    nacionalidade: "Espanha",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/7/71/Sergio_Busquets_2018_%28cropped%29.jpg",
    numero: "5",
    posicao: "Volante",
    dataNascimento: "16/07/1988",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Sergio Ramos
  {
    nome: "Sergio Ramos",
    background: "plate",
    descricao:
      "Um dos maiores zagueiros da história do Real Madrid, Sergio Ramos é conhecido por sua liderança, força física e habilidade para marcar gols importantes. Com uma carreira vitoriosa, conquistou diversos títulos e se tornou um dos principais jogadores da Seleção Espanhola.",
    pagina: "https://pt.wikipedia.org/wiki/Sergio_Ramos",
    nacionalidade: "Espanha",
    imagem:
      "https://conteudo.imguol.com.br/c/galeria/f2/2023/03/08/sergio-ramos-apos-a-derrota-do-psg-para-o-bayern-de-munique-na-champions-1678314320553_v2_3x4.jpg",
    numero: "4",
    posicao: "Zagueiro",
    dataNascimento: "30/03/1986",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Thiago Alcântara
  {
    nome: "Thiago Alcântara",
    background: "#",
    descricao:
      "Ex-meio-campista conhecido por sua habilidade técnica, visão de jogo e passes precisos. Foi um dos pilares de equipes como Barcelona, Bayern de Munique e Liverpool.",
    pagina: "https://www.instagram.com/thiagoalcantara/",
    nacionalidade: "Espanha",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/UEFA_EURO_qualifiers_Sweden_vs_Spain_20191015_Thiago_Alcantara_13_%28cropped%29.jpg/1200px-UEFA_EURO_qualifiers_Sweden_vs_Spain_20191015_Thiago_Alcantara_13_%28cropped%29.jpg",
    numero: "6",
    posicao: "Meio-campista",
    dataNascimento: "11 de abril de 1991",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Xabi Alonso
  {
    nome: "Xabi Alonso",
    background: "plate",
    descricao:
      "Meio-campista espanhol conhecido por sua visão de jogo, passes precisos e elegância. Foi um dos pilares de equipes como Real Madrid e Bayern de Munique.",
    pagina: "https://www.instagram.com/xabialonso/",
    nacionalidade: "Espanha",
    imagem:
      "https://i.pinimg.com/736x/1c/0d/b8/1c0db82837e8d1a0fd780e02d405cc9d.jpg",
    numero: "14",
    posicao: "Meio-campista",
    dataNascimento: "25 de novembro de 1981",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Xavi Hernández
  {
    nome: "Xavi Hernández",
    background: "plate",
    descricao:
      "Um dos maiores meias da história do futebol, conhecido por sua visão de jogo e passes precisos.",
    pagina: "https://www.instagram.com/xavi/",
    nacionalidade: "Espanha",
    imagem:
      "https://i.pinimg.com/736x/68/51/87/685187139f0d27413a67e2ac8947b448.jpg",
    numero: "6",
    posicao: "Meia",
    dataNascimento: "25/01/1980",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  //FRANÇA----------------------------------------------------------------------------------------------------

  // Adrien Rabiot
  {
    nome: "Adrien Rabiot",
    background: "#",
    descricao:
      "Meia de contenção conhecido por sua força física e habilidade de recuperar a bola. Rabiot é um jogador crucial na construção do jogo e tem se destacado em grandes clubes europeus.",
    pagina: "https://www.instagram.com/adrien_rabiot/",
    nacionalidade: "França",
    imagem:
      "https://cdn.resfu.com/media/img_news/afp_fr_7090ad802572c880439e0e0b17c87af2e83df926.jpg",
    numero: "25",
    posicao: "Meia de contenção",
    dataNascimento: "03/04/1995",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Antoine Griezmann
  {
    nome: "Antoine Griezmann",
    background: "plate",
    descricao:
      "Um atacante versátil e habilidoso, conhecido por sua visão de jogo e capacidade de marcar gols.",
    pagina: "https://www.instagram.com/antogriezmann/",
    nacionalidade: "França",
    imagem:
      "https://pbs.twimg.com/media/Ft2zVupWcAEbqI2?format=jpg&name=4096x4096",
    numero: "7",
    posicao: "Atacante",
    dataNascimento: "21/3/1991",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Franck Ribéry
  {
    nome: "Franck Ribéry",
    background: "plate",
    descricao:
      "Uma lenda do futebol francês! Conhecido por sua habilidade, velocidade e dribles desconcertantes, Ribéry foi um dos maiores jogadores da sua geração. Ele conquistou títulos importantes com Bayern de Munique e seleção francesa.",
    pagina: "https://www.instagram.com/frankribery/",
    nacionalidade: "França",
    imagem:
      "https://media.gettyimages.com/id/146399315/pt/foto/donetsk-ukraine-franck-ribery-of-france-looks-on-during-the-uefa-euro-2012-group-d-match.jpg?s=612x612&w=gi&k=20&c=cCNZvnba7VWdLpQi4SgTM8ILdPAfsEJcCJ6-_X_Usik=",
    numero: "7",
    posicao: "Meia-atacante",
    dataNascimento: "7 de abril de 1983",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  //Hugo Lloris
  {
    nome: "Hugo Lloris",
    background: "plate",
    descricao:
      "Goleiro francês conhecido por suas defesas espetaculares, Lloris foi capitão do Tottenham Hotspur e da Seleção Francesa.",
    pagina: "https://www.instagram.com/hugolloris/",
    nacionalidade: "França",
    imagem:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6c947d2c-fd29-4e2e-9231-4c8b393c4e00/dcfvaon-5c2704e1-10b4-49f0-a7f2-3dd266de9403.jpg/v1/fill/w_800,h_1149,q_75,strp/hugo_lloris_france_hd__football2k_by_rimshad7_dcfvaon-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE0OSIsInBhdGgiOiJcL2ZcLzZjOTQ3ZDJjLWZkMjktNGUyZS05MjMxLTRjOGIzOTNjNGUwMFwvZGNmdmFvbi01YzI3MDRlMS0xMGI0LTQ5ZjAtYTdmMi0zZGQyNjZkZTk0MDMuanBnIiwid2lkdGgiOiI8PTgwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.dAHjtED9hWm10gXzMoRQH2Ko9TlECpvxuBehIk5q2Ps",
    numero: "1",
    posicao: "Goleiro",
    dataNascimento: "26/12/1986",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Karim Benzema
  {
    nome: "Karim Benzema",
    background: "plate",
    descricao:
      "O atacante francês é conhecido por sua habilidade técnica, finalização precisa e visão de jogo. Ele é um dos principais jogadores do Real Madrid e da seleção francesa.",
    pagina: "https://www.instagram.com/karimbenzema/",
    nacionalidade: "França",
    imagem:
      "https://tmssl.akamaized.net//images/foto/galerie/karim-benzema-real-madrid-2022-1665935878-94347.jpg",
    numero: "9",
    posicao: "Atacante",
    dataNascimento: "19/12/1987",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Kingsley Coman
  {
    nome: "Kingsley Coman",
    background: "#",
    descricao:
      "Atacante francês conhecido por sua velocidade, dribles e habilidade nos cruzamentos, Coman é um dos principais jogadores do Bayern de Munique. Ele já conquistou diversos títulos importantes na Europa.",
    pagina: "https://www.instagram.com/king_coman/",
    nacionalidade: "França",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Kingsley_Coman_%282019%29_%28cropped%29.jpg/640px-Kingsley_Coman_%282019%29_%28cropped%29.jpg",
    numero: "11",
    posicao: "Ponta",
    dataNascimento: "13/06/1996",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Kylian Mbappé
  {
    nome: "Kylian Mbappé",
    background: "plate",
    descricao:
      "Um dos jogadores mais rápidos e habilidosos do mundo, conhecido por seus dribles e gols espetaculares.",
    pagina: "https://www.instagram.com/k.mbappe/",
    nacionalidade: "França",
    imagem:
      "https://assets-us-01.kc-usercontent.com/31dbcbc6-da4c-0033-328a-d7621d0fa726/32e193b3-b8e8-437a-a24a-651f0b22c15f/mbappe%20trophy%203.jpg?ver=28-06-2024?w=3840&q=75",
    numero: "7",
    posicao: "Atacante",
    dataNascimento: "20/12/1998",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Michel Platini
  {
    nome: "Michel Platini",
    background: "gold",
    descricao:
      "Meia-atacante francês considerado um dos maiores jogadores da história do futebol. Platini era conhecido por sua elegância, visão de jogo e chutes precisos, sendo fundamental para a conquista da Eurocopa de 1984.",
    pagina: "https://www.instagram.com/michelplatini/",
    time3: "Juventus",
    nacionalidade: "França",
    imagem:
      "https://i.pinimg.com/564x/e2/b5/e6/e2b5e6dc32a7da44771bba520bfe199c.jpg",
    numero: "10",
    posicao: "Meia-atacante",
    dataNascimento: "21/06/1955",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // N'Golo Kanté
  {
    nome: "N'Golo Kanté",
    background: "plate",
    descricao:
      "Conhecido por sua incrível capacidade de desarme e pela energia incansável em campo, N'Golo Kanté é um dos melhores volantes do mundo. O francês se destaca por sua leitura de jogo e por sua importância na recuperação da bola para sua equipe.",
    pagina: "https://www.instagram.com/ngolokante/",
    nacionalidade: "França",
    imagem:
      "https://external-preview.redd.it/romano-al-ittihad-stance-on-ngolo-kant%C3%A9-remains-very-clear-v0-O_QBn20zVfaUZkTZJidI9x6M27nR-aB3PIgxX3mxXfg.jpg?auto=webp&s=68f20b193ee5148fa645d9045092ca20b67e9c21",
    numero: "7",
    posicao: "Volante",
    dataNascimento: "29 de março de 1991",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  //Ousmane Dembélé
  {
    nome: "Ousmane Dembélé",
    background: "plate",
    imagem:
      "https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2024/02/14/1387601427-ousmane-dembele-paris-saint-germain-v-ac-milan-group-f-uefa-champions-league-2023-24-2048x1365.jpg",
    pagina: "https://www.instagram.com/o.dembele7/",
    descricao:
      "Ponta-direita francês conhecido por sua velocidade vertiginosa, dribles desequilibrantes, capacidade de jogar com ambos os pés e criatividade no ataque. Dembélé é um jogador que pode mudar o rumo de uma partida com sua imprevisibilidade, tendo atuado em grandes clubes europeus e sendo campeão da Copa do Mundo com a França.",
    numero: "10",
    posicao: "Ponta-direita",
    nacionalidade: "França",
    dataNascimento: "15/05/1997",
    status: "Ativo (Paris Saint-Germain)",
    clubes: [
      createClub(
        "Stade Rennais",
        { inicio: "2015", fim: "2016" },
        { jogos: 29, gols: 12, assistencias: 5 }
      ),
      createClub(
        "Borussia Dortmund",
        { inicio: "2016", fim: "2017" },
        { jogos: 49, gols: 10, assistencias: 22 }
      ),
      createClub(
        "Barcelona",
        { inicio: "2017", fim: "2023" },
        { jogos: 185, gols: 40, assistencias: 43 }
      ),
      createClub(
        "Paris Saint-Germain",
        { inicio: "2023", fim: "Presente" },
        { jogos: 43, gols: 6, assistencias: 14 }
      ),
    ],
    selecao: {
      nome: "França",
      periodo: { inicio: "2016", fim: "Presente" },
      estatisticas: { jogos: 45, gols: 12, assistencias: 5 },
    },
    titulos: [
      // Borussia Dortmund
      {
        nome: "Copa da Alemanha",
        anos: "2016-17",
        clube: "Borussia Dortmund",
      },
      // FC Barcelona
      {
        nome: "La Liga",
        anos: "2017-18, 2018-19, 2022-23",
        clube: "Barcelona",
      },
      {
        nome: "Copa del Rey",
        anos: "2017-18, 2020-21",
        clube: "Barcelona",
      },
      {
        nome: "Supercopa da Espanha",
        anos: "2018, 2022-23",
        clube: "Barcelona",
      },
      // Paris Saint-Germain
      {
        nome: "Ligue 1",
        anos: "2023-24",
        clube: "Paris Saint-Germain",
      },
      {
        nome: "Copa da França",
        anos: "2023-24",
        clube: "Paris Saint-Germain",
      },
      {
        nome: "Supercopa da França",
        anos: "2023",
        clube: "Paris Saint-Germain",
      },
      // Seleção Francesa
      {
        nome: "Copa do Mundo FIFA",
        logo: "Copa do Mundo",
        anos: "2018",
        clube: "França",
        logoVariavel: true,
      },
      {
        nome: "Liga das Nações da UEFA (Vice-campeão)",
        logo: "UEFA Nations League",
        anos: "2021",
        clube: "França",
      },
      {
        nome: "Copa do Mundo FIFA (Vice-campeão)",
        logo: "Copa do Mundo",
        anos: "2022",
        clube: "França",
        logoVariavel: true,
      },
      // Individuais
      {
        nome: "Melhor Jogador Jovem da Ligue 1",
        logo: "Ligue 1",
        anos: "2015-16",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Revelação da Temporada da Bundesliga",
        logo: "Bundesliga",
        anos: "2016-17",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Time do Ano da Bundesliga",
        logo: "Bundesliga",
        anos: "2016-17",
        clube: "Individual",
        categoria: "individual",
      },
    ],
    tags: [
      "Dembélé",
      "Dembele",
      "Ousmane Dembélé",
      "Barcelona",
      "PSG",
      "França",
      "Ponta",
      "Driblador",
      "Velocidade",
      "OD11",
      "OD7",
      "Campeão do Mundo",
    ],
  },

  // Paul Pogba
  {
    nome: "Paul Pogba",
    background: "#",
    descricao:
      "Um dos meio-campistas mais talentosos da sua geração, conhecido por sua habilidade técnica, passes longos precisos e chutes poderosos. Já jogou por grandes clubes como Manchester United e Juventus.",
    pagina: "http://www.paulpogba.com/",
    nacionalidade: "França",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/6a/2023/09/11/paul-pogba-durante-partida-do-campeonato-italiano-202324-1694447446172_v2_3x4.jpg",
    numero: "10",
    posicao: "Meio-campo",
    dataNascimento: "15/03/1993",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Presnel Kimpembe
  {
    nome: "Presnel Kimpembe",
    background: "#",
    descricao:
      "Zagueiro central francês conhecido por sua velocidade, força física e habilidade com a bola nos pés. É um dos pilares da defesa do Paris Saint-Germain.",
    pagina: "https://www.instagram.com/kimpembe/",
    nacionalidade: "França",
    imagem:
      "https://tntsports.com.br/__export/1662910736253/sites/esporteinterativo/img/2022/09/11/gettyimages-1243099214.jpg_973455744.jpg",
    numero: "3",
    posicao: "Zagueiro",
    dataNascimento: "13/08/1995",
    status: "Ativo",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Raphaël Varane
  {
    nome: "Raphaël Varane",
    background: "#",
    descricao:
      "Zagueiro elegante e veloz, Varane é conhecido por sua habilidade no jogo aéreo e por sua liderança em campo. É um dos pilares defensivos da sua equipe.",
    pagina: "https://www.instagram.com/raphaelvarane/",
    nacionalidade: "França",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/45/2021/07/01/raphael-varane-pode-ser-o-proximo-reforco-do-manchester-united-1625152986904_v2_450x600.jpg",
    numero: "4",
    posicao: "Zagueiro",
    dataNascimento: "25/04/1993",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Thierry Henry
  {
    nome: "Thierry Henry",
    background: "plate",
    descricao:
      "Considerado um dos maiores atacantes da história do Arsenal e da seleção francesa, Henry era conhecido por sua velocidade, habilidade e finalização precisa. Ele foi um dos principais jogadores da geração campeã da Copa do Mundo de 1998.",
    pagina: "https://www.instagram.com/thierryhenry/",
    nacionalidade: "França",
    imagem:
      "https://tmssl.akamaized.net//images/foto/galerie/thierry-henry-1417524348-3352.jpg?lm=1483605830",
    numero: "14",
    posicao: "Atacante",
    dataNascimento: "17/08/1977",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // Zinédine Zidane
  {
    nome: "Zinédine Zidane",
    background: "gold",
    descricao:
      "Meia-atacante francês considerado um dos maiores jogadores de todos os tempos. Zidane era conhecido por sua técnica apurada, visão de jogo e gols espetaculares.",
    pagina: "https://www.instagram.com/zidane/",
    nacionalidade: "França",
    imagem:
      "https://www.shutterstock.com/editorial/image-editorial/O5D5I40fNdDdA54bMDE4Ng==/zinedine-zidane-france-during-group-g-preliminary-440nw-8189014ba.jpg",
    numero: "10",
    posicao: "Meia-atacante",
    dataNascimento: "23/06/1972",
    status: "Aposentado",
    clubes: [],
    selecao: {},
    titulos: [],
    tags: [],
  },

  // INGLATERRA -------------------------------------------------------------------------------------------------------------------------------------------------------

  //Harry Kane
  {
    nome: "Harry Kane",
    background: "plate",
    imagem:
      "https://dims.apnews.com/dims4/default/6d2e0b0/2147483647/strip/true/crop/5820x3880+0+0/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F2f%2Fdf%2F12ff8d97892897fcf0b91338646f%2Fc20b8f3d403e44d79010036fb0ca0f55",
    descricao:
      "Centroavante inglês e capitão da seleção inglesa, conhecido por sua prolífica capacidade de marcar gols, visão de jogo, habilidades de passe e inteligência tática. Kane é um dos atacantes mais completos do futebol mundial, quebrou vários recordes de gols na Premier League e é o maior artilheiro da história da Inglaterra, além de ser o capitão do Bayern de Munique.",
    numero: "9",
    posicao: "Centroavante",
    nacionalidade: "Inglaterra",
    dataNascimento: "28/07/1993",
    status: "Ativo (Bayern de Munique)",
    clubes: [
      createClub(
        "Tottenham Hotspur",
        { inicio: "2009", fim: "2010" },
        { jogos: 0, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Leyton Orient",
        { inicio: "2011", fim: "2011" },
        { jogos: 18, gols: 5, assistencias: 0 }
      ),
      createClub(
        "Millwall",
        { inicio: "2012", fim: "2012" },
        { jogos: 27, gols: 9, assistencias: 5 }
      ),
      createClub(
        "Norwich City",
        { inicio: "2012", fim: "2013" },
        { jogos: 5, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Leicester City",
        { inicio: "2013", fim: "2013" },
        { jogos: 15, gols: 2, assistencias: 1 }
      ),
      createClub(
        "Tottenham Hotspur",
        { inicio: "2010", fim: "2023" },
        { jogos: 435, gols: 280, assistencias: 64 }
      ),
      createClub(
        "Bayern de Munique",
        { inicio: "2023", fim: "Presente" },
        { jogos: 47, gols: 44, assistencias: 12 }
      ),
    ],
    selecao: {
      nome: "Inglaterra",
      periodo: { inicio: "2015", fim: "Presente" },
      estatisticas: { jogos: 91, gols: 63, assistencias: 19 },
    },
    titulos: [
      // Bayern de Munique
      {
        nome: "Bundesliga",
        anos: "2025",
        clube: "Bayern de Munique",
      },
      {
        nome: "Supercopa da Alemanha (Vice-campeão)",
        logo: "Supercopa da Alemanha",
        anos: "2023",
        clube: "Bayern de Munique",
      },
      // Tottenham Hotspur
      {
        nome: "UEFA Champions League (Vice-campeão)",
        logo: "UEFA Champions League",
        anos: "2018",
        clube: "Tottenham Hotspur",
      },
      {
        nome: "Premier League (Vice-campeão)",
        logo: "Premier League",
        anos: "2016",
        clube: "Tottenham Hotspur",
      },
      {
        nome: "EFL Cup (Vice-campeão)",
        logo: "EFL Cup",
        anos: "2014",
        clube: "Tottenham Hotspur",
      },
      // Seleção Inglesa (Conquistas Notáveis)
      {
        nome: "Eurocopa (Vice-campeão)",
        logo: "Eurocopa",
        anos: "2024",
        clube: "Inglaterra",
        logoVariavel: true,
      },
      {
        nome: "Eurocopa (Vice-campeão)",
        logo: "Eurocopa",
        anos: "2020",
        clube: "Inglaterra",
        logoVariavel: true,
      },
      {
        nome: "Liga das Nações da UEFA (Terceiro lugar)",
        logo: "UEFA Nations League",
        anos: "2019",
        clube: "Inglaterra",
      },
      {
        nome: "Copa do Mundo (4º lugar)",
        logo: "Copa do Mundo",
        anos: "2018",
        clube: "Inglaterra",
        logoVariavel: true,
      },
      // Individuais
      {
        nome: "10º colocado na Ballon d'Or",
        logo: "Bola de Ouro",
        anos: "2024",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "8º melhor jogador do ano",
        logo: "IFFHS",
        anos: "2024",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Troféu Gerd Muller",
        anos: "2024",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Seleção da Liga dos Campeões da UEFA",
        logo: "UEFA Champions League",
        anos: "2023",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Bota de Ouro da UEFA",
        logo: "UEFA",
        anos: "2023",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Time da temporada da Bundesliga",
        logo: "Bundesliga",
        anos: "2023",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Chuteira de Ouro da Copa do Mundo da FIFA",
        logo: "FIFA",
        anos: "2018",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Equipe do Ano da PFA",
        logo: "PFA",
        anos: "2014, 2015, 2016, 2017 e 2020",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Jogador Jovem do Ano da PFA",
        logo: "PFA",
        anos: "2014-15",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Artilheiro da Bundesliga",
        logo: "Bundesliga",
        anos: "2023-24",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Jogador do Mês da Premier League",
        logo: "Premier League",
        anos: "Janeiro 2015, Fevereiro 2015, Março 2016, Fevereiro 2017, Setembro 2017, Dezembro 2017, Março 2022",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Melhor Jogador do Tottenham Hotspur da Temporada",
        anos: "2014-15, 2020-21, 2022-23",
        clube: "Individual",
        categoria: "individual",
      },
    ],
    tags: [
      "Kane",
      "Harry Kane",
      "Tottenham",
      "Bayern de Munique",
      "Inglaterra",
      "Centroavante",
      "Artilheiro",
      "Chuteira de Ouro",
      "Capitão",
      "Hurricane",
      "HK10",
      "HK9",
      "Premier League",
      "Bundesliga",
    ],
  },

  // PORTUGAL -------------------------------------------------------------------------------------------------------------------------------------------------------

  // Cristiano Ronaldo
  {
    nome: "Cristiano Ronaldo",
    background: "gold",
    descricao:
      "Considerado um dos maiores jogadores de futebol de todos os tempos, Cristiano Ronaldo é conhecido por sua velocidade, habilidade técnica, finalização e jogo aéreo. Ao longo de sua carreira, conquistou inúmeros títulos e prêmios individuais, representando clubes como Manchester United, Real Madrid, Juventus e, atualmente, Al-Nassr.",
    pagina: "https://www.instagram.com/cristiano/",
    numero: "7",
    posicao: "Atacante",
    dataNascimento: "05/02/1985",
    status: "Ativo",
    nacionalidade: "Portugal",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/cc/2024/08/22/cristiano-ronaldo-comemora-gol-do-al-nassr-diante-do-al-raed-em-jogo-do-campeonato-saudita-1724354605510_v2_3x4.jpg",
    clubes: [
      createClub(
        "Sporting CP",
        { inicio: "2002", fim: "2003" },
        { jogos: 31, gols: 5, assistencias: 3 }
      ),
      createClub(
        "Manchester United",
        { inicio: "2003", fim: "2009" },
        { jogos: 292, gols: 118, assistencias: 69 }
      ),
      createClub(
        "Real Madrid",
        { inicio: "2009", fim: "2018" },
        { jogos: 438, gols: 450, assistencias: 133 }
      ),
      createClub(
        "Juventus",
        { inicio: "2018", fim: "2021" },
        { jogos: 134, gols: 101, assistencias: 38 }
      ),
      createClub(
        "Manchester United",
        { inicio: "2021", fim: "2022" },
        { jogos: 54, gols: 27, assistencias: 3 }
      ),
      createClub(
        "Al-Nassr",
        { inicio: "2023", fim: "atual" },
        { jogos: 92, gols: 84, assistencias: 3 }
      ),
    ],
    selecao: {
      nome: "Portugal",
      periodo: { inicio: "2003", fim: "atual" }, // Ajuste o ano final se necessário
      estatisticas: { jogos: 217, gols: 135, assistencias: 42 }, // Dados aproximados
    },
    titulos: [
      // Sporting CP
      {
        nome: "Supertaça Cândido de Oliveira",
        anos: "2002",
        clube: "Sporting CP",
      },

      // Manchester United
      {
        nome: "UEFA Champions League",
        anos: "2008",
        clube: "Manchester United",
      },
      {
        nome: "Mundial de Clubes",
        anos: "2008",
        clube: "Manchester United",
      },
      {
        nome: "Premier League",
        anos: "2007, 2008, 2009",
        clube: "Manchester United",
      },
      {
        nome: "Supercopa da Inglaterra",
        anos: "2007",
        clube: "Manchester United",
      },
      { nome: "EFL Cup", anos: "2006, 2009", clube: "Manchester United" },
      { nome: "FA Cup", anos: "2004", clube: "Manchester United" },

      // Real Madrid
      {
        nome: "La Liga",
        anos: "2012, 2017",
        clube: "Real Madrid",
      },
      { nome: "Copa del Rey", anos: "2011, 2014", clube: "Real Madrid" },
      {
        nome: "UEFA Champions League",
        anos: "2014, 2016, 2017, 2018",
        clube: "Real Madrid",
      },
      {
        nome: "Supercopa da Espanha",
        anos: "2012, 2017",
        clube: "Real Madrid",
      },
      {
        nome: "Mundial de Clubes",
        anos: "2014, 2016, 2017",
        clube: "Real Madrid",
      },

      // Juventus
      { nome: "Copa da Itália", anos: "2021", clube: "Juventus" },
      { nome: "Serie A", anos: "2019, 2020", clube: "Juventus" },
      { nome: "Supercopa da Itália", anos: "2018, 2020", clube: "Juventus" },

      // Al-Nassr
      { nome: "Copa dos Campeões Árabes", anos: "2023", clube: "Al-Nassr" },

      // Portugal
      { nome: "Eurocopa", anos: "2016", clube: "Portugal", logoVariavel: true },
      { nome: "UEFA Nations League", anos: "2019", clube: "Portugal" },

      //Individuais
      {
        nome: "Prêmio Golden Foot",
        anos: "2020",
        categoria: "individual",
      },
      {
        nome: "Gol do ano",
        anos: "2018",
        categoria: "individual",
        logo: "Globe Soccer Awards",
      },
      {
        nome: "Melhor jogador do Mundo",
        anos: "2018",
        categoria: "individual",
        logo: "ESPY Awards",
      },
      {
        nome: "Melhor jogador do Mundo",
        anos: "2016",
        categoria: "individual",
        logo: "Eurosport",
      },
      {
        nome: "Melhor jogador do ano",
        anos: "2014, 2016",
        categoria: "individual",
        logo: "Marca",
      },
      {
        nome: "Jogador do ano",
        anos: "2011, 2014, 2016, 2017, 2018, 2019",
        categoria: "individual",
        logo: "Globe Soccer Awards",
      },
      {
        nome: "Bola de Ouro",
        anos: "2008, 2013, 2014, 2016, 2017",
        categoria: "individual",
      },
      {
        nome: "Chuteira de Ouro",
        anos: "2008, 2011, 2013, 2014, 2015",
        categoria: "individual",
      },
      {
        nome: "Prêmio Puskás",
        anos: "2009",
        categoria: "individual",
      },
      {
        nome: "Melhor jogador atuando na Europa",
        anos: "2008, 2017",
        categoria: "individual",
        logo: "Onze d'Or",
      },
      {
        nome: "Melhor jogador do mundo",
        anos: "2008, 2012, 2014, 2016, 2017",
        categoria: "individual",
        logo: "Goal 50",
      },
      {
        nome: "Melhor jogador do mundo",
        anos: "2008, 2013, 2014, 2016, 2017",
        categoria: "individual",
        logo: "FIFA",
      },
      {
        nome: "Melhor jogador do mundo",
        anos: "2008, 2013, 2014, 2016, 2017",
        categoria: "individual",
        logo: "Revista World Soccer",
      },
      {
        nome: "Melhor jogador do mundo",
        anos: "2008, 2013, 2014, 2016",
        categoria: "individual",
        logo: "FourFourTwo",
      },
      {
        nome: "Melhor jogador do Mundo",
        anos: "2008",
        categoria: "individual",
        logo: "FIFPro",
      },
      {
        nome: "Melhor jogador do século XXI",
        categoria: "individual",
        logo: "Globe Soccer Awards",
      },
      {
        nome: "Melhor jogador da história",
        categoria: "individual",
        logo: "France Football",
      },
      {
        nome: "Jogador com mais gols Internacionais na História",
        categoria: "individual",
        logo: "FIFA",
      },
    ],
    tags: [],
  },

  // Suécia -------------------------------------------------------------------------------------------------------------------------------

  // Zlatan Ibrahimović
  {
    nome: "Zlatan Ibrahimović",
    background: "plate",
    descricao:
      "Atacante sueco conhecido por sua personalidade forte, habilidade técnica e gols espetaculares. Ibrahimović é um dos maiores jogadores da história do futebol e atuou em diversos clubes de ponta, como Ajax, Juventus, Inter de Milão, Barcelona, Milan, Paris Saint-Germain e Manchester United.",
    pagina: "https://www.instagram.com/iamzlatanibrahimovic/",
    numero: "9",
    posicao: "Atacante",
    dataNascimento: "03/10/1981",
    status: "Aposentado",
    nacionalidade: "Suécia",
    imagem:
      "https://tmssl.akamaized.net//images/foto/galerie/zlatan-ibrahimovic-ac-mailand-1603008323-49388.jpg?lm=1603008348",
    clubes: [
      createClub(
        "Malmo FF",
        { inicio: "1999", fim: "2001" },
        { jogos: 47, gols: 18, assistencias: 0 }
      ),
      createClub(
        "Ajax",
        { inicio: "2001", fim: "2004" },
        { jogos: 110, gols: 48, assistencias: 15 }
      ),
      createClub(
        "Juventus",
        { inicio: "2004", fim: "2006" },
        { jogos: 92, gols: 26, assistencias: 12 }
      ),
      createClub(
        "Internazionale",
        { inicio: "2006", fim: "2009" },
        { jogos: 117, gols: 66, assistencias: 30 }
      ),
      createClub(
        "Barcelona",
        { inicio: "2009", fim: "2011" },
        { jogos: 46, gols: 22, assistencias: 13 }
      ),
      createClub(
        "AC Milan",
        { inicio: "2010", fim: "2012" },
        { jogos: 85, gols: 56, assistencias: 24 }
      ),
      createClub(
        "Paris Saint-Germain",
        { inicio: "2012", fim: "2016" },
        { jogos: 180, gols: 156, assistencias: 61 }
      ),
      createClub(
        "Manchester United",
        { inicio: "2016", fim: "2018" },
        { jogos: 53, gols: 29, assistencias: 10 }
      ),
      createClub(
        "Los Angeles Galaxy",
        { inicio: "2018", fim: "2019" },
        { jogos: 58, gols: 53, assistencias: 15 }
      ),
      createClub(
        "AC Milan",
        { inicio: "2020", fim: "2023" },
        { jogos: 74, gols: 37, assistencias: 11 }
      ),
    ],
    selecao: {
      nome: "Suécia",
      periodo: { inicio: "2001", fim: "2023" },
      estatisticas: { jogos: 122, gols: 62, assistencias: 25 },
    },
    titulos: [
      {
        nome: "Eredivisie",
        anos: "2002, 2004",
        clube: "Ajax",
      },
      {
        nome: "Copa da Holanda",
        anos: "2002",
        clube: "Ajax",
      },
      {
        nome: "Supercopa da Holanda",
        anos: "2002",
        clube: "Ajax",
      },
      {
        nome: "Copa da Itália",
        anos: "2007",
        clube: "Internazionale",
      },
      {
        nome: "Supercopa da Itália",
        anos: "2006, 2008",
        clube: "Internazionale",
      },
      {
        nome: "Serie A",
        anos: "2007, 2008, 2009",
        clube: "Internazionale",
      },
      {
        nome: "Mundial de Clubes",
        anos: "2009",
        clube: "Barcelona",
      },
      {
        nome: "Supercopa da UEFA",
        anos: "2009",
        clube: "Barcelona",
      },
      {
        nome: "Supercopa da Espanha",
        anos: "2009, 2010",
        clube: "Barcelona",
      },
      {
        nome: "La Liga",
        anos: "2010",
        clube: "Barcelona",
      },
      {
        nome: "Supercopa da Itália",
        anos: "2011",
        clube: "AC Milan",
      },
      {
        nome: "Ligue 1",
        anos: "2013, 2014, 2015, 2016",
        clube: "Paris Saint-Germain",
      },
      {
        nome: "Copa da França",
        anos: "2015, 2016",
        clube: "Paris Saint-Germain",
      },
      {
        nome: "Copa da Liga Francesa",
        anos: "2014, 2015, 2016",
        clube: "Paris Saint-Germain",
      },
      {
        nome: "Supercopa da França",
        anos: "2013, 2014, 2015",
        clube: "Paris Saint-Germain",
      },
      {
        nome: "FA Cup",
        anos: "2016",
        clube: "Manchester United",
      },
      {
        nome: "EFL Cup",
        anos: "2017",
        clube: "Manchester United",
      },
      {
        nome: "UEFA Europa League",
        anos: "2017",
        clube: "Manchester United",
      },
      {
        nome: "Serie A",
        anos: "2011, 2022",
        clube: "AC Milan",
      },
      {
        nome: "Futebolista Sueco do Ano",
        anos: "2005, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2020",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "FIFA 100",
        anos: "2004",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Prêmio Golden Foot",
        anos: "2012",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Prêmio Puskás",
        anos: "2013",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "10º melhor jogador do ano",
        logo: "Marca",
        anos: "2013",
        clube: "Individual",
        categoria: "individual",
      },
    ],
    tags: [],
  },

  // URUGUAI --------------------------------------------------------------------------------------------------------------------

  // Valverde
  {
    nome: "Valverde",
    background: "plate",
    descricao:
      "Meio-campista uruguaio conhecido por sua versatilidade, força física e chutes potentes. Valverde é um dos principais jogadores do Real Madrid e da seleção uruguaia.",
    pagina: "https://www.instagram.com/fedevalverde/",
    numero: "15",
    posicao: "Meio-campista",
    dataNascimento: "22/07/1998",
    status: "Ativo",
    nacionalidade: "Uruguai",
    imagem:
      "https://tntsports.com.br/__export/1716815641489/sites/esporteinterativo/img/2024/05/26/valverde_-_gettyimages-2089983514.jpg_423682103.jpg",
    clubes: [
      createClub(
        "Peñarol",
        { inicio: "2015", fim: "2016" },
        { jogos: 25, gols: 6, assistencias: 0 }
      ),
      createClub(
        "Real Madrid Castilla",
        { inicio: "2016", fim: "2017" },
        { jogos: 30, gols: 3, assistencias: 0 }
      ),
      createClub(
        "Deportivo La Coruña",
        { inicio: "2017", fim: "2018" },
        { jogos: 25, gols: 0, assistencias: 1 }
      ),
      createClub(
        "Real Madrid",
        { inicio: "2018", fim: "Presente" },
        { jogos: 300, gols: 30, assistencias: 23 }
      ),
    ],
    selecao: {
      nome: "Uruguai",
      periodo: { inicio: "2017", fim: "Presente" },
      estatisticas: { jogos: 67, gols: 8, assistencias: 4 },
    },
    titulos: [
      //Peñarol
      {
        nome: "Campeonato Uruguaio",
        anos: "2016",
        clube: "Peñarol",
      },

      //Real Madrid
      {
        nome: "La Liga",
        anos: "2020, 2022, 2024",
        clube: "Real Madrid",
      },
      {
        nome: "Supercopa da Espanha",
        anos: "2020, 2022, 2024",
        clube: "Real Madrid",
      },
      {
        nome: "UEFA Champions League",
        anos: "2022, 2024",
        clube: "Real Madrid",
      },
      {
        nome: "Supercopa da UEFA",
        anos: "2022, 2024",
        clube: "Real Madrid",
      },
      {
        nome: "Mundial de Clubes",
        anos: "2018, 2022",
        clube: "Real Madrid",
      },
      {
        nome: "Copa del Rey",
        anos: "2023",
        clube: "Real Madrid",
      },
      {
        nome: "Copa Intercontinental da FIFA",
        anos: "2024",
        clube: "Real Madrid",
      },
    ],
    tags: [],
  },
];

// FUNÇÃO PARA CALCULAR IDADE DO JOGADOR -------------------------------------------------------------------------------------

function calcularIdade(dataNascimento, dataFalecimento = null) {
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

//---------------------------------------------------------------------------------------------------------------------------------
// Função para criar objetos de clube
function createClub(nome, periodo, estatisticas) {
  return {
    nome,
    periodo,
    estatisticas,
  };
}

// Função para criar objetos de título
function createTitle(nome, anos, clube) {
  return { nome, anos, clube };
}

// FUNÇÃO QUE VÊ PERÍODO DE ATIVIDADE DO JOGADOR --------------------------------------------------------------------------------

function calcularPeriodoAtividade(jogador) {
  const anosInicio = jogador.clubes.map((clube) => clube.periodo.inicio);
  const anosFim = jogador.clubes.map((clube) => clube.periodo.fim);
  const anoInicioMin = Math.min(...anosInicio);
  const anoFimMax = Math.max(...anosFim);
  const periodo = `(${anoInicioMin}-${anoFimMax})`;

  if (!jogador.clubes || jogador.clubes.length === 0) {
    return jogador;
  } else if (jogador.status === "Aposentado") {
    jogador.status += " " + periodo;
  }

  return jogador;
}

// FUNÇÃO PARA OS CLUBES QUE O JOGADOR PASSOU -------------------------------------------------------------------------------------------------

function gerarTabelaClubes(jogador) {
  if (!jogador.clubes || jogador.clubes.length === 0) {
    return "<p>Nenhum clube encontrado.</p>";
  }

  let html = "";
  let contador = 1;

  jogador.clubes.forEach((clube) => {
    html += `<img class="clubes" src="./assets/img__equipes/Logo_${clube.nome.replace(
      / /g,
      "_"
    )}.png" alt="">`;
    contador++;
    if (contador > 4) {
      // Limitar a 4 clubes por padrão
      return;
    }
  });

  return html;
}

// FUNÇÕES PARA A TABELA DE TITULOS---------------------------------------------------------------------------------------------

function gerarURLImagem(conquistas) {
  if (conquistas.logo) {
    let logoConquista = conquistas.logo;
    if (conquistas.logoVariavel) {
      logoConquista += `_${conquistas.anos}`;
    }
    return `./assets/img__titulos/Logo_${logoConquista}.png`;
  }
  let logoConquistaNome = conquistas.nome;
  if (conquistas.logoVariavel) {
    logoConquistaNome += `_${conquistas.anos}`;
  }
  return `./assets/img__titulos/Logo_${logoConquistaNome}.png`;
}

function criarTabelaTitulosIndividuais(jogador) {
  const titulosIndividuais = jogador.titulos.filter(
    (titulo) => titulo.categoria === "individual"
  );

  if (titulosIndividuais.length === 0) {
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
              ${titulosIndividuais
                .map(
                  (titulo) => `
<tr class="div-titulos">
  <td class="item-titulo">
    <img class="campeonato" src="${gerarURLImagem(titulo).replace(
      / /g,
      "_"
    )}" alt="">
  </td>
  <td class="item-titulo">
    ${titulo.nome}
  </td>
  <td class="item-titulo">
    ${titulo.anos}
  </td>
</tr>
              `
                )
                .join("")}
          </tbody>
      </table>
  `;
}

function criarTabelaTitulosPorEquipe(jogador) {
  const titulosPorEquipe = jogador.titulos.filter(
    (titulo) => titulo.categoria !== "individual"
  );

  if (titulosPorEquipe.length === 0) {
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
              ${titulosPorEquipe
                .map(
                  (titulo) => `
<tr class="div-titulos">
  <td class="item-titulo">
    <img class="campeonato" src="${gerarURLImagem(titulo).replace(
      / /g,
      "_"
    )}" alt="">
  </td>
  <td class="item-titulo ">
    ${titulo.nome}
  </td>
  <td class="item-titulo">
    ${titulo.anos}
  </td>
  <td class="item-titulo">
    <img class="clubes" src="./assets/img__equipes/Logo_${titulo.clube.replace(
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

// FUNÇÃO PARA GERAR NUMEROS ESTATISTICOS DO JOGADOR ----------------------------------------------------------------------------------------------

function calcularEstatisticasJogador(jogador) {
  return jogador.estatisticas.reduce(
    (acc, stat) => {
      return {
        jogos: acc.jogos + stat.quantidade,
        gols: acc.gols + (stat.tipo === "Gols" ? stat.quantidade : 0),
        assistencias:
          acc.assistencias +
          (stat.tipo === "Assistências" ? stat.quantidade : 0),
      };
    },
    { jogos: 0, gols: 0, assistencias: 0 }
  );
}

function calcularEstatisticas(jogadores, tipo) {
  let total = 0;
  jogadores.forEach((jogador) => {
    total +=
      jogador.estatisticas.find((stat) => stat.tipo === tipo)?.quantidade || 0;
  });
  return total;
}

function gerarTabelaEstatisticas(jogador) {
  if (!jogador.clubes || jogador.clubes.length === 0) {
    return "<p>Sem informações estatísticas disponíveis.</p>";
  }

  let html = `<table class="tabela-estatisticas">
      <thead>
          <tr>
              <th>Clube/Seleção</th>
              <th>Jogos</th>
              <th>Gols</th>
              <th>Assist.</th>
          </tr>
      </thead>
      <tbody>`;

  // Adicionando estatísticas de clubes
  jogador.clubes.forEach((clube) => {
    if (clube.estatisticas) {
      html += `
          <tr>
              <td>${clube.nome}</td>
              <td>${clube.estatisticas.jogos}</td>
              <td>${clube.estatisticas.gols}</td>
              <td>${clube.estatisticas.assistencias}</td>
          </tr>`;
    }
  });

  if (jogador.selecao && jogador.selecao.estatisticas) {
    html += `
      <tr>
        <td>${jogador.selecao.nome}</td>
        <td>${jogador.selecao.estatisticas.jogos}</td>
        <td>${jogador.selecao.estatisticas.gols}</td>
        <td>${jogador.selecao.estatisticas.assistencias}</td>
      </tr>`;
  }

  const totais = jogador.clubes.reduce(
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

  // Adicionar uma linha com os totais
  html += `
    <tr>
        <td><strong>Total</strong></td>
        <td>${totais.jogos}</td>
        <td>${totais.gols}</td>
        <td>${totais.assistencias}</td>
    </tr>
`;

  html += "</tbody></table>";
  return html;
}

function semResultados(jogador) {
  const tabelaTitulosIndividuais = criarTabelaTitulosIndividuais(jogador);
  const tabelaTitulosPorEquipe = criarTabelaTitulosPorEquipe(jogador);
  const tabelaEstatisticas = gerarTabelaEstatisticas(jogador);

  if (
    !jogador.clubes ||
    (jogador.clubes.length === 0 && !jogador.titulos) ||
    jogador.titulos.length === 0
  ) {
    return "<p>Nenhuma conquista encontrada para este jogador.</p>";
  } else {
    return (innerHTML = `<div class="tabelas-left">
    ${tabelaEstatisticas}
    ${tabelaTitulosIndividuais}
  </div>
  <div class="tabelas-right">
    ${tabelaTitulosPorEquipe}
  </div>`);
  }
}

// FUNÇÃO PESQUISAR ------------------------------------------------------------------------------------------------------

function pesquisar() {
  const termoPesquisa = document
    .getElementById("campo-pesquisa")
    .value.toLowerCase();

  const scroll = document.getElementsByClassName("div-resultados");

  if (scroll.length > 0) {
    scroll[0].style.width = "90vw";
  }

  const resultadosDiv = document.getElementById("resultados-pesquisa");

  const resultados = jogadores.filter((jogador) => {
    const clubeAtual = jogador.clubes[jogador.clubes.length - 1];
    return (
      jogador.nome.toLowerCase().includes(termoPesquisa) ||
      jogador.posicao.toLowerCase().includes(termoPesquisa) ||
      jogador.nacionalidade.toLowerCase().includes(termoPesquisa) ||
      jogador.background.toLowerCase().includes(termoPesquisa) ||
      (clubeAtual &&
        clubeAtual.nome &&
        clubeAtual.nome.toLowerCase().includes(termoPesquisa)) ||
      (jogador.tags &&
        jogador.tags.some((tag) => tag.toLowerCase().includes(termoPesquisa)))
    );
  });

  if (resultados.length === 0) {
    resultadosDiv.innerHTML =
      "<p class='sem-resultados'>Nada foi encontrado para o termo: " +
      termoPesquisa +
      "</p>";
  } else {
    let html = "";
    resultados.forEach((jogador) => {
      jogador.idade = calcularIdade(
        jogador.dataNascimento,
        jogador.dataFalecimento
      );
      jogador = calcularPeriodoAtividade(jogador);

      html += `
      <div class="jogador" id="${jogador.background}">
        <div class="div-superior">
          <div class="div-left">
            <img class="dado-imagem" src="${jogador.imagem}" alt="">
            <img class="dado_imgMarca" src="./assets/img__players/Logo_${jogador.nome.replace(
              / /g,
              "_"
            )}.png" alt="">
          </div>
          <div class="div-info">
            <div class="numero-nome-nacionalidade">
              <h2 class="numero" >${jogador.numero}</h2>
<a href="${jogador.pagina}" target="_blank"><h2 id="nome">${
        jogador.nome
      } </h2></a>
              <img class="nacionalidade" src="./assets/img__equipes/Logo_${jogador.nacionalidade.replace(
                / /g,
                "_"
              )}.png" alt="${jogador.alt}">
            </div>
            <h3>Status</h3>
            <p id="info">${jogador.status}</p>
            <h3>Principais Clubes</h3>
            ${gerarTabelaClubes(jogador)}
            <h3>Posição</h3>
            <p id="info">${jogador.posicao}</p>
            <h3>Nascimento</h3>
            <p id="info">${jogador.dataNascimento}  (${jogador.idade})</p>
            <h3>Sobre</h3>
            <p class="descricao-meta">${jogador.descricao}</p>
          </div>
        </div>
          <button class="mostrar-esconder">Mostrar mais<span class="fa-solid fa-chevron-down"></span></button>
          <div class="conteudo-oculto" style="display: none; justify-content: center;">
          ${semResultados(jogador)}
          </div>
        </div>
      `;
    });

    resultadosDiv.innerHTML = html;

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
  }
}
