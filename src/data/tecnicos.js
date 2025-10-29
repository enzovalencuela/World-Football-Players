import { createClub } from "@/utils/JogadorUtils";

export const tecnicos = [
  // Pep Guardiola
  {
    background: "gold",
    nome: "Pep Guardiola",
    nacionalidade: "Espanha",
    dataNascimento: "18/01/1971",
    status: "Ativo",
    pagina: "https://www.instagram.com/pepteam/",
    influencias: ["Johan Cruyff, Marcelo Bielsa"],
    curiosidades:
      "Considerado um dos maiores técnicos da história, Guardiola revolucionou o futebol com seu estilo de jogo.",
    imagem:
      "https://veja.abril.com.br/wp-content/uploads/2016/09/esporte-futebol-tecnico-guardiola-manchester-city-20160906-02.jpg?crop=1&resize=1212,909",
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
    esquemasTaticos: ["4-3-3, 3-4-3"],
    filosofiaDeJogo:
      "Posse de bola, jogo ofensivo e construção a partir da defesa.",
    titulos: [
      {
        nome: "Campeonato Espanhol",
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
        nome: "Campeonato Inglês",
        anos: "2018, 2019, 2021, 2022, 2023 e 2024",
        clube: "Manchester City",
      },
      {
        nome: "Copa da Liga Inglesa",
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
  },
];
