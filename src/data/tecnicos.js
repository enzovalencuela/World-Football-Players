import { createClub } from "@/utils/JogadorUtils";

export const tecnicos = [
  // Pep Guardiola
  {
    background: "Gold",
    nome: "Pep Guardiola",
    nomeCompleto: "Josep Guardiola i Sala",
    nacionalidade: "Espanha",
    dataNascimento: "18/01/1971",
    status: "Ativo",
    pagina: "https://www.instagram.com/pepteam/",
    descricao:
      "Considerado um dos maiores treinadores da história, Guardiola revolucionou o futebol com seu estilo de jogo baseado na posse de bola (tiki-taka) e alta pressão. Multicampeão na Espanha, Alemanha e Inglaterra, ele é o único a conquistar a Tríplice Coroa europeia em dois clubes diferentes.",
    curiosidades:
      "Guardiola foi treinado por Johan Cruyff no Barcelona, de quem absorveu a filosofia de futebol total. Ele conquistou o inédito 'Sextete' (6 títulos em um ano) com o Barcelona em 2009. É conhecido pela intensidade e pela obsessão por detalhes táticos.",
    imagem:
      "https://veja.abril.com.br/wp-content/uploads/2016/09/esporte-futebol-tecnico-guardiola-manchester-city-20160906-02.jpg?crop=1&resize=1212,909",
    influencias: ["Johan Cruyff", "Marcelo Bielsa"],
    clubes: [
      createClub(
        "Barcelona",
        { inicio: "01/07/2008", fim: "30/06/2012" },
        { jogos: 247, vitorias: 179, derrotas: 21 }
      ),
      createClub(
        "Bayern de Munique",
        { inicio: "01/07/2013", fim: "30/06/2016" },
        { jogos: 161, vitorias: 121, derrotas: 21 }
      ),
      createClub(
        "Manchester City",
        { inicio: "01/07/2016", fim: "Presente" },
        { jogos: 456, vitorias: 335, derrotas: 58 }
      ),
    ],
    esquemasTaticos: ["4-3-3", "3-4-3", "4-1-4-1"],
    filosofiaDeJogo:
      "Posse de bola, pressão pós-perda (gegenpressing), jogo posicional e construção a partir da defesa, buscando a superioridade numérica em áreas chave.",
    titulos: [
      {
        nome: "Melhor treinador do ano",
        logo: "Don Balón",
        anos: ["2009", "2010"],
        categoria: "individual",
      },
      {
        nome: "Troféu Miguel Muñoz",
        logo: "Marca",
        anos: ["2009", "2010"],
        categoria: "individual",
      },
      {
        nome: "Treinador do ano",
        logo: "Onze d'Or",
        anos: ["2009", "2011", "2012"],
        categoria: "individual",
      },
      {
        nome: "Melhor treinador do ano",
        logo: "Revista World Soccer",
        anos: ["2009", "2011"],
        categoria: "individual",
      },
      {
        nome: "Melhor treinador do mundo",
        logo: "IFFHS",
        anos: ["2009", "2011", "2023"],
        categoria: "individual",
      },
      {
        nome: "Melhor treinador do mundo",
        logo: "Globe Soccer Awards",
        anos: ["2023"],
        categoria: "individual",
      },
      {
        nome: "Treinador do Ano da FIFA",
        logo: "FIFA",
        anos: ["2011", "2023"],
        categoria: "individual",
      },
      {
        nome: "18º Melhor Treinador de Todos os Tempos",
        logo: "ESPN",
        anos: ["2023"],
        categoria: "individual",
        ranking: 18,
      },
      {
        nome: "5º Melhor Treinador de Todos os Tempos",
        logo: "Revista World Soccer",
        anos: ["2023"],
        categoria: "individual",
        ranking: 5,
      },
      {
        nome: "5º Melhor Treinador de Todos os Tempos",
        logo: "France Football",
        anos: ["2019"],
        categoria: "individual",
        ranking: 5,
      },
      {
        nome: "Treinador do Século XXI",
        logo: "Globe Soccer Awards",
        anos: ["2020"],
        categoria: "individual",
      },
    ],
    tags: ["Pep Guardiola", "Josep Guardiola i Sala", "Guardiola", "Pepe"],
    ultima_atualizacao: "03/12/2025",
  },
];
