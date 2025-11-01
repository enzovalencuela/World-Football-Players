import { createClub } from "@/utils/JogadorUtils";
import { clubes } from "./clubes";

export const jogadores = [
  // ALEMANHA -------------------------------------------------------------------------------------------------------------------------------------------------------

  // Franz Beckenbauer
  {
    nome: "Franz Beckenbauer",
    background: "gold",
    descricao:
      "Considerado um dos maiores defensores de todos os tempos, Franz Beckenbauer era conhecido por sua elegância, visão de jogo e habilidade com a bola. Campeão mundial como jogador e técnico pela Alemanha, ele revolucionou a posição de líbero.",
    pagina: "https://www.instagram.com/franzbeckenbauer/",
    numero: "5",
    posicao: "Líbero",
    dataNascimento: "11/09/1945",
    dataFalecimento: "07/01/2024",
    status: "Aposentado",
    nacionalidade: "Alemanha",
    imagem:
      "https://media.gettyimages.com/id/515112048/pt/foto/franz-beckenbauer-member-of-the-west-german-soccer-team-who-later-signed-a-contract-with-the.jpg?s=612x612&w=gi&k=20&c=q2J4CPgEmczTCygNfNHfj78i4OMv0gujtBk1kgFZEh4=",
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
      // Individuais
      {
        nome: "Bola de Ouro",
        anos: "1972, 1976",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "Futebolista Alemão do Ano",
        logo: "Verband Deutscher Sportjournalisten",
        anos: "1966, 1968, 1974 e 1976",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "Seleção da Bundesliga",
        logo: "Campeonato Alemão",
        anos: "1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973 1974, 1975, 1976, 1977",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "Melhor jogador jovem da Copa do Mundo",
        logo: "Copa do Mundo",
        anos: "1966",
        clube: "individual",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Bola de Bronze da Copa do Mundo",
        logo: "Copa do Mundo",
        anos: "1966",
        clube: "individual",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Equipe das estrelas da Copa do Mundo",
        logo: "Copa do Mundo",
        anos: "1966",
        clube: "individual",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "FIFA XI",
        logo: "FIFA",
        anos: "1968",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "Equipe das estrelas da Copa do Mundo",
        logo: "Copa do Mundo",
        anos: "1970",
        clube: "individual",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Equipe das Estrelas da Eurocopa",
        logo: "UEFA",
        anos: "1972",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "Bola de Prata da Copa do Mundo",
        logo: "Copa do Mundo",
        anos: "1974",
        clube: "individual",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Equipe das estrelas da Copa do Mundo",
        logo: "Copa do Mundo",
        anos: "1974",
        clube: "individual",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Equipe das Estrelas da Eurocopa",
        logo: "UEFA",
        anos: "1976",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "Seleção de Futebol do Século XX",
        logo: "Placar",
        anos: "1981",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "Ordem de Mérito",
        logo: "FIFA",
        anos: "1984",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "Seleção de Futebol do Século XX",
        logo: "Italian FA",
        anos: "1988",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "Seleção de Todos os Tempos da Copa do Mundo",
        logo: "FIFA",
        anos: "1994",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "Seleção de Futebol do Século XX",
        logo: "Voetbal International",
        anos: "1999",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "3º Melhor futebolista do século",
        logo: "IFFHS",
        anos: "2000",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "Seleção de Futebol do Século XX",
        logo: "Jornal A Tarde",
        anos: "2004",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "FIFA 100",
        anos: "2004",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "Golden Foot Award",
        anos: "2010",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "Melhor onze de todos os tempos",
        logo: "World Soccer",
        anos: "2013",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "Melhor equipe de todos os tempos da Eurocopa",
        logo: "UEFA",
        anos: "2016",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "Hall da Fama do Futebol Alemão",
        logo: "Federação Alemã de Futebol",
        anos: "2020",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "Melhor onze do Bayern de Munique",
        logo: "individual",
        anos: "2020",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "Bola de Ouro Dream Team: Melhor Zagueiro da História",
        logo: "France Football",
        anos: "2020",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "11Leyendas",
        logo: "Jornal AS",
        anos: "2021",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "All Time World Men's Dream Team",
        logo: "IFFHS",
        anos: "2021",
        clube: "individual",
        categoria: "individual",
      },

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
        nome: "Campeonato Alemão",
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
        nome: "Campeonato Alemão",
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
    ultima_atualizacao: "28/10/25",
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
      "https://i.guim.co.uk/img/media/2a9435926d21f60ae6eba37043d0596482133ddc/115_207_2133_1280/master/2133.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=e49cbb29f152aa026428013b85596377",
    numero: "9",
    posicao: "Atacante",
    dataNascimento: "03/11/1945",
    dataFalecimento: "15/08/2021",
    status: "Aposentado",
    ultima_atualizacao: "31/10/25",
    curiosidades:
      "Müller detém o recorde de gols em uma única temporada da Bundesliga (40 gols) e é o maior artilheiro da história da competição. Ele era conhecido como 'Der Bomber' (O Bombardeiro) por sua capacidade de marcar gols.",
    clubes: [
      createClub(
        "TSV 1861 Nördlingen",
        { inicio: "1963", fim: "1964" },
        { jogos: 50, gols: 73, assistencias: 0 }
      ),
      createClub(
        "Bayern de Munique",
        { inicio: "1964", fim: "1979" },
        { jogos: 605, gols: 576, assistencias: 99 }
      ),
      createClub(
        "Fort Lauderdale Strikers",
        { inicio: "1979", fim: "1982" },
        { jogos: 80, gols: 40, assistencias: 0 }
      ),
    ],
    selecao: {
      nome: "Alemanha",
      periodo: { inicio: "1966", fim: "1974" },
      estatisticas: { jogos: 62, gols: 68, assistencias: 3 },
    },

    titulos: [
      // Individuais
      {
        nome: "Bola de Ouro",
        anos: "1970",
        categoria: "individual",
      },
      {
        nome: "Futebolista Alemão do Ano",
        logo: "individual",
        anos: "1967, 1969",
        categoria: "individual",
      },
      {
        nome: "Equipe das Estrelas da Copa do Mundo",
        logo: "Copa do Mundo",
        anos: "1970",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Chuteira de Ouro da UEFA",
        logo: "Chuteira de Ouro",
        anos: "1970, 1972",
        categoria: "individual",
      },
      {
        nome: "Ordem de Mérito da FIFA",
        anos: "2000",
        categoria: "individual",
      },
      {
        nome: "FIFA 100",
        anos: "2004",
        categoria: "individual",
      },
      {
        nome: "IFFHS ALL TIME WORLD MEN'S DREAM TEAM (Time B)",
        logo: "IFFHS",
        anos: "2021",
        categoria: "individual",
      },
      {
        nome: "Artilheiro da Copa do Mundo",
        logo: "Copa do Mundo",
        anos: "1970",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Artilheiro da Eurocopa",
        logo: "Eurocopa",
        anos: "1972",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Artilheiro da Bundesliga",
        logo: "Campeonato Alemão",
        anos: "1967, 1969, 1970, 1972, 1973, 1974, 1978",
        categoria: "individual",
      },

      // Alemanha
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

      // Bayern de Munique
      {
        nome: "UEFA Champions League",
        anos: "1974, 1975, 1976",
        clube: "Bayern de Munique",
      },
      {
        nome: "Copa Intercontinental",
        anos: "1976",
        clube: "Bayern de Munique",
      },
      {
        nome: "Recopa Europeia",
        anos: "1967",
        clube: "Bayern de Munique",
      },
      {
        nome: "Campeonato Alemão",
        anos: "1969, 1972, 1973, 1974",
        clube: "Bayern de Munique",
      },
      {
        nome: "Copa da Alemanha",
        anos: "1966, 1967, 1969, 1971",
        clube: "Bayern de Munique",
      },
    ],
    tags: ["Der Bomber"],
  },

  // Jamal Musiala
  {
    nome: "Jamal Musiala",
    background: "default",
    descricao:
      "Jovem meia-atacante alemão, considerado uma das maiores revelações de sua geração. Conhecido por seu drible hipnotizante, controle de bola em espaços curtos ('Bambi') e capacidade de decidir jogos. Peça central no Bayern de Munique e na Seleção Alemã, onde já foi co-artilheiro da Eurocopa (2024).",
    pagina: "https://www.instagram.com/jamalmusiala10/",
    nacionalidade: "Alemanha",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/15/2024/11/09/musiala-do-bayern-comemora-gol-marcado-sobre-o-st-pauli-pelo-campeonato-alemao-1731172956821_v2_450x600.jpg",
    numero: "10",
    posicao: "Meia-atacante / Ponta",
    dataNascimento: "26/02/2003",
    status: "Ativo",
    clubes: [
      createClub(
        "Bayern de Munique II",
        { inicio: "2020", fim: "2021" },
        { jogos: 10, gols: 2, assistencias: 0 }
      ),
      createClub(
        "Bayern de Munique",
        { inicio: "2020", fim: "Atual" },
        { jogos: 207, gols: 64, assistencias: 31 }
      ),
    ],
    selecao: {
      nome: "Alemanha",
      periodo: { inicio: "2021", fim: "Atual" },
      estatisticas: { jogos: 40, gols: 8, assistencias: 0 },
    },
    titulos: [
      // Bayern de Munique
      {
        nome: "UEFA Champions League",
        anos: "2020",
        clube: "Bayern de Munique",
      },
      {
        nome: "Campeonato Alemão",
        anos: "2020, 2021, 2022, 2023, 2025",
        clube: "Bayern de Munique",
      },
      { nome: "Copa da Alemanha", anos: "2020", clube: "Bayern de Munique" },
      {
        nome: "Supercopa da Alemanha",
        anos: "2020, 2021, 2022, 2023",
        clube: "Bayern de Munique",
      },
      { nome: "Supercopa da UEFA", anos: "2020", clube: "Bayern de Munique" },
      { nome: "Mundial de Clubes", anos: "2020", clube: "Bayern de Munique" },
    ],
    tags: [
      "craque",
      "jovem",
      "alemanha",
      "bayern de munique",
      "drible",
      "euro 2024",
    ],
  },

  // Jerome Boateng
  {
    nome: "Jerome Boateng",
    background: "default",
    descricao:
      "Zagueiro alemão campeão da Copa do Mundo FIFA 2014 e um ícone do Bayern de Munique, onde conquistou duas Tríplices Coroas. Conhecido por sua força, visão de jogo e a habilidade de lançar a bola com precisão, foi considerado um dos melhores zagueiros do mundo em seu auge. Anunciou sua aposentadoria em setembro de 2025.",
    pagina: "https://www.instagram.com/jeromeboateng",
    nacionalidade: "Alemanha",
    imagem:
      "https://tmssl.akamaized.net/images/foto/galerie/jerome-boateng-olympique-lyon-2021-1631513447-70946.jpg",
    numero: "17",
    posicao: "Zagueiro",
    dataNascimento: "03/09/1988",
    status: "Aposentado",
    clubes: [
      createClub(
        "Hertha BSC",
        { inicio: "2006", fim: "2007" },
        { jogos: 11, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Hamburger SV",
        { inicio: "2007", fim: "2010" },
        { jogos: 113, gols: 1, assistencias: 9 }
      ),
      createClub(
        "Manchester City",
        { inicio: "2010", fim: "2011" },
        { jogos: 24, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Bayern de Munique",
        { inicio: "2011", fim: "2021" },
        { jogos: 363, gols: 10, assistencias: 25 }
      ),
      createClub(
        "Lyon",
        { inicio: "2021", fim: "2023" },
        { jogos: 35, gols: 0, assistencias: 2 }
      ),
      createClub(
        "Salernitana",
        { inicio: "2024", fim: "2024" },
        { jogos: 7, gols: 0, assistencias: 0 }
      ),
      createClub(
        "LASK",
        { inicio: "2024", fim: "2025" },
        { jogos: 14, gols: 0, assistencias: 0 }
      ),
    ],
    selecao: {
      nome: "Alemanha",
      periodo: { inicio: "2009", fim: "2018" },
      estatisticas: { jogos: 76, gols: 1, assistencias: 0 },
    },
    titulos: [
      // Seleção
      {
        nome: "Copa do Mundo",
        anos: "2014",
        clube: "Alemanha",
        logoVariavel: true,
      },
      {
        nome: "Euro Sub-21",
        anos: "2009",
        clube: "Alemanha",
        logoVariavel: true,
      },
      // Bayern de Munique
      {
        nome: "UEFA Champions League",
        anos: "2013, 2020",
        clube: "Bayern de Munique",
      },
      {
        nome: "Campeonato Alemão",
        anos: "2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021",
        clube: "Bayern de Munique",
      },
      {
        nome: "Copa da Alemanha",
        anos: "2013, 2014, 2016, 2019, 2020",
        clube: "Bayern de Munique",
      },
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
        nome: "Supercopa da Alemanha",
        anos: "2012, 2013, 2014, 2016, 2017, 2018, 2020",
        clube: "Bayern de Munique",
      },
      // Manchester City
      { nome: "Copa da Inglaterra", anos: "2011", clube: "Manchester City" },
    ],
    tags: [
      "lenda",
      "alemanha",
      "bayern de munique",
      "zagueiro",
      "campeão mundial",
      "aposentado",
    ],
  },

  // Julian Draxler
  {
    nome: "Julian Draxler",
    background: "default",
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
        nome: "Campeonato Francês",
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
    tags: ["Paris Saint-Germain", "PSG"],
  },

  //Marco Reus
  {
    nome: "Marco Reus",
    background: "titanium",
    imagem:
      "https://s3-images.sportnews.bz/_images/fit/1000x563/img/2024/12/marco-reus-im-trikot-von-los-angeles-galaxy.jpg",
    pagina: "https://www.instagram.com/marcinho11/",
    descricao:
      "Meio-campista ofensivo alemão, ícone e ex-capitão do Borussia Dortmund, reverenciado por sua velocidade, dribles precisos, inteligência tática, e uma incrível capacidade de marcar gols e dar assistências. Apesar das lesões que marcaram sua carreira, Reus é amplamente considerado um dos jogadores mais talentosos de sua geração na Alemanha, um verdadeiro 'Fussballgott' para os torcedores do BVB.",
    numero: "18",
    posicao: "Meia Ofensivo",
    nacionalidade: "Alemanha",
    dataNascimento: "31/05/1989",
    status: "Ativo",
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
        logo: "Campeonato Alemão",
        anos: "2011-12, 2013-14, 2015-16, 2018-19",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Time do Ano da Bundesliga",
        logo: "Campeonato Alemão",
        anos: "2011-12, 2013-14, 2014-15, 2015-16, 2018-19",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Jogador do Mês da Bundesliga",
        logo: "Campeonato Alemão",
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

  // Michael Ballack
  {
    nome: "Michael Ballack",
    background: "diamond",
    descricao:
      "Meio-campista alemão conhecido por sua força física, visão de jogo e chutes potentes. Ballack foi um dos principais jogadores da seleção alemã e de clubes como Bayer Leverkusen, Bayern de Munique e Chelsea. É frequentemente lembrado por sua liderança e talento no meio-campo.",
    pagina: "https://www.instagram.com/michaelballackofficial/",
    numero: "13",
    posicao: "Meio-campista",
    dataNascimento: "26/09/1976",
    status: "Aposentado",
    nacionalidade: "Alemanha",
    imagem:
      "https://www.n-tv.de/img/1315106-1282296651000/3-4/750/2010-08-19T175400Z-01-LEV12-RTRMDNP-3-SOCCER-EUROPA.jpg",
    clubes: [
      createClub(
        "Chemnitzer",
        { inicio: "1995", fim: "1997" },
        { jogos: 51, gols: 10, assistencias: 0 }
      ),
      createClub(
        "Kaiserslautern",
        { inicio: "1997", fim: "1999" },
        { jogos: 57, gols: 4, assistencias: 0 }
      ),
      createClub(
        "Bayer Leverkusen",
        { inicio: "1999", fim: "2002" },
        { jogos: 107, gols: 37, assistencias: 10 }
      ),
      createClub(
        "Bayern de Munique",
        { inicio: "2002", fim: "2006" },
        { jogos: 157, gols: 62, assistencias: 40 }
      ),
      createClub(
        "Chelsea",
        { inicio: "2006", fim: "2010" },
        { jogos: 167, gols: 26, assistencias: 21 }
      ),
      createClub(
        "Bayer Leverkusen",
        { inicio: "2010", fim: "2012" },
        { jogos: 35, gols: 1, assistencias: 3 }
      ),
    ],
    selecao: {
      nome: "Alemanha",
      periodo: { inicio: "1999", fim: "2010" },
      estatisticas: { jogos: 98, gols: 42, assistencias: 20 },
    },
    titulos: [
      // Kaiserslautern
      {
        nome: "Campeonato Alemão",
        anos: "1998",
        clube: "Kaiserslautern",
      },

      // Bayern de Munique
      {
        nome: "Campeonato Alemão",
        anos: "2003, 2005, 2006",
        clube: "Bayern de Munique",
      },
      {
        nome: "Copa da Alemanha",
        anos: "2003, 2005, 2006",
        clube: "Bayern de Munique",
      },
      {
        nome: "Copa da Liga Alemã",
        anos: "2004",
        clube: "Bayern de Munique",
      },

      // Chelsea
      {
        nome: "Campeonato Inglês",
        anos: "2010",
        clube: "Chelsea",
      },
      {
        nome: "Copa da Inglaterra",
        anos: "2007, 2009, 2010",
        clube: "Chelsea",
      },
      {
        nome: "Copa da Liga Inglesa",
        anos: "2007",
        clube: "Chelsea",
      },
      {
        nome: "Supercopa da Inglaterra",
        anos: "2009",
        clube: "Chelsea",
      },

      // Individuais
      {
        nome: "Futebolista Alemão do Ano",
        logo: "Federação Alemã de Futebol",
        anos: "2002, 2003, 2005",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Melhor Meio-Campista da UEFA",
        logo: "UEFA",
        anos: "2002",
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
        nome: "Equipe do Ano da UEFA",
        logo: "UEFA",
        anos: "2002",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Bola de Prata da Copa do Mundo",
        logo: "Copa do Mundo",
        anos: "2002",
        clube: "Individual",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Equipe das Estrelas da Copa do Mundo",
        logo: "Copa do Mundo",
        anos: "2002",
        clube: "Individual",
        categoria: "individual",
        logoVariavel: true,
      },
    ],
    tags: ["Ballack", "Balack", "Michael"],
    ultima_atualizacao: "28/10/25",
  },

  // Niclas Füllkrug
  {
    nome: "Niclas Füllkrug",
    background: "default",
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
    background: "diamond",
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
        nome: "Campeonato Alemão",
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
    background: "diamond",
    descricao:
      "Um dos maiores meio-campistas da história, Schweinsteiger era conhecido por sua visão de jogo e liderança. Foi campeão do mundo em 2014 com a Alemanha.",
    pagina: "https://www.instagram.com/bastianschweinsteiger/",
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
    background: "titanium",
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
    background: "diamond",
    descricao:
      "Atacante/Meia-atacante alemão, conhecido por sua inteligência tática única, que ele mesmo apelidou de 'Raumdeuter' (intérprete de espaços). Müller é um dos jogadores mais vitoriosos da história do futebol, um ícone do Bayern de Munique e parte essencial da Seleção Alemã campeã mundial em 2014. Sua versatilidade, longevidade e capacidade de encontrar espaços vazios o tornam único.",
    pagina: "https://www.instagram.com/esmuellert/",
    nacionalidade: "Alemanha",
    imagem:
      "https://noticiasdointernacional.com.br/wp-content/uploads/2025/04/Thomas-Muller-e1744820907177.jpg",
    numero: "25",
    posicao: "Meia-atacante/Segundo Atacante",
    dataNascimento: "13/09/1989",
    status: "Ativo",
    curiosidades:
      "Müller detém o recorde de mais títulos da Bundesliga vencidos por um jogador (12). Ele também venceu a Chuteira de Ouro e o prêmio de Melhor Jogador Jovem na Copa do Mundo de 2010. É o maior assistente da história da Bundesliga.",
    clubes: [
      createClub(
        "Bayern de Munique II",
        { inicio: "2008", fim: "2009" },
        { jogos: 35, gols: 16, assistencias: 4 }
      ),
      createClub(
        "Bayern de Munique",
        { inicio: "2008", fim: "Presente" },
        { jogos: 750, gols: 270, assistencias: 300 }
      ),
    ],
    selecao: {
      nome: "Alemanha",
      periodo: { inicio: "2010", fim: "Presente" },
      estatisticas: { jogos: 135, gols: 45, assistencias: 40 },
    },
    titulos: [
      // Seleção Alemã
      {
        nome: "Copa do Mundo",
        anos: "2014",
        clube: "Alemanha",
        logoVariavel: true,
      },

      // Bayern de Munique
      {
        nome: "Campeonato Alemão",
        anos: "2010, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023",
        clube: "Bayern de Munique",
      },
      {
        nome: "UEFA Champions League",
        anos: "2013, 2020",
        clube: "Bayern de Munique",
      },
      {
        nome: "Copa da Alemanha",
        anos: "2010, 2013, 2014, 2016, 2019, 2020",
        clube: "Bayern de Munique",
      },
      {
        nome: "Mundial de Clubes",
        anos: "2013, 2021",
        clube: "Bayern de Munique",
      },
      {
        nome: "Supercopa da UEFA",
        anos: "2013, 2020",
        clube: "Bayern de Munique",
      },

      // Individuais
      {
        nome: "Chuteira de Ouro da Copa do Mundo",
        logo: "Copa do Mundo",
        anos: "2010",
        clube: "Individual",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Melhor Jogador Jovem da Copa do Mundo",
        logo: "Copa do Mundo",
        anos: "2010",
        clube: "Individual",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Melhor Jogador da Bundesliga",
        logo: "Campeonato Alemão",
        anos: "2010",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Time do Ano da UEFA",
        logo: "UEFA",
        anos: "2013",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Equipe do Ano da FIFA FIFPro World XI",
        logo: "FIFPro",
        anos: "2014",
        clube: "Individual",
        categoria: "individual",
      },
    ],
    tags: ["Thomas Müller", "TM25", "Raumdeuter"],
    ultima_atualizacao: "28/10/25",
  },
  // Toni Kroos
  {
    nome: "Toni Kroos",
    background: "diamond",
    descricao:
      "Meio-campista alemão considerado um dos melhores da história na sua posição, notável pela sua visão de jogo, controle de ritmo e a precisão lendária dos seus passes (com uma média de acerto consistentemente acima de 90%). Foi peça chave nas eras de sucesso do Bayern de Munique e do Real Madrid, além de Campeão do Mundo com a Alemanha. Encerrou a carreira em julho de 2024.",
    pagina: "https://www.instagram.com/toni.kroos/",
    nacionalidade: "Alemanha",
    imagem:
      "https://cdn-thegame.imago-images.com/wp-content/uploads/imago1045901715h-860x1149.jpg",
    numero: "8",
    posicao: "Meio-Campista",
    dataNascimento: "04/01/1990",
    status: "Aposentado",
    clubes: [
      createClub(
        "Bayern de Munique",
        { inicio: "2007", fim: "2014" },
        { jogos: 130, gols: 13, assistencias: 29 }
      ),
      createClub(
        "Bayer Leverkusen",
        { inicio: "2009", fim: "2010" },
        { jogos: 43, gols: 10, assistencias: 13 }
      ),
      createClub(
        "Real Madrid",
        { inicio: "2014", fim: "2024" },
        { jogos: 465, gols: 28, assistencias: 98 }
      ),
    ],
    selecao: {
      nome: "Alemanha",
      periodo: { inicio: "2010", fim: "2024" },
      estatisticas: { jogos: 114, gols: 17, assistencias: 19 },
    },
    titulos: [
      // Seleção
      {
        nome: "Copa do Mundo",
        anos: "2014",
        clube: "Alemanha",
        logoVariavel: true,
      },
      // Real Madrid
      {
        nome: "UEFA Champions League",
        anos: "2016, 2017, 2018, 2022, 2024",
        clube: "Real Madrid",
      },
      {
        nome: "Mundial de Clubes",
        anos: "2014, 2016, 2017, 2018, 2022",
        clube: "Real Madrid",
      },
      {
        nome: "Campeonato Espanhol",
        anos: "2017, 2020, 2022, 2024",
        clube: "Real Madrid",
      },
      {
        nome: "Supercopa da UEFA",
        anos: "2014, 2016, 2017, 2022",
        clube: "Real Madrid",
      },
      {
        nome: "Supercopa da Espanha",
        anos: "2017, 2020, 2022, 2024",
        clube: "Real Madrid",
      },
      { nome: "Copa do Rei", anos: "2023", clube: "Real Madrid" },
      // Bayern de Munique
      {
        nome: "UEFA Champions League",
        anos: "2013",
        clube: "Bayern de Munique",
      },
      {
        nome: "Campeonato Alemão",
        anos: "2008, 2013, 2014",
        clube: "Bayern de Munique",
      },
      {
        nome: "Copa da Alemanha",
        anos: "2008, 2013, 2014",
        clube: "Bayern de Munique",
      },
      { nome: "Mundial de Clubes", anos: "2013", clube: "Bayern de Munique" },
      { nome: "Supercopa da UEFA", anos: "2013", clube: "Bayern de Munique" },
      {
        nome: "Supercopa da Alemanha",
        anos: "2010, 2012",
        clube: "Bayern de Munique",
      },
    ],
    tags: [
      "lenda",
      "real madrid",
      "bayern de munique",
      "meio-campista",
      "campeão mundial",
      "aposentado",
      "6 champions",
    ],
  },

  // ARGENTINA -------------------------------------------------------------------------------------------------------------------------------------------------------

  //Agustin Rossi
  {
    nome: "Agustin Rossi",
    background: "default",
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

  // Alejandro Garnacho Ferreyra
  {
    nome: "Alejandro Garnacho",
    background: "promise",
    descricao:
      "Jovem ponta hispano-argentino, conhecido por sua velocidade e habilidade no drible. Revelado pelo Atlético de Madrid e profissionalizado no Manchester United, transferiu-se para o Chelsea em 2025 em busca de mais espaço.",
    pagina: "https://www.instagram.com/garnacho7/",
    nacionalidade: "Argentina",
    imagem:
      "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2025%2F0918%2Fr1547315_1296x729_16%2D9.jpg",
    numero: "49",
    posicao: "Ponta-Esquerda",
    dataNascimento: "01/07/2004",
    status: "Ativo",
    clubes: [
      createClub(
        "Manchester United",
        { inicio: "2022", fim: "2025" },
        { jogos: 93, gols: 16, assistencias: 0 }
      ),
      createClub(
        "Chelsea",
        { inicio: "2025", fim: "Atual" },
        { jogos: 7, gols: 1, assistencias: 0 }
      ),
    ],
    selecao: {
      nome: "Argentina",
      periodo: { inicio: "2023", fim: "Atual" },
      estatisticas: { jogos: 8, gols: 0, assistencias: 0 },
      participacoes: ["Copa América (2024 - Vencedor)"],
    },
    titulos: [
      // Seleção
      {
        nome: "Copa América",
        anos: "2024",
        clube: "Argentina",
        logoVariavel: true,
      },

      // Manchester United
      {
        nome: "FA Youth Cup Sub-18",
        logo: "FA Youth Cup",
        anos: "2022",
        clube: "Manchester United",
      },
      {
        nome: "Copa da Liga Inglesa",
        anos: "2023",
        clube: "Manchester United",
      },
    ],
    tags: ["Garnacho", "Alejandro Garnacho", "Alejandro Garnacho Ferreyra"],
    ultima_atualizacao: "29/10/25",
  },

  // Ángel Di María
  {
    nome: "Ángel Di María",
    background: "diamond",
    descricao:
      "Extremo veloz e habilidoso, conhecido por suas arrancadas, cruzamentos precisos e por ser um 'jogador de finais', marcando gols decisivos em grandes jogos. Foi fundamental nas conquistas da Copa do Mundo de 2022, da Copa América de 2021 e da Liga dos Campeões com o Real Madrid.",
    pagina: "https://www.instagram.com/angeldimariajm/",
    nacionalidade: "Argentina",
    imagem:
      "https://conteudo.imguol.com.br/c/galeria/0f/2022/12/18/di-maria-celebra-seu-gol-sobre-a-franca-na-final-da-copa-1671379257343_v2_450x600.jpg",
    numero: "11",
    posicao: "Ponta-Direita",
    dataNascimento: "14/02/1988",
    status: "Ativo",
    curiosidades:
      "Di María é um dos poucos jogadores na história a marcar gols em uma final de Copa do Mundo, final de Copa América e final de Jogos Olímpicos. O gol que deu a Décima Champions ao Real Madrid em 2014 saiu de uma jogada sua.",
    clubes: [
      createClub(
        "Benfica",
        { inicio: "2007", fim: "2010" },
        { jogos: 119, gols: 15, assistencias: 28 }
      ),
      createClub(
        "Real Madrid",
        { inicio: "2010", fim: "2014" },
        { jogos: 190, gols: 36, assistencias: 84 }
      ),
      createClub(
        "Paris Saint-Germain",
        { inicio: "2015", fim: "2022" },
        { jogos: 295, gols: 93, assistencias: 119 }
      ),
      createClub(
        "Benfica",
        { inicio: "2023", fim: "Presente" },
        { jogos: 80, gols: 25, assistencias: 20 }
      ),
    ],
    selecao: {
      nome: "Argentina",
      periodo: { inicio: "2008", fim: "Presente" },
      estatisticas: { jogos: 136, gols: 30, assistencias: 40 },
    },
    titulos: [
      // Seleção Argentina
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

      // Real Madrid
      {
        nome: "UEFA Champions League",
        anos: "2014",
        clube: "Real Madrid",
      },
      {
        nome: "Campeonato Espanhol",
        anos: "2012",
        clube: "Real Madrid",
      },

      // Paris Saint-Germain
      {
        nome: "Campeonato Francês",
        anos: "2016, 2018, 2019, 2020, 2022",
        clube: "Paris Saint-Germain",
      },
      {
        nome: "Copa da França",
        anos: "2016, 2017, 2018, 2020, 2021",
        clube: "Paris Saint-Germain",
      },

      // Benfica
      {
        nome: "Campeonato Português",
        anos: "2010, 2024",
        clube: "Benfica",
      },
    ],
    tags: ["Di María", "Argentina", "PSG", "Fideo", "AD11"],
    ultima_atualizacao: "27/10/25",
  },

  // Carlos Alcaraz
  {
    nome: "Carlos Alcaraz",
    background: "default",
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
    background: "default",
    descricao:
      "Considerado um dos maiores atacantes argentinos da sua geração, Carlos Tévez é conhecido por sua força física, dribles e gols decisivos. Tendo jogado por grandes clubes como Boca Juniors, Manchester United e Juventus, conquistou diversos títulos e se tornou um ídolo da torcida.",
    pagina: "https://www.instagram.com/__carlitostevez/",
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
      "Considerado um dos maiores jogadores de todos os tempos, Maradona era conhecido por sua habilidade inigualável, dribles desconcertantes, visão de jogo e liderança. Foi o grande ídolo da Argentina na conquista da Copa do Mundo de 1986 e o maior nome da história do Napoli.",
    pagina: "https://www.instagram.com/maradona/",
    nacionalidade: "Argentina",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Maradona-Mundial_86_con_la_copa.JPG/330px-Maradona-Mundial_86_con_la_copa.JPG",
    numero: "10",
    posicao: "Meia-atacante",
    dataNascimento: "30/10/1960",
    dataFalecimento: "25/11/2020",
    status: "Aposentado",
    curiosidades:
      "Maradona é um ícone do futebol argentino e mundial, sendo lembrado por seus gols históricos, como o 'Gol do Século' e o 'Mão de Deus', ambos na Copa de 1986. Seu número 10 foi aposentado pelo Napoli em sua homenagem.",
    clubes: [
      createClub(
        "Argentinos Juniors",
        { inicio: "1976", fim: "1981" },
        { jogos: 167, gols: 116, assistencias: 0 }
      ),
      createClub(
        "Boca Juniors",
        { inicio: "1981", fim: "1982" },
        { jogos: 40, gols: 28, assistencias: 0 }
      ),
      createClub(
        "Barcelona",
        { inicio: "1982", fim: "1984" },
        { jogos: 58, gols: 38, assistencias: 0 }
      ),
      createClub(
        "Napoli",
        { inicio: "1984", fim: "1991" },
        { jogos: 259, gols: 115, assistencias: 0 }
      ),
      createClub(
        "Sevilla",
        { inicio: "1992", fim: "1993" },
        { jogos: 29, gols: 8, assistencias: 0 }
      ),
      createClub(
        "Boca Juniors",
        { inicio: "1995", fim: "1997" },
        { jogos: 30, gols: 5, assistencias: 0 }
      ),
    ],
    selecao: {
      nome: "Argentina",
      periodo: { inicio: "1977", fim: "1994" },
      estatisticas: { jogos: 91, gols: 34, assistencias: 0 },
    },
    titulos: [
      // Individuais
      {
        nome: "FIFA 100",
        anos: "2004",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "Bola de Ouro da Copa do Mundo",
        logo: "Copa do Mundo",
        anos: "1986",
        clube: "individual",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "All-Star Team da Copa do Mundo",
        logo: "Copa do Mundo",
        anos: "1986",
        clube: "individual",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "All-Star Team da Copa do Mundo",
        logo: "Copa do Mundo",
        anos: "1990",
        clube: "individual",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Melhor Jogador do Mundo",
        logo: "Guerin Sportivo",
        anos: "1979, 1986, 1987",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "Melhor Jogador do Mundo",
        logo: "World Soccer",
        anos: "1986",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "Onze d'Or",
        anos: "1986, 1987",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "Guerin d'Oro",
        logo: "Guerin Sportivo",
        anos: "1986, 1987",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "Rei da América",
        logo: "El Mundo",
        anos: "1979, 1980",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "Melhor Jogador Argentino do Ano",
        logo: "individual",
        anos: "1979, 1980, 1981, 1986",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "Bola de Bronze da Copa do Mundo",
        logo: "Copa do Mundo",
        anos: "1990",
        clube: "individual",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "2.º Maior jogador Sulamericano do século XX",
        logo: "IFFHS",
        anos: "1999",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "2.º Maior jogador do século XX",
        logo: "France Football",
        anos: "1999",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "Melhor Jogador do Século XX (votos de internautas)",
        logo: "FIFA",
        anos: "2000",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "3.º Maior Jogador do Século XX pelo Grande Júri FIFA",
        logo: "FIFA",
        anos: "2000",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "Time dos Sonhos da FIFA",
        logo: "FIFA",
        anos: "2002",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "Seleção Argentina de Todos os Tempos",
        logo: "AFA",
        anos: "2016",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "Melhor Jogador da Historia",
        logo: "Four Four Two",
        anos: "2017",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "Melhor jogador das Copas do Mundo",
        logo: "Four Four Two",
        anos: "2018",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "Onze ideal histórico das Copas América",
        logo: "CONMEBOL",
        anos: "2019",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "Bola de Ouro Dream Team: Melhor Meio-campista Ofensivo da História",
        logo: "France Football",
        anos: "2020",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "11Leyendas",
        logo: "Jornal AS",
        anos: "2021",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "IFFHS ALL TIME WORLD MEN'S DREAM TEAM",
        logo: "IFFHS",
        anos: "2021",
        clube: "individual",
        categoria: "individual",
      },

      // Seleção Argentina
      {
        nome: "Copa do Mundo",
        anos: "1986",
        clube: "Argentina",
        logoVariavel: true,
      },
      {
        nome: "Finalíssima",
        anos: "1993",
        clube: "Argentina",
      },

      // Napoli
      {
        nome: "Campeonato Italiano",
        anos: "1987, 1990",
        clube: "Napoli",
      },
      {
        nome: "Copa da Itália",
        anos: "1987",
        clube: "Napoli",
      },
      {
        nome: "Copa da UEFA",
        anos: "1989",
        clube: "Napoli",
      },
      {
        nome: "Supercopa da Itália",
        anos: "1990",
        clube: "Napoli",
      },

      // Barcelona
      {
        nome: "Copa do Rei",
        anos: "1983",
        clube: "Barcelona",
      },
      {
        nome: "Copa da Liga Espanhola",
        anos: "1983",
        clube: "Barcelona",
      },
      {
        nome: "Supercopa da Espanha",
        anos: "1983",
        clube: "Barcelona",
      },

      // Boca Juniors
      {
        nome: "Campeonato Argentino",
        anos: "1981",
        clube: "Boca Juniors",
      },
    ],
    tags: ["Maradona", "D10S", "El Pibe de Oro"],
    ultima_atualizacao: "28/10/25",
  },

  // Enzo Fernández
  {
    nome: "Enzo Fernández",
    background: "default",
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
    background: "default",
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
    background: "default",
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
    background: "diamond",
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
    nome: "Juan Román Riquelme",
    background: "diamond",
    descricao:
      "O 'Último Camisa 10' e maior ídolo do Boca Juniors no século XXI. Riquelme foi um meio-campista clássico (enganche), notável por sua visão de jogo, passes geniais e gols de falta. Conduziu o Boca a três Libertadores e um Mundial, além de conquistar o Ouro Olímpico com a Argentina.",
    pagina: "https://www.instagram.com/juanromanriquelme/",
    numero: "10",
    posicao: "Meia Ofensivo",
    dataNascimento: "24/06/1978",
    status: "Aposentado",
    nacionalidade: "Argentina",
    imagem:
      "https://i.pinimg.com/736x/65/be/d6/65bed6b8bb977794e0819c21b9f7b702.jpg",
    clubes: [
      createClub(
        "Boca Juniors",
        { inicio: "1996", fim: "2002" },
        { jogos: 194, gols: 44, assistencias: 81 }
      ),
      createClub(
        "Barcelona",
        { inicio: "2002", fim: "2003" },
        { jogos: 42, gols: 6, assistencias: 7 }
      ),
      createClub(
        "Villarreal",
        { inicio: "2003", fim: "2007" },
        { jogos: 145, gols: 45, assistencias: 59 }
      ),
      createClub(
        "Boca Juniors",
        { inicio: "2007", fim: "2014" },
        { jogos: 233, gols: 55, assistencias: 64 }
      ),
      createClub(
        "Argentinos Juniors",
        { inicio: "2014", fim: "2015" },
        { jogos: 18, gols: 5, assistencias: 1 }
      ),
    ],
    selecao: {
      nome: "Argentina",
      periodo: { inicio: "1997", fim: "2008" },
      estatisticas: { jogos: 51, gols: 17, assistencias: 14 },
    },
    titulos: [
      // Boca Juniors
      {
        nome: "Copa Libertadores",
        anos: "2000, 2001, 2007",
        clube: "Boca Juniors",
      },
      {
        nome: "Copa Intercontinental",
        anos: "2000",
        clube: "Boca Juniors",
      },
      {
        nome: "Campeonato Argentino",
        anos: "1998, 1999, 2000, 2008, 2011",
        clube: "Boca Juniors",
      },
      {
        nome: "Recopa Sul-Americana",
        anos: "2008",
        clube: "Boca Juniors",
      },
      {
        nome: "Copa Argentina",
        anos: "2012",
        clube: "Boca Juniors",
      },

      // Villarreal
      {
        nome: "Copa Intertoto da UEFA",
        anos: "2004",
        clube: "Villarreal",
      },

      // Seleção Argentina
      {
        nome: "Jogos Olímpicos",
        anos: "2008",
        clube: "Argentina",
        logoVariavel: true,
      },
      {
        nome: "Copa do Mundo Sub-20",
        anos: "1997",
        clube: "Argentina",
        logoVariavel: true,
      },
      {
        nome: "Campeonato Sul-Americano Sub-20",
        anos: "1997",
        clube: "Argentina",
        logoVariavel: true,
      },

      // Individuais
      {
        nome: "Futebolista Sul-Americano do Ano",
        logo: "El País",
        anos: "2001",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Melhor Jogador da Copa Libertadores",
        logo: "Copa Libertadores",
        anos: "2000, 2001, 2007",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Jogador Argentino do Ano",
        logo: "Associação de Jornalistas da Argentina",
        anos: "2000, 2001, 2008, 2011",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Melhor Jogador da Liga Espanhola",
        logo: "Marca",
        anos: "2004/05",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Bola de Prata da Copa das Confederações",
        logo: "Copa das Confederações",
        anos: "2005",
        clube: "Individual",
        categoria: "individual",
        logoVariavel: true,
      },
    ],
    tags: ["Riquelme", "Enganche", "Último 10"],
    ultima_atualizacao: "28/10/25",
  },

  // Julián Álvarez
  {
    nome: "Julián Álvarez",
    background: "default",
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
    background: "titanium",
    imagem:
      "https://tntsports.com.br/__export/1708455600218/sites/esporteinterativo/img/2024/02/20/lautaro_martxnez.jpg_1586065124.jpg",
    pagina: "https://www.instagram.com/lautaromartinez/",
    descricao:
      "Centroavante argentino e capitão da Inter de Milão, conhecido por sua agilidade, força, faro de gol e capacidade de jogar em diversas situações de ataque. Martínez é uma peça fundamental tanto para a Inter de Milão, onde se tornou um dos maiores artilheiros, quanto para a seleção argentina, com quem conquistou a Copa América e a Copa do Mundo.",
    numero: "10",
    posicao: "Centroavante",
    nacionalidade: "Argentina",
    dataNascimento: "22/08/1997",
    status: "Ativo",
    clubes: [
      createClub(
        "Racing",
        { inicio: "2015", fim: "2018" },
        { jogos: 62, gols: 27, assistencias: 6 }
      ),
      createClub(
        "Inter de Milão",
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
        nome: "Campeonato Italiano",
        anos: "2020-21, 2023-24",
        clube: "Inter de Milão",
      },
      {
        nome: "Copa da Itália",
        anos: "2021-22, 2022-23",
        clube: "Inter de Milão",
      },
      {
        nome: "Supercopa da Itália",
        anos: "2021, 2022, 2023",
        clube: "Inter de Milão",
      },
      {
        nome: "UEFA Champions League (Vice-campeão)",
        logo: "UEFA Champions League",
        anos: "2022-23",
        clube: "Inter de Milão",
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
        logo: "Campeonato Italiano",
        anos: "2023-24",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Time do Ano da Serie A",
        logo: "Campeonato Italiano",
        anos: "2023-24",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Jogador do Mês da Serie A",
        logo: "Campeonato Italiano",
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
    tags: ["Lautaro", "Martinez", "Lautaro Martinez", "El Toro", "LM10"],
  },

  // Mascherano
  {
    nome: "Mascherano",
    background: "titanium",
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
    background: "default",
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
    background: "default",
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
    background: "titanium",
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
        { jogos: 778, gols: 672, assistencias: 303 }
      ),
      createClub(
        "Paris Saint-Germain",
        { inicio: "2021", fim: "2023" },
        { jogos: 75, gols: 32, assistencias: 35 }
      ),
      createClub(
        "Inter Miami",
        { inicio: "2023", fim: "atual" },
        { jogos: 84, gols: 75, assistencias: 37 }
      ),
    ],
    selecao: {
      nome: "Argentina",
      periodo: { inicio: 2005, fim: "atual" },
      estatisticas: { jogos: 191, gols: 112, assistencias: 58 },
    },
    titulos: [
      // Barcelona
      {
        nome: "Campeonato Espanhol",
        anos: "2005, 2006, 2009, 2010, 2011, 2013, 2015, 2016, 2018, 2019",
        clube: "Barcelona",
      },
      {
        nome: "Copa do Rei",
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
      // Paris Saint-Germain
      {
        nome: "Campeonato Francês",
        anos: "2022, 2023",
        clube: "Paris Saint-Germain",
      },
      {
        nome: "Supercopa da França",
        anos: "2022",
        clube: "Paris Saint-Germain",
      },
      // Inter Miami
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

      // Argentina
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

      // Individuais
      {
        nome: "Bola de Ouro",
        anos: "2009, 2010, 2011, 2012, 2015, 2019, 2021, 2023",
        categoria: "individual",
      },
      {
        nome: "The Best FIFA",
        anos: "2019, 2022, 2023",
        categoria: "individual",
      },
      {
        nome: "Chuteira de Ouro",
        anos: "2009, 2011, 2012, 2016, 1017, 2018",
        categoria: "individual",
      },
      {
        nome: "FIFA World Cup Golden Ball",
        anos: "2014, 2022",
        categoria: "individual",
      },
      {
        nome: "FIFA Club World Cup Golden Ball",
        logo: "FIFA World Cup Golden Ball",
        anos: "2014, 2022",
        categoria: "individual",
      },
      {
        nome: "FIFA Club World Cup Silver Ball",
        logo: "FIFA World Cup Silver Ball",
        anos: "2014, 2022",
        categoria: "individual",
      },
      {
        nome: "Jogador do Ano da UEFA",
        logo: "UEFA",
        anos: "2011, 2015",
        categoria: "individual",
      },
      {
        nome: "Copa América Melhor Jogador",
        logo: "Copa América",
        anos: "2015",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Artilharia da UEFA Champions League",
        logo: "UEFA Champions League",
        anos: "2009, 2010, 2011, 2012, 2015, 2019",
        categoria: "individual",
      },
      {
        nome: "Bola de Ouro Dream Team",
        logo: "France Football",
        anos: "2020",
        categoria: "individual",
      },
      {
        nome: "Copa América Melhor Jogador",
        logo: "Copa América",
        anos: "2021",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Copa América Chuteira de Ouro",
        logo: "Copa América",
        anos: "2021",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Troféu Pichichi",
        anos: "2010, 2012, 2013, 2017, 2018, 2019, 2021",
        categoria: "individual",
      },
      {
        nome: "Prêmio Laureus",
        anos: "2020, 2023",
        categoria: "individual",
      },
      {
        nome: "Prêmio Landon Donovan MVP",
        anos: "2024",
        categoria: "individual",
      },
    ],
    tags: ["PSG"],
    ultima_atualizacao: "28/10/25",
  },

  // BÉLGICA --------------------------------------------------------------------------------------------------

  // Eden Hazard
  {
    nome: "Eden Hazard",
    background: "default",
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
    background: "diamond",
    descricao:
      "Meio-campista belga, amplamente reconhecido como um dos melhores 'playmakers' de sua geração. De Bruyne é famoso por sua visão de jogo incomparável, precisão em passes longos e cruzamentos, e chutes potentes com as duas pernas. Após uma era vitoriosa no Manchester City, transferiu-se para o Napoli em 2025.",
    pagina: "https://www.instagram.com/kevindebruyne/",
    nacionalidade: "Bélgica",
    imagem:
      "https://cdn.cityxtra.co.uk/wp-content/uploads/2025/10/0fab81ce12e48a0794275e1d82449fb1_1067253486.webp",
    numero: "17",
    posicao: "Meia-armador",
    dataNascimento: "28/06/1991",
    status: "Ativo",
    curiosidades:
      "De Bruyne é o único jogador a vencer o prêmio de Jogador do Ano da PFA (Associação de Jogadores Profissionais) em temporadas consecutivas. Ele é frequentemente elogiado por sua consistência em entregar o maior número de assistências nas ligas europeias.",
    clubes: [
      createClub(
        "Wolfsburg",
        { inicio: "2014", fim: "2015" },
        { jogos: 73, gols: 20, assistencias: 37 }
      ),
      createClub(
        "Manchester City",
        { inicio: "2015", fim: "2025" },
        { jogos: 415, gols: 105, assistencias: 175 }
      ),
      createClub(
        "Napoli",
        { inicio: "2025", fim: "Presente" },
        { jogos: 10, gols: 2, assistencias: 4 }
      ),
    ],
    selecao: {
      nome: "Bélgica",
      periodo: { inicio: "2010", fim: "Presente" },
      estatisticas: { jogos: 120, gols: 30, assistencias: 45 },
    },
    titulos: [
      // Manchester City
      {
        nome: "UEFA Champions League",
        anos: "2023",
        clube: "Manchester City",
      },
      {
        nome: "Campeonato Inglês",
        anos: "2018, 2019, 2021, 2022, 2023, 2025",
        clube: "Manchester City",
      },
      {
        nome: "Copa da Inglaterra",
        anos: "2019, 2023",
        clube: "Manchester City",
      },
      {
        nome: "Mundial de Clubes",
        anos: "2023",
        clube: "Manchester City",
      },
      // Individuais
      {
        nome: "Jogador do Ano da PFA",
        logo: "Campeonato Inglês",
        anos: "2020, 2021",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Melhor Playmaker do Mundo",
        logo: "IFFHS",
        anos: "2020, 2021, 2022, 2023",
        clube: "Individual",
        categoria: "individual",
      },
    ],
    tags: ["De Bruyne", "KDB17"],
    ultima_atualizacao: "27/10/25",
  },

  // Romelu Lukaku
  {
    nome: "Romelu Lukaku",
    background: "titanium",
    descricao:
      "Conhecido por sua força física e habilidade de marcar gols, Romelu Lukaku é um dos atacantes mais temidos do futebol mundial. Com uma carreira marcada por passagens por grandes clubes como Chelsea, Manchester United e Inter de Milão, o belga conquistou diversos títulos e se destacou pela sua capacidade de decidir jogos importantes.",
    pagina: "https://www.instagram.com/romelulukaku/",
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
    background: "titanium",
    descricao:
      "Goleiro belga de classe mundial, conhecido por sua estatura imponente, reflexos rápidos e excelente capacidade de parar chutes de longa distância. Courtois consolidou-se como um dos melhores goleiros de sua geração no Real Madrid, sendo crucial nas conquistas da Liga dos Campeões e La Liga, e venceu o prêmio Yashin Trophy.",
    pagina: "https://www.instagram.com/thibautcourtois/",
    nacionalidade: "Bélgica",
    imagem:
      "https://s.yimg.com/ny/api/res/1.2/sBBxxAavl9qO8UKzoFt4TQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNztjZj13ZWJw/https://media.zenfs.com/en/madrid_universal_articles_561/6ba3036a944ad4b7d7a8a165bfb62875",
    numero: "1",
    posicao: "Goleiro",
    dataNascimento: "11/05/1992",
    status: "Ativo",
    curiosidades:
      "Courtois é um dos poucos goleiros a vencer a luva de ouro em duas das maiores ligas da Europa (Premier League e La Liga). Sua atuação na final da UEFA Champions League de 2022 é considerada uma das melhores performances individuais de um goleiro em uma final.",
    clubes: [
      createClub(
        "Atlético de Madrid",
        { inicio: "2011", fim: "2014" },
        { jogos: 154, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Chelsea",
        { inicio: "2014", fim: "2018" },
        { jogos: 154, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Real Madrid",
        { inicio: "2018", fim: "Presente" },
        { jogos: 270, gols: 0, assistencias: 0 }
      ),
    ],
    selecao: {
      nome: "Bélgica",
      periodo: { inicio: "2011", fim: "Presente" },
      estatisticas: { jogos: 110, gols: 0, assistencias: 0 },
    },
    titulos: [
      {
        nome: "UEFA Champions League",
        anos: "2022, 2024",
        clube: "Real Madrid",
      },
      {
        nome: "Campeonato Espanhol",
        anos: "2020, 2022",
        clube: "Real Madrid",
      },
      {
        nome: "Mundial de Clubes",
        anos: "2018, 2023",
        clube: "Real Madrid",
      },
      {
        nome: "Copa do Rei",
        anos: "2023",
        clube: "Real Madrid",
      },

      // Chelsea
      {
        nome: "Campeonato Inglês",
        anos: "2015, 2017",
        clube: "Chelsea",
      },
      {
        nome: "Copa da Inglaterra",
        anos: "2018",
        clube: "Chelsea",
      },

      // Atlético de Madrid
      {
        nome: "Campeonato Espanhol",
        anos: "2014",
        clube: "Atlético de Madrid",
      },
      {
        nome: "UEFA Europa League",
        anos: "2012",
        clube: "Atlético de Madrid",
      },
      {
        nome: "Copa do Rei",
        anos: "2013",
        clube: "Atlético de Madrid",
      },

      // Genk
      {
        nome: "Campeonato Belga",
        anos: "2011",
        clube: "KRC Genk",
      },

      // Individuais
      {
        nome: "Prêmio Lev Yashin",
        anos: "2022",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "FIFA The Best Goalkeeper",
        logo: "FIFA",
        anos: "2018, 2022",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Luva de Ouro da Copa do Mundo",
        logo: "Copa do Mundo",
        anos: "2018",
        clube: "Individual",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Troféu Zamora",
        anos: "2013, 2014, 2020",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Luva de Ouro da Premier League",
        logo: "Campeonato Inglês",
        anos: "2017",
        clube: "Individual",
        categoria: "individual",
      },
    ],
    tags: ["Courtois", "TC1", "Lenda Belga"],
    ultima_atualizacao: "28/10/25",
  },

  // Vincent Kompany
  {
    nome: "Vincent Kompany",
    background: "titanium",
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
    background: "plate",
    pagina: "https://www.instagram.com/andreaspereira/",
    nacionalidade: "Brasil",
    numero: "8",
    posicao: "Meio-campo",
    dataNascimento: "01/01/1996",
    status: "Ativo",
    imagem:
      "https://medias.itatiaia.com.br/dims4/default/ea7130b/2147483647/strip/false/crop/964x964+0+0/resize/1000x1000!/quality/90/?url=https%3A%2F%2Fk2-prod-radio-itatiaia.s3.us-east-1.amazonaws.com%2Fbrightspot%2F7d%2F4f%2F6b4701994220b9813e19eb924cb9%2Fandreas-pereira-em-campo-pelo-palmeiras.png",
    descricao:
      "Meia talentoso e versátil, conhecido por sua habilidade com a bola, visão de jogo e forte finalização. Formado no Manchester United, passou por grandes ligas europeias (Espanha, Itália, Inglaterra) e pelo Flamengo, antes de retornar ao Brasil para defender o Palmeiras.",
    clubes: [
      createClub(
        "Manchester United",
        { inicio: "2014", fim: "2022" },
        { jogos: 75, gols: 4, assistencias: 5 }
      ),
      createClub(
        "Granada",
        { inicio: "2016", fim: "2017" },
        { jogos: 37, gols: 5, assistencias: 3 }
      ),
      createClub(
        "Valencia",
        { inicio: "2017", fim: "2018" },
        { jogos: 29, gols: 1, assistencias: 3 }
      ),
      createClub(
        "Lazio",
        { inicio: "2020", fim: "2021" },
        { jogos: 33, gols: 1, assistencias: 4 }
      ),
      createClub(
        "Flamengo",
        { inicio: "2021", fim: "2022" },
        { jogos: 53, gols: 8, assistencias: 3 }
      ),
      createClub(
        "Fulham",
        { inicio: "2022", fim: "2025" },
        { jogos: 100, gols: 5, assistencias: 10 }
      ),
      createClub(
        "Palmeiras",
        { inicio: "2025", fim: "Presente" },
        { jogos: 20, gols: 3, assistencias: 4 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2018", fim: "2018" },
      estatisticas: { jogos: 2, gols: 0, assistencias: 1 },
    },
    titulos: [
      // Manchester United
      {
        nome: "Copa da Inglaterra",
        anos: "2016",
        clube: "Manchester United",
      },

      // FLamengo
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

      // Individuais
      {
        nome: "Gol mais bonito",
        logo: "Campeonato Brasileiro",
        anos: "2021",
        categoria: "individual",
      },
    ],
    tags: ["Andreas Pereira", "Andreas", "AP18"],
  },

  // Adriano Imperador
  {
    nome: "Adriano Imperador",
    background: "titanium",
    pagina: "https://www.instagram.com/adrianoimperador/",
    nacionalidade: "Brasil",
    numero: "9",
    posicao: "Atacante",
    dataNascimento: "17/02/1982",
    status: "Aposentado",
    imagem:
      "https://www.passioneinter.com/wp-content/uploads/202201/528e82074578b5892ecaa99e133954c1.jpg",
    descricao:
      "Um dos maiores atacantes brasileiros de sua geração, Adriano era conhecido por sua força física, técnica apurada, chute potente e gols espetaculares. Ídolo de Flamengo e Internazionale de Milão, seu auge o consagrou como 'Imperador' no futebol europeu.",
    clubes: [
      createClub(
        "Flamengo",
        { inicio: "2000", fim: "2001" },
        { jogos: 48, gols: 12, assistencias: 0 }
      ),
      createClub(
        "Inter de Milão",
        { inicio: "2001", fim: "2002" },
        { jogos: 13, gols: 1, assistencias: 0 }
      ),
      createClub(
        "Fiorentina",
        { inicio: "2002", fim: "2002" },
        { jogos: 15, gols: 6, assistencias: 2 }
      ),
      createClub(
        "Parma",
        { inicio: "2002", fim: "2004" },
        { jogos: 37, gols: 23, assistencias: 1 }
      ),
      createClub(
        "Inter de Milão",
        { inicio: "2004", fim: "2009" },
        { jogos: 167, gols: 78, assistencias: 16 }
      ),
      createClub(
        "São Paulo",
        { inicio: "2008", fim: "2008" },
        { jogos: 28, gols: 17, assistencias: 4 }
      ),
      createClub(
        "Flamengo",
        { inicio: "2009", fim: "2010" },
        { jogos: 31, gols: 19, assistencias: 1 }
      ),
      createClub(
        "Roma",
        { inicio: "2010", fim: "2011" },
        { jogos: 8, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Corinthians",
        { inicio: "2011", fim: "2012" },
        { jogos: 7, gols: 2, assistencias: 0 }
      ),
      createClub(
        "Athletico Paranaense",
        { inicio: "2014", fim: "2014" },
        { jogos: 3, gols: 1, assistencias: 0 }
      ),
      createClub(
        "Miami United",
        { inicio: "2016", fim: "2016" },
        { jogos: 1, gols: 1, assistencias: 0 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2000", fim: "2010" },
      estatisticas: { jogos: 48, gols: 27, assistencias: 6 },
    },
    titulos: [
      // Internazionale
      {
        nome: "Campeonato Italiano",
        anos: "2006, 2007, 2008, 2009",
        clube: "Inter de Milão",
      },
      {
        nome: "Copa da Itália",
        anos: "2005, 2006",
        clube: "Inter de Milão",
      },
      {
        nome: "Supercopa da Itália",
        anos: "2005, 2006",
        clube: "Inter de Milão",
      },

      // Brasil
      {
        nome: "Copa América",
        anos: "2004",
        clube: "Brasil",
        logoVariavel: true,
      },
      {
        nome: "Copa das Confederações",
        anos: "2005",
        clube: "Brasil",
        logoVariavel: true,
      },

      // Clubes Brasileiros
      {
        nome: "Campeonato Brasileiro",
        anos: "2009",
        clube: "Flamengo",
      },
      {
        nome: "Campeonato Brasileiro",
        anos: "2011",
        clube: "Corinthians",
      },
      {
        nome: "Campeonato Carioca",
        anos: "2001",
        clube: "Flamengo",
      },

      // Individuais
      {
        nome: "Bola de Ouro da Copa América",
        logoVariavel: "Copa América",
        anos: "2004",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Artilheiro da Copa das Confederações",
        anos: "2005",
        clube: "Individual",
        categoria: "individual",
      },
    ],
    tags: ["Adriano", "Imperador", "Didico", "Adriano Imperador"],
    ultima_atualizacao: "27/10/25",
  },

  // Alex Sandro
  {
    nome: "Alex Sandro",
    background: "titanium",
    pagina: "https://www.instagram.com/alxsndro12/",
    nacionalidade: "Brasil",
    numero: "26",
    posicao: "Lateral-esquerdo",
    dataNascimento: "26/01/1991",
    status: "Ativo",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/bf/2024/10/02/alex-sandro-comemora-gol-em-flamengo-x-corinthians-partida-da-copa-do-brasil-1727920868687_v2_3x4.jpg",
    descricao:
      "Lateral-esquerdo brasileiro com vasta experiência no futebol europeu. Peça fundamental na Juventus por quase uma década, onde conquistou inúmeros títulos, e na Seleção Brasileira. Chegou ao Flamengo em 2024, trazendo muita qualidade e versatilidade.",
    clubes: [
      createClub(
        "Athletico Paranaense",
        { inicio: "2008", fim: "2010" },
        { jogos: 23, gols: 1, assistencias: 0 }
      ),
      createClub(
        "Santos",
        { inicio: "2010", fim: "2011" },
        { jogos: 55, gols: 3, assistencias: 3 }
      ),
      createClub(
        "Porto",
        { inicio: "2011", fim: "2015" },
        { jogos: 137, gols: 3, assistencias: 10 }
      ),
      createClub(
        "Juventus",
        { inicio: "2015", fim: "2024" },
        { jogos: 327, gols: 15, assistencias: 32 }
      ),
      createClub(
        "Flamengo",
        { inicio: "2024", fim: "Presente" },
        { jogos: 25, gols: 1, assistencias: 3 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2011", fim: "2022" },
      estatisticas: { jogos: 40, gols: 3, assistencias: 4 },
    },
    titulos: [
      // Juventus
      {
        nome: "Campeonato Italiano",
        anos: "2016, 2017, 2018, 2019, 2020",
        clube: "Juventus",
      },
      {
        nome: "Copa da Itália",
        anos: "2016, 2017, 2018, 2021, 2024",
        clube: "Juventus",
      },
      {
        nome: "Supercopa da Itália",
        anos: "2016, 2018, 2021",
        clube: "Juventus",
      },

      // Porto
      {
        nome: "Campeonato Português",
        anos: "2012, 2013",
        clube: "Porto",
      },
      {
        nome: "Supertaça Cândido de Oliveira",
        anos: "2011, 2012",
        clube: "Porto",
      },

      // Santos
      {
        nome: "Copa Libertadores",
        anos: "2011",
        clube: "Santos",
      },
      {
        nome: "Copa do Brasil",
        anos: "2010",
        clube: "Santos",
      },
      {
        nome: "Campeonato Paulista",
        anos: "2011",
        clube: "Santos",
      },

      // Seleção Brasileira
      {
        nome: "Copa América",
        anos: "2019",
        clube: "Brasil",
        logoVariavel: true,
      },

      {
        nome: "Copa do Brasil",
        anos: "2024",
        clube: "Flamengo",
      },
    ],
    tags: ["Alex Sandro", "Alexandre", "AS12", "AS13"],
    ultima_atualizacao: "28/10/25",
  },

  // Alisson Becker
  {
    nome: "Alisson Becker",
    background: "diamond",
    pagina: "https://www.instagram.com/alissonbecker/",
    nacionalidade: "Brasil",
    numero: "1",
    posicao: "Goleiro",
    dataNascimento: "02/08/1992",
    status: "Ativo",
    imagem:
      "https://www.ogol.com.br/wimg/n757268b/1257103-de-substituivel-a-melhor-do-mundo-alisson-marca-territorio-n.jpg",
    descricao:
      "Goleiro brasileiro conhecido por suas defesas espetaculares, reflexos rápidos, tranquilidade sob pressão e excelente jogo com os pés. É um dos principais goleiros do mundo, eleito o 'The Best' e fundamental para a conquista da Copa América de 2019 pela Seleção Brasileira.",
    clubes: [
      createClub(
        "Internacional",
        { inicio: "2013", fim: "2016" },
        { jogos: 102, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Roma",
        { inicio: "2016", fim: "2018" },
        { jogos: 64, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Liverpool",
        { inicio: "2018", fim: "Presente" },
        { jogos: 280, gols: 1, assistencias: 1 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2015", fim: "Presente" },
      estatisticas: { jogos: 65, gols: 0, assistencias: 0 },
    },
    titulos: [
      // Liverpool
      {
        nome: "UEFA Champions League",
        anos: "2019",
        clube: "Liverpool",
      },
      {
        nome: "Campeonato Inglês",
        anos: "2020",
        clube: "Liverpool",
      },
      {
        nome: "Mundial de Clubes",
        anos: "2019",
        clube: "Liverpool",
      },
      {
        nome: "Supercopa da UEFA",
        anos: "2019",
        clube: "Liverpool",
      },
      {
        nome: "Copa da Inglaterra",
        anos: "2022",
        clube: "Liverpool",
      },
      {
        nome: "Copa da Liga Inglesa",
        anos: "2022, 2024",
        clube: "Liverpool",
      },

      // Internacional
      {
        nome: "Campeonato Gaúcho",
        anos: "2013, 2014, 2015, 2016",
        clube: "Internacional",
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
        nome: "Melhor Goleiro",
        logo: "The Best FIFA",
        anos: "2019",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Prêmio Lev Yashin",
        anos: "2019",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Luva de Ouro",
        logo: "Campeonato Inglês",
        anos: "2019",
        clube: "Individual",
        categoria: "individual",
      },
    ],
    tags: ["Alisson Becker", "Alisson", "Ab1"],
  },

  //Antony
  {
    nome: "Antony",
    background: "titanium",
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
        nome: "Campeonato Holandês",
        anos: "2021, 2022",
        clube: "Ajax",
      },
      {
        nome: "Copa da Holanda",
        anos: "2021",
        clube: "Ajax",
      },
      {
        nome: "Copa da Liga Inglesa",
        anos: "2023",
        clube: "Manchester United",
      },
      {
        nome: "Copa da Inglaterra",
        anos: "2024",
        clube: "Manchester United",
      },
      {
        nome: "Jogos Olímpicos",
        anos: "2020",
        clube: "Brasil",
        logoVariavel: true,
      },
    ],
    tags: [],
  },

  // Arthur Melo
  {
    nome: "Arthur Melo",
    background: "titanium",
    descricao:
      "Volante de passes precisos e excelente visão de jogo, revelado pelo Grêmio. Foi protagonista na conquista da Copa Libertadores 2017 e campeão da Copa América 2019, sendo eleito para a seleção do torneio. Passagens por Barcelona e Juventus, com títulos nacionais na Espanha e Itália.",
    pagina: "https://www.instagram.com/arthurhmelo",
    numero: "29",
    posicao: "Volante / Meia Central",
    dataNascimento: "12/08/1996",
    status: "Ativo",
    nacionalidade: "Brasil",
    imagem:
      "https://cdn.omatogrossense.com/app/uploads/2025/08/28132047/5008248282127904574.jpg",
    clubes: [
      createClub(
        "Grêmio",
        { inicio: "2015", fim: "2018" },
        { jogos: 70, gols: 6, assistencias: 1 }
      ),
      createClub(
        "Barcelona",
        { inicio: "2018", fim: "2020" },
        { jogos: 72, gols: 4, assistencias: 6 }
      ),
      createClub(
        "Juventus",
        { inicio: "2020", fim: "2022" },
        { jogos: 63, gols: 1, assistencias: 0 }
      ),
      createClub(
        "Fiorentina",
        { inicio: "2023", fim: "2024" },
        { jogos: 48, gols: 2, assistencias: 3 }
      ),
      createClub(
        "Grêmio",
        { inicio: "2025", fim: "Presente" },
        { jogos: 15, gols: 0, assistencias: 1 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2018", fim: "2020" },
      estatisticas: { jogos: 22, gols: 1, assistencias: 0 },
    },
    titulos: [
      // Seleção
      {
        nome: "Copa América",
        anos: "2019",
        clube: "Brasil",
        logoVariavel: true,
      },

      // Grêmio
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

      // Barcelona
      {
        nome: "Campeonato Espanhol",
        anos: "2018/19",
        clube: "Barcelona",
      },
      {
        nome: "Supercopa da Espanha",
        anos: "2018",
        clube: "Barcelona",
      },

      // Juventus
      {
        nome: "Supercopa da Itália",
        anos: "2020",
        clube: "Juventus",
      },
      {
        nome: "Copa da Itália",
        anos: "2020/21",
        clube: "Juventus",
      },

      // Individuais
      {
        nome: "Melhor Jogador da Final da Libertadores",
        logo: "Copa Libertadores",
        anos: "2017",
        categoria: "individual",
      },
      {
        nome: "Seleção da Copa América",
        logo: "Copa América",
        anos: "2019",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Melhor Volante do Campeonato Brasileiro",
        logo: "Campeonato Brasileiro",
        anos: "2017",
        categoria: "individual",
      },
    ],
    tags: [],
    ultima_atualizacao: "29/10/25",
  },

  // Ayrton Lucas
  {
    nome: "Ayrton Lucas",
    background: "default",
    pagina: "https://www.instagram.com/ayrtonlucas/",
    nacionalidade: "Brasil",
    numero: "6",
    posicao: "Lateral-esquerdo",
    dataNascimento: "08/05/1998",
    status: "Ativo",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/c9/2023/06/05/ayrton-lucas-celebra-gol-do-flamengo-sobre-o-vasco-em-jogo-do-campeonato-brasileiro-1686010952183_v2_450x600.jpg",
    descricao:
      "Lateral-esquerdo brasileiro conhecido por sua velocidade, habilidade ofensiva e cruzamentos precisos. Destacou-se no futebol russo antes de se firmar como titular absoluto no Flamengo.",
    clubes: [
      createClub(
        "Fluminense",
        { inicio: "2015", fim: "2018" },
        { jogos: 73, gols: 2, assistencias: 6 }
      ),
      createClub(
        "Madureira",
        { inicio: "2015", fim: "2016" },
        { jogos: 9, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Londrina",
        { inicio: "2016", fim: "2017" },
        { jogos: 52, gols: 3, assistencias: 0 }
      ),
      createClub(
        "Spartak Moscou",
        { inicio: "2019", fim: "2022" },
        { jogos: 108, gols: 4, assistencias: 10 }
      ),
      createClub(
        "Flamengo",
        { inicio: "2022", fim: "Presente" },
        { jogos: 190, gols: 13, assistencias: 15 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2023", fim: "Presente" },
      estatisticas: { jogos: 2, gols: 0, assistencias: 0 },
    },
    titulos: [
      // Fluminense
      {
        nome: "Primeira Liga",
        anos: "2016",
        clube: "Fluminense",
      },

      // Londrina
      {
        nome: "Primeira Liga",
        anos: "2017",
        clube: "Londrina",
      },

      // Flamengo
      {
        nome: "Copa Libertadores",
        anos: "2022",
        clube: "Flamengo",
      },
      {
        nome: "Copa do Brasil",
        anos: "2022, 2024",
        clube: "Flamengo",
      },
      {
        nome: "Campeonato Carioca",
        anos: "2024, 2025",
        clube: "Flamengo",
      },
      {
        nome: "Supercopa Rei",
        anos: "2025",
        clube: "Flamengo",
      },

      // Spartak Moscou
      {
        nome: "Copa da Rússia",
        anos: "2022",
        clube: "Spartak Moscou",
      },

      // Individuais
      {
        nome: "Seleção da Copa Sul-Americana",
        logo: "Copa Sul-Americana",
        anos: "2018",
        categoria: "individual",
      },
      {
        nome: "Seleção do Campeonato Carioca",
        logo: "Campeonato Carioca",
        anos: "2018, 2023",
        categoria: "individual",
      },
    ],
    tags: ["Ayrton Lucas"],
    ultima_atualizacao: "29/10/25",
  },

  ,
  // Bebeto
  {
    nome: "Bebeto",
    background: "titanium",
    descricao:
      "Lendário atacante brasileiro, mundialmente famoso por sua parceria com Romário na Seleção Brasileira e pela 'homenagem ao bebê' na Copa de 1994. Bebeto era conhecido por sua técnica apurada, faro de gol e por ter sido artilheiro em clubes como Flamengo, Vasco e Deportivo La Coruña.",
    pagina: "https://www.instagram.com/bebeto7/",
    nacionalidade: "Brasil",
    imagem:
      "https://lncimg.lance.com.br/cdn-cgi/image/width=828,quality=75,fit=pad,format=webp/uploads/2016/12/14/5851ada21eb19.jpeg",
    numero: "7",
    posicao: "Atacante",
    dataNascimento: "16/02/1964",
    status: "Aposentado",
    clubes: [
      createClub(
        "Flamengo",
        { inicio: "1983", fim: "1989" },
        { jogos: 194, gols: 75, assistencias: 20 }
      ),
      createClub(
        "Vasco da Gama",
        { inicio: "1989", fim: "1992" },
        { jogos: 104, gols: 52, assistencias: 10 }
      ),
      createClub(
        "Deportivo La Coruña",
        { inicio: "1992", fim: "1996" },
        { jogos: 139, gols: 86, assistencias: 18 }
      ),
      createClub(
        "Flamengo",
        { inicio: "1996", fim: "1996" },
        { jogos: 15, gols: 5, assistencias: 1 }
      ),
      createClub(
        "Botafogo",
        { inicio: "1998", fim: "1999" },
        { jogos: 25, gols: 9, assistencias: 2 }
      ),
      createClub(
        "Kashima Antlers",
        { inicio: "2000", fim: "2000" },
        { jogos: 8, gols: 3, assistencias: 0 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "1985", fim: "1998" },
      estatisticas: { jogos: 75, gols: 39, assistencias: 15 },
    },
    titulos: [
      // Seleção Brasileira
      {
        nome: "Copa do Mundo",
        anos: "1994",
        clube: "Brasil",
        logoVariavel: true,
      },
      {
        nome: "Copa América",
        anos: "1989",
        clube: "Brasil",
        logoVariavel: true,
      },
      {
        nome: "Copa das Confederações",
        anos: "1997",
        clube: "Brasil",
        logoVariavel: true,
      },

      // Deportivo La Coruña
      {
        nome: "Copa do Rei",
        anos: "1995",
        clube: "Deportivo La Coruña",
      },
      {
        nome: "Supercopa da Espanha",
        anos: "1995",
        clube: "Deportivo La Coruña",
      },

      // Vasco da Gama
      {
        nome: "Campeonato Brasileiro",
        anos: "1989",
        clube: "Vasco da Gama",
      },
      {
        nome: "Campeonato Carioca",
        anos: "1992",
        clube: "Vasco da Gama",
      },

      // Flamengo
      {
        nome: "Campeonato Brasileiro",
        anos: "1983",
        clube: "Flamengo",
      },
      {
        nome: "Campeonato Carioca",
        anos: "1986",
        clube: "Flamengo",
      },

      // Individuais
      {
        nome: "Artilheiro da La Liga",
        logo: "Campeonato Espanhol",
        anos: "1993",
        clube: "Individual",
        categoria: "individual",
      },
    ],
    tags: ["Bebeto", "Bebeto7"],
    ultima_atualizacao: "27/10/25",
  },

  // Bruno Henrique
  {
    nome: "Bruno Henrique",
    background: "plate",
    descricao:
      "Atacante brasileiro conhecido por sua velocidade explosiva, habilidade no um contra um e poder de decisão em jogos importantes. Ídolo do Flamengo, foi o protagonista na campanha vitoriosa da Libertadores e do Brasileirão de 2019, cunhando o bordão 'outro patamar'.",
    pagina: "https://www.instagram.com/brunohenrique27oficial/",
    numero: "27",
    posicao: "Atacante",
    dataNascimento: "30/12/1990",
    status: "Ativo",
    nacionalidade: "Brasil",
    imagem:
      "https://lncimg.lance.com.br/cdn-cgi/image/width=950,quality=75,fit=pad,format=webp/uploads/2025/06/54602646406_c287f2079b_o-scaled-aspect-ratio-512-320.jpg",
    clubes: [
      createClub(
        "Uberlândia",
        { inicio: "2012", fim: "2013" },
        { jogos: 17, gols: 4, assistencias: 0 }
      ),
      createClub(
        "Itumbiara",
        { inicio: "2014", fim: "2014" },
        { jogos: 24, gols: 12, assistencias: 0 }
      ),
      createClub(
        "Goiás",
        { inicio: "2015", fim: "2015" },
        { jogos: 57, gols: 12, assistencias: 7 }
      ),
      createClub(
        "Wolfsburg",
        { inicio: "2016", fim: "2017" },
        { jogos: 17, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Santos",
        { inicio: "2017", fim: "2019" },
        { jogos: 86, gols: 20, assistencias: 11 }
      ),
      createClub(
        "Flamengo",
        { inicio: "2019", fim: "Presente" },
        { jogos: 326, gols: 104, assistencias: 78 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2019", fim: "2019" },
      estatisticas: { jogos: 2, gols: 0, assistencias: 0 },
    },
    titulos: [
      // Individuais
      {
        nome: "Rei da América",
        logo: "Copa Libertadores",
        anos: "2019",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Melhor Jogador da Libertadores",
        logo: "Copa Libertadores",
        anos: "2019",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Artilheiro da Libertadores",
        logo: "Copa Libertadores",
        anos: "2019",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Craque do Brasileirão",
        logo: "Campeonato Brasileiro",
        anos: "2019",
        clube: "Individual",
        categoria: "individual",
      },
      // Flamengo
      {
        nome: "Copa Libertadores",
        anos: "2019, 2022",
        clube: "Flamengo",
      },
      {
        nome: "Campeonato Brasileiro",
        anos: "2019, 2020",
        clube: "Flamengo",
      },
      {
        nome: "Copa do Brasil",
        anos: "2022, 2024",
        clube: "Flamengo",
      },
      {
        nome: "Supercopa do Brasil",
        anos: "2020, 2021, 2025",
        clube: "Flamengo",
      },
      {
        nome: "Recopa Sudamericana",
        anos: "2020",
        clube: "Flamengo",
      },
      {
        nome: "Campeonato Carioca",
        anos: "2019, 2020, 2021, 2024, 2025",
        clube: "Flamengo",
      },
      // Goiás
      {
        nome: "Campeonato Goiano",
        anos: "2015",
        clube: "Goiás",
      },
    ],
    tags: [
      "Bruno Henrique",
      "BH",
      "BH27",
      "Bruno Henrique Flamengo",
      "Bruno Enrique",
      "Outro Patamar",
    ],
    ultima_atualizacao: "27/10/25",
  },

  // Cafu
  {
    nome: "Cafu",
    background: "diamond",
    pagina: "https://www.instagram.com/cafuoficial/",
    nacionalidade: "Brasil",
    numero: "2",
    posicao: "Lateral-direito",
    dataNascimento: "07/06/1970",
    status: "Aposentado",
    imagem:
      "https://monitordomercado.com.br/wp-content/uploads/2024/08/CAFU.jpg",
    descricao:
      "O lendário 'Capitão do Penta', Cafu é um dos maiores laterais-direitos da história do futebol. Conhecido por sua energia, longevidade, velocidade e liderança. É o único jogador a disputar três finais consecutivas de Copa do Mundo.",
    clubes: [
      createClub(
        "São Paulo",
        { inicio: "1990", fim: "1994" },
        { jogos: 250, gols: 4, assistencias: 15 }
      ),
      createClub(
        "Real Zaragoza",
        { inicio: "1995", fim: "1995" },
        { jogos: 16, gols: 0, assistencias: 1 }
      ),
      createClub(
        "Palmeiras",
        { inicio: "1996", fim: "1997" },
        { jogos: 99, gols: 10, assistencias: 15 }
      ),
      createClub(
        "Roma",
        { inicio: "1997", fim: "2003" },
        { jogos: 218, gols: 8, assistencias: 22 }
      ),
      createClub(
        "AC Milan",
        { inicio: "2003", fim: "2008" },
        { jogos: 166, gols: 4, assistencias: 16 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "1990", fim: "2006" },
      estatisticas: { jogos: 142, gols: 5, assistencias: 15 },
    },
    titulos: [
      // Individuais
      {
        nome: "Bola de Prata da Revista Placar",
        logo: "Placar",
        anos: "1992, 1993",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "Seleção do Campeonato Brasileiro",
        logo: "Placar",
        anos: "1992, 1993",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "Seleção do Campeonato Paulista",
        logo: "Campeonato Paulista",
        anos: "1994",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "Jogador Sul-Americano do Ano",
        logo: "El País",
        anos: "1994",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "Melhor lateral-direito das Américas",
        logo: "El País",
        anos: "1992, 1993, 1994, 1995",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "Seleção das Américas",
        logo: "El País",
        anos: "1992, 1993, 1994, 1995",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "Melhor lateral-direito da Europa",
        logo: "UEFA",
        anos: "2004, 2005",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "Seleção da Europa",
        logo: "UEFA",
        anos: "2004, 2005",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "Melhor lateral-direito do Mundo",
        logo: "FIFA",
        anos: "2005",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "Seleção do Mundo",
        logo: "FIFA",
        anos: "2005",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "Bola de Ouro Dream Team: Melhor lateral-direito da História",
        logo: "France Football",
        anos: "2020",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "ALL TIME WORLD MEN'S DREAM TEAM",
        logo: "IFFHS",
        anos: "2020",
        clube: "individual",
        categoria: "individual",
      },
      {
        nome: "Seleção Brasileira de Todos os Tempos",
        logo: "IFFHS",
        anos: "2021",
        clube: "individual",
        categoria: "individual",
      },

      // Seleção Brasileira
      {
        nome: "Copa do Mundo",
        anos: "1994",
        clube: "Brasil",
        logoVariavel: true,
      },
      {
        nome: "Copa do Mundo",
        anos: "2002",
        clube: "Brasil",
        logoVariavel: true,
      },
      {
        nome: "Copa América",
        anos: "1997",
        clube: "Brasil",
        logoVariavel: true,
      },
      {
        nome: "Copa América",
        anos: "1999",
        clube: "Brasil",
        logoVariavel: true,
      },
      {
        nome: "Copa das Confederações",
        anos: "1997",
        clube: "Brasil",
        logoVariavel: true,
      },

      // Milan
      {
        nome: "UEFA Champions League",
        anos: "2007",
        clube: "AC Milan",
      },
      {
        nome: "Mundial de Clubes",
        anos: "2007",
        clube: "AC Milan",
      },
      {
        nome: "Campeonato Italiano",
        anos: "2004",
        clube: "AC Milan",
      },
      {
        nome: "Supercopa da Itália",
        anos: "2004",
        clube: "AC Milan",
      },
      {
        nome: "Supercopa da UEFA",
        anos: "2003, 2007",
        clube: "AC Milan",
      },

      // Roma
      {
        nome: "Campeonato Italiano",
        anos: "2001",
        clube: "Roma",
      },

      // São Paulo
      {
        nome: "Campeonato Brasileiro",
        anos: "1991",
        clube: "São Paulo",
      },
      {
        nome: "Campeonato Paulista",
        anos: "1991, 1992",
        clube: "São Paulo",
      },
      {
        nome: "Copa Libertadores",
        anos: "1992, 1993",
        clube: "São Paulo",
      },
      {
        nome: "Copa Intercontinental",
        anos: "1992, 1993",
        clube: "São Paulo",
      },
      {
        nome: "Supercopa Libertadores",
        anos: "1993",
        clube: "São Paulo",
      },
      {
        nome: "Recopa Sul-Americana",
        anos: "1993, 1994",
        clube: "São Paulo",
      },

      // Real Zaragoza
      {
        nome: "Taça das Taças",
        anos: "1995",
        clube: "Real Zaragoza",
      },

      // Palmeiras
      {
        nome: "Campeonato Paulista",
        anos: "1996",
        clube: "Palmeiras",
      },
    ],
    tags: ["Cafu"],
    ultima_atualizacao: "28/10/25",
  },

  // Carlinhos (Carlos Moisés de Lima)
  {
    nome: "Carlinhos",
    background: "default",
    descricao:
      "Centroavante brasileiro conhecido por sua força física e poder de finalização. Ganhou notoriedade ao ser vice-artilheiro do Campeonato Carioca pelo Nova Iguaçu em 2024, o que lhe rendeu a contratação pelo Flamengo. Atualmente, está emprestado ao Vitória.",
    pagina: "https://www.instagram.com/carlinhos_l9",
    nacionalidade: "Brasil",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/15/2025/02/04/carlinhos-foi-anunciado-como-novo-reforco-do-vitoria-1738698308778_v2_450x450.jpg",
    numero: "99",
    posicao: "Centroavante",
    dataNascimento: "12/02/1997",
    status: "Ativo",
    clubes: [
      createClub(
        "Novorizontino",
        { inicio: "2014", fim: "2014" },
        { jogos: 0, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Corinthians",
        { inicio: "2016", fim: "2020" },
        { jogos: 0, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Oeste",
        { inicio: "2018", fim: "2018" },
        { jogos: 14, gols: 2, assistencias: 0 }
      ),
      createClub(
        "Novorizontino",
        { inicio: "2019", fim: "2019" },
        { jogos: 11, gols: 2, assistencias: 0 }
      ),
      createClub(
        "Vila Nova",
        { inicio: "2019", fim: "2019" },
        { jogos: 8, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Marcílio Dias",
        { inicio: "2020", fim: "2020" },
        { jogos: 4, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Atibaia",
        { inicio: "2020", fim: "2020" },
        { jogos: 3, gols: 1, assistencias: 0 }
      ),
      createClub(
        "São Caetano",
        { inicio: "2021", fim: "2021" },
        { jogos: 6, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Santo André",
        { inicio: "2021", fim: "2021" },
        { jogos: 1, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Audax-RJ",
        { inicio: "2022", fim: "2022" },
        { jogos: 12, gols: 1, assistencias: 0 }
      ),
      createClub(
        "Juventus-SP",
        { inicio: "2022", fim: "2022" },
        { jogos: 0, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Audax-RJ",
        { inicio: "2023", fim: "2023" },
        { jogos: 6, gols: 1, assistencias: 0 }
      ),
      createClub(
        "Camboriú",
        { inicio: "2023", fim: "2023" },
        { jogos: 15, gols: 8, assistencias: 0 }
      ),
      createClub(
        "Nova Iguaçu",
        { inicio: "2024", fim: "2024" },
        { jogos: 14, gols: 9, assistencias: 1 }
      ),
      createClub(
        "Flamengo",
        { inicio: "2024", fim: "2025" },
        { jogos: 20, gols: 5, assistencias: 0 }
      ),
      createClub(
        "Vitória",
        { inicio: "2025", fim: "Presente" },
        { jogos: 1, gols: 1, assistencias: 0 }
      ),
    ],
    selecao: {},
    titulos: [
      // Corinthians
      {
        nome: "Campeonato Brasileiro",
        anos: "2017",
        clube: "Corinthians",
      },

      // Flamengo
      {
        nome: "Taça Guanabara",
        anos: "2025",
        clube: "Flamengo",
      },
      {
        nome: "Campeonato Carioca",
        anos: "2025",
        clube: "Flamengo",
      },

      // Individuais
      {
        nome: "Seleção do Campeonato Carioca",
        logo: "Campeonato Carioca",
        anos: "2024",
        categoria: "individual",
      },
      {
        nome: "Vice-Artilheiro do Carioca",
        logo: "Campeonato Carioca",
        anos: "2024",
        categoria: "individual",
      },
    ],
    tags: ["Carlinhos", "Carlos Moisés de Lima"],
    ultima_atualizacao: "29/10/25",
  },

  // Carlos Alberto Torres
  {
    nome: "Carlos Alberto Torres",
    background: "gold",
    descricao:
      "O eterno 'Capita' do Tri. Lateral-direito com técnica, força e liderança incomparáveis, imortalizado por levantar a Taça Jules Rimet em 1970 e marcar um dos gols mais bonitos da história das Copas.",
    pagina: "https://www.instagram.com/capita70/",
    numero: "5",
    posicao: "Lateral-direito / Zagueiro",
    dataNascimento: "17/07/1944",
    dataFalecimento: "25/10/2016",
    status: "Aposentado",
    nacionalidade: "Brasil",
    imagem:
      "https://www.thetimes.com/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F0b00ffd4-9d09-11e6-af4a-15a7db50bae8.jpg?crop=2073%2C2073%2C768%2C154",
    clubes: [
      createClub(
        "Fluminense",
        { inicio: "1962", fim: "1965" },
        { jogos: 139, gols: 15, assistencias: 0 }
      ),
      createClub(
        "Santos",
        { inicio: "1965", fim: "1974" },
        { jogos: 143, gols: 10, assistencias: 0 }
      ),
      createClub(
        "Botafogo",
        { inicio: "1971", fim: "1972" },
        { jogos: 17, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Fluminense",
        { inicio: "1974", fim: "1977" },
        { jogos: 12, gols: 1, assistencias: 0 }
      ),
      createClub(
        "Flamengo",
        { inicio: "1977", fim: "1977" },
        { jogos: 13, gols: 0, assistencias: 0 }
      ),
      createClub(
        "New York Cosmos",
        { inicio: "1977", fim: "1980" },
        { jogos: 15, gols: 1, assistencias: 0 }
      ),
      createClub(
        "California Surf",
        { inicio: "1981", fim: "1981" },
        { jogos: 0, gols: 0, assistencias: 0 }
      ),
      createClub(
        "New York Cosmos",
        { inicio: "1982", fim: "1982" },
        { jogos: 126, gols: 6, assistencias: 0 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "1964", fim: "1977" },
      estatisticas: { jogos: 53, gols: 8, assistencias: 0 },
    },
    titulos: [
      // Brasil
      {
        nome: "Copa do Mundo",
        anos: "1970",
        clube: "Brasil",
        logoVariavel: true,
      },
      {
        nome: "Jogos Pan-Americanos",
        anos: "1963",
        clube: "Brasil",
        logoVariavel: true,
      },

      // Fluminense
      {
        nome: "Campeonato Carioca",
        anos: "1964, 1975, 1976",
        clube: "Fluminense",
      },
      {
        nome: "Taça Guanabara",
        anos: "19666",
        clube: "Fluminense",
      },

      // Santos
      {
        nome: "Campeonato Paulista",
        anos: "1965, 1967, 1968, 1969, 1973",
        clube: "Santos",
      },
      {
        nome: "Campeonato Brasileiro",
        anos: "1965, 1968",
        clube: "Santos",
      },
      {
        nome: "Torneio Rio–São Paulo",
        anos: "1966",
        clube: "Santos",
      },
      {
        nome: "Supercopa Sul-Americana dos Campeões Intercontinentais",
        anos: "1968",
        clube: "Santos",
      },
      {
        nome: "Recopa dos Campeões Intercontinentais",
        anos: "1968",
        clube: "Santos",
      },

      // New York Cosmos
      {
        nome: "NASL Soccer Bowl Champion",
        anos: "1977, 1978, 1980, 1982",
        clube: "New York Cosmos",
      },
      {
        nome: "Eastern Division",
        anos: "1978, 1979, 1980 e 1982",
        clube: "New York Cosmos",
      },

      // Individuais
      {
        nome: "All-Star Team da Copa do Mundo",
        logo: "Copa do Mundo",
        anos: "1970",
        clube: "Individual",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Time dos sonhos do Botafogo",
        logo: "Placar",
        anos: "1982, 1994, 2006",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Seleção de Futebol do Século XX",
        logo: "Voetbal International",
        anos: "1999",
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
        nome: "Bola de Ouro Dream Team (2º Esquadrão - Melhor Lateral)",
        logo: "France Football",
        anos: "2020",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "All-Time World Men's Dream Team (Time B)",
        logo: "IFFHS",
        anos: "2021",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Seleção de Todos os Tempos do Brasil",
        logo: "IFFHS",
        anos: "2021",
        clube: "Individual",
        categoria: "individual",
      },
    ],
    tags: ["Carlos Alberto Torres", "Capita"],
    ultima_atualizacao: "28/10/25",
  },

  // Casemiro
  {
    nome: "Casemiro",
    background: "diamond",
    pagina: "https://www.instagram.com/casemiro/",
    nacionalidade: "Brasil",
    numero: "18",
    posicao: "Volante",
    dataNascimento: "19/02/1992",
    status: "Ativo",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/88/2023/01/28/casemiro-marcou-duas-vezes-na-vitoria-do-manchester-united-sobre-o-reading-1674945121960_v2_1280x1920.jpg",
    descricao:
      "Lendário volante brasileiro, Casemiro é o pilar defensivo de uma das eras mais vitoriosas do Real Madrid. Conhecido por sua inteligência tática, poder de desarme e presença em grandes jogos. Atualmente defende o Manchester United.",
    clubes: [
      createClub(
        "São Paulo",
        { inicio: "2010", fim: "2013" },
        { jogos: 112, gols: 11, assistencias: 10 }
      ),
      createClub(
        "Real Madrid",
        { inicio: "2013", fim: "2022" },
        { jogos: 336, gols: 31, assistencias: 29 }
      ),
      createClub(
        "Porto",
        { inicio: "2014", fim: "2015" },
        { jogos: 41, gols: 4, assistencias: 3 }
      ),
      createClub(
        "Manchester United",
        { inicio: "2022", fim: "Presente" },
        { jogos: 90, gols: 10, assistencias: 10 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2011", fim: "Presente" },
      estatisticas: { jogos: 80, gols: 7, assistencias: 8 },
    },
    titulos: [
      // Real Madrid
      {
        nome: "UEFA Champions League",
        anos: "2014, 2016, 2017, 2018, 2022",
        clube: "Real Madrid",
      },
      {
        nome: "Mundial de Clubes",
        anos: "2016, 2017, 2018",
        clube: "Real Madrid",
      },
      {
        nome: "Campeonato Espanhol",
        anos: "2017, 2020, 2022",
        clube: "Real Madrid",
      },
      {
        nome: "Supercopa da UEFA",
        anos: "2016, 2017, 2022",
        clube: "Real Madrid",
      },
      {
        nome: "Copa do Rei",
        anos: "2014",
        clube: "Real Madrid",
      },

      // Manchester United
      {
        nome: "Copa da Liga Inglesa",
        anos: "2023",
        clube: "Manchester United",
      },
      {
        nome: "Copa da Inglaterra",
        anos: "2024",
        clube: "Manchester United",
      },

      // São Paulo
      {
        nome: "Copa Sul-Americana",
        anos: "2012",
        clube: "São Paulo",
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
        nome: "FIFPro World XI",
        logo: "FIFPro",
        anos: "2022",
        clube: "Individual",
        categoria: "individual",
      },
    ],
    tags: ["Casemiro"],
    ultima_atualizacao: "27/10/25",
  },

  // Cássio Ramos
  {
    nome: "Cássio Ramos",
    background: "titanium",
    descricao:
      "Goleiro lendário e o segundo jogador com mais jogos na história do Corinthians. Peça fundamental nas conquistas da Libertadores e do Mundial de Clubes em 2012, e bicampeão brasileiro. Conhecido por sua liderança e impressionante defesa de pênaltis.",
    pagina: "https://www.instagram.com/rcassio12",
    numero: "12",
    posicao: "Goleiro",
    dataNascimento: "06/06/1987",
    status: "Ativo",
    nacionalidade: "Brasil",
    imagem:
      "https://zeiro.com.br/wp-content/uploads/2025/04/54474488699_0762e6d2ca_c.jpg",
    clubes: [
      createClub(
        "Grêmio",
        { inicio: "2006", fim: "2007" },
        { jogos: 3, gols: 0, assistencias: 0 }
      ),
      createClub(
        "PSV Eindhoven",
        { inicio: "2007", fim: "2011" },
        { jogos: 5, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Sparta Rotterdam",
        { inicio: "2008", fim: "2009" },
        { jogos: 14, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Corinthians",
        { inicio: "2012", fim: "2024" },
        { jogos: 712, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Cruzeiro",
        { inicio: "2024", fim: "Presente" },
        { jogos: 57, gols: 0, assistencias: 0 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2007", fim: "2018" },
      estatisticas: { jogos: 1, gols: 0, assistencias: 0 },
    },
    titulos: [
      // Corinthians
      {
        nome: "Mundial de Clubes",
        anos: "2012",
        clube: "Corinthians",
      },
      {
        nome: "Copa Libertadores",
        anos: "2012",
        clube: "Corinthians",
      },
      {
        nome: "Campeonato Brasileiro",
        anos: "2015, 2017",
        clube: "Corinthians",
      },
      {
        nome: "Campeonato Paulista",
        anos: "2013, 2017, 2018, 2019",
        clube: "Corinthians",
      },
      {
        nome: "Recopa Sul-Americana",
        anos: "2013",
        clube: "Corinthians",
      },

      // PSV Eindhoven
      {
        nome: "Campeonato Holandês",
        anos: "2008",
        clube: "PSV Eindhoven",
      },

      // Seleção Brasileira
      {
        nome: "Copa América",
        anos: "2019",
        clube: "Brasil",
        logoVariavel: true,
      },
      {
        nome: "Campeonato Sul-Americano Sub-20",
        anos: "2007",
        clube: "Brasil",
        logoVariavel: true,
      },

      // Individuais
      {
        nome: "Melhor Goleiro do Mundial de Clubes",
        logo: "Mundial de Clubes",
        anos: "2012",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Bola de Prata da Revista Placar",
        logo: "Placar",
        anos: "2015, 2017",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Prêmio Craque do Brasileirão",
        logo: "Campeonato Brasileiro",
        anos: "2015",
        clube: "Individual",
        categoria: "individual",
      },
    ],
    tags: ["Cassio Ramos", "Casio"],
    ultima_atualizacao: "28/10/25",
  },

  // Daniel Alves
  {
    nome: "Daniel Alves",
    background: "diamond",
    descricao:
      "Lateral-direito conhecido por sua energia e experiência. Um dos maiores vencedores da história do futebol com 42 títulos, ficando apenas atrás de Lionel Messi.",
    pagina: "https://www.instagram.com/danialves/",
    nacionalidade: "Brasil",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/dc/2021/11/17/daniel-alves-na-apresentacao-do-barcelona-1637161402693_v2_3x4.jpg",
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
        "Barcelona",
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
      { nome: "Copa do Rei", anos: "2007", clube: "Sevilla" },
      { nome: "Supercopa da Espanha", anos: "2007", clube: "Sevilla" },

      // Barcelona
      {
        nome: "Campeonato Espanhol",
        anos: "2009, 2012, 2015, 2016",
        clube: "Barcelona",
      },
      {
        nome: "UEFA Champions League",
        anos: "2009, 2011, 2015",
        clube: "Barcelona",
      },
      {
        nome: "Copa do Rei",
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
      { nome: "Campeonato Italiano", anos: "2017", clube: "Juventus" },
      { nome: "Copa Da Itália", anos: "2017", clube: "Juventus" },

      // Paris Saint-Germain
      {
        nome: "Campeonato Francês",
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

      // Brasil
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
    tags: ["Paris Saint-Germain", "PSG"],
  },

  // Danilo Andrade
  {
    nome: "Danilo Andrade",
    background: "default",
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
    background: "diamond",
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
        { jogos: 69, gols: 7, assistencias: 0 }
      ),
      createClub(
        "Santos",
        { inicio: "2011", fim: "2012" },
        { jogos: 46, gols: 2, assistencias: 0 }
      ),
      createClub(
        "Porto",
        { inicio: "2012", fim: "2015" },
        { jogos: 141, gols: 9, assistencias: 17 }
      ),
      createClub(
        "Real Madrid",
        { inicio: "2015", fim: "2017" },
        { jogos: 56, gols: 3, assistencias: 9 }
      ),
      createClub(
        "Manchester City",
        { inicio: "2017", fim: "2019" },
        { jogos: 60, gols: 4, assistencias: 5 }
      ),
      createClub(
        "Juventus",
        { inicio: "2019", fim: "2023" },
        { jogos: 142, gols: 8, assistencias: 14 }
      ),
      createClub(
        "Flamengo",
        { inicio: "2023", fim: "Presente" },
        { jogos: 71, gols: 5, assistencias: 7 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2011", fim: "Presente" },
      estatisticas: { jogos: 56, gols: 1, assistencias: 6 },
    },
    titulos: [
      // América-MG
      {
        nome: "Campeonato Mineiro",
        anos: "2009, 2010, 2011",
        clube: "América-MG",
      },

      // Santos
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

      // Porto
      {
        nome: "Campeonato Português",
        anos: "2012, 2013",
        clube: "Porto",
      },

      // Real Madrid
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
        nome: "Campeonato Espanhol",
        anos: "2016/17",
        clube: "Real Madrid",
      },

      // Manchester City
      {
        nome: "Campeonato Inglês",
        anos: "2017/18, 2018/19",
        clube: "Manchester City",
      },
      {
        nome: "Copa da Liga Inglesa",
        anos: "2017/18, 2018/19",
        clube: "Manchester City",
      },
      {
        nome: "Copa da Inglaterra",
        anos: "2018/19",
        clube: "Manchester City",
      },

      // Juventus
      {
        nome: "Campeonato Italiano",
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

      // Flamengo
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
    tags: ["Danilo"],
    ultima_atualizacao: "31/10/25",
  },

  // Dante
  {
    nome: "Dante",
    background: "plate",
    descricao:
      "Zagueiro brasileiro com vasta experiência na Europa. É conhecido por sua liderança, força física e bom jogo aéreo. Dante foi fundamental na conquista da Tríplice Coroa pelo Bayern de Munique e atualmente é o capitão e ídolo do Nice, na França.",
    pagina: "https://www.instagram.com/dantebonfim/",
    nacionalidade: "Brasil",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/b4/2023/11/29/defesa-do-nice-liderada-pelo-brasileiro-dante-nao-sofre-gols-desde-setembro-1701279114528_v2_3x4.jpg",
    numero: "4",
    posicao: "Zagueiro",
    dataNascimento: "18/03/1983",
    status: "Ativo",
    clubes: [
      createClub(
        "Juventude",
        { inicio: "2002", fim: "2004" },
        { jogos: 45, gols: 1, assistencias: 0 }
      ),
      createClub(
        "Standard Liège",
        { inicio: "2007", fim: "2009" },
        { jogos: 81, gols: 2, assistencias: 1 }
      ),
      createClub(
        "B. Mönchengladbach",
        { inicio: "2009", fim: "2012" },
        { jogos: 101, gols: 8, assistencias: 0 }
      ),
      createClub(
        "Bayern de Munique",
        { inicio: "2012", fim: "2015" },
        { jogos: 133, gols: 5, assistencias: 6 }
      ),
      createClub(
        "Wolfsburg",
        { inicio: "2015", fim: "2016" },
        { jogos: 32, gols: 1, assistencias: 0 }
      ),
      createClub(
        "Nice",
        { inicio: "2016", fim: "Presente" },
        { jogos: 300, gols: 5, assistencias: 5 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2013", fim: "2014" },
      estatisticas: { jogos: 13, gols: 2, assistencias: 0 },
    },
    titulos: [
      // Bayern de Munique
      {
        nome: "Campeonato Alemão",
        anos: "2013, 2014, 2015",
        clube: "Bayern de Munique",
      },
      {
        nome: "Copa da Alemanha",
        anos: "2013, 2014",
        clube: "Bayern de Munique",
      },
      {
        nome: "UEFA Champions League",
        anos: "2013",
        clube: "Bayern de Munique",
      },
      {
        nome: "Mundial de Clubes",
        anos: "2013",
        clube: "Bayern de Munique",
      },
      {
        nome: "Supercopa da UEFA",
        anos: "2013",
        clube: "Bayern de Munique",
      },

      // Standard Liège
      {
        nome: "Campeonato Belga",
        anos: "2008",
        clube: "Standard Liège",
      },

      // Seleção Brasileira
      {
        nome: "Copa das Confederações",
        anos: "2013",
        clube: "Brasil",
        logoVariavel: true,
      },
    ],
    tags: ["Dante"],
    ultima_atualizacao: "27/10/25",
  },

  // David Luiz
  {
    nome: "David Luiz",
    background: "titanium",
    descricao:
      "Zagueiro brasileiro conhecido por sua habilidade com a bola nos pés, forte personalidade e liderança em campo. Foi campeão da Champions League e da Libertadores, e atualmente defende o Pafos FC, do Chipre.",
    pagina: "https://www.instagram.com/davidluiz23/",
    nacionalidade: "Brasil",
    imagem:
      "https://s2-ge.glbimg.com/zReBRFhoo1Of4N6fvZTUsQfoUxs=/0x0:1638x2048/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2025/1/l/254GDKT9K8TEsI9ooV3g/gpaf0f-xkaaopyu.jpg",
    numero: "23",
    posicao: "Zagueiro",
    dataNascimento: "22/04/1987",
    status: "Ativo",
    clubes: [
      createClub(
        "Vitória",
        { inicio: "2005", fim: "2007" },
        { jogos: 47, gols: 2, assistencias: 0 }
      ),
      createClub(
        "Benfica",
        { inicio: "2007", fim: "2011" },
        { jogos: 132, gols: 6, assistencias: 5 }
      ),
      createClub(
        "Chelsea",
        { inicio: "2011", fim: "2014" },
        { jogos: 143, gols: 12, assistencias: 9 }
      ),
      createClub(
        "Paris Saint-Germain",
        { inicio: "2014", fim: "2016" },
        { jogos: 89, gols: 8, assistencias: 5 }
      ),
      createClub(
        "Chelsea",
        { inicio: "2016", fim: "2019" },
        { jogos: 105, gols: 6, assistencias: 6 }
      ),
      createClub(
        "Arsenal",
        { inicio: "2019", fim: "2021" },
        { jogos: 73, gols: 4, assistencias: 1 }
      ),
      createClub(
        "Flamengo",
        { inicio: "2021", fim: "2024" },
        { jogos: 120, gols: 2, assistencias: 2 }
      ),
      createClub(
        "Pafos FC",
        { inicio: "2025", fim: "Presente" },
        { jogos: 20, gols: 1, assistencias: 0 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2010", fim: "2017" },
      estatisticas: { jogos: 57, gols: 3, assistencias: 3 },
    },
    titulos: [
      // Chelsea
      {
        nome: "UEFA Champions League",
        anos: "2012",
        clube: "Chelsea",
      },
      {
        nome: "UEFA Europa League",
        anos: "2013, 2019",
        clube: "Chelsea",
      },
      {
        nome: "Campeonato Inglês",
        anos: "2017",
        clube: "Chelsea",
      },
      {
        nome: "Copa da Inglaterra",
        anos: "2012, 2018",
        clube: "Chelsea",
      },

      // Paris Saint-Germain
      {
        nome: "Campeonato Francês",
        anos: "2015, 2016",
        clube: "Paris Saint-Germain",
      },

      // Benfica
      {
        nome: "Primeira Liga",
        anos: "2010",
        clube: "Benfica",
      },

      // Flamengo
      {
        nome: "Copa Libertadores",
        anos: "2022",
        clube: "Flamengo",
      },
      {
        nome: "Copa do Brasil",
        anos: "2022, 2024",
        clube: "Flamengo",
      },

      // Arsenal
      {
        nome: "Copa da Inglaterra",
        anos: "2020",
        clube: "Arsenal",
      },

      // Seleção Brasileira
      {
        nome: "Copa das Confederações",
        anos: "2013",
        clube: "Brasil",
        logoVariavel: true,
      },
    ],
    tags: ["David Luiz", "PSG"],
    ultima_atualizacao: "27/10/25",
  },

  // Denilson Show
  {
    nome: "Denilson Show",
    background: "default",
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
    background: "diamond",
    descricao:
      "Lendário goleiro brasileiro, conhecido por suas defesas espetaculares, frieza e, principalmente, por sua excelência em defender pênaltis. Foi peça-chave no auge do Milan na Europa e campeão da Copa do Mundo de 2002 com a Seleção Brasileira.",
    pagina: "https://www.instagram.com/didaoficial/",
    nacionalidade: "Brasil",
    imagem:
      "https://www.ravennaedintorni.it/wp-content/uploads/2024/06/nelson-dida-coppe.jpg",
    numero: "1",
    posicao: "Goleiro",
    dataNascimento: "07/10/1973",
    status: "Aposentado",
    clubes: [
      createClub(
        "Cruzeiro",
        { inicio: "1994", fim: "1998" },
        { jogos: 151, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Corinthians",
        { inicio: "1999", fim: "2002" },
        { jogos: 204, gols: 0, assistencias: 0 }
      ),
      createClub(
        "AC Milan",
        { inicio: "1999", fim: "2010" },
        { jogos: 302, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Grêmio",
        { inicio: "2012", fim: "2013" },
        { jogos: 67, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Internacional",
        { inicio: "2014", fim: "2014" },
        { jogos: 33, gols: 0, assistencias: 0 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "1995", fim: "2006" },
      estatisticas: { jogos: 91, gols: 0, assistencias: 0 },
    },
    titulos: [
      // Milan
      {
        nome: "UEFA Champions League",
        anos: "2003, 2007",
        clube: "Milan",
      },
      {
        nome: "Mundial de Clubes",
        anos: "2007",
        clube: "Milan",
      },
      {
        nome: "Campeonato Italiano",
        anos: "2004",
        clube: "Milan",
      },
      {
        nome: "Supercopa da UEFA",
        anos: "2003, 2007",
        clube: "Milan",
      },

      // Corinthians
      {
        nome: "Mundial de Clubes",
        anos: "2000",
        clube: "Corinthians",
      },
      {
        nome: "Campeonato Brasileiro",
        anos: "1999",
        clube: "Corinthians",
      },
      {
        nome: "Copa do Brasil",
        anos: "2002",
        clube: "Corinthians",
      },

      // Seleção Brasileira
      {
        nome: "Copa do Mundo",
        anos: "2002",
        clube: "Brasil",
        logoVariavel: true,
      },
      {
        nome: "Copa América",
        anos: "1999",
        clube: "Brasil",
        logoVariavel: true,
      },
      {
        nome: "Copa das Confederações",
        anos: "1997",
        clube: "Brasil",
        logoVariavel: true,
      },

      // Cruzeiro
      {
        nome: "Copa do Brasil",
        anos: "1996",
        clube: "Cruzeiro",
      },
    ],
    tags: ["Dida", "Didão"],
  },

  // Diego Alves
  {
    nome: "Diego Alves",
    background: "default",
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

  // Diego Ribas
  {
    nome: "Diego Ribas",
    background: "plate",
    descricao:
      "Meio-campista talentoso, conhecido por sua visão de jogo, técnica apurada e forte liderança. Diego brilhou no Santos ao lado de Robinho e foi fundamental em clubes europeus como Werder Bremen e Atlético de Madrid. Encerrou a carreira como capitão e ídolo do Flamengo.",
    pagina: "https://www.instagram.com/diegoribas10/",
    nacionalidade: "Brasil",
    imagem:
      "https://jornalnoroeste.com/uploads/images/2021/08/diego-ribas-mentalidade-de-campeao-e-exemplo-fora-dos-gramados.jpg",
    numero: "10",
    posicao: "Meio-campo (Apoio)",
    dataNascimento: "28/02/1985",
    status: "Aposentado",
    clubes: [
      createClub(
        "Santos",
        { inicio: "2002", fim: "2004" },
        { jogos: 133, gols: 38, assistencias: 15 }
      ),
      createClub(
        "Porto",
        { inicio: "2004", fim: "2006" },
        { jogos: 65, gols: 6, assistencias: 8 }
      ),
      createClub(
        "Werder Bremen",
        { inicio: "2006", fim: "2009" },
        { jogos: 132, gols: 54, assistencias: 50 }
      ),
      createClub(
        "Juventus",
        { inicio: "2009", fim: "2010" },
        { jogos: 47, gols: 7, assistencias: 10 }
      ),
      createClub(
        "Atlético de Madrid",
        { inicio: "2012", fim: "2014" },
        { jogos: 58, gols: 8, assistencias: 6 }
      ),
      createClub(
        "Flamengo",
        { inicio: "2016", fim: "2022" },
        { jogos: 289, gols: 44, assistencias: 35 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2003", fim: "2017" },
      estatisticas: { jogos: 40, gols: 4, assistencias: 5 },
    },
    titulos: [
      // Flamengo
      {
        nome: "Copa Libertadores",
        anos: "2019, 2022",
        clube: "Flamengo",
      },
      {
        nome: "Campeonato Brasileiro",
        anos: "2019, 2020",
        clube: "Flamengo",
      },
      {
        nome: "Copa do Brasil",
        anos: "2022",
        clube: "Flamengo",
      },
      {
        nome: "Recopa Sul-Americana",
        anos: "2020",
        clube: "Flamengo",
      },

      // Atlético de Madrid
      {
        nome: "Campeonato Espanhol",
        anos: "2014",
        clube: "Atlético de Madrid",
      },
      {
        nome: "UEFA Europa League",
        anos: "2012",
        clube: "Atlético de Madrid",
      },

      // Werder Bremen
      {
        nome: "Copa da Alemanha",
        anos: "2009",
        clube: "Werder Bremen",
      },

      // Santos
      {
        nome: "Campeonato Brasileiro",
        anos: "2002, 2004",
        clube: "Santos",
      },

      // Seleção Brasileira
      {
        nome: "Copa América",
        anos: "2004",
        clube: "Brasil",
        logoVariavel: true,
      },
      {
        nome: "Copa América",
        anos: "2007",
        clube: "Brasil",
        logoVariavel: true,
      },
    ],
    tags: ["Diego Ribas"],
    ultima_atualizacao: "30/10/25",
  },

  // Djalma Santos
  {
    nome: "Djalma Santos",
    background: "diamond",
    descricao:
      "Considerado um dos maiores laterais-direitos de todos os tempos. Inovador no apoio e impecável na marcação, disputou quatro Copas do Mundo (bicampeão em 1958 e 1962). Notável por sua lealdade, é um dos poucos a receber o Troféu Belfort Duarte, pois jamais foi expulso na carreira.",
    pagina: "https://pt.wikipedia.org/wiki/Djalma_Santos",
    numero: "4",
    posicao: "Lateral-direito / Zagueiro",
    dataNascimento: "27/02/1929",
    dataFalecimento: "23/07/2013",
    status: "In Memorian",
    nacionalidade: "Brasil",
    imagem:
      "https://bolaclassica.wordpress.com/wp-content/uploads/2024/03/djalma-santos.jpg",
    clubes: [
      createClub(
        "Portuguesa",
        { inicio: "1948", fim: "1959" },
        { jogos: 510, gols: 33, assistencias: 0 }
      ),
      createClub(
        "Palmeiras",
        { inicio: "1959", fim: "1968" },
        { jogos: 502, gols: 10, assistencias: 0 }
      ),
      createClub(
        "Athletico Paranaense",
        { inicio: "1968", fim: "1972" },
        { jogos: 39, gols: 2, assistencias: 0 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "1952", fim: "1968" },
      estatisticas: { jogos: 98, gols: 3, assistencias: 0 },
    },
    titulos: [
      // Brasil
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
        nome: "Campeonato Pan-Americano",
        anos: "1952",
        clube: "Brasil",
        logoVariavel: true,
      },

      // Portuguesa
      {
        nome: "Torneio Rio-São Paulo",
        anos: "1952, 1955",
        clube: "Portuguesa",
      },

      // Palmeiras
      {
        nome: "Campeonato Paulista",
        anos: "1959, 1963, 1966",
        clube: "Palmeiras",
      },
      {
        nome: "Campeonato Brasileiro",
        anos: "1960, 1967",
        clube: "Palmeiras",
      },
      {
        nome: "Torneio Rio-São Paulo",
        anos: "1965",
        clube: "Palmeiras",
      },

      // Athletico Paranaense
      {
        nome: "Campeonato Paranaense",
        anos: "1970",
        clube: "Athletico Paranaense",
      },

      // Individuais
      {
        nome: "Seleção da Copa do Mundo",
        logo: "Copa do Mundo",
        anos: "1954",
        clube: "Individual",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Seleção da Copa do Mundo",
        logo: "Copa do Mundo",
        anos: "1958",
        clube: "Individual",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Seleção da Copa do Mundo",
        logo: "Copa do Mundo",
        anos: "1962",
        clube: "Individual",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Troféu Belfort Duarte",
        anos: "1955",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Seleção de Futebol do Século XX",
        logo: "Placar",
        anos: "1981",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Seleção de Todos os Tempos da Copa do Mundo",
        logo: "FIFA",
        anos: "1994",
        clube: "Individual",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "FIFA 100",
        anos: "2004",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "All-Time World Men's Dream Team (Time B)",
        logo: "IFFHS",
        anos: "2021",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Seleção de Todos os Tempos do Brasil",
        logo: "IFFHS",
        anos: "2021",
        clube: "Individual",
        categoria: "individual",
      },
    ],
    tags: ["Djalma Santos"],
    ultima_atualizacao: "28/10/25",
  },

  // Douglas Costa (Douglas Costa de Souza)
  {
    nome: "Douglas Costa",
    background: "titanium",
    descricao:
      "Pontua-direita de extrema velocidade, conhecido por seus dribles e potência no chute. Teve passagens por clubes de elite na Europa e foi figura na Seleção Brasileira.",
    pagina: "https://www.instagram.com/douglascosta/",
    nacionalidade: "Brasil",
    imagem:
      "https://f.i.uol.com.br/fotografia/2018/03/27/15221930685abad2acccea9_1522193068_3x2_rt.jpg",
    numero: "10",
    posicao: "Ponta-direita",
    dataNascimento: "14/09/1990",
    status: "Sem Clube",
    clubes: [
      createClub(
        "Grêmio",
        { inicio: "2008", fim: "2010" },
        { jogos: 37, gols: 2, assistencias: 4 }
      ),
      createClub(
        "Shakhtar Donetsk",
        { inicio: "2010", fim: "2015" },
        { jogos: 203, gols: 38, assistencias: 40 }
      ),
      createClub(
        "Bayern de Munique",
        { inicio: "2015", fim: "2017" },
        { jogos: 77, gols: 14, assistencias: 27 }
      ),
      createClub(
        "Juventus",
        { inicio: "2017", fim: "2020" },
        { jogos: 103, gols: 8, assistencias: 15 }
      ),
      createClub(
        "Bayern de Munique",
        { inicio: "2020", fim: "2021" },
        { jogos: 20, gols: 1, assistencias: 3 }
      ),
      createClub(
        "Grêmio",
        { inicio: "2021", fim: "2022" },
        { jogos: 28, gols: 3, assistencias: 2 }
      ),
      createClub(
        "Los Angeles Galaxy",
        { inicio: "2022", fim: "2023" },
        { jogos: 51, gols: 8, assistencias: 4 }
      ),
      createClub(
        "Fluminense",
        { inicio: "2024", fim: "2024" },
        { jogos: 14, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Sydney FC",
        { inicio: "2024", fim: "2025" },
        { jogos: 25, gols: 6, assistencias: 8 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2014", fim: "2018" },
      estatisticas: { jogos: 31, gols: 4, assistencias: 7 },
    },
    titulos: [
      // Shakhtar
      {
        nome: "Campeonato Ucraniano",
        anos: "2010, 2011, 2012, 2013, 2014",
        clube: "Shakhtar Donetsk",
      },
      {
        nome: "Copa da Ucrânia",
        anos: "2011, 2012, 2013",
        clube: "Shakhtar Donetsk",
      },

      // Bayern de Munique
      {
        nome: "Mundial de Clubes",
        anos: "2020",
        clube: "Bayern de Munique",
      },
      {
        nome: "Campeonato Alemão",
        anos: "2016, 2017, 2021",
        clube: "Bayern de Munique",
      },
      {
        nome: "Copa da Alemanha",
        anos: "2016",
        clube: "Bayern de Munique",
      },

      // Juventus
      {
        nome: "Campeonato Italiano",
        anos: "2018, 2019, 2020",
        clube: "Juventus",
      },
      {
        nome: "Copa da Itália",
        anos: "2018",
        clube: "Juventus",
      },

      // Seleção
      {
        nome: "Campeonato Sul-Americano Sub-20",
        logo: "Copa Sul-Americana",
        anos: "2009",
        clube: "Brasil",
      },
    ],
    tags: ["Douglas Costa", "Douglas Costa de Souza"],
    ultima_atualizacao: "30/10/25",
  },

  // Dudu
  {
    nome: "Dudu",
    background: "default",
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
    background: "diamond",
    descricao:
      "Zagueiro central rápido e versátil, considerado um dos melhores defensores de sua geração. Consolidou-se no Real Madrid, sendo peça-chave em múltiplas conquistas da UEFA Champions League. Também atua como lateral-direito e é campeão da Copa América com a Seleção Brasileira.",
    pagina: "https://www.instagram.com/edermilitao",
    numero: "3",
    posicao: "Zagueiro",
    dataNascimento: "18/01/1998",
    status: "Ativo",
    nacionalidade: "Brasil",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/af/2024/09/29/eder-militao-comemora-gol-marcado-pelo-real-madrid-contra-o-atletico-de-madri-pelo-campeonato-espanhol-1727642356503_v2_1x1.jpg",
    clubes: [
      createClub(
        "São Paulo",
        { inicio: "2017", fim: "2018" },
        { jogos: 57, gols: 4, assistencias: 0 }
      ),
      createClub(
        "Porto",
        { inicio: "2018", fim: "2019" },
        { jogos: 47, gols: 5, assistencias: 4 }
      ),
      createClub(
        "Real Madrid",
        { inicio: "2019", fim: "Presente" },
        { jogos: 182, gols: 13, assistencias: 6 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2018", fim: "Presente" },
      estatisticas: { jogos: 36, gols: 2, assistencias: 1 },
    },
    titulos: [
      // Real Madrid
      {
        nome: "UEFA Champions League",
        anos: "2022, 2024",
        clube: "Real Madrid",
      },
      {
        nome: "Campeonato Espanhol",
        anos: "2020, 2022, 2024",
        clube: "Real Madrid",
      },
      {
        nome: "Mundial de Clubes",
        anos: "2022, 2023",
        clube: "Real Madrid",
      },
      {
        nome: "Supercopa da UEFA",
        anos: "2022, 2025",
        clube: "Real Madrid",
      },
      {
        nome: "Supercopa da Espanha",
        anos: "2020, 2022, 2024",
        clube: "Real Madrid",
      },
      {
        nome: "Copa do Rei",
        anos: "2023",
        clube: "Real Madrid",
      },

      // Seleção Brasileira
      {
        nome: "Copa América",
        anos: "2019",
        clube: "Brasil",
        logoVariavel: true,
      },
      {
        nome: "Superclássico das Américas",
        anos: "2018",
        clube: "Brasil",
        logoVariavel: true,
      },

      // Porto
      {
        nome: "Defensor do Mês",
        logo: "Primeira Liga",
        anos: "5 vezes (2018/19)",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Equipe do Ano",
        logo: "Primeira Liga",
        anos: "2018/19",
        clube: "Individual",
        categoria: "individual",
      },
    ],
    tags: ["Eder Militão", "Eder Militao"],
    ultima_atualizacao: "28/10/25",
  },

  // Ederson
  {
    nome: "Ederson",
    background: "titanium",
    descricao:
      "Goleiro brasileiro, amplamente considerado um dos melhores do mundo em sua posição. É conhecido por suas defesas espetaculares, mas principalmente por sua habilidade inigualável com os pés, atuando como um líbero e sendo peça fundamental no esquema de jogo de Pep Guardiola no Manchester City.",
    pagina: "https://www.instagram.com/ederson93/",
    nacionalidade: "Brasil",
    imagem:
      "https://dynamo.kiev.ua/media/posts/2024/05/17/GettyImages-2152970887.jpg",
    numero: "31",
    posicao: "Goleiro",
    dataNascimento: "17/08/1993",
    status: "Ativo",
    curiosidades:
      "Ederson detém o recorde mundial do Guinness por realizar o chute mais longo de um goleiro. Ele é amplamente elogiado por sua capacidade de iniciar ataques com passes longos e precisos.",
    clubes: [
      createClub(
        "Benfica",
        { inicio: "2015", fim: "2017" },
        { jogos: 58, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Manchester City",
        { inicio: "2017", fim: "Presente" },
        { jogos: 380, gols: 0, assistencias: 5 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2017", fim: "Presente" },
      estatisticas: { jogos: 35, gols: 0, assistencias: 0 },
    },
    titulos: [
      // Manchester City
      {
        nome: "UEFA Champions League",
        anos: "2023",
        clube: "Manchester City",
      },
      {
        nome: "Campeonato Inglês",
        anos: "2018, 2019, 2021, 2022, 2023",
        clube: "Manchester City",
      },
      {
        nome: "Copa da Inglaterra",
        anos: "2019, 2023, 2024",
        clube: "Manchester City",
      },
      {
        nome: "Copa da Liga Inglesa",
        anos: "2018, 2019, 2020, 2021",
        clube: "Manchester City",
      },
      {
        nome: "Mundial de Clubes",
        anos: "2023",
        clube: "Manchester City",
      },

      // Seleção Brasileira
      {
        nome: "Copa América",
        anos: "2019",
        clube: "Brasil",
        logoVariavel: true,
      },
    ],
    tags: [
      "Ederson",
      "Goleiro",
      "Manchester City",
      "Brasil",
      "E31",
      "Líbero",
      "Campeão da Champions",
    ],
    ultima_atualizacao: "27/10/25",
  },

  // Edílson Capetinha
  {
    nome: "Edílson Capetinha",
    background: "default",
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

  // Endrick (Endrick Felipe Moreira de Sousa)
  {
    nome: "Endrick",
    background: "promise",
    descricao:
      "Atacante promissor, revelado pelo Palmeiras, onde conquistou diversos títulos e se destacou como artilheiro e revelação do Brasileirão. Transferiu-se para o Real Madrid em julho de 2024, após completar 18 anos, e é uma peça importante no futuro da Seleção Brasileira.",
    pagina: "https://www.instagram.com/endrick/",
    nacionalidade: "Brasil",
    imagem:
      "https://sports.sbt.com.br/_next/image?url=https%3A%2F%2Fsbt-sports-assets-prod.s3.sa-east-1.amazonaws.com%2FEndrick_Golden_Boy_903742464a.jpg&w=1920&q=90",
    numero: "9",
    posicao: "Centroavante",
    dataNascimento: "21/07/2006",
    status: "Ativo",
    clubes: [
      createClub(
        "Palmeiras",
        { inicio: "2022", fim: "2024" },
        { jogos: 82, gols: 21, assistencias: 4 }
      ),
      createClub(
        "Real Madrid",
        { inicio: "2024", fim: "Atual" },
        { jogos: 37, gols: 7, assistencias: 0 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2023", fim: "Atual" },
      estatisticas: { jogos: 7, gols: 3, assistencias: 0 },
    },
    titulos: [
      // Palmeiras
      {
        nome: "Campeonato Brasileiro",
        anos: "2022, 2023",
        clube: "Palmeiras",
      },
      {
        nome: "Supercopa do Brasil",
        anos: "2023",
        clube: "Palmeiras",
      },
      {
        nome: "Campeonato Paulista",
        anos: "2023, 2024",
        clube: "Palmeiras",
      },

      // Real Madrid
      {
        nome: "Supercopa da UEFA",
        anos: "2024",
        clube: "Real Madrid",
      },
      {
        nome: "Mundial de Clubes",
        anos: "2024",
        clube: "Real Madrid",
      },

      // Individuais
      {
        nome: "Revelação do Campeonato Brasileiro",
        logo: "Campeonato Brasileiro",
        anos: "2022",
        categoria: "individual",
      },
      {
        nome: "Bola de Prata - Revelação",
        logo: "ESPN",
        anos: "2023",
        categoria: "individual",
      },
      {
        nome: "Melhor Jogador do Campeonato Paulista",
        logo: "Campeonato Paulista",
        anos: "2024",
        categoria: "individual",
      },
    ],
    tags: ["Endrick", "Endrick Felipe", "Endrick Felipe Moreira de Sousa"],
    ultima_atualizacao: "29/10/25",
  },

  // Estevão
  {
    nome: "Estevão Willian",
    background: "promise",
    pagina: "https://www.instagram.com/estevaowillian/",
    nacionalidade: "Brasil",
    numero: "41",
    posicao: "Ponta-direita",
    dataNascimento: "24/04/2007",
    status: "Ativo",
    imagem:
      "https://lncimg.lance.com.br/uploads/2025/08/estevao-1-scaled-aspect-ratio-512-320.jpg",
    descricao:
      "Jovem promessa brasileira, apelidado de 'Messinho' devido à sua habilidade de drible e velocidade. Estevão se destacou nas categorias de base e no profissional do Palmeiras antes de ser contratado pelo Chelsea, em 2025.",
    clubes: [
      createClub(
        "Palmeiras",
        { inicio: "2024", fim: "2025" },
        { jogos: 41, gols: 10, assistencias: 5 }
      ),
      createClub(
        "Chelsea",
        { inicio: "2025", fim: "Presente" },
        { jogos: 15, gols: 2, assistencias: 3 }
      ),
    ],
    selecao: {},
    titulos: [
      // Palmeiras
      {
        nome: "Campeonato Brasileiro",
        anos: "2023",
        clube: "Palmeiras",
      },
      {
        nome: "Campeonato Paulista",
        anos: "2024",
        clube: "Palmeiras",
      },
      {
        nome: "Supercopa do Brasil",
        anos: "2023",
        clube: "Palmeiras",
      },
    ],
    tags: ["Estevao", "Estevão Willian", "Promessa"],
  },

  // Everton Cebolinha
  {
    nome: "Everton Cebolinha",
    background: "plate",
    imagem:
      "https://tntsports.com.br/__export/1718325351451/sites/esporteinterativo/img/2024/06/13/20240613-213214_2060267_2871.jpg",
    pagina: "https://www.instagram.com/evertons/",
    descricao:
      "Atacante brasileiro conhecido por sua velocidade, habilidade no drible e finalização precisa. Everton Cebolinha destacou-se no Grêmio, onde foi peça fundamental na conquista da Copa Libertadores e foi um dos principais jogadores na conquista da Copa América de 2019, e, posteriormente, ao futebol europeu, antes de retornar ao Brasil para atuar no Flamengo.",
    numero: "11",
    posicao: "Atacante",
    nacionalidade: "Brasil",
    dataNascimento: "22/03/1996",
    status: "Ativo",
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
        nome: "Bola de Prata do Brasileirão",
        logo: "Bola de Prata",
        anos: "2018",
        clube: "Individual",
        categoria: "individual",
      },
    ],
    tags: ["Everton", "Cebolinha", "Everton Cebolinha"],
    ultima_atualizacao: "28/10/25",
  },

  // Éverton Ribeiro
  {
    nome: "Éverton Ribeiro",
    background: "titanium",
    descricao:
      "Meio-campista clássico, extremamente técnico e conhecido por sua visão de jogo e dribles. Único jogador a ser bicampeão brasileiro consecutivo por dois clubes diferentes (Cruzeiro e Flamengo) e bicampeão da Libertadores. Foi eleito o Craque do Brasileirão por duas vezes e defendeu a Seleção Brasileira na Copa do Mundo de 2022.",
    pagina: "https://www.instagram.com/evertonri",
    numero: "10",
    posicao: "Meio-campista (Meia-armador)",
    dataNascimento: "10/04/1989",
    status: "Ativo",
    nacionalidade: "Brasil",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/72/2024/01/24/everton-ribeiro-comemora-primeiro-gol-pelo-bahia-1706143661502_v2_450x600.jpg",
    clubes: [
      createClub(
        "Corinthians",
        { inicio: "2007", fim: "2011" },
        { jogos: 18, gols: 0, assistencias: 0 }
      ),
      createClub(
        "São Caetano",
        { inicio: "2008", fim: "2010" },
        { jogos: 99, gols: 8, assistencias: 0 }
      ),
      createClub(
        "Coritiba",
        { inicio: "2011", fim: "2012" },
        { jogos: 81, gols: 23, assistencias: 0 }
      ),
      createClub(
        "Cruzeiro",
        { inicio: "2013", fim: "2015" },
        { jogos: 108, gols: 23, assistencias: 29 }
      ),
      createClub(
        "Al-Ahli",
        { inicio: "2015", fim: "2017" },
        { jogos: 106, gols: 26, assistencias: 25 }
      ),
      createClub(
        "Flamengo",
        { inicio: "2017", fim: "2023" },
        { jogos: 394, gols: 46, assistencias: 61 }
      ),
      createClub(
        "Bahia",
        { inicio: "2024", fim: "Presente" },
        { jogos: 114, gols: 9, assistencias: 15 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2014", fim: "2022" },
      estatisticas: { jogos: 22, gols: 3, assistencias: 0 },
    },
    titulos: [
      // Flamengo
      {
        nome: "Copa Libertadores",
        anos: "2019, 2022",
        clube: "Flamengo",
      },
      {
        nome: "Campeonato Brasileiro",
        anos: "2019, 2020",
        clube: "Flamengo",
      },
      {
        nome: "Copa do Brasil",
        anos: "2022",
        clube: "Flamengo",
      },
      {
        nome: "Recopa Sul-Americana",
        anos: "2020",
        clube: "Flamengo",
      },
      {
        nome: "Supercopa do Brasil",
        anos: "2020, 2021",
        clube: "Flamengo",
      },
      {
        nome: "Campeonato Carioca",
        anos: "2019, 2020, 2021",
        clube: "Flamengo",
      },

      // Cruzeiro
      {
        nome: "Campeonato Brasileiro",
        anos: "2013, 2014",
        clube: "Cruzeiro",
      },
      {
        nome: "Campeonato Mineiro",
        anos: "2014",
        clube: "Cruzeiro",
      },

      // Coritiba
      {
        nome: "Campeonato Paranaense",
        anos: "2011, 2012",
        clube: "Coritiba",
      },

      // Al-Ahli
      {
        nome: "UAE Pro League",
        anos: "2016",
        clube: "Al-Ahli",
      },
      {
        nome: "Copa do Nordeste",
        anos: "2024 (2025)",
        clube: "Bahia",
      },

      // Seleção Brasileira
      {
        nome: "Sul-Americano Sub-20",
        anos: "2009",
        clube: "Brasil",
        logoVariavel: true,
      },

      // Individuais
      {
        nome: "Prêmio Craque do Brasileirão",
        logo: "Campeonato Brasileiro",
        anos: "2013, 2014",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Bola de Ouro da Revista Placar",
        logo: "Placar",
        anos: "2013, 2014",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Bola de Prata da ESPN",
        logo: "ESPN",
        anos: "2013, 2014, 2019",
        clube: "Individual",
        categoria: "individual",
      },
    ],
    tags: ["Everton Ribeiro"],
    ultima_atualizacao: "28/10/25",
  },

  // Fabinho
  {
    nome: "Fabinho",
    background: "diamond",
    descricao:
      "Volante completo e versátil, Fabinho se destacou por sua força física, boa distribuição de bola e inteligência tática, sendo peça fundamental no meio-campo do Liverpool que conquistou a Champions League e a Premier League.",
    pagina: "https://www.instagram.com/fabinho_",
    nacionalidade: "Brasil",
    imagem:
      "https://resources.saudi-pro-league.pulselive.com/photo-resources/2024/10/31/a936a8e2-21b0-4048-8e37-47b6b5f41621/GettyImages-2165213163.jpg?width=1868&height=1136",
    numero: "8",
    posicao: "Volante",
    dataNascimento: "23/10/1993",
    status: "Ativo",
    clubes: [
      createClub(
        "Real Madrid Castilla",
        { inicio: "2012", fim: "2013" },
        { jogos: 30, gols: 2, assistencias: 0 }
      ),
      createClub(
        "Real Madrid",
        { inicio: "2012", fim: "2013" },
        { jogos: 1, gols: 0, assistencias: 1 }
      ),
      createClub(
        "AS Monaco",
        { inicio: "2013", fim: "2018" },
        { jogos: 233, gols: 31, assistencias: 14 }
      ),
      createClub(
        "Liverpool",
        { inicio: "2018", fim: "2023" },
        { jogos: 219, gols: 11, assistencias: 9 }
      ),
      createClub(
        "Al-Ittihad",
        { inicio: "2023", fim: "Presente" },
        { jogos: 56, gols: 4, assistencias: 4 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2015", fim: "2022" },
      estatisticas: { jogos: 29, gols: 0, assistencias: 0 },
    },
    titulos: [
      // Liverpool
      {
        nome: "UEFA Champions League",
        anos: "2018–19",
        clube: "Liverpool",
      },
      {
        nome: "Mundial de Clubes",
        anos: "2019",
        clube: "Liverpool",
      },
      {
        nome: "Campeonato Inglês",
        anos: "2019–20",
        clube: "Liverpool",
      },
      {
        nome: "Supercopa da UEFA",
        anos: "2019",
        clube: "Liverpool",
      },
      {
        nome: "Copa da Inglaterra",
        anos: "2021–22",
        clube: "Liverpool",
      },
      {
        nome: "Copa da Liga Inglesa",
        anos: "2021–22",
        clube: "Liverpool",
      },
      {
        nome: "Supercopa da Inglaterra",
        anos: "2022",
        clube: "Liverpool",
      },

      // AS Monaco
      {
        nome: "Campeonato Francês",
        anos: "2016–17",
        clube: "AS Monaco",
      },

      // Al-Ittihad
      {
        nome: "Campeonato Saudita",
        anos: "2024-25",
        clube: "Al-Ittihad",
      },
    ],
    tags: ["Fabinho"],
    ultima_atualizacao: "28/10/25",
  },

  // Fabrício Bruno
  {
    nome: "Fabrício Bruno",
    background: "plate",
    descricao:
      "Zagueiro rápido e de força física, conhecido pela sua capacidade de recuperação e bom jogo aéreo. Foi um dos pilares defensivos do Flamengo nas conquistas de Libertadores e Copas do Brasil, sendo convocado para a Seleção Brasileira em 2024.",
    pagina: "https://www.instagram.com/fabriciobruno96/",
    nacionalidade: "Brasil",
    imagem:
      "https://medias.itatiaia.com.br/dims4/default/3e0085d/2147483647/strip/false/crop/1010x1010+319+0/resize/1000x1000!/quality/90/?url=https%3A%2F%2Fk2-prod-radio-itatiaia.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fa7%2Fc1%2F2f2cb6e14cba85b721f2d5024549%2Fwhatsapp-image-2025-08-11-at-00-04-51.jpeg",
    numero: "15",
    posicao: "Zagueiro",
    dataNascimento: "12/02/1996",
    status: "Ativo",
    clubes: [
      createClub(
        "Cruzeiro",
        { inicio: "2016", fim: "2019" },
        { jogos: 34, gols: 1, assistencias: 0 }
      ),
      createClub(
        "Chapecoense",
        { inicio: "2017", fim: "2018" },
        { jogos: 56, gols: 2, assistencias: 0 }
      ),
      createClub(
        "Red Bull Bragantino",
        { inicio: "2020", fim: "2022" },
        { jogos: 82, gols: 3, assistencias: 2 }
      ),
      createClub(
        "Flamengo",
        { inicio: "2022", fim: "2024" },
        { jogos: 148, gols: 6, assistencias: 3 }
      ),
      createClub(
        "Cruzeiro",
        { inicio: "2025", fim: "Presente" },
        { jogos: 43, gols: 3, assistencias: 1 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2024", fim: "Presente" },
      estatisticas: { jogos: 4, gols: 0, assistencias: 0 },
    },
    titulos: [
      // Flamengo
      {
        nome: "Copa Libertadores",
        anos: "2022",
        clube: "Flamengo",
      },
      {
        nome: "Copa do Brasil",
        anos: "2022, 2024",
        clube: "Flamengo",
      },
      {
        nome: "Recopa Sul-Americana (Vice)",
        logo: "Recopa Sul-Americana",
        anos: "2020",
        clube: "Flamengo",
      },
      {
        nome: "Campeonato Carioca",
        anos: "2024",
        clube: "Flamengo",
      },

      // Cruzeiro
      {
        nome: "Campeonato Mineiro",
        anos: "2019",
        clube: "Cruzeiro",
      },
    ],
    tags: ["Fabrício Bruno"],
    ultima_atualizacao: "28/10/25",
  },

  // Fagner
  {
    nome: "Fagner",
    background: "titanium",
    descricao:
      "Lateral-direito histórico do Corinthians, conhecido pela raça, técnica na marcação e apoio ofensivo. Foi peça fundamental em dois títulos brasileiros do clube, além de ter sido o lateral-direito titular da Seleção Brasileira na Copa do Mundo de 2018.",
    pagina: "https://www.instagram.com/fagneroficial23/",
    nacionalidade: "Brasil",
    imagem: "https://pbs.twimg.com/media/GxSi9V4WAAASI_q?format=jpg&name=large",
    numero: "23",
    posicao: "Lateral-Direito",
    dataNascimento: "11/06/1989",
    status: "Ativo",
    clubes: [
      createClub(
        "Corinthians",
        { inicio: "2006", fim: "2007" },
        { jogos: 7, gols: 0, assistencias: 0 }
      ),
      createClub(
        "PSV Eindhoven",
        { inicio: "2007", fim: "2009" },
        { jogos: 41, gols: 1, assistencias: 1 }
      ),
      createClub(
        "Vasco da Gama",
        { inicio: "2009", fim: "2012" },
        { jogos: 149, gols: 14, assistencias: 10 }
      ),
      createClub(
        "Wolfsburg",
        { inicio: "2012", fim: "2014" },
        { jogos: 36, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Corinthians",
        { inicio: "2014", fim: "2024" },
        { jogos: 556, gols: 12, assistencias: 56 }
      ),
      createClub(
        "Cruzeiro",
        { inicio: "2025", fim: "Presente" },
        { jogos: 16, gols: 0, assistencias: 1 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2015", fim: "2019" },
      estatisticas: { jogos: 10, gols: 0, assistencias: 0 },
    },
    titulos: [
      // Seleção
      {
        nome: "Copa América",
        anos: "2019",
        clube: "Brasil",
        logoVariavel: true,
      },

      // Corinthians
      {
        nome: "Campeonato Brasileiro",
        anos: "2015, 2017",
        clube: "Corinthians",
      },
      {
        nome: "Campeonato Paulista",
        anos: "2017, 2018, 2019",
        clube: "Corinthians",
      },

      // Vasco
      {
        nome: "Copa do Brasil",
        anos: "2011",
        clube: "Vasco da Gama",
      },
      {
        nome: "Campeonato Brasileiro Série B",
        anos: "2009",
        clube: "Vasco da Gama",
      },

      // PSV
      {
        nome: "Campeonato Holandês",
        anos: "2007–08",
        clube: "PSV Eindhoven",
      },
    ],
    tags: ["Fagner"],
    ultima_atualizacao: "28/10/25",
  },

  // Fernandinho
  {
    nome: "Fernandinho",
    background: "default",
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
    background: "default",
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

  // Flávio Caça Rato
  {
    nome: "Flávio Caça Rato",
    background: "default",
    descricao:
      "Atacante folclórico e ídolo incontestável do Santa Cruz. Conhecido por sua raça, gols decisivos e irreverência, como o famoso gol do título da Série C (2013). Uma lenda do futebol pernambucano, frequentemente apelidado de 'CR7 Brasileiro' pelos torcedores.",
    pagina: "https://www.instagram.com/cr7.flavio/",
    numero: "7",
    posicao: "Atacante / Ponta Direita",
    dataNascimento: "29/06/1986",
    status: "Aposentado",
    nacionalidade: "Brasil",
    imagem:
      "https://s2-ge.glbimg.com/Z-rq2GVZzeYOFhKlsdc_9DrarHA=/59x149:1336x937/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/y/p/bj30ELTACNBIt8SYXq8w/cacerense-x-mutum-72.jpg",
    clubes: [
      createClub(
        "Sport",
        { inicio: "2005", fim: "2005" },
        { jogos: 21, gols: 5, assistencias: 0 }
      ),
      createClub(
        "Salgueiro",
        { inicio: "2006", fim: "2006" },
        { jogos: 18, gols: 2, assistencias: 0 }
      ),
      createClub(
        "SEV Hortolândia",
        { inicio: "2006", fim: "2007" },
        { jogos: 10, gols: 4, assistencias: 0 }
      ),
      createClub(
        "NK Omiš",
        { inicio: "2008", fim: "2009" },
        { jogos: 40, gols: 6, assistencias: 0 }
      ),
      createClub(
        "América de Natal",
        { inicio: "2008", fim: "2009" },
        { jogos: 7, gols: 1, assistencias: 0 }
      ),
      createClub(
        "Timbaúba",
        { inicio: "2010", fim: "2010" },
        { jogos: 10, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Cabense",
        { inicio: "2010", fim: "2011" },
        { jogos: 17, gols: 3, assistencias: 0 }
      ),
      createClub(
        "Santa Cruz",
        { inicio: "2011", fim: "2014" },
        { jogos: 124, gols: 20, assistencias: 0 }
      ),
      createClub(
        "Remo",
        { inicio: "2015", fim: "2015" },
        { jogos: 11, gols: 2, assistencias: 0 }
      ),
      createClub(
        "Guarani",
        { inicio: "2016", fim: "2016" },
        { jogos: 8, gols: 1, assistencias: 0 }
      ),
      createClub(
        "Duque de Caxias",
        { inicio: "2016", fim: "2016" },
        { jogos: 8, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Tupi",
        { inicio: "2017", fim: "2017" },
        { jogos: 11, gols: 4, assistencias: 0 }
      ),
      createClub(
        "América-PE",
        { inicio: "2017", fim: "2017" },
        { jogos: 3, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Vitória da Conquista",
        { inicio: "2018", fim: "2018" },
        { jogos: 6, gols: 1, assistencias: 0 }
      ),
      createClub(
        "Trindade-GO",
        { inicio: "2018", fim: "2018" },
        { jogos: 0, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Atlético Itapemirim-ES",
        { inicio: "2019", fim: "2019" },
        { jogos: 9, gols: 1, assistencias: 0 }
      ),
      createClub(
        "Serrano-PE",
        { inicio: "2019", fim: "2019" },
        { jogos: 0, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Decisão-PE",
        { inicio: "2019", fim: "2019" },
        { jogos: 8, gols: 2, assistencias: 0 }
      ),
      createClub(
        "Náutico-RR",
        { inicio: "2022", fim: "2022" },
        { jogos: 12, gols: 4, assistencias: 0 }
      ),
      createClub(
        "Cacerense",
        { inicio: "2022", fim: "2022" },
        { jogos: 0, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Atlético Torres",
        { inicio: "2023", fim: "2024" },
        { jogos: 0, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Sete de Setembro",
        { inicio: "2024", fim: "2025" },
        { jogos: 0, gols: 0, assistencias: 0 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "N/A", fim: "N/A" },
      estatisticas: { jogos: 0, gols: 0, assistencias: 0 },
    },
    titulos: [
      // Santa Cruz
      {
        nome: "Campeonato Pernambucano",
        anos: "2011, 2012 e 2013",
        clube: "Santa Cruz",
      },
      {
        nome: "Campeonato Brasileiro Série C",
        anos: "2013",
        clube: "Santa Cruz",
      },
      {
        nome: "Copa Pernambuco",
        anos: "2012",
        clube: "Santa Cruz",
      },

      // Individuais
      {
        nome: "Artilheiro da Copa Pernambuco",
        logo: "Copa Pernambuco",
        anos: "2012",
        categoria: "individual",
      },
    ],
    tags: ["Ídolo Santa Cruz", "Folclórico", "CR7 Brasileiro"],
    ultima_atualizacao: "29/10/25",
  },

  // Gabriel Barbosa
  {
    nome: "Gabriel Barbosa",
    background: "titanium",
    descricao:
      "Atacante brasileiro conhecido por sua finalização e habilidade, artilheiro em diversas competições, ganhando o apelido de Gabigol. É o maior artilheiro brasileiro da história da Copa Libertadores e foi eleito o 'Rei da América' em 2019.",
    pagina: "https://www.instagram.com/gabigol",
    nacionalidade: "Brasil",
    imagem:
      "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2025/01/17/532288004-542694910180da12ab0c1k-1.jpg",
    numero: "99",
    posicao: "Atacante",
    dataNascimento: "30/08/1996",
    status: "Ativo",
    clubes: [
      createClub(
        "Santos",
        { inicio: "2013", fim: "2016" },
        { jogos: 157, gols: 57, assistencias: 24 }
      ),
      createClub(
        "Inter de Milão",
        { inicio: "2016", fim: "2017" },
        { jogos: 10, gols: 1, assistencias: 0 }
      ),
      createClub(
        "Benfica",
        { inicio: "2017", fim: "2018" },
        { jogos: 5, gols: 1, assistencias: 0 }
      ),
      createClub(
        "Santos",
        { inicio: "2018", fim: "2018" },
        { jogos: 53, gols: 27, assistencias: 3 }
      ),
      createClub(
        "Flamengo",
        { inicio: "2019", fim: "2024" },
        { jogos: 308, gols: 161, assistencias: 44 }
      ),
      createClub(
        "Cruzeiro",
        { inicio: "2025", fim: "Presente" },
        { jogos: 40, gols: 13, assistencias: 2 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2016", fim: "2021" },
      estatisticas: { jogos: 18, gols: 5, assistencias: 2 },
    },
    titulos: [
      // Seleção Brasileira
      {
        nome: "Jogos Olímpicos",
        anos: "2016",
        clube: "Brasil",
        logoVariavel: true,
      }, // Flamengo

      {
        nome: "Copa Libertadores",
        anos: "2019, 2022",
        clube: "Flamengo",
      },
      {
        nome: "Campeonato Brasileiro",
        anos: "2019, 2020",
        clube: "Flamengo",
      },
      {
        nome: "Copa do Brasil",
        anos: "2022, 2024",
        clube: "Flamengo",
      },
      {
        nome: "Recopa Sul-Americana",
        anos: "2020",
        clube: "Flamengo",
      },
      {
        nome: "Supercopa do Brasil",
        anos: "2020, 2021",
        clube: "Flamengo",
      },
      {
        nome: "Campeonato Carioca",
        anos: "2019, 2020, 2021, 2024",
        clube: "Flamengo",
      }, // Santos

      {
        nome: "Campeonato Paulista",
        anos: "2015, 2016",
        clube: "Santos",
      }, // Individuais

      {
        nome: "Rei da América",
        logo: "Copa Libertadores",
        anos: "2019",
        categoria: "individual",
      },
      {
        nome: "Artilheiro da Copa Libertadores",
        logo: "Copa Libertadores",
        anos: "2019, 2021",
        categoria: "individual",
      },
      {
        nome: "Artilheiro do Campeonato Brasileiro",
        logo: "Campeonato Brasileiro",
        anos: "2018, 2019",
        categoria: "individual",
      },
    ],
    tags: ["Gabigol"],
    ultima_atualizacao: "29/10/25",
  },

  ,
  // Gabriel Jesus
  {
    nome: "Gabriel Jesus",
    background: "titanium",
    descricao:
      "Atacante com grande histórico de conquistas no Brasil e Europa. Foi protagonista na conquista do Brasileirão pelo Palmeiras, tetracampeão da Premier League pelo Manchester City e peça fundamental na Seleção Brasileira.",
    pagina: "https://www.instagram.com/dejesusoficial",
    nacionalidade: "Brasil",
    imagem:
      "https://lncimg.lance.com.br/cdn-cgi/image/width=1280,height=720,quality=75,background=white,fit=pad/uploads/2024/12/000_366F2NU-scaled-aspect-ratio-512-320.jpg",
    numero: "9",
    posicao: "Atacante",
    dataNascimento: "03/04/1997",
    status: "Ativo",
    clubes: [
      createClub(
        "Palmeiras",
        { inicio: "2015", fim: "2016" },
        { jogos: 83, gols: 28, assistencias: 9 }
      ),
      createClub(
        "Manchester City",
        { inicio: "2017", fim: "2022" },
        { jogos: 236, gols: 95, assistencias: 46 }
      ),
      createClub(
        "Arsenal",
        { inicio: "2022", fim: "Presente" },
        { jogos: 75, gols: 20, assistencias: 11 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2016", fim: "Presente" },
      estatisticas: { jogos: 64, gols: 19, assistencias: 13 },
    },
    titulos: [
      // Seleção Brasileira
      {
        nome: "Copa América",
        anos: "2019",
        clube: "Brasil",
        logoVariavel: true,
      },
      {
        nome: "Jogos Olímpicos",
        anos: "2016",
        clube: "Brasil",
        logoVariavel: true,
      },

      // Manchester City
      {
        nome: "Campeonato Inglês",
        anos: "2018, 2019, 2021, 2022",
        clube: "Manchester City",
      },
      {
        nome: "Copa da Liga Inglesa",
        anos: "2018, 2019, 2020, 2021",
        clube: "Manchester City",
      },
      {
        nome: "Copa da Inglaterra",
        anos: "2019",
        clube: "Manchester City",
      },
      {
        nome: "Supercopa da Inglaterra",
        anos: "2018, 2019",
        clube: "Manchester City",
      },

      // Palmeiras
      {
        nome: "Campeonato Brasileiro",
        anos: "2016",
        clube: "Palmeiras",
      },
      {
        nome: "Copa do Brasil",
        anos: "2015",
        clube: "Palmeiras",
      },

      // Individuais
      {
        nome: "Craque do Campeonato Brasileiro",
        logo: "Campeonato Brasileiro",
        anos: "2016",
        categoria: "individual",
      },
      {
        nome: "Bola de Ouro da Revista Placar",
        logo: "Placar",
        anos: "2016",
        categoria: "individual",
      },
    ],
    tags: [],
    ultima_atualizacao: "28/10/25",
  },

  // Gabriel Menino
  {
    nome: "Gabriel Menino",
    background: "default",
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
      "Ponta-direita brasileiro, amplamente considerado o melhor de todos os tempos em sua posição e um dos gênios do futebol. Garrincha era conhecido por sua alegria em campo, dribles desconcertantes (apesar de ter as pernas tortas devido a uma deficiência física) e por ser o grande herói da Seleção Brasileira na conquista do Bicampeonato Mundial em 1962.",
    pagina: "https://www.instagram.com/garrinchaoficial/",
    nacionalidade: "Brasil",
    imagem:
      "https://media.gettyimages.com/id/639617883/pt/foto/brazilian-soccer-legend-garrincha-from-botafogo.jpg?s=612x612&w=gi&k=20&c=pPL3wZwTAyPiG9yX39hcRxdzyxnrtk8h9TxL46wO9EI=",
    numero: "7",
    posicao: "Ponta-direita",
    dataNascimento: "28/10/1933",
    status: "Aposentado",
    curiosidades:
      "Garrincha é o único jogador na história a vencer a Bola de Ouro, a Chuteira de Ouro e a Copa do Mundo no mesmo torneio (1962). Além disso, ele nunca perdeu um jogo vestindo a camisa da Seleção Brasileira (43 vitórias e 7 empates).",
    clubes: [
      createClub(
        "Botafogo",
        { inicio: "1953", fim: "1965" },
        { jogos: 581, gols: 232, assistencias: 60 }
      ),
      createClub(
        "Corinthians",
        { inicio: "1966", fim: "1966" },
        { jogos: 13, gols: 2, assistencias: 0 }
      ),
      createClub(
        "Flamengo",
        { inicio: "1968", fim: "1969" },
        { jogos: 20, gols: 4, assistencias: 1 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "1955", fim: "1966" },
      estatisticas: { jogos: 50, gols: 12, assistencias: 15 },
    },
    titulos: [
      // Seleção Brasileira
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
        nome: "Taça Oswaldo Cruz",
        anos: "1958, 1961, 1962",
        clube: "Brasil",
      },

      // Botafogo
      {
        nome: "Campeonato Carioca",
        anos: "1957, 1961, 1962",
        clube: "Botafogo",
      },
      {
        nome: "Torneio Rio-São Paulo",
        anos: "1962, 1964",
        clube: "Botafogo",
      },

      // Individuais
      {
        nome: "Melhor Jogador da Copa do Mndo",
        logo: "Copa do Mundo",
        anos: "1962",
        clube: "Individual",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Chuteira de Ouro",
        logo: "Copa do Mundo",
        anos: "1962",
        clube: "Individual",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Seleção da Copa do Mundo",
        logo: "Copa do Mundo",
        anos: "1958",
        clube: "Individual",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Seleção da Copa do Mundo",
        logo: "Copa do Mundo",
        anos: "1962",
        clube: "Individual",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Hall da Fama",
        logo: "FIFA",
        anos: "1999",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Seleção de Futebol da América do Sul do Século XX",
        logo: "IFFHS",
        anos: "2000",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Time dos sonhos do Botafogo",
        logo: "Placar",
        anos: "1982, 1994, 2006",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Lendas do Futebol",
        logo: "IFFHS",
        anos: "2016",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Bola de Ouro Dream Team (Segunda Equipe)",
        logo: "France Football",
        anos: "2020",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Maior ídolo da História do Botafogo",
        logo: "O Globo",
        anos: "2020",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Seleção Brasileira de Todos os Tempos",
        logo: "IFFHS",
        anos: "2021",
        clube: "Individual",
        categoria: "individual",
      },
    ],
    tags: ["Garrincha", "Brasil", "G7"],
    ultima_atualizacao: "28/10/25",
  },

  // Gerson Santos
  {
    nome: "Gerson Santos",
    background: "titanium",
    descricao:
      "Meio-campista versátil, conhecido pela inteligência tática, técnica apurada e capacidade de ditar o ritmo de jogo. Foi peça fundamental e 'Coringa' nas maiores conquistas recentes do Flamengo, incluindo duas Copas Libertadores.",
    pagina: "https://www.instagram.com/gersonsantoss/",
    nacionalidade: "Brasil",
    imagem:
      "https://s2-oglobo.glbimg.com/RPWyoX-nxvkvclJmlrpp-FU_59g=/0x0:627x569/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2025/0/K/Pwcli0SIestYo6acAANw/screenshot-107.png",
    numero: "20",
    posicao: "Volante/Meia",
    dataNascimento: "20/05/1997",
    status: "Ativo",
    clubes: [
      createClub(
        "Fluminense",
        { inicio: "2014", fim: "2016" },
        { jogos: 65, gols: 7, assistencias: 4 }
      ),
      createClub(
        "Roma",
        { inicio: "2016", fim: "2018" },
        { jogos: 42, gols: 2, assistencias: 2 }
      ),
      createClub(
        "Fiorentina",
        { inicio: "2018", fim: "2019" },
        { jogos: 36, gols: 3, assistencias: 4 }
      ),
      createClub(
        "Flamengo",
        { inicio: "2019", fim: "2021" },
        { jogos: 109, gols: 7, assistencias: 10 }
      ),
      createClub(
        "Olympique de Marseille",
        { inicio: "2021", fim: "2022" },
        { jogos: 48, gols: 11, assistencias: 7 }
      ),
      createClub(
        "Flamengo",
        { inicio: "2023", fim: "2025" },
        { jogos: 144, gols: 12, assistencias: 13 }
      ),
      createClub(
        "Zenit",
        { inicio: "2025", fim: "Presente" },
        { jogos: 8, gols: 1, assistencias: 0 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2018", fim: "Presente" },
      estatisticas: { jogos: 8, gols: 0, assistencias: 0 },
    },
    titulos: [
      // Flamengo
      {
        nome: "Copa Libertadores",
        anos: "2019, 2022",
        clube: "Flamengo",
      },
      {
        nome: "Campeonato Brasileiro",
        anos: "2019, 2020",
        clube: "Flamengo",
      },
      {
        nome: "Copa do Brasil",
        anos: "2022",
        clube: "Flamengo",
      },
      {
        nome: "Recopa Sul-Americana",
        anos: "2020",
        clube: "Flamengo",
      },
      {
        nome: "Supercopa do Brasil",
        anos: "2020, 2021",
        clube: "Flamengo",
      },
      {
        nome: "Campeonato Carioca",
        anos: "2020, 2021, 2024",
        clube: "Flamengo",
      },

      // Individuais
      {
        nome: "Bola de Prata da Revista Placar",
        logo: "Placar",
        anos: "2019, 2020",
        categoria: "individual",
      },
      {
        nome: "Seleção do Campeonato Brasileiro",
        logo: "Campeonato Brasileiro",
        anos: "2019, 2020",
        categoria: "individual",
      },
    ],
    tags: ["Coringa"],
    ultima_atualizacao: "28/10/25",
  },

  // Gilberto Silva
  {
    nome: "Gilberto Silva",
    background: "plate",
    descricao:
      "Volante brasileiro conhecido por sua inteligência tática, posicionamento impecável e discrição. Gilberto Silva foi peça fundamental no meio-campo da Seleção Brasileira campeã do Mundo em 2002 e um dos 'Invencíveis' do Arsenal que conquistou a Premier League de 2003-04 sem derrotas.",
    pagina: "https://www.instagram.com/gilbertosilva/",
    nacionalidade: "Brasil",
    imagem:
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/02/11/11/silva.jpg",
    numero: "19",
    posicao: "Volante/Meio-campista Defensivo",
    dataNascimento: "07/10/1976",
    status: "Aposentado",
    curiosidades:
      "Durante sua passagem pelo Arsenal, o clube estabeleceu o recorde de 49 jogos consecutivos de invencibilidade na Premier League, um feito histórico até hoje. Ele era o 'muro invisível' do time.",
    clubes: [
      createClub(
        "Atlético Mineiro",
        { inicio: "2000", fim: "2002" },
        { jogos: 140, gols: 8, assistencias: 5 }
      ),
      createClub(
        "Arsenal",
        { inicio: "2002", fim: "2008" },
        { jogos: 244, gols: 24, assistencias: 15 }
      ),
      createClub(
        "Panathinaikos",
        { inicio: "2008", fim: "2011" },
        { jogos: 115, gols: 5, assistencias: 5 }
      ),
      createClub(
        "Grêmio",
        { inicio: "2011", fim: "2012" },
        { jogos: 59, gols: 1, assistencias: 0 }
      ),
      createClub(
        "Atlético Mineiro",
        { inicio: "2013", fim: "2013" },
        { jogos: 12, gols: 0, assistencias: 0 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2001", fim: "2010" },
      estatisticas: { jogos: 93, gols: 3, assistencias: 5 },
    },
    titulos: [
      // Seleção Brasileira
      {
        nome: "Copa do Mundo",
        anos: "2002",
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
        nome: "Copa das Confederações",
        anos: "2005, 2009",
        clube: "Brasil",
        logoVariavel: true,
      },

      // Arsenal
      {
        nome: "Campeonato Inglês",
        anos: "2003-04",
        clube: "Arsenal",
      },
      {
        nome: "Copa da Inglaterra",
        anos: "2003, 2005",
        clube: "Arsenal",
      },

      // Atlético Mineiro
      {
        nome: "Copa Libertadores",
        anos: "2013",
        clube: "Atlético Mineiro",
      },
      // Panathinaikos
      {
        nome: "Campeonato Grego",
        anos: "2010",
        clube: "Panathinaikos",
      },
    ],
    tags: [
      "Gilberto Silva",
      "Arsenal",
      "Brasil",
      "Volante",
      "Invencíveis",
      "Atlético Mineiro",
      "GS19",
    ],
  },

  // Gustavo Scarpa
  {
    nome: "Gustavo Scarpa",
    background: "default",
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
    background: "default",
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
    background: "titanium",
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
    background: "diamond",
    descricao:
      "Atacante brasileiro conhecido por sua velocidade, dribles e finalizações precisas. Jairzinho foi um dos principais jogadores da seleção brasileira campeã da Copa do Mundo de 1970.",
    pagina: "https://www.instagram.com/jairzinho_furacao/",
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

  // José Ferreira Neto - Craque Neto
  {
    nome: "José Ferreira Neto",
    background: "titanium",
    descricao:
      "Lendário meia-campista, ídolo máximo do Corinthians e capitão do time na conquista do primeiro Campeonato Brasileiro (1990). Canhoto de ouro, famoso por seus lançamentos e cobranças de falta indefensáveis. Medalhista de prata olímpico pela Seleção Brasileira.",
    pagina: "https://www.instagram.com/10neto",
    numero: "10",
    posicao: "Meia Ofensivo",
    dataNascimento: "09/09/1966",
    status: "Aposentado",
    nacionalidade: "Brasil",
    imagem:
      "https://f.i.uol.com.br/fotografia/2019/08/02/15647582005d4450b895737_1564758200_3x2_md.jpg",
    clubes: [
      createClub(
        "Guarani",
        { inicio: "1984", fim: "1986" },
        { jogos: 58, gols: 26, assistencias: 0 }
      ),
      createClub(
        "Bangu",
        { inicio: "1986", fim: "1986" },
        { jogos: 16, gols: 1, assistencias: 0 }
      ),
      createClub(
        "São Paulo",
        { inicio: "1987", fim: "1987" },
        { jogos: 33, gols: 5, assistencias: 0 }
      ),
      createClub(
        "Guarani",
        { inicio: "1988", fim: "1988" },
        { jogos: 19, gols: 7, assistencias: 0 }
      ),
      createClub(
        "Palmeiras",
        { inicio: "1988", fim: "1988" },
        { jogos: 30, gols: 5, assistencias: 0 }
      ),
      createClub(
        "Corinthians",
        { inicio: "1989", fim: "1993" },
        { jogos: 228, gols: 80, assistencias: 0 }
      ),
      createClub(
        "Millonarios",
        { inicio: "1993", fim: "1993" },
        { jogos: 10, gols: 3, assistencias: 0 }
      ),
      createClub(
        "Atlético Mineiro",
        { inicio: "1993", fim: "1993" },
        { jogos: 17, gols: 2, assistencias: 0 }
      ),
      createClub(
        "Santos",
        { inicio: "1994", fim: "1994" },
        { jogos: 18, gols: 3, assistencias: 0 }
      ),
      createClub(
        "Matsubara",
        { inicio: "1994", fim: "1994" },
        { jogos: 28, gols: 10, assistencias: 0 }
      ),
      createClub(
        "Guarani",
        { inicio: "1995", fim: "1995" },
        { jogos: 13, gols: 1, assistencias: 0 }
      ),
      createClub(
        "Araçatuba",
        { inicio: "1995", fim: "1995" },
        { jogos: 2, gols: 2, assistencias: 0 }
      ),
      createClub(
        "Corinthians",
        { inicio: "1996", fim: "1997" },
        { jogos: 20, gols: 1, assistencias: 0 }
      ),
      createClub(
        "Osan Indaiatuba",
        { inicio: "1997", fim: "1997" },
        { jogos: 22, gols: 5, assistencias: 0 }
      ),
      createClub(
        "Paulista",
        { inicio: "1998", fim: "1998" },
        { jogos: 11, gols: 6, assistencias: 0 }
      ),
      createClub(
        "Deportivo Italia",
        { inicio: "1998", fim: "1999" },
        { jogos: 5, gols: 1, assistencias: 0 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "1988", fim: "1993" },
      estatisticas: { jogos: 26, gols: 7, assistencias: 0 },
    },
    titulos: [
      // Corinthians
      {
        nome: "Campeonato Brasileiro",
        anos: "1990",
        clube: "Corinthians",
      },
      {
        nome: "Campeonato Paulista",
        anos: "1997",
        clube: "Corinthians",
      },
      {
        nome: "Supercopa do Brasil",
        anos: "1991",
        clube: "Corinthians",
      },

      // São Paulo
      {
        nome: "Campeonato Paulista",
        anos: "1987",
        clube: "São Paulo",
      },

      // Seleção
      {
        nome: "Medalha de Prata Olímpica",
        logo: "Jogos Olímpicos",
        anos: "1988",
        clube: "Brasil",
        logoVariavel: true,
      },

      // Individuais
      {
        nome: "Bola de Prata da Revista Placar",
        logo: "Placar",
        anos: "1991",
        categoria: "individual",
      },
      {
        nome: "Artilheiro da Supercopa do Brasil",
        logo: "Supercopa do Brasil",
        anos: "1991",
        categoria: "individual",
      },
    ],
    tags: ["Craque Neto"],
    ultima_atualizacao: "29/10/25",
  },

  // Júlio César
  {
    nome: "Júlio César",
    background: "default",
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
    background: "default",
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
    background: "diamond",
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

  // Léo Ortiz (Leonardo Rech Ortiz)
  {
    nome: "Léo Ortiz",
    background: "default",
    descricao:
      "Zagueiro (e volante) brasileiro conhecido pela qualidade na saída de bola, liderança e versatilidade. Foi um dos pilares do Red Bull Bragantino e um dos zagueiros mais caros do Flamengo. Também foi convocado para a Seleção Brasileira.",
    pagina: "https://www.instagram.com/leortiz33/",
    nacionalidade: "Brasil",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/85/2024/04/11/leo-ortiz-durante-a-vitoria-do-flamengo-sobre-o-palestino-na-libertadores-1712809854387_v2_3x4.jpg",
    numero: "3",
    posicao: "Zagueiro",
    dataNascimento: "03/01/1996",
    status: "Ativo",
    clubes: [
      createClub(
        "Internacional",
        { inicio: "2017", fim: "2018" },
        { jogos: 31, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Sport",
        { inicio: "2018", fim: "2018" },
        { jogos: 18, gols: 1, assistencias: 0 }
      ),
      createClub(
        "Red Bull Brasil",
        { inicio: "2019", fim: "2019" },
        { jogos: 16, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Red Bull Bragantino",
        { inicio: "2019", fim: "2024" },
        { jogos: 198, gols: 14, assistencias: 7 }
      ),
      createClub(
        "Flamengo",
        { inicio: "2024", fim: "Presente" },
        { jogos: 83, gols: 6, assistencias: 2 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2021", fim: "Presente" },
      estatisticas: { jogos: 2, gols: 0, assistencias: 0 },
    },
    titulos: [
      // Flamengo
      {
        nome: "Campeonato Carioca",
        anos: "2024, 2025",
        clube: "Flamengo",
      },
      {
        nome: "Copa do Brasil",
        anos: "2024",
        clube: "Flamengo",
      },
      {
        nome: "Supercopa Rei",
        anos: "2025",
        clube: "Flamengo",
      },

      // Red Bull Bragantino
      {
        nome: "Campeonato Brasileiro Série B",
        anos: "2019",
        clube: "Red Bull Bragantino",
      },
      {
        nome: "Campeonato Paulista do Interior",
        anos: "2020",
        clube: "Red Bull Bragantino",
      },

      // Internacional
      {
        nome: "Recopa Gaúcha",
        anos: "2017",
        clube: "Internacional",
      },

      // Prêmios Individuais
      {
        nome: "Bola de Prata do Brasileirão",
        logo: "Bola de Prata",
        anos: "2021",
        categoria: "individual",
      },
      {
        nome: "Seleção do Campeonato Paulista",
        logo: "Campeonato Paulista",
        anos: "2021, 2022",
        categoria: "individual",
      },
      {
        nome: "Seleção da Copa Sul-Americana",
        logo: "Copa Sul-Americana",
        anos: "2021",
        categoria: "individual",
      },
      {
        nome: "Seleção da Copa do Brasil",
        logo: "Copa do Brasil",
        anos: "2024",
        categoria: "individual",
      },
    ],
    tags: ["Leo Ortiz", "Leonardo Rech Ortiz"],
    ultima_atualizacao: "29/10/25",
  },

  // Léo Pereira (Leonardo Pereira)
  {
    nome: "Léo Pereira",
    background: "default",
    descricao:
      "Zagueiro brasileiro conhecido pela velocidade, bom passe e liderança na defesa. Destaque no Athletico Paranaense, firmou-se como titular no Flamengo, onde é bicampeão da Libertadores.",
    pagina: "https://www.instagram.com/leopereira4",
    nacionalidade: "Brasil",
    imagem:
      "https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2023/07/04/1588391585-leo-pereira.jpeg",
    numero: "4",
    posicao: "Zagueiro",
    dataNascimento: "31/01/1996",
    status: "Ativo",
    clubes: [
      createClub(
        "Athletico Paranaense",
        { inicio: "2014", fim: "2014" },
        { jogos: 7, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Guaratinguetá",
        { inicio: "2015", fim: "2015" },
        { jogos: 1, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Náutico",
        { inicio: "2015", fim: "2016" },
        { jogos: 12, gols: 1, assistencias: 0 }
      ),
      createClub(
        "Athletico Paranaense",
        { inicio: "2016", fim: "2017" },
        { jogos: 21, gols: 1, assistencias: 0 }
      ),
      createClub(
        "Orlando City",
        { inicio: "2017", fim: "2017" },
        { jogos: 3, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Athletico Paranaense",
        { inicio: "2018", fim: "2019" },
        { jogos: 85, gols: 8, assistencias: 1 }
      ),
      createClub(
        "Flamengo",
        { inicio: "2020", fim: "Presente" },
        { jogos: 250, gols: 15, assistencias: 5 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2013", fim: "2014" },
      estatisticas: { jogos: 0, gols: 0, assistencias: 0 },
      participacoes: ["Sul-Americano Sub-17 2013", "Mundial Sub-17 2013"],
    },
    titulos: [
      // Flamengo
      {
        nome: "Copa Libertadores",
        anos: "2020, 2022",
        clube: "Flamengo",
      },
      {
        nome: "Recopa Sul-Americana",
        anos: "2020",
        clube: "Flamengo",
      },
      {
        nome: "Campeonato Brasileiro",
        anos: "2020",
        clube: "Flamengo",
      },
      {
        nome: "Copa do Brasil",
        anos: "2022, 2024",
        clube: "Flamengo",
      },
      {
        nome: "Supercopa do Brasil",
        anos: "2020, 2021",
        clube: "Flamengo",
      },
      {
        nome: "Campeonato Carioca",
        anos: "2020, 2021, 2024, 2025",
        clube: "Flamengo",
      }, // Athletico Paranaense

      {
        nome: "Copa Sul-Americana",
        anos: "2018",
        clube: "Athletico Paranaense",
      },
      {
        nome: "Copa do Brasil",
        anos: "2019",
        clube: "Athletico Paranaense",
      },
      {
        nome: "Campeonato Paranaense",
        anos: "2016, 2018",
        clube: "Athletico Paranaense",
      },
    ],
    tags: ["Leo Pereira"],
    ultima_atualizacao: "29/10/25",
  },

  // Lincoln
  {
    nome: "Lincoln",
    background: "default",
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

  // Lucas Moura
  {
    nome: "Lucas Moura",
    background: "titanium",
    descricao:
      "Meia-atacante brasileiro conhecido por sua velocidade vertiginosa e habilidade nos dribles. Lucas Moura teve uma carreira de sucesso na Europa, atuando como peça-chave no Paris Saint-Germain e sendo herói do Tottenham na semifinal da Champions League. Atualmente, é líder e ídolo em seu clube de origem, o São Paulo.",
    pagina: "https://www.instagram.com/lucasmoura/",
    nacionalidade: "Brasil",
    imagem:
      "https://agenciaesporte.com.br/wp-content/uploads/2024/08/Lucas-Moura.jpg",
    numero: "7",
    posicao: "Meia-atacante",
    dataNascimento: "13/08/1992",
    status: "Ativo",
    clubes: [
      createClub(
        "São Paulo",
        { inicio: "2010", fim: "2012" },
        { jogos: 128, gols: 33, assistencias: 26 }
      ),
      createClub(
        "Paris Saint-Germain",
        { inicio: "2013", fim: "2018" },
        { jogos: 229, gols: 46, assistencias: 50 }
      ),
      createClub(
        "Tottenham Hotspur",
        { inicio: "2018", fim: "2023" },
        { jogos: 221, gols: 39, assistencias: 28 }
      ),
      createClub(
        "São Paulo",
        { inicio: "2023", fim: "Presente" },
        { jogos: 50, gols: 10, assistencias: 5 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2011", fim: "2018" },
      estatisticas: { jogos: 35, gols: 4, assistencias: 5 },
    },
    titulos: [
      // São Paulo
      {
        nome: "Copa do Brasil",
        anos: "2023",
        clube: "São Paulo",
      },
      {
        nome: "Copa Sul-Americana",
        anos: "2012",
        clube: "São Paulo",
      },

      // Paris Saint-Germain
      {
        nome: "Campeonato Francês",
        anos: "2014, 2015, 2016, 2018",
        clube: "Paris Saint-Germain",
      },
      {
        nome: "Copa da França",
        anos: "2015, 2016, 2017",
        clube: "Paris Saint-Germain",
      },
      {
        nome: "Copa da Liga Francesa",
        anos: "2014, 2015, 2016, 2017",
        clube: "Paris Saint-Germain",
      },

      // Seleção Brasileira
      {
        nome: "Copa das Confederações",
        anos: "2013",
        clube: "Brasil",
        logoVariavel: true,
      },
    ],
    tags: ["Lucas Moura", "LM7"],
  },

  //Lucas Paquetá
  {
    nome: "Lucas Paquetá",
    background: "titanium",
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
    pagina: "https://www.instagram.com/lucio_l3/",
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

  // Luiz Araújo (Luiz de Araújo Guimarães Neto)
  {
    nome: "Luiz Araújo",
    background: "default",
    descricao:
      "Atacante (Ponta Direita) conhecido pela velocidade, habilidade no drible e chuta forte de perna esquerda. Formado no São Paulo, foi campeão francês pelo Lille e contratado pelo Flamengo após passagem na MLS.",
    pagina: "https://www.instagram.com/l.araujo11oficial/",
    nacionalidade: "Brasil",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/ea/2025/05/15/luiz-araujo-comemora-seu-gol-pelo-flamengo-sobre-a-ldu-1747360659785_v2_450x600.jpg",
    numero: "7",
    posicao: "Ponta Direita",
    dataNascimento: "02/06/1996",
    status: "Ativo",
    clubes: [
      createClub(
        "São Paulo",
        { inicio: "2016", fim: "2017" },
        { jogos: 49, gols: 9, assistencias: 7 }
      ),
      createClub(
        "Novorizontino",
        { inicio: "2016", fim: "2016" },
        { jogos: 5, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Lille OSC",
        { inicio: "2017", fim: "2021" },
        { jogos: 136, gols: 18, assistencias: 8 }
      ),
      createClub(
        "Atlanta United",
        { inicio: "2021", fim: "2023" },
        { jogos: 63, gols: 13, assistencias: 9 }
      ),
      createClub(
        "Flamengo",
        { inicio: "2023", fim: "Presente" },
        { jogos: 106, gols: 17, assistencias: 16 }
      ),
    ],
    selecao: {
      nome: "Nenhuma",
      periodo: { inicio: "-", fim: "-" },
      estatisticas: { jogos: 0, gols: 0, assistencias: 0 },
      participacoes: [],
    },
    titulos: [
      // Flamengo
      {
        nome: "Campeonato Carioca",
        anos: "2024, 2025",
        clube: "Flamengo",
      },
      {
        nome: "Copa do Brasil",
        anos: "2024",
        clube: "Flamengo",
      },
      {
        nome: "Supercopa Rei",
        anos: "2025",
        clube: "Flamengo",
      }, // Lille

      {
        nome: "Campeonato Francês",
        anos: "2020–21",
        clube: "Lille OSC",
      },
      {
        nome: "Supercopa da França",
        anos: "2021",
        clube: "Lille OSC",
      }, // São Paulo

      {
        nome: "Copa Libertadores Sub-20",
        anos: "2016",
        clube: "São Paulo",
        categoria: "base",
      }, // Individuaias

      {
        nome: "Artilheiro da Copa Libertadores Sub-20",
        logo: "Copa Libertadores Sub-20",
        anos: "2016",
        categoria: "individual",
      },
    ],
    tags: ["Luiz Araújo", "Luiz de Araújo Guimarães Neto"],
    ultima_atualizacao: "29/10/25",
  },

  //Marcelo
  {
    nome: "Marcelo",
    background: "diamond",
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
    background: "diamond",
    descricao:
      "Zagueiro brasileiro de classe mundial e capitão do Paris Saint-Germain e da Seleção Brasileira. Conhecido por sua inteligência tática, velocidade e liderança. É o jogador com mais partidas na história do PSG, tendo conquistado o inédito título da UEFA Champions League (2025) pelo clube, além de ser campeão da Copa Libertadores (Corinthians) e medalhista de ouro olímpico (Brasil).",
    pagina: "https://www.instagram.com/marquinhosm5/",
    nacionalidade: "Brasil",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/32/2024/02/19/marquinhos-joga-no-paris-saint-germain-desde-2013-e-tem-mais-4-anos-de-contrato-1708370727790_v2_3x4.jpg",
    numero: "5",
    posicao: "Zagueiro",
    dataNascimento: "14/05/1994",
    status: "Ativo",
    clubes: [
      createClub(
        "Corinthians",
        { inicio: "2012", fim: "2013" },
        { jogos: 14, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Roma",
        { inicio: "2012", fim: "2013" },
        { jogos: 30, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Paris Saint-Germain",
        { inicio: "2013", fim: "Atual" },
        { jogos: 494, gols: 42, assistencias: 11 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2013", fim: "Atual" },
      estatisticas: { jogos: 101, gols: 7, assistencias: 0 },
    },
    titulos: [
      // Corinthians
      {
        nome: "Copa Libertadores",
        anos: "2012",
        clube: "Corinthians",
      },
      // Paris Saint-Germain
      {
        nome: "UEFA Champions League",
        anos: "2025",
        clube: "Paris Saint-Germain",
      },
      {
        nome: "Campeonato Francês",
        anos: "2014, 2015, 2016, 2018, 2019, 2020, 2022, 2023, 2024, 2025",
        clube: "Paris Saint-Germain",
      },
      {
        nome: "Copa da França",
        anos: "2015, 2016, 2017, 2018, 2020, 2021, 2024, 2025",
        clube: "Paris Saint-Germain",
      },
      {
        nome: "Copa da Liga Francesa",
        anos: "2014, 2015, 2016, 2017, 2018, 2020",
        clube: "Paris Saint-Germain",
      },
      {
        nome: "Supercopa da França",
        anos: "2013, 2014, 2015, 2017, 2018, 2019, 2022, 2023, 2024",
        clube: "Paris Saint-Germain",
      },
      { nome: "Supercopa da UEFA", anos: "2025", clube: "Paris Saint-Germain" },
      // Seleção Brasileira
      {
        nome: "Copa América",
        anos: "2019",
        clube: "Brasil",
        logoVariavel: true,
      },
      {
        nome: "Jogos Olímpicos",
        anos: "2016",
        clube: "Brasil",
        logoVariavel: true,
      },
    ],
    tags: [],
    ultima_atualizacao: "27/10/25",
  },

  //Miranda
  {
    nome: "Miranda",
    background: "default",
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
    background: "titanium",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/3a/2024/09/18/marinho-do-fortaleza-em-acao-no-jogo-contra-o-corinthians-pela-ida-das-quartas-da-sul-americana-1726659062687_v2_4x3.jpg",
    pagina: "https://www.instagram.com/marinhooficial/",
    descricao:
      "Marinho ganhou notoriedade no cenário nacional por suas passagens de destaque por clubes como Vitória e Santos, onde foi vice-campeão e eleito Rei da América da Copa Libertadores de 2020. Atualmente defende o Fortaleza.",
    numero: "15",
    posicao: "Atacante",
    nacionalidade: "Brasil",
    dataNascimento: "29/05/1990",
    status: "Ativo",
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
        nome: "Bola de Prata do Brasileirão",
        logo: "Bola de Prata",
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
    tags: ["Marinho"],
    ultima_atualizacao: "27/10/25",
  },

  // Matheus Cunha (Matheus Cunha Queiroz)
  {
    nome: "Matheus Cunha",
    background: "default",
    descricao:
      "Goleiro brasileiro formado nas categorias de base do São Paulo e consolidado no elenco profissional do Flamengo, onde conquistou títulos importantes, incluindo a Copa Libertadores e a Copa do Brasil.",
    pagina: "https://www.instagram.com/matheuscunha_01/",
    nacionalidade: "Brasil",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/a0/2023/05/11/matheus-cunha-goleiro-do-flamengo-1683777425519_v2_1535x1920.jpg",
    numero: "25",
    posicao: "Goleiro",
    dataNascimento: "24/05/2001",
    status: "Ativo",
    clubes: [
      createClub(
        "São Paulo",
        { inicio: "2016", fim: "2020" },
        { jogos: 0, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Flamengo",
        { inicio: "2021", fim: "Presente" },
        { jogos: 55, gols: 0, assistencias: 0 }
      ),
    ],
    selecao: {
      nome: "Nenhuma",
      periodo: { inicio: "-", fim: "-" },
      estatisticas: { jogos: 0, gols: 0, assistencias: 0 },
      participacoes: [],
    },
    titulos: [
      // Flamengo
      {
        nome: "Copa Libertadores",
        anos: "2022",
        clube: "Flamengo",
      },
      {
        nome: "Copa do Brasil",
        anos: "2022, 2024",
        clube: "Flamengo",
      },
      {
        nome: "Supercopa Rei",
        anos: "2025",
        clube: "Flamengo",
      },
      {
        nome: "Campeonato Carioca",
        anos: "2021, 2024, 2025",
        clube: "Flamengo",
      },
      {
        nome: "Campeonato Brasileiro Sub-20",
        anos: "2021",
        clube: "Flamengo",
        categoria: "base",
      },
      {
        nome: "Copa do Brasil Sub-20",
        anos: "2021",
        clube: "Flamengo",
        categoria: "base",
      },
      {
        nome: "Supercopa do Brasil Sub-20",
        logo: "Supercopa do Brasil",
        anos: "2021",
        clube: "Flamengo",
        categoria: "base",
      },
    ],
    tags: ["Matheus Cunha", "Matheus Cunha Queiroz"],
    ultima_atualizacao: "29/10/25",
  },

  // Matheus Gonçalves (Matheus Gonçalves Martins)
  {
    nome: "Matheus Gonçalves",
    background: "default",
    descricao:
      "Jovem atacante (ponta direita) revelado nas categorias de base do Flamengo, onde conquistou a tríplice coroa Sub-17. Após passagem pelo profissional, foi vendido ao Al-Ahli, da Arábia Saudita, em 2025.",
    pagina: "https://www.instagram.com/oficialm10_/",
    nacionalidade: "Brasil",
    imagem:
      "https://s2-ge.glbimg.com/VriR9t1_4i2AO8qVarvfBWrm4aQ=/3000x0/filters:format(jpeg)/https://i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2025/Q/o/T8zIM4T96zDIzr3hO6Pg/mg.jpg",
    numero: "11",
    posicao: "Ponta Direita",
    dataNascimento: "18/08/2005",
    status: "Ativo",
    clubes: [
      createClub(
        "Flamengo",
        { inicio: "2022", fim: "2023" },
        { jogos: 10, gols: 1, assistencias: 0 }
      ),
      createClub(
        "Botafogo",
        { inicio: "2023", fim: "2023" },
        { jogos: 13, gols: 0, assistencias: 1 }
      ),
      createClub(
        "Flamengo",
        { inicio: "2024", fim: "2025" },
        { jogos: 15, gols: 2, assistencias: 0 }
      ),
      createClub(
        "Al-Ahli SFC",
        { inicio: "2025", fim: "Presente" },
        { jogos: 5, gols: 0, assistencias: 2 }
      ),
    ],
    selecao: {
      nome: "Brasil Sub-20",
      periodo: { inicio: "2024", fim: "Presente" },
      estatisticas: { jogos: 0, gols: 0, assistencias: 0 },
      participacoes: ["Período de treinos e amistosos"],
    },
    titulos: [
      // Flamengo
      {
        nome: "Campeonato Carioca",
        anos: "2024",
        clube: "Flamengo",
      },
      {
        nome: "Campeonato Brasileiro Sub-17",
        anos: "2021",
        clube: "Flamengo",
      },
      {
        nome: "Copa do Brasil Sub-17",
        anos: "2021",
        clube: "Flamengo",
      },
      {
        nome: "Campeonato Carioca Sub-17",
        logo: "Campeonato Carioca",
        anos: "2021",
        clube: "Flamengo",
      },
      {
        nome: "Supercopa do Brasil Sub-17",
        logo: "Supercopa do Brasil",
        anos: "2022",
        clube: "Flamengo",
      },
      {
        nome: "Campeonato Brasileiro Sub-20",
        anos: "2023",
        clube: "Flamengo",
      },
      {
        nome: "Mundial de Clubes Sub-20",
        anos: "2024, 2025",
        clube: "Flamengo",
      },
    ],
    tags: ["Matheus Gonçalves", "Matheus Gonçalves Martins"],
    ultima_atualizacao: "29/10/25",
  },

  // Neymar Jr.
  {
    nome: "Neymar Jr.",
    background: "diamond",
    descricao:
      "Atacante brasileiro conhecido por sua habilidade, dribles e finalizações. Considerado um dos melhores jogadores de sua geração, Neymar brilhou por Santos, Barcelona e PSG, teve passagem pelo Al-Hilal e retornou ao Santos em 2025.",
    pagina: "https://www.instagram.com/neymarjr/",
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
        { jogos: 225, gols: 136, assistencias: 64 }
      ),
      createClub(
        "Barcelona",
        { inicio: "2013", fim: "2017" },
        { jogos: 186, gols: 105, assistencias: 76 }
      ),
      createClub(
        "Paris Saint-Germain",
        { inicio: "2017", fim: "2023" },
        { jogos: 173, gols: 118, assistencias: 77 }
      ),
      createClub(
        "Al-Hilal",
        { inicio: "2023", fim: "2025" },
        { jogos: 7, gols: 1, assistencias: 3 }
      ),
      createClub(
        "Santos",
        { inicio: "2025", fim: "atual" },
        { jogos: 21, gols: 6, assistencias: 3 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2010", fim: "atual" },
      estatisticas: { jogos: 128, gols: 79, assistencias: 40 },
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
        nome: "Campeonato Espanhol",
        anos: "2015, 2016",
        clube: "Barcelona",
      },
      {
        nome: "Copa do Rei",
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
        nome: "Campeonato Francês",
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
    tags: [
      "Neymar",
      "Neymar Jr.",
      "Neymar Junior",
      "Ney",
      "NJR",
      "Menino da Vila",
      "Barcelona",
      "PSG",
    ],
    ultima_atualizacao: "27/10/25",
  },

  // Paulinho (José Paulo Bezerra Maciel Júnior)
  {
    nome: "Paulinho",
    background: "diamond",
    descricao:
      "Volante de grande poder de chegada ao ataque, Paulinho foi um dos pilares do time campeão da Libertadores e Mundial do Corinthians (2012). Teve passagens por grandes clubes europeus como Tottenham e Barcelona, e foi titular da Seleção Brasileira na Copa das Confederações de 2013 e Copas do Mundo de 2014 e 2018.",
    pagina: "https://www.instagram.com/paulinhop8/",
    nacionalidade: "Brasil",
    imagem:
      "https://soutimao.com.br/wp-content/uploads/2023/06/paulinho-corinthians.jpg",
    numero: "8",
    posicao: "Volante / Meia Central",
    dataNascimento: "25/07/1988",
    status: "Aposentado",
    clubes: [
      createClub(
        "Bragantino",
        { inicio: "2009", fim: "2010" },
        { jogos: 45, gols: 14, assistencias: 0 }
      ),
      createClub(
        "Corinthians",
        { inicio: "2010", fim: "2013" },
        { jogos: 167, gols: 34, assistencias: 0 }
      ),
      createClub(
        "Tottenham Hotspur",
        { inicio: "2013", fim: "2015" },
        { jogos: 67, gols: 10, assistencias: 0 }
      ),
      createClub(
        "Guangzhou Evergrande",
        { inicio: "2015", fim: "2017" },
        { jogos: 95, gols: 27, assistencias: 0 }
      ),
      createClub(
        "Barcelona",
        { inicio: "2017", fim: "2018" },
        { jogos: 49, gols: 9, assistencias: 0 }
      ),
      createClub(
        "Guangzhou Evergrande",
        { inicio: "2018", fim: "2021" },
        { jogos: 81, gols: 47, assistencias: 0 }
      ),
      createClub(
        "Corinthians",
        { inicio: "2022", fim: "2024" },
        { jogos: 52, gols: 6, assistencias: 0 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2011", fim: "2018" },
      estatisticas: { jogos: 56, gols: 13, assistencias: 0 },
    },
    titulos: [
      // Corinthians
      {
        nome: "Campeonato Brasileiro",
        anos: "2011",
        clube: "Corinthians",
      },
      {
        nome: "Copa Libertadores",
        anos: "2012",
        clube: "Corinthians",
      },
      {
        nome: "Mundial de Clubes",
        anos: "2012",
        clube: "Corinthians",
      },
      {
        nome: "Campeonato Paulista",
        anos: "2013",
        clube: "Corinthians",
      },

      // Seleção Brasileira
      {
        nome: "Copa das Confederações",
        anos: "2013",
        clube: "Brasil",
        logoVariavel: true,
      },

      // Guangzhou Evergrande
      {
        nome: "Superliga Chinesa",
        anos: "2015, 2019",
        clube: "Guangzhou Evergrande",
      },
      {
        nome: "Liga dos Campeões da AFC",
        anos: "2015",
        clube: "Guangzhou Evergrande",
      },
      {
        nome: "Copa da China",
        anos: "2016",
        clube: "Guangzhou Evergrande",
      },
      {
        nome: "Supercopa da China",
        anos: "2016, 2017",
        clube: "Guangzhou Evergrande",
      },

      // Barcelona
      {
        nome: "Campeonato Espanhol",
        anos: "2017–18",
        clube: "Barcelona",
      },
      {
        nome: "Copa do Rei",
        anos: "2017–18",
        clube: "Barcelona",
      },

      // Prêmios Individuais
      {
        nome: "Bola de Prata da ESPN",
        logo: "ESPN",
        anos: "2011",
        categoria: "individual",
      },
      {
        nome: "Prêmio Craque do Brasileirão",
        logo: "Campeonato Brasileiro",
        anos: "2011, 2013",
        categoria: "individual",
      },
      {
        nome: "Time da América",
        logo: "El País",
        anos: "2012",
        categoria: "individual",
      },
      {
        nome: "Melhor Volante da Copa Libertadores",
        logo: "Copa Libertadores",
        anos: "2012",
        categoria: "individual",
      },
      {
        nome: "Seleção da Copa Libertadores",
        logo: "Copa Libertadores",
        anos: "2012",
        categoria: "individual",
      },
      {
        nome: "100º melhor jogador do ano de 2012",
        logo: "The Guardian",
        anos: "2012",
        categoria: "individual",
      },
      {
        nome: "Bola de Bronze do Mundial de Clubes",
        logo: "Mundial de Clubes",
        anos: "2012",
        categoria: "individual",
      },
      {
        nome: "Seleção do Campeonato Paulista",
        logo: "Campeonato Paulista",
        anos: "2012, 2013",
        categoria: "individual",
      },
      {
        nome: "Bola de Bronze da Copa das Confederações",
        logo: "Copa das Confederações",
        anos: "2013",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Seleção da Copa das Confederações",
        logo: "Copa das Confederações",
        anos: "2013",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Melhor Jogador da Superliga Chinesa",
        logo: "Superliga Chinesa",
        anos: "2018",
        categoria: "individual",
      },
      {
        nome: "Time do Ano da AFC",
        logo: "AFC",
        anos: "2015",
        categoria: "individual",
      },
    ],
    tags: ["Paulinho", "José Paulo Bezerra Maciel Júnior"],
    ultima_atualizacao: "30/10/25",
  },

  // Pedro
  {
    nome: "Pedro Guilherme",
    background: "titanium",
    descricao:
      "Centroavante de área letal, conhecido pelo instinto goleador e pela capacidade de finalização. Foi o Artilheiro e Melhor Jogador da Copa Libertadores de 2022, além de membro da Seleção Brasileira na Copa do Mundo de 2022.",
    pagina: "https://www.instagram.com/pedroguilherme",
    nacionalidade: "Brasil",
    imagem:
      "https://sportbuzz.com.br/wp-content/uploads/2024/12/pedro-flamengo.jpg",
    numero: "9",
    posicao: "Atacante (Centroavante)",
    dataNascimento: "20/06/1997",
    status: "Ativo",
    clubes: [
      createClub(
        "Fluminense",
        { inicio: "2016", fim: "2019" },
        { jogos: 93, gols: 31, assistencias: 5 }
      ),
      createClub(
        "Fiorentina",
        { inicio: "2019", fim: "2020" },
        { jogos: 4, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Flamengo",
        { inicio: "2020", fim: "Presente" },
        { jogos: 299, gols: 150, assistencias: 37 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2022", fim: "Presente" },
      estatisticas: { jogos: 6, gols: 1, assistencias: 0 },
    },
    titulos: [
      // Flamengo
      {
        nome: "Copa Libertadores",
        anos: "2022",
        clube: "Flamengo",
      },
      {
        nome: "Campeonato Brasileiro",
        anos: "2020",
        clube: "Flamengo",
      },
      {
        nome: "Copa do Brasil",
        anos: "2022, 2024",
        clube: "Flamengo",
      },
      {
        nome: "Supercopa do Brasil",
        anos: "2020, 2021, 2025",
        clube: "Flamengo",
      },
      {
        nome: "Recopa Sul-Americana",
        anos: "2020",
        clube: "Flamengo",
      },
      {
        nome: "Campeonato Carioca",
        anos: "2020, 2021, 2024",
        clube: "Flamengo",
      },

      // Fluminense
      {
        nome: "Primeira Liga do Brasil",
        anos: "2016",
        clube: "Fluminense",
      },

      // Individuais
      {
        nome: "Rei da América",
        logo: "Copa Libertadores",
        anos: "2022",
        categoria: "individual",
      },
      {
        nome: "Artilheiro da Copa Libertadores",
        logo: "Copa Libertadores",
        anos: "2022",
        categoria: "individual",
      },
      {
        nome: "Artilheiro do Mundial de Clubes",
        logo: "Mundial de Clubes",
        anos: "2022",
        categoria: "individual",
      },
      {
        nome: "Artilheiro do Campeonato Carioca",
        logo: "Campeonato Carioca",
        anos: "2018, 2024",
        categoria: "individual",
      },
    ],
    tags: [],
    ultima_atualizacao: "29/10/25",
  },

  // Pelé
  {
    nome: "Pelé",
    background: "gold",
    descricao:
      "Considerado por muitos o maior jogador de futebol de todos os tempos, Pelé era conhecido por sua habilidade técnica, dribles desconcertantes e incrível capacidade de marcar gols. Ele conquistou três Copas do Mundo com a Seleção Brasileira e revolucionou o futebol mundial.",
    pagina: "https://www.santosfc.com.br/pele/",
    numero: "10",
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
        nome: "Copa Sul-Americana",
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
        nome: "Bola de Prata do Brasileirão",
        logo: "Bola de Prata",
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
    background: "diamond",
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
        "Inter de Milão",
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
      { nome: "Supercopa da Itália", anos: "2010", clube: "Inter de Milão" },
      { nome: "Copa da Itália", anos: "2011", clube: "Inter de Milão" },
      //Barcelona
      {
        nome: "Campeonato Espanhol",
        anos: "2018, 2019",
        clube: "Barcelona",
      },
      {
        nome: "Copa do Rei",
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
      { nome: "Campeonato Alemão", anos: "2020", clube: "Bayern de Munique" },
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
        logo: "Campeonato Alemão",
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
        logo: "Campeonato Inglês",
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
    background: "diamond",
    descricao:
      "Lateral-direito multicampeão, conhecido pela garra, consistência defensiva e longevidade no futebol de alto nível. Ídolo no Bayern de Munique e fundamental nas conquistas da Libertadores pelo Flamengo e da Copa do Brasil pelo São Paulo. Um dos poucos jogadores a vencer a Champions League e a Libertadores.",
    pagina: "https://www.instagram.com/rafinha13/",
    numero: "13",
    posicao: "Lateral-Direito",
    dataNascimento: "07/09/1985",
    status: "Aposentado",
    nacionalidade: "Brasil",
    imagem:
      "https://ogimg.infoglobo.com.br/in/23330524-0c1-3d8/FT1086A/80395161_Soccer-FootballBundesligaEintracht-Frankfurt-v-Bayern-MunichCommerzbank-Arena-Fran.jpg",
    clubes: [
      createClub(
        "Coritiba",
        { inicio: "2003", fim: "2005" },
        { jogos: 53, gols: 6, assistencias: 0 }
      ),
      createClub(
        "Schalke 04",
        { inicio: "2005", fim: "2010" },
        { jogos: 198, gols: 11, assistencias: 21 }
      ),
      createClub(
        "Genoa",
        { inicio: "2010", fim: "2011" },
        { jogos: 37, gols: 2, assistencias: 0 }
      ),
      createClub(
        "Bayern de Munique",
        { inicio: "2011", fim: "2019" },
        { jogos: 266, gols: 6, assistencias: 29 }
      ),
      createClub(
        "Flamengo",
        { inicio: "2019", fim: "2020" },
        { jogos: 46, gols: 0, assistencias: 6 }
      ),
      createClub(
        "Olympiacos",
        { inicio: "2020", fim: "2021" },
        { jogos: 22, gols: 0, assistencias: 6 }
      ),
      createClub(
        "Grêmio",
        { inicio: "2021", fim: "2021" },
        { jogos: 43, gols: 0, assistencias: 4 }
      ),
      createClub(
        "São Paulo",
        { inicio: "2022", fim: "2024" },
        { jogos: 116, gols: 1, assistencias: 5 }
      ),
      createClub(
        "Coritiba",
        { inicio: "2025", fim: "2025" },
        { jogos: 10, gols: 0, assistencias: 0 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2008", fim: "2017" },
      estatisticas: { jogos: 4, gols: 0, assistencias: 0 },
    },
    titulos: [
      // Coritiba
      { nome: "Campeonato Paranaense", anos: "2003, 2004", clube: "Coritiba" },

      // Bayern de Munique
      {
        nome: "UEFA Champions League",
        anos: "2012–13",
        clube: "Bayern de Munique",
      },
      {
        nome: "Mundial de Clubes",
        anos: "2014",
        clube: "Bayern de Munique",
      },
      { nome: "UEFA Supercopa", anos: "2013", clube: "Bayern de Munique" },
      {
        nome: "Campeonato Alemão",
        anos: "2013, 2014, 2015, 2016, 2017, 2018, 2019",
        clube: "Bayern de Munique",
      },
      {
        nome: "Copa da Alemanha",
        anos: "2013, 2014, 2016, 2019",
        clube: "Bayern de Munique",
      },
      {
        nome: "Supertaça da Alemanha",
        anos: "2012, 2016, 2017, 2018",
        clube: "Bayern de Munique",
      },

      //Flamengo
      { nome: "Copa Libertadores", anos: "2019", clube: "Flamengo" },
      { nome: "Recopa Sul-Americana", anos: "2020", clube: "Flamengo" },
      {
        nome: "Campeonato Brasileiro",
        anos: "2019",
        clube: "Flamengo",
      },
      {
        nome: "Supercopa do Brasil",
        anos: "2020",
        clube: "Flamengo",
      },
      { nome: "Campeonato Carioca", anos: "2020", clube: "Flamengo" },

      //Grêmio
      { nome: "Campeonato Gaúcho", anos: "2021", clube: "Grêmio" },

      // Olympiacos
      { nome: "Super Liga Grega", anos: "2021", clube: "Olympiacos" },

      // São Paulo
      { nome: "Copa do Brasil", anos: "2023", clube: "São Paulo" },
      {
        nome: "Supercopa do Brasil",
        anos: "2024",
        clube: "São Paulo",
      },

      // Seleção
      {
        nome: "Bronze Olímpico",
        logo: "Jogos Olímpicos",
        anos: "2008",
        clube: "Brasil Olímpico",
        logoVariavel: true,
      },
    ],
    tags: [],
    ultima_atualizacao: "29/10/25",
  },

  // Raphael Veiga
  {
    nome: "Raphael Veiga",
    background: "default",
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

  // Raphinha
  {
    nome: "Raphinha",
    background: "titanium",
    descricao:
      "Ponta-direita brasileiro conhecido por sua velocidade, habilidade no drible e precisão nos cruzamentos e chutes de média distância. Raphinha se destacou no Leeds United antes de se transferir para o Barcelona, onde se firmou como titular e conquistou títulos importantes. É um jogador constante na Seleção Brasileira.",
    pagina: "https://www.instagram.com/raphaelbelloli/",
    nacionalidade: "Brasil",
    imagem:
      "https://www.365scores.com/pt-br/news/magazine/wp-content/uploads/2025/09/raphinha-barcelona-2025-26-scaled-e1757879837264.jpg",
    numero: "11",
    posicao: "Ponta-direita",
    dataNascimento: "14/12/1996",
    status: "Ativo",
    clubes: [
      createClub(
        "Sporting CP",
        { inicio: "2018", fim: "2019" },
        { jogos: 41, gols: 8, assistencias: 7 }
      ),
      createClub(
        "Rennes",
        { inicio: "2019", fim: "2020" },
        { jogos: 36, gols: 8, assistencias: 7 }
      ),
      createClub(
        "Leeds United",
        { inicio: "2020", fim: "2022" },
        { jogos: 67, gols: 17, assistencias: 12 }
      ),
      createClub(
        "Barcelona",
        { inicio: "2022", fim: "Presente" },
        { jogos: 120, gols: 30, assistencias: 35 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2021", fim: "Presente" },
      estatisticas: { jogos: 30, gols: 7, assistencias: 8 },
    },
    titulos: [
      // Barcelona
      {
        nome: "Campeonato Espanhol",
        anos: "2022-23, 2024-25",
        clube: "Barcelona",
      },
      {
        nome: "Supercopa da Espanha",
        anos: "2023",
        clube: "Barcelona",
      },

      // Sporting CP
      {
        nome: "Taça de Portugal",
        anos: "2019",
        clube: "Sporting CP",
      },
      {
        nome: "Taça da Liga",
        anos: "2019",
        clube: "Sporting CP",
      },
    ],
    tags: ["Raphinha", "R11"],
    ultima_atualizacao: "27/10/25",
  },

  //Reinier
  {
    nome: "Reinier",
    background: "default",
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

  // Renato Augusto
  {
    nome: "Renato Augusto",
    background: "plate",
    descricao:
      "Meia elegante e técnico, Renato Augusto é conhecido por sua visão de jogo e passes precisos. Ídolo do Corinthians e medalhista de ouro olímpico (2016), encerrou sua carreira aos 37 anos, em setembro de 2025.",
    pagina: "https://www.instagram.com/renatoaugusto/",
    nacionalidade: "Brasil",
    imagem:
      "https://cdn.meutimao.com.br/_upload/jogador/renato-soares-de-oliveira-augusto-no-corinthians_z_corinthians.jpg",
    numero: "8",
    posicao: "Meia",
    dataNascimento: "08/02/1988",
    status: "Aposentado",
    clubes: [
      createClub(
        "Flamengo",
        { inicio: "2005", fim: "2008" },
        { jogos: 104, gols: 6, assistencias: 0 }
      ),
      createClub(
        "Bayer Leverkusen",
        { inicio: "2008", fim: "2012" },
        { jogos: 108, gols: 8, assistencias: 14 }
      ),
      createClub(
        "Corinthians",
        { inicio: "2013", fim: "2015" },
        { jogos: 119, gols: 14, assistencias: 22 }
      ),
      createClub(
        "Beijing Guoan",
        { inicio: "2016", fim: "2021" },
        { jogos: 150, gols: 40, assistencias: 35 }
      ),
      createClub(
        "Corinthians",
        { inicio: "2021", fim: "2023" },
        { jogos: 124, gols: 15, assistencias: 15 }
      ),
      createClub(
        "Fluminense",
        { inicio: "2024", fim: "2025" },
        { jogos: 35, gols: 1, assistencias: 2 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2011", fim: "2018" },
      estatisticas: { jogos: 32, gols: 5, assistencias: 3 },
    },
    titulos: [
      // Flamengo
      {
        nome: "Copa do Brasil",
        anos: "2006",
        clube: "Flamengo",
      },
      {
        nome: "Campeonato Carioca",
        anos: "2007, 2008",
        clube: "Flamengo",
      },
      // Corinthians
      {
        nome: "Recopa Sul-Americana",
        anos: "2013",
        clube: "Corinthians",
      },
      {
        nome: "Campeonato Brasileiro",
        anos: "2015",
        clube: "Corinthians",
      },

      // Beijing Guoan
      {
        nome: "Copa da China",
        anos: "2018",
        clube: "Beijing Guoan",
      },

      // Fluminense
      {
        nome: "Recopa Sul-Americana",
        anos: "2024",
        clube: "Fluminense",
      },

      // Seleção Olímpica
      {
        nome: "Jogos Olímpicos",
        anos: "2016",
        clube: "Brasil",
        logoVariavel: true,
      },

      // Individuais
      {
        nome: "Prêmio Craque do Brasileirão",
        logo: "Campeonato Brasileiro",
        anos: "2015",
        categoria: "individual",
      },
    ],
    tags: ["Renato Augusto"],
    ultima_atualizacao: "30/10/25",
  },

  // Renê
  {
    nome: "Renê",
    background: "default",
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
    background: "titanium",
    descricao:
      "Atacante de garra e velocidade, consolidou sua carreira na Premier League e se tornou um dos principais nomes da Seleção Brasileira, onde foi artilheiro olímpico e autor do Gol Mais Bonito da Copa do Mundo de 2022.",
    pagina: "https://www.instagram.com/richarlison",
    nacionalidade: "Brasil",
    imagem:
      "https://www.reuters.com/resizer/v2/HXSLEOKTHZLPTNIULDKF5OZSVU.jpg?auth=139e174829848d7290f3822d4dd70b9aecd012c37ee2e0b4603ae94a0a86420d&height=2400&width=1920&quality=80&smart=true",
    numero: "9",
    posicao: "Atacante (Centroavante/Ponta)",
    dataNascimento: "10/05/1997",
    status: "Ativo",
    clubes: [
      createClub(
        "América Mineiro",
        { inicio: "2015", fim: "2016" },
        { jogos: 24, gols: 9, assistencias: 4 }
      ),
      createClub(
        "Fluminense",
        { inicio: "2016", fim: "2017" },
        { jogos: 67, gols: 19, assistencias: 5 }
      ),
      createClub(
        "Watford",
        { inicio: "2017", fim: "2018" },
        { jogos: 41, gols: 5, assistencias: 4 }
      ),
      createClub(
        "Everton",
        { inicio: "2018", fim: "2022" },
        { jogos: 152, gols: 53, assistencias: 15 }
      ),
      createClub(
        "Tottenham Hotspur",
        { inicio: "2022", fim: "Presente" },
        { jogos: 94, gols: 22, assistencias: 11 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2018", fim: "Presente" },
      estatisticas: { jogos: 54, gols: 20, assistencias: 4 },
    },
    titulos: [
      // Tottenham Hotspur
      {
        nome: "UEFA Europa League",
        anos: "2025",
        clube: "Tottenham Hotspur",
      },
      // Seleção
      {
        nome: "Jogos Olímpicos",
        anos: "2020",
        clube: "Brasil",
        logoVariavel: true,
      },
      {
        nome: "Copa América",
        anos: "2019",
        clube: "Brasil",
        logoVariavel: true,
      },
      // Individuais
      {
        nome: "Gol Mais Bonito da Copa do Mundo",
        logo: "Copa do Mundo",
        anos: "2022",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Chuteira de Ouro dos Jogos Olímpicos",
        logo: "Jogos Olímpicos",
        anos: "2020",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Artilheiro da Seleção Brasileira na Copa do Mundo",
        logo: "Copa do Mundo",
        anos: "2022",
        categoria: "individual",
        logoVariavel: true,
      },
    ],
    tags: [],
    ultima_atualizacao: "29/10/25",
  },

  // Rivaldo
  {
    nome: "Rivaldo",
    background: "diamond",
    descricao:
      "Meia-atacante/Segundo atacante brasileiro de classe mundial, conhecido por sua técnica excepcional, seus chutes de longa distância, seus golaços de bicicleta e seu pé esquerdo potente. Rivaldo foi o grande nome do Barcelona no final dos anos 90 e peça-chave no pentacampeonato mundial da Seleção Brasileira em 2002.",
    pagina: "https://www.instagram.com/rivaldo/",
    nacionalidade: "Brasil",
    imagem:
      "https://i.pinimg.com/736x/51/95/da/5195da4333e50b2f8dcdd24fc07ff6a5.jpg",
    numero: "10",
    posicao: "Meia-atacante/Segundo Atacante",
    dataNascimento: "19/04/1972",
    status: "Aposentado",
    curiosidades:
      "Rivaldo é um dos poucos jogadores na história a conquistar a Bola de Ouro, a Copa do Mundo e a Liga dos Campeões. Em 2001, marcou um hat-trick lendário contra o Valencia, incluindo um gol de bicicleta nos minutos finais, que garantiu a vaga do Barcelona na Champions League.",
    clubes: [
      createClub(
        "Palmeiras",
        { inicio: "1994", fim: "1996" },
        { jogos: 100, gols: 55, assistencias: 10 }
      ),
      createClub(
        "Deportivo La Coruña",
        { inicio: "1996", fim: "1997" },
        { jogos: 41, gols: 21, assistencias: 10 }
      ),
      createClub(
        "Barcelona",
        { inicio: "1997", fim: "2002" },
        { jogos: 235, gols: 130, assistencias: 51 }
      ),
      createClub(
        "AC Milan",
        { inicio: "2002", fim: "2003" },
        { jogos: 40, gols: 8, assistencias: 6 }
      ),
      createClub(
        "Olympiacos",
        { inicio: "2004", fim: "2007" },
        { jogos: 101, gols: 43, assistencias: 15 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "1993", fim: "2003" },
      estatisticas: { jogos: 74, gols: 35, assistencias: 15 },
    },
    titulos: [
      // Individuais
      {
        nome: "Bola de Ouro",
        anos: "1999",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Melhor Jogador do Mundo",
        logo: "FIFA",
        anos: "1999",
        clube: "Individual",
        categoria: "individual",
      },

      // Seleção Brasileira
      {
        nome: "Copa do Mundo",
        anos: "2002",
        clube: "Brasil",
        logoVariavel: true,
      },
      {
        nome: "Copa América",
        anos: "1999",
        clube: "Brasil",
        logoVariavel: true,
      },

      // Barcelona
      {
        nome: "Campeonato Espanhol",
        anos: "1998, 1999",
        clube: "Barcelona",
      },

      // AC Milan
      {
        nome: "UEFA Champions League",
        anos: "2003",
        clube: "AC Milan",
      },
      {
        nome: "Copa da Itália",
        anos: "2003",
        clube: "AC Milan",
      },
    ],
    tags: [
      "Rivaldo",
      "Barcelona",
      "Brasil",
      "Meia-atacante",
      "R10",
      "Ballon d'Or",
      "Campeão Mundial",
      "Canhoto",
    ],
  },

  // Rivellino
  {
    nome: "Rivellino",
    background: "gold",
    descricao:
      "Meia-atacante/Ponta-esquerda lendário do futebol brasileiro. Rivellino era conhecido por seu potente chute de perna esquerda, sua vasta cabeleira, seus dribles desconcertantes (sendo o inventor do famoso 'Elástico') e por ser uma das estrelas da Seleção Brasileira tricampeã do mundo em 1970.",
    pagina: "https://www.instagram.com/rivellino10/",
    nacionalidade: "Brasil",
    imagem: "https://www.rbsdirect.com.br/imagesrc/15826591.jpg?w=700",
    numero: "10",
    posicao: "Meia-atacante/Ponta-esquerda",
    dataNascimento: "01/01/1946",
    status: "Aposentado",
    curiosidades:
      "Rivellino é creditado como o inventor do drible 'Elástico' (também conhecido como 'Flip-Flap'), que foi mais tarde popularizado por Ronaldinho Gaúcho. No Corinthians, é carinhosamente lembrado como o 'Reizinho do Parque'.",
    clubes: [
      createClub(
        "Corinthians",
        { inicio: "1965", fim: "1974" },
        { jogos: 474, gols: 140, assistencias: 40 }
      ),
      createClub(
        "Fluminense",
        { inicio: "1975", fim: "1978" },
        { jogos: 158, gols: 55, assistencias: 15 }
      ),
      createClub(
        "Al-Hilal",
        { inicio: "1978", fim: "1981" },
        { jogos: 59, gols: 23, assistencias: 5 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "1965", fim: "1978" },
      estatisticas: { jogos: 122, gols: 43, assistencias: 15 },
    },
    titulos: [
      // Seleção Brasileira
      {
        nome: "Copa do Mundo",
        anos: "1970",
        clube: "Brasil",
        logoVariavel: true,
      },

      // Fluminense
      {
        nome: "Campeonato Carioca",
        anos: "1975, 1976, 1977",
        clube: "Fluminense",
      },

      // Corinthians
      {
        nome: "Torneio Rio-São Paulo",
        anos: "1966",
        clube: "Corinthians",
      },

      // Individuais
      {
        nome: "Bola de Prata da Revista Placar",
        logo: "Placar",
        anos: "1971, 1973",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Time das Estrelas da Copa do Mundo",
        logo: "Copa do Mundo",
        anos: "1970",
        clube: "Individual",
        categoria: "individual",
        logoVariavel: true,
      },
    ],
    tags: [
      "Rivellino",
      "Corinthians",
      "Fluminense",
      "R10",
      "Reizinho do Parque",
    ],
  },

  // Roberto Carlos
  {
    nome: "Roberto Carlos",
    background: "diamond",
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
    background: "diamond",
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
        { inicio: "2023", fim: "2025" },
        { jogos: 33, gols: 9, assistencias: 7 }
      ),
      createClub(
        "Al-Sadd",
        { inicio: "2025", fim: "Presente" },
        { jogos: 0, gols: 0, assistencias: 0 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2014", fim: "Presente" },
      estatisticas: { jogos: 55, gols: 17, assistencias: 7 },
    },
    titulos: [
      // Individuais
      {
        nome: "Equipe ideal da Bundesliga",
        logo: "Campeonato Alemão",
        anos: "2014",
        categoria: "individual",
      },
      {
        nome: "Revelação da Bundesliga",
        logo: "Campeonato Alemão",
        anos: "2014",
        categoria: "individual",
      },
      {
        nome: "Melhor Jogador do mês do Liverpool",
        logo: "Liverpool",
        anos: "2x 2016, 2018",
        categoria: "individual",
      },
      {
        nome: "Jogador do mês da Premier League",
        logo: "Campeonato Inglês",
        anos: "2016",
        categoria: "individual",
      },
      {
        nome: "Jogador do mês da PFA",
        logo: "PFA",
        anos: "2016",
        categoria: "individual",
      },
      {
        nome: "Equipe ideal da Liga dos Campeões da UEFA",
        logo: "UEFA Champions League",
        anos: "2018",
        categoria: "individual",
      },
      {
        nome: "Samba de Ouro",
        anos: "2018",
        categoria: "individual",
      },
      {
        nome: "Melhor jogador da final do Mundial de Clubes",
        logo: "Mundial de Clubes",
        anos: "2019",
        categoria: "individual",
      },
      {
        nome: "Melhor jogador da Liga dos Campeões da AFC",
        logo: "AFC",
        anos: "2024",
        categoria: "individual",
      },

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
        nome: "Campeonato Inglês",
        anos: "2020",
        clube: "Liverpool",
      },
      {
        nome: "Copa da Liga Inglesa",
        anos: "2022",
        clube: "Liverpool",
      },
      {
        nome: "Copa da Inglaterra",
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
    ],
    tags: ["Roberto Firmino"],
    ultima_atualizacao: "29/10/25",
  },

  // Robinho
  {
    nome: "Robinho",
    background: "default",
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

  // Rodinei (Rodinei Marcelo de Almeida)
  {
    nome: "Rodinei",
    background: "default",
    descricao:
      "Lateral-direito brasileiro conhecido por sua intensidade ofensiva. Teve passagens marcantes por Ponte Preta, Flamengo e Internacional, sendo peça-chave nas conquistas da Libertadores e da Copa do Brasil de 2022 pelo Fla e, mais recentemente, campeão da Liga Conferência da UEFA pelo Olympiacos.",
    pagina: "https://www.instagram.com/pretinhorodi_oficial/",
    nacionalidade: "Brasil",
    imagem: "https://fla-media.mundobola.com/media/2025/03/rodinei.jpg",
    numero: "23",
    posicao: "Lateral Direito",
    dataNascimento: "29/01/1992",
    status: "Ativo",
    clubes: [
      createClub(
        "Ponte Preta",
        { inicio: "2014", fim: "2015" },
        { jogos: 74, gols: 2, assistencias: 9 }
      ),
      createClub(
        "Flamengo",
        { inicio: "2016", fim: "2019" },
        { jogos: 159, gols: 5, assistencias: 13 }
      ),
      createClub(
        "Internacional",
        { inicio: "2020", fim: "2021" },
        { jogos: 52, gols: 3, assistencias: 9 }
      ),
      createClub(
        "Flamengo",
        { inicio: "2022", fim: "2022" },
        { jogos: 64, gols: 4, assistencias: 7 }
      ),
      createClub(
        "Olympiacos",
        { inicio: "2023", fim: "Presente" },
        { jogos: 117, gols: 7, assistencias: 22 }
      ),
    ],
    selecao: {
      nome: "Nenhuma",
      periodo: { inicio: "-", fim: "-" },
      estatisticas: { jogos: 0, gols: 0, assistencias: 0 },
      participacoes: [],
    },
    titulos: [
      // Olympiacos
      {
        nome: "UEFA Conference League",
        anos: "2024",
        clube: "Olympiacos",
      },

      // Flamengo
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
        nome: "Campeonato Brasileiro",
        anos: "2019",
        clube: "Flamengo",
      },
      {
        nome: "Campeonato Carioca",
        anos: "2017, 2019",
        clube: "Flamengo",
      },
    ],
    tags: ["Rodinei", "Rodinei Marcelo de Almeida"],
    ultima_atualizacao: "29/10/25",
  },

  // Rodrigo Caio (Rodrigo Caio Coquette Russo)
  {
    nome: "Rodrigo Caio",
    background: "plate",
    descricao:
      "Ex-zagueiro (e volante) formado no São Paulo e multicampeão pelo Flamengo, onde foi peça fundamental nas conquistas da Libertadores (2019 e 2022) e do Campeonato Brasileiro (2019 e 2020). Encerrou a carreira como jogador em maio de 2025 e atualmente é auxiliar técnico do Flamengo.",
    pagina: "https://www.instagram.com/rodrigocaio_/",
    nacionalidade: "Brasil",
    imagem:
      "https://tntsports.com.br/__export/1662748924441/sites/esporteinterativo/img/2022/09/09/gettyimages-1407905644.jpg",
    numero: "3",
    posicao: "Zagueiro",
    dataNascimento: "17/08/1993",
    status: "Aposentado",
    clubes: [
      createClub(
        "São Paulo",
        { inicio: "2010", fim: "2018" },
        { jogos: 277, gols: 13, assistencias: 4 }
      ),
      createClub(
        "Flamengo",
        { inicio: "2019", fim: "2023" },
        { jogos: 152, gols: 6, assistencias: 1 }
      ),
      createClub(
        "Grêmio",
        { inicio: "2024", fim: "2024" },
        { jogos: 5, gols: 0, assistencias: 0 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2016", fim: "2020" },
      estatisticas: { jogos: 5, gols: 0, assistencias: 0 },
      participacoes: ["Olimpíadas (Ouro - 2016)"],
    },
    titulos: [
      // Brasil
      {
        nome: "Jogos Olímpicos",
        anos: "2016",
        clube: "Brasil",
        logoVariavel: true,
      },

      // São paulo
      {
        nome: "Copa Sul-Americana",
        anos: "2012",
        clube: "São Paulo",
      },

      // Flamengo
      {
        nome: "Copa Libertadores",
        anos: "2019, 2022",
        clube: "Flamengo",
      },
      {
        nome: "Recopa Sul-Americana",
        anos: "2020",
        clube: "Flamengo",
      },
      {
        nome: "Campeonato Brasileiro",
        anos: "2019, 2020",
        clube: "Flamengo",
      },
      {
        nome: "Supercopa do Brasil",
        anos: "2020, 2021",
        clube: "Flamengo",
      },
      {
        nome: "Campeonato Carioca",
        anos: "2019, 2020, 2021",
        clube: "Flamengo",
      },
      {
        nome: "Copa do Brasil",
        anos: "2022",
        clube: "Flamengo",
      },

      // Individuais
      {
        nome: "Seleção do Campeonato Carioca",
        logo: "Campeonato Carioca",
        anos: "2019, 2020",
        categoria: "individual",
      },
      {
        nome: "Seleção do Campeonato Brasileiro",
        logo: "Campeonato Brasileiro",
        anos: "2019",
        categoria: "individual",
      },
      {
        nome: "Seleção da Copa Libertadores",
        logo: "Copa Libertadores",
        anos: "2019",
        categoria: "individual",
      },
      {
        nome: "Seleção da América do Sul",
        logo: "El País",
        anos: "2019",
        categoria: "individual",
      },
    ],
    tags: ["Rodrigo Caio", "Rodrigo Caio Coquette Russo"],
    ultima_atualizacao: "29/10/25",
  },

  // Rodrigo Muniz
  {
    nome: "Rodrigo Muniz",
    background: "default",
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
      "Gênio da grande área e um dos maiores artilheiros da história do futebol mundial. Foi o principal responsável pelo tetracampeonato da Seleção Brasileira na Copa do Mundo de 1994 e eleito o Melhor Jogador do Mundo no mesmo ano. Aos 58 anos (em 2024), retornou aos gramados para jogar no America-RJ, clube que também preside com o objetivo de jogar ao lado do filho.",
    pagina: "https://www.instagram.com/romariofaria",
    nacionalidade: "Brasil",
    imagem:
      "https://i.pinimg.com/736x/0d/dc/02/0ddc026d4756d61834d8dd45d2fae54d.jpg",
    numero: "11",
    posicao: "Atacante/Centroavante",
    dataNascimento: "29/01/1966",
    status: "Aposentado",
    clubes: [
      createClub(
        "Vasco da Gama",
        { inicio: "1985", fim: "1988" },
        { jogos: 196, gols: 139, assistencias: 0 }
      ),
      createClub(
        "PSV Eindhoven",
        { inicio: "1988", fim: "1993" },
        { jogos: 167, gols: 165, assistencias: 0 }
      ),
      createClub(
        "Barcelona",
        { inicio: "1993", fim: "1994" },
        { jogos: 84, gols: 53, assistencias: 0 }
      ),
      createClub(
        "Flamengo",
        { inicio: "1995", fim: "1999" },
        { jogos: 240, gols: 204, assistencias: 0 }
      ),
      createClub(
        "Valencia",
        { inicio: "1996", fim: "1997" },
        { jogos: 21, gols: 14, assistencias: 0 }
      ),
      createClub(
        "Vasco da Gama",
        { inicio: "1999", fim: "2002" },
        { jogos: 140, gols: 131, assistencias: 0 }
      ),
      createClub(
        "Fluminense",
        { inicio: "2002", fim: "2003" },
        { jogos: 33, gols: 26, assistencias: 0 }
      ),
      createClub(
        "Al-Sadd",
        { inicio: "2003", fim: "2003" },
        { jogos: 3, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Fluminense",
        { inicio: "2003", fim: "2004" },
        { jogos: 21, gols: 13, assistencias: 0 }
      ),
      createClub(
        "Miami FC",
        { inicio: "2006", fim: "2006" },
        { jogos: 29, gols: 22, assistencias: 0 }
      ),
      createClub(
        "Adelaide United",
        { inicio: "2006", fim: "2006" },
        { jogos: 4, gols: 1, assistencias: 0 }
      ),
      createClub(
        "America-RJ",
        { inicio: "2009", fim: "2009" },
        { jogos: 1, gols: 0, assistencias: 0 }
      ),
      createClub(
        "America-RJ",
        { inicio: "2024", fim: "2024" },
        { jogos: 1, gols: 0, assistencias: 0 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "1987", fim: "2005" },
      estatisticas: { jogos: 70, gols: 55, assistencias: 0 },
    },
    titulos: [
      // Individuais
      {
        nome: "Melhor Jogador do Mundo FIFA",
        logo: "FIFA World Player of the Year",
        anos: "1994",
        categoria: "individual",
      },
      {
        nome: "Bola de Ouro da Copa do Mundo",
        logo: "Copa do Mundo",
        anos: "1994",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Jogador do Ano na Holanda",
        logo: "individual",
        anos: "1989",
        categoria: "individual",
      },

      // Brasil
      {
        nome: "Copa do Mundo",
        anos: "1994",
        clube: "Brasil",
        logoVariavel: true,
      },
      {
        nome: "Copa América",
        anos: "1989",
        clube: "Brasil",
        logoVariavel: true,
      },
      {
        nome: "Copa América",
        anos: "1997",
        clube: "Brasil",
        logoVariavel: true,
      },
      {
        nome: "Copa das Confederações",
        anos: "1997",
        clube: "Brasil",
        logoVariavel: true,
      },

      // PSV Eindhoven
      {
        nome: "Campeonato Holandês",
        anos: "1989, 1991, 1992",
        clube: "PSV Eindhoven",
      },
      {
        nome: "Copa da Holanda",
        anos: "1989, 1990",
        clube: "PSV Eindhoven",
      },
      {
        nome: "Supercopa da Holanda",
        anos: "1993",
        clube: "PSV Eindhoven",
      },

      // Barcelona
      {
        nome: "Campeonato Espanhol",
        anos: "1994",
        clube: "Barcelona",
      },

      // Vasco
      {
        nome: "Campeonato Brasileiro",
        anos: "2000",
        clube: "Vasco da Gama",
      },

      // Flamengo
      {
        nome: "Taça Guanabara",
        anos: "1995, 1996",
        clube: "Flamengo",
      },
      {
        nome: "Campeonato Carioca",
        anos: "1996, 1999",
        clube: "Flamengo",
      },
      {
        nome: "Copa Mercosul",
        anos: "1999",
        clube: "Flamengo",
      },

      // Vasco da Gama
      {
        nome: "Taça Guanabara",
        anos: "1986, 1987, 1990",
        clube: "Vasco da Gama",
      },
      {
        nome: "Campeonato Carioca",
        anos: "1987, 1988",
        clube: "Vasco da Gama",
      },
      {
        nome: "Copa Mercosul",
        anos: "2000",
        clube: "Vasco da Gama",
      },
    ],
    tags: ["Romário", "Baixinho", "Romario"],
    ultima_atualizacao: "30/10/25",
  },

  // Ronaldinho Gaúcho
  {
    nome: "Ronaldinho Gaúcho",
    background: "gold",
    descricao:
      "Considerado um dos maiores jogadores de futebol de todos os tempos, Ronaldinho Gaúcho é conhecido por sua habilidade, dribles e visão de jogo excepcionais. Seu estilo de jogo alegre e criativo o tornou um ídolo mundial. É um dos poucos jogadores a vencer a Copa do Mundo, a Copa Libertadores e a UEFA Champions League.",
    pagina: "https://www.instagram.com/ronaldinho/",
    nacionalidade: "Brasil",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/77/2021/06/02/ronaldinho-gaucho-em-atuacao-pelo-barcelona-1622663451254_v2_3x4.jpg",
    numero: "10",
    posicao: "Meia-atacante",
    dataNascimento: "21/03/1980",
    status: "Aposentado",
    ultima_atualizacao: "31/10/25",
    curiosidades:
      "Ronaldinho é famoso por ter vencido o 'Grand Slam' do futebol internacional: Copa do Mundo, Copa América, Copa das Confederações, UEFA Champions League e Copa Libertadores. Foi eleito o Melhor do Mundo duas vezes (2004 e 2005).",
    clubes: [
      // Grêmio
      createClub(
        "Grêmio",
        { inicio: "1998", fim: "2001" },
        { jogos: 141, gols: 68, assistencias: 35 }
      ),
      createClub(
        "Paris Saint-Germain",
        { inicio: "2001", fim: "2003" },
        { jogos: 77, gols: 25, assistencias: 18 }
      ),
      // Barcelona
      createClub(
        "Barcelona",
        { inicio: "2003", fim: "2008" },
        { jogos: 207, gols: 94, assistencias: 70 }
      ),
      createClub(
        "AC Milan",
        { inicio: "2008", fim: "2011" },
        { jogos: 95, gols: 26, assistencias: 29 }
      ),
      createClub(
        "Flamengo",
        { inicio: "2011", fim: "2012" },
        { jogos: 72, gols: 28, assistencias: 13 }
      ),
      createClub(
        "Atlético Mineiro",
        { inicio: "2012", fim: "2014" },
        { jogos: 88, gols: 28, assistencias: 28 }
      ),
      createClub(
        "Querétaro",
        { inicio: "2014", fim: "2015" },
        { jogos: 29, gols: 8, assistencias: 5 }
      ),
      createClub(
        "Fluminense",
        { inicio: "2015", fim: "2015" },
        { jogos: 9, gols: 0, assistencias: 0 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "1999", fim: "2013" },
      estatisticas: { jogos: 97, gols: 33, assistencias: 25 },
    },
    titulos: [
      // Individuais
      {
        nome: "Melhor Jogador do Mundo",
        logo: "The Best FIFA",
        anos: "2004, 2005",
        categoria: "individual",
      },
      {
        nome: "Bola de Ouro",
        anos: "2005",
        categoria: "individual",
      },
      {
        nome: "Melhor Jogador do Mundo (World Soccer)",
        logo: "World Soccer",
        anos: "2004, 2005",
        categoria: "individual",
      },
      {
        nome: "Futebolista Europeu do Ano",
        logo: "UEFA",
        anos: "2006",
        categoria: "individual",
      },
      {
        nome: "Rei da América (Jornal El País)",
        logo: "El País",
        anos: "2013",
        categoria: "individual",
      },
      {
        nome: "Bola de Ouro da Copa das Confederações",
        logo: "Copa das Confederações",
        anos: "1999",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Chuteira de Ouro da Copa das Confederações",
        logo: "Copa das Confederações",
        anos: "1999",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "FIFA 100",
        anos: "2004",
        categoria: "individual",
      },

      // Brasil
      {
        nome: "Copa do Mundo",
        anos: "2002",
        clube: "Brasil",

        logoVariavel: true,
      },
      {
        nome: "Copa das Confederações",
        anos: "2005",
        clube: "Brasil",
        logoVariavel: true,
      },
      {
        nome: "Copa América",
        anos: "1999",
        clube: "Brasil",
      },
      {
        nome: "Copa do Mundo Sub-17",
        anos: "1997",
        clube: "Brasil",
        logoVariavel: true,
      },

      // Barcelona
      {
        nome: "UEFA Champions League",
        anos: "2006",
        clube: "Barcelona",
      },
      {
        nome: "Campeonato Espanhol",
        anos: "2005, 2006",
        clube: "Barcelona",
      },
      {
        nome: "Supercopa da Espanha",
        anos: "2005, 2006",
        clube: "Barcelona",
      },

      // Atlético Mineiro
      {
        nome: "Copa Libertadores",
        anos: "2013",
        clube: "Atlético Mineiro",
      },
      {
        nome: "Recopa Sul-Americana",
        anos: "2014",
        clube: "Atlético Mineiro",
      },
      {
        nome: "Campeonato Mineiro",
        anos: "2013",
        clube: "Atlético Mineiro",
      },

      // AC Milan
      {
        nome: "Campeonato Italiano",
        anos: "2011",
        clube: "AC Milan",
      },

      // Flamengo
      {
        nome: "Campeonato Carioca",
        anos: "2011",
        clube: "Flamengo",
      },

      // Paris Saint-Germain
      {
        nome: "Copa Intertoto da UEFA",
        anos: "2001",
        clube: "Paris Saint-Germain",
      },

      // Grêmio
      {
        nome: "Campeonato Gaúcho",
        anos: "1999",
        clube: "Grêmio",
      },
      {
        nome: "Copa Sul",
        anos: "1999",
        clube: "Grêmio",
      },
    ],
    tags: ["Bruxo"],
    ultima_atualizacao: "31/10/25",
  },

  // Ronaldo Nazário
  {
    nome: "Ronaldo Nazário",
    background: "gold",
    descricao:
      "Considerado um dos maiores atacantes de todos os tempos, Ronaldo Fenômeno era conhecido por sua velocidade, finalização e habilidade técnica. Tricampeão do prêmio de Melhor Jogador do Mundo pela FIFA (1996, 1997 e 2002) e bicampeão da Copa do Mundo (1994, 2002).",
    pagina: "https://www.instagram.com/ronaldofeno/",
    nacionalidade: "Brasil",
    imagem:
      "https://terceirotempo.uol.com.br/imagens/57/70/w500_h140_qfl_fto_15770.webp",
    numero: "9",
    posicao: "Atacante",
    dataNascimento: "18/09/1976",
    status: "Aposentado",
    ultima_atualizacao: "31/10/25",
    curiosidades:
      "Ronaldo foi o jogador mais jovem a ganhar o prêmio de Melhor Jogador do Mundo pela FIFA (1996, com 20 anos). Foi também por um longo período o maior artilheiro da história das Copas do Mundo (15 gols, recorde batido por Klose em 2014).",
    clubes: [
      // Cruzeiro
      createClub(
        "Cruzeiro",
        { inicio: "1993", fim: "1994" },
        { jogos: 47, gols: 44, assistencias: 6 }
      ),
      createClub(
        "PSV Eindhoven",
        { inicio: "1994", fim: "1996" },
        { jogos: 57, gols: 54, assistencias: 9 }
      ),
      // Barcelona
      createClub(
        "Barcelona",
        { inicio: "1996", fim: "1997" },
        { jogos: 49, gols: 47, assistencias: 12 }
      ),
      createClub(
        "Inter de Milão",
        { inicio: "1997", fim: "2002" },
        { jogos: 99, gols: 59, assistencias: 5 }
      ),
      createClub(
        "Real Madrid",
        { inicio: "2002", fim: "2007" },
        { jogos: 177, gols: 104, assistencias: 35 }
      ),
      createClub(
        "AC Milan",
        { inicio: "2007", fim: "2008" },
        { jogos: 20, gols: 9, assistencias: 3 }
      ),
      // Corinthians
      createClub(
        "Corinthians",
        { inicio: "2009", fim: "2011" },
        { jogos: 69, gols: 35, assistencias: 10 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "1994", fim: "2011" },
      estatisticas: { jogos: 98, gols: 62, assistencias: 20 },
    },
    titulos: [
      // Individuais
      {
        nome: "Melhor Jogador do Mundo",
        logo: "The Best FIFA",
        anos: "1996, 1997, 2002",
        categoria: "individual",
      },
      {
        nome: "Bola de Ouro",
        anos: "1997, 2002",
        categoria: "individual",
      },
      {
        nome: "Melhor Jogador do Mundo (World Soccer)",
        logo: "World Soccer",
        anos: "1996, 1997, 2002",
        categoria: "individual",
      },
      {
        nome: "Artilheiro da Copa do Mundo",
        logo: "Copa do Mundo",
        anos: "2002",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Chuteira de Ouro da UEFA",
        logo: "Chuteira de Ouro",
        anos: "1997",
        categoria: "individual",
      },
      {
        nome: "Bola de Ouro da Copa do Mundo",
        logo: "Copa do Mundo",
        anos: "1998",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Melhor Jogador da Copa América",
        logo: "Copa América",
        anos: "1997",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Artilheiro do Campeonato Espanhol",
        logo: "Campeonato Espanhol",
        anos: "1997, 2004",
        categoria: "individual",
      },
      {
        nome: "Artilheiro do Campeonato Holandês",
        logo: "Campeonato Holandês",
        anos: "1995",
        categoria: "individual",
      },
      {
        nome: "FIFA 100",
        anos: "2004",
        categoria: "individual",
      },

      // Brasil
      {
        nome: "Copa do Mundo",
        anos: "1994",
        clube: "Brasil",
        logoVariavel: true,
      },
      {
        nome: "Copa do Mundo",
        anos: "2002",
        clube: "Brasil",
        logoVariavel: true,
      },
      {
        nome: "Copa América",
        anos: "1997",
        clube: "Brasil",
        logoVariavel: true,
      },
      {
        nome: "Copa América",
        anos: "1999",
        clube: "Brasil",
        logoVariavel: true,
      },
      {
        nome: "Copa das Confederações",
        anos: "1997",
        clube: "Brasil",
        logoVariavel: true,
      },
      {
        nome: "Bronze nos Jogos Olímpicos",
        logo: "Jogos Olímpicos",
        anos: "1996",
        clube: "Brasil",
        logoVariavel: true,
      },

      // Real Madrid
      {
        nome: "Copa Intercontinental",
        anos: "2002",
        clube: "Real Madrid",
      },
      {
        nome: "Campeonato Espanhol",
        anos: "2003, 2007",
        clube: "Real Madrid",
      },
      {
        nome: "Supercopa da Espanha",
        anos: "2003",
        clube: "Real Madrid",
      },

      // Inter de Milão
      {
        nome: "Copa da UEFA",
        anos: "1998",
        clube: "Inter de Milão",
      },

      // Barcelona
      {
        nome: "Recopa Europeia",
        anos: "1997",
        clube: "Barcelona",
      },
      {
        nome: "Copa do Rei",
        anos: "1997",
        clube: "Barcelona",
      },
      {
        nome: "Supercopa da Espanha",
        anos: "1996",
        clube: "Barcelona",
      },

      // PSV Eindhoven
      {
        nome: "Copa da Holanda",
        anos: "1996",
        clube: "PSV Eindhoven",
      },

      // Cruzeiro
      {
        nome: "Copa do Brasil",
        anos: "1993",
        clube: "Cruzeiro",
      },
      {
        nome: "Campeonato Mineiro",
        anos: "1994",
        clube: "Cruzeiro",
      },

      // Corinthians
      {
        nome: "Copa do Brasil",
        anos: "2009",
        clube: "Corinthians",
      },
      {
        nome: "Campeonato Paulista",
        anos: "2009",
        clube: "Corinthians",
      },
    ],
    tags: ["Ronaldo Fenomeno", "Ronaldo Fenômeno", "R9", "Fenomenal"],
    ultima_atualizacao: "31/10/25",
  },

  // Sócrates
  {
    nome: "Sócrates",
    background: "diamond",
    descricao:
      "Considerado um dos maiores jogadores brasileiros de todos os tempos, Sócrates era conhecido por seu talento com a bola, visão de jogo e liderança. Além de sua carreira brilhante nos gramados, ele era médico e um grande ativista político.",
    pagina: "https://www.instagram.com/socratesbrasileiro/",
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
    background: "diamond",
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
    background: "diamond",
    descricao:
      "Zagueiro brasileiro de classe mundial, apelidado de 'O Monstro' por sua excelência técnica, antecipação e liderança. Foi capitão de longa data do Paris Saint-Germain e crucial na conquista da Champions League pelo Chelsea. Em 2024, retornou ao clube que o revelou, o Fluminense, para encerrar sua vitoriosa carreira no Brasil.",
    pagina: "https://www.instagram.com/thiagosilva/",
    nacionalidade: "Brasil",
    imagem:
      "https://p2.trrsf.com/image/fget/cf/1200/1200/middle/images.terra.com/2025/04/24/1327321802-imagem-do-whatsapp-de-2025-04-23-as-2151116aea7dbb.jpg",
    numero: "3",
    posicao: "Zagueiro",
    dataNascimento: "22/09/1984",
    status: "Ativo",
    curiosidades:
      "Thiago Silva retornou ao Fluminense 16 anos após sua primeira passagem, sendo recebido por uma das maiores festas já vistas no Maracanã. Ele é um dos únicos defensores brasileiros a vencer a Liga dos Campeões e o Mundial de Clubes.",
    clubes: [
      createClub(
        "Fluminense",
        { inicio: "2006", fim: "2008" },
        { jogos: 146, gols: 14, assistencias: 2 }
      ),
      createClub(
        "AC Milan",
        { inicio: "2009", fim: "2012" },
        { jogos: 119, gols: 6, assistencias: 2 }
      ),
      createClub(
        "Paris Saint-Germain",
        { inicio: "2012", fim: "2020" },
        { jogos: 315, gols: 20, assistencias: 6 }
      ),
      createClub(
        "Chelsea",
        { inicio: "2020", fim: "2024" },
        { jogos: 151, gols: 9, assistencias: 4 }
      ),
      createClub(
        "Fluminense",
        { inicio: "2024", fim: "Presente" },
        { jogos: 40, gols: 3, assistencias: 1 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2008", fim: "2022" },
      estatisticas: { jogos: 125, gols: 7, assistencias: 5 },
    },
    titulos: [
      // Chelsea
      {
        nome: "UEFA Champions League",
        anos: "2021",
        clube: "Chelsea",
      },
      {
        nome: "Mundial de Clubes",
        anos: "2022",
        clube: "Chelsea",
      },
      {
        nome: "Supercopa da UEFA",
        anos: "2021",
        clube: "Chelsea",
      },

      // Paris Saint-Germain
      {
        nome: "Campeonato Francês",
        anos: "2013, 2014, 2015, 2016, 2018, 2019, 2020",
        clube: "Paris Saint-Germain",
      },

      // AC Milan
      {
        nome: "Campeonato Italiano",
        anos: "2011",
        clube: "AC Milan",
      },

      // Fluminense
      {
        nome: "Copa do Brasil",
        anos: "2007",
        clube: "Fluminense FC",
      },

      // Seleção Brasileira
      {
        nome: "Copa América",
        anos: "2019",
        clube: "Brasil",
        logoVariavel: true,
      },
    ],
    tags: ["Thiago Silva", "PSG", "TS3", "O Monstro"],
    ultima_atualizacao: "27/10/25",
  },

  // Vitinho
  {
    nome: "Vitinho",
    background: "default",
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
    background: "diamond",
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
      {
        nome: "Campeonato Espanhol",
        anos: "2020, 2022, 2024",
        clube: "Real Madrid",
      },
      { nome: "Copa do Rei", anos: "2023", clube: "Real Madrid" },
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

  // Wesley França
  {
    nome: "Wesley França",
    background: "plate",
    descricao:
      "Lateral-direito formado no Flamengo, multicampeão nacional e continental no Brasil. Transferiu-se para a Roma como um dos jovens defensores brasileiros mais promissores e valorizados do futebol atual.",
    pagina: "https://www.instagram.com/wesleyfranca03_",
    nacionalidade: "Brasil",
    imagem:
      "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2025/08/wesley-roma-bologna-serie-a-e1755983400196.jpg?w=1200&h=1200&crop=1",
    numero: "43",
    posicao: "Lateral-direito / Defensor",
    dataNascimento: "13/03/2003",
    status: "Ativo",
    clubes: [
      createClub(
        "Atlético Tubarão",
        { inicio: "2021", fim: "2021" },
        { jogos: 5, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Flamengo",
        { inicio: "2021", fim: "2025" },
        { jogos: 136, gols: 4, assistencias: 6 }
      ),
      createClub(
        "Roma",
        { inicio: "2025", fim: "Presente" },
        { jogos: 6, gols: 1, assistencias: 0 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "Base", fim: "Base" },
      estatisticas: { jogos: 0, gols: 0, assistencias: 0 },
    },
    titulos: [
      // Flamengo
      {
        nome: "Copa Libertadores",
        anos: "2022",
        clube: "Flamengo",
      },
      {
        nome: "Copa do Brasil",
        anos: "2022, 2024",
        clube: "Flamengo",
      },
      {
        nome: "Supercopa Rei",
        anos: "2025",
        clube: "Flamengo",
      },
      {
        nome: "Campeonato Carioca",
        anos: "2024, 2025",
        clube: "Flamengo",
      },

      // Individuais
      {
        nome: "Seleção do Campeonato Brasileiro",
        logo: "Campeonato Brasileiro",
        anos: "2024",
        categoria: "individual",
      },
      {
        nome: "Seleção da Copa do Brasil",
        logo: "Copa do Brasil",
        anos: "2024",
        categoria: "individual",
      },
      {
        nome: "Seleção do Campeonato Carioca",
        logo: "Campeonato Carioca",
        anos: "2025",
        categoria: "individual",
      },
    ],
    tags: [],
    ultima_atualizacao: "29/10/25",
  },

  // Willian Arão (Willian Souza Arão da Silva)
  {
    nome: "Willian Arão",
    background: "plate",
    descricao:
      "Volante versátil e com excelente visão de jogo, Willian Arão foi um dos pilares do time multicampeão do Flamengo na 'Era de Ouro'. Atualmente, defende o Santos.",
    pagina: "https://www.instagram.com/willianarao/",
    nacionalidade: "Brasil",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/07/2025/07/04/willian-arao-do-santos-1751645091903_v2_4x3.jpg",
    numero: "15",
    posicao: "Volante",
    dataNascimento: "12/03/1992",
    status: "Ativo",
    clubes: [
      createClub(
        "Corinthians",
        { inicio: "2012", fim: "2013" },
        { jogos: 17, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Botafogo",
        { inicio: "2015", fim: "2015" },
        { jogos: 58, gols: 7, assistencias: 3 }
      ),
      createClub(
        "Flamengo",
        { inicio: "2016", fim: "2022" },
        { jogos: 371, gols: 35, assistencias: 23 }
      ),
      createClub(
        "Fenerbahce",
        { inicio: "2022", fim: "2023" },
        { jogos: 45, gols: 1, assistencias: 5 }
      ),
      createClub(
        "Panathinaikos",
        { inicio: "2023", fim: "2025" },
        { jogos: 84, gols: 4, assistencias: 4 }
      ),
      createClub(
        "Santos",
        { inicio: "2025", fim: "Atual" },
        { jogos: 1, gols: 0, assistencias: 0 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2016", fim: "2020" },
      estatisticas: { jogos: 1, gols: 0, assistencias: 0 },
    },
    titulos: [
      // Corinthians
      {
        nome: "Mundial de Clubes",
        anos: "2012",
        clube: "Corinthians",
      },
      {
        nome: "Copa Libertadores",
        anos: "2012",
        clube: "Corinthians",
      },
      {
        nome: "Campeonato Paulista",
        anos: "2013",
        clube: "Corinthians",
      },

      // Botafogo
      {
        nome: "Campeonato Brasileiro Série B",
        anos: "2015",
        clube: "Botafogo",
      },

      // Flamengo
      {
        nome: "Copa Libertadores",
        anos: "2019, 2022",
        clube: "Flamengo",
      },
      {
        nome: "Campeonato Brasileiro",
        anos: "2019, 2020",
        clube: "Flamengo",
      },
      {
        nome: "Recopa Sul-Americana",
        anos: "2020",
        clube: "Flamengo",
      },
      {
        nome: "Copa do Brasil",
        anos: "2022",
        clube: "Flamengo",
      },
      {
        nome: "Campeonato Carioca",
        anos: "2017, 2019, 2020, 2021",
        clube: "Flamengo",
      },

      // Fenerbahce
      {
        nome: "Copa da Turquia",
        anos: "2023",
        clube: "Fenerbahce",
      },

      // Panathinaikos
      {
        nome: "Copa da Grécia",
        anos: "2024",
        clube: "Panathinaikos",
      },
    ],
    tags: ["Willian Arão", "Willian Souza Arão da Silva"],
    ultima_atualizacao: "30/10/25",
  },

  // Willian Borges
  {
    nome: "Willian Borges",
    background: "titanium",
    descricao:
      "Ponta/meia de vasta experiência internacional, ídolo do Chelsea e bicampeão da Premier League e da Liga Europa. Representou o Brasil em duas Copas do Mundo.",
    pagina: "https://www.instagram.com/willianborges88/",
    nacionalidade: "Brasil",
    imagem:
      "https://www.notisul.com.br/wp-content/uploads/2025/09/gremio-willian-1.jpg",
    numero: "88",
    posicao: "Ponta Esquerda / Meia",
    dataNascimento: "09/08/1988",
    status: "Ativo",
    clubes: [
      createClub(
        "Corinthians",
        { inicio: "2006", fim: "2007" },
        { jogos: 41, gols: 2, assistencias: 0 }
      ),
      createClub(
        "Shakhtar Donetsk",
        { inicio: "2007", fim: "2013" },
        { jogos: 221, gols: 37, assistencias: 0 }
      ),
      createClub(
        "Chelsea",
        { inicio: "2013", fim: "2020" },
        { jogos: 339, gols: 63, assistencias: 0 }
      ),
      createClub(
        "Arsenal",
        { inicio: "2020", fim: "2021" },
        { jogos: 37, gols: 1, assistencias: 0 }
      ),
      createClub(
        "Fulham",
        { inicio: "2022", fim: "2025" },
        { jogos: 77, gols: 10, assistencias: 0 }
      ),
      createClub(
        "Grêmio",
        { inicio: "2025", fim: "Presente" },
        { jogos: 3, gols: 0, assistencias: 0 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "2011", fim: "2019" },
      estatisticas: { jogos: 70, gols: 9, assistencias: 0 },
    },
    titulos: [
      // Chelsea
      {
        nome: "Campeonato Inglês",
        anos: "2015, 2017",
        clube: "Chelsea",
      },
      {
        nome: "UEFA Europa League",
        anos: "2018",
        clube: "Chelsea",
      },
      {
        nome: "Copa da Inglaterra",
        anos: "2018",
        clube: "Chelsea",
      },

      // Shakhtar Donetsk
      {
        nome: "Campeonato Ucraniano",
        anos: "2008, 2010, 2011, 2012, 2013",
        clube: "Shakhtar Donetsk",
      },
      {
        nome: "Copa da UEFA",
        anos: "2008/09",
        clube: "Shakhtar Donetsk",
      },

      // Seleção
      {
        nome: "Copa América",
        anos: "2019",
        clube: "Brasil",
        logoVariavel: true,
      },

      // Individuais
      {
        nome: "Jogador da Época do Chelsea",
        logo: "Chelsea",
        anos: "2015/16, 2017/18",
        categoria: "individual",
      },
    ],
    tags: [],
    ultima_atualizacao: "29/10/25",
  },

  //Yuri Alberto
  {
    nome: "Yuri Alberto",
    background: "default",
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
      "Meia-atacante brasileiro lendário, amplamente considerado o maior jogador da história do Flamengo e um dos melhores de todos os tempos. Zico era conhecido por sua visão de jogo, dribles desconcertantes, e, principalmente, por sua precisão e potência incomparáveis em cobranças de falta, sendo um dos maiores artilheiros de todos os tempos. Liderou o Flamengo à glória continental e mundial em 1981.",
    pagina: "https://www.instagram.com/zico/",
    nacionalidade: "Brasil",
    imagem:
      "https://i.pinimg.com/736x/8c/36/0a/8c360a9982ae6c6b687112e11ac4e139.jpg",
    numero: "10",
    posicao: "Meia-atacante",
    dataNascimento: "03/03/1953",
    status: "Aposentado",
    curiosidades:
      "Zico é o maior artilheiro da história do Flamengo, com mais de 500 gols, e o único jogador brasileiro a vencer quatro Campeonatos Brasileiros. Ele é reverenciado no Japão por ter ajudado a fundar e popularizar a J-League, atuando pelo Kashima Antlers.",
    clubes: [
      createClub(
        "Flamengo",
        { inicio: "1971", fim: "1983" },
        { jogos: 488, gols: 380, assistencias: 100 }
      ),
      createClub(
        "Udinese",
        { inicio: "1983", fim: "1985" },
        { jogos: 79, gols: 56, assistencias: 15 }
      ),
      createClub(
        "Flamengo",
        { inicio: "1985", fim: "1989" },
        { jogos: 243, gols: 129, assistencias: 40 }
      ),
      createClub(
        "Kashima Antlers",
        { inicio: "1991", fim: "1994" },
        { jogos: 88, gols: 54, assistencias: 10 }
      ),
    ],
    selecao: {
      nome: "Brasil",
      periodo: { inicio: "1971", fim: "1986" },
      estatisticas: { jogos: 72, gols: 52, assistencias: 20 },
    },
    titulos: [
      // Flamengo
      {
        nome: "Copa Intercontinental",
        anos: "1981",
        clube: "Flamengo",
      },
      {
        nome: "Copa Libertadores",
        anos: "1981",
        clube: "Flamengo",
      },
      {
        nome: "Campeonato Brasileiro",
        anos: "1980, 1982, 1983, 1987",
        clube: "Flamengo",
      },
      {
        nome: "Campeonato Carioca",
        anos: "1972, 1974, 1978, 1979, 1979 (Especial), 1981, 1986",
        clube: "Flamengo",
      },

      // Individuais
      {
        nome: "Futebolista Sul-Americano do Ano",
        logo: "individual",
        anos: "1977, 1981, 1982",
        categoria: "individual",
      },
      {
        nome: "Bola de Ouro",
        logo: "Placar",
        anos: "1974, 1982",
        categoria: "individual",
      },
      {
        nome: "Bola de Bronze",
        logo: "Copa do Mundo",
        anos: "1982",
        categoria: "individual",
        logoVariavel: true,
      },
    ],
    tags: ["Zico", "Flamengo", "Brasil", "Z10", "Galo de Quintino"],
  },

  // BULGÁRIA ---------------------------------------------------------------------------------------------------

  // Hristo Stoichkov
  {
    nome: "Hristo Stoichkov",
    background: "gold",
    descricao:
      "Atacante búlgaro lendário, conhecido por seu temperamento explosivo, finalização potente com a perna esquerda e sua velocidade. Stoichkov foi a estrela da 'Dream Team' do Barcelona de Johan Cruyff e levou a Bulgária ao histórico quarto lugar na Copa do Mundo de 1994, onde foi o artilheiro do torneio.",
    pagina: "https://www.instagram.com/hristo8stoichkov/",
    nacionalidade: "Bulgária",
    imagem:
      "https://img.allfootballapp.com/www/M00/00/C9/720x-/-/-/CgAGVV72_gCALdiaAAHmY-zHNCU542.jpg.webp",
    numero: "8",
    posicao: "Ponta-esquerda/Segundo Atacante",
    dataNascimento: "08/02/1966",
    status: "Aposentado",
    curiosidades:
      "Em 1994, Stoichkov alcançou o auge de sua carreira, vencendo a Bola de Ouro e terminando como artilheiro (empatado) da Copa do Mundo. Ele é considerado o maior jogador de futebol de todos os tempos da Bulgária.",
    clubes: [
      createClub(
        "CSKA Sofia",
        { inicio: "1985", fim: "1990" },
        { jogos: 123, gols: 81, assistencias: 15 }
      ),
      createClub(
        "Barcelona",
        { inicio: "1990", fim: "1995" },
        { jogos: 200, gols: 100, assistencias: 40 }
      ),
      createClub(
        "Parma",
        { inicio: "1995", fim: "1996" },
        { jogos: 34, gols: 7, assistencias: 3 }
      ),
      createClub(
        "Barcelona",
        { inicio: "1996", fim: "1998" },
        { jogos: 55, gols: 18, assistencias: 10 }
      ),
      createClub(
        "Chicago Fire",
        { inicio: "2000", fim: "2002" },
        { jogos: 51, gols: 18, assistencias: 12 }
      ),
    ],
    selecao: {
      nome: "Bulgária",
      periodo: { inicio: "1986", fim: "1999" },
      estatisticas: { jogos: 83, gols: 37, assistencias: 10 },
    },
    titulos: [
      // Individuais
      {
        nome: "Bola de Ouro",
        anos: "1994",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Chuteira de Ouro",
        logo: "UEFA",
        anos: "1990",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Chuteira de Ouro",
        logo: "Copa do Mundo",
        anos: "1994",
        clube: "Individual",
        categoria: "individual",
        logoVariavel: true,
      },

      // Barcelona
      {
        nome: "UEFA Champions League",
        anos: "1992",
        clube: "Barcelona",
      },
      {
        nome: "Campeonato Espanhol",
        anos: "1991, 1992, 1993, 1994",
        clube: "Barcelona",
      },
      {
        nome: "Supercopa da UEFA",
        anos: "1992, 1997",
        clube: "Barcelona",
      },

      // CSKA Sofia
      {
        nome: "Campeonato Búlgaro",
        anos: "1987, 1989, 1990",
        clube: "CSKA Sofia",
      },
    ],
    tags: ["Stoichkov", "Barcelona", "Bulgária", "Atacante", "H8"],
  },

  // CAMARÕES ---------------------------------------------------------------------------------------------------

  //Choupo-Moting
  {
    nome: "Choupo-Moting",
    background: "default",
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
    background: "diamond",
    descricao:
      "Centroavante camaronês conhecido por sua velocidade estonteante, instinto matador e força física. Eto'o fez história ao ser um dos únicos jogadores a conquistar a Tríplice Coroa (Treble) com dois clubes diferentes: Barcelona (2009) e Inter de Milão (2010). É o maior artilheiro da história da Copa das Nações Africanas.",
    pagina: "https://www.instagram.com/setoo9/",
    nacionalidade: "Camarões",
    imagem:
      "https://lncimg.lance.com.br/cdn-cgi/image/width=828,quality=75,fit=pad,format=webp/uploads/2017/05/04/590b404b6fea1.jpeg",
    numero: "9",
    posicao: "Centroavante",
    dataNascimento: "10/03/1981",
    status: "Aposentado",
    curiosidades:
      "Eto'o é o maior artilheiro da história da Seleção de Camarões. Ele marcou gols em duas finais de Liga dos Campeões (2006 e 2009) pelo Barcelona e foi um dos líderes da Inter de Milão no seu Treble em 2010.",
    clubes: [
      createClub(
        "Mallorca",
        { inicio: "2000", fim: "2004" },
        { jogos: 165, gols: 70, assistencias: 10 }
      ),
      createClub(
        "Barcelona",
        { inicio: "2004", fim: "2009" },
        { jogos: 199, gols: 130, assistencias: 40 }
      ),
      createClub(
        "Inter de Milão",
        { inicio: "2009", fim: "2011" },
        { jogos: 102, gols: 53, assistencias: 17 }
      ),
      createClub(
        "Anzhi Makhachkala",
        { inicio: "2011", fim: "2013" },
        { jogos: 73, gols: 36, assistencias: 12 }
      ),
    ],
    selecao: {
      nome: "Camarões",
      periodo: { inicio: "1996", fim: "2014" },
      estatisticas: { jogos: 118, gols: 56, assistencias: 15 },
    },
    titulos: [
      // Barcelona
      {
        nome: "UEFA Champions League",
        anos: "2006, 2009",
        clube: "Barcelona",
      },
      {
        nome: "Campeonato Espanhol",
        anos: "2005, 2006, 2009",
        clube: "Barcelona",
      },
      // Internazionale
      {
        nome: "UEFA Champions League",
        anos: "2010",
        clube: "Inter de Milão",
      },
      {
        nome: "Campeonato Italiano",
        anos: "2010",
        clube: "Inter de Milão",
      },
      {
        nome: "Mundial de Clubes",
        anos: "2010",
        clube: "Inter de Milão",
      },

      // Seleção Camaronesa
      {
        nome: "Copa Africana de Nações",
        anos: "2000, 2002",
        clube: "Camarões",
      },
      {
        nome: "Jogos Olímpicos",
        anos: "2000",
        clube: "Camarões",
        logoVariavel: true,
      },

      // Individuais
      {
        nome: "Futebolista Africano do Ano",
        logo: "CAF",
        anos: "2003, 2004, 2005, 2010",
        clube: "Individual",
        categoria: "individual",
      },
    ],
    tags: [
      "Eto'o",
      "Barcelona",
      "Inter de Milão",
      "Camarões",
      "Centroavante",
      "SE9",
      "Campeão da Champions",
    ],
  },

  // CANADÁ -----------------------------------------------------------------------------------------------------

  // Alphonso Davies
  {
    nome: "Alphonso Davies",
    background: "default",
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
    background: "default",
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
    background: "default",
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

  // Erick Pulgar (Erick Antonio Pulgar Farfán)
  {
    nome: "Erick Pulgar",
    background: "default",
    descricao:
      "Volante chileno de forte marcação e excelente capacidade de distribuição de jogo. Com passagens por clubes da Itália (Bologna, Fiorentina) e Turquia (Galatasaray), atualmente é um dos pilares do meio-campo do Flamengo e da Seleção Chilena.",
    pagina: "https://www.instagram.com/erickoficial/",
    nacionalidade: "Chile",
    imagem:
      "https://tntsports.com.br/__export/1751286078691/sites/esporteinterativo/img/2025/06/30/gettyimages-2222049587.jpg_1000014774.jpg",
    numero: "5",
    posicao: "Volante / Meio-Campista Defensivo",
    dataNascimento: "15/01/1994",
    status: "Ativo",
    clubes: [
      createClub(
        "Antofagasta",
        { inicio: "2011", fim: "2014" },
        { jogos: 51, gols: 2, assistencias: 0 }
      ),
      createClub(
        "Universidad Católica",
        { inicio: "2014", fim: "2015" },
        { jogos: 41, gols: 8, assistencias: 0 }
      ),
      createClub(
        "Bologna",
        { inicio: "2015", fim: "2019" },
        { jogos: 106, gols: 10, assistencias: 4 }
      ),
      createClub(
        "Fiorentina",
        { inicio: "2019", fim: "2022" },
        { jogos: 82, gols: 8, assistencias: 13 }
      ),
      createClub(
        "Galatasaray",
        { inicio: "2022", fim: "2022" },
        { jogos: 11, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Flamengo",
        { inicio: "2022", fim: "Atual" },
        { jogos: 80, gols: 1, assistencias: 6 }
      ),
    ],
    selecao: {
      nome: "Chile",
      periodo: { inicio: "2015", fim: "Atual" },
      estatisticas: { jogos: 54, gols: 4, assistencias: 0 },
    },
    titulos: [
      // Seleção Chilena
      {
        nome: "Copa América Centenário",
        anos: "2016",
        clube: "Chile",
      }, // Flamengo

      {
        nome: "Copa Libertadores",
        anos: "2022",
        clube: "Flamengo",
      },
      {
        nome: "Copa do Brasil",
        anos: "2024",
        clube: "Flamengo",
      },
      {
        nome: "Campeonato Carioca",
        anos: "2023, 2024",
        clube: "Flamengo",
      },
      {
        nome: "Supercopa do Brasil",
        anos: "2025",
        clube: "Flamengo",
      },
    ],
    tags: ["Erick Pulgar", "Erick Antonio Pulgar Farfán"],
    ultima_atualizacao: "29/10/25",
  },

  // COLÔMBIA ---------------------------------------------------------------------------------------------------

  // Radamel Falcao
  {
    nome: "Radamel Falcao",
    background: "titanium",
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
    background: "default",
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
    background: "default",
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
    background: "default",
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
    background: "titanium",
    imagem:
      "https://ca-times.brightspotcdn.com/dims4/default/19182aa/2147483647/strip/true/crop/4023x2681+0+0/resize/2000x1333!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F30%2F84%2F9367a875443db6fce8abc33219ef%2Fmls-san-diego-lafc-soccer-69266.jpg",
    descricao:
      "Atacante sul-coreano, um dos maiores ícones asiáticos da história do futebol. Conhecido por sua velocidade, finalização letal com ambos os pés e por ser um jogador extremamente eficiente. Após uma longa e brilhante carreira no Tottenham Hotspur, onde conquistou a Chuteira de Ouro, transferiu-se para o Los Angeles FC em 2025.",
    numero: "7",
    posicao: "Ponta-esquerda",
    nacionalidade: "Coreia do Sul",
    dataNascimento: "08/07/1992",
    status: "Ativo",
    pagina: "https://www.instagram.com/hm_son7/",
    curiosidades:
      "Son foi o primeiro jogador asiático a vencer a Chuteira de Ouro da Premier League (2022). Ele também venceu o Prêmio Puskás da FIFA em 2020 por um gol espetacular que percorreu todo o campo.",
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
        { inicio: "2015", fim: "2025" },
        { jogos: 408, gols: 162, assistencias: 84 }
      ),
      createClub(
        "Los Angeles FC",
        { inicio: "2025", fim: "Presente" },
        { jogos: 20, gols: 10, assistencias: 5 }
      ),
    ],
    selecao: {
      nome: "Coreia do Sul",
      periodo: { inicio: "2010", fim: "Presente" },
      estatisticas: { jogos: 126, gols: 48, assistencias: 20 },
    },
    titulos: [
      // Tottenham Hotspur
      {
        nome: "UEFA Europa League",
        anos: "2025",
        clube: "Tottenham Hotspur",
      },

      // Seleção Coreana
      {
        nome: "Jogos Asiáticos",
        anos: "2018",
        clube: "Coreia do Sul",
        logoVariavel: true,
      },

      // Individuais
      {
        nome: "Chuteira de Ouro",
        logo: "Campeonato Inglês",
        anos: "2022",
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
        nome: "Jogador Asiático do Ano",
        anos: "2015, 2017, 2019, 2020, 2021",
        clube: "Individual",
        categoria: "individual",
      },
    ],
    tags: ["Son", "Son Heung-min", "LAFC"],
    ultima_atualizacao: "27/10/25",
  },

  //COSTA DO MARFIM---------------------------------------------------------------------------------------------

  // Yaya Touré
  {
    nome: "Yaya Touré",
    background: "titanium",
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
    background: "diamond",
    descricao:
      "Goleiro lendário da Costa Rica e um dos mais vitoriosos da história da CONCACAF. Foi o titular absoluto do Real Madrid no tricampeonato consecutivo da UEFA Champions League (2016, 2017, 2018), além de ter brilhado na Copa do Mundo de 2014.",
    pagina: "https://www.instagram.com/keylornavas1/",
    numero: "1",
    posicao: "Goleiro",
    dataNascimento: "15/12/1986",
    status: "Ativo",
    nacionalidade: "Costa Rica",
    imagem:
      "https://www.excelsior.com.mx/800x600/filters:format(webp):quality(75)/media/pictures/2025/08/02/3352971.jpg",
    clubes: [
      createClub(
        "Deportivo Saprissa",
        { inicio: "2005", fim: "2010" },
        { jogos: 75, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Albacete Balompié",
        { inicio: "2010", fim: "2012" },
        { jogos: 36, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Levante UD",
        { inicio: "2011", fim: "2014" },
        { jogos: 70, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Real Madrid",
        { inicio: "2014", fim: "2019" },
        { jogos: 162, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Paris Saint-Germain",
        { inicio: "2019", fim: "2024" },
        { jogos: 108, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Nottingham Forest",
        { inicio: "2023", fim: "2023" },
        { jogos: 17, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Newell's Old Boys",
        { inicio: "2025", fim: "2025" },
        { jogos: 16, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Pumas",
        { inicio: "2025", fim: "Atualmente" },
        { jogos: 12, gols: 0, assistencias: 0 }
      ),
    ],
    selecao: {
      nome: "Costa Rica",
      periodo: { inicio: "2008", fim: "Atualmente" },
      estatisticas: { jogos: 125, gols: 0, assistencias: 0 },
    },
    titulos: [
      // Real Madrid
      {
        nome: "UEFA Champions League",
        anos: "2016, 2017, 2018",
        clube: "Real Madrid",
      },
      {
        nome: "Mundial de Clubes",
        anos: "2014, 2016, 2017, 2018",
        clube: "Real Madrid",
      },
      {
        nome: "Supercopa da UEFA",
        anos: "2014, 2016, 2017",
        clube: "Real Madrid",
      },
      {
        nome: "Campeonato Espanhol",
        anos: "2017",
        clube: "Real Madrid",
      },
      {
        nome: "Supercopa da Espanha",
        anos: "2017",
        clube: "Real Madrid",
      },

      // Paris Saint-Germain
      {
        nome: "Campeonato Francês",
        anos: "2020, 2022, 2024",
        clube: "Paris Saint-Germain",
      },
      {
        nome: "Copa da França",
        anos: "2020, 2021, 2024",
        clube: "Paris Saint-Germain",
      },
      {
        nome: "Copa da Liga Francesa",
        anos: "2020",
        clube: "Paris Saint-Germain",
      },
      {
        nome: "Supercopa da França",
        anos: "2020, 2022, 2023",
        clube: "Paris Saint-Germain",
      },

      // Deportivo Saprissa
      {
        nome: "Liga dos Campeões da CONCACAF",
        anos: "2005",
        clube: "Deportivo Saprissa",
      },
      {
        nome: "Campeonato Costarriquenho",
        anos: "6 Títulos",
        clube: "Deportivo Saprissa",
      },

      // Individuais
      {
        nome: "Melhor Goleiro da UEFA",
        logo: "UEFA",
        anos: "2018",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Goleiro do Ano da CONCACAF",
        logo: "CONCACAF",
        anos: "2016, 2017, 2018",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Melhor Goleiro da Ligue 1",
        logo: "Campeonato Francês",
        anos: "2020/21",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Melhor Goleiro da La Liga",
        logo: "Campeonato Espanhol",
        anos: "2014",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Goleiro da Década",
        logo: "IFFHS",
        anos: "2011–2020",
        clube: "Individual",
        categoria: "individual",
      },
    ],
    tags: ["Keylor Navas", "Goleiro", "PSG"],
    ultima_atualizacao: "28/10/25",
  },

  // CROÁCIA ---------------------------------------------------------------------------------------------------

  //Ivan Perišić
  {
    nome: "Ivan Perišić",
    background: "default",
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
    background: "default",
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
    background: "default",
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
    background: "default",
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
    background: "diamond",
    imagem:
      "https://tmssl.akamaized.net//images/foto/galerie/luka-modric-ac-mailand-2025-1757415502-177086.jpg",
    pagina: "https://www.instagram.com/lukamodric10/",
    descricao:
      "Maestro croata do meio-campo, reverenciado por sua visão de jogo excepcional, passes precisos, controle de bola e incrível longevidade. Modrić é um dos meio-campistas mais condecorados de sua geração, liderando o Real Madrid a múltiplas conquistas da Champions League e a Croácia a campanhas históricas em Copas do Mundo, além de ter conquistado a Bola de Ouro.",
    numero: "10",
    posicao: "Meia",
    nacionalidade: "Croácia",
    dataNascimento: "09/09/1985",
    status: "Ativo",
    clubes: [
      createClub(
        "Zrinjski Mostar",
        { inicio: "2003", fim: "2004" },
        { jogos: 25, gols: 8, assistencias: 0 }
      ),
      createClub(
        "Inter Zaprešić",
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
      createClub(
        "AC Milan",
        { inicio: "2025", fim: "Presente" },
        { jogos: 2, gols: 0, assistencias: 0 }
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
        nome: "Campeonato Espanhol",
        anos: "2017, 2020, 2022, 2024",
        clube: "Real Madrid",
      },
      {
        nome: "Copa do Rei",
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
        nome: "Golden Foot Award",
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
    tags: ["Modric", "Luka Modric", "Modrik", "LM10", "Croatian Maestro"],
    ultima_atualizacao: "27/10/25",
  },

  //Marcelo Brozović
  {
    nome: "Marcelo Brozović",
    background: "default",
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
    background: "default",
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
    background: "titanium",
    descricao:
      "Meio-campista dinamarquês conhecido por sua visão de jogo excepcional, precisão nos passes e cobranças de falta. Eriksen é um dos jogadores mais criativos de sua geração, com passagens notáveis por Ajax e Tottenham, e que protagonizou um retorno inspirador ao futebol de alto nível após um incidente cardíaco.",
    pagina: "https://www.instagram.com/christian_eriksen/",
    nacionalidade: "Dinamarca",
    imagem:
      "https://conteudo.imguol.com.br/c/entretenimento/0f/2022/11/22/christian-eriksen-em-jogo-contra-a-tunisia-na-copa-do-qatar-1669128331095_v2_450x600.jpg",
    numero: "14",
    posicao: "Meia-atacante/Meia Central",
    dataNascimento: "14/02/1992",
    status: "Ativo",
    curiosidades:
      "Eriksen sofreu uma parada cardíaca durante uma partida da Euro 2020. Seu retorno vitorioso ao futebol, jogando primeiro pelo Brentford e depois pelo Manchester United, é amplamente celebrado como um dos maiores 'comebacks' da história do esporte.",
    clubes: [
      createClub(
        "Ajax",
        { inicio: "2010", fim: "2013" },
        { jogos: 163, gols: 32, assistencias: 65 }
      ),
      createClub(
        "Tottenham Hotspur",
        { inicio: "2013", fim: "2020" },
        { jogos: 305, gols: 69, assistencias: 90 }
      ),
      createClub(
        "Inter de Milão",
        { inicio: "2020", fim: "2021" },
        { jogos: 60, gols: 8, assistencias: 3 }
      ),
      createClub(
        "Manchester United",
        { inicio: "2022", fim: "Presente" },
        { jogos: 90, gols: 5, assistencias: 15 }
      ),
    ],
    selecao: {
      nome: "Dinamarca",
      periodo: { inicio: "2010", fim: "Presente" },
      estatisticas: { jogos: 140, gols: 42, assistencias: 35 },
    },
    titulos: [
      // Internazionale
      {
        nome: "Campeonato Italiano",
        anos: "2020-21",
        clube: "Inter de Milão",
      },
      // Manchester United
      {
        nome: "Copa da Liga Inglesa",
        anos: "2023",
        clube: "Manchester United",
      },
      {
        nome: "Copa da Inglaterra",
        anos: "2024",
        clube: "Manchester United",
      },
      // Ajax
      {
        nome: "Campeonato Holandês",
        anos: "2011, 2012, 2013",
        clube: "Ajax",
      },
      {
        nome: "Copa da Holanda",
        anos: "2010",
        clube: "Ajax",
      },
    ],
    tags: ["Eriksen", "CE14"],
    ultima_atualizacao: "27/10/25",
  },

  // Kasper Schmeichel
  {
    nome: "Kasper Schmeichel",
    background: "default",
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
    background: "default",
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
    background: "diamond",
    descricao:
      "Ponta-direita egípcio de classe mundial, amplamente considerado um dos melhores atacantes de sua geração. Salah é conhecido por sua velocidade, agilidade e, principalmente, por sua capacidade extraordinária de marcar gols, quebrando inúmeros recordes no Liverpool e na Premier League.",
    pagina: "https://www.instagram.com/mosalah/",
    nacionalidade: "Egito",
    imagem:
      "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2018_21/2444601/180525-mohamed-salah-liverpool-mn-0815.jpg",
    numero: "11",
    posicao: "Ponta-direita",
    dataNascimento: "15/06/1992",
    status: "Ativo",
    curiosidades:
      "Salah foi o primeiro jogador africano a ser nomeado Jogador do Ano da PFA por duas vezes. Detém o recorde de mais gols marcados em uma temporada de 38 jogos da Premier League.",
    clubes: [
      createClub(
        "Roma",
        { inicio: "2015", fim: "2017" },
        { jogos: 83, gols: 34, assistencias: 22 }
      ),
      createClub(
        "Liverpool",
        { inicio: "2017", fim: "Presente" },
        { jogos: 380, gols: 240, assistencias: 100 }
      ),
    ],
    selecao: {
      nome: "Egito",
      periodo: { inicio: "2011", fim: "Presente" },
      estatisticas: { jogos: 110, gols: 65, assistencias: 35 },
    },
    titulos: [
      // Liverpool
      {
        nome: "UEFA Champions League",
        anos: "2019",
        clube: "Liverpool",
      },
      {
        nome: "Campeonato Inglês",
        anos: "2020",
        clube: "Liverpool",
      },
      {
        nome: "Copa da Inglaterra",
        anos: "2022, 2025",
        clube: "Liverpool",
      },
      {
        nome: "Copa da Liga Inglesa",
        anos: "2022, 2024",
        clube: "Liverpool",
      },
      {
        nome: "Mundial de Clubes",
        anos: "2019",
        clube: "Liverpool",
      },

      // Títulos Individuais
      {
        nome: "Chuteira de Ouro",
        logo: "Campeonato Inglês",
        anos: "2018, 2019, 2022",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Futebolista Africano do Ano",
        anos: "2017, 2018",
        clube: "Individual",
        categoria: "individual",
      },
    ],
    tags: ["Salah", "MS11", "Faraó"],
    ultima_atualizacao: "27/10/25",
  },

  // ESCÓCIA -------------------------------------------------------------------------------------------------

  // Andrew Robertson
  {
    nome: "Robertson",
    background: "default",
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
      "Goleiro esloveno conhecido por sua calma, posicionamento impecável e reflexos incrivelmente rápidos. Oblak é amplamente considerado uma das 'Muralhas' do futebol e é a espinha dorsal da forte defesa do Atlético de Madrid sob o comando de Diego Simeone.",
    pagina: "https://www.instagram.com/janoblak/",
    nacionalidade: "Eslovênia",
    imagem:
      "https://vodacomsoccer.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmobi_express%2Fimages%2F2024%2F9%2F1727429771829%2F16%2Fatletico-madrid-goalkeeper-jan-oblak16.jpeg&w=1920&q=75",
    numero: "13",
    posicao: "Goleiro",
    dataNascimento: "07/01/1993",
    status: "Ativo",
    curiosidades:
      "Oblak detém o recorde de mais Troféus Ricardo Zamora (prêmio de melhor goleiro de La Liga) na história, empatado com lendas como Victor Valdés. Sua consistência o tornou um ícone no Atlético de Madrid.",
    clubes: [
      createClub(
        "Benfica",
        { inicio: "2010", fim: "2014" },
        { jogos: 30, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Atlético de Madrid",
        { inicio: "2014", fim: "Presente" },
        { jogos: 480, gols: 0, assistencias: 0 }
      ),
    ],
    selecao: {
      nome: "Eslovênia",
      periodo: { inicio: "2012", fim: "Presente" },
      estatisticas: { jogos: 80, gols: 0, assistencias: 0 },
    },
    titulos: [
      // Atlético de Madrid
      {
        nome: "Campeonato Espanhol",
        anos: "2020-21",
        clube: "Atlético de Madrid",
      },
      {
        nome: "UEFA Europa League",
        anos: "2018",
        clube: "Atlético de Madrid",
      },
      {
        nome: "Supercopa da UEFA",
        anos: "2018",
        clube: "Atlético de Madrid",
      },

      // Benfica
      {
        nome: "Campeonato Português",
        anos: "2014",
        clube: "Benfica",
      },
      {
        nome: "Taça de Portugal",
        anos: "2014",
        clube: "Benfica",
      },

      // Individuais
      {
        nome: "Troféu Ricardo Zamora",
        logo: "Campeonato Espanhol",
        anos: "2016, 2017, 2018, 2019, 2021",
        clube: "Individual",
        categoria: "individual",
      },
    ],
    tags: ["Jan Oblak", "Zamora", "JO13"],
    ultima_atualizacao: "27/10/25",
  },

  //ESPANHA---------------------------------------------------------------------------------------------------

  // Alfredo Di Stéfano
  {
    nome: "Alfredo Di Stéfano",
    background: "gold",
    descricao:
      "Atacante/Meia-atacante lendário, considerado um dos maiores jogadores de todos os tempos. Di Stéfano foi a figura central na era de ouro do Real Madrid, liderando o clube à conquista de cinco Copas dos Campeões Europeus consecutivas. Era conhecido por sua versatilidade em campo, sendo um jogador que defendia e atacava com igual genialidade, apelidado de 'A Flecha Loira' ('Saeta Rubia').",
    pagina:
      "https://www.realmadrid.com/pt-PT/o-clube/historia/lendas-futebol/alfredo-di-stefano-laulhe",
    nacionalidade: "Argentina-Espanha",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/b/bb/Mcu_Alfredo_Di_Stefano.jpg",
    numero: "9",
    posicao: "Atacante/Meia-atacante",
    dataNascimento: "04/07/1926",
    status: "Aposentado",
    curiosidades:
      "Di Stéfano é o único jogador na história a ter recebido o 'Super Ballon d'Or' (em 1989), um prêmio especial que o reconheceu como o melhor jogador dos 30 anos anteriores. Ele marcou em todas as cinco finais da Copa dos Campeões Europeus que disputou e venceu.",
    clubes: [
      createClub(
        "River Plate",
        { inicio: "1945", fim: "1953" },
        { jogos: 90, gols: 70, assistencias: 10 }
      ),
      createClub(
        "Millonarios",
        { inicio: "1949", fim: "1953" },
        { jogos: 101, gols: 90, assistencias: 15 }
      ),
      createClub(
        "Real Madrid",
        { inicio: "1953", fim: "1964" },
        { jogos: 396, gols: 308, assistencias: 80 }
      ),
      createClub(
        "Espanyol",
        { inicio: "1964", fim: "1966" },
        { jogos: 65, gols: 14, assistencias: 5 }
      ),
    ],
    selecao: {
      nome: "Argentina-Espanha",
      periodo: { inicio: "1947", fim: "1961" },
      estatisticas: { jogos: 41, gols: 29, assistencias: 5 },
    },
    titulos: [
      // Individuais
      {
        nome: "Bola de Ouro",
        anos: "1957, 1959",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Super Bola de Ouro",
        anos: "1989",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Prêmios do Jubileu da UEFA",
        logo: "UEFA",
        anos: "2003",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "FIFA 100",
        anos: "2000",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "4º Melhor Jogador do Século XX",
        logo: "IFFHS",
        anos: "2000",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "3º Melhor Jogador Europeu do Século XX",
        logo: "IFFHS",
        anos: "2000",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "3º Melhor Jogador Sul-Americano do Século XX",
        logo: "IFFHS",
        anos: "2000",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Troféu Pichichi",
        logo: "Campeonato Espanhol",
        anos: "1954, 1956, 1957, 1958, 1959",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Ordem de Mérito",
        logo: "FIFA",
        anos: "1994",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Lendas",
        logo: "IFFHS",
        anos: "1994",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Bola de Ouro Dream Team",
        logo: "France Football",
        anos: "1994",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "11Leyendas",
        logo: "Jornal AS",
        anos: "2021",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "ALL TIME WORLD MEN'S DREAM TEAM (Time B)",
        logo: "IFFHS",
        anos: "2021",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "ALL TIME ARGENTINA MEN'S DREAM TEAM",
        logo: "IFFHS",
        anos: "2021",
        clube: "Individual",
        categoria: "individual",
      },

      // River Plate
      {
        nome: "Campeonato Argentino",
        anos: "1945, 1947",
        clube: "River Plate",
      },

      // Millonarios
      {
        nome: "Campeonato Colombiano",
        anos: "1949, 1951, 1952",
        clube: "Millonarios",
      },
      {
        nome: "Copa Colômbia",
        anos: "1953",
        clube: "Millonarios",
      },

      // Real Madrid
      {
        nome: "UEFA Champions League",
        anos: "1956, 1957, 1958, 1959, 1960",
        clube: "Real Madrid",
      },
      {
        nome: "Copa Latina",
        anos: "1955, 1957",
        clube: "Real Madrid",
      },
      {
        nome: "Campeonato Espanhol",
        anos: "1954, 1955, 1957, 1958, 1961, 1962, 1963, 1964",
        clube: "Real Madrid",
      },
      {
        nome: "Copa Intercontinental",
        anos: "1960",
        clube: "Real Madrid",
      },
      {
        nome: "Copa do Rei",
        anos: "1962",
        clube: "Real Madrid",
      },

      // Argentina
      {
        nome: "Copa América",
        anos: "1947",
        clube: "Real Madrid",
        logoVariavel: true,
      },
    ],
    tags: [
      "Di Stéfano",
      "Real Madrid",
      "Argentina",
      "Espanha",
      "AD9",
      "Saeta Rubia",
    ],
    ultima_atualizacao: "28/10/25",
  },

  // Álvaro Morata
  {
    nome: "Álvaro Morata",
    background: "default",
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
    background: "diamond",
    descricao:
      "Meio-campista espanhol, amplamente considerado um dos mais talentosos da história. Iniesta era a personificação do estilo 'Tiki-Taka', conhecido por seu controle de bola hipnotizante, dribles curtos em espaços apertados e visão de jogo magistral. Marcou o gol da vitória da Espanha na final da Copa do Mundo de 2010 e foi a peça chave da era de ouro do Barcelona.",
    pagina: "https://www.instagram.com/andresiniesta8/",
    nacionalidade: "Espanha",
    imagem:
      "https://cdn.britannica.com/92/163892-050-D937D47D/Andres-Iniesta-FC-Barcelona.jpg",
    numero: "8",
    posicao: "Meio-campista/Meia-atacante",
    dataNascimento: "11/05/1984",
    status: "Aposentado",
    curiosidades:
      "Iniesta marcou o único gol da final da Copa do Mundo de 2010 contra a Holanda. Ele foi o 'Cérebro' ao lado de Xavi no meio-campo do Barcelona e da Espanha, uma parceria que é frequentemente citada como a melhor da história. Em 2012, foi eleito o Melhor Jogador da UEFA.",
    clubes: [
      createClub(
        "Barcelona",
        { inicio: "2002", fim: "2018" },
        { jogos: 674, gols: 57, assistencias: 139 }
      ),
      createClub(
        "Vissel Kobe",
        { inicio: "2018", fim: "2023" },
        { jogos: 134, gols: 26, assistencias: 20 }
      ),
      createClub(
        "Emirates Club",
        { inicio: "2023", fim: "2024" },
        { jogos: 30, gols: 5, assistencias: 7 }
      ),
    ],
    selecao: {
      nome: "Espanha",
      periodo: { inicio: "2006", fim: "2018" },
      estatisticas: { jogos: 131, gols: 13, assistencias: 27 },
    },
    titulos: [
      // Seleção Espanhola
      {
        nome: "Copa do Mundo",
        anos: "2010",
        clube: "Espanha",
        logoVariavel: true,
      },
      {
        nome: "Eurocopa",
        anos: "2008",
        clube: "Espanha",
        logoVariavel: true,
      },
      {
        nome: "Eurocopa",
        anos: "2012",
        clube: "Espanha",
        logoVariavel: true,
      },

      // Barcelona
      {
        nome: "UEFA Champions League",
        anos: "2006, 2009, 2011, 2015",
        clube: "Barcelona",
      },
      {
        nome: "Campeonato Espanhol",
        anos: "2005, 2006, 2009, 2010, 2011, 2013, 2015, 2016, 2018",
        clube: "Barcelona",
      },
      {
        nome: "Mundial de Clubes",
        anos: "2009, 2011, 2015",
        clube: "Barcelona",
      },
      // Vissel Kobe
      {
        nome: "Copa do Imperador",
        anos: "2019",
        clube: "Vissel Kobe",
      },

      // Individuais
      {
        nome: "Melhor Jogador da UEFA",
        logo: "UEFA",
        anos: "2012",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Bola de Prata da Copa das Confederações",
        logo: "Copa das Confederações",
        anos: "2013",
        clube: "Individual",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Melhor Jogador da Eurocopa",
        logo: "Eurocopa",
        anos: "2012",
        clube: "Individual",
        categoria: "individual",
        logoVariavel: true,
      },
    ],
    tags: ["Iniesta", "AI8"],
    ultima_atualizacao: "28/10/25",
  },

  // Carles Puyol
  {
    nome: "Carles Puyol",
    background: "diamond",
    descricao:
      "Lendário capitão do Barcelona, símbolo de raça e lealdade. Um 'one-club man' que liderou o Barça e a Espanha nas suas eras mais vitoriosas, conquistando a Copa do Mundo, a Eurocopa e o triplete histórico pelo clube.",
    pagina: "https://www.instagram.com/carles5puyol/",
    numero: "5",
    posicao: "Zagueiro",
    dataNascimento: "13/04/1978",
    status: "Aposentado",
    nacionalidade: "Espanha",
    imagem:
      "https://m.media-amazon.com/images/M/MV5BNWMyOTNlOTctMGMxZi00MWFlLWJjZDAtMTQ3ODA0NWQ3NWY0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    clubes: [
      createClub(
        "Barcelona C",
        { inicio: "1996", fim: "1997" },
        { jogos: 1, gols: 1, assistencias: 0 }
      ),
      createClub(
        "Barcelona B",
        { inicio: "1997", fim: "1999" },
        { jogos: 89, gols: 6, assistencias: 0 }
      ),
      createClub(
        "Barcelona",
        { inicio: "1999", fim: "2014" },
        { jogos: 593, gols: 18, assistencias: 14 }
      ),
    ],
    selecao: {
      nome: "Espanha",
      periodo: { inicio: "2000", fim: "2013" },
      estatisticas: { jogos: 100, gols: 3, assistencias: 0 },
    },
    titulos: [
      // Espanha
      {
        nome: "Copa do Mundo",
        anos: "2010",
        clube: "Espanha",
        logoVariavel: true,
      },
      {
        nome: "Eurocopa",
        anos: "2008",
        clube: "Espanha",
        logoVariavel: true,
      },
      {
        nome: "Medalha de Prata - Jogos Olímpicos",
        logo: "Jogos Olímpicos",
        anos: "2000",
        clube: "Espanha",
        logoVariavel: true,
      },

      // Barcelona
      {
        nome: "UEFA Champions League",
        anos: "2006, 2009, 2011",
        clube: "Barcelona",
      },
      {
        nome: "Campeonato Espanhol",
        anos: "2005, 2006, 2009, 2010, 2011, 2013",
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
      {
        nome: "Copa do Rei",
        anos: "2009, 2012",
        clube: "Barcelona",
      },
      {
        nome: "Supercopa da Espanha",
        anos: "2005, 2006, 2009, 2010, 2011, 2013",
        clube: "Barcelona",
      },

      // Individuais
      {
        nome: "Time do Ano da UEFA",
        logo: "UEFA",
        anos: "2002, 2005, 2006, 2008, 2009, 2010",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "FIFPro World XI",
        logo: "FIFPro",
        anos: "2007, 2008, 2010",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Defensor do Ano da UEFA",
        logo: "UEFA",
        anos: "2006",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Time da Copa do Mundo",
        logo: "Copa do Mundo",
        anos: "2010",
        clube: "Individual",
        categoria: "individual",
        logoVariavel: true,
      },
    ],
    tags: ["Carles Puyol", "Capitão", "One-Club Man"],
    ultima_atualizacao: "28/10/25",
  },

  // Dani Carvajal
  {
    nome: "Dani Carvajal",
    background: "diamond",
    descricao:
      "Lateral-direito formado na base do Real Madrid, conhecido por sua consistência defensiva, força física e contribuições ofensivas. Carvajal é um dos pilares da era vitoriosa do Real Madrid, sendo um dos jogadores com mais títulos de Liga dos Campeões na história.",
    pagina: "https://www.instagram.com/dani.carvajal.2/",
    nacionalidade: "Espanha",
    imagem:
      "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--e6263595-3f05-459b-b73a-ee23af676971/ND_CARVAJAL__AV13707.app.webp?preferwebp=true",
    numero: "2",
    posicao: "Lateral-direito",
    dataNascimento: "11/01/1992",
    status: "Ativo",
    curiosidades:
      "Carvajal é um dos poucos jogadores a ter vencido 7 títulos de Liga dos Campeões da UEFA pelo mesmo clube (Real Madrid). Ele é um produto da academia 'La Fábrica' do clube.",
    clubes: [
      createClub(
        "Bayer Leverkusen",
        { inicio: "2012", fim: "2013" },
        { jogos: 36, gols: 1, assistencias: 8 }
      ),
      createClub(
        "Real Madrid",
        { inicio: "2013", fim: "Presente" },
        { jogos: 450, gols: 10, assistencias: 55 }
      ),
    ],
    selecao: {
      nome: "Espanha",
      periodo: { inicio: "2014", fim: "Presente" },
      estatisticas: { jogos: 50, gols: 1, assistencias: 5 },
    },
    titulos: [
      // Real Madrid
      {
        nome: "UEFA Champions League",
        anos: "2014, 2016, 2017, 2018, 2022, 2024",
        clube: "Real Madrid",
      },
      {
        nome: "Campeonato Espanhol",
        anos: "2017, 2020, 2022, 2024",
        clube: "Real Madrid",
      },
      {
        nome: "Mundial de Clubes",
        anos: "2014, 2016, 2017, 2018, 2022",
        clube: "Real Madrid",
      },
      {
        nome: "Supercopa da UEFA",
        anos: "2014, 2016, 2017, 2022, 2024",
        clube: "Real Madrid",
      },
      {
        nome: "Copa do Rei",
        anos: "2014, 2023",
        clube: "Real Madrid",
      },

      // Seleção Espanhola
      {
        nome: "UEFA Nations League",
        anos: "2023",
        clube: "Espanha",
      },
    ],
    tags: ["Carvajal", "DC2"],
    ultima_atualizacao: "27/10/25",
  },

  // David Silva
  {
    nome: "David Silva",
    background: "titanium",
    descricao:
      "Meio-campista espanhol, conhecido como 'El Mago', famoso por sua visão de jogo excepcional, controle de bola e passes precisos. Foi um dos principais arquitetos da era de ouro do Manchester City e peça fundamental nos títulos da Espanha na Copa do Mundo e Eurocopa.",
    pagina: "https://www.instagram.com/david21lva/",
    numero: "21",
    posicao: "Meio-campista / Ponta",
    dataNascimento: "08/01/1986",
    status: "Aposentado",
    nacionalidade: "Espanha",
    imagem:
      "https://tmssl.akamaized.net/images/foto/galerie/david-silva-1407846069-2263.jpg",
    clubes: [
      createClub(
        "Valencia",
        { inicio: "2004", fim: "2010" },
        { jogos: 168, gols: 31, assistencias: 29 }
      ),
      createClub(
        "Celta de Vigo",
        { inicio: "2005", fim: "2006" },
        { jogos: 34, gols: 4, assistencias: 3 }
      ),
      createClub(
        "Eibar",
        { inicio: "2004", fim: "2005" },
        { jogos: 35, gols: 5, assistencias: 0 }
      ),
      createClub(
        "Manchester City",
        { inicio: "2010", fim: "2020" },
        { jogos: 436, gols: 77, assistencias: 123 }
      ),
      createClub(
        "Real Sociedad",
        { inicio: "2020", fim: "2023" },
        { jogos: 93, gols: 7, assistencias: 18 }
      ),
    ],
    selecao: {
      nome: "Espanha",
      periodo: { inicio: "2006", fim: "2018" },
      estatisticas: { jogos: 125, gols: 35, assistencias: 29 },
    },
    titulos: [
      // Valencia
      {
        nome: "Copa do Rei",
        anos: "2008",
        clube: "Valencia",
      },

      // Manchester City
      {
        nome: "Campeonato Inglês",
        anos: "2012, 2014, 2018, 2019",
        clube: "Manchester City",
      },
      {
        nome: "Copa da Inglaterra",
        anos: "2011, 2019",
        clube: "Manchester City",
      },
      {
        nome: "Copa da Liga Inglesa",
        anos: "2014, 2016, 2018, 2019, 2020",
        clube: "Manchester City",
      },
      {
        nome: "Supercopa da Inglaterra",
        anos: "2012, 2018, 2019",
        clube: "Manchester City",
      },

      // Real Sociedad
      {
        nome: "Copa do Rei",
        anos: "2020",
        clube: "Real Sociedad",
      },

      // Seleção Espanhola
      {
        nome: "Copa do Mundo",
        anos: "2010",
        clube: "Espanha",
        logoVariavel: true,
      },
      {
        nome: "Eurocopa",
        anos: "2008",
        clube: "Espanha",
        logoVariavel: true,
      },
      {
        nome: "Eurocopa",
        anos: "2012",
        clube: "Espanha",
        logoVariavel: true,
      },

      // Individuais
      {
        nome: "Equipe do Ano PFA da Premier League",
        logo: "Campeonato Inglês",
        anos: "2012, 2018",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Seleção da Eurocopa",
        logo: "Eurocopa",
        anos: "2012",
        clube: "Individual",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Jogador da Temporada do Manchester City",
        anos: "2012, 2017",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Assistente da Temporada",
        logo: "Campeonato Inglês",
        anos: "2012",
        clube: "Individual",
        categoria: "individual",
      },
    ],
    tags: ["David Silva", "El Mago", "Silva"],
    ultima_atualizacao: "28/10/25",
  },

  // David Villa
  {
    nome: "David Villa",
    background: "titanium",
    descricao:
      "Maior artilheiro da história da Seleção Espanhola, 'El Guaje' foi um atacante letal, conhecido por sua versatilidade e faro de gol. Foi peça-chave na conquista da Copa do Mundo e Eurocopa pela Espanha, além de ter sido campeão da Champions League no Barcelona.",
    pagina: "https://www.instagram.com/davidvilla/",
    numero: "7",
    posicao: "Atacante / Ponta",
    dataNascimento: "03/12/1981",
    status: "Aposentado",
    nacionalidade: "Espanha",
    imagem:
      "https://te.i.uol.com.br/album/mais_feios_mais_bonitos_copa_do_mundo_f_004.jpg",
    clubes: [
      createClub(
        "Sporting Gijón B",
        { inicio: "1999", fim: "2001" },
        { jogos: 65, gols: 25, assistencias: 0 }
      ),
      createClub(
        "Sporting Gijón",
        { inicio: "2001", fim: "2003" },
        { jogos: 85, gols: 40, assistencias: 0 }
      ),
      createClub(
        "Real Zaragoza",
        { inicio: "2003", fim: "2005" },
        { jogos: 94, gols: 39, assistencias: 6 }
      ),
      createClub(
        "Valencia",
        { inicio: "2005", fim: "2010" },
        { jogos: 226, gols: 129, assistencias: 21 }
      ),
      createClub(
        "Barcelona",
        { inicio: "2010", fim: "2013" },
        { jogos: 119, gols: 48, assistencias: 24 }
      ),
      createClub(
        "Atlético de Madrid",
        { inicio: "2013", fim: "2014" },
        { jogos: 47, gols: 15, assistencias: 5 }
      ),
      createClub(
        "New York City FC",
        { inicio: "2015", fim: "2018" },
        { jogos: 126, gols: 80, assistencias: 21 }
      ),
      createClub(
        "Vissel Kobe",
        { inicio: "2019", fim: "2020" },
        { jogos: 29, gols: 13, assistencias: 1 }
      ),
    ],
    selecao: {
      nome: "Espanha",
      periodo: { inicio: "2005", fim: "2017" },
      estatisticas: { jogos: 98, gols: 59, assistencias: 12 },
    },
    titulos: [
      // Real Zaragoza
      {
        nome: "Copa do Rei",
        anos: "2004",
        clube: "Real Zaragoza",
      },
      {
        nome: "Supercopa da Espanha",
        anos: "2004",
        clube: "Real Zaragoza",
      },

      // Valencia
      {
        nome: "Copa do Rei",
        anos: "2008",
        clube: "Valencia",
      },

      // Barcelona
      {
        nome: "Campeonato Espanhol",
        anos: "2011",
        clube: "Barcelona",
      },
      {
        nome: "Copa do Rei",
        anos: "2012",
        clube: "Barcelona",
      },
      {
        nome: "Supercopa da Espanha",
        anos: "2010, 2011",
        clube: "Barcelona",
      },
      {
        nome: "Liga dos Campeões da UEFA",
        logo: "UEFA",
        anos: "2011",
        clube: "Barcelona",
      },
      {
        nome: "Supercopa da UEFA",
        logo: "UEFA",
        anos: "2011",
        clube: "Barcelona",
      },
      {
        nome: "Mundial de Clubes",
        logo: "FIFA",
        anos: "2011",
        clube: "Barcelona",
      },

      // Atlético de Madrid
      {
        nome: "Campeonato Espanhol",
        anos: "2014",
        clube: "Atlético de Madrid",
      },

      // Vissel Kobe
      {
        nome: "Copa do Imperador",
        anos: "2019",
        clube: "Vissel Kobe",
      },

      // Seleção Espanhola
      {
        nome: "Copa do Mundo",
        anos: "2010",
        clube: "Espanha",
        logoVariavel: true,
      },
      {
        nome: "Eurocopa",
        anos: "2008",
        clube: "Espanha",
        logoVariavel: true,
      },

      // Individuais
      {
        nome: "Bola de Bronze da Copa do Mundo",
        logo: "Copa do Mundo",
        anos: "2010",
        clube: "Individual",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Chuteira de Prata da Copa do Mundo",
        logo: "Copa do Mundo",
        anos: "2010",
        clube: "Individual",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Artilheiro da Eurocopa",
        logo: "Eurocopa",
        anos: "2008",
        clube: "Individual",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Artilheiro Espanhol da La Liga",
        logo: "Campeonato Espanhol",
        anos: "2006, 2007, 2009, 2010",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "MLS MVP",
        logo: "MLS",
        anos: "2016",
        clube: "Individual",
        categoria: "individual",
      },
    ],
    tags: ["David Villa", "Villa", "El Guaje"],
    ultima_atualizacao: "28/10/25",
  },

  // Diego Costa
  {
    nome: "Diego Costa",
    background: "titanium",
    descricao:
      "Atacante hispano-brasileiro conhecido por seu estilo de jogo agressivo, força física e faro de gol. Foi campeão nacional por Atlético de Madrid, Chelsea e Atlético Mineiro. Recentemente, teve passagens por Botafogo e Grêmio no futebol brasileiro.",
    pagina: "https://www.instagram.com/diego.costa/",
    nacionalidade: "Espanha",
    imagem:
      "https://conteudo.imguol.com.br/c/copadomundo/2018/imagem/81/2018/06/15/diego-costa-comemora-gol-da-espanha-contra-portugal-1529091586652_v2_1x1.jpg",
    numero: "19",
    posicao: "Atacante",
    dataNascimento: "07/10/1988",
    status: "Sem Clube",
    clubes: [
      createClub(
        "Atlético de Madrid",
        { inicio: "2010", fim: "2014" },
        { jogos: 135, gols: 64, assistencias: 24 }
      ),
      createClub(
        "Chelsea",
        { inicio: "2014", fim: "2017" },
        { jogos: 120, gols: 59, assistencias: 23 }
      ),
      createClub(
        "Atlético de Madrid",
        { inicio: "2017", fim: "2020" },
        { jogos: 81, gols: 19, assistencias: 12 }
      ),
      createClub(
        "Atlético Mineiro",
        { inicio: "2021", fim: "2021" },
        { jogos: 19, gols: 5, assistencias: 1 }
      ),
      createClub(
        "Wolverhampton Wanderers",
        { inicio: "2022", fim: "2023" },
        { jogos: 25, gols: 1, assistencias: 0 }
      ),
      createClub(
        "Botafogo",
        { inicio: "2023", fim: "2023" },
        { jogos: 15, gols: 3, assistencias: 0 }
      ),
      createClub(
        "Grêmio",
        { inicio: "2024", fim: "2024" },
        { jogos: 25, gols: 7, assistencias: 2 }
      ),
    ],
    selecao: {
      nome: "Espanha",
      periodo: { inicio: "2014", fim: "2018" },
      estatisticas: { jogos: 24, gols: 10, assistencias: 2 },
    },
    titulos: [
      // Atlético de Madrid
      {
        nome: "Supercopa da UEFA",
        anos: "2010, 2012, 2018",
        clube: "Atlético de Madrid",
      },
      {
        nome: "Campeonato Espanhol",
        anos: "2014, 2021",
        clube: "Atlético de Madrid",
      },
      {
        nome: "Copa do Rei",
        anos: "2013",
        clube: "Atlético de Madrid",
      },
      {
        nome: "UEFA Europa League",
        anos: "2018",
        clube: "Atlético de Madrid",
      },

      // Chelsea
      {
        nome: "Campeonato Inglês",
        anos: "2015, 2017",
        clube: "Chelsea",
      },
      {
        nome: "Copa da Liga Inglesa",
        anos: "2015",
        clube: "Chelsea",
      },

      // Atlético Mineiro
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

      // Grêmio
      {
        nome: "Campeonato Gaúcho",
        anos: "2024",
        clube: "Atlético Mineiro",
      },
    ],
    tags: ["Diego Costa"],
  },

  // Gavi (Pablo Páez Gavira)
  {
    nome: "Gavi",
    background: "promise",
    descricao:
      "Jovem meio-campista central, formado na La Masia do FC Barcelona. Conhecido por sua garra, técnica e intensidade, é um dos pilares da renovação do clube e da Seleção Espanhola. Atualmente, está se recuperando de uma grave lesão no joelho.",
    pagina: "https://www.instagram.com/pablogavi/",
    nacionalidade: "Espanha",
    imagem:
      "https://www.eurobarca.hu/wp-content/uploads/2025/01/16977537295.jpg",
    numero: "6",
    posicao: "Meio-Campista Central",
    dataNascimento: "05/08/2004",
    status: "Ativo",
    clubes: [
      createClub(
        "Barcelona",
        { inicio: "2021", fim: "Atual" },
        { jogos: 110, gols: 7, assistencias: 12 }
      ),
    ],
    selecao: {
      nome: "Espanha",
      periodo: { inicio: "2021", fim: "Atual" },
      estatisticas: { jogos: 28, gols: 5, assistencias: 0 },
    },
    titulos: [
      // Barcelona
      {
        nome: "Campeonato Espanhol",
        anos: "2022–23, 2024–25",
        clube: "Barcelona",
      },
      {
        nome: "Supercopa da Espanha",
        anos: "2022–23, 2024–25",
        clube: "Barcelona",
      },
      {
        nome: "Copa do Rei",
        anos: "2024–25",
        clube: "Barcelona",
      },

      // Seleção
      {
        nome: "UEFA Nations League",
        anos: "2022–23",
        clube: "Espanha",
      },

      // Prêmios Individuais
      {
        nome: "Troféu Kopa",
        anos: "2022",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Golden Boy",
        anos: "2022",
        clube: "Individual",
        categoria: "individual",
      },
    ],
    tags: ["Gavi", "Pablo Páez Gavira"],
    ultima_atualizacao: "29/10/25",
  },

  // Gerard Piqué
  {
    nome: "Gerard Piqué",
    background: "diamond",
    descricao:
      "Um dos zagueiros mais vitoriosos da história, Piqué foi uma figura central na defesa do 'Barça de Guardiola' e da 'Fúria' campeã do mundo. Ganhou todos os títulos possíveis, sendo um ícone da La Masia, conhecido por sua técnica e liderança em campo.",
    pagina: "https://www.instagram.com/3gerardpique/",
    numero: "3",
    posicao: "Zagueiro",
    dataNascimento: "02/02/1987",
    status: "Aposentado",
    nacionalidade: "Espanha",
    imagem: "https://backup.tribunadonorte.com.br/fotos/272196.jpg",
    clubes: [
      createClub(
        "Manchester United",
        { inicio: "2004", fim: "2008" },
        { jogos: 23, gols: 2, assistencias: 0 }
      ),
      createClub(
        "Real Zaragoza",
        { inicio: "2006", fim: "2007" },
        { jogos: 28, gols: 3, assistencias: 0 }
      ),
      createClub(
        "Barcelona",
        { inicio: "2008", fim: "2023" },
        { jogos: 615, gols: 53, assistencias: 13 }
      ),
    ],
    selecao: {
      nome: "Espanha",
      periodo: { inicio: "2009", fim: "2018" },
      estatisticas: { jogos: 102, gols: 5, assistencias: 3 },
    },
    titulos: [
      // Manchester United
      {
        nome: "Campeonato Inglês",
        anos: "2008",
        clube: "Manchester United",
      },
      {
        nome: "UEFA Champions League",
        anos: "2008",
        clube: "Manchester United",
      },
      {
        nome: "Copa da Liga Inglesa",
        anos: "2006",
        clube: "Manchester United",
      },
      {
        nome: "Supercopa da Inglaterra",
        anos: "2007",
        clube: "Manchester United",
      },

      // Barcelona
      {
        nome: "Campeonato Espanhol",
        anos: "9 Títulos",
        clube: "Barcelona",
      },
      {
        nome: "Copa do Rei",
        anos: "7 Títulos",
        clube: "Barcelona",
      },
      {
        nome: "UEFA Champions League",
        anos: "2009, 2011, 2015",
        clube: "Barcelona",
      },
      {
        nome: "Mundial de Clubes",
        logo: "FIFA",
        anos: "2009, 2011, 2015",
        clube: "Barcelona",
      },
      {
        nome: "Supercopa da UEFA",
        logo: "UEFA",
        anos: "2009, 2011, 2015",
        clube: "Barcelona",
      },

      // Seleção Espanhola
      {
        nome: "Copa do Mundo",
        anos: "2010",
        clube: "Espanha",
        logoVariavel: true,
      },
      {
        nome: "Eurocopa",
        anos: "2012",
        clube: "Espanha",
        logoVariavel: true,
      },

      // Individuais
      {
        nome: "Time do Ano da FIFA (FIFA World XI)",
        logo: "FIFA",
        anos: "2010, 2011, 2012, 2016",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Time do Ano da UEFA",
        logo: "UEFA",
        anos: "2010, 2011, 2012, 2015, 2016",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Jogador Revelação da La Liga",
        logo: "Campeonato Espanhol",
        anos: "2009",
        clube: "Individual",
        categoria: "individual",
      },
    ],
    tags: ["Gerard Pique", "Pique", "La Masia"],
    ultima_atualizacao: "28/10/25",
  },

  // Iker Casillas
  {
    nome: "Iker Casillas",
    background: "diamond",
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
    background: "default",
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
    background: "titanium",
    descricao:
      "Lateral-esquerdo espanhol de elite, conhecido por sua velocidade incrível e por ser um dos jogadores mais ofensivos de sua posição. Formou uma parceria lendária com Lionel Messi no Barcelona, onde conquistou todos os títulos possíveis. Atualmente joga na MLS.",
    pagina: "https://www.instagram.com/jordialbaofficial/",
    nacionalidade: "Espanha",
    imagem:
      "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2025/10/Jordi-Alba-Inter-Miami-e1759857096374.jpg?w=1200&h=1200&crop=1",
    numero: "18",
    posicao: "Lateral-esquerdo",
    dataNascimento: "24/03/1989",
    status: "Ativo",
    curiosidades:
      "Jordi Alba foi o principal parceiro de Lionel Messi em campo por muitos anos no Barcelona, sendo responsável por quase 100 assistências durante sua carreira no clube.",
    clubes: [
      createClub(
        "Valencia",
        { inicio: "2009", fim: "2012" },
        { jogos: 110, gols: 6, assistencias: 14 }
      ),
      createClub(
        "Barcelona",
        { inicio: "2012", fim: "2023" },
        { jogos: 459, gols: 27, assistencias: 99 }
      ),
      createClub(
        "Inter Miami",
        { inicio: "2023", fim: "Presente" },
        { jogos: 60, gols: 5, assistencias: 15 }
      ),
    ],
    selecao: {
      nome: "Espanha",
      periodo: { inicio: "2011", fim: "2023" },
      estatisticas: { jogos: 93, gols: 10, assistencias: 22 },
    },
    titulos: [
      // Seleção Espanhola
      {
        nome: "Eurocopa",
        anos: "2012",
        clube: "Espanha",
        logoVariavel: true,
      },
      {
        nome: "UEFA Nations League",
        anos: "2023",
        clube: "Espanha",
      },

      // Barcelona
      {
        nome: "UEFA Champions League",
        anos: "2015",
        clube: "Barcelona",
      },
      {
        nome: "Campeonato Espanhol",
        anos: "2013, 2015, 2016, 2018, 2019, 2023",
        clube: "Barcelona",
      },
      {
        nome: "Copa do Rei",
        anos: "2015, 2016, 2017, 2018, 2021",
        clube: "Barcelona",
      },
      {
        nome: "Mundial de Clubes",
        anos: "2015",
        clube: "Barcelona",
      },
      // Inter Miami
      {
        nome: "Leagues Cup",
        anos: "2023",
        clube: "Inter Miami",
      },
    ],
    tags: ["Jordi Alba", "JA18"],
    ultima_atualizacao: "27/10/25",
  },

  // Lamine Yamal
  {
    nome: "Lamine Yamal",
    background: "promise",
    descricao:
      "Jovem ponta-direita espanhol, considerado um dos maiores talentos surgidos na La Masia nos últimos anos. Yamal é conhecido por sua velocidade, habilidade de drible, maturidade tática e faro de gol, tendo se consolidado como titular no Barcelona e na Seleção Espanhola com apenas 18 anos.",
    pagina: "https://www.instagram.com/lamineyamal/",
    nacionalidade: "Espanha",
    imagem:
      "https://www.365scores.com/pt-br/news/magazine/wp-content/uploads/2025/10/lamine-yamal-barcelona-2-scaled-e1761505684194.jpg",
    numero: "10",
    posicao: "Ponta-direita",
    dataNascimento: "13/07/2007",
    status: "Ativo",
    clubes: [
      createClub(
        "Barcelona",
        { inicio: "2023", fim: "Presente" },
        { jogos: 100, gols: 25, assistencias: 25 }
      ),
    ],
    selecao: {
      nome: "Espanha",
      periodo: { inicio: "2023", fim: "Presente" },
      estatisticas: { jogos: 20, gols: 5, assistencias: 3 },
    },
    titulos: [
      // Barcelona
      {
        nome: "Campeonato Espanhol",
        anos: "2022-23",
        clube: "Barcelona",
      },
      {
        nome: "Supercopa da Espanha",
        anos: "2024",
        clube: "Barcelona",
      },

      // Seleção Espanhola
      {
        nome: "UEFA Nations League",
        anos: "2023",
        clube: "Espanha",
      },
      // Individuais
      {
        nome: "Golden Boy",
        logo: "Ballon Dor",
        anos: "2024, 2025",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Melhor Jogador Jovem",
        logo: "Campeonato Espanhol",
        anos: "2023-24",
        clube: "Individual",
        categoria: "individual",
      },
    ],
    tags: [
      "Lamine Yamal",
      "Barcelona",
      "Espanha",
      "Ponta-direita",
      "LY10",
      "Jovem Talento",
    ],
  },

  // Marco Asensio (Marco Asensio Willemsen)
  {
    nome: "Marco Asensio",
    background: "$",
    descricao:
      "Meia-atacante/ponta espanhol conhecido por sua potente finalização de pé esquerdo e versatilidade. Foi peça importante na era de múltiplas conquistas de Liga dos Campeões do Real Madrid. Após uma passagem pelo PSG, atualmente defende o Fenerbahçe.",
    pagina: "https://www.instagram.com/marcoasensio10/",
    nacionalidade: "Espanha",
    imagem: "https://s.hs-data.com/bilder/spieler/gross/257323.jpg",
    numero: "21",
    posicao: "Meia-atacante / Ponta",
    dataNascimento: "21/01/1996",
    status: "Ativo",
    clubes: [
      createClub(
        "Mallorca",
        { inicio: "2013", fim: "2015" },
        { jogos: 56, gols: 7, assistencias: 9 }
      ),
      createClub(
        "Espanyol",
        { inicio: "2015", fim: "2016" },
        { jogos: 37, gols: 4, assistencias: 15 }
      ),
      createClub(
        "Real Madrid",
        { inicio: "2016", fim: "2023" },
        { jogos: 286, gols: 61, assistencias: 32 }
      ),
      createClub(
        "Paris Saint-Germain",
        { inicio: "2023", fim: "2025" },
        { jogos: 47, gols: 7, assistencias: 11 }
      ),
      createClub(
        "Aston Villa",
        { inicio: "2025", fim: "2025" },
        { jogos: 21, gols: 8, assistencias: 1 }
      ),
      createClub(
        "Fenerbahçe",
        { inicio: "2025", fim: "Atual" },
        { jogos: 3, gols: 1, assistencias: 0 }
      ),
    ],
    selecao: {
      nome: "Espanha",
      periodo: { inicio: "2016", fim: "Atual" },
      estatisticas: { jogos: 38, gols: 2, assistencias: 0 },
    },
    titulos: [
      // Real Madrid
      {
        nome: "UEFA Champions League",
        anos: "2017, 2018, 2022",
        clube: "Real Madrid",
      },
      {
        nome: "Campeonato Espanhol",
        anos: "2017, 2020, 2022",
        clube: "Real Madrid",
      },
      { nome: "Copa do Rei", anos: "2023", clube: "Real Madrid" },
      {
        nome: "Supercopa da UEFA",
        anos: "2016, 2017, 2022",
        clube: "Real Madrid",
      },
      {
        nome: "Mundial de Clubes",
        anos: "2016, 2017, 2018, 2022",
        clube: "Real Madrid",
      },
      {
        nome: "Supercopa da Espanha",
        anos: "2017, 2020, 2022",
        clube: "Real Madrid",
      },
      // Paris Saint-Germain
      {
        nome: "Campeonato Francês",
        anos: "2024",
        clube: "Paris Saint-Germain",
      },
      {
        nome: "Supercopa da França",
        anos: "2024",
        clube: "Paris Saint-Germain",
      },
      // Seleção Espanhola
      { nome: "UEFA Nations league", anos: "2023", clube: "Espanha" },
    ],
    tags: [
      "meia-atacante",
      "espanha",
      "real madrid",
      "fenerbahçe",
      "Paris Saint-Germain",
      "PSG",
    ],
  },

  //Pablo Marí
  {
    nome: "Pablo Marí",
    background: "default",
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

  // Pedri (Pedro González López)
  {
    nome: "Pedri",
    background: "promise",
    descricao:
      "Jovem e talentoso meio-campista central, considerado um dos maiores 'registas' da sua geração. Formado no Las Palmas e rapidamente alçado ao estrelato no Barcelona. Sua visão de jogo, controle de bola e capacidade de ditar o ritmo são suas marcas registradas.",
    pagina: "https://www.instagram.com/pedri/",
    nacionalidade: "Espanha",
    imagem:
      "https://semprebarca.com/wp-content/uploads/2025/02/FC-Barcelona-v-Deportivo-Alaves-La-Liga-EA-Sports-5.jpg",
    numero: "8",
    posicao: "Meio-Campista Central",
    dataNascimento: "25/11/2002",
    status: "Ativo",
    clubes: [
      createClub(
        "Las Palmas",
        { inicio: "2019", fim: "2020" },
        { jogos: 37, gols: 4, assistencias: 7 }
      ),
      createClub(
        "Barcelona",
        { inicio: "2020", fim: "Atual" },
        { jogos: 138, gols: 18, assistencias: 10 }
      ),
    ],
    selecao: {
      nome: "Espanha",
      periodo: { inicio: "2021", fim: "Atual" },
      estatisticas: { jogos: 38, gols: 5, assistencias: 0 },
    },
    titulos: [
      // Barcelona
      {
        nome: "Campeonato Espanhol",
        anos: "2022–23, 2024–25",
        clube: "Barcelona",
      },
      {
        nome: "Copa do Rei",
        anos: "2020–21, 2024–25",
        clube: "Barcelona",
      },
      {
        nome: "Supercopa da Espanha",
        anos: "2022–23, 2024–25",
        clube: "Barcelona",
      },

      // Seleção
      {
        nome: "Eurocopa",
        anos: "2024",
        clube: "Espanha",
        logoVariavel: true,
      },
      {
        nome: "Jogos Olímpicos (Prata)",
        logo: "Jogos Olímpicos",
        anos: "2020",
        clube: "Espanha",
        logoVariavel: true,
      },

      // Prêmios Individuais
      {
        nome: "Troféu Kopa",
        anos: "2021",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Golden Boy",
        anos: "2021",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Melhor Jogador Jovem da Eurocopa",
        logo: "Eurocopa",
        anos: "2020",
        clube: "Individual",
        categoria: "individual",
        logoVariavel: true,
      },
    ],
    tags: ["Pedri", "Pedro González López"],
    ultima_atualizacao: "29/10/25",
  },

  // Pep Guardiola
  {
    nome: "Pep Guardiola",
    background: "default",
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
    background: "default",
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
    background: "diamond",
    descricao:
      "Lenda viva do Barcelona e da Seleção Espanhola, Busquets é amplamente considerado o melhor volante defensivo de sua geração. Conhecido por sua inteligência tática inigualável, posicionamento perfeito e passes curtos precisos, foi o motor silencioso das equipes campeãs que dominaram o futebol mundial entre 2009 e 2015. Atualmente joga na MLS.",
    pagina: "https://www.instagram.com/5sergiob/",
    nacionalidade: "Espanha",
    imagem:
      "https://livesport-ott-images.ssl.cdn.cra.cz/r900xfq60/d6602cb8-7698-426a-b4a8-8c235d80b1bd.jpeg",
    numero: "5",
    posicao: "Volante",
    dataNascimento: "16/07/1988",
    status: "Ativo",
    curiosidades:
      "Busquets possui o terceiro maior número de jogos na história do Barcelona. Seu estilo de jogo, baseado em antecipação e controle de bola, foi crucial para o sucesso do 'Tiki-Taka' de Pep Guardiola e da Espanha. Ele é um dos únicos jogadores a vencer duas Tríplices Coroas (Barcelona 2009 e 2015).",
    clubes: [
      createClub(
        "Barcelona",
        { inicio: "2008", fim: "2023" },
        { jogos: 722, gols: 18, assistencias: 45 }
      ),
      createClub(
        "Inter Miami",
        { inicio: "2023", fim: "Presente" },
        { jogos: 60, gols: 1, assistencias: 8 }
      ),
    ],
    selecao: {
      nome: "Espanha",
      periodo: { inicio: "2009", fim: "2022" },
      estatisticas: { jogos: 143, gols: 2, assistencias: 10 },
    },
    titulos: [
      // Seleção Espanhola
      {
        nome: "Copa do Mundo",
        anos: "2010",
        clube: "Espanha",
        logoVariavel: true,
      },
      {
        nome: "Eurocopa",
        anos: "2012",
        clube: "Espanha",
        logoVariavel: true,
      },

      // Barcelona
      {
        nome: "UEFA Champions League",
        anos: "2009, 2011, 2015",
        clube: "Barcelona",
      },
      {
        nome: "Campeonato Espanhol",
        anos: "2009, 2010, 2011, 2013, 2015, 2016, 2018, 2019, 2023",
        clube: "Barcelona",
      },
      {
        nome: "Mundial de Clubes",
        anos: "2009, 2011, 2015",
        clube: "Barcelona",
      },

      // Inter Miami
      {
        nome: "Leagues Cup",
        anos: "2023",
        clube: "Inter Miami CF",
      },
    ],
    tags: ["Busquets", "SB5", "Maestro"],
    ultima_atualizacao: "27/10/25",
  },

  // Sergio Ramos
  {
    nome: "Sergio Ramos",
    background: "diamond",
    descricao:
      "Zagueiro central lendário, conhecido por sua liderança feroz, força física, habilidade de marcar gols cruciais em momentos decisivos (especialmente em finais), e por ser um dos defensores mais condecorados da história. Ramos foi o capitão do Real Madrid e da Seleção Espanhola nas suas eras mais vitoriosas.",
    pagina: "https://www.instagram.com/sergioramos/",
    nacionalidade: "Espanha",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/25/2025/06/13/sergio-ramos-comemora-gol-marcado-pelo-monterrey-do-mexico-1749843099255_v2_450x450.jpg",
    numero: "4",
    posicao: "Zagueiro/Lateral-direito",
    dataNascimento: "30/03/1986",
    status: "Ativo",
    curiosidades:
      "Ramos é o jogador europeu com o maior número de convocações pela Seleção Nacional (180 jogos pela Espanha). Ele marcou o famoso gol de cabeça aos '92:48' na final da Champions de 2014, que levou o Real Madrid ao empate e à conquista da 'Décima'.",
    clubes: [
      createClub(
        "Real Madrid",
        { inicio: "2005", fim: "2021" },
        { jogos: 671, gols: 101, assistencias: 40 }
      ),
      createClub(
        "Paris Saint-Germain",
        { inicio: "2021", fim: "2023" },
        { jogos: 58, gols: 6, assistencias: 1 }
      ),
      createClub(
        "Sevilla",
        { inicio: "2023", fim: "2025" },
        { jogos: 60, gols: 10, assistencias: 2 }
      ),
      createClub(
        "Monterrey",
        { inicio: "2025", fim: "Presente" },
        { jogos: 20, gols: 3, assistencias: 1 }
      ),
    ],
    selecao: {
      nome: "Espanha",
      periodo: { inicio: "2005", fim: "2021" },
      estatisticas: { jogos: 180, gols: 23, assistencias: 8 },
    },
    titulos: [
      // Seleção Espanhola
      {
        nome: "Copa do Mundo",
        anos: "2010",
        clube: "Espanha",
        logoVariavel: true,
      },
      {
        nome: "Eurocopa",
        anos: "2008",
        clube: "Espanha",
        logoVariavel: true,
      },
      {
        nome: "Eurocopa",
        anos: "2012",
        clube: "Espanha",
        logoVariavel: true,
      },

      // Real Madrid
      {
        nome: "UEFA Champions League",
        anos: "2014, 2016, 2017, 2018",
        clube: "Real Madrid",
      },
      {
        nome: "Campeonato Espanhol",
        anos: "2007, 2008, 2012, 2017, 2020",
        clube: "Real Madrid",
      },
      {
        nome: "Mundial de Clubes",
        anos: "2014, 2016, 2017, 2018",
        clube: "Real Madrid",
      },

      // Paris Saint-Germain
      {
        nome: "Campeonato Francês",
        anos: "2022, 2023",
        clube: "Paris Saint-Germain",
      },
    ],
    tags: ["Sergio Ramos", "SR4"],
    ultima_atualizacao: "27/10/25",
  },

  // Thiago Alcântara
  {
    nome: "Thiago Alcântara",
    background: "default",
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
    background: "diamond",
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
    background: "diamond",
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

  // Achraf Hakimi
  {
    nome: "Achraf Hakimi",
    background: "default",
    descricao:
      "Lateral-direito marroquino de elite, amplamente considerado um dos melhores do mundo em sua posição. É conhecido por sua velocidade estonteante, excelência ofensiva e por ter sido peça fundamental em times campeões na Itália (Inter de Milão) e na França (PSG), além de ter liderado Marrocos à histórica semifinal da Copa do Mundo de 2022.",
    pagina: "https://www.instagram.com/achrafhakimi/",
    nacionalidade: "Marrocos",
    imagem:
      "https://image-service.onefootball.com/transform?w=280&h=210&dpr=2&image=https%3A%2F%2Fcdn.foot-africa.com%2F20250701%2F18eae584dd0a3b3f2d6548bc6b2b0a7bc901ca233053cfd58c054c96e75b050d.jpg",
    numero: "2",
    posicao: "Lateral-Direito",
    dataNascimento: "04/11/1998",
    status: "Ativo",
    clubes: [
      createClub(
        "Real Madrid Castilla",
        { inicio: "2016", fim: "2017" },
        { jogos: 28, gols: 1, assistencias: 0 }
      ),
      createClub(
        "Real Madrid",
        { inicio: "2017", fim: "2020" },
        { jogos: 17, gols: 2, assistencias: 1 }
      ),
      createClub(
        "Borussia Dortmund",
        { inicio: "2018", fim: "2020" },
        { jogos: 73, gols: 12, assistencias: 17 }
      ),
      createClub(
        "Inter de Milão",
        { inicio: "2020", fim: "2021" },
        { jogos: 45, gols: 7, assistencias: 10 }
      ),
      createClub(
        "Paris Saint-Germain",
        { inicio: "2021", fim: "Atual" },
        { jogos: 182, gols: 25, assistencias: 33 }
      ),
    ],
    selecao: {
      nome: "Marrocos",
      periodo: { inicio: "2016", fim: "Atual" },
      estatisticas: { jogos: 86, gols: 11, assistencias: 10 },
    },
    titulos: [
      // Real Madrid
      { nome: "UEFA Champions League", anos: "2018", clube: "Real Madrid" },
      {
        nome: "Mundial de Clubes",
        anos: "2017",
        clube: "Real Madrid",
      },
      { nome: "Supercopa da UEFA", anos: "2017", clube: "Real Madrid" },
      { nome: "Supercopa da Espanha", anos: "2017", clube: "Real Madrid" },
      // Borussia Dortmund
      {
        nome: "Supercopa da Alemanha",
        anos: "2019",
        clube: "Borussia Dortmund",
      },
      // Internazionale
      { nome: "Campeonato Italiano", anos: "2021", clube: "Inter de Milão" },
      // Paris Saint-Germain
      {
        nome: "Campeonato Francês",
        anos: "2022, 2023, 2024, 2025",
        clube: "Paris Saint-Germain",
      },
      {
        nome: "UEFA Champions League",
        anos: "2025",
        clube: "Paris Saint-Germain",
      },
      {
        nome: "Copa da França",
        anos: "2024, 2025",
        clube: "Paris Saint-Germain",
      },
      { nome: "Supercopa da UEFA", anos: "2025", clube: "Paris Saint-Germain" },
      {
        nome: "Supercopa da França",
        anos: "2022, 2023, 2024",
        clube: "Paris Saint-Germain",
      },
      // Seleção de Marrocos
      {
        nome: "3º Lugar nas Olimpíadas (sub-23)",
        anos: "2024",
        clube: "Marrocos",
      },
      // Prêmios Individuais Notáveis
      {
        nome: "Futebolista Marroquino do Ano",
        logo: "individual",
        anos: "2021, 2022",
        categoria: "individual",
      },
    ],
    tags: [
      "lateral-direito",
      "marrocos",
      "psg",
      "inter",
      "Paris Saint-Germain",
    ],
  },

  // Adrien Rabiot
  {
    nome: "Adrien Rabiot",
    background: "default",
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
    background: "diamond",
    descricao:
      "Atacante/Meia-atacante versátil, conhecido por sua inteligência tática, visão de jogo e precisão nos passes e finalizações. Griezmann é o maior artilheiro da história do Atlético de Madrid e peça fundamental na Seleção Francesa, sendo campeão da Copa do Mundo em 2018.",
    pagina: "https://www.instagram.com/antogriezmann/",
    nacionalidade: "França",
    imagem:
      "https://www.football-espana.net/wp-content/uploads/2024/10/atletico-de-madrid-v-cd-leganes-la-liga-ea-sports.jpg",
    numero: "7",
    posicao: "Atacante/Meia-atacante",
    dataNascimento: "21/03/1991",
    status: "Ativo",
    curiosidades:
      "Griezmann é o recordista de gols do Atlético de Madrid. Foi Chuteira de Ouro e Melhor Jogador da Eurocopa de 2016 e Bota de Bronze da Copa do Mundo de 2018.",
    clubes: [
      createClub(
        "Real Sociedad",
        { inicio: "2009", fim: "2014" },
        { jogos: 202, gols: 52, assistencias: 18 }
      ),
      createClub(
        "Atlético de Madrid",
        { inicio: "2014", fim: "2019" },
        { jogos: 257, gols: 133, assistencias: 50 }
      ),
      createClub(
        "Barcelona",
        { inicio: "2019", fim: "2021" },
        { jogos: 102, gols: 35, assistencias: 17 }
      ),
      createClub(
        "Atlético de Madrid",
        { inicio: "2021", fim: "Presente" },
        { jogos: 163, gols: 52, assistencias: 25 }
      ),
    ],
    selecao: {
      nome: "França",
      periodo: { inicio: "2014", fim: "Presente" },
      estatisticas: { jogos: 145, gols: 48, assistencias: 35 },
    },
    titulos: [
      // Seleção Francesa
      {
        nome: "Copa do Mundo",
        anos: "2018",
        clube: "França",
        logoVariavel: true,
      },
      {
        nome: "UEFA Nations League",
        anos: "2021",
        clube: "França",
      },

      // Atlético de Madrid
      {
        nome: "UEFA Europa League",
        anos: "2018",
        clube: "Atlético de Madrid",
      },
      {
        nome: "Supercopa da UEFA",
        anos: "2018",
        clube: "Atlético de Madrid",
      },
      {
        nome: "Supercopa da Espanha",
        anos: "2014",
        clube: "Atlético de Madrid",
      },

      // Barcelona
      {
        nome: "Copa do Rei",
        anos: "2021",
        clube: "Barcelona",
      },
    ],
    tags: ["Griezmann", "AG7"],
    ultima_atualizacao: "27/10/25",
  },

  // Bradley Barcola
  {
    nome: "Bradley Barcola",
    background: "promise",
    descricao:
      "Jovem atacante francês conhecido pela sua velocidade explosiva, excelente drible e capacidade de atuação como ponta. Formado no Lyon, consolidou-se rapidamente como uma estrela no Paris Saint-Germain, sendo parte crucial do ataque e já tendo conquistado a Liga dos Campeões da UEFA em sua segunda temporada profissional.",
    pagina: "https://www.instagram.com/bradley_dls/",
    nacionalidade: "França",
    imagem:
      "https://image-service.onefootball.com/transform?w=280&h=210&dpr=2&image=https%3A%2F%2Ficdn.psgtalk.com%2Fwp-content%2Fuploads%2F2025%2F06%2Fbradley-barcola-paris-saint-germain-v-liverpool-fc-uefa-champions-league-2025.jpg",
    numero: "29",
    posicao: "Atacante - Ponta Esquerda",
    dataNascimento: "02/09/2002",
    status: "Ativo",
    clubes: [
      createClub(
        "Lyon",
        { inicio: "2021", fim: "2023" },
        { jogos: 40, gols: 5, assistencias: 10 }
      ),
      createClub(
        "Paris Saint-Germain",
        { inicio: "2023", fim: "Atual" },
        { jogos: 64, gols: 21, assistencias: 13 }
      ),
    ],
    selecao: {
      nome: "França",
      periodo: { inicio: "2024", fim: "Atual" },
      estatisticas: { jogos: 16, gols: 3, assistencias: 2 },
    },
    titulos: [
      // PSG (Até Set/2025)
      {
        nome: "UEFA Champions League",
        anos: "2025",
        clube: "Paris Saint-Germain",
      },
      {
        nome: "Campeonato Francês",
        anos: "2024, 2025",
        clube: "Paris Saint-Germain",
      },
      {
        nome: "Copa da França",
        anos: "2024, 2025",
        clube: "Paris Saint-Germain",
      },
      { nome: "Supercopa da UEFA", anos: "2025", clube: "Paris Saint-Germain" },
      {
        nome: "Supercopa da França",
        anos: "2023, 2024",
        clube: "Paris Saint-Germain",
      },
    ],
    tags: [
      "atacante",
      "ponta",
      "frança",
      "psg",
      "lyon",
      "jovem talento",
      "Paris Saint-Germain",
    ],
  },

  // Désiré Doué
  {
    nome: "Désiré Doué",
    background: "promise",
    descricao:
      "Jovem meio-campista/ponta francês, conhecido por sua técnica e velocidade. Considerado uma das maiores promessas de sua geração, já possui títulos importantes e reconhecimento individual na curta carreira.",
    pagina: "https://www.instagram.com/desire.doue/",
    nacionalidade: "França",
    imagem:
      "https://jpimg.com.br/uploads/2025/06/f52df2cc02633afacf013ccc20e58d21a8502d52-675x450.jpg",
    numero: "14",
    posicao: "Meio-campista Atacante, Ponta-Direita",
    dataNascimento: "03/06/2005",
    status: "Ativo",
    clubes: [
      createClub(
        "Rennes II",
        { inicio: "2021", fim: "2023" },
        { jogos: 11, gols: 1, assistencias: 1 }
      ),
      createClub(
        "Rennes",
        { inicio: "2022", fim: "2024" },
        { jogos: 76, gols: 8, assistencias: 8 }
      ),
      createClub(
        "Paris Saint-Germain",
        { inicio: "2024", fim: "Atual" },
        { jogos: 65, gols: 16, assistencias: 17 }
      ),
    ],
    selecao: {
      nome: "França",
      periodo: { inicio: "2025", fim: "Atual" },
      estatisticas: { jogos: 4, gols: 0, assistencias: 0 },
    },
    titulos: [
      // PSG
      {
        nome: "Campeonato Francês",
        anos: "2024–25",
        clube: "Paris Saint-Germain",
      },
      {
        nome: "UEFA Champions League",
        anos: "2024–25",
        clube: "Paris Saint-Germain",
      },
      { nome: "Copa da França", anos: "2024–25", clube: "Paris Saint-Germain" },
      {
        nome: "Supercopa da França",
        anos: "2024",
        clube: "Paris Saint-Germain",
      },
      { nome: "Supercopa da UEFA", anos: "2025", clube: "Paris Saint-Germain" },
      // Seleção Francesa
      {
        nome: "UEFA European Under-17 Championship",
        anos: "2022",
        clube: "França",
        logoVariavel: true,
      },
      {
        nome: "Jogos Olímpicos (Prata)",
        anos: "2024",
        clube: "França",
        logoVariavel: true,
      },
      // Prêmios Individuais Notáveis
      {
        nome: "Melhor Jovem da Temporada da Ligue 1",
        anos: "2024–25",
        categoria: "individual",
      },
      {
        nome: "Melhor Jovem da Temporada da UEFA Champions League",
        anos: "2024–25",
        categoria: "individual",
      },
      {
        nome: "Melhor Jogador Jovem do Mundial de Clubes FIFA",
        anos: "2025",
        categoria: "individual",
      },
    ],
    tags: [
      "promessa",
      "meio-campo",
      "psg",
      "rennes",
      "Desire Doue",
      "Paris Saint-Germain",
    ],
  },

  // Franck Ribéry (Franck Henry Pierre Ribéry)
  {
    nome: "Franck Ribéry",
    background: "diamond",
    descricao:
      "Ex-ponta-esquerda francês, lendário no Bayern de Munique, conhecido por sua velocidade, dribles e parceria icônica com Arjen Robben ('Robbery'). Foi eleito o Melhor Jogador da Europa em 2013 e ficou em 3º lugar na Bola de Ouro.",
    pagina: "https://www.instagram.com/franckribery/",
    nacionalidade: "França",
    imagem:
      "https://s2-ge.glbimg.com/PJKpLL61QooyAWQe7vSIYLMuxnc=/0x0:2200x1475/984x0/smart/filters:strip_icc()/s.glbimg.com/es/ge/f/original/2018/04/23/2018-03-31t164424z_40588371_rc1e2ec506b0_rtrmadp_3_soccer-germany-bay-dor.jpg",
    numero: "7",
    posicao: "Ponta Esquerda",
    dataNascimento: "07/04/1983",
    status: "Aposentado",
    clubes: [
      createClub(
        "Boulogne",
        { inicio: "2001", fim: "2002" },
        { jogos: 25, gols: 5, assistencias: 0 }
      ),
      createClub(
        "Olympique Alès",
        { inicio: "2002", fim: "2003" },
        { jogos: 19, gols: 1, assistencias: 0 }
      ),
      createClub(
        "Brest",
        { inicio: "2003", fim: "2004" },
        { jogos: 35, gols: 3, assistencias: 0 }
      ),
      createClub(
        "Metz",
        { inicio: "2004", fim: "2005" },
        { jogos: 21, gols: 2, assistencias: 0 }
      ),
      createClub(
        "Galatasaray",
        { inicio: "2005", fim: "2005" },
        { jogos: 14, gols: 1, assistencias: 0 }
      ),
      createClub(
        "Olympique de Marseille",
        { inicio: "2005", fim: "2007" },
        { jogos: 88, gols: 14, assistencias: 20 }
      ),
      createClub(
        "Bayern de Munique",
        { inicio: "2007", fim: "2019" },
        { jogos: 425, gols: 124, assistencias: 182 }
      ),
      createClub(
        "Fiorentina",
        { inicio: "2019", fim: "2021" },
        { jogos: 51, gols: 5, assistencias: 10 }
      ),
      createClub(
        "Salernitana",
        { inicio: "2021", fim: "2022" },
        { jogos: 25, gols: 1, assistencias: 3 }
      ),
    ],
    selecao: {
      nome: "França",
      periodo: { inicio: "2006", fim: "2014" },
      estatisticas: { jogos: 81, gols: 16, assistencias: 0 },
    },
    titulos: [
      // Bayern de Munique
      {
        nome: "Copa da Liga Alemã",
        anos: "2007",
        clube: "Bayern de Munique",
      },
      {
        nome: "Campeonato Alemão",
        anos: "2007, 2009, 2012, 2013, 2014, 2015, 2016, 2017 e 2018",
        clube: "Bayern de Munique",
      },
      {
        nome: "Copa da Alemanha",
        anos: "2007, 2009, 2012, 2013, 2015 e 2018",
        clube: "Bayern de Munique",
      },
      {
        nome: "Supercopa da Alemanha",
        anos: "2007, 2009, 2012, 2013, 2015 e 2018",
        clube: "Bayern de Munique",
      },
      {
        nome: "UEFA Champions League",
        anos: "2012",
        clube: "Bayern de Munique",
      },
      { nome: "Mundial de Clubes", anos: "2013", clube: "Bayern de Munique" },
      { nome: "Supercopa da UEFA", anos: "2013", clube: "Bayern de Munique" },

      // Galatasaray
      { nome: "Copa da Turquia", anos: "2004–05", clube: "Galatasaray" },

      // Individuais
      {
        nome: "Jogador Francês do Ano",
        anos: "2007, 2008, 2013",
        categoria: "individual",
      },
      {
        nome: "Melhor Jogador da Bundesliga",
        logo: "Campeonato Alemão",
        anos: "2007",
        categoria: "individual",
      },
      {
        nome: "Seleção da Bundesliga pela revista Kicker",
        logo: "Kicker",
        anos: "2007, 2008, 2011, 2012 e 2013",
        categoria: "individual",
      },
      {
        nome: "Equipe do Ano da UEFA",
        logo: "UEFA",
        anos: "2008, 2013",
        categoria: "individual",
      },
      {
        nome: "Melhor Jogador da Europa",
        logo: "UEFA",
        anos: "2012",
        categoria: "individual",
      },
      {
        nome: "Melhor Jogador do Mundial de Clubes",
        logo: "Mundial de Clubes",
        anos: "2013",
        categoria: "individual",
      },
      {
        nome: "Equipe do ano do jornal L'Équipe",
        logo: "L'Équipe",
        anos: "2013",
        categoria: "individual",
      },
      {
        nome: "FIFPro World XI",
        logo: "FIFPro",
        anos: "2013",
        categoria: "individual",
      },
      {
        nome: "3º Melhor Jogador do Mundo",
        logo: "Bola de Ouro",
        anos: "2013",
        categoria: "individual",
      },
      {
        nome: "ALL TIME FRANCE MEN'S DREAM TEAM (Time C)",
        logo: "IFFHS",
        anos: "2021",
        categoria: "individual",
      },
    ],
    tags: ["Franck Ribéry", "Robbery", "Franck Henry Pierre Ribéry"],
    ultima_atualizacao: "29/10/25",
  },

  // Hugo Lloris
  {
    nome: "Hugo Lloris",
    background: "plate",
    descricao:
      "Goleiro francês, lendário capitão da Seleção Francesa por mais de uma década. Lloris é conhecido por sua agilidade e reflexos espetaculares. Vencedor da Copa do Mundo de 2018, é um dos jogadores com mais partidas na história do Tottenham Hotspur, e atualmente atua nos Estados Unidos.",
    pagina: "https://www.instagram.com/hugolloris/",
    nacionalidade: "França",
    imagem:
      "https://frenchfootballweekly.com/wp-content/uploads/2025/03/Hugo-Lloris-the-disaster.jpg",
    numero: "1",
    posicao: "Goleiro",
    dataNascimento: "26/12/1986",
    status: "Ativo",
    curiosidades:
      "Lloris detém o recorde de mais partidas pela Seleção Francesa, com 145 jogos, e foi o capitão na campanha vitoriosa da Copa do Mundo de 2018.",
    clubes: [
      createClub(
        "Lyon",
        { inicio: "2008", fim: "2012" },
        { jogos: 201, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Tottenham Hotspur",
        { inicio: "2012", fim: "2023" },
        { jogos: 447, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Los Angeles FC",
        { inicio: "2024", fim: "Presente" },
        { jogos: 65, gols: 0, assistencias: 1 }
      ),
    ],
    selecao: {
      nome: "França",
      periodo: { inicio: "2008", fim: "2022" },
      estatisticas: { jogos: 145, gols: 0, assistencias: 0 },
    },
    titulos: [
      // Seleção Francesa
      {
        nome: "Copa do Mundo",
        anos: "2018",
        clube: "França",
        logoVariavel: true,
      },
      {
        nome: "UEFA Nations League",
        anos: "2021",
        clube: "França",
      },

      // Lyon
      {
        nome: "Copa da França",
        anos: "2012",
        clube: "Lyon",
      },
      // LAFC
      {
        nome: "MLS Cup",
        anos: "2024",
        clube: "Los Angeles FC",
      },
    ],
    tags: ["Hugo Lloris", "LAFC"],
    ultima_atualizacao: "27/10/25",
  },

  // Karim Benzema
  {
    nome: "Karim Benzema",
    background: "diamond",
    descricao:
      "Centroavante de classe mundial, conhecido por sua técnica refinada, visão de jogo e capacidade de atuar tanto como finalizador quanto como criador de jogadas. Benzema é o segundo maior artilheiro da história do Real Madrid e venceu a Bola de Ouro em 2022.",
    pagina: "https://www.instagram.com/karimbenzema/",
    nacionalidade: "França",
    imagem:
      "https://jpimg.com.br/uploads/2024/12/snapinsta.app_464055295_1191400095278692_5569361091680033287_n_1080-736x450.jpg",
    numero: "9",
    posicao: "Centroavante",
    dataNascimento: "19/12/1987",
    status: "Ativo",
    curiosidades:
      "Benzema foi o grande pilar do ataque do Real Madrid após a saída de Cristiano Ronaldo e se tornou o jogador mais velho a marcar um hat-trick na Champions League. É o segundo maior artilheiro da história do clube merengue.",
    clubes: [
      createClub(
        "Lyon",
        { inicio: "2004", fim: "2009" },
        { jogos: 148, gols: 66, assistencias: 27 }
      ),
      createClub(
        "Real Madrid",
        { inicio: "2009", fim: "2023" },
        { jogos: 648, gols: 354, assistencias: 165 }
      ),
      createClub(
        "Al-Ittihad",
        { inicio: "2023", fim: "Presente" },
        { jogos: 60, gols: 35, assistencias: 10 }
      ),
    ],
    selecao: {
      nome: "França",
      periodo: { inicio: "2007", fim: "2022" },
      estatisticas: { jogos: 97, gols: 37, assistencias: 20 },
    },
    titulos: [
      // Individuais
      {
        nome: "Bola de Ouro",
        anos: "2022",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Melhor Jogador da UEFA",
        logo: "UEFA",
        anos: "2022",
        clube: "Individual",
        categoria: "individual",
      },

      // Real Madrid
      {
        nome: "UEFA Champions League",
        anos: "2014, 2016, 2017, 2018, 2022",
        clube: "Real Madrid",
      },
      {
        nome: "Campeonato Espanhol",
        anos: "2012, 2017, 2020, 2022",
        clube: "Real Madrid",
      },
      {
        nome: "Mundial de Clubes",
        anos: "2014, 2016, 2017, 2018, 2022",
        clube: "Real Madrid",
      },
      // Lyon
      {
        nome: "Campeonato Francês",
        anos: "2005, 2006, 2007, 2008",
        clube: "Lyon",
      },
      // Al-Ittihad
      {
        nome: "Campeonato Saudita",
        anos: "2024",
        clube: "Al-Ittihad",
      },
    ],
    tags: ["Benzema", "KB9"],
    ultima_atualizacao: "27/10/25",
  },

  // Kingsley Coman
  {
    nome: "Kingsley Coman",
    background: "default",
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
    background: "diamond",
    descricao:
      "Atacante francês de elite, amplamente considerado um dos melhores jogadores da sua geração. Conhecido por sua velocidade explosiva, dribles incisivos e finalização letal. Ganhador da Copa do Mundo de 2018 com a França e recordista de gols do Paris Saint-Germain, transferiu-se para o Real Madrid em 2024, mantendo seu lugar no topo do futebol mundial.",
    pagina: "https://www.instagram.com/k.mbappe/",
    nacionalidade: "França",
    imagem:
      "https://assets-us-01.kc-usercontent.com/31dbcbc6-da4c-0033-328a-d7621d0fa726/32e193b3-b8e8-437a-a24a-651f0b22c15f/mbappe%20trophy%203.jpg?ver=28-06-2024?w=3840&q=75",
    numero: "10",
    posicao: "Atacante (Ponta Esquerda/Centroavante)",
    dataNascimento: "20/12/1998",
    status: "Ativo",
    clubes: [
      createClub(
        "Monaco",
        { inicio: "2015", fim: "2017" },
        { jogos: 60, gols: 27, assistencias: 13 }
      ),
      createClub(
        "Paris Saint-Germain",
        { inicio: "2017", fim: "2024" },
        { jogos: 308, gols: 256, assistencias: 97 }
      ),
      createClub(
        "Real Madrid",
        { inicio: "2024", fim: "Atual" },
        { jogos: 56, gols: 43, assistencias: 5 }
      ),
    ],
    selecao: {
      nome: "França",
      periodo: { inicio: "2017", fim: "Atual" },
      estatisticas: { jogos: 92, gols: 52, assistencias: 29 },
    },
    titulos: [
      // Seleção Nacional
      {
        nome: "Copa do Mundo",
        anos: "2018",
        clube: "França",
        logoVariavel: true,
      },
      { nome: "UEFA Nations League", anos: "2021", clube: "França" },
      {
        nome: "Campeonato Europeu Sub-19",
        anos: "2016",
        clube: "França",
      },
      // Clubes (PSG)
      {
        nome: "Campeonato Francês",
        anos: "2018, 2019, 2020, 2022, 2023, 2024",
        clube: "Paris Saint-Germain",
      },
      {
        nome: "Copa da França",
        anos: "2018, 2020, 2021, 2024",
        clube: "Paris Saint-Germain",
      },
      {
        nome: "Copa da Liga Francesa",
        anos: "2018, 2020",
        clube: "Paris Saint-Germain",
      },
      {
        nome: "Supercopa da França",
        anos: "2019, 2020, 2022, 2023",
        clube: "Paris Saint-Germain",
      },
      // Clubes (Monaco)
      { nome: "Campeonato Francês", anos: "2017", clube: "Monaco" },
      // Clubes (Real Madrid)
      { nome: "Supercopa da Espanha", anos: "2025", clube: "Real Madrid" },
    ],
    tags: ["atacante", "frança", "real madrid", "psg", "Paris Saint-Germain"],
  },

  // Michel Platini
  {
    nome: "Michel Platini",
    background: "gold",
    descricao:
      "Gênio do meio-campo e tricampeão consecutivo da Bola de Ouro (1983, 1984 e 1985). Foi o maestro da Seleção Francesa que conquistou a Eurocopa de 1984. Seu período na Juventus o consagrou como um dos maiores da história do futebol europeu.",
    pagina: "https://pt.wikipedia.org/wiki/Michel_Platini",
    nacionalidade: "França",
    imagem:
      "https://i.pinimg.com/564x/e2/b5/e6/e2b5e6dc32a7da44771bba520bfe199c.jpg",
    numero: "10",
    posicao: "Meio-campista (Meia-atacante)",
    dataNascimento: "21/06/1955",
    status: "Aposentado",
    ultima_atualizacao: "31/10/25",
    curiosidades:
      "Platini é um dos três jogadores (ao lado de Cruyff e Van Basten) a ganhar a Bola de Ouro por três vezes consecutivas. Ele detém o recorde de gols marcados em uma única edição da Eurocopa (9 gols em 1984).",
    clubes: [
      createClub(
        "AS Nancy-Lorraine",
        { inicio: "1972", fim: "1979" },
        { jogos: 234, gols: 137, assistencias: 20 }
      ),
      createClub(
        "AS Saint-Étienne",
        { inicio: "1979", fim: "1982" },
        { jogos: 145, gols: 82, assistencias: 10 }
      ),
      createClub(
        "Juventus",
        { inicio: "1982", fim: "1987" },
        { jogos: 258, gols: 125, assistencias: 40 }
      ),
    ],
    selecao: {
      nome: "França",
      periodo: { inicio: "1976", fim: "1987" },
      estatisticas: { jogos: 72, gols: 41, assistencias: 17 },
    },
    titulos: [
      // Individuais
      {
        nome: "Bola de Ouro",
        anos: "1983, 1984, 1985",
        categoria: "individual",
      },
      {
        nome: "Melhor Jogador do Mundo (World Soccer)",
        logo: "World Soccer",
        anos: "1984, 1985",
        categoria: "individual",
      },
      {
        nome: "Melhor Jogador da Eurocopa",
        logo: "Eurocopa",
        anos: "1984",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Artilheiro da Eurocopa",
        logo: "Eurocopa",
        anos: "1984",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Artilheiro do Campeonato Italiano",
        logo: "Campeonato Italiano",
        anos: "1983, 1984, 1985",
        categoria: "individual",
      },
      {
        nome: "Artilheiro da UEFA Champions League",
        logo: "UEFA Champions League",
        anos: "1985",
        categoria: "individual",
      },
      {
        nome: "Futebolista Francês do Ano",
        logo: "individual",
        anos: "1976, 1977",
        categoria: "individual",
      },
      {
        nome: "FIFA 100",
        anos: "2004",
        categoria: "individual",
      },

      // França
      {
        nome: "Eurocopa",
        anos: "1984",
        clube: "França",
        logoVariavel: true,
      },
      {
        nome: "Finalíssima",
        anos: "1985",
        clube: "França",
      },

      // Juventus
      {
        nome: "UEFA Champions League",
        anos: "1985",
        clube: "Juventus",
      },
      {
        nome: "Copa Intercontinental",
        anos: "1985",
        clube: "Juventus",
      },
      {
        nome: "Recopa Europeia",
        anos: "1984",
        clube: "Juventus",
      },
      {
        nome: "Supercopa da UEFA",
        anos: "1984",
        clube: "Juventus",
      },
      {
        nome: "Campeonato Italiano",
        anos: "1984, 1986",
        clube: "Juventus",
      },
      {
        nome: "Copa da Itália",
        anos: "1983",
        clube: "Juventus",
      },

      // Saint-Étienne
      {
        nome: "Campeonato Francês",
        anos: "1981",
        clube: "Saint-Étienne",
      },

      // AS Nancy-Lorraine
      {
        nome: "Copa da França",
        anos: "1978",
        clube: "AS Nancy-Lorraine",
      },
    ],
    tags: ["Platini", "Le Roi"],
    ultima_atualizacao: "31/10/25",
  },

  // N'Golo Kanté
  {
    nome: "N'Golo Kanté",
    background: "titanium",
    descricao:
      "Volante francês mundialmente aclamado por sua incansável capacidade de recuperação de bola, resistência física e humildade. Kanté foi peça central no título milagroso do Leicester City (2016) e subsequentemente liderou o meio-campo do Chelsea na conquista da Liga dos Campeões (2021) e da França na Copa do Mundo (2018).",
    pagina: "https://www.instagram.com/nglkante/",
    nacionalidade: "França",
    imagem:
      "https://external-preview.redd.it/romano-al-ittihad-stance-on-ngolo-kant%C3%A9-remains-very-clear-v0-O_QBn20zVfaUZkTZJidI9x6M27nR-aB3PIgxX3mxXfg.jpg?auto=webp&s=68f20b193ee5148fa645d9045092ca20b67e9c21",
    numero: "7",
    posicao: "Volante/Meio-campista Defensivo",
    dataNascimento: "29/03/1991",
    status: "Ativo",
    curiosidades:
      "Kanté é um dos poucos jogadores a vencer a Premier League em temporadas consecutivas com clubes diferentes (Leicester e Chelsea). Seu prêmio de Jogador do Ano da PFA em 2017 foi amplamente celebrado por sua personalidade e estilo de jogo discreto, mas extremamente eficaz.",
    clubes: [
      createClub(
        "Leicester City",
        { inicio: "2015", fim: "2016" },
        { jogos: 40, gols: 1, assistencias: 4 }
      ),
      createClub(
        "Chelsea",
        { inicio: "2016", fim: "2023" },
        { jogos: 269, gols: 13, assistencias: 15 }
      ),
      createClub(
        "Al-Ittihad",
        { inicio: "2023", fim: "Presente" },
        { jogos: 60, gols: 3, assistencias: 5 }
      ),
    ],
    selecao: {
      nome: "França",
      periodo: { inicio: "2016", fim: "Presente" },
      estatisticas: { jogos: 75, gols: 2, assistencias: 2 },
    },
    titulos: [
      // Seleção Francesa
      {
        nome: "Copa do Mundo",
        anos: "2018",
        clube: "França",
        logoVariavel: true,
      },
      {
        nome: "UEFA Nations League",
        anos: "2021",
        clube: "França",
      },

      // Chelsea
      {
        nome: "UEFA Champions League",
        anos: "2021",
        clube: "Chelsea",
      },
      {
        nome: "Campeonato Inglês",
        anos: "2017",
        clube: "Chelsea",
      },
      {
        nome: "Mundial de Clubes",
        anos: "2022",
        clube: "Chelsea",
      },

      // Leicester City
      {
        nome: "Campeonato Inglês",
        anos: "2016",
        clube: "Leicester City",
      },

      // Al-Ittihad
      {
        nome: "Campeonato Saudita",
        anos: "2024",
        clube: "Al-Ittihad",
      },

      // Individuais
      {
        nome: "Jogador do Ano da PFA",
        logo: "Campeonato Inglês",
        anos: "2017",
        clube: "Individual",
        categoria: "individual",
      },
    ],
    tags: ["Kanté", "NGK7"],
    ultima_atualizacao: "27/10/25",
  },

  // Ousmane Dembélé
  {
    nome: "Ousmane Dembélé",
    background: "titanium",
    pagina: "https://www.instagram.com/o.dembele7/",
    imagem:
      "https://www.infomoney.com.br/wp-content/uploads/2025/09/2025-09-22T205559Z_297480920_UP1EL9M1M598F_RTRMADP_3_SOCCER-BALLON.jpg?fit=1280%2C868&quality=50&strip=all",
    descricao:
      "Ponta-direita francês conhecido por sua velocidade vertiginosa, dribles desequilibrantes, capacidade de jogar com ambos os pés e criatividade no ataque. Dembélé é um jogador que pode mudar o rumo de uma partida com sua imprevisibilidade. É campeão da Copa do Mundo (2018) e atualmente é uma das principais estrelas do Paris Saint-Germain.",
    numero: "10",
    posicao: "Ponta-direita",
    nacionalidade: "França",
    dataNascimento: "15/05/1997",
    status: "Ativo",
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
        { jogos: 75, gols: 10, assistencias: 25 }
      ),
    ],
    selecao: {
      nome: "França",
      periodo: { inicio: "2016", fim: "Presente" },
      estatisticas: { jogos: 55, gols: 15, assistencias: 8 },
    },
    titulos: [
      // Borussia Dortmund
      {
        nome: "Copa da Alemanha",
        anos: "2016-17",
        clube: "Borussia Dortmund",
      },
      // Barcelona
      {
        nome: "Campeonato Espanhol",
        anos: "2017-18, 2018-19, 2022-23",
        clube: "Barcelona",
      },
      {
        nome: "Copa do Rei",
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
        nome: "Campeonato Francês",
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
      // Individuais
      {
        nome: "Melhor Jogador Jovem da Ligue 1",
        logo: "Campeonato Francês",
        anos: "2015-16",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Revelação da Temporada da Bundesliga",
        logo: "Campeonato Alemão",
        anos: "2016-17",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Bola de Ouro",
        logo: "Bola de Ouro",
        anos: "2025",
        clube: "Individual",
        categoria: "individual",
      },
    ],
    tags: ["Dembélé", "Dembele", "Ousmane Dembélé", "PSG", "OD10"],
    ultima_atualizacao: "27/10/25",
  },

  // Paul Pogba
  {
    nome: "Paul Pogba",
    background: "default",
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
    background: "default",
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
    tags: ["Paris Saint-Germain", "PSG"],
  },

  // Raphaël Varane
  {
    nome: "Raphaël Varane",
    background: "default",
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
    background: "diamond",
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
      "Meia-atacante francês lendário, reverenciado por sua elegância, controle de bola sublime, visão de jogo e técnica inigualável. Zidane foi o maestro que levou a França aos títulos da Copa do Mundo (1998) e da Eurocopa (2000). Vencedor da Bola de Ouro e autor de um dos gols mais icônicos da história da Champions League pelo Real Madrid.",
    pagina: "https://www.instagram.com/zidane/",
    nacionalidade: "França",
    imagem:
      "https://www.shutterstock.com/editorial/image-editorial/O5D5I40fNdDdA54bMDE4Ng==/zinedine-zidane-france-during-group-g-preliminary-440nw-8189014ba.jpg",
    numero: "10",
    posicao: "Meia-atacante",
    dataNascimento: "23/06/1972",
    status: "Aposentado",
    curiosidades:
      "Zidane é um dos raros jogadores a vencer o Ballon d'Or e a Copa do Mundo. Seu voleio na final da Liga dos Campeões de 2002 contra o Bayer Leverkusen é frequentemente citado como um dos maiores gols da competição. No Real Madrid, ele usou a camisa 5, incomum para um meia, por respeito ao seu antecessor na 10.",
    clubes: [
      createClub(
        "Bordeaux",
        { inicio: "1992", fim: "1996" },
        { jogos: 177, gols: 39, assistencias: 35 }
      ),
      createClub(
        "Juventus",
        { inicio: "1996", fim: "2001" },
        { jogos: 209, gols: 31, assistencias: 40 }
      ),
      createClub(
        "Real Madrid",
        { inicio: "2001", fim: "2006" },
        { jogos: 227, gols: 49, assistencias: 68 }
      ),
    ],
    selecao: {
      nome: "França",
      periodo: { inicio: "1994", fim: "2006" },
      estatisticas: { jogos: 108, gols: 31, assistencias: 25 },
    },
    titulos: [
      // Individuais
      {
        nome: "Bola de Ouro",
        anos: "1998",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Melhor Jogador do Mundo",
        logo: "FIFA",
        anos: "1998, 2000, 2003",
        clube: "Individual",
        categoria: "individual",
      },

      // Seleção Francesa
      {
        nome: "Copa do Mundo",
        anos: "1998",
        clube: "França",
        logoVariavel: true,
      },
      {
        nome: "Eurocopa",
        anos: "2000",
        clube: "França",
        logoVariavel: true,
      },

      // Real Madrid
      {
        nome: "UEFA Champions League",
        anos: "2002",
        clube: "Real Madrid",
      },
      {
        nome: "Campeonato Espanhol",
        anos: "2003",
        clube: "Real Madrid",
      },
      {
        nome: "Copa Intercontinental",
        anos: "2002",
        clube: "Real Madrid",
      },

      // Juventus
      {
        nome: "Campeonato Italiano",
        anos: "1997, 1998",
        clube: "Juventus",
      },
    ],
    tags: ["Zidane", "Real Madrid", "Juventus", "França", "Z10", "Elegância"],
  },

  // GEÓRGIA -------------------------------------------------------------------------------------------------------------------------------------------------------

  // Khvicha Kvaratskhelia
  {
    nome: "Khvicha Kvaratskhelia",
    background: "default",
    descricao:
      "Ponta-esquerda georgiano de classe mundial, conhecido por sua incrível habilidade de drible, agilidade e visão de jogo. Ganhou o apelido de 'Kvaradona' em Napoli, onde foi peça chave para encerrar um jejum de 33 anos na Serie A e rapidamente se transferiu para o PSG, vencendo a Champions League.",
    pagina: "https://www.instagram.com/kvara7/",
    nacionalidade: "Geórgia",
    imagem:
      "https://images2.minutemediacdn.com/image/upload/c_crop,x_0,y_0,w_4000,h_2250/c_fill,w_1440,ar_1440:810,f_auto,q_auto,g_auto/images/GettyImages/mmsport/503/01jkjxahwrpgxv7p4n32.jpg",
    numero: "7",
    posicao: "Ponta-esquerda",
    dataNascimento: "12/02/2001",
    status: "Ativo",
    clubes: [
      createClub(
        "Dinamo Tbilisi",
        { inicio: "2017", fim: "2018" },
        { jogos: 5, gols: 1, assistencias: 1 }
      ),
      createClub(
        "Rustavi",
        { inicio: "2018", fim: "2019" },
        { jogos: 18, gols: 3, assistencias: 3 }
      ),
      createClub(
        "Lokomotiv Moscou",
        { inicio: "2019", fim: "2019" },
        { jogos: 10, gols: 1, assistencias: 0 }
      ),
      createClub(
        "Rubin Kazan",
        { inicio: "2019", fim: "2022" },
        { jogos: 73, gols: 9, assistencias: 10 }
      ),
      createClub(
        "Dinamo Batumi",
        { inicio: "2022", fim: "2022" },
        { jogos: 11, gols: 8, assistencias: 2 }
      ),
      createClub(
        "Napoli",
        { inicio: "2022", fim: "2025" },
        { jogos: 107, gols: 30, assistencias: 24 }
      ),
      createClub(
        "Paris Saint-Germain",
        { inicio: "2025", fim: "Atual" },
        { jogos: 39, gols: 9, assistencias: 7 }
      ),
    ],
    selecao: {
      nome: "Geórgia",
      periodo: { inicio: "2019", fim: "Atual" },
      estatisticas: { jogos: 30, gols: 15, assistencias: 6 },
    },
    titulos: [
      // Lokomotiv Moscou
      { nome: "Copa da Rússia", anos: "2019", clube: "Lokomotiv Moscou" },
      // Napoli
      { nome: "Campeonato Italiano", anos: "2023, 2025", clube: "Napoli" },
      // Paris Saint-Germain
      {
        nome: "Campeonato Francês",
        anos: "2025",
        clube: "Paris Saint-Germain",
      },
      {
        nome: "UEFA Champions League",
        anos: "2025",
        clube: "Paris Saint-Germain",
      },
      { nome: "Copa da França", anos: "2025", clube: "Paris Saint-Germain" },
      { nome: "Supercopa da UEFA", anos: "2025", clube: "Paris Saint-Germain" },
      // Prêmios Individuais Notáveis
      {
        nome: "MVP da Serie A",
        anos: "2022-23",
        categoria: "individual",
        logo: "Campeonato Italiano",
      },
      {
        nome: "Jovem do Ano da UEFA Champions League",
        anos: "2022-23",
        categoria: "individual",
        logo: "UEFA Champions League",
      },
      {
        nome: "Futebolista Georgiano do Ano",
        anos: "2020, 2022, 2023",
        categoria: "individual",
      },
    ],
    tags: [
      "craque",
      "ponta-esquerda",
      "drible",
      "geórgia",
      "napoli",
      "psg",
      "Paris Saint-Germain",
    ],
  },

  // HOLANDA -------------------------------------------------------------------------------------------------------------------------------------------------------

  // Clarence Seedorf
  {
    nome: "Clarence Seedorf",
    background: "diamond",
    descricao:
      "Lenda holandesa e único jogador a vencer a UEFA Champions League por três clubes diferentes (Ajax, Real Madrid e AC Milan, totalizando 4 títulos). Conhecido por sua inteligência tática, força física e chute potente de média distância. Encerrou sua vitoriosa carreira no Botafogo.",
    pagina: "https://www.instagram.com/clarenceseedorf/",
    nacionalidade: "Holanda",
    imagem:
      "https://e0.365dm.com/10/02/1600x900/Clarence-Seedorf-AC-Milan-Manchester-United-C_2420746.jpg?20100216234811",
    numero: "10",
    posicao: "Meio-Campista",
    dataNascimento: "01/04/1976",
    status: "Aposentado",
    clubes: [
      createClub(
        "Ajax",
        { inicio: "1992", fim: "1995" },
        { jogos: 90, gols: 11, assistencias: 0 }
      ),
      createClub(
        "Sampdoria",
        { inicio: "1995", fim: "1996" },
        { jogos: 34, gols: 4, assistencias: 0 }
      ),
      createClub(
        "Real Madrid",
        { inicio: "1996", fim: "1999" },
        { jogos: 159, gols: 20, assistencias: 0 }
      ),
      createClub(
        "Inter de Milão",
        { inicio: "1999", fim: "2002" },
        { jogos: 93, gols: 14, assistencias: 0 }
      ),
      createClub(
        "AC Milan",
        { inicio: "2002", fim: "2012" },
        { jogos: 432, gols: 62, assistencias: 0 }
      ),
      createClub(
        "Botafogo",
        { inicio: "2012", fim: "2014" },
        { jogos: 81, gols: 24, assistencias: 0 }
      ),
    ],
    selecao: {
      nome: "Holanda",
      periodo: { inicio: "1994", fim: "2008" },
      estatisticas: { jogos: 87, gols: 11, assistencias: 0 },
    },
    titulos: [
      // Ajax
      {
        nome: "Copa da Holanda",
        anos: "1993",
        clube: "Ajax",
      },
      {
        nome: "Supercopa da Holanda",
        anos: "1993, 1994",
        clube: "Ajax",
      },
      {
        nome: "Campeonato Holandês",
        anos: "1993, 1994",
        clube: "Ajax",
      },
      {
        nome: "UEFA Champions League",
        anos: "1994",
        clube: "Ajax",
      },

      // Real Madrid
      {
        nome: "Campeonato Espanhol",
        anos: "1996–97",
        clube: "Real Madrid",
      },
      {
        nome: "Supercopa da Espanha",
        anos: "1997",
        clube: "Real Madrid",
      },
      {
        nome: "UEFA Champions League",
        anos: "1997",
        clube: "Real Madrid",
      },
      {
        nome: "Copa Intercontinental",
        anos: "1998",
        clube: "Real Madrid",
      },

      // AC Milan
      {
        nome: "Copa da Itália",
        anos: "2003",
        clube: "AC Milan",
      },
      {
        nome: "UEFA Champions League",
        anos: "2003, 2007",
        clube: "AC Milan",
      },
      {
        nome: "Supercopa da UEFA",
        anos: "2003, 2007",
        clube: "AC Milan",
      },
      {
        nome: "Campeonato Italiano",
        anos: "2003–04, 2010–11",
        clube: "AC Milan",
      },
      {
        nome: "Supercopa da Itália",
        anos: "2004, 2011",
        clube: "AC Milan",
      },
      {
        nome: "Mundial de Clubes",
        anos: "2007",
        clube: "AC Milan",
      },

      // Botafogo
      {
        nome: "Taça Guanabara",
        anos: "2013",
        clube: "Botafogo",
      },
      {
        nome: "Taça Rio",
        anos: "2013",
        clube: "Botafogo",
      },
      {
        nome: "Campeonato Carioca",
        anos: "2013",
        clube: "Botafogo",
      },

      // Prêmios Individuais
      {
        nome: "Melhor meia-direita da Eredivisie",
        logo: "Campeonato Holandês",
        anos: "1993, 1994",
        categoria: "individual",
      },
      {
        nome: "Bola de Ouro da Eredivisie",
        logo: "Campeonato Holandês",
        anos: "1993, 1994",
        categoria: "individual",
      },
      {
        nome: "Equipe da Temporada da ESM",
        logo: "ESM",
        anos: "1997",
        categoria: "individual",
      },
      {
        nome: "Melhor meio-campista da Liga dos Campeões da UEFA",
        logo: "UEFA Champions League",
        anos: "2003, 2007",
        categoria: "individual",
      },
      {
        nome: "Melhor meia-direita da Serie A",
        logo: "Campeonato Italiano",
        anos: "2004",
        categoria: "individual",
      },
      {
        nome: "Bola de Ouro da Serie A",
        logo: "Campeonato Italiano",
        anos: "2004",
        categoria: "individual",
      },
      {
        nome: "Melhor Meio-campista da UEFA",
        logo: "UEFA",
        anos: "2007",
        categoria: "individual",
      },
      {
        nome: "Bola de Prata do Mundial de Clubes",
        logo: "Mundial de Clubes",
        anos: "2007",
        categoria: "individual",
      },
      {
        nome: "Equipe do Ano da UEFA",
        logo: "UEFA",
        anos: "2002, 2007",
        categoria: "individual",
      },
      {
        nome: "FIFA 100",
        anos: "2004",
        categoria: "individual",
      },
      {
        nome: "Equipe do Século do Real Madrid",
        anos: "2009",
        categoria: "individual",
      },
      {
        nome: "Equipe dos Sonhos da Serie A pelo La Gazzetta dello Sport",
        logo: "La Gazzetta dello Sport",
        anos: "2011",
        categoria: "individual",
      },
      {
        nome: "Equipe dos Sonhos da Liga dos Campeões da UEFA",
        logo: "UEFA Champions League",
        anos: "2011",
        categoria: "individual",
      },
      {
        nome: "Melhor meia-direita do Campeonato Carioca",
        logo: "Campeonato Carioca",
        anos: "2013",
        categoria: "individual",
      },
      {
        nome: "Bola de Ouro do Campeonato Carioca",
        logo: "Campeonato Carioca",
        anos: "2013",
        categoria: "individual",
      },
      {
        nome: "Bola de Prata do Brasileirão",
        logo: "Bola de Prata",
        anos: "2013",
        categoria: "individual",
      },
    ],
    tags: ["Seedorf"],
    ultima_atualizacao: "29/10/25",
  },

  // Johan Cruyff
  {
    nome: "Johan Cruyff",
    background: "gold",
    descricao:
      "Lenda neerlandesa e um dos maiores ícones do futebol mundial. Foi o principal expoente do 'Futebol Total' nos anos 70, liderando o Ajax ao tricampeonato europeu e a Seleção da Holanda ('Laranja Mecânica') ao vice-campeonato mundial em 1974. Vencedor de três Ballons d'Or, sua influência se estendeu como técnico do 'Dream Team' do Barcelona.",
    pagina: "https://www.instagram.com/johancruyff/",
    nacionalidade: "Holanda",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Johan_Cruyff_1974c.jpg/250px-Johan_Cruyff_1974c.jpg",
    numero: "14",
    posicao: "Atacante (Meia-Atacante)",
    dataNascimento: "25/04/1947",
    dataFalecimento: "24/03/2016",
    status: "Aposentado",
    clubes: [
      createClub(
        "Ajax",
        { inicio: "1964", fim: "1973" },
        { jogos: 318, gols: 250, assistencias: 0 }
      ),
      createClub(
        "Barcelona",
        { inicio: "1973", fim: "1978" },
        { jogos: 223, gols: 84, assistencias: 0 }
      ),
      createClub(
        "Los Angeles Aztecs",
        { inicio: "1979", fim: "1979" },
        { jogos: 26, gols: 15, assistencias: 0 }
      ),
      createClub(
        "Washington Diplomats",
        { inicio: "1980", fim: "1980" },
        { jogos: 26, gols: 10, assistencias: 0 }
      ),
      createClub(
        "Levante UD",
        { inicio: "1981", fim: "1981" },
        { jogos: 10, gols: 2, assistencias: 0 }
      ),
      createClub(
        "Washington Diplomats",
        { inicio: "1981", fim: "1981" },
        { jogos: 5, gols: 2, assistencias: 0 }
      ),
      createClub(
        "Ajax",
        { inicio: "1981", fim: "1983" },
        { jogos: 46, gols: 16, assistencias: 0 }
      ),
      createClub(
        "Feyenoord",
        { inicio: "1983", fim: "1984" },
        { jogos: 44, gols: 13, assistencias: 0 }
      ),
    ],
    selecao: {
      nome: "Países Baixos",
      periodo: { inicio: "1966", fim: "1977" },
      estatisticas: { jogos: 48, gols: 33, assistencias: 0 },
    },
    titulos: [
      // Ajax
      {
        nome: "UEFA Champions League",
        anos: "1971, 1972, 1973",
        clube: "Ajax",
      },
      { nome: "Copa Intercontinental", anos: "1972", clube: "Ajax" },
      {
        nome: "Campeonato Holandês",
        anos: "1966, 1967, 1968, 1970, 1972, 1973, 1982, 1983",
        clube: "Ajax",
      },
      {
        nome: "Copa da Holanda",
        anos: "1966, 1969, 1970, 1971, 1982",
        clube: "Ajax",
      },
      {
        nome: "Supercopa da UEFA",
        anos: "1972",
        clube: "Ajax",
      },

      // Barcelona
      {
        nome: "Campeonato Espanhol",
        anos: "1974",
        clube: "Barcelona",
      },
      {
        nome: "Copa do Rei",
        anos: "1978",
        clube: "Barcelona",
      },

      // Feyenoord
      {
        nome: "Campeonato Holandês",
        anos: "1984",
        clube: "Feyenoord",
      },
      {
        nome: "Copa da Holanda",
        anos: "1984",
        clube: "Feyenoord",
      },

      // Individuais
      {
        nome: "Futebolista Neerlandês do Ano",
        logo: "individual",
        anos: "1968, 1972, 1984",
        categoria: "individual",
      },
      {
        nome: "Bola de Ouro",
        anos: "1971, 1973, 1974",
        categoria: "individual",
      },
      {
        nome: "Desportista Neerlandês do Ano",
        logo: "individual",
        anos: "1973, 1974",
        categoria: "individual",
      },
      {
        nome: "Time das Estrelas da Copa do Mundo FIFA",
        logo: "Copa do Mundo",
        anos: "1974",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Bola de ouro da Copa do Mundo",
        logo: "Copa do Mundo",
        anos: "1974",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Seleção de Todos os Tempos da Copa do Mundo FIFA",
        logo: "FIFA",
        anos: "1994",
        categoria: "individual",
      },
      {
        nome: "Time dos Sonhos da Copa do Mundo FIFA",
        logo: "FIFA",
        anos: "2002",
        categoria: "individual",
      },
      {
        nome: "FIFA 100",
        anos: "2004",
        categoria: "individual",
      },
      {
        nome: "Seleção de Todos os Tempos da World Soccer",
        logo: "World Soccer",
        anos: "2013",
        categoria: "individual",
      },
      {
        nome: "Seleção de Futebol do Século XX",
        logo: "FIFA",
        anos: "2020",
        categoria: "individual",
      },
      {
        nome: "Melhor Jogador Europeu do Século XX",
        logo: "IFFHS",
        anos: "2021",
        categoria: "individual",
      },
      {
        nome: "2º Melhor Jogador do Século XX pelo Grande Júri FIFA",
        logo: "FIFA",
        anos: "2021",
        categoria: "individual",
      },
      {
        nome: "Melhor Jogador Neerlandês do Século XX pela IFFHS",
        logo: "IFFHS",
        anos: "2021",
        categoria: "individual",
      },
      {
        nome: "13° Melhor Jogador do Século XX pela IFFHS",
        logo: "IFFHS",
        anos: "2021",
        categoria: "individual",
      },
      {
        nome: "Bola de Ouro Dream Team: Melhor Centroavante da História - segundo esquadrão",
        logo: "France Football",
        anos: "2021",
        categoria: "individual",
      },
      {
        nome: "11Leyendas",
        logo: "Jornal AS",
        anos: "2021",
        categoria: "individual",
      },
      {
        nome: "IFFHS ALL TIME WORLD MEN'S DREAM TEAM",
        logo: "IFFHS",
        anos: "2021",
        categoria: "individual",
      },
    ],
    tags: ["Cruiff", "Cryff", "Cruyff"],
    ultima_atualizacao: "30/10/25",
  },

  // Marco van Basten
  {
    nome: "Marco van Basten",
    background: "gold",
    descricao:
      "Atacante holandês, considerado um dos centroavantes mais completos e elegantes da história. Três vezes Bola de Ouro, foi peça fundamental no domínio do Milan no final dos anos 80 e levou a Holanda ao seu único título: a Eurocopa de 1988, com um gol de voleio icônico. Sua carreira foi tristemente encerrada aos 28 anos devido a uma grave lesão no tornozelo.",
    pagina: "https://pt.wikipedia.org/wiki/Marco_van_Basten",
    nacionalidade: "Holanda",
    imagem:
      "https://i.pinimg.com/736x/2e/2d/59/2e2d59ff1728651c726928017b9e7dc2.jpg",
    numero: "9",
    posicao: "Centroavante",
    dataNascimento: "31/10/1964",
    status: "Aposentado",
    curiosidades:
      "Van Basten igualou o recorde de Johan Cruyff e Michel Platini ao conquistar a Bola de Ouro três vezes (1988, 1989 e 1992). Ele se aposentou oficialmente aos 30 anos (em 1995), mas sua última partida foi em 1993, devido a problemas crônicos no tornozelo.",

    clubes: [
      createClub(
        "Ajax",
        { inicio: "1981", fim: "1987" },
        { jogos: 172, gols: 152, assistencias: 0 }
      ),
      createClub(
        "AC Milan",
        { inicio: "1987", fim: "1993" },
        { jogos: 201, gols: 125, assistencias: 0 }
      ),
    ],

    selecao: {
      nome: "Holanda",
      periodo: { inicio: "1983", fim: "1992" },
      estatisticas: { jogos: 58, gols: 24, assistencias: 0 },
      destaque: "Campeão da Eurocopa de 1988 (Artilheiro e Melhor Jogador)",
    },

    titulos: [
      // TÍTULOS INDIVIDUAIS
      {
        nome: "Bola de Ouro",
        anos: "1988, 1989, 1992",
        categoria: "individual",
      },
      {
        nome: "Melhor Jogador do Mundo pela FIFA",
        logo: "The Best FIFA",
        anos: "1992",
        categoria: "individual",
      },
      {
        nome: "Chuteira de Ouro da Europa",
        logo: "Chuteira de Ouro",
        anos: "1986",
        categoria: "individual",
      },
      {
        nome: "Melhor Jogador da Eurocopa",
        logo: "Eurocopa",
        anos: "1988",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Artilheiro da UEFA Champions League",
        logo: "UEFA Champions League",
        anos: "1989",
        categoria: "individual",
      },
      {
        nome: "Artilheiro do Campeonato Holandês",
        logo: "Campeonato Holandês",
        anos: "1984, 1985, 1986, 1987",
        categoria: "individual",
      },
      {
        nome: "Artilheiro do Campeonato Italiano",
        logo: "Campeonato Italiano",
        anos: "1990, 1992",
        categoria: "individual",
      },

      // Holanda
      {
        nome: "Eurocopa",
        anos: "1988",
        clube: "Holanda",
        logoVariavel: true,
      },

      // AC MILAN
      {
        nome: "UEFA Champions League",
        anos: "1989, 1990",
        clube: "AC Milan",
      },
      {
        nome: "Copa Intercontinental",
        anos: "1989, 1990",
        clube: "AC Milan",
      },
      {
        nome: "Campeonato Italiano",
        anos: "1988, 1992, 1993",
        clube: "AC Milan",
      },
      {
        nome: "Supercopa da UEFA",
        anos: "1989, 1990",
        clube: "AC Milan",
      },
      {
        nome: "Supercopa da Itália",
        anos: "1988, 1992",
        clube: "AC Milan",
      },

      // AJAX
      {
        nome: "Recopa Europeia",
        anos: "1987",
        clube: "Ajax",
      },
      {
        nome: "Campeonato Holandês",
        anos: "1982, 1983, 1985",
        clube: "Ajax",
      },
      {
        nome: "Copa da Holanda",
        anos: "1983, 1986, 1987",
        clube: "Ajax",
      },
    ],
    tags: ["Cisne de Utrecht"],
    ultima_atualizacao: "31/10/2025",
  },

  // Ruud Gullit
  {
    nome: "Ruud Gullit",
    background: "gold",
    descricao:
      "Lenda holandesa e ícone do 'Futebol Total'. Conhecido por sua incrível versatilidade, força física e elegância, Gullit podia jogar em qualquer posição do meio-campo para o ataque. Foi o líder do AC Milan dominante do final dos anos 80 e da Seleção Holandesa campeã da Eurocopa.",
    pagina: "https://www.instagram.com/ruudgullit/",
    nacionalidade: "Holanda",
    imagem:
      "https://i.pinimg.com/originals/eb/7c/14/eb7c144f8842b073fe6b44317e13df1a.jpg",
    numero: "10",
    posicao: "Meia-Atacante / Atacante",
    dataNascimento: "01/09/1962",
    status: "Aposentado",
    clubes: [
      createClub(
        "HFC Haarlem",
        { inicio: "1979", fim: "1982" },
        { jogos: 105, gols: 38, assistencias: 0 }
      ),
      createClub(
        "Feyenoord",
        { inicio: "1982", fim: "1985" },
        { jogos: 107, gols: 43, assistencias: 0 }
      ),
      createClub(
        "PSV Eindhoven",
        { inicio: "1985", fim: "1987" },
        { jogos: 75, gols: 53, assistencias: 0 }
      ),
      createClub(
        "AC Milan",
        { inicio: "1987", fim: "1994" },
        { jogos: 171, gols: 56, assistencias: 0 }
      ),
      createClub(
        "Sampdoria",
        { inicio: "1993", fim: "1995" },
        { jogos: 53, gols: 25, assistencias: 0 }
      ),
      createClub(
        "Chelsea",
        { inicio: "1995", fim: "1998" },
        { jogos: 63, gols: 7, assistencias: 0 }
      ),
    ],
    selecao: {
      nome: "Holanda",
      periodo: { inicio: "1981", fim: "1994" },
      estatisticas: { jogos: 66, gols: 17, assistencias: 0 },
    },
    titulos: [
      // Individuais
      {
        nome: "Bola de Ouro",
        anos: "1987",
        categoria: "individual",
      },
      {
        nome: "Jogador do Ano da World Soccer",
        logo: "World Soccer",
        anos: "1987, 1989",
        categoria: "individual",
      },
      {
        nome: "Futebolista Holandês do Ano",
        logo: "individual",
        anos: "1984, 1986",
        categoria: "individual",
      },
      {
        nome: "Chuteira de ouro dos Países Baixos",
        logo: "individual",
        anos: "1986",
        categoria: "individual",
      },
      {
        nome: "Bola de Prata da Eurocopa",
        logo: "Eurocopa",
        anos: "1988",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Seleção da Eurocopa",
        logo: "Eurocopa",
        anos: "1988",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Seleção da Eurocopa",
        logo: "Eurocopa",
        anos: "1992",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "FIFA 100",
        anos: "2004",
        categoria: "individual",
      },
      {
        nome: "18.º melhor jogador de futebol do século XX da IFFHS",
        logo: "IFFHS",
        anos: "2004",
        categoria: "individual",
      },

      // Seleção
      {
        nome: "Eurocopa",
        anos: "1988",
        clube: "Holanda",
        logoVariavel: true,
      },

      // HFC Haarlem
      {
        nome: "Eerste Divisie",
        anos: "1980",
        clube: "HFC Haarlem",
      },

      // AC Milan
      {
        nome: "UEFA Champions league",
        anos: "1988, 1989",
        clube: "AC Milan",
      },
      {
        nome: "Campeonato Italiano",
        anos: "1987, 1991, 1992",
        clube: "AC Milan",
      },
      {
        nome: "Copa Intercontinental",
        anos: "1989, 1990",
        clube: "AC Milan",
      },
      {
        nome: "Supercopa da UEFA",
        anos: "1989, 1990",
        clube: "AC Milan",
      },

      // PSV Eindhoven
      {
        nome: "Campeonato Holandês",
        anos: "1985, 1986",
        clube: "PSV Eindhoven",
      },

      // Feyenoord
      {
        nome: "Campeonato Holandês",
        anos: "1983",
        clube: "Feyenoord",
      },
      {
        nome: "Copa da Holanda",
        anos: "1983",
        clube: "Feyenoord",
      },

      // Sampdoria
      {
        nome: "Copa da Itália",
        anos: "1993",
        clube: "Sampdoria",
      },

      // Chelsea
      {
        nome: "Copa da Inglaterra",
        anos: "1997",
        clube: "Chelsea",
      },
    ],
    tags: ["Gullit"],
    ultima_atualizacao: "29/10/25",
  },

  // HUNGRIA -------------------------------------------------------------------------------------------------------------------------------------------------------

  // Ferenc Puskás
  {
    nome: "Ferenc Puskás",
    background: "gold",
    descricao:
      "Líder dos 'Mágicos Magiares' da Hungria e lenda do Real Madrid. Atacante com um chute de canhota poderosíssimo, Puskás foi um dos maiores artilheiros de todos os tempos. Venceu a medalha de ouro nas Olimpíadas de 1952 e foi vice-campeão da Copa do Mundo de 1954. A FIFA batizou o prêmio do gol mais bonito do ano em sua homenagem.",
    pagina: "https://pt.wikipedia.org/wiki/Ferenc_Pusk%C3%A1s",
    nacionalidade: "Hungria",
    imagem:
      "https://i.pinimg.com/736x/cb/ca/08/cbca0815cfac8b4a453de2cf485c7406.jpg",
    numero: "10",
    posicao: "Centroavante / Segundo Atacante",
    dataNascimento: "01/04/1927",
    dataFalecimento: "17/11/2006",
    status: "Aposentado",
    curiosidades:
      "Puskás só jogou profissionalmente por dois clubes principais: o Kispest/Honvéd (Hungria) e o Real Madrid. Ele marcou 4 gols na final da Copa dos Campeões de 1960 contra o Eintracht Frankfurt, a única vez que tal feito foi alcançado. O prêmio para o gol mais bonito da FIFA, o Prêmio Puskás, leva seu nome desde 2009.",

    clubes: [
      createClub(
        "Honvéd",
        { inicio: "1943", fim: "1956" },
        { jogos: 367, gols: 383, assistencias: 0 }
      ),
      createClub(
        "Real Madrid",
        { inicio: "1958", fim: "1967" },
        { jogos: 262, gols: 242, assistencias: 0 }
      ),
    ],

    selecao: {
      nome: "Hungria",
      periodo: { inicio: "1945", fim: "1956" },
      estatisticas: { jogos: 85, gols: 84, assistencias: 0 },
      destaque:
        "Vice-campeão da Copa do Mundo de 1954 e invencibilidade de 4 anos",
      outraSelecao: {
        nome: "Espanha",
        periodo: { inicio: "1961", fim: "1962" },
        estatisticas: { jogos: 4, gols: 0, assistencias: 0 },
      },
    },

    titulos: [
      // TÍTULOS INDIVIDUAIS
      {
        nome: "Artilheiro do Campeonato Húngaro",
        logo: "Campeonato Húngaro",
        anos: "1948, 1950, 1951, 1953",
        categoria: "individual",
      },
      {
        nome: "Chuteira de Ouro da Europa",
        logo: "Chuteira de Ouro",
        anos: "1948",
        categoria: "individual",
      },
      {
        nome: "Bola de Prata",
        logo: "France Football",
        anos: "1960",
        categoria: "individual",
      },
      {
        nome: "Melhor Jogador da Copa do Mundo",
        logo: "Copa do Mundo",
        anos: "1954",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Artilheiro da Taça dos Campeões Europeus",
        logo: "UEFA Champions League",
        anos: "1960, 1962, 1964",
        categoria: "individual",
      },
      {
        nome: "Artilheiro do Campeonato Espanhol",
        logo: "Campeonato Espanhol",
        anos: "1960, 1961, 1963, 1964",
        categoria: "individual",
      },
      {
        nome: "Futebolista Húngaro do Ano",
        logo: "individual",
        anos: "1950",
        categoria: "individual",
      },

      // Hungria
      {
        nome: "Jogos Olímpicos",
        anos: "1952",
        clube: "Hungria",
        logoVariavel: true,
      },

      // Real Madrid
      {
        nome: "UEFA Champions League",
        anos: "1959, 1960, 1966",
        clube: "Real Madrid",
      },
      {
        nome: "Copa Intercontinental",
        anos: "1960",
        clube: "Real Madrid",
      },
      {
        nome: "Campeonato Espanhol",
        anos: "1961, 1962, 1963, 1964, 1965",
        clube: "Real Madrid",
      },
      {
        nome: "Copa do Rei",
        anos: "1962",
        clube: "Real Madrid",
      },

      // Honvéd
      {
        nome: "Campeonato Húngaro",
        anos: "1950, 1952, 1954, 1955",
        clube: "Honvéd",
      },
    ],
    tags: ["Major Galopante"],
    ultima_atualizacao: "31/10/2025",
  },

  // INGLATERRA -------------------------------------------------------------------------------------------------------------------------------------------------------

  // Bobby Charlton
  {
    nome: "Bobby Charlton",
    background: "gold",
    descricao:
      "Lenda do Manchester United e herói nacional da Inglaterra, sendo o grande craque da única Copa do Mundo conquistada pelo país (1966). Sobrevivente do desastre aéreo de Munique em 1958, ele liderou a reconstrução do United, conquistando a Copa dos Campeões de 1968. Possuía um chute de longa distância devastador e técnica impecável.",
    pagina: "https://pt.wikipedia.org/wiki/Bobby_Charlton",
    nacionalidade: "Inglaterra",
    imagem:
      "https://s2-oglobo.glbimg.com/MjGyH6AKhfw1Rbkp2SYPT-HRpHs=/0x0:600x813/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2023/8/c/y5PDr2Rr6kkZUlb48UwQ/sir-bobby-charlton-manchesterunited.jpg",
    numero: "9",
    posicao: "Meia Ofensivo / Atacante",
    dataNascimento: "11/10/1937",
    dataFalecimento: "21/10/2023",
    status: "Aposentado",
    curiosidades:
      "Bobby Charlton foi um dos sobreviventes do Desastre Aéreo de Munique, em 1958, que vitimou 23 pessoas, incluindo 8 de seus 'Busby Babes' (jovens colegas do United). Ele foi condecorado como 'Sir' (cavaleiro) pela Rainha Elizabeth II em 1994 por seus serviços ao futebol. O Estádio Old Trafford possui uma arquibancada com seu nome em homenagem.",

    clubes: [
      createClub(
        "Manchester United",
        { inicio: "1954", fim: "1973" },
        { jogos: 758, gols: 249, assistencias: 0 }
      ),
      createClub(
        "Preston North End",
        { inicio: "1973", fim: "1974" },
        { jogos: 38, gols: 9, assistencias: 0 }
      ),
      createClub(
        "Waterford United",
        { inicio: "1975", fim: "1975" },
        { jogos: 4, gols: 1, assistencias: 0 }
      ),
    ],

    selecao: {
      nome: "Inglaterra",
      periodo: { inicio: "1958", fim: "1970" },
      estatisticas: { jogos: 106, gols: 49, assistencias: 0 },
      destaque: "Campeão da Copa do Mundo FIFA de 1966",
    },

    titulos: [
      // TÍTULOS INDIVIDUAIS
      {
        nome: "Bola de Ouro",
        anos: "1966",
        categoria: "individual",
      },
      {
        nome: "Bola de Ouro da Copa do Mundo",
        logo: "Copa do Mundo",
        anos: "1966",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Futebolista Inglês do Ano",
        logo: "FWA",
        anos: "1966",
        categoria: "individual",
      },
      {
        nome: "Time das Estrelas da Copa do Mundo",
        logo: "Copa do Mundo",
        anos: "1966",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Time das Estrelas da Copa do Mundo",
        logo: "Copa do Mundo",
        anos: "1970",
        categoria: "individual",
        logoVariavel: true,
      },

      // Inglaterra
      {
        nome: "Copa do Mundo",
        anos: "1966",
        clube: "Inglaterra",
        logoVariavel: true,
      },
      {
        nome: "British Home Championship",
        anos: "1960, 1961, 1964, 1965, 1966, 1968, 1969, 1970",
        clube: "Inglaterra",
      },

      // MANCHESTER UNITED
      {
        nome: "UEFA Champions League",
        anos: "1968",
        clube: "Manchester United",
      },
      {
        nome: "Campeonato Inglês",
        anos: "1956, 1957, 1965, 1967",
        clube: "Manchester United",
      },
      {
        nome: "Copa da Inglaterra",
        anos: "1963",
        clube: "Manchester United",
      },
      {
        nome: "Supercopa da Inglaterra",
        anos: "1956, 1957, 1965, 1967",
        clube: "Manchester United",
      },
    ],
    tags: ["Sobrevivente de Munique", "Busby Babe"],
    ultima_atualizacao: "31/10/2025",
  },

  //Harry Kane
  {
    nome: "Harry Kane",
    background: "diamond",
    imagem:
      "https://dims.apnews.com/dims4/default/6d2e0b0/2147483647/strip/true/crop/5820x3880+0+0/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F2f%2Fdf%2F12ff8d97892897fcf0b91338646f%2Fc20b8f3d403e44d79010036fb0ca0f55",
    descricao:
      "Centroavante inglês e capitão da seleção inglesa, conhecido por sua prolífica capacidade de marcar gols, visão de jogo, habilidades de passe e inteligência tática. Kane é um dos atacantes mais completos do futebol mundial, quebrou vários recordes de gols na Premier League e é o maior artilheiro da história da Inglaterra, além de ser o capitão do Bayern de Munique.",
    numero: "9",
    posicao: "Centroavante",
    nacionalidade: "Inglaterra",
    dataNascimento: "28/07/1993",
    status: "Ativo",
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
        nome: "Campeonato Alemão",
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
        nome: "Campeonato Inglês (Vice-campeão)",
        logo: "Campeonato Inglês",
        anos: "2016",
        clube: "Tottenham Hotspur",
      },
      {
        nome: "EFL Cup (Vice-campeão)",
        logo: "Copa da Liga Inglesa",
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
        logo: "Campeonato Alemão",
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
        logo: "Campeonato Alemão",
        anos: "2023-24",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Jogador do Mês da Premier League",
        logo: "Campeonato Inglês",
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
    tags: ["Kane", "Harry Kane", "Hurricane", "HK10", "HK9"],
    ultima_atualizacao: "27/10/25",
  },

  //IRLANDA DO NORTE -------------------------------------------------------------------------------------

  // George Best
  {
    nome: "George Best",
    background: "gold",
    descricao:
      "Um dos maiores talentos individuais da história do futebol. Meia-atacante/ponta-direita, famoso por sua velocidade, equilíbrio, dribles desconcertantes e capacidade de finalização. Foi o principal jogador do Manchester United na conquista da Copa dos Campeões de 1968 e vencedor da Bola de Ouro no mesmo ano.",
    pagina: "https://pt.wikipedia.org/wiki/George_Best",
    nacionalidade: "Irlanda do Norte",
    imagem:
      "https://cdn.artphotolimited.com/images/5f60bc53bd40b8173f11e855/1000x1000/george-best-manchester-united.jpg",
    numero: "7",
    posicao: "Ponta-Direita / Meia-Atacante",
    dataNascimento: "22/05/1946",
    dataFalecimento: "25/11/2005",
    status: "Aposentado",
    curiosidades:
      "Apelidado de 'O Quinto Beatle' por sua fama, talento e visual. Fazia parte da 'Santíssima Trindade' do Manchester United ao lado de Bobby Charlton e Denis Law. É famoso pela citação: 'Gastei muito dinheiro com bebida, mulheres e carros rápidos. O resto eu desperdicei.'",

    clubes: [
      createClub(
        "Manchester United",
        { inicio: "1963", fim: "1974" },
        { jogos: 470, gols: 179, assistencias: 0 }
      ),
      createClub(
        "Stockport County",
        { inicio: "1975", fim: "1975" },
        { jogos: 3, gols: 2, assistencias: 0 }
      ),
      createClub(
        "Cork Celtic",
        { inicio: "1975", fim: "1976" },
        { jogos: 3, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Los Angeles Aztecs",
        { inicio: "1976", fim: "1978" },
        { jogos: 55, gols: 27, assistencias: 0 }
      ),
      createClub(
        "Fulham",
        { inicio: "1976", fim: "1977" },
        { jogos: 42, gols: 8, assistencias: 0 }
      ),
      createClub(
        "San Jose Earthquakes",
        { inicio: "1980", fim: "1981" },
        { jogos: 56, gols: 21, assistencias: 0 }
      ),
    ],

    selecao: {
      nome: "Irlanda do Norte",
      periodo: { inicio: "1964", fim: "1977" },
      estatisticas: { jogos: 37, gols: 9, assistencias: 0 },
      destaque:
        "Maior ídolo da história da Seleção Norte-Irlandesa, nunca disputou uma Copa do Mundo.",
    },

    titulos: [
      // TÍTULOS INDIVIDUAIS
      {
        nome: "Bola de Ouro",
        anos: "1968",
        categoria: "individual",
      },
      {
        nome: "Futebolista Inglês do Ano",
        logo: "FWA",
        anos: "1968",
        categoria: "individual",
      },
      {
        nome: "Artilheiro do Campeonato Inglês",
        logo: "Campeonato Inglês",
        anos: "1968",
        categoria: "individual",
      },
      {
        nome: "Bola de Ouro Dream Team (3º Esquadrão)",
        logo: "France Football",
        anos: "2020",
        categoria: "individual",
      },

      // MANCHESTER UNITED
      {
        nome: "UEFA Champions League",
        anos: "1968",
        clube: "Manchester United",
      },
      {
        nome: "Campeonato Inglês",
        anos: "1965, 1967",
        clube: "Manchester United",
      },
      {
        nome: "Supercopa da Inglaterra",
        anos: "1965, 1967",
        clube: "Manchester United",
      },
      {
        nome: "FA Youth Cup",
        anos: "1964",
        clube: "Manchester United",
      },
    ],
    tags: ["Quinto Beatle", "Belfast Boy", "Garrincha Europeu"],
    ultima_atualizacao: "31/10/2025",
  },

  // ITÁLIA -------------------------------------------------------------------------------------------------------------------------------------------------------

  // Franco Baresi
  {
    nome: "Franco Baresi",
    background: "gold",
    descricao:
      "Um dos maiores defensores (libero/zagueiro) da história do futebol. Lendário capitão do AC Milan por 15 temporadas e pilar da defesa que ficou conhecida como 'Os Imortais' de Arrigo Sacchi. Notável por sua inteligência tática, liderança, antecipação e qualidade técnica, mesmo sendo um defensor.",
    pagina: "https://pt.wikipedia.org/wiki/Franco_Baresi",
    nacionalidade: "Itália",
    imagem:
      "https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/703e631b-05a7-48a7-a9c7-250c89313285/Hero-Inductee-Baresi.jpg?w=1980&q=100&format=auto",
    numero: "6",
    posicao: "Libero / Zagueiro Central",
    dataNascimento: "08/05/1960",
    status: "Aposentado",
    curiosidades:
      "Passou toda a sua carreira de 20 anos jogando pelo AC Milan, um raro caso de 'One-Club Man'. O Milan aposentou a camisa 6 em sua homenagem, um dos maiores tributos do futebol. Foi vice-campeão da Copa do Mundo de 1994, perdendo o pênalti que deu o título ao Brasil. Seu irmão mais velho, Giuseppe Baresi, foi capitão e ídolo do rival Inter de Milão.",

    clubes: [
      createClub(
        "AC Milan",
        { inicio: "1977", fim: "1997" },
        { jogos: 720, gols: 33, assistencias: 0 }
      ),
    ],

    selecao: {
      nome: "Itália",
      periodo: { inicio: "1982", fim: "1994" },
      estatisticas: { jogos: 81, gols: 1, assistencias: 0 },
      destaque:
        "Vencedor da Copa do Mundo FIFA 1982. Vice-campeão da Copa do Mundo FIFA 1994. 3º lugar na Copa do Mundo FIFA 1990.",
    },

    titulos: [
      // TÍTULOS INDIVIDUAIS
      {
        nome: "Bola de Prata da Revista France Football",
        logo: "France Football",
        anos: "1989",
        categoria: "individual",
      },
      {
        nome: "Time da Copa do Mundo",
        logo: "Copa do Mundo",
        anos: "1990",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Melhor Jogador do Campeonato Italiano",
        logo: "Campeonato Italiano",
        anos: "1990",
        categoria: "individual",
      },
      {
        nome: "Jogador do Século do Milan",
        logo: "individual",
        anos: "1999",
        categoria: "individual",
      },
      {
        nome: "Jogador Italiano do Século XX pela FIGC",
        logo: "FIGC",
        anos: "2004",
        categoria: "individual",
      },
      {
        nome: "FIFA 100",
        anos: "2004",
        categoria: "individual",
      },
      {
        nome: "33º Melhor jogador do Século XX pela IFFHS",
        logo: "IFFHS",
        anos: "2000",
        categoria: "individual",
      },
      {
        nome: "Hall da Fama do Futebol Italiano",
        logo: "individual",
        anos: "2013",
        categoria: "individual",
      },
      {
        nome: "20º Melhor futebolista europeu do Século XX pela IFFHS",
        logo: "IFFHS",
        anos: "2000",
        categoria: "individual",
      },
      {
        nome: "4º Melhor jogador italiano do Século XX pela IFFHS",
        logo: "IFFHS",
        anos: "2000",
        categoria: "individual",
      },
      {
        nome: "Seleção de Futebol do Século XX da Italian FA",
        logo: "IFFHS",
        anos: "2000",
        categoria: "individual",
      },
      {
        nome: "Seleção de Futebol do Século XX da Planete Foot",
        logo: "IFFHS",
        anos: "2000",
        categoria: "individual",
      },
      {
        nome: "Bola de Ouro Dream Team: Melhor zagueiro da história - segundo esquadrão",
        logo: "France Football",
        anos: "2020",
        categoria: "individual",
      },
      {
        nome: "Lendas do Futebol",
        logo: "IFFHS",
        anos: "2020",
        categoria: "individual",
      },
      {
        nome: "All-Time World Men's Dream Team",
        logo: "IFFHS",
        anos: "2020",
        categoria: "individual",
      },
      {
        nome: "Seleção Italiana de Todos os Tempos",
        logo: "IFFHS",
        anos: "2020",
        categoria: "individual",
      },

      // AC Milan
      {
        nome: "UEFA Champions League",
        anos: "1989, 1990, 1994",
        clube: "AC Milan",
      },
      {
        nome: "Campeonato Italiano",
        anos: "1979, 1988, 1992, 1993, 1994, 1996",
        clube: "AC Milan",
      },
      {
        nome: "Copa Intercontinental",
        anos: "1989, 1990",
        clube: "AC Milan",
      },
      {
        nome: "Supercopa da UEFA",
        anos: "1989, 1990, 1994",
        clube: "AC Milan",
      },
      {
        nome: "Supercopa da Itália",
        anos: "1988, 1992, 1993, 1994",
        clube: "AC Milan",
      },

      // Itália
      {
        nome: "Copa do Mundo",
        anos: "1982",
        clube: "Itália",
        logoVariavel: true,
      },
    ],
    tags: ["One-Club Man", "Il Capitano", "Immortali"],
    ultima_atualizacao: "31/10/2025",
  },

  // Gianluigi Buffon
  {
    nome: "Gianluigi Buffon",
    background: "gold",
    descricao:
      "Amplamente considerado o maior goleiro de sua geração e um dos melhores da história do futebol. Campeão do Mundo com a Itália (2006) e ícone da Juventus, conhecido por sua longevidade, liderança, reflexos e excelência nas defesas.",
    pagina: "https://pt.wikipedia.org/wiki/Gianluigi_Buffon",
    nacionalidade: "Itália",
    imagem:
      "https://stories.cnnbrasil.com.br/wp-content/uploads/sites/9/2023/08/cropped-Foto-Buffon-campeao-mundial-1.jpeg?w=640",
    numero: "1",
    posicao: "Goleiro",
    dataNascimento: "28/01/1978",
    status: "Aposentado (2023)",
    curiosidades:
      "Detém o recorde de mais jogos na Serie A (658 partidas). Por 17 anos, foi o goleiro mais caro da história (transferido do Parma para a Juventus em 2001 por cerca de 52 milhões de euros). Venceu a Copa do Mundo de 2006 sofrendo apenas 2 gols em 7 jogos. É o único goleiro a ter ficado em 2º lugar na votação da Bola de Ouro (2006) desde Lev Yashin.",

    clubes: [
      createClub(
        "Parma",
        { inicio: "1995", fim: "2001" },
        { jogos: 220, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Juventus",
        { inicio: "2001", fim: "2018" },
        { jogos: 656, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Paris Saint-Germain",
        { inicio: "2018", fim: "2019" },
        { jogos: 25, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Juventus",
        { inicio: "2019", fim: "2021" },
        { jogos: 29, gols: 0, assistencias: 0 }
      ),
      createClub(
        "Parma",
        { inicio: "2021", fim: "2023" },
        { jogos: 45, gols: 0, assistencias: 0 }
      ),
    ],

    selecao: {
      nome: "Itália",
      periodo: { inicio: "1997", fim: "2018" },
      estatisticas: { jogos: 176, gols: 0, assistencias: 0 },
      destaque:
        "Vencedor da Copa do Mundo FIFA 2006. Recordista de jogos pela seleção italiana. Prêmio Lev Yashin (Melhor Goleiro da Copa do Mundo de 2006).",
    },

    titulos: [
      // TÍTULOS INDIVIDUAIS
      {
        nome: "Bola de Prata da Revista France Football",
        logo: "France Football",
        anos: "2006",
        categoria: "individual",
      },
      {
        nome: "Melhor Goleiro do Mundo",
        logo: "IFFHS",
        anos: "2003, 2004, 2006, 2007, 2017",
        categoria: "individual",
      },
      {
        nome: "Melhor Goleiro do Século XXI",
        logo: "IFFHS",
        anos: "2012",
        categoria: "individual",
      },
      {
        nome: "Prêmio Lev Yashin",
        anos: "2006",
        categoria: "individual",
      },
      {
        nome: "Equipe do Ano da UEFA",
        logo: "UEFA",
        anos: "2003, 2004, 2006, 2016, 2017",
        categoria: "individual",
      },
      {
        nome: "FIFA 100",
        anos: "2004",
        categoria: "individual",
      },
      {
        nome: "Golden Foot Award",
        anos: "2016",
        categoria: "individual",
      },
      {
        nome: "Hall da Fama do Futebol Italiano",
        logo: "individual",
        anos: "2021",
        categoria: "individual",
      },

      // PARMA
      {
        nome: "Copa da Itália",
        anos: "1999",
        clube: "Parma",
      },
      {
        nome: "Supercopa da Itália",
        anos: "1999",
        clube: "Parma",
      },
      {
        nome: "UEFA Europa League",
        anos: "1999",
        clube: "Parma",
      },

      // JUVENTUS
      {
        nome: "Campeonato Italiano",
        anos: "2002, 2003, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2020",
        clube: "Juventus",
      },
      {
        nome: "Copa da Itália",
        anos: "2015, 2016, 2017, 2018, 2021",
        clube: "Juventus",
      },
      {
        nome: "Supercopa da Itália",
        anos: "2002, 2003, 2012, 2013, 2015, 2017, 2020",
        clube: "Juventus",
      },

      // PARIS SAINT-GERMAIN
      {
        nome: "Campeonato Francês",
        anos: "2019",
        clube: "Paris Saint-Germain",
      },
      {
        nome: "Supercopa da França",
        anos: "2018",
        clube: "Paris Saint-Germain",
      },

      // TÍTULOS PELA SELEÇÃO
      {
        nome: "Copa do Mundo",
        anos: "2006",
        clube: "Itália",
        logoVariavel: true,
      },
      {
        nome: "Eurocopa Sub-21",
        anos: "1996",
        clube: "Itália",
        logoVariavel: true,
      },
    ],
    tags: ["Gigi", "Goalkeeper GOAT", "Bandiera"],
    ultima_atualizacao: "31/10/2025",
  },

  // Giuseppe Meazza
  {
    nome: "Giuseppe Meazza",
    background: "gold",
    descricao:
      "Lendário atacante e meia-atacante italiano, considerado o maior jogador da história da Inter de Milão e um dos maiores de todos os tempos. Bicampeão da Copa do Mundo (1934 e 1938) e notável por sua técnica, drible e capacidade de finalização. O estádio San Siro em Milão foi rebatizado em sua homenagem (Stadio Giuseppe Meazza).",
    pagina: "https://pt.wikipedia.org/wiki/Giuseppe_Meazza",
    nacionalidade: "Itália",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/1/19/Giuseppe_Meazza_1935.jpg",
    numero: "9",
    posicao: "Meia-Atacante / Atacante",
    dataNascimento: "23/08/1910",
    status: "Aposentado",
    curiosidades:
      "É o segundo maior artilheiro da história da Seleção Italiana (33 gols). É o terceiro maior artilheiro da história da Inter de Milão (284 gols). Ganhou a Copa do Mundo duas vezes (1934 e 1938), sendo capitão na segunda. O Estádio San Siro (casa do Milan e da Inter) é oficialmente chamado Stadio Giuseppe Meazza desde 1980.",

    clubes: [
      createClub(
        "Inter de Milão",
        { inicio: "1927", fim: "1940" },
        { jogos: 365, gols: 242, assistencias: 0 }
      ),
      createClub(
        "AC Milan",
        { inicio: "1940", fim: "1942" },
        { jogos: 37, gols: 9, assistencias: 0 }
      ),
      createClub(
        "Juventus",
        { inicio: "1942", fim: "1943" },
        { jogos: 27, gols: 10, assistencias: 0 }
      ),
      createClub(
        "Varese",
        { inicio: "1944", fim: "1944" },
        { jogos: 8, gols: 7, assistencias: 0 }
      ),
      createClub(
        "Atalanta",
        { inicio: "1945", fim: "1946" },
        { jogos: 27, gols: 7, assistencias: 0 }
      ),
      createClub(
        "Inter de Milão",
        { inicio: "1946", fim: "1947" },
        { jogos: 17, gols: 2, assistencias: 0 }
      ),
      createClub(
        "Pro Patria",
        { inicio: "1947", fim: "1947" },
        { jogos: 17, gols: 2, assistencias: 0 }
      ),
    ],

    selecao: {
      nome: "Itália",
      periodo: { inicio: "1930", fim: "1939" },
      estatisticas: { jogos: 53, gols: 33, assistencias: 0 },
      destaque:
        "Bicampeão da Copa do Mundo FIFA (1934, 1938). Capitão da seleção em 1938. Segundo maior artilheiro da história da Itália.",
    },

    titulos: [
      // TÍTULOS INDIVIDUAIS
      {
        nome: "Bola de Bronze da Copa do Mundo",
        logo: "Bola de Bonze FIFA",
        anos: "1938",
        categoria: "individual",
      },
      {
        nome: "Bola de Ouro da Copa do Mundo",
        logo: "Bola de Ouro FIFA",
        anos: "1934",
        categoria: "individual",
      },
      {
        nome: "Artilheiro do Campeonato Italiano",
        logo: "Campeonato Italiano",
        anos: "1930, 1936, 1938",
        categoria: "individual",
      },
      {
        nome: "21.º melhor jogador de futebol do século XX",
        logo: "IFFHS",
        anos: "2000",
        categoria: "individual",
      },
      {
        nome: "Seleção Italiana de Todos os Tempos",
        logo: "IFFHS",
        anos: "2000",
        categoria: "individual",
      },

      // Inter de Milão
      {
        nome: "Campeonato Italiano",
        anos: "1930, 1938, 1940",
        clube: "Inter de Milão",
      },
      {
        nome: "Copa da Itália",
        anos: "1939",
        clube: "Inter de Milão",
      },

      // Itália
      {
        nome: "Copa do Mundo",
        anos: "1934",
        clube: "Itália",
        logoVariavel: true,
      },
      {
        nome: "Copa do Mundo",
        anos: "1938",
        clube: "Itália",
        logoVariavel: true,
      },
      {
        nome: "Copa Internacional da Europa Central",
        anos: "1930, 1935",
        clube: "Itália",
      },
    ],
    tags: ["Il Genio"],
    ultima_atualizacao: "31/10/2025",
  },

  // Jorginho
  {
    nome: "Jorginho",
    background: "diamond",
    descricao:
      "Meio-campista ítalo-brasileiro conhecido por ser um 'regista', o maestro do meio-campo. Jorginho é famoso por sua capacidade de ditar o ritmo de jogo, precisão nos passes curtos e longos, e eficiência na conversão de pênaltis. Foi eleito o Melhor Jogador da UEFA em 2021, ano em que conquistou a Champions com o Chelsea e a Eurocopa com a Itália. Em 2025, retornou ao Brasil para defender o Flamengo.",
    pagina: "https://www.instagram.com/jorginhofrello/",
    nacionalidade: "Itália",
    imagem:
      "https://lncimg.lance.com.br/cdn-cgi/image/width=950,quality=75,fit=pad,format=webp/uploads/2025/06/54596038431_b1e5445ad6_k-aspect-ratio-512-320.jpg",
    numero: "21",
    posicao: "Volante",
    dataNascimento: "20/12/1991",
    status: "Ativo",
    curiosidades:
      "Nascido em Imbituba, Santa Catarina, Jorginho se mudou para a Itália aos 15 anos e defendeu a seleção italiana. Ele ficou em 3º lugar na votação da Bola de Ouro de 2021, atrás de Messi e Lewandowski.",
    clubes: [
      createClub(
        "Hellas Verona",
        { inicio: "2010", fim: "2014" },
        { jogos: 95, gols: 11, assistencias: 2 }
      ),
      createClub(
        "Sambonifacese",
        { inicio: "2010", fim: "2011" },
        { jogos: 31, gols: 1, assistencias: 2 }
      ),
      createClub(
        "Napoli",
        { inicio: "2014", fim: "2018" },
        { jogos: 160, gols: 6, assistencias: 14 }
      ),
      createClub(
        "Chelsea",
        { inicio: "2018", fim: "2023" },
        { jogos: 213, gols: 29, assistencias: 8 }
      ),
      createClub(
        "Arsenal",
        { inicio: "2023", fim: "2025" },
        { jogos: 60, gols: 2, assistencias: 3 }
      ),
      createClub(
        "Flamengo",
        { inicio: "2025", fim: "Presente" },
        { jogos: 20, gols: 2, assistencias: 5 }
      ),
    ],
    selecao: {
      nome: "Itália",
      periodo: { inicio: "2016", fim: "Presente" },
      estatisticas: { jogos: 60, gols: 5, assistencias: 5 },
    },
    titulos: [
      // Seleção Italiana
      {
        nome: "Eurocopa",
        anos: "2020",
        clube: "Itália",
        logoVariavel: true,
      },

      // Napoli
      {
        nome: "Copa da Itália",
        anos: "2014",
        clube: "Napoli",
      },
      {
        nome: "Supercopa da Itália",
        anos: "2014",
        clube: "Napoli",
      },

      // Chelsea
      {
        nome: "UEFA Champions League",
        anos: "2021",
        clube: "Chelsea",
      },
      {
        nome: "UEFA Europa League",
        anos: "2019",
        clube: "Chelsea",
      },
      {
        nome: "Mundial de Clubes",
        anos: "2022",
        clube: "Chelsea",
      },

      // Individuais
      {
        nome: "Seleção da Liga Europa da UEFA",
        logo: "UEFA Europa League",
        anos: "2019",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Seleção da Eurocopa",
        logo: "Eurocopa",
        anos: "2020",
        clube: "Individual",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Melhor Jogador da UEFA",
        logo: "UEFA",
        anos: "2021",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "Seleção da Liga dos Campeões da UEFA",
        logo: "UEFA Champions League",
        anos: "2021",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "FIFPro World XI",
        logo: "FIFPro",
        anos: "2021",
        clube: "Individual",
        categoria: "individual",
      },
      {
        nome: "3º Lugar na Bola de Ouro",
        logo: "Bola de Ouro",
        anos: "2021",
        clube: "Individual",
        categoria: "individual",
      },
    ],
    tags: ["Jorginho", "Regista", "J5", "Maestro", "Jorge Luiz Frello Filho"],
    ultima_atualizacao: "27/10/25",
  },

  // Paolo Maldini
  {
    nome: "Paolo Maldini",
    background: "gold",
    descricao:
      "Considerado um dos maiores defensores e laterais-esquerdos de todos os tempos. Lenda e 'One-Club Man' do AC Milan, onde jogou por 25 temporadas. Capitão icônico e pilar da defesa 'Os Imortais', ele foi notável por sua longevidade, elegância, inteligência tática e versatilidade.",
    pagina: "https://pt.wikipedia.org/wiki/Paolo_Maldini",
    nacionalidade: "Itália",
    imagem: "https://i1.sndcdn.com/artworks-000306169167-r31lum-t500x500.jpg",
    numero: "3",
    posicao: "Lateral-Esquerdo / Zagueiro Central",
    dataNascimento: "26/06/1968",
    status: "Aposentado",
    curiosidades:
      "Passou toda a sua carreira no AC Milan, somando mais de 900 jogos pelo clube, um recorde. O Milan aposentou a camisa 3 em sua homenagem, reservando-a para seus filhos. Foi vice-campeão da Copa do Mundo (1994) e da Eurocopa (2000), mas nunca ganhou um título pela seleção principal. Ficou em 3º lugar na Bola de Ouro em 1994 e 2003, e em 2º no FIFA World Player em 1995.",

    clubes: [
      createClub(
        "AC Milan",
        { inicio: "1985", fim: "2009" },
        { jogos: 902, gols: 33, assistencias: 43 }
      ),
    ],

    selecao: {
      nome: "Itália",
      periodo: { inicio: "1988", fim: "2002" },
      estatisticas: { jogos: 126, gols: 7, assistencias: 0 },
      destaque:
        "Recordista de jogos pela Seleção Italiana por anos (superado por Buffon). Vice-campeão da Copa do Mundo FIFA 1994. Vice-campeão da Eurocopa 2000. 3º lugar na Copa do Mundo FIFA 1990.",
    },

    titulos: [
      // TÍTULOS INDIVIDUAIS
      {
        nome: "Bola de Ouro Dream Team: Melhor Lateral Esquerdo da História",
        logo: "France Football",
        anos: "2020",
        categoria: "individual",
      },
      {
        nome: "3º Lugar na Bola de Ouro da Revista France Football",
        logo: "France Football",
        anos: "1994, 2003",
        categoria: "individual",
      },
      {
        nome: "2º Lugar No FIFA World Player of the Year",
        logo: "FIFA World Player of the Year",
        anos: "1995",
        categoria: "individual",
      },
      {
        nome: "Melhor Defensor da UEFA",
        logo: "UEFA",
        anos: "2007",
        categoria: "individual",
      },
      {
        nome: "Seleção da Copa do Mundo",
        logo: "Copa do Mundo",
        anos: "1994",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Seleção da Eurocopa",
        logo: "UEFA",
        anos: "1988, 1996, 2000",
        categoria: "individual",
      },
      {
        nome: "FIFA 100",
        anos: "2004",
        categoria: "individual",
      },
      {
        nome: "Hall da Fama do Futebol Italiano",
        logo: "Individual",
        anos: "2012",
        categoria: "individual",
      },
      {
        nome: "All-Time World Men's Dream Team",
        logo: "IFFHS",
        anos: "2021",
        categoria: "individual",
      },

      // AC Milan
      {
        nome: "UEFA Champions League",
        anos: "1989, 1990, 1994, 2003, 2007",
        clube: "AC Milan",
      },
      {
        nome: "Campeonato Italiano",
        anos: "1988, 1992, 1993, 1994, 1996, 1999, 2004",
        clube: "AC Milan",
      },
      {
        nome: "Supercopa da UEFA",
        anos: "1989, 1990, 1994, 2003, 2007",
        clube: "AC Milan",
      },
      {
        nome: "Copa Intercontinental",
        anos: "1989, 1990",
        clube: "AC Milan",
      },
      {
        nome: "Supercopa da Itália",
        anos: "1988, 1992, 1993, 1994, 2004",
        clube: "AC Milan",
      },
      {
        nome: "Mundial de Clubes",
        anos: "2007",
        clube: "AC Milan",
      },
      {
        nome: "Copa da Itália",
        anos: "2003",
        clube: "AC Milan",
      },
    ],
    tags: ["One-Club Man", "Il Capitano"],
    ultima_atualizacao: "31/10/2025",
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
        { jogos: 123, gols: 114, assistencias: 25 }
      ),
    ],
    selecao: {
      nome: "Portugal",
      periodo: { inicio: "2003", fim: "atual" },
      estatisticas: { jogos: 217, gols: 135, assistencias: 42 },
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
        nome: "Campeonato Inglês",
        anos: "2007, 2008, 2009",
        clube: "Manchester United",
      },
      {
        nome: "Supercopa da Inglaterra",
        anos: "2007",
        clube: "Manchester United",
      },
      {
        nome: "Copa da Liga Inglesa",
        anos: "2006, 2009",
        clube: "Manchester United",
      },
      { nome: "Copa da Inglaterra", anos: "2004", clube: "Manchester United" },

      // Real Madrid
      {
        nome: "Campeonato Espanhol",
        anos: "2012, 2017",
        clube: "Real Madrid",
      },
      { nome: "Copa do Rei", anos: "2011, 2014", clube: "Real Madrid" },
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
      { nome: "Campeonato Italiano", anos: "2019, 2020", clube: "Juventus" },
      { nome: "Supercopa da Itália", anos: "2018, 2020", clube: "Juventus" },

      // Al-Nassr
      { nome: "Copa dos Campeões Árabes", anos: "2023", clube: "Al-Nassr" },

      // Portugal
      { nome: "Eurocopa", anos: "2016", clube: "Portugal", logoVariavel: true },
      { nome: "UEFA Nations League", anos: "2019", clube: "Portugal" },

      //Individuais
      {
        nome: "Golden Foot Award",
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
        nome: "Melhor jogador do século",
        anos: "Século XXI",
        categoria: "individual",
        logo: "Globe Soccer Awards",
      },
      {
        nome: "Melhor jogador da história",
        anos: "História",
        categoria: "individual",
        logo: "France Football",
      },
      {
        nome: "Jogador com mais gols Internacionais na História",
        categoria: "individual",
        logo: "FIFA",
      },
    ],
    tags: ["Cr7", "Cristiano"],
    ultima_atualizacao: "27/10/25",
  },

  // Eusébio
  {
    nome: "Eusébio",
    background: "gold",
    descricao:
      "Atacante lendário de Moçambique e naturalizado português, considerado um dos maiores goleadores e jogadores da história. Apelidado de 'Pantera Negra', dominou o futebol europeu na década de 1960, sendo o único português a vencer a Bola de Ouro antes de Cristiano Ronaldo e Luís Figo.",
    pagina: "https://pt.wikipedia.org/wiki/Eus%C3%A9bio",
    nacionalidade: "Portugal",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/8/82/Eusebio_%281963_version2%29.jpg",
    numero: "10",
    posicao: "Centroavante",
    dataNascimento: "25/01/1942",
    dataFalecimento: "05/01/2014",
    status: "Aposentado",
    curiosidades:
      "Eusébio foi o primeiro jogador a vencer a Chuteira de Ouro da Copa do Mundo (1966) e a Chuteira de Ouro da Europa. Ele marcou impressionantes 473 gols em 440 jogos oficiais pelo Benfica. O apelido 'Pérola Negra' também era usado para se referir a ele.",

    clubes: [
      createClub(
        "Sporting Lourenço Marques",
        { inicio: "1957", fim: "1960" },
        { jogos: 42, gols: 77, assistencias: 0 }
      ),
      createClub(
        "Benfica",
        { inicio: "1960", fim: "1975" },
        { jogos: 440, gols: 473, assistencias: 0 }
      ),
      createClub(
        "Boston Minutemen",
        { inicio: "1975", fim: "1975" },
        { jogos: 7, gols: 2, assistencias: 0 }
      ),
      createClub(
        "Monterrey",
        { inicio: "1975", fim: "1976" },
        { jogos: 10, gols: 1, assistencias: 0 }
      ),
      createClub(
        "Toronto Metros-Croatia",
        { inicio: "1976", fim: "1976" },
        { jogos: 25, gols: 18, assistencias: 0 }
      ),
      createClub(
        "Beira-Mar",
        { inicio: "1976", fim: "1977" },
        { jogos: 12, gols: 3, assistencias: 0 }
      ),
      createClub(
        "Las Vegas Quiksilver",
        { inicio: "1977", fim: "1977" },
        { jogos: 17, gols: 2, assistencias: 0 }
      ),
      createClub(
        "União de Tomar",
        { inicio: "1977", fim: "1978" },
        { jogos: 12, gols: 3, assistencias: 0 }
      ),
      createClub(
        "New Jersey Americans",
        { inicio: "1978", fim: "1979" },
        { jogos: 4, gols: 5, assistencias: 0 }
      ),
    ],

    selecao: {
      nome: "Portugal",
      periodo: { inicio: "1961", fim: "1973" },
      estatisticas: { jogos: 64, gols: 41, assistencias: 0 },
      destaque: "Terceiro lugar na Copa do Mundo de 1966",
    },

    titulos: [
      // TÍTULOS INDIVIDUAIS
      {
        nome: "Bola de Ouro",
        anos: "1965",
        categoria: "individual",
      },
      {
        nome: "Chuteira de Ouro da Europa",
        logo: "Chuteira de Ouro",
        anos: "1968, 1973",
        categoria: "individual",
      },
      {
        nome: "Chuteira de Ouro da Copa do Mundo",
        logo: "Copa do Mundo",
        anos: "1966",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Artilheiro da Taça dos Campeões Europeus",
        logo: "UEFA Champions League",
        anos: "1965, 1966, 1968",
        categoria: "individual",
      },
      {
        nome: "Artilheiro do Campeonato Português",
        logo: "Campeonato Português",
        anos: "1964, 1965, 1966, 1967, 1968, 1970, 1973",
        categoria: "individual",
      },
      {
        nome: "Futebolista Português do Ano",
        logo: "individual",
        anos: "1970, 1973",
        categoria: "individual",
      },

      // Benfica
      {
        nome: "UEFA Champions League",
        anos: "1962",
        clube: "Benfica",
      },
      {
        nome: "Campeonato Português",
        anos: "1961, 1963, 1964, 1965, 1967, 1968, 1969, 1971, 1972, 1973, 1975",
        clube: "Benfica",
      },
      {
        nome: "Taça de Portugal",
        anos: "1962, 1964, 1969, 1970, 1972",
        clube: "Benfica",
      },

      // Toronto Metros-Croatia
      {
        nome: "Campeão da Liga Norte-Americana",
        anos: "1976",
        clube: "Toronto Metros-Croatia",
      },
    ],
    tags: ["Pantera Negra", "King", "Pérola Negra"],
    ultima_atualizacao: "31/10/2025",
  },

  // João Neves
  {
    nome: "João Neves",
    background: "promise",
    descricao:
      "Meio-campista português de grande energia, notável pela sua capacidade de recuperação de bola, visão de jogo e precisão nos passes curtos. Formado no Benfica, onde conquistou títulos nacionais, teve uma ascensão meteórica que o levou ao Paris Saint-Germain e à Seleção Portuguesa, sendo apontado como um futuro craque do futebol mundial.",
    pagina: "https://www.instagram.com/joao_neves87/",
    nacionalidade: "Portugal",
    imagem:
      "https://sportal365images.com/process/smp-images-production/abola.pt/17092025/0c79a3b3-8c56-48a8-8fbe-ec9b1084b2f0.jpg?operations=scale(860:574)",
    numero: "87",
    posicao: "Meio-Campista - Volante",
    dataNascimento: "27/09/2004",
    status: "Ativo",
    clubes: [
      createClub(
        "Benfica",
        { inicio: "2022", fim: "2024" },
        { jogos: 75, gols: 4, assistencias: 4 }
      ),
      createClub(
        "Paris Saint-Germain",
        { inicio: "2024", fim: "Atual" },
        { jogos: 32, gols: 6, assistencias: 4 }
      ),
    ],
    selecao: {
      nome: "Portugal",
      periodo: { inicio: "2023", fim: "Atual" },
      estatisticas: { jogos: 18, gols: 0, assistencias: 1 },
    },
    titulos: [
      // PSG
      {
        nome: "UEFA Champions League",
        anos: "2025",
        clube: "Paris Saint-Germain",
      },
      {
        nome: "Supercopa da França",
        anos: "2024",
        clube: "Paris Saint-Germain",
      },
      // Seleção
      { nome: "UEFA Nations League", anos: "2025", clube: "Portugal" },
      // Benfica
      { nome: "Campeonato Português", anos: "2023", clube: "Benfica" },
      { nome: "Supertaça de Portugal", anos: "2023", clube: "Benfica" },
      { nome: "UEFA Youth League", anos: "2022", clube: "Benfica" },
      // PSG
      {
        nome: "Supercopa da França",
        anos: "2024",
        clube: "Paris Saint-Germain",
      },
    ],
    tags: [
      "meio-campista",
      "volante",
      "portugal",
      "benfica",
      "psg",
      "jovem talento",
      "Paris Saint-Germain",
    ],
  },

  // Nuno Mendes
  {
    nome: "Nuno Mendes",
    background: "promise",
    descricao:
      "Lateral-esquerdo português conhecido por sua incrível velocidade, capacidade atlética e constante presença no ataque. Desenvolveu-se no Sporting CP, onde foi campeão nacional, antes de se transferir para o Paris Saint-Germain, tornando-se uma peça fundamental na defesa e no ataque da equipe e da seleção portuguesa.",
    pagina: "https://www.instagram.com/nunomendes_5/",
    nacionalidade: "Portugal",
    imagem:
      "https://images2.minutemediacdn.com/image/upload/c_crop,x_0,y_142,w_4000,h_2250/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/GettyImages/mmsport/503/01jg6zwyy0kk8dnnh2vn.jpg",
    numero: "25",
    posicao: "Lateral-Esquerdo",
    dataNascimento: "19/06/2002",
    status: "Ativo",
    clubes: [
      createClub(
        "Sporting CP",
        { inicio: "2020", fim: "2022" },
        { jogos: 47, gols: 1, assistencias: 3 }
      ),
      createClub(
        "Paris Saint-Germain",
        { inicio: "2021", fim: "Atual" },
        { jogos: 85, gols: 4, assistencias: 10 }
      ),
    ],
    selecao: {
      nome: "Portugal",
      periodo: { inicio: "2021", fim: "Atual" },
      estatisticas: { jogos: 39, gols: 1, assistencias: 4 },
    },
    titulos: [
      // PSG (Até Set/2025)
      {
        nome: "UEFA Champions League",
        anos: "2025",
        clube: "Paris Saint-Germain",
      },
      { nome: "Supercopa da UEFA", anos: "2025", clube: "Paris Saint-Germain" },
      {
        nome: "Campeonato Francês",
        anos: "2022, 2023, 2024, 2025",
        clube: "Paris Saint-Germain",
      },
      {
        nome: "Copa da França",
        anos: "2024, 2025",
        clube: "Paris Saint-Germain",
      },
      {
        nome: "Supercopa da França",
        anos: "2022, 2023, 2024",
        clube: "Paris Saint-Germain",
      },
      // Sporting CP
      {
        nome: "Campeonato Português",
        anos: "2021",
        clube: "Sporting CP",
      },
      { nome: "Taça da Liga", anos: "2021, 2022", clube: "Sporting CP" },
      {
        nome: "Supertaça Cândido de Oliveira",
        anos: "2021",
        clube: "Sporting CP",
      },
      // Seleção
      { nome: "UEFA Nations League", anos: "2025", clube: "Portugal" },
    ],
    tags: ["lateral-esquerdo", "portugal", "sporting", "psg", "jovem talento"],
  },

  // Vitinha (Vítor Machado Ferreira)
  {
    nome: "Vitinha",
    background: "default",
    descricao:
      "Meio-campista português talentoso, conhecido pela sua técnica refinada, visão de jogo e capacidade de ditar o ritmo no meio-campo. Peça-chave no Paris Saint-Germain, onde conquistou diversos títulos nacionais e a UEFA Champions League (2025), além de ser um nome regular na Seleção de Portugal.",
    pagina: "https://www.instagram.com/vitinha/",
    nacionalidade: "Portugal",
    imagem:
      "https://s3.eu-west-3.amazonaws.com/ligue1.image/cms/Vitinha_with_PSG_e81b6dce82.jpg",
    numero: "17",
    posicao: "Meio-campista",
    dataNascimento: "13/02/2000",
    status: "Ativo",
    clubes: [
      createClub(
        "Porto B",
        { inicio: "2019", fim: "2020" },
        { jogos: 14, gols: 8, assistencias: 0 }
      ),
      createClub(
        "Porto",
        { inicio: "2019", fim: "2022" },
        { jogos: 59, gols: 4, assistencias: 6 }
      ),
      createClub(
        "Wolverhampton Wanderers",
        { inicio: "2020", fim: "2021" },
        { jogos: 22, gols: 1, assistencias: 1 }
      ),
      createClub(
        "Paris Saint-Germain",
        { inicio: "2022", fim: "Atual" },
        { jogos: 161, gols: 20, assistencias: 13 }
      ),
    ],
    selecao: {
      nome: "Portugal",
      periodo: { inicio: "2022", fim: "Atual" },
      estatisticas: { jogos: 31, gols: 0, assistencias: 3 },
    },
    titulos: [
      // Porto
      { nome: "Campeonato Português", anos: "2020, 2022", clube: "Porto" },
      { nome: "Taça de Portugal", anos: "2020, 2022", clube: "Porto" },
      // Paris Saint-Germain
      {
        nome: "Campeonato Francês",
        anos: "2023, 2024, 2025",
        clube: "Paris Saint-Germain",
      },
      {
        nome: "UEFA Champions League",
        anos: "2025",
        clube: "Paris Saint-Germain",
      },
      {
        nome: "Copa da França",
        anos: "2024, 2025",
        clube: "Paris Saint-Germain",
      },
      { nome: "Supercopa da UEFA", anos: "2025", clube: "Paris Saint-Germain" },
      {
        nome: "Supercopa da França",
        anos: "2022, 2023, 2024",
        clube: "Paris Saint-Germain",
      },
      // Seleção de Portugal
      { nome: "UEFA Nations League", anos: "2025", clube: "Portugal" },
      // Prêmios Individuais Notáveis
      {
        nome: "Melhor Jovem da Liga Portuguesa",
        anos: "2022",
        categoria: "individual",
      },
    ],
    tags: ["meio-campista", "portugal", "psg", "porto", "Paris Saint-Germain"],
  },

  // REPÚBLICA TCHECA -------------------------------------------------------------------------------------------------------------------------------

  // Pavel Nedvěd
  {
    nome: "Pavel Nedvěd",
    background: "diamond",
    descricao:
      "Lendário meio-campista tcheco, conhecido por sua resistência incansável, chutes potentes com os dois pés e cabelo loiro característico. Foi o líder da talentosa geração da República Tcheca no final dos anos 90 e início dos 2000. Venceu a Ballon d'Or em 2003, no auge de sua carreira na Juventus.",
    pagina: "https://pt.wikipedia.org/wiki/Pavel_Nedv%C4%9Bd",
    nacionalidade: "República Tcheca",
    imagem:
      "https://i.pinimg.com/474x/b4/3a/8b/b43a8bddac75e29263b183c47e1e2ec5.jpg",
    numero: "11",
    posicao: "Meio-campista (Meia Esquerda/Meia Ofensivo)",
    dataNascimento: "30/08/1972",
    status: "Aposentado",
    clubes: [
      createClub(
        "Dukla Praga",
        { inicio: "1991", fim: "1992" },
        { jogos: 19, gols: 3 }
      ),
      createClub(
        "Sparta Praga",
        { inicio: "1992", fim: "1996" },
        { jogos: 122, gols: 30 }
      ),
      createClub(
        "Lazio",
        { inicio: "1996", fim: "2001" },
        { jogos: 208, gols: 51 }
      ),
      createClub(
        "Juventus",
        { inicio: "2001", fim: "2009" },
        { jogos: 326, gols: 65 }
      ),
    ],
    selecao: {
      nome: "República Tcheca",
      periodo: { inicio: "1994", fim: "2006" },
      estatisticas: { jogos: 91, gols: 18 },
    },
    titulos: [
      // Individuais
      { nome: "Bola de Ouro", anos: "2003", categoria: "individual" },

      // Juventus
      { nome: "Campeonato Italiano", anos: "2002, 2003", clube: "Juventus" },
      {
        nome: "Supercopa da Itália",
        anos: "2002, 2003",
        clube: "Juventus",
      },
      {
        nome: "Campeonato Italiano (Serie B)",
        anos: "2007",
        clube: "Juventus",
      },

      // Lazio
      {
        nome: "Campeonato Italiano",
        anos: "2000",
        clube: "Lazio",
      },
      { nome: "Recopa Europeia", anos: "1999", clube: "Lazio" },
      { nome: "Supercopa da UEFA", anos: "1999", clube: "Lazio" },
      { nome: "Copa da Itália", anos: "1998, 2000", clube: "Lazio" },
      {
        nome: "Supercopa da Itália",
        anos: "1998, 2000",
        clube: "Lazio",
      },

      // Sparta Praga
      {
        nome: "Campeonato Tcheco",
        anos: "1993, 1994, 1995",
        clube: "Sparta Praga",
      },
      { nome: "Copa da República Tcheca", anos: "1996", clube: "Sparta Praga" },
    ],
    tags: ["Nedved"],
  },

  // Rússia -------------------------------------------------------------------------------------------------------------------------------

  // Lev Yashin
  {
    nome: "Lev Yashin",
    background: "gold",
    descricao:
      "Considerado o maior goleiro de todos os tempos, Yashin era conhecido por sua agilidade, reflexos e estilo de jogo inovador. Apelidado de 'Aranha Negra', ele foi o único goleiro na história a ganhar a Bola de Ouro (1963).",
    pagina: "https://pt.wikipedia.org/wiki/Lev_Yashin",
    nacionalidade: "Rússia",
    imagem:
      "https://assets.brasildefato.com.br/2024/09/image_processing20200201-29235-1o91783-750x530.jpg",
    numero: "1",
    posicao: "Goleiro",
    dataNascimento: "22/10/1929",
    dataFalecimento: "20/03/1990",
    status: "Aposentado",
    ultima_atualizacao: "31/10/25",
    curiosidades:
      "Yashin passou toda a sua carreira de 22 anos (1949-1971) jogando apenas pelo Dínamo Moscou. Estima-se que ele tenha defendido cerca de 150 pênaltis em jogos oficiais e terminado 270 partidas sem sofrer gols (clean sheets).",
    clubes: [
      // Dínamo Moscou
      createClub(
        "Dínamo Moscou",
        { inicio: "1949", fim: "1971" },
        { jogos: 326, gols: 0, clean_sheets: 270 }
      ),
    ],
    selecao: {
      nome: "União Soviética",
      periodo: { inicio: "1954", fim: "1971" },
      estatisticas: { jogos: 78, gols: 0, clean_sheets: 48 },
    },

    // TÍTULOS
    titulos: [
      // TÍTULOS INDIVIDUAIS
      {
        nome: "Bola de Ouro",
        anos: "1963",
        categoria: "individual",
      },
      {
        nome: "Melhor Goleiro do Século XX",
        logo: "FIFA",
        anos: "1998",
        categoria: "individual",
      },
      {
        nome: "Melhor Goleiro Soviético do Ano",
        logo: "individual",
        anos: "1960, 1963, 1966",
        categoria: "individual",
      },
      {
        nome: "Ordem de Lênin",
        anos: "1967",
        categoria: "individual",
      },
      {
        nome: "Dream Team da Bola de Ouro (Goleiro)",
        logo: "France Football",
        anos: "2020",
        categoria: "individual",
      },
      {
        nome: "Equipe do Campeonato Europeu da UEFA",
        logo: "Eurocopa",
        anos: "1960",
        categoria: "individual",
        logoVariavel: true,
      },
      {
        nome: "Equipe do Campeonato Europeu da UEFA",
        logo: "Eurocopa",
        anos: "1964",
        categoria: "individual",
        logoVariavel: true,
      },

      // Dínamo Moscou
      {
        nome: "Campeonato Soviético",
        logo: "Campeonato Russo",
        anos: "1954, 1955, 1957, 1959, 1963",
        clube: "Dínamo Moscou",
      },
      {
        nome: "Copa da URSS",
        logo: "Copa da Rússia",
        anos: "1953, 1967, 1970",
        clube: "Dínamo Moscou",
      },

      // Rússia
      {
        nome: "Jogos Olímpicos",
        anos: "1956",
        clube: "Rússia",
        logoVariavel: true,
      },
      {
        nome: "Eurocopa",
        anos: "1960",
        clube: "Rússia",
        logoVariavel: true,
      },
    ],
    tags: ["Aranha Negra"],
    ultima_atualizacao: "31/10/25",
  },

  // Suécia -------------------------------------------------------------------------------------------------------------------------------

  // Zlatan Ibrahimović
  {
    nome: "Zlatan Ibrahimović",
    background: "diamond",
    descricao:
      "Atacante sueco conhecido por sua personalidade forte, habilidade técnica e gols espetaculares. Ibrahimović é um dos maiores jogadores da história, notável por conquistar ligas nacionais em quatro dos cinco principais países europeus (Holanda, Itália, Espanha e França).",
    pagina: "https://www.instagram.com/iamzlatanibrahimovic/",
    numero: "9",
    posicao: "Atacante",
    dataNascimento: "03/10/1981",
    status: "Aposentado",
    nacionalidade: "Suécia",
    imagem:
      "https://rp-online.de/imgs/32/9/5/0/0/4/1/7/7/tok_2756f3f4788d2bf5d542fcd8f27feb8c/w2100_h1313_x1382_y883_AP_32A2EC00A42791F9-aadde8a1187e0900.jpg",
    ultima_atualizacao: "30/10/25",
    curiosidades:
      "Zlatan é o maior artilheiro da história da Suécia (62 gols) e um dos poucos jogadores a marcar mais de 500 gols na carreira por clubes. Seu gol de bicicleta contra a Inglaterra em 2012 lhe rendeu o Prêmio Puskás.",
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
        "Inter de Milão",
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
      // TÍTULOS INDIVIDUAIS
      {
        nome: "Futebolista Sueco do Ano",
        logo: "individual",
        anos: "2005, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2020",
        categoria: "individual",
      },
      {
        nome: "Prêmio FIFA Ferenc Puskás",
        anos: "2013",
        categoria: "individual",
      },
      {
        nome: "Golden Foot Award",
        anos: "2012",
        categoria: "individual",
      },
      {
        nome: "Melhor Jogador do Campeonato Italiano",
        logo: "Campeonato Italiano",
        anos: "2008, 2009, 2011",
        categoria: "individual",
      },
      {
        nome: "Melhor Jogador da Ligue 1 (UNFP)",
        logo: "UNFP",
        anos: "2013, 2014, 2016",
        categoria: "individual",
      },
      {
        nome: "FIFPro World XI",
        logo: "FIFPro",
        anos: "2013",
        categoria: "individual",
      },
      {
        nome: "Equipe do Ano da UEFA",
        logo: "UEFA",
        anos: "2007, 2009, 2013, 2014",
        categoria: "individual",
      },
      {
        nome: "Troféu Alan Hardaker (MVP da Copa da Liga Inglesa)",
        logo: "Copa da Liga Inglesa",
        anos: "2017",
        categoria: "individual",
      },
      {
        nome: "Equipe Ideal da Ligue 1 (UNFP)",
        logo: "UNFP",
        anos: "2013, 2014, 2015, 2016",
        categoria: "individual",
      },
      {
        nome: "Time da Temporada da UEFA Champions League",
        logo: "UEFA Champions League",
        anos: "2014",
        categoria: "individual",
      },
      {
        nome: "Líder de Assistências da Serie A",
        logo: "Campeonato Italiano",
        anos: "2008, 2011",
        categoria: "individual",
      },
      {
        nome: "Líder de Assistências da Ligue 1",
        logo: "Campeonato Francês",
        anos: "2014",
        categoria: "individual",
      },
      {
        nome: "Melhor Jogador Estrangeiro do Campeonato Italiano",
        logo: "Campeonato Italiano",
        anos: "2005, 2008, 2009, 2011",
        categoria: "individual",
      },

      // Manchester United
      {
        nome: "UEFA Europa League",
        anos: "2017",
        clube: "Manchester United",
        categoria: "coletivo",
      },
      {
        nome: "Copa da Liga Inglesa",
        anos: "2017",
        clube: "Manchester United",
        categoria: "coletivo",
      },
      {
        nome: "Supercopa da Inglaterra",
        anos: "2016",
        clube: "Manchester United",
        categoria: "coletivo",
      },

      // Paris Saint-Germain
      {
        nome: "Campeonato Francês",
        anos: "2013, 2014, 2015, 2016",
        clube: "Paris Saint-Germain",
        categoria: "coletivo",
      },
      {
        nome: "Copa da França",
        anos: "2015, 2016",
        clube: "Paris Saint-Germain",
        categoria: "coletivo",
      },
      {
        nome: "Copa da Liga Francesa",
        anos: "2014, 2015, 2016",
        clube: "Paris Saint-Germain",
        categoria: "coletivo",
      },
      {
        nome: "Supercopa da França",
        anos: "2013, 2014, 2015",
        clube: "Paris Saint-Germain",
        categoria: "coletivo",
      },

      // AC Milan
      {
        nome: "Campeonato Italiano",
        anos: "2011, 2022",
        clube: "AC Milan",
        categoria: "coletivo",
      },
      {
        nome: "Supercopa da Itália",
        anos: "2011",
        clube: "AC Milan",
        categoria: "coletivo",
      },

      // Barcelona
      {
        nome: "Mundial de Clubes",
        anos: "2009",
        clube: "Barcelona",
        categoria: "coletivo",
      },
      {
        nome: "Supercopa da UEFA",
        anos: "2009",
        clube: "Barcelona",
        categoria: "coletivo",
      },
      {
        nome: "Supercopa da Espanha",
        anos: "2009, 2010",
        clube: "Barcelona",
        categoria: "coletivo",
      },
      {
        nome: "Campeonato Espanhol",
        anos: "2010",
        clube: "Barcelona",
        categoria: "coletivo",
      },

      // Inter de Milão
      {
        nome: "Campeonato Italiano",
        anos: "2007, 2008, 2009",
        clube: "Inter de Milão",
        categoria: "coletivo",
      },
      {
        nome: "Supercopa da Itália",
        anos: "2006, 2008",
        clube: "Inter de Milão",
        categoria: "coletivo",
      },

      // Ajax
      {
        nome: "Campeonato Holandês",
        anos: "2002, 2004",
        clube: "Ajax",
        categoria: "coletivo",
      },
      {
        nome: "Copa da Holanda",
        anos: "2002",
        clube: "Ajax",
        categoria: "coletivo",
      },
      {
        nome: "Supercopa da Holanda",
        anos: "2002",
        clube: "Ajax",
        categoria: "coletivo",
      },
    ],
    tags: [
      "Ibra",
      "Ibramovic",
      "Zlatan Ibrahimovic",
      "Ibrahimovic",
      "Zlatan",
      "Ibramovick",
      "Leão",
    ],
  },

  // URUGUAI --------------------------------------------------------------------------------------------------------------------

  // Valverde
  {
    nome: "Valverde",
    background: "titanium",
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
        nome: "Campeonato Espanhol",
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
        nome: "Copa do Rei",
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
