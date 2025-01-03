function pesquisar() {
  // Obtém a seção onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  let dados = [
    //ALEMANHA--------------------------------------------------------------------------------------------------

    // Draxler
    {
      nome: "Julian Draxler",
      descricao:
        "Meia-atacante alemão conhecido por sua velocidade e habilidade nos dribles, Draxler já atuou por grandes clubes europeus como Schalke 04 e Paris Saint-Germain.",
      pagina: "https://www.instagram.com/draxlerofficial/",
      clube: "Al-Ahli",
      time1: "Al-Ahli",
      time2: "Benfica",
      time3: "PSG",
      time4: "Wolfsburg",
      nacionalidade: "Alemanha",
      tags: "alemanha, Al-Ahli, meia",
      imagem:
        "https://media.gettyimages.com/id/1748702756/pt/foto/doha-qatar-julian-draxler-of-al-ahly-in-action-during-the-expo-stars-league-match-between-al.jpg?s=612x612&w=gi&k=20&c=9cQ8OvLrph6mU_hW4W_D_wDLLuvdrDNzW2U5G0GYP0s=",
      titulos: "Bundesliga, Copa da França, Copa da Alemanha",
      numero: "7",
      posicao: "Meia-atacante",
      dataNascimento: "20/09/1993",
      curiosidades:
        "Draxler foi um dos destaques da seleção alemã na Copa do Mundo de 2014.",
    },

    // Franz Beckenbauer
    {
      nome: "Franz Beckenbauer",
      background: "gold",
      descricao:
        "Considerado um dos maiores defensores de todos os tempos, Franz Beckenbauer, o 'Kaiser', era conhecido por sua elegância em campo, visão de jogo e habilidade com a bola. Sua liderança e títulos conquistados o tornaram um dos maiores ídolos do futebol alemão.",
      pagina: "https://www.instagram.com/franzbeckenbauer/",
      clube: "Aposentado",
      time1: "Bayern_de_Munique",
      time2: "New_York_Cosmos",
      time3: "Hamburg",
      time4: "Golden",
      nacionalidade: "Alemanha",
      tags: "alemanha, zagueiro, gold",
      imagem:
        "https://destaqueregional.jor.br/images/noticias/1767/7a05deec0feab99a37bb0c03a2958c8e.jpeg",
      titulos:
        "Copa do Mundo (1974, 1990) - Alemanha<br>Campeonato Europeu (1972) - Alemanha<br>Copa dos Campeões da Europa (1974, 1975, 1976) - Bayern de Munique<br>Copa Intercontinental (1975, 1976) - Bayern de Munique",
      numero: "5",
      posicao: "Zagueiro",
      dataNascimento: "11/09/1945",
      curiosidades:
        "Beckenbauer foi um dos primeiros zagueiros a jogar com tanta classe e habilidade, sendo comparado a um meio-campista por sua visão de jogo. Ele também foi o primeiro capitão a levantar a Copa do Mundo duas vezes como jogador.",
    },

    // Gerd Müller
    {
      nome: "Gerd Müller",
      background: "gold",
      descricao:
        "Atacante alemão considerado um dos maiores goleadores da história do futebol. Müller era conhecido por sua precisão nos chutes, faro de gol e instinto assassino dentro da área, sendo fundamental para os títulos do Bayern de Munique e da seleção alemã.",
      pagina: "https://www.instagram.com/gerdmullerofficial/", // Verificar se existe um perfil oficial
      clube: "Aposentado",
      time1: "Bayern_de_Munique",
      time2: "Fort_Lauderdale_Strikers",
      time3: "Golden",
      time4: "Golden",
      nacionalidade: "Alemanha",
      tags: "alemanha, atacante, gold",
      imagem:
        "https://lendasdofutebol.com/wp-content/uploads/2021/01/gerd-muller-perfil-optimized.jpg",
      titulos: "Bundesliga, Copa dos Campeões, Copa do Mundo, Chuteira de Ouro",
      numero: "13",
      posicao: "Atacante",
      dataNascimento: "03/11/1945",
      curiosidades: "Müller é o maior artilheiro da história da Bundesliga.",
    },

    // Jerome Boateng
    {
      nome: "Jerome Boateng",
      descricao:
        "Zagueiro alemão conhecido por sua força física, velocidade e habilidade nos passes longos. Atuou por grandes clubes como Bayern de Munique e Lyon.",
      pagina: "https://www.instagram.com/jeromeboateng/",
      clube: "LASK",
      time1: "LASK",
      time2: "Bayern_de_Munique",
      time3: "Manchester_City",
      time4: "Hertha_Berlim",
      nacionalidade: "Alemanha",
      tags: "alemanha, zagueiro",
      imagem:
        "https://media.gettyimages.com/id/624383320/pt/foto/dortmund-germany-j%C3%A9r%C3%B4me-boateng-of-muenchen-gestures-during-the-bundesliga-match-between.jpg?s=612x612&w=gi&k=20&c=IpWjIvjWuZBW7Jk8OBjFlaaUfv01QT5DhDHF63OZnAQ=",
      titulos:
        "Bundesliga (Bayern de Munique)<br>Copa da Alemanha (Bayern de Munique)<br>Liga dos Campeões da UEFA (Bayern de Munique)<br>Mundial de Clubes da FIFA (Bayern de Munique)<br>Supercopa da Alemanha (Bayern de Munique)",
      numero: "17",
      posicao: "Zagueiro",
      dataNascimento: "3/09/1988",
      curiosidades:
        "Boateng é irmão mais novo do ex-jogador Kevin-Prince Boateng e fez parte da seleção alemã campeã da Copa do Mundo de 2014.",
    },

    // Joshua Kimmich
    {
      nome: "Joshua Kimmich",
      descricao:
        "Um dos meio-campistas mais completos do mundo, Kimmich se destaca pela sua versatilidade, técnica e visão de jogo. É considerado um dos sucessores de Philipp Lahm na seleção alemã.",
      pagina: "https://www.instagram.com/jok_32/",
      clube: "Bayern de Munique",
      time1: "Bayern_de_Munique",
      time2: "RB_Leipzig",
      time3: "Vazio",
      time4: "Vazio",
      nacionalidade: "Alemanha",
      tags: "alemanha, bayern munique, meia",
      imagem:
        "https://learning.coachesvoice.com/wp-content/webpc-passthru.php?src=https://learning.coachesvoice.com/wp-content/uploads/2021/06/KimmichMobile.jpg&nocache=1",
      titulos: "Bundesliga, Copa da Alemanha, Liga dos Campeões da UEFA",
      numero: "6",
      posicao: "Meio-campista",
      dataNascimento: "8/2/1995",
      curiosidades:
        "Kimmich começou sua carreira como lateral-direito, mas se adaptou muito bem ao meio-campo.",
    },

    // Jamal Musiala
    {
      nome: "Jamal Musiala",
      descricao:
        "Joia da seleção alemã, Musiala é um meia-atacante com grande potencial e habilidade técnica. Destaca-se pela sua versatilidade e visão de jogo.",
      pagina: "https://www.instagram.com/jamalmusiala10/",
      clube: "Bayern de Munique",
      time1: "Bayern_de_Munique",
      time2: "Vazio",
      time3: "Vazio",
      time4: "Vazio",
      nacionalidade: "Alemanha",
      tags: "alemanha, bayern de munique, meia",
      imagem:
        "https://conteudo.imguol.com.br/c/esporte/15/2024/11/09/musiala-do-bayern-comemora-gol-marcado-sobre-o-st-pauli-pelo-campeonato-alemao-1731172956821_v2_450x600.jpg",
      titulos: "Bundesliga",
      numero: "42",
      posicao: "Meia-atacante",
      dataNascimento: "18/2/2003",
      curiosidades: "Nasceu em Stuttgart, mas representa a seleção alemã.",
    },

    // Lothar Matthäus
    {
      nome: "Lothar Matthäus",
      descricao:
        "Considerado um dos maiores meio-campistas da história, Matthäus foi capitão da seleção alemã campeã mundial em 1990. Conhecido por sua liderança e versatilidade.",
      pagina: "https://www.instagram.com/lotharmatthaus10/",
      clube: "Aposentado",
      time1: "Bayern_de_Munique",
      time2: "Internazionale",
      time3: "Borussia_Mönchengladbach",
      time4: "Vazio",
      nacionalidade: "Alemanha",
      tags: "alemanha, meia",
      imagem:
        "https://lendasdofutebol.com/wp-content/uploads/2021/03/lothar-matthaus-bayern1993-350-x-optimized.jpg",
      titulos: "Bundesliga, Copa da Alemanha, Copa da UEFA, Copa do Mundo",
      numero: "7",
      posicao: "Meio-campista",
      dataNascimento: "21/3/1961",
      curiosidades:
        "Jogou por diversos clubes europeus, como Bayern de Munique, Inter de Milão e Bayern de Munique.",
    },

    // Manuel Neuer
    {
      nome: "Manuel Neuer",
      background: "gold",
      descricao:
        "Considerado um dos melhores goleiros da história, Neuer revolucionou a posição com seu estilo de jogo. Conhecido por sua agilidade e habilidade com os pés.",
      pagina: "https://www.instagram.com/manuelneuer/",
      clube: "Bayern de Munique",
      time1: "Bayern_de_Munique",
      time2: "Schalke_04",
      time3: "Golden",
      time4: "Golden",
      nacionalidade: "Alemanha",
      tags: "alemanha, goleiro, bayern munique",
      imagem:
        "https://livesport-ott-images.ssl.cdn.cra.cz/r900xfq60/fc8c1de6-cc8f-48db-9fa6-08f5925378e8.jpeg",
      titulos:
        "Bundesliga, Copa da Alemanha, Liga dos Campeões da UEFA, Copa do Mundo",
      numero: "1",
      posicao: "Goleiro",
      dataNascimento: "27/3/1986",
      curiosidades:
        "É conhecido como o sweeper-keeper por sua habilidade de jogar como um líbero.",
    },

    // Marco Reus
    {
      nome: "Marco Reus",
      descricao:
        "Considerado um dos maiores jogadores da história do Borussia Dortmund, Reus é conhecido por sua velocidade, dribles e habilidade de finalização. É um dos principais jogadores da seleção alemã.",
      pagina: "https://www.instagram.com/marcinho11/",
      clube: "Los Angeles Galaxy",
      time1: "Los_Angeles_Galaxy",
      time2: "Borussia_Dortmund",
      time3: "Borussia_Mönchengladbach",
      time4: "Rot_Weiss_Ahlen",
      nacionalidade: "Alemanha",
      tags: "futebol, alemanha,  Los Angeles Galaxy, meia",
      imagem:
        "https://conteudo.imguol.com.br/c/esporte/3e/2021/01/16/marco-reus-do-borussia-dortmund-lamenta-apos-perder-penalti-na-partida-contra-o-mainz-1610815970730_v2_450x600.jpg",
      titulos: "Bundesliga, Copa da Alemanha",
      numero: "18",
      posicao: "Meia-atacante",
      dataNascimento: "31/05/1989",
      curiosidades:
        "Reus já foi convocado para diversas Copas do Mundo e Eurocopas, mas por diversas lesões, não conseguiu disputar todas as competições.",
    },

    // Mesut Özil
    {
      nome: "Mesut Özil",
      descricao:
        "Meia criativo com excelente visão de jogo, Özil foi fundamental para o título da Alemanha na Copa do Mundo de 2014. Conhecido por seus passes precisos e dribles elegantes.",
      pagina: "https://www.instagram.com/m10_official/",
      clube: "Aposentado",
      time1: "Fenerbahçe",
      time2: "Arsenal",
      time3: "Real_Madrid",
      time4: "Schalke_04",
      nacionalidade: "Alemanha",
      tags: "alemanha, meia",
      imagem:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Mesut_%C3%96zil_%289881761465%29_Cropped.jpg/640px-Mesut_%C3%96zil_%289881761465%29_Cropped.jpg",
      titulos: "Premier League, Copa da Alemanha, Copa do Mundo",
      numero: "10",
      posicao: "Meia",
      dataNascimento: "15/10/1988",
      curiosidades: "É de origem turca.",
    },

    // Miroslav Klose
    {
      nome: "Miroslav Klose",
      descricao:
        "Lenda do futebol alemão, Klose é um dos maiores artilheiros da história das Copas do Mundo. Conhecido por sua habilidade aérea e faro de gol.",
      pagina: "https://www.instagram.com/miroslav_klose/",
      clube: "Aposentado",
      time4: "Homburg",
      time3: "Werder_Bremen",
      time2: "Bayern_de_Munique",
      time1: "Lazio",
      nacionalidade: "Alemanha",
      tags: "alemanha, atacante",
      imagem:
        "https://media.gettyimages.com/id/450356948/pt/foto/salvador-brazil-miroslav-klose-of-germany-poses-during-the-official-fifa-world-cup-2014.jpg?s=612x612&w=gi&k=20&c=jqgSv1tyZLp6LzvaopNcS-b_hl_0eSw3YWoRrtMwbj8=",
      titulos: "Bundesliga, Copa da Alemanha, Copa da Itália, Copa do Mundo",
      numero: "11",
      posicao: "Atacante",
      dataNascimento: "9/6/1978",
      curiosidades:
        "É o segundo maior artilheiro da história das Copas do Mundo.",
    },

    // Niclas Füllkrug
    {
      nome: "Niclas Füllkrug",
      descricao:
        "Atacante alemão conhecido por sua habilidade nas finalizações e representou a Alemanha na Copa do Mundo de 2022.",
      pagina: "https://www.instagram.com/niclas.fuellkrug24/",
      clube: "West Ham",
      time4: "Nürnberg",
      time3: "Werder_Bremen",
      time2: "Borussia_Dortmund",
      time1: "West_Ham",
      nacionalidade: "Alemanha",
      tags: "alemanha, atacante, fullkrug, fulgrug",
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTURMHI1DTP6QibpELKGZS65QHAkSfQySJWbTgF2foh8QIvQX2xbuLU7vjsuQ-gQJRWNBo&usqp=CAU",
      titulos:
        "Chuteira de Ouro da Bundesliga (2022/2023)<br>Artilheiro da Copa da Alemanha (2021/2022)<br>Melhor jogador jovem da Bundesliga (2011/2012)",
      numero: "11",
      posicao: "Atacante",
      dataNascimento: "09/02/1993",
      curiosidades:
        "Teve uma lesão grave no joelho que o afastou dos gramados, mas conseguiu se recuperar e se tornar um dos principais atacantes da Alemanha.",
    },

    // Oliver Kahn
    {
      nome: "Oliver Kahn",
      background: "plate",
      descricao:
        "Um dos maiores goleiros da história, Kahn era conhecido por sua agressividade e liderança. Ele foi fundamental para a conquista da Copa do Mundo de 2002 pela Alemanha.",
      pagina: "https://www.instagram.com/oliver_kahn/", // (Verificar se existe)
      clube: "Aposentado (2008)",
      time1: "Bayern_de_Munique",
      time2: "Karlsruher",
      time3: "Plate",
      time4: "Plate",
      nacionalidade: "Alemanha",
      tags: "alemanha, goleiro, plate",
      imagem:
        "https://media.gazetadopovo.com.br/2009/03/7e91c42e5eef0231c0abbc40ff1b7362-gpLarge.jpg",
      titulos:
        "Bundesliga (8x) - Bayern de Munique<br> Copa da Alemanha (6x) - Bayern de Munique<br> Liga dos Campeões da UEFA (1x) - Bayern de Munique<br> Copa da UEFA (1x) - Bayern de Munique",
      numero: "1",
      posicao: "Goleiro",
      dataNascimento: "31/06/1969",
      curiosidades:
        "Kahn é conhecido por suas defesas espetaculares e por sua personalidade forte.",
    },

    //Schweinsteiger
    {
      nome: "Schweinsteiger",
      descricao:
        "Meia alemão conhecido por sua visão de jogo, passes precisos e combatividade. Foi campeão mundial em 2014 e um dos principais jogadores do Bayern de Munique por muitos anos.",
      pagina: "https://www.instagram.com/bastianschweinsteiger/",
      clube: "Aposentado",
      time1: "Bayern_de_Munique",
      time2: "Manchester_United",
      time3: "Chicago_Fire",
      time4: "Vazio",
      nacionalidade: "Alemanha",
      tags: "alemanha, meia, Bastian Schweinsteiger",
      imagem:
        "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2016/06/12/1874896-39494913-2560-1440.jpg",
      titulos:
        "Bundesliga, Copa da Alemanha, Liga dos Campeões da UEFA, Copa do Mundo (2014)",
      numero: "31",
      posicao: "Meia",
      dataNascimento: "1 de agosto de 1984",
      curiosidades:
        "Conhecido por sua liderança em campo, Schweinsteiger foi capitão do Bayern de Munique e da seleção alemã. É um dos maiores ídolos da história do Bayern.",
    },

    //Ter Stegen
    {
      nome: "Ter Stegen",
      descricao:
        "Goleiro alemão conhecido por suas defesas difíceis e habilidade com os pés, Ter Stegen foi um dos pilares do Barcelona por muitos anos.",
      pagina: "https://www.instagram.com/mterstegen1/",
      clube: "Barcelona",
      time1: "Barcelona",
      time2: "Borussia_Mönchengladbach",
      time3: "Vazio",
      time4: "Vazio",
      nacionalidade: "Alemanha",
      tags: "alemanha, goleiro, FC Barcelona",
      imagem:
        "https://i.pinimg.com/736x/ca/48/22/ca48220e5fc8f5efdf7c972b842de539.jpg",
      titulos: "La Liga, Copa do Rei",
      numero: "1",
      posicao: "Goleiro",
      dataNascimento: "30/04/1992",
      curiosidades:
        "Ter Stegen iniciou sua carreira no Borussia Mönchengladbach antes de se transferir para o Barcelona.",
    },

    // Thomas Müller
    {
      nome: "Thomas Müller",
      descricao:
        "Conhecido por sua inteligência tática e faro de gol, Müller é um dos maiores artilheiros da história da Bundesliga. É um jogador fundamental na seleção alemã.",
      pagina: "https://www.instagram.com/thomasmueller/",
      clube: "Bayern de Munique",
      time1: "Bayern_de_Munique",
      time2: "Vazio",
      time3: "Vazio",
      time4: "Vazio",
      nacionalidade: "Alemanha",
      tags: "alemanha, bayern munique, atacante",
      imagem:
        "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2014/07/14/04mullerjogadoresgtylaurence-griffiths.jpg",
      titulos:
        "Bundesliga, Copa da Alemanha, Liga dos Campeões da UEFA, Copa do Mundo",
      numero: "25",
      posicao: "Atacante",
      dataNascimento: "13/9/1989",
      curiosidades:
        "Müller é conhecido por sua comemoração característica de deslizar no chão.",
    },

    // Toni Kroos
    {
      nome: "Toni Kroos",
      descricao:
        "Meia alemão conhecido por sua precisão nos passes e visão de jogo, Kroos foi um dos pilares do Real Madrid por muitos anos.",
      pagina: "https://www.instagram.com/toni.kroos/",
      clube: "Aposentado (2024)",
      time1: "Real_Madrid",
      time2: "Bayer_Leverkusen",
      time3: "Bayern_de_Munique",
      time4: "Vazio",
      nacionalidade: "Alemanha",
      tags: "futebol, alemanha, meia",
      imagem:
        "https://cdn-thegame.imago-images.com/wp-content/uploads/imago1045901715h-860x1149.jpg",
      titulos:
        "Bundesliga, Copa da Alemanha, Liga dos Campeões da UEFA, Copa do Mundo",
      numero: "8",
      posicao: "Meia",
      dataNascimento: "04/01/1990",
      curiosidades:
        "Kroos começou sua carreira no Bayern de Munique e foi campeão da Copa do Mundo de 2014 com a Alemanha.",
    },

    //ARGENTINA-------------------------------------------------------------------------------------------------

    //Agustin Rossi
    {
      nome: "Agustin Rossi", // Substitua por seu nome completo se preferir
      descricao:
        "Goleiro argentino conhecido por suas defesas difíceis e segurança sob as traves. Um dos destaques do Flamengo.",
      pagina: "#",
      clube: "Flamengo",
      time1: "Flamengo",
      time2: "Al-Nassr",
      time3: "Boca_Juniors",
      time4: "Chacarita",
      nacionalidade: "Argentina",
      imagem:
        "https://images.flamengo.com.br/public/images/players/1/1710271411.png",
      tags: "Argentina, Flamengo, Agustín Rossi, goleiro",
      numero: "1",
      posicao: "Goleiro",
      titulos: "Campeonato Carioca (2023) <br> Libertadores (2022)",
      dataNascimento: "09/01/1995",
      curiosidades:
        "Chegou ao Flamengo em 2022 e logo se tornou ídolo da torcida. Conhecido por sua liderança e habilidade em cobranças de pênalti.",
    },

    // Alejandro Garnacho
    {
      nome: "Alejandro Garnacho",
      descricao:
        "Um jovem talento que vem se destacando no futebol mundial! Garnacho é conhecido por sua velocidade, dribles e habilidade de finalizar as jogadas. Mesmo sendo muito jovem ele já é considerado uma das maiores promessas do futebol.",
      pagina: "https://www.instagram.com/alejandrogarnacho/",
      clube: "Manchester United",
      time1: "Manchester_United",
      time2: "Vazio",
      time3: "Vazio",
      time4: "Vazio",
      nacionalidade: "Argentina",
      tags: "argentina, atacante, Manchester United",
      imagem:
        "https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2023/10/26/1729330721-00033yz2zr-scaled.jpg",
      titulos: "Copa América, Copa da Inglaterra, FA Youth Cup",
      numero: "17",
      posicao: "Atacante",
      dataNascimento: "01/07/2004",
      curiosidades:
        "Garnacho é um jogador muito versátil, podendo atuar tanto pela esquerda como pela direita. Ele é um grande fã de Cristiano Ronaldo e busca seguir seus passos.",
    },

    // Ángel Di María
    {
      nome: "Ángel Di María",
      background: "plate",
      descricao:
        "Extremo veloz e habilidoso, conhecido por suas arrancadas e cruzamentos precisos. Foi fundamental nas conquistas da Copa do Mundo de 2022 e da Champions League com o Real Madrid.",
      pagina: "https://www.instagram.com/angeldimariajm/",
      clube: "Benfica",
      time1: "Benfica",
      time2: "Juventus",
      time3: "PSG",
      time4: "Real_Madrid",
      nacionalidade: "Argentina",
      tags: "argentina, benfica, ponta direita, plate",
      imagem:
        "https://conteudo.imguol.com.br/c/galeria/0f/2022/12/18/di-maria-celebra-seu-gol-sobre-a-franca-na-final-da-copa-1671379257343_v2_450x600.jpg",
      titulos:
        "Liga 1 (5x) - Paris Saint-Germain <br> Copa da França (4x) - Paris Saint-Germain <br> Copa da Liga Francesa (3x) - Paris Saint-Germain <br> UEFA Champions League (2015/2016) - Real Madrid <br> Copa do Mundo FIFA (2022) - Argentina",
      numero: "11",
      posicao: "Ponta-Direita",
      dataNascimento: "14/02/1988",
      curiosidades:
        "Considerado um dos melhores jogadores argentinos da atualidade, Di María é conhecido por sua versatilidade, atuando tanto por dentro quanto por fora.",
    },

    // Carlos Alcaraz
    {
      nome: "Carlos Alcaraz",
      descricao:
        "Meia argentino com grande técnica e visão de jogo. Chegou ao Flamengo em 2024 e rapidamente se adaptou ao estilo de jogo do time.",
      pagina: "https://www.instagram.com/_alcaraz22/",
      clube: "Flamengo",
      time1: "Flamengo",
      time2: "Juventus",
      time3: "Southampton",
      time4: "Racing",
      nacionalidade: "Argentina",
      imagem:
        "https://odia.ig.com.br/_midias/jpg/2024/09/22/385x420/1_gremio_x_flamengo___campeonato_brasileiro___arena_do_gremio___22_09_2024___macelocortes_nws4026-34081147.jpg",
      tags: "Argentina, Flamengo, Alcaraz, meia, técnica, visão de jogo",
      numero: "8",
      posicao: "Meia",
      titulos: "Campeonato Argentino (2022)", // Adicione os títulos conquistados pelo Alcaraz
      dataNascimento: "22/07/1998",
      curiosidades:
        "Conhecido por sua habilidade em passes longos e visão de jogo, Alcaraz é um dos principais armadores do Flamengo.",
    },

    // Carlos Tevez
    {
      nome: "Carlos Tévez",
      descricao:
        "Considerado um dos maiores atacantes argentinos da sua geração, Carlos Tévez é conhecido por sua força física, dribles e gols decisivos. Tendo jogado por grandes clubes como Boca Juniors, Manchester United e Juventus, conquistou diversos títulos e se tornou um ídolo da torcida.",
      pagina: "https://pt.wikipedia.org/wiki/Carlos_Tévez",
      clube: "Aposentado (2022)",
      time1: "Boca_Juniors",
      time2: "Juventus",
      time3: "Manchester_City",
      time4: "Corinthians",
      nacionalidade: "Argentina",
      tags: "argentina, atacante",
      imagem:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgBvPjh1bPMfnrNr40d1EgnVJcAqJufU_x0ltn5cIIdDSisyq_oVNplviZTXpNd9kw1Lix4d-8hd0VnF-inblh4MYdpDF0MDy_5C19_u-g8-_2qaMgzqNs6eySo66gan88bHPWh6FV0pQ/s1600/tevez+argentina.jpg",
      titulos:
        "Campeonato Argentino (vários) - Boca Juniors<br> Premier League (3x) - Manchester United, Manchester City<br> Serie A (2x) - Juventus<br> Copa Libertadores (2x) - Boca Juniors",
      numero: "32",
      posicao: "Atacante",
      dataNascimento: "05/02/1984",
      curiosidades:
        "Tevez começou sua carreira no Boca Juniors e rapidamente se tornou ídolo da torcida. Sua história de vida, marcada por dificuldades, inspirou muitas pessoas.",
    },

    // Diego Maradona
    {
      nome: "Diego Maradona",
      background: "gold",
      descricao:
        "Considerado um dos maiores jogadores de todos os tempos, Maradona era conhecido por sua habilidade, dribles desconcertantes e visão de jogo. Foi campeão mundial em 1986 com a Argentina.",
      pagina: "https://www.instagram.com/diegoarmandomaradona/", // Verificar se existe
      clube: "Aposentado",
      time1: "Boca_Juniors",
      time2: "Napoli",
      time3: "Barcelona",
      time4: "Argentinos_Juniors",
      nacionalidade: "Argentina",
      tags: "argentina, meia, gold",
      imagem:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Maradona-Mundial_86_con_la_copa.JPG/330px-Maradona-Mundial_86_con_la_copa.JPG",
      titulos:
        "Campeonato Argentino (1976 Metropolitano, 1981 Metropolitano) - Boca Juniors <br> Copa Libertadores da América (1986) - Boca Juniors <br> Copa Intercontinental (1986) - Boca Juniors <br> Serie A (1986/1987, 1989/1990) - Napoli <br> Copa da Itália (1986/1987) - Napoli <br> Copa UEFA (1988/1989) - Napoli <br> Copa do Mundo FIFA (1986) - Argentina",
      numero: "10",
      posicao: "Meia-atacante",
      dataNascimento: "30/10/1960",
      curiosidades:
        "Maradona é um ícone do futebol argentino e mundial, sendo lembrado por seus gols históricos, como o 'Gol do Século' na Copa de 1986.",
    },

    // Enzo Fernández
    {
      nome: "Enzo Fernández",
      descricao:
        "Meio-campista argentino que se destacou no Benfica e na Copa do Mundo de 2022. Conhecido por sua visão de jogo e passes precisos.",
      pagina: "https://www.instagram.com/enzofernandez24/",
      clube: "Chelsea FC",
      time1: "Chelsea",
      time2: "Benfica",
      time3: "Defensa_y_Justicia",
      time4: "River_Plate",
      nacionalidade: "Argentina",
      tags: "argentina, Chelsea, meia",
      imagem: "https://pbs.twimg.com/media/FoEwSiNWQAABDgp.jpg:large",
      titulos:
        "Copa do Mundo FIFA (2022) - Argentina <br>Liga Portuguesa (2022/2023) - Benfica",
      numero: "8",
      posicao: "Meio-campista",
      dataNascimento: "17/1/2001",
      curiosidades:
        "Foi eleito o melhor jovem jogador da Copa do Mundo de 2022.",
    },

    // Germán Cano
    {
      nome: "Germán Cano",
      descricao:
        "Atacante argentino com faro de gol, Cano é conhecido por sua precisão nos finalizações e por ser um verdadeiro artilheiro. Atualmente, é o principal jogador do Fluminense e um dos artilheiros do Campeonato Brasileiro.",
      pagina: "https://www.instagram.com/germancano/",
      clube: "Fluminense",
      time1: "Fluminense",
      time2: "Vasco_da_Gama",
      time3: "Independiente_Medellín",
      time4: "Lanús",
      nacionalidade: "Argentina",
      tags: "fluminense, atacante, argentina",
      imagem:
        "https://conteudo.imguol.com.br/c/esporte/ce/2022/11/05/cano-brilhou-em-fluminense-x-sao-paulo-jogo-do-campeonato-brasileiro-1667683140925_v2_450x600.jpg",
      titulos: "Artilheiro do Brasileirão", // Adaptar conforme os títulos conquistados por Cano
      numero: "14",
      posicao: "Atacante",
      dataNascimento: "02/02/1988",
      curiosidades:
        "Cano já jogou em diversos clubes da América Latina e é conhecido por sua paixão pelo futebol.",
    },

    //Gonzalo Higuaín
    {
      nome: "Gonzalo Higuaín",
      descricao:
        "Atacante argentino conhecido por sua finalização precisa, Higuaín já atuou por grandes clubes como Real Madrid e Juventus.",
      pagina: "https://www.instagram.com/ghiguain9/",
      clube: "Aposentado",
      time1: "Inter_Miami",
      time2: "Juventus",
      time3: "Napoli",
      time4: "Real Madrid",
      nacionalidade: "Argentina",
      tags: "argentina, atacante, higuain",
      imagem:
        "https://i.pinimg.com/736x/9f/45/07/9f4507e6faa726b496586221291608cc.jpg",
      titulos:
        "Serie A (2016/2017, 2018/2019) - Juventus <br>Copa da Itália (2015/2016, 2016/2017) - Juventus <br>Copa del Rey (2010/2011) - Real Madrid",
      numero: "9",
      posicao: "Atacante",
      dataNascimento: "10/12/1987",
      curiosidades:
        "Higuain é conhecido por ter marcado gols importantes em momentos decisivos de sua carreira.",
    },

    // Javier Mascherano
    {
      nome: "Javier Mascherano",
      descricao:
        "Volante de marcação forte e inteligente, Mascherano era conhecido por sua liderança e capacidade de desarmar jogadas. Foi um dos pilares da seleção argentina por muitos anos.",
      pagina: "https://www.instagram.com/javiermascherano/",
      clube: "Aposentado (2020)",
      time1: "Barcelona",
      time2: "Liverpool",
      time3: "Corinthians",
      time4: "River_Plate",
      nacionalidade: "Argentina",
      tags: "futebol, argentina, volante",
      imagem:
        "https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2016/01/21143207/Javier-Mascherano.jpg",
      titulos:
        "La Liga (2009, 2010, 2011, 2013, 2015) - Barcelona <br>Copa del Rey (2009, 2012, 2015, 2016, 2018) - Barcelona <br>UEFA Champions League (2009, 2011, 2015) - Barcelona <br>Copa do Mundo FIFA (2014) - Vice-campeão",
      numero: "14",
      posicao: "Volante",
      dataNascimento: "08/06/1984",
      curiosidades:
        "Mascherano também atuou como zagueiro em algumas oportunidades, mostrando sua versatilidade.",
    },

    // Javier Zanetti
    {
      nome: "Javier Zanetti",
      descricao:
        "Uma lenda do futebol, Zanetti é conhecido por sua lealdade à Internazionale, onde jogou por quase duas décadas. Ele era um exemplo de profissionalismo em campo e um líder nato.",
      pagina: "https://www.instagram.com/javierzanetti/", // Verifique o perfil oficial
      clube: "Aposentado",
      time1: "Internazionale",
      time2: "Banfield",
      time3: "Talleres",
      time4: "Vazio",
      nacionalidade: "Argentina",
      tags: "argentina, zaneti",
      imagem:
        "https://media.gettyimages.com/id/53153161/pt/foto/hanover-germany-javier-zanetti-of-argentina-in-action-during-the-semi-final-match-between-mexico.jpg?s=612x612&w=gi&k=20&c=zsyldwZqNzgeA_Wtv9ilBJA9nqFEopAAAn0324OdCx4=",
      titulos:
        "Serie A, Copa da Itália, Supercopa Italiana, Liga dos Campeões, Copa UEFA",
      numero: "4",
      posicao: "Lateral-direito",
      dataNascimento: "10/08/1973",
      curiosidades:
        "Zanetti foi capitão da Internazionale por muitos anos e é considerado um dos maiores jogadores da história do clube. Ele também jogou pela seleção argentina em diversas Copas do Mundo.",
    },

    // Juan Román Riquelme
    {
      nome: "Juan Riquelme",
      descricao:
        "Meia armador elegante e visionário, Riquelme era conhecido por seus passes precisos e chutes de falta. Foi ídolo do Boca Juniors e da seleção argentina.",
      pagina: "https://www.instagram.com/juanromanriquelme/",
      clube: "Aposentado (2015)",
      time1: "Argentinos_Juniors",
      time2: "Boca_Juniors",
      time3: "Villarreal",
      time4: "Barcelona",
      nacionalidade: "Argentina",
      tags: "argentina, meia",
      imagem:
        "https://images.ecestaticos.com/ONBP-O3SReLBO4HmbItj7pOAFsk=/0x0:991x1605/992x1606/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F796%2Fcc2%2F46f%2F796cc246fab342b516e75a02b8685972.jpg",
      titulos: "Libertadores, Campeonato Argentino",
      numero: "10",
      posicao: "Meia",
      dataNascimento: "24/06/1978",
      curiosidades:
        "Riquelme é considerado um dos maiores ídolos da história do Boca Juniors e um dos melhores meias da sua geração.",
    },

    // Julián Álvarez
    {
      nome: "Julián Álvarez",
      descricao:
        "Atacante jovem e promissor, conhecido por sua versatilidade e finalização precisa. Campeão mundial com a Argentina em 2022, Álvarez tem se destacado no Manchester City.",
      pagina: "https://www.instagram.com/julianalvarez9/",
      clube: "Atlético de Madrid",
      time1: "Atlético_de_Madrid",
      time2: "River_Plate",
      time3: "Manchester_City",
      time4: "Vazio",
      nacionalidade: "Argentina",
      tags: "argentina, Atlético de Madrid, atacante",
      imagem:
        "https://sportsmanbio.com/wp-content/uploads/2024/10/Julian-Alvarez-Atletico-Madrid-jpg.webp",
      titulos: "Copa do Mundo, Premier League",
      numero: "19",
      posicao: "Atacante",
      dataNascimento: "31/01/2000",
      curiosidades:
        "Considerado um dos maiores talentos do futebol argentino, Álvarez é conhecido por sua habilidade de jogar em diversas posições no ataque.",
    },

    //Lionel Messi
    {
      nome: "Lionel Messi",
      background: "gold",
      descricao:
        "Considerado um dos maiores jogadores de futebol de todos os tempos, o argentino Messi é conhecido por sua habilidade excepcional, dribles rápidos, visão de jogo e precisão nos chutes. Após uma brilhante carreira no Barcelona, onde conquistou inúmeros títulos, atualmente defende as cores do Inter Miami.",
      pagina: "https://www.instagram.com/leomessi/",
      clube: "Inter Miami CF",
      time1: "Inter_Miami",
      time2: "PSG",
      time3: "Barcelona",
      time4: "Golden",
      nacionalidade: "Argentina",
      tags: "futebol, argentina, inter miami, gold",
      imagem:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Lionel-Messi-Argentina-2022-FIFA-World-Cup_sharpness.jpg/1200px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_sharpness.jpg",
      titulos:
        "copa do mundo, champions league, UEFA, la liga, copa america, ballon d'or",
      numero: "10",
      posicao: "Atacante",
      dataNascimento: "24/06/1987",
      curiosidades:
        "Messi iniciou sua carreira profissional no Barcelona, onde se tornou um dos maiores ídolos da história do clube.",
    },

    // Paulo Dybala
    {
      nome: "Paulo Dybala",
      descricao:
        "Atacante argentino conhecido por sua habilidade com a bola, chutes precisos e visão de jogo. Ficou mais conhecido pelo seu futebol na Juventus e atualmente joga no Roma.",
      pagina: "https://www.instagram.com/paulodybala/",
      clube: "AS Roma",
      time1: "Roma",
      time2: "Juventus",
      time3: "Palermo",
      time4: "Instituto",
      nacionalidade: "Argentina",
      tags: "futebol, argentina, roma, atacante",
      imagem:
        "https://st.depositphotos.com/58427640/52190/i/450/depositphotos_521908034-stock-photo-paulo-dybala-juventus-portrait-italian.jpg",
      titulos:
        "Serie A (2016/2017, 2019/2020) - Juventus <br> Copa da Itália (2015/2016, 2016/2017) - Juventus <br> Supercopa Italiana (2018) - Juventus",
      numero: "21",
      posicao: "Atacante",
      dataNascimento: "15/11/1993",
      curiosidades:
        "Dybala é conhecido por sua comemoração característica, onde finge usar um relógio. Ele também é um grande fã de música e costuma compartilhar suas playlists com os fãs.",
    },

    // Sergio Agüero
    {
      nome: "Sergio Agüero",
      descricao:
        "Lenda do Manchester City e ídolo da torcida argentina, Agüero era conhecido por sua habilidade de marcar gols importantes. É o maior artilheiro da história do City.",
      pagina: "https://www.instagram.com/kunaguero/",
      clube: "Aposentado (2021)",
      time1: "Barcelona",
      time2: "Manchester_City",
      time3: "Atlético_de_Madrid",
      time4: "Independiente",
      nacionalidade: "Argentina",
      tags: "futebol, argentina, atacante",
      imagem:
        "https://media.gettyimages.com/id/1176148803/pt/foto/manchester-england-sergio-aguero-of-manchester-city-celebrates-after-scoring-his-teams-second.jpg?s=612x612&w=gi&k=20&c=x6LvUh7mYS1zGzO2pmlkOkJ5o--VTfKT1pZTEH1Fc9w=",
      titulos:
        "Premier League (vários títulos) - Manchester City<br>FA Cup (vários títulos) - Manchester City<br>Copa da Liga Inglesa (vários títulos) - Manchester City<br>Premier League (título) - Atlético de Madrid",
      numero: "10",
      posicao: "Atacante",
      dataNascimento: "02/06/1988",
      curiosidades:
        "Agüero é lembrado por seu gol histórico no último minuto contra o Queens Park Rangers, que garantiu o título da Premier League para o Manchester City em 2012.",
    },

    // Zanetti
    {
      nome: "Javier Zanetti",
      background: "plate",
      descricao:
        "Lenda do futebol argentino e ídolo da Internazionale, conhecido por sua versatilidade, liderança e longevidade. Atuou como lateral-direito e capitão por muitos anos.",
      pagina: "https://www.instagram.com/javierzanetti/", // Verificar se o perfil é público
      clube: "Aposentado",
      time1: "Internazionale",
      time2: "Plate",
      time3: "Plate",
      time4: "Plate",
      nacionalidade: "Argentina",
      tags: "argentina, lateral, plate",
      imagem:
        "https://ilmanifesto.it/cdn-cgi/image/format=auto,width=1400/https://static.ilmanifesto.it/2013/08/08/Javier-Zanetti1.jpg", // Substituir por uma imagem do Zanetti
      titulos:
        "Serie A, Copa da Itália, Liga dos Campeões da UEFA, Copa da UEFA, Copa Intercontinental, Copa do Mundo de Clubes",
      numero: "4", // Número mais utilizado por Zanetti
      posicao: "Lateral-direito",
      dataNascimento: "10 de agosto de 1973",
      curiosidades:
        "Considerado um dos maiores laterais da história do futebol, Zanetti é um dos jogadores com mais partidas disputadas pela Internazionale. É conhecido por sua lealdade ao clube e por sua personalidade forte.",
    },

    // BÉLGICA --------------------------------------------------------------------------------------------------

    // Eden Hazard
    {
      nome: "Eden Hazard",
      descricao:
        "Considerado um dos jogadores mais habilidosos de sua geração, Hazard é conhecido por seus dribles desconcertantes e finalizações precisas. Teve destaque no Chelsea e na seleção belga.",
      pagina: "https://www.instagram.com/hazardeden10/",
      clube: "Aposentado (2023)",
      time1: "Real_Madrid",
      time2: "Chelsea",
      time3: "Lille",
      time4: "Vazio",
      nacionalidade: "Bélgica",
      tags: "belgica, bélgica, atacante",
      imagem:
        "https://conteudo.imguol.com.br/c/esporte/4f/2022/12/07/eden-hazard-disputou-seu-ultimo-jogo-pela-belgica-em-partida-contra-a-croacia-na-copa-do-mundo-do-qatar-1670411702623_v2_3x4.jpg", // Trocar por uma imagem do Hazard
      titulos: "Premier League, Europa League",
      numero: "7",
      posicao: "Atacante",
      dataNascimento: "7/1/1991",
      curiosidades:
        "Hazard foi eleito o melhor jogador da Premier League em duas oportunidades e considerado um dos principais candidatos à Bola de Ouro.",
    },

    // Kevin De Bruyne
    {
      nome: "Kevin De Bruyne",
      descricao:
        "Meia armador talentoso e visionário, De Bruyne é conhecido por seus passes precisos, chutes de longa distância e visão de jogo. É um dos principais jogadores do Manchester City.",
      pagina: "https://www.instagram.com/kevindebruyne28/",
      clube: "Manchester City",
      time1: "Manchester_City",
      time2: "Chelsea",
      time3: "Werder_Bremen",
      time4: "Chelsea",
      nacionalidade: "Bélgica",
      tags: "futebol, bélgica, belgica, manchester city, meia",
      imagem:
        "https://s2-ge.glbimg.com/9kJDOob3zGpMZRxxez8jkW6wQ68=/0x0:1415x1757/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/A/3/AXKKLjTPWAY8uL8XARPA/000-3242462.jpg", // Trocar por uma imagem do De Bruyne
      titulos: "Premier League",
      numero: "17",
      posicao: "Meia",
      dataNascimento: "28/06/1991",
      curiosidades:
        "De Bruyne é considerado um dos melhores meias do mundo e um dos principais responsáveis pelo sucesso do Manchester City nos últimos anos.",
    },

    // Romelu Lukaku
    {
      nome: "Romelu Lukaku",
      descricao:
        "Conhecido por sua força física e habilidade de marcar gols, Romelu Lukaku é um dos atacantes mais temidos do futebol mundial. Com uma carreira marcada por passagens por grandes clubes como Chelsea, Manchester United e Inter de Milão, o belga conquistou diversos títulos e se destacou pela sua capacidade de decidir jogos importantes.",
      pagina: "https://pt.wikipedia.org/wiki/Romelu_Lukaku",
      clube: "Napoli",
      time1: "Napoli",
      time2: "Roma",
      time3: "Internazionale",
      time4: "Chelsea",
      nacionalidade: "Bélgica",
      tags: "belgica, bélgica, Napoli, atacante",
      imagem:
        "https://conteudo.imguol.com.br/c/esporte/f1/2022/11/27/lukaku-em-acao-pela-belgica-durante-partida-contra-o-marrocos-na-copa-do-mundo-1669560569630_v2_720x1024.jpg",
      titulos:
        "Premier League (2x) - Chelsea<br> Serie A (1x) - Inter de Milão<br> Copa da Itália (1x) - Inter de Milão",
      numero: "9",
      posicao: "Atacante",
      dataNascimento: "13 de maio de 1993",
      curiosidades:
        "Lukaku começou sua carreira profissional no Anderlecht, na Bélgica. Sua força física e habilidade para finalizar o fizeram se destacar rapidamente nos principais campeonatos europeus.",
    },

    // Thibaut Courtois
    {
      nome: "Thibaut Courtois",
      descricao:
        "Goleiro alto e ágil, Courtois é conhecido por suas defesas difíceis e reflexos rápidos. Atualmente, é um dos melhores goleiros do mundo e defende o Real Madrid.",
      pagina: "https://www.instagram.com/thibautcourtois/",
      clube: "Real Madrid",
      time1: "Real_Madrid",
      time2: "Atlético_de_Madrid",
      time3: "Chelsea",
      time4: "Genk",
      nacionalidade: "Bélgica",
      tags: "bélgica, belgica, real madrid, goleiro",
      imagem:
        "https://africafootunited.com/wp-content/uploads/2024/08/IMG-20240822-WA0018-1-768x949.jpg", // Trocar por uma imagem do Courtois
      titulos: "Premier League, La Liga",
      numero: "1",
      posicao: "Goleiro",
      dataNascimento: "11/05/1992",
      curiosidades:
        "Courtois foi eleito o melhor goleiro da Copa do Mundo de 2018.",
    },

    //BRASIL----------------------------------------------------------------------------------------------------

    // Andreas Pereira
    {
      nome: "Andreas Pereira",
      descricao:
        "Meia talentoso e versátil, Andreas Pereira é conhecido por sua habilidade com a bola, visão de jogo e capacidade de marcar gols. Ele já defendeu grandes clubes como Manchester United e Flamengo.",
      pagina: "https://www.instagram.com/andreaspereira/", // Verifique o perfil oficial
      clube: "Fulham",
      time1: "Fulham",
      time2: "Flamengo",
      time3: "Granada",
      time4: "Manchester_United",
      nacionalidade: "Brasil",
      tags: "futebol, meia, Fulham",
      imagem:
        "https://cdn.vox-cdn.com/thumbor/RQrhCL51jZYIednFEQnHttcnJCA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/25501470/2143714215.jpg",
      titulos:
        "Copa do Brasil (2022), Copa Libertadores da América (2022), Copa da Inglaterra (2015/16)",
      numero: "18",
      posicao: "Meio-campo",
      dataNascimento: "01/01/1996",
      curiosidades:
        "Andreas Pereira teve passagens por diversos clubes por meio de empréstimos, como Granada, Valencia e Lazio.",
    },

    // Adriano Imperador
    {
      nome: "Adriano Imperador",
      descricao:
        "Um dos maiores atacantes brasileiros de sua geração, Adriano era conhecido por sua força física, técnica apurada e gols espetaculares. Ele conquistou títulos importantes com Flamengo e Internazionale de Milão.",
      pagina: "https://www.instagram.com/adrianoimperador/",
      clube: "Aposentado",
      time1: "Flamengo",
      time2: "Internazionale",
      time3: "Roma",
      time4: "São_Paulo",
      nacionalidade: "Brasil",
      tags: "atacante, Brasil",
      imagem: "https://a.espncdn.com/photo/2021/1222/r954331_1296x729_16-9.jpg",
      titulos:
        "Campeonato Brasileiro, Copa do Brasil, Campeonato Italiano, Copa da Itália",
      numero: "9",
      posicao: "Atacante",
      dataNascimento: "17/02/1982",
      curiosidades:
        "Adriano foi um dos principais jogadores da Seleção Brasileira, conquistando títulos importantes como a Copa das Confederações.",
    },

    //Alex Sandro
    {
      nome: "Alex Sandro",
      descricao:
        "Lateral-esquerdo brasileiro com vasta experiência no futebol europeu. Chegou ao Flamengo em 2024 e traz consigo muita experiência e qualidade.",
      pagina: "https://www.instagram.com/alxsndro12/", // Atualize com o link correto
      clube: "Flamengo",
      time1: "Flamengo",
      time2: "Juventus",
      time3: "Porto",
      time4: "Athletico_Paranaense",
      nacionalidade: "Brasil",
      imagem:
        "https://conteudo.imguol.com.br/c/esporte/bf/2024/10/02/alex-sandro-comemora-gol-em-flamengo-x-corinthians-partida-da-copa-do-brasil-1727920868687_v2_3x4.jpg", // Substitua pela imagem do Alex Sandro
      tags: "Brasil, Flamengo, Alex Sandro, lateral-esquerdo",
      numero: "13",
      posicao: "Lateral-esquerdo",
      titulos: "Série A Italiana (vários títulos) <br> Copa América (2019)", // Adicione os títulos conquistados pelo Alex Sandro
      dataNascimento: "26/01/1991",
      curiosidades:
        "Com passagens por Juventus e Seleção Brasileira, Alex Sandro é um dos laterais mais experientes do futebol mundial.",
    },

    // Alisson Becker
    {
      nome: "Alisson Becker",
      descricao:
        "Goleiro brasileiro conhecido por suas defesas espetaculares, reflexos rápidos e tranquilidade sob pressão. É um dos principais goleiros do mundo e fundamental para a conquista da Copa do Mundo de 2019 pela Seleção Brasileira.",
      pagina: "https://www.instagram.com/alissonbecker/",
      clube: "Liverpool FC",
      time1: "Liverpool",
      time2: "Roma",
      time3: "Internacional",
      time4: "Vazio",
      nacionalidade: "Brasil",
      imagem:
        "https://www.gaveanews.com/wp-content/uploads/Alisson-em-acao-com-a-camisa-numero-1-do-Liverpool.jpg",
      tags: "Brasil, Alisson Becker, goleiro, Liverpool",
      numero: "1",
      posicao: "Goleiro",
      titulos:
        "Premier League (2019/2020) - Liverpool <br> UEFA Champions League (2018/2019) - Liverpool <br> Copa América (2019) - Brasil",
      dataNascimento: "02/10/1992",
      curiosidades:
        "Considerado um dos melhores goleiros da atualidade. É conhecido por sua habilidade com os pés e por sua importância para a construção de jogadas do Liverpool.",
    },

    //Antony
    {
      nome: "Antony",
      descricao:
        "Atacante brasileiro conhecido por sua habilidade nos dribles e velocidade, Antony é um dos principais jogadores do Manchester United.",
      pagina: "https://www.instagram.com/antony00/",
      clube: "Manchester United",
      time1: "Manchester_United",
      time2: "Ajax",
      time3: "São_Paulo",
      time4: "Vazio",
      nacionalidade: "Brasil",
      tags: "futebol, brasil, atacante, Manchester United Football Club",
      imagem:
        "https://tntsports.com.br/__export/1668559168377/sites/esporteinterativo/img/2022/10/21/whatsapp_image_2022-10-21_at_14_58_22_1.jpeg_639181608.jpeg",
      titulos: "Eredivisie (2021/2022) - Ajax",
      numero: "21",
      posicao: "Atacante",
      dataNascimento: "22/02/2000",
      curiosidades:
        "Antony se destacou no Ajax antes de se transferir para o Manchester United.",
    },

    //Arthur
    {
      nome: "Arthur",
      descricao:
        "Volante brasileiro conhecido por sua técnica e visão de jogo, Arthur já atuou por grandes clubes como Grêmio e Barcelona.",
      pagina: "https://www.instagram.com/arthurgomes/", // Adaptar para o perfil oficial do jogador
      clube: "Fiorentina",
      time1: "Fiorentina",
      time2: "Juventus",
      time3: "Barcelona",
      time4: "Grêmio",
      nacionalidade: "Brasil",
      tags: "brasil, volante, Fiorentina",
      imagem:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/FC_Zenit_Saint_Petersburg_vs._Juventus%2C_20_October_2021_52_%28Arthur_Melo%29.jpg/640px-FC_Zenit_Saint_Petersburg_vs._Juventus%2C_20_October_2021_52_%28Arthur_Melo%29.jpg",
      titulos:
        "La Liga (2018/2019) - Barcelona <br> Copa do Rei (2018) - Barcelona <br> Copa da Itália (2020) - Juventus <br> Copa do Brasil (2016) - Grêmio <br> Copa Libertadores (2017) - Grêmio",
      numero: "18",
      posicao: "Volante",
      dataNascimento: "12/05/1996",
      curiosidades:
        "Arthur foi um dos destaques do Grêmio na conquista da Libertadores de 2017.",
    },

    // Ayrton Lucas
    {
      nome: "Ayrton Lucas",
      descricao:
        "Lateral-esquerdo brasileiro conhecido por sua velocidade e habilidade nos cruzamentos. Um dos pilares da defesa do Flamengo.",
      pagina: "https://www.instagram.com/ayrtonlucas/",
      clube: "Flamengo",
      time1: "Flamengo",
      time2: "Spartak_Moscou",
      time3: "Londrina",
      time4: "Fluminense",
      nacionalidade: "Brasil",
      imagem:
        "https://i.pinimg.com/originals/c8/96/79/c896795ae03e335e9dd1850de9ee5df4.png",
      tags: "Brasil, Flamengo, Ayrton Lucas, lateral-esquerdo",
      numero: "6",
      posicao: "Lateral-esquerdo",
      titulos:
        "Campeonato Carioca (2023, 2024) <br> Brasileirão (2020) <br> Libertadores (2019, 2022) <br> Copa do Brasil (2022) <br> Supercopa do Brasil (2020, 2021)",
      dataNascimento: "08/05/1998",
      curiosidades:
        "Revelado pelo Fluminense, chegou ao Flamengo em 2020 e rapidamente se consolidou como titular.",
    },

    // Bebeto
    {
      nome: "Bebeto",
      descricao:
        "Lenda do futebol brasileiro, conhecido por sua habilidade, gols importantes e comemorações marcantes, como o 'embala neném'. Foi campeão mundial em 1994.",
      pagina: "http://www.bebetotetra.com.br/",
      clube: "Aposentado",
      time1: "Vitória",
      time2: "Flamengo",
      time3: "Vasco_da_Gama",
      time4: "Deportivo_La_Coruña",
      nacionalidade: "Brasil",
      tags: "brasil, atacante, José Roberto Gama de Oliveira",
      imagem:
        "https://lncimg.lance.com.br/cdn-cgi/image/width=828,quality=75,fit=pad,format=webp/uploads/2016/12/14/5851ada21eb19.jpeg",
      titulos: "Copa do Mundo (1994), Copa América, Campeonato Brasileiro",
      numero: "7",
      posicao: "Atacante",
      dataNascimento: "16/02/1964",
      curiosidades:
        "Criou a famosa comemoração do 'embala neném' após o nascimento de seu filho Mattheus. Foi um dos principais jogadores da Seleção Brasileira nos anos 90.",
    },

    // Bruno Henrique
    {
      nome: "Bruno Henrique",
      descricao:
        "Atacante brasileiro conhecido por sua velocidade, finalização e versatilidade. Um dos principais jogadores do Flamengo titular absoluto.",
      pagina: "https://www.instagram.com/b.henrique/",
      clube: "Flamengo",
      time1: "Flamengo",
      time2: "Santos",
      time3: "Wolfsburg",
      time4: "Goiás",
      nacionalidade: "Brasil",
      imagem:
        "https://res.cloudinary.com/idemo/image/fetch/q_auto:good,f_auto/https://conteudo.imguol.com.br/c/esporte/52/2021/07/25/bruno-henrique-comemora-gol-marcado-pelo-flamengo-1627245296459_v2_3x4.jpg",
      tags: "Brasil, Flamengo, Bruno Henrique, atacante",
      numero: "27",
      posicao: "Atacante",
      titulos:
        "Campeonato Carioca (2019, 2020, 2021, 2023, 2024) <br> Brasileirão (2019, 2020) <br> Libertadores (2019, 2022) <br> Copa do Brasil (2022) <br> Recopa Sul-Americana (2020) <br> Supercopa do Brasil (2020, 2021)",
      dataNascimento: "30/12/1990",
      curiosidades:
        "Chegou ao Flamengo em 2019 e rapidamente se tornou ídolo da torcida.",
    },

    // Caça-Rato
    {
      nome: "Caça Rato",
      descricao:
        "Atacante rápido e habilidoso, Caça-Rato é conhecido por sua agilidade e capacidade de marcar gols. Ele já passou por diversos clubes brasileiros, sempre buscando novas oportunidades.",
      pagina: "https://www.instagram.com/cr7.flavio/",
      clube: "Sete de Setembro",
      time1: "Sete_de_Setembro",
      time2: "Santa_Cruz",
      time3: "Timbauba",
      time4: "Sport",
      nacionalidade: "Brasil",
      tags: "atacante, Brasil",
      imagem:
        "https://fferj.azurewebsites.net/admin/AzureStorage/GetImage?path=2016/4/12/cd232328-abec-4f47-9015-585e40217e36.jpg",
      titulos:
        "Campeonato Pernambucano: 2011, 2012 e 2013, Campeonato Brasileiro - Série C: 2013, Copa Pernambuco: 2012",
      numero: "7",
      posicao: "Atacante",
      dataNascimento: "29/06/1986",
      curiosidades:
        "Caça-Rato é conhecido por sua comemoração característica após marcar um gol.",
    },

    // Cafu
    {
      nome: "Cafu",
      background: "gold",
      descricao:
        "Lendário lateral-direito brasileiro, conhecido por sua energia, velocidade e cruzamentos precisos. Foi um dos principais jogadores da Seleção Brasileira e de grandes clubes europeus.",
      pagina: "https://www.instagram.com/cafuoficial/",
      clube: "Aposentado (2008)",
      time1: "AC_Milan",
      time2: "Roma",
      time3: "Palmeiras",
      time4: "São_Paulo",
      nacionalidade: "Brasil",
      imagem:
        "https://lh4.googleusercontent.com/proxy/pxRBTZDCQLe1ADLqKHx9r1xenBRBP_Y_EO18dbtTFPZuQCamdYASC75XWYbQUit0Dvh6oZxsiyq_u9XBNwln6Msfo168_UkemDnjTGQKwQlezjBipQ",
      tags: "Brasil, Cafu, lateral direito, gold",
      numero: "2",
      posicao: "Lateral-direito",
      titulos:
        "Copa do Mundo (1994, 2002) - Brasil <br> Liga dos Campeões da UEFA (2007) - Milan <br> Campeonato Italiano (2004) - Milan <br> Campeonato Brasileiro (1991, 1992) - São Paulo",
      dataNascimento: "7 de junho de 1970",
      curiosidades:
        "Considerado um dos maiores laterais-direitos da história do futebol. Famoso por sua alegria e positividade dentro e fora de campo.",
    },

    // Carlinhos
    {
      nome: "Carlinhos",
      descricao:
        "Atacante versátil, capaz de atuar por diversas posições no ataque. Conhecido por sua força física e finalizações de média distância.",
      pagina: "https://www.instagram.com/carlinhos_l9/",
      clube: "Flamengo",
      time1: "Flamengo",
      time2: "Nova_Iguaçu",
      time3: "Corinthians",
      time4: "Novorizontino",
      nacionalidade: "Brasil",
      imagem:
        "https://tntsports.com.br/__export/1712606644898/sites/esporteinterativo/img/2024/04/08/carlinhos_marcelo_cortes_crf_-_gkqumcixaaaaovk.jpg_742406227.jpg",
      tags: "Brasil, Flamengo, Carlinhos, atacante",
      numero: "22",
      posicao: "Atacante",
      titulos: "Campeonato Paulista (2022)", // Adicione os títulos conquistados pelo Carlinhos
      dataNascimento: "18/09/1994",
      curiosidades:
        "Chegou ao Flamengo em 2024 e rapidamente se tornou uma peça importante no esquema tático do time.",
    },

    // Carlos Alberto
    {
      nome: "Carlos Alberto",
      background: "plate",
      descricao:
        "Considerado um dos maiores laterais-direitos da história do futebol, Carlos Alberto Torres foi capitão da seleção brasileira campeã da Copa do Mundo de 1970. Conhecido por sua liderança e chute potente, ele marcou um dos gols mais icônicos da história das Copas.",
      pagina:
        "https://www.instagram.com/carlosalbertotorresoficial/  // (Criar caso não exista uma página oficial)",
      clube: "Aposentado (1982)",
      time1: "New_York_Cosmos",
      time2: "Fluminense",
      time3: "Santos",
      time4: "Fluminense",
      nacionalidade: "Brasil",
      tags: "brasil, lateral-direito, plate",
      imagem:
        "https://lendasdofutebol.com/wp-content/uploads/2021/04/carlos-alberto-torres-camisa-do-optimized.jpg",
      titulos:
        "Copa do Mundo de 1970, Campeonato Brasileiro, Taça Libertadores da América",
      numero: "4",
      posicao: "Lateral-direito",
      dataNascimento: "07/01/1944",
      curiosidades:
        "Marcou o gol do título da Copa de 1970, considerado um dos mais bonitos da história das Copas. Após encerrar a carreira como jogador, tornou-se comentarista esportivo.",
    },

    // Casemiro
    {
      nome: "Casemiro",
      descricao:
        "Um dos melhores volantes do mundo, conhecido por sua força física e marcação implacável.",
      pagina: "https://www.instagram.com/casemiro/",
      clube: "Manchester United",
      time1: "Manchester_United",
      time2: "Porto",
      time3: "Real_Madrid",
      time4: "São_Paulo",
      nacionalidade: "Brasil",
      tags: "brasil, manchester united, volante",
      imagem:
        "https://cloudfront-eu-central-1.images.arcpublishing.com/diarioas/PIKOJ4P6O5B33KOGSQL2BDHFXQ.jpg",
      titulos:
        "La Liga (2016/2017, 2017/2018, 2019/2020, 2021/2022) - Real Madrid <br> UEFA Champions League (2015/2016, 2016/2017, 2017/2018, 2018/2019) - Real Madrid <br> Premier League (2022/2023) - Manchester United",
      numero: "18",
      posicao: "Volante",
      dataNascimento: "23/2/1992",
      curiosidades:
        "Começou sua carreira no São Paulo e se tornou um dos volantes mais completos do mundo, conhecido por sua liderança dentro de campo.",
    },

    // Cássio
    {
      nome: "Cássio",
      descricao:
        "Ídolo da torcida corintiana, Cássio é um goleiro experiente e conhecido por suas defesas milagrosas. Recentemente, o jogador foi transferido ao Cruzeiro.",
      pagina: "https://www.instagram.com/cassio/",
      clube: "Cruzeiro",
      time1: "Cruzeiro",
      time2: "Corinthians",
      time3: "PSV_Eindhoven",
      time4: "Grêmio",
      nacionalidade: "Brasil",
      tags: "brasil, cruzeiro, goleiro",
      imagem:
        "https://i.pinimg.com/736x/8a/12/a2/8a12a2fbb94de06eda7d951104f6ebd4.jpg", // Trocar por uma imagem do Cássio
      titulos:
        "Brasileirão <br> Copa Libertadores <br> Copa do Mundo de Clubes <br> Campeonato Paulista",
      numero: "12",
      posicao: "Goleiro",
      dataNascimento: "	6 de junho de 1987",
      curiosidades:
        "Cássio é considerado um dos maiores goleiros da história do Corinthians.",
    },

    // Craque Neto
    {
      nome: "Craque Neto",
      descricao:
        "Ex-jogador de futebol brasileiro, conhecido por sua habilidade com a bola parada e sua paixão pelo Corinthians. Atualmente, é um dos comentaristas esportivos mais populares do Brasil, famoso por suas opiniões fortes e polêmicas sobre o futebol.",
      pagina: "https://www.instagram.com/craquenetooficial/",
      clube: "Aposentado",
      time1: "Corinthians",
      time2: "Cruzeiro",
      time3: "Palmeiras",
      time4: "Vasco_da_Gama",
      nacionalidade: "Brasil",
      tags: "brasil, meia",
      imagem: "https://pbs.twimg.com/media/FyoUpeGXoAETtzq.jpg:large",
      titulos:
        "Campeonato Brasileiro (1x), Campeonato Brasileiro: 1990, Supercopa do Brasil: 1991, Campeonato Paulista: 1997",
      numero: "10",
      posicao: "Meio-campo",
      dataNascimento: "09/09/1966",
      curiosidades:
        "Craque Neto é conhecido por sua grande paixão pelo Corinthians, sendo considerado um dos maiores ídolos da história do clube. Ele também é famoso por suas frases de efeito e por suas discussões acaloradas nos programas esportivos.",
    },

    // Daniel Alves
    {
      nome: "Daniel Alves",
      background: "plate",
      descricao:
        "Lateral-direito conhecido por sua energia e experiência. Um dos maiores vencedores da história do futebol com 42 títulos, ficando apenas atrás de Lionel Messi.",
      pagina: "https://www.instagram.com/danialves/",
      clube: "Aposentado (2023)",
      time1: "Barcelona",
      time2: "São_Paulo",
      time3: "PSG",
      time4: "Juventus",
      nacionalidade: "Brasil",
      tags: "brasil, lateral-direito",
      imagem:
        "https://i.pinimg.com/736x/f3/6d/2b/f36d2b620ba51444445e50f1849e7869.jpg", // Trocar por uma imagem do Daniel Alves
      titulos:
        "La Liga (2009, 2010, 2011, 2013, 2015, 2016) - Barcelona<br>UEFA Champions League: 2008/2009, 2010/2011, 2014/2015 (Barcelona)<br>UEFA Europa League: 2005/2006, 2006/2007 (Sevilla)<br>Copa do Mundo de Clubes da FIFA: 2009, 2011, 2015 (Barcelona)<br>Copa América: 2007, 2019 (Brasil)<br>Jogos Olímpicos: 2020 (Tóquio)",
      numero: "33", // Adaptar para o número atual
      posicao: "Lateral-direito",
      dataNascimento: "06/05/1983",
      curiosidades:
        "Conhecido por suas comemorações animadas e por ter jogado em diversos países, Daniel Alves é um verdadeiro embaixador do futebol brasileiro.",
    },

    // Dante
    {
      nome: "Dante",
      descricao:
        "Zagueiro brasileiro conhecido por sua liderança, força física e bom jogo aéreo. Dante conquistou diversos títulos na Europa, incluindo a Bundesliga pelo Bayern de Munique.",
      pagina: "https://www.instagram.com/dantebonfim/",
      clube: "Nice",
      time1: "Nice",
      time2: "Bayern_de_Munique",
      time3: "Sporting",
      time4: "Wolfsburg",
      nacionalidade: "Brasil",
      tags: "zagueiro, Brasil",
      imagem:
        "https://conteudo.imguol.com.br/c/esporte/b4/2023/11/29/defesa-do-nice-liderada-pelo-brasileiro-dante-nao-sofre-gols-desde-setembro-1701279114528_v2_3x4.jpg",
      titulos: "Bundesliga (4x), Copa da Alemanha (2x), Copa da França (1x)",
      numero: "4",
      posicao: "Zagueiro",
      dataNascimento: "18/03/1983",
      curiosidades:
        "Dante é conhecido por sua liderança dentro de campo e por sua trajetória vitoriosa na Europa. Ele também é um grande fã de música.",
    },

    // David Luiz
    {
      nome: "David Luiz",
      descricao:
        "Zagueiro brasileiro conhecido por sua habilidade com a bola nos pés e liderança em campo. Teve passagens por grandes clubes europeus.",
      pagina: "https://www.instagram.com/davidluiz23/",
      clube: "Flamengo",
      time1: "Flamengo",
      time2: "Chelsea",
      time3: "PSG",
      time4: "Benfica",
      nacionalidade: "Brasil",
      imagem:
        "https://static.wixstatic.com/media/df5c0a_3fa004c4349745bebc4f1bb2caea3291~mv2.jpg/v1/fill/w_540,h_720,al_c,lg_1,q_85,enc_auto/df5c0a_3fa004c4349745bebc4f1bb2caea3291~mv2.jpg",
      tags: "Brasil, Flamengo, David Luiz, zagueiro",
      numero: "23",
      posicao: "Zagueiro",
      titulos:
        "UEFA Champions League (2012) - Chelsea <br> Copa da Inglaterra (2012) - Chelsea <br> Campeonato Francês (2016) - PSG <br> Copa da França (2016) - PSG <br> Campeonato Carioca (2023, 2024) - Flamengo <br> Copa do Brasil (2022) - Flamengo <br> Libertadores (2022) - Flamengo",
      dataNascimento: "22/04/1987",
      curiosidades:
        "Conquistou a Copa do Mundo de 2007 pela Seleção Brasileira Sub-20 <br> Foi eleito o melhor jogador da Copa das Confederações de 2013.",
    },

    // Denilson Show
    {
      nome: "Denilson Show",
      descricao:
        "Ex-jogador de futebol brasileiro, conhecido por sua habilidade com a bola nos pés e sua alegria dentro de campo. Campeão mundial em 2002, Denilson encantou a todos com seus dribles e passes precisos.",
      pagina: "https://www.instagram.com/denilsonshowoficial/",
      clube: "Aposentado",
      time1: "São_Paulo",
      time2: "Real_Betis",
      time3: "Flamengo",
      time4: "Palmeiras",
      nacionalidade: "Brasil",
      tags: "brasil, meia",
      imagem:
        "https://sismf.museudofutebol.org.br/anexos/imagem/557821/w:640/h:640/c:0",
      titulos:
        "Copa do Mundo (2002), Copa América (1997), Copa das Confederações (1997)",
      numero: "17",
      posicao: "Meia-atacante",
      dataNascimento: "24/08/1977",
      curiosidades:
        "Denilson é conhecido por seu apelido 'Show' devido ao seu estilo de jogo alegre e irreverente. Ele também é famoso por seus dribles desconcertantes e por sua participação na campanha vitoriosa da Seleção Brasileira na Copa do Mundo de 2002.",
    },

    // Dida
    {
      nome: "Dida",
      descricao:
        "Lendário goleiro brasileiro, conhecido por suas defesas espetaculares e personalidade marcante. Foi fundamental para os títulos da Seleção Brasileira e do Milan.",
      pagina: "https://www.instagram.com/didaoficial/", // Verificar se o perfil é público e atualizado
      clube: "Aposentado (2012)",
      time1: "Internacional",
      time2: "Corinthians",
      time3: "AC_Milan",
      time4: "Cruzeiro",
      nacionalidade: "Brasil",
      imagem:
        "https://lncimg.lance.com.br/cdn-cgi/image/width=828,quality=75,fit=pad,format=webp/uploads/2018/10/11/5bbf6cc273f47.jpeg",
      tags: "Brasil, Dida, goleiro",
      numero: "1",
      posicao: "Goleiro",
      titulos:
        "Copa do Mundo (2002) - Brasil <br> Liga dos Campeões da UEFA (2003, 2007) - Milan <br> Campeonato Italiano (2004, 2011) - Milan <br> Copa América (1999) - Brasil",
      dataNascimento: "07/10/1973",
      curiosidades:
        "Considerado um dos maiores goleiros brasileiros de todos os tempos. Famoso por suas defesas em pênaltis e por sua liderança dentro de campo.",
    },

    // Diego Alves
    {
      nome: "Diego Alves",
      descricao:
        "Goleiro brasileiro conhecido por suas defesas difíceis e personalidade marcante. Atuou por grandes clubes como Flamengo e Valencia.",
      pagina: "https://www.instagram.com/diegoalves/",
      time: "Sem clube (ex Flamengo)",
      time1: "Flamengo",
      time2: "Valencia",
      time3: "Almería",
      time4: "Atlético_Mineiro",
      nacionalidade: "Brasil",
      tags: "brasil, goleiro",
      imagem:
        "https://conteudo.imguol.com.br/c/esporte/b2/2020/07/08/diego-alves-goleiro-do-flamengo-sinaliza-para-companheiros-durante-final-contra-o-fluminense-1594256515230_v2_3x4.jpg",
      titulos:
        "Campeonato Brasileiro (Flamengo, Valencia)<br>Copa do Brasil (Flamengo)<br>Copa Libertadores da América (Flamengo)",
      numero: "1",
      posicao: "Goleiro",
      dataNascimento: "24/06/1985",
      curiosidades:
        "Diego Alves é considerado um dos maiores ídolos da história recente do Flamengo.",
    },

    //Diego Ribas
    {
      nome: "Diego Ribas",
      descricao:
        "Meia central com grande visão de jogo e habilidade para ditar o ritmo da partida. Conhecido por sua liderança e experiência.",
      pagina: "https://www.instagram.com/diegoribas/",
      clube: "Aposentado (2022)",
      time1: "Flamengo",
      time2: "Fenerbahçe",
      time3: "Atlético_de_Madrid",
      time4: "Werder_Bremen",
      nacionalidade: "Brasil",
      tags: "brasil, meia",
      imagem:
        "https://assets.folhavitoria.com.br/images/b761c840-5598-0137-7b01-6231c35b6685--minified.jpg",
      titulos:
        "Campeonato Brasileiro (2019, 2020) - Flamengo <br>Copa do Brasil (2022) - Flamengo <br> Supercopa do Brasil (2020, 2021) - Flamengo <br> Recopa Sul-Americana (2020) - Flamengo <br> Campeonato Carioca (2019, 2020, 2021) - Flamengo",
      numero: "10",
      posicao: "Meia",
      dataNascimento: "14/02/1985",
      curiosidades:
        "Ídolo do Flamengo, teve passagens por Fenerbahçe, Wolfsburg e Atlético de Madrid. É conhecido por sua elegância e técnica.",
    },

    // Douglas Costa
    {
      nome: "Douglas Costa",
      descricao:
        "Um ponta-direita brasileiro conhecido por sua velocidade, dribles e habilidade de fazer jogadas individuais. Douglas Costa já jogou em grandes clubes europeus e se destacou pela Seleção Brasileira.",
      pagina: "https://www.instagram.com/douglascosta/", // Verifique o perfil oficial
      time1: "Grêmio",
      time2: "Bayern_de_Munique",
      time3: "Juventus",
      time4: "Sydney_FC",
      nacionalidade: "Brasil",
      tags: "brasil, ponta-direita, drible, velocidade",
      imagem:
        "https://www.rbsdirect.com.br/filestore/2/8/2/6/4/0/5_24ef7b27287fa17/5046282_282e133883ec924.jpg?version=1575255600",
      titulos:
        "Campeonato Ucraniano, Copa da Ucrânia, Bundesliga, Copa da Alemanha, Supercopa da Alemanha, Serie A, Copa da Itália",
      numero: "11",
      posicao: "Ponta-direita",
      dataNascimento: "14/09/1990",
      curiosidades:
        "Douglas Costa é conhecido por sua comemoração característica, onde ele imita um avião. Ele também já foi comparado a Robinho pela sua habilidade e estilo de jogo.",
    },

    // Dudu
    {
      nome: "Dudu",
      descricao:
        "Ponta ou meia-atacante brasileiro conhecido por sua habilidade, velocidade e dribles, Dudu é um dos maiores ídolos recentes do Palmeiras. Sua trajetória inclui passagens por grandes clubes brasileiros e internacionais.",
      pagina: "https://www.instagram.com/duduoficial/", // Substituir pela página oficial do Dudu
      clube: "Cruzeiro",
      time1: "Cruzeiro",
      time2: "Palmeiras",
      time3: "Al-Duhail",
      time4: "Dínamo_de_Kiev",
      nacionalidade: "Brasil",
      tags: "brasil, Cruzeiro, ponta, meia",
      imagem:
        "https://conteudo.imguol.com.br/c/esporte/d3/2023/08/28/dudu-do-palmeiras-no-jogo-contra-o-barcelona-equ-pela-libertadores-1693252363826_v2_1x1.jpg",
      titulos: "Campeonato Brasileiro, Copa do Brasil",
      numero: "7",
      posicao: "Ponta / Meia-atacante",
      dataNascimento: "07/01/1992",
      curiosidades:
        "Dudu é um dos maiores artilheiros da história do Palmeiras e já foi convocado para a Seleção Brasileira.",
    },

    // Éder Militão
    {
      nome: "Éder Militão",
      descricao:
        "Zagueiro brasileiro, conhecido por sua velocidade, força física e habilidade nos desarmes. É considerado uma das maiores promessas da defesa mundial.",
      pagina: "https://www.instagram.com/edermilitao/",
      clube: "Real Madrid",
      time1: "Real_Madrid",
      time2: "São_Paulo",
      time3: "Vazio",
      time4: "Vazio",
      nacionalidade: "Brasil",
      tags: "brasil, zagueiro, real madrid",
      imagem:
        "https://es.coachesvoice.com/wp-content/uploads/2019/03/MilitaoMobile.jpg",
      titulos:
        "La Liga (2019/20, 2021/22, 2022/23) - Real Madrid<br>Liga dos Campeões (2021/22, 2022/23) - Real Madrid<br>Supercopa da Espanha (2019/20, 2021/22, 2022/23) - Real Madrid<br>Supercopa da UEFA (2022) - Real Madrid<br>Copa do Mundo de Clubes (2022) - Real Madrid<br>Copa do Rei (2022/23) - Real Madrid<br>Copa América (2019)- Seleção Brasileira",
      numero: "3",
      posicao: "Zagueiro",
      dataNascimento: "18 de janeiro de 1998",
      curiosidades:
        "Revelado pelo São Paulo, Éder Militão chamou a atenção de grandes clubes europeus e foi contratado pelo Real Madrid em 2019.",
    },

    // Ederson
    {
      nome: "Ederson",
      descricao:
        "Goleiro brasileiro, conhecido por suas defesas espetaculares, habilidade com os pés e por ser um dos melhores passadores entre os goleiros. É peça fundamental no esquema de jogo do Manchester City.",
      pagina: "https://www.instagram.com/ederson93/",
      clube: "Manchester City",
      time1: "Manchester_City",
      time2: "Benfica",
      time3: "Vazio",
      time4: "Vazio",
      nacionalidade: "Brasil",
      tags: "brasil, goleiro, manchester city",
      imagem:
        "https://i.pinimg.com/474x/09/72/1a/09721af7435e7ecf2298a0689e558f21.jpg",
      titulos: "Premier League, Copa da Liga Inglesa, FA Cup",
      numero: "31",
      posicao: "Goleiro",
      dataNascimento: "17 de agosto de 1993",
      curiosidades:
        "Além de suas defesas, Ederson é conhecido por iniciar as jogadas do Manchester City com seus passes precisos. Sua habilidade com os pés o torna um jogador único na posição.",
    },

    // Edílson Capetinha
    {
      nome: "Edílson Capetinha",
      descricao:
        "Conhecido por sua habilidade e personalidade marcante, Edílson Capetinha foi um atacante rápido e driblador, que se destacou por seus gols importantes e comemorações exuberantes. Fez parte da Seleção Brasileira campeã mundial em 2002.",
      pagina: "https://www.instagram.com/edilsoncapetinhaoficial/", // Verifique o perfil oficial
      time1: "Palmeiras",
      time2: "Corinthians",
      time3: "Flamengo",
      time4: "Benfica",
      nacionalidade: "Brasil",
      tags: "brasil, atacante, Edilson, Capetinha",
      imagem:
        "https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2014/07/06/edilsongetty.jpg",
      titulos:
        "Copa do Mundo FIFA (2002) - Seleção Brasileira<br>Campeonato Brasileiro (1993) - Palmeiras<br>Campeonato Paulista (1993, 1994) - Palmeiras",
      numero: "7",
      posicao: "Atacante",
      dataNascimento: "17 de setembro de 1970",
      curiosidades:
        "Edílson Capetinha era famoso por suas comemorações irreverentes, como a do 'cavalo', e por suas declarações polêmicas.",
    },

    // Endrick
    {
      nome: "Endrick",
      background: "promise",
      descricao:
        "Joia do futebol brasileiro, Endrick é um atacante veloz e habilidoso, com grande potencial para se tornar um dos maiores jogadores do mundo. Despertou o interesse de grandes clubes europeus.",
      pagina: "https://www.instagram.com/endrickfelder/",
      clube: "Real Madrid",
      time1: "Real_Madrid",
      time2: "Palmeiras",
      time3: "Promise",
      time4: "Promise",
      nacionalidade: "Brasil",
      tags: "brasil, atacante, promise",
      imagem:
        "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/10/endrick-real-madrid-champions-league-e1727895962399.jpg?w=1200&h=1200&crop=1",
      titulos:
        "Campeonato Brasileiro, Supercopa da UEFA: 2024, Copa Intercontinental da FIFA: 2024",
      numero: "16",
      posicao: "Atacante",
      dataNascimento: "21/07/2006",
      curiosidades:
        "Endrick se tornou profissional aos 15 anos e rapidamente se destacou no Palmeiras. Seu futebol chamou a atenção de gigantes europeus, como o Real Madrid, que o contratou ainda muito jovem.",
    },

    // Everton Cebolinha
    {
      nome: "Everton Cebolinha",
      descricao:
        "Ponta-esquerda brasileiro conhecido por sua velocidade e habilidade nos dribles, Cebolinha já atuou por grandes clubes como Grêmio e Benfica.",
      pagina: "https://www.instagram.com/cebolinhaoficial/",
      clube: "Flamengo",
      time1: "Flamengo",
      time2: "Benfica",
      time3: "Grêmio",
      time4: "Vazio",
      nacionalidade: "Brasil",
      tags: "brasil, Flamengo, ponta esquerda",
      imagem:
        "https://a.espncdn.com/photo/2022/0721/r1038740_1296x729_16-9.jpg",
      titulos:
        "Campeonato Carioca (2023, 2024) <br> Libertadores (2022) <br> Copa do Brasil (2022)",
      numero: "11",
      posicao: "Ponta-esquerda",
      dataNascimento: "22/03/1996",
      curiosidades:
        "Cebolinha foi convocado para a Seleção Brasileira e fez parte do elenco que disputou a Copa América de 2019.",
    },

    // Éverton Ribeiro
    {
      nome: "Éverton Ribeiro",
      descricao:
        "Meia brasileiro conhecido por sua visão de jogo, passes precisos e habilidade em cobranças de falta. Já atuou por grandes clubes como Cruzeiro e Flamengo.",
      pagina: "https://www.instagram.com/evertonribeiro/", // Substituir pela página oficial do jogador
      clube: "Bahia",
      time1: "Bahia",
      time2: "Flamengo",
      time3: "Cruzeiro",
      time4: "Corinthians",
      nacionalidade: "Brasil",
      tags: "brasil, Bahia, meia",
      imagem:
        "https://conteudo.imguol.com.br/c/esporte/72/2024/01/24/everton-ribeiro-comemora-primeiro-gol-pelo-bahia-1706143661502_v2_450x600.jpg",
      titulos:
        "Brasileirão <br> Copa do Brasil <br> Campeonato Carioca <br> Copa Libertadores <br> Recopa Sul-Americana",
      numero: "7",
      posicao: "Meia",
      dataNascimento: "10/04/1989",
      curiosidades:
        "Éverton Ribeiro foi eleito o melhor jogador do Campeonato Brasileiro por duas vezes consecutivas, em 2013 e 2014, quando jogava pelo Cruzeiro.",
    },

    // Fabrício Bruno
    {
      nome: "Fabrício Bruno",
      descricao:
        "Zagueiro brasileiro conhecido por sua força física e bom posicionamento em campo, Fabrício Bruno se destacou no Flamengo e conquistou diversos títulos.",
      pagina: "https://www.instagram.com/fabriciobrunoo/", // Verificar o perfil oficial
      clube: "Flamengo",
      time1: "Flamengo",
      time2: "Red_Bull_Bragantino",
      time3: "Chapecoense",
      time4: "Cruzeiro",
      nacionalidade: "Brasil",
      tags: "brasil, Flamengo, zagueiro",
      imagem:
        "https://static.gazetaesportiva.com/uploads/Flamengo-Fabricio-Bruno.png",
      titulos:
        "Campeonato Brasileiro, Copa do Brasil, Libertadores da América, Campeonato Carioca",
      numero: "15",
      posicao: "Zagueiro",
      dataNascimento: "12/02/1996",
      curiosidades:
        "Fabrício Bruno iniciou sua carreira nas categorias de base do Cruzeiro e foi convocado para a Seleção Brasileira.",
    },

    // Fagner
    {
      nome: "Fagner",
      descricao:
        "Lateral-direito brasileiro, conhecido por sua versatilidade e cruzamentos precisos. Fagner é um dos principais jogadores do Corinthians e já defendeu a Seleção Brasileira. Destaca-se por sua força física e marcação rigorosa.",
      pagina: "https://www.instagram.com/fagner/",
      clube: "Corinthians",
      time1: "Corinthians",
      time2: "Vasco_da_Gama",
      time3: "Wolfsburg",
      time4: "PSV_Eindhoven",
      nacionalidade: "Brasil",
      tags: "brasil, lateral direito, Corinthians, Fagner",
      imagem:
        "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/10/04/571455842-whatsapp-image-2023-10-04-at-153515.jpeg",
      titulos:
        "Campeonato Brasileiro (2015, 2017) - Corinthians<br>Campeonato Paulista (2017, 2018, 2019) - Corinthians",
      numero: "23",
      posicao: "Lateral-direito",
      dataNascimento: "11 de junho de 1989",
      curiosidades:
        "Fagner é um dos jogadores com mais partidas disputadas pelo Corinthians na história recente. Ele é conhecido por sua identificação com o clube e pela torcida.",
    },

    // Fernandinho
    {
      nome: "Fernandinho",
      descricao:
        "Volante brasileiro conhecido por sua versatilidade e capacidade de marcação, Fernandinho se destacou no Shakhtar Donetsk e Manchester City, atualmente joga no Athletico-PR.",
      pagina: "https://www.instagram.com/fernandinho/",
      time: "Athletico Paranaense",
      nacionalidade: "Brasil",
      tags: "futebol, brasil, Club Athletico Paranaense, volante",
      imagem:
        "https://conteudo.imguol.com.br/c/esporte/43/2018/10/20/fernandinho-comemora-gol-durante-manchester-city-x-burnley-neste-sabado-1540051315426_v2_450x600.jpg",
      titulos:
        "Premier League (2013/14, 2017/18, 2018/19, 2020/21, 2021/22) - Manchester City<br>FA Cup (2019) - Manchester City<br>Copa da Liga Inglesa (2014, 2016, 2018, 2019, 2020, 2021) - Manchester City<br>UEFA Cup: 1 vez - Shakhtar Donetsk<br>Copa América (2019) - Seleção Brasileira",
      numero: "5",
      posicao: "Volante",
      dataNascimento: "04/05/1985",
      curiosidades:
        "Fernandinho foi peça fundamental nas conquistas do Manchester City nas últimas temporadas.",
    },

    // Filipe Luís
    {
      nome: "Filipe Luís",
      descricao:
        "Lateral-esquerdo brasileiro conhecido por sua experiência e qualidade defensiva. Foi um dos principais jogadores do Atlético de Madrid e do Chelsea.",
      pagina: "https://www.instagram.com/filipeluis/",
      time: "Aposentado (2023)",
      nacionalidade: "Brasil",
      imagem:
        "https://media.gettyimages.com/id/1148766587/pt/foto/porto-alegre-brazil-filipe-luis-of-brazil-controls-the-ball-during-the-international-friendly.jpg?s=612x612&w=gi&k=20&c=ChNTgB3M5x8MaaaerHnNqWn7Isbw2PwgRKYtQf82GxY=",
      tags: "Brasil, Filipe Luis, lateral-esquerdo",
      numero: "6",
      posicao: "Lateral-esquerdo",
      titulos:
        "La Liga (2013/2014) - Atlético de Madrid <br> Liga dos Campeões da UEFA (2014/2015) - Chelsea <br> Copa América (2019) - Brasil <br>Liga Europa (2011/2012, 2017/2018) - Atlético de Madrid <br> Libertadores (2019, 2022) - Flamengo <br> Supercopa da Espanha (2012, 2013) - Atlético de Madrid",
      dataNascimento: "09/08/1985",
      curiosidades:
        "Conhecido por sua liderança dentro de campo. Atualmente é técnico do time principal do Flamengo",
    },

    // Gabriel Barbosa
    {
      nome: "Gabriel Barbosa",
      descricao:
        "Atacante brasileiro conhecido por sua finalização e habilidade, artilheiro em diversas competições, ganhando o apelido de Gabigol. Ídolo do time.",
      pagina: "https://www.instagram.com/gabigol/",
      time: "Flamengo (não renovou contrado)",
      nacionalidade: "Brasil",
      imagem:
        "https://static1.purepeople.com.br/articles/8/39/18/68/@/4483993-gabriel-barbosa-se-consagrou-no-flamengo-580x0-2.jpg",
      tags: "Brasil,Gabigol, artilheiro",
      numero: "99",
      posicao: "Atacante",
      titulos:
        "Campeonato Carioca (2019, 2020, 2021, 2024) <br> Brasileirão (2019, 2020) <br> Libertadores (2019, 2022) <br> Copa do Brasil (2022) <br> Recopa Sul-Americana (2020) <br> Supercopa do Brasil (2020, 2021)",
      dataNascimento: "30/08/1996",
      curiosidades:
        "Artilheiro da Libertadores de 2019 <br> Ídolo da torcida do Flamengo",
    },

    // Gabriel Jesus
    {
      nome: "Gabriel Jesus",
      descricao:
        "Atacante brasileiro conhecido por sua velocidade, dribles e finalizações precisas, Gabriel Jesus se destacou no Palmeiras e Manchester City e atualmente joga no Asenal.",
      pagina: "https://www.instagram.com/gabrieljesus/",
      time: "Arsenal FC",
      nacionalidade: "Brasil",
      tags: "brasil, atacante, arsenal",
      imagem:
        "https://conteudo.imguol.com.br/c/esporte/69/2019/07/07/gabriel-jesus-comemora-gol-da-selecao-brasileira-na-final-da-copa-america-2019-no-maracana-rj-1562533448865_v2_3x4.jpg",
      titulos:
        "Premier League (2017/18, 2018/19, 2020/21, 2021/22) - Manchester City<br>FA Cup (2019) - Manchester City<br>Copa da Liga Inglesa (2018, 2019, 2020, 2021) - Manchester City<br>Copa América (2019) - Seleção Brasileira<br>Jogos Olímpicos (2016) - Seleção Brasileira",
      numero: "9",
      posicao: "Atacante",
      dataNascimento: "03/04/1997",
      curiosidades:
        "Gabriel Jesus fez parte da seleção brasileira campeã olímpica em 2016.",
    },

    // Gabriel Menino
    {
      nome: "Gabriel Menino",
      descricao:
        "Meia versátil e com muita energia, Gabriel Menino é conhecido por sua força física e capacidade de marcar gols. É uma das grandes promessas do futebol brasileiro.",
      pagina: "https://www.instagram.com/gabrielmenino/",
      time: "Palmeiras",
      nacionalidade: "Brasil",
      tags: "brasil, palmeiras, meia",
      imagem:
        "https://conteudo.imguol.com.br/c/esporte/b7/2022/07/24/gabriel-menino-comemora-gol-marcado-com-a-camisa-do-palmeiras-no-duelo-contra-o-inter-valido-pelo-campeonato-brasileiro-1658696245714_v2_450x600.jpg", // Trocar por uma imagem do Gabriel Menino
      titulos: "Brasileirão br Copa do Brasil br Libertadores", // Adaptar conforme os títulos conquistados por Gabriel
      numero: "25", // Adaptar ao número atual da camisa
      posicao: "Meia",
      dataNascimento: "29/09/2000",
      curiosidades:
        "Gabriel Menino começou sua carreira nas categorias de base do Palmeiras e já foi convocado para a Seleção Brasileira.",
    },

    // Garrincha
    {
      nome: "Garrincha",
      background: "gold",
      descricao:
        "Considerado um dos maiores gênios do futebol, Garrincha era famoso por seus dribles desconcertantes e sua alegria dentro de campo. Sua habilidade era tão grande que compensava suas pernas tortas, que o tornaram ainda mais especial.",
      pagina:
        "https://www.transfermarkt.com.br/mane-garrincha/profil/spieler/151263",
      clube: "Aposentado (1972)",
      time1: "Flamengo",
      time2: "Portuguesa_Santista",
      time3: "Corinthians",
      time4: "Botafogo",
      nacionalidade: "Brasil",
      tags: "futebol, brasil, ponta direita, atacante, gold",
      imagem:
        "https://media.gettyimages.com/id/639617883/pt/foto/brazilian-soccer-legend-garrincha-from-botafogo.jpg?s=612x612&w=gi&k=20&c=pPL3wZwTAyPiG9yX39hcRxdzyxnrtk8h9TxL46wO9EI=",
      titulos:
        "Copa do Mundo (1958 e 1962) - Seleção Brasileira<br>Copa Roca (1957, 1960 e 1963) - Seleção Brasileira<br>Campeonato Carioca (1957, 1961 e 1962) - Botafogo<br>Torneio Rio-São Paulo (1962, 1964 e 1966) - Botafogo",
      numero: "7",
      posicao: "Ponta-direita",
      dataNascimento: "28/10/1933",
      curiosidades:
        "Garrincha nasceu com uma deformidade nas pernas, mas isso não o impediu de se tornar um dos maiores jogadores da história. Ele era conhecido por sua vida simples e alegre, e sua história é um exemplo de superação.",
    },

    // Gerson Santos da Silva
    {
      nome: "Gerson",
      descricao:
        "Meia brasileiro conhecido por sua força física, desarmes e passes precisos. Um dos pilares do meio-campo do Flamengo que completa o time.",
      pagina: "https://www.instagram.com/gersonsantoss/",
      time: "Flamengo",
      nacionalidade: "Brasil",
      imagem:
        "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/08/GettyImages-1496527295-e1692115533923.jpg?w=1200&h=1200&crop=1",
      tags: "Brasil, Flamengo, Gerson, volante",
      numero: "8",
      posicao: "Volante",
      titulos:
        "Campeonato Carioca (2019, 2020, 2021, 2023, 2024) <br> Brasileirão (2019, 2020) <br> Libertadores (2019, 2022) <br> Copa do Brasil (2022) <br> Recopa Sul-Americana (2020) <br> Supercopa do Brasil (2020, 2021)",
      dataNascimento: "20/05/1997",
      curiosidades:
        "Ficou conhecido por sua garra e ficou apelidado de coringa do time.",
    },

    // Gilberto Silva
    {
      nome: "Gilberto Silva",
      descricao:
        "Um dos maiores volantes de sua geração, Gilberto Silva era conhecido por sua força física, marcação implacável e visão de jogo. Ele foi fundamental para a conquista da Copa do Mundo de 2002 pela Seleção Brasileira.",
      pagina: "https://www.instagram.com/gilbertosilvaoficial/", // Verifique o perfil oficial
      time1: "Cruzeiro",
      time2: "Atlético_Mineiro",
      time3: "Arsenal",
      time4: "Panathinaikos",
      nacionalidade: "Brasil",
      tags: "volante, Brasil",
      imagem:
        "https://media.gettyimages.com/id/102416694/pt/foto/durban-south-africa-gilberto-silva-of-brazil-in-action-during-the-2010-fifa-world-cup-south.jpg?s=612x612&w=gi&k=20&c=Kb7Ahtpo6C4BbOG1SMFGtCFe-U5OHgK9Trc1B3Xe94I=",
      titulos:
        "Premier League, Copa da Inglaterra, Copa da França, Copa do Brasil, Campeonato Mineiro",
      numero: "8",
      posicao: "Volante",
      dataNascimento: "07/10/1976",
      curiosidades:
        "Gilberto Silva foi apelidado de 'Indestrutível' por sua força física e resistência em campo.",
    },

    // Gustavo Scarpa
    {
      nome: "Gustavo Scarpa",
      descricao:
        "Meia talentoso e elegante, Gustavo Scarpa é conhecido por sua visão de jogo e passes precisos. Atualmente, é um dos principais jogadores do Atlético Mineiro.",
      pagina: "https://www.instagram.com/gustavoscarpa/", // Verificar o perfil oficial
      time: "Atlético-MG",
      nacionalidade: "Brasil",
      tags: "brasil, atletico mineiro, meia",
      imagem:
        "https://conteudo.imguol.com.br/c/esporte/fa/2023/12/29/montagem-de-gustavo-scarpa-com-a-camisa-do-atletico-mg-divulgada-pelo-clube-1703871050362_v2_1x1.jpg", // Trocar por uma imagem do Gustavo Scarpa
      titulos: "Brasileirão, Copa do Brasil", // Adaptar conforme os títulos conquistados
      numero: "6",
      posicao: "Meia",
      dataNascimento: "05/01/1994",
      curiosidades:
        "Gustavo Scarpa começou sua carreira no Fluminense e já jogou em clubes como Palmeiras e Nottingham Forest.",
    },

    // Hernanes
    {
      nome: "Hernanes",
      descricao:
        "Conhecido como 'O Profeta', Hernanes é um meio-campista brasileiro com grande habilidade técnica. Destaca-se por seus passes precisos, chutes de longa distância e visão de jogo. Atuou em diversos clubes importantes do Brasil e da Europa.",
      pagina: "https://www.instagram.com/hernanes/", // Verifique o perfil oficial
      time1: "São_Paulo",
      time2: "Internazionale",
      time3: "Juventus",
      time4: "Hebei_Fortune",
      nacionalidade: "Brasil",
      tags: "brasil, meia, Hernanes",
      imagem:
        "https://media.gettyimages.com/id/450748026/photo/sao-paulo-brazil-hernanes-of-brazil-in-action-during-the-2014-fifa-world-cup-brazil-group-a.jpg?s=612x612&w=gi&k=20&c=0J6kpRUwWKu9JdSjzLW3t1qS9ogk7mrKuT3o554zsOg=",
      titulos:
        "Campeonato Brasileiro (2008) - São Paulo<br>Copa Itália (2010) - Inter de Milão<br>Campeonato Italiano (2011-2012) - Juventus",
      numero: "8",
      posicao: "Meio-campista",
      dataNascimento: "29 de maio de 1985",
      curiosidades:
        "Hernanes é conhecido por sua fé religiosa e por ter escrito um livro chamado 'Carta do Profeta'. Ele também é formado em Engenharia Civil.",
    },

    // Hulk
    {
      nome: "Hulk",
      descricao:
        "Atacante forte e rápido, Hulk é conhecido por seus dribles potentes e chutes poderosos. Atualmente, é um dos principais jogadores do futebol brasileiro.",
      pagina: "https://www.instagram.com/hulkparaiba/",
      time: "Atlético-MG",
      nacionalidade: "Brasil",
      tags: "brasil, atletico mineiro, atacante",
      imagem:
        "https://conteudo.imguol.com.br/c/esporte/93/2023/01/27/hulk-do-atletico-mg-em-partida-contra-a-caldense-pelo-campeonato-mineiro-1674821833447_v2_450x600.jpg", // Trocar por uma imagem do Hulk
      titulos: "Brasileirão br Copa do Brasil br Campeonato Mineiro",
      numero: "7",
      posicao: "Atacante",
      dataNascimento: "25/07/1986",
      curiosidades:
        "Hulk já jogou em grandes clubes europeus como Porto e Zenit, e é conhecido por sua força física e habilidade para marcar gols.",
    },

    // Júlio César
    {
      nome: "Júlio César",
      descricao:
        "Um dos maiores goleiros brasileiros de todos os tempos, Júlio César era conhecido por suas defesas espetaculares, liderança e tranquilidade. Ele foi fundamental para a conquista de diversos títulos com o Flamengo e a Internazionale de Milão.",
      pagina: "https://www.instagram.com/juliocesaroficial/", // Verifique o perfil oficial
      time1: "Flamengo",
      time2: "Internazionale",
      time3: "Queens_Park_Rangers",
      time4: "Benfica",
      nacionalidade: "Brasil",
      tags: "goleiro, Brasil, julio cesar",
      imagem:
        "https://static.gazetaesportiva.com/uploads/imagem/2018/01/29/JC-Djalma.jpg",
      titulos:
        "Campeonato Brasileiro, Copa do Brasil, Campeonato Italiano, Copa da Itália, Liga dos Campeões",
      numero: "12",
      posicao: "Goleiro",
      dataNascimento: "03/09/1979",
      curiosidades: "Júlio César foi eleito o melhor goleiro do mundo em 2012.",
    },

    // Juninho Pernambucano
    {
      nome: "Juninho Pernambucano",
      descricao:
        "Um dos maiores meio-campistas da história do futebol, conhecido mundialmente por suas cobranças de falta perfeitas. Foi ídolo em clubes como Vasco da Gama e Olympique Lyonnais.",
      pagina: "https://www.instagram.com/juninhopeoficial/",
      time: "Aposentado (2013)",
      nacionalidade: "Brasil",
      tags: "meio-campo, Brasil",
      imagem:
        "https://i.pinimg.com/236x/4c/4b/25/4c4b253b879bd143f66969763ebadefb.jpg",
      titulos:
        "Campeonato Brasileiro (2x) - Vasco da Gama<br>Campeonato Francês (7x) - Lyon<br>Copa da França (6x) - Lyon<br>Copa da Liga Francesa (1x) - Lyon",
      numero: "8",
      posicao: "Meio-campo",
      dataNascimento: "30 de janeiro de 1975",
      curiosidades:
        "Juninho Pernambucano é considerado um dos maiores especialistas em cobranças de falta da história do futebol. Sua técnica e precisão nas cobranças eram impressionantes. Ele também foi um dos líderes do time do Lyon que dominou o futebol francês por muitos anos.",
    },

    //Kaká
    {
      nome: "Kaká",
      background: "plate",
      descricao:
        "Um dos maiores meio-campistas da história do futebol, conhecido por sua técnica apurada, visão de jogo e passes precisos. Venceu a Bola de Ouro e a Copa do Mundo, além de ter brilhado em grandes clubes como Milan e Real Madrid.",
      pagina: "http://www.kakaww.com/",
      clube: "Aposentado (2017)",
      time1: "Orlando_City",
      time2: "São_Paulo",
      time3: "Real_Madrid",
      time4: "AC_Milan",
      nacionalidade: "Brasil",
      tags: "brasil, meia, plate",
      imagem:
        "https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2013/11/23/kaka-comemora-rt.JPG", // Trocar por uma imagem do Kaká
      titulos:
        "Liga dos Campeões da UEFA (2006/2007) - Milan<br>Mundial de Clubes da FIFA (2007) - Milan<br>Supercopa da UEFA (2003, 2007) - Milan<br>Copa do Mundo (2002) - Seleção Brasileira<br>Copa das Confederações (2005, 2009) - Seleção Brasileira",
      numero: "22",
      posicao: "Meia",
      dataNascimento: "22/04/1982",
      curiosidades:
        "Kaká é conhecido por sua fé cristã e por seu trabalho filantrópico. Ele também foi o último brasileiro à ganhar a Bola de Ouro.",
    },

    //Léo Ortiz
    {
      nome: "Léo Ortiz",
      descricao:
        "Zagueiro brasileiro conhecido por sua técnica e visão de jogo. Chegou ao Flamengo em 2024 e já se destaca pela sua qualidade.",
      pagina: "https://www.instagram.com/leortiz33/",
      time: "Flamengo",
      nacionalidade: "Brasil",
      imagem:
        "https://conteudo.imguol.com.br/c/esporte/85/2024/04/11/leo-ortiz-durante-a-vitoria-do-flamengo-sobre-o-palestino-na-libertadores-1712809854387_v2_450x600.jpg",
      tags: "Brasil, Flamengo, Léo Ortiz, zagueiro",
      numero: "4",
      posicao: "Zagueiro",
      titulos: "Sem títulos pelo Flamengo", // Adicione os títulos conquistados pelo Léo Ortiz no Flamengo (se houver)
      dataNascimento: "11/01/1997", // Verifique a data de nascimento correta
      curiosidades:
        "Antes do Flamengo, se destacou no Red Bull Bragantino, formando uma dupla de zaga sólida com Fabrício Bruno.",
    },

    // Léo Pereira
    {
      nome: "Leonardo Pereira",
      descricao:
        "Zagueiro brasileiro conhecido por sua força física e bom posicionamento defensivo. Um dos pilares da defesa do Flamengo.",
      pagina: "https://www.instagram.com/leopereira4/",
      time: "Flamengo",
      nacionalidade: "Brasil",
      imagem:
        "https://images.flamengo.com.br/public/images/players/2/1710271857.png",
      tags: "Brasil, Flamengo, Léo Pereira, zagueiro",
      numero: "4",
      posicao: "Zagueiro",
      titulos:
        "Campeonato Carioca (2020, 2021, 2023, 2024) <br> Brasileirão (2020) <br> Libertadores (2019, 2022) <br> Copa do Brasil (2022) <br> Supercopa do Brasil (2020, 2021)",
      dataNascimento: "05/01/1998",
      curiosidades:
        "Revelado pelo Athletico Paranaense, chegou ao Flamengo em 2019 e rapidamente se consolidou como titular.",
    },

    // Lincoln
    {
      nome: "Lincoln",
      descricao:
        "Atacante promissor, conhecido por sua velocidade e habilidade nos dribles. Lincoln é considerado uma das maiores promessas do futebol brasileiro.",
      pagina: "https://www.instagram.com/lincolnoficial/", // Verificar o perfil oficial
      time: "SC Rheindorf Altach",
      nacionalidade: "Brasil",
      tags: "futebol, brasil, atacante, SC Rheindorf Altach",
      imagem:
        "https://www.bundesliga.at/_next/image?url=https%3A%2F%2Foefbl-production-bucket-public.s3.eu-central-1.amazonaws.com%2Fcraft-cms-oefbl%2FProfile%2FSpieler%2F66270.jpg%3Ftimestamp%3D1731409444132&w=1920&q=75",
      titulos:
        "Copa São Paulo de Futebol Júnior (Flamengo)<br>Campeonato Brasileiro Sub-20 (Flamengo)<br>Campeonato Carioca Sub-20 (Flamengo)<br>Torneio Otávio Pinto Guimarães (Flamengo)",
      numero: "10",
      posicao: "Atacante",
      dataNascimento: "05/05/2000",
      curiosidades:
        "Lincoln foi revelado nas categorias de base do Flamengo e já recebeu diversas convocações para as seleções de base.",
    },

    //Lucas Moura
    {
      nome: "Lucas Moura",
      descricao:
        "Meia-atacante brasileiro conhecido por sua velocidade e habilidade nos dribles, Lucas Moura já atuou por grandes clubes como São Paulo, Paris Saint-Germain e Tottenham.",
      pagina: "https://www.instagram.com/lucasmoura/",
      time: "São Paulo FC",
      nacionalidade: "Brasil",
      tags: "futebol, brasil, meia-atacante",
      imagem:
        "https://conteudo.imguol.com.br/c/esporte/d1/2023/02/06/lucas-moura-esta-no-tottenham-desde-janeiro-de-2018-1675718802147_v2_450x600.jpg",
      titulos:
        "Ligue 1 (Paris Saint-Germain) x4 <br> Copa da França (Paris Saint-Germain) x3 <br> Copa da Liga Francesa (Paris Saint-Germain) x4 <br> Trophée des Champions (Paris Saint-Germain) x4 <br> Supercopa do Brasil (São Paulo)",
      numero: "7",
      posicao: "Meia-atacante",
      dataNascimento: "13/08/1992",
      curiosidades:
        "Lucas Moura é conhecido por ter marcado três gols na final da Champions League de 2019 pelo Tottenham.",
    },

    // Lúcio
    {
      nome: "Lúcio",
      descricao:
        "Considerado um dos maiores zagueiros da história do futebol brasileiro, Lúcio era conhecido por sua força física, liderança e excelente jogo aéreo. Tendo atuado por grandes clubes como Bayer Leverkusen, Bayern de Munique e Inter de Milão, conquistou diversos títulos e se tornou um dos principais jogadores da Seleção Brasileira.",
      pagina: "https://pt.wikipedia.org/wiki/Lúcio_(futebolista)",
      time: "Aposentado (2020)",
      nacionalidade: "Brasil",
      tags: "brasil, zagueiro",
      imagem:
        "https://s2.glbimg.com/_7aal7kSC2Pnb04XJAdGWdxW3h0=/186x0:541x469/300x397/s.glbimg.com/es/ge/f/original/2010/06/29/lucio_get620.jpg",
      titulos:
        "Bundesliga (5x) - Bayern de Munique<br> Copa da Alemanha (4x) - Bayern de Munique<br> Copa da Itália (1x) - Inter de Milão<br> Copa do Mundo (2002) - Brasil",
      numero: "4",
      posicao: "Zagueiro",
      dataNascimento: "08/05/1978",
      curiosidades:
        "Lúcio era conhecido por sua liderança dentro de campo e sua capacidade de organizar a defesa. Ele foi um dos pilares da Seleção Brasileira campeã mundial em 2002.",
    },

    // Luiz Araújo
    {
      nome: "Luiz Araújo",
      descricao:
        "Atacante rápido e habilidoso, conhecido por seus dribles e finalizações precisas. Uma das principais armas do ataque do Flamengo.",
      pagina: "#",
      time: "Flamengo",
      nacionalidade: "Brasil",
      imagem:
        "https://conteudo.imguol.com.br/c/esporte/c5/2024/06/13/luiz-araujo-e-wesley-comemoram-gol-marcado-pelo-flamengo-contra-o-gremio-pelo-brasileirao-1718325992042_v2_3x4.jpg",
      tags: "Brasil, Flamengo, Luiz Araújo, atacante",
      numero: "7",
      posicao: "Atacante",
      titulos: "Campeonato Brasileiro (2023)", // Adicione os títulos conquistados pelo Luiz Araújo
      dataNascimento: "02/06/1996",
      curiosidades:
        "Com passagens por clubes europeus, Luiz Araújo traz experiência internacional para o Flamengo.",
    },

    //Marcelo
    {
      nome: "Marcelo",
      background: "plate",
      descricao:
        "Lateral-esquerdo habilidoso e ofensivo, Marcelo é considerado um dos maiores laterais da história do futebol. Famoso por seus dribles, cruzamentos e visão de jogo, ele conquistou diversos títulos pelo Real Madrid e pela Seleção Brasileira.",
      pagina: "https://www.instagram.com/marceloviieira/", // Verificar o perfil oficial
      time: "Sem Clube",
      time1: "Fluminense",
      time2: "Olympiacos",
      time3: "Real_Madrid",
      time4: "Plate",
      nacionalidade: "Brasil",
      tags: "brasil, lateral esquerdo, plate",
      imagem:
        "https://i.pinimg.com/736x/9f/d5/87/9fd587b97780c61629ec5933895a43db.jpg", // Trocar por uma imagem do Marcelo
      titulos:
        "La Liga, Champions League, Copa do Mundo de Clubes, Copa América",
      numero: "12", // Adaptar ao número atual da camisa
      posicao: "Lateral-esquerdo",
      dataNascimento: "12/05/1988",
      curiosidades:
        "Marcelo começou sua carreira no Fluminense e é considerado um dos maiores ídolos da história do Real Madrid.",
    },

    // Marquinhos
    {
      nome: "Marquinhos",
      nomeCompleto: "Marcos Aoás Corrêa",
      descricao:
        "Um zagueiro sólido e elegante, conhecido por sua liderança e habilidade no jogo aéreo. Marquinhos é peça fundamental da defesa do Paris Saint-Germain e da Seleção Brasileira.",
      pagina: "https://www.instagram.com/marquinhosm5/",
      time: "Paris Saint-Germain",
      nacionalidade: "Brasil",
      tags: "futebol, brasil, psg, zagueiro, seleção brasileira, Paris Saint-Germain",
      imagem:
        "https://conteudo.imguol.com.br/c/esporte/32/2024/02/19/marquinhos-joga-no-paris-saint-germain-desde-2013-e-tem-mais-4-anos-de-contrato-1708370727790_v2_3x4.jpg", // Trocar por uma imagem do Marquinhos
      titulos: "Ligue 1, Copa da França, Supercopa da França", // Adaptar com os títulos conquistados
      numero: "5",
      posicao: "Zagueiro",
      dataNascimento: "14/05/1994",
      curiosidades:
        "Marquinhos começou sua carreira no Corinthians e, aos 18 anos, já estava na Europa. Ele é conhecido por sua calma e concentração em campo, além de ser um ótimo cobrador de faltas.",
    },

    //Miranda
    {
      nome: "Miranda",
      descricao:
        "Zagueiro brasileiro conhecido por sua liderança e experiência, Miranda já defendeu grandes clubes como Atlético de Madrid e Internazionale, além da Seleção Brasileira.",
      pagina: "https://www.instagram.com/mirandaoficial/", // Adaptar para o perfil oficial do jogador
      time: "Aposentado (2023)",
      nacionalidade: "Brasil",
      tags: "futebol, brasil, zagueiro",
      imagem:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Miranda_850_1585.jpg/640px-20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Miranda_850_1585.jpg",
      titulos:
        "La Liga (2013/2014) - Atlético de Madrid<br>Copa do Rei (2012/2013) - Atlético de Madrid<br>Supercopa da Espanha(2014/2015) - Atlético de Madrid<br>Copa América (2019) - Seleção Brasileira<br>Copa das Confederações (2009) - Seleção Brasileira",
      numero: "4", // Adaptar para o número da camisa
      posicao: "Zagueiro",
      dataNascimento: "07/08/1984",
      curiosidades:
        "Miranda foi um dos pilares da defesa da Seleção Brasileira campeã da Copa das Confederações de 2013.",
    },

    // Marinho
    {
      nome: "Marinho",
      nomeCompleto: "Mário Sérgio Santos Costa",
      descricao:
        "Atacante veloz e habilidoso, conhecido por seus dribles e gols decisivos. Marinho se destacou no Santos e conquistou a torcida com sua alegria e carisma.",
      pagina: "https://www.instagram.com/marinhooficial/", // Verificar perfil oficial
      time: " Fortaleza Esporte Clube",
      nacionalidade: "Brasil",
      tags: "futebol, brasil, atacante",
      imagem:
        "https://conteudo.imguol.com.br/c/esporte/7b/2021/01/17/marinho-do-santos-durante-partida-contra-o-botafogo-pelo-campeonato-brasileiro-1610920567202_v2_450x600.jpg", // Substituir por uma imagem do Marinho
      titulos: "Campeonato Paulista",
      numero: "11",
      posicao: "Atacante",
      dataNascimento: "29/05/1990",
      curiosidades:
        "Marinho é conhecido por sua comemoração característica, onde ele simula um avião. Ele também é um grande fã de pagode.",
    },

    //Matheus Cunha
    {
      nome: "Matheus Cunha",
      descricao:
        "Goleiro brasileiro, jovem promessa das categorias de base do Flamengo. Destaca-se por suas reflexões e agilidade.",
      pagina: "https://www.instagram.com/matheuscunha_01/",
      time: "Flamengo",
      nacionalidade: "Brasil",
      imagem:
        "https://images.flamengo.com.br/public/images/players/1/1710271566.png",
      tags: "Brasil, Flamengo, Matheus Cunha, goleiro, base",
      numero: "30",
      posicao: "Goleiro",
      titulos: "Campeonato Carioca Sub-20 (2023)", // Adicione os títulos conquistados pelo Matheus Cunha
      dataNascimento: "15/03/2004", // Verifique a data de nascimento correta
      curiosidades:
        "Considerado uma das maiores promessas do futebol brasileiro na posição. Já defendeu a Seleção Brasileira de base.",
    },

    // Matheus Gonçalves
    {
      nome: "Matheus Gonçalves",
      descricao:
        "Meia brasileiro com grande potencial, conhecido por sua habilidade nos dribles e visão de jogo. Uma das maiores promessas das categorias de base do Flamengo.",
      pagina: "https://www.instagram.com/oficialm10_/",
      time: "Flamengo",
      nacionalidade: "Brasil",
      imagem:
        "https://s2-ge.glbimg.com/Us7cCi69LTiaZR7vzIKXuTzaMp0=/0x0:1125x1388/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/o/O/EWqDSpQzqUWvQCfoZlgg/whatsapp-image-2024-04-07-at-21.55.55.jpeg",
      tags: "Brasil, Flamengo, Matheus Gonçalves, meia",
      numero: "10",
      posicao: "Meia",
      titulos: "Campeonato Brasileiro Sub-20 (2023)", // Adicione os títulos conquistados pelo Matheus Gonçalves
      dataNascimento: "15/03/2004",
      curiosidades:
        "Revelado nas categorias de base do Flamengo, Matheus Gonçalves já é considerado um dos principais talentos do futebol brasileiro.",
    },

    //Neymar Júnior
    {
      nome: "Neymar Júnior",
      background: "plate",
      descricao:
        "Considerado um dos melhores jogadores de futebol do mundo, Neymar Jr. é famoso por seus dribles rápidos e habilidade em cobranças de faltas. Iniciou sua carreira no Santos FC e, após brilhar no Barcelona, atualmente defende as cores do Al-Hilal.",
      pagina: "https://www.instagram.com/neymarjr/",
      clube: "Al-Hilal",
      time1: "Al-Hilal",
      time2: "PSG",
      time3: "Barcelona",
      time4: "Santos",
      nacionalidade: "Brasil",
      tags: "brasil, al hilal, ponta esquerda, Neymar Jr, plate",
      imagem:
        "https://cdn.esbrasil.com.br/wp-content/uploads/2024/09/6d2nqshw9lodueisju2k2bwyl.jpg",
      titulos:
        "Liga dos Campeões da UEFA (2014) - Barcelona<br> Mundial de Clubes da FIFA (2015) - Barcelona<br> La Liga (2014-2016) - Barcelona<br> Ligue 1 (2017-2022) -PSG <br> Olimpíadas (2016) - Seleção Brasileira<br> Copa das Confederações (2013) - Seleção Brasileira",
      numero: "10",
      posicao: "Ponta Esquerda",
      dataNascimento: "05/02/1992",
      curiosidades:
        "Neymar Jr. é conhecido por sua paixão pelo futebol desde criança. Ele começou a jogar nas ruas de São Paulo e logo chamou a atenção de olheiros.",
    },

    //Paulinho
    {
      nome: "Paulinho",
      descricao:
        "Volante brasileiro conhecido por sua força física e habilidade na marcação, Paulinho já atuou por grandes clubes como Corinthians e Tottenham, além da Seleção Brasileira.",
      pagina: "https://www.instagram.com/paulinho/", // Adaptar para o perfil oficial do jogador
      time: "Aposentado (2024)",
      nacionalidade: "Brasil",
      tags: "futebol, brasil, volante",
      imagem:
        "https://lncimg.lance.com.br/cdn-cgi/image/width=828,quality=75,fit=pad,format=webp/uploads/2018/06/27/5b340c97edaab.png",
      titulos:
        "La Liga (2017/2018) - Barcelona<br>Copa do Rei: (2017/2018) - Barcelona<br> Copa das Confederações (2013) - Seleção Brasileira<br>Copa Libertadores da América (2012) - Corinthians<br>Copa do Mundo de Clubes da FIFA (2012) - Corinthians",
      numero: "15", // Adaptar para o número da camisa
      posicao: "Volante",
      dataNascimento: "25/07/1988",
      curiosidades:
        "Paulinho foi um dos destaques da Seleção Brasileira na Copa do Mundo de 2018.",
    },

    // Pedro Guilherme
    {
      nome: "Pedro",
      descricao:
        "Atacante brasileiro conhecido por sua força física e finalização precisa. Fundamental nos títulos recentes do Flamengo, jogador decisivo.",
      pagina: "https://www.instagram.com/pedroguilherme/",
      time: "Flamengo",
      nacionalidade: "Brasil",
      imagem:
        "https://images.flamengo.com.br/public/images/players/7/1710273487.png",
      tags: "Brasil, Flamengo, Pedro, centroavante",
      numero: "9",
      posicao: "Centroavante",
      titulos:
        "Campeonato Carioca (2020, 2021, 2023, 2024) <br> Brasileirão (2020) <br> Libertadores (2022) <br> Copa do Brasil (2022) <br> Supercopa do Brasil (2020, 2021)",
      dataNascimento: "20/06/1997",
      curiosidades: "Revelado pelo Fluminense, ídolo da torcida rubro-negra.",
    },

    //Pelé
    {
      nome: "Pelé",
      background: "gold",
      descricao:
        "Considerado o maior jogador de futebol de todos os tempos, Pelé era conhecido por sua habilidade incrível com a bola, dribles mágicos e muitos gols. Ele conquistou o mundo com seu futebol e é um símbolo do esporte.",
      pagina: "https://www.instagram.com/pele/", // Página oficial (caso exista)
      clube: "Aposentado (1977)",
      time1: "Santos",
      time2: "New_York_Cosmos",
      time3: "Golden",
      time4: "Golden",
      nacionalidade: "Brasil",
      tags: "brasil, atacante, gold",
      imagem:
        "https://upload.wikimedia.org/wikipedia/commons/5/5e/Pele_con_brasil_%28cropped%29.jpg",
      titulos:
        "Campeonato Brasileiro (1961, 1962, 1963, 1964, 1965, 1968) - Santos FC<br>Copa Libertadores da América (1962, 1963) - Santos FC<br>Copa Intercontinental (1962, 1963) - Santos FC<br>Copa do Mundo (1958, 1962, 1970) - Seleção Brasleira",
      numero: "10",
      posicao: "Atacante",
      dataNascimento: "23/10/1940",
      imgMarca: "Coroa-Dourada",
      curiosidades:
        "Pelé marcou mais de mil gols na carreira e é o único jogador a conquistar três Copas do Mundo.",
    },

    // Philippe Coutinho
    {
      nome: "Philippe Coutinho",
      descricao:
        "Meia-atacante talentoso e habilidoso, Coutinho é conhecido por seus dribles, chutes de longa distância e visão de jogo. Atualmente, joga no Vasco da Gama.",
      pagina: "https://www.instagram.com/philcoutinho/", // Verificar o perfil oficial
      time: "Vasco da Gama",
      nacionalidade: "Brasil",
      tags: "brasil, vasco, meia",
      imagem:
        "https://conteudo.imguol.com.br/c/esporte/6e/2024/07/21/philippe-coutinho-jogador-do-vasco-durante-partida-contra-o-atletico-mg-na-arena-mrv-1721595034327_v2_3x4.jpg",
      titulos: "Campeão da Copa da Inglaterra",
      numero: "11",
      posicao: "Meia-atacante",
      dataNascimento: "12/06/1992",
      curiosidades:
        "Coutinho começou sua carreira no Vasco da Gama e já jogou em grandes clubes como Liverpool e Barcelona.",
    },

    // Rafinha
    {
      nome: "Rafinha",
      descricao:
        "Rafinha, é um futebolista brasileiro que atua como lateral-direito. Atualmente joga no São Paulo, onde é capitão. Em 2019, entrou para a seleta lista de futebolistas campeões da Copa Libertadores da América e da Liga dos Campeões da UEFA.",
      pagina: "https://www.instagram.com/rafinha/", // Verificar o perfil oficial
      time: "São Paulo FC",
      nacionalidade: "Brasil",
      tags: "brasil, lateral, são paulo",
      imagem:
        "https://conteudo.imguol.com.br/c/esporte/00/2022/07/20/rafinha-e-o-capitao-do-sao-paulo-contra-o-inter-pelo-brasileirao-1658364465364_v2_450x600.jpg",
      titulos:
        "Bundesliga (Bayern de Munique)<br>Copa da Alemanha (Bayern de Munique)<br>Supercopa da Alemanha (Bayern de Munique)<br>Campeonato Brasileiro (Coritiba)<br>Campeonato Paranaense (Coritiba)<br>Copa do Brasil (Coritiba)",
      numero: "13",
      posicao: "Zagueiro",
      dataNascimento: "18/09/1985",
      curiosidades:
        "Rafinha iniciou sua carreira no Coritiba e já defendeu a Seleção Brasileira.",
    },

    // Raphael Veiga
    {
      nome: "Raphael Veiga",
      descricao:
        "Meia talentoso e artilheiro, Raphael Veiga é conhecido por seus chutes poderosos e visão de jogo. Atualmente, é um dos principais jogadores do Palmeiras.",
      pagina: "https://www.instagram.com/raphael_veiga/", // Verificar o perfil oficial
      time: "palmeiras",
      nacionalidade: "Brasil",
      tags: "brasil, palmeiras, meia",
      imagem: "https://pbs.twimg.com/media/F5JCyvuWQAASJlw.jpg:large",
      titulos: "Brasileirão, Copa do Brasil, Libertadores", // Adaptar conforme os títulos conquistados
      numero: "23",
      posicao: "Meia",
      dataNascimento: "19/06/1995",
      curiosidades:
        "Raphael Veiga é palmeirense desde criança e já foi convocado para a Seleção Brasileira.",
    },

    //Reinier
    {
      nome: "Reinier",
      descricao:
        "Meia-atacante com grande potencial técnico e driblador habilidoso. Conhecido por sua visão de jogo e capacidade de finalizar.",
      pagina: "https://www.instagram.com/reinierjesus/",
      time: " Granada CF",
      nacionalidade: "Brasil",
      tags: "futebol, brasil, meia-atacante, reinier, Granada Club de Fútbol",
      imagem:
        "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2024/06/20/17188607039601.jpg",
      titulos:
        "Campeonato Brasileiro (2019) - Flamengo <br> Copa do Brasil (2022) - Real Madrid <br> Supercopa da Espanha (2022) - Real Madrid <br> Campeonato Carioca (2019) - Flamengo <br> Taça Guanabara (2019) - Flamengo",
      numero: "19", // Verificar o número atual
      posicao: "Meia-atacante",
      dataNascimento: "19/01/2002",
      curiosidades:
        "Revelado pelo Flamengo, foi comprado pelo Real Madrid e depois passou por outros times como Borussia, Girona e Granada.",
    },

    //Renato Augusto
    {
      nome: "Renato Augusto",
      descricao:
        "Meia elegante e técnico, Renato Augusto é conhecido por sua visão de jogo e passes precisos. Atualmente, é um dos líderes do Corinthians.",
      pagina: "https://www.instagram.com/renatoaugusto/",
      time: "Fluminense",
      nacionalidade: "Brasil",
      alt: "Brasil",
      tags: "brasil, fluminense, meia",
      imagem:
        "https://odia.ig.com.br/_midias/jpg/2024/03/01/1200x1920/1_renato_augusto-32166853.jpg?65e23a17bdf23",
      titulos:
        "Brasileirão <br> Copa do Brasil <br> Libertadores <br> Mundial de Clubes", // Adaptar conforme os títulos conquistados por Renato
      numero: "8",
      posicao: "Meia",
      dataNascimento: "08/02/1988",
      curiosidades:
        "Renato Augusto já jogou em grandes clubes europeus como Bayer Leverkusen e Beijing Guoan, e é conhecido por sua inteligência tática.",
    },

    // Renê
    {
      nome: "Renê",
      descricao:
        "Lateral-esquerdo brasileiro conhecido por sua habilidade nos lançamentos e pela sua força física. Atualmente joga pelo Internacional.",
      pagina: "https://www.instagram.com/reneoficial/",
      time: "Internacional",
      nacionalidade: "Brasil",
      tags: "brasil, lateral-esquerdo, internacional, rene",
      imagem:
        "https://conteudo.imguol.com.br/c/esporte/5e/2022/06/10/rene-lateral-esquerdo-do-inter-resolve-problema-antigo-no-clube-1654898694132_v2_3x4.jpg",
      titulos: "Campeonato Gaúcho (Internacional)",
      numero: "6",
      posicao: "Lateral-esquerdo",
      dataNascimento: "16/02/1992",
      curiosidades:
        "Renê já defendeu clubes como Sport e Bahia antes de chegar ao Internacional.",
    },

    // Richarlison
    {
      nome: "Richarlison",
      descricao:
        "Artilheiro da Seleção Brasileira em diversas campanhas, conhecido por sua força física e finalização precisa. Marcado pelo seu gol contra a Croácia na Copa de 2022.",
      pagina: "https://www.instagram.com/richarlison/",
      time: "Tottenham Hotspur",
      nacionalidade: "Brasil",
      tags: "futebol, brasil, tottenham, atacante",
      imagem:
        "https://s2-ge.glbimg.com/r1crSs6Eo5TfEmBeNX5zlrPiI9c=/0x0:1023x1280/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/X/A/GA28b4TdCWT7puCrVDyg/whatsapp-image-2022-11-24-at-21.21.50.jpeg",
      titulos:
        "Copa América (2019) - Seleção Brasileira<br>Ouro Olímpico (2020) - Seleção Brasileira<br>Primeira Liga do Brasil (2016) - Fluminense<br>Taça Guanabara (2017) - Fluminense",
      numero: "9",
      posicao: "Atacante",
      dataNascimento: "10/5/1997",
      curiosidades: "Revelado pelo América Mineiro.",
    },

    //Rivaldo
    {
      nome: "Rivaldo",
      background: "plate",
      descricao:
        "Considerado um dos maiores jogadores brasileiros de sua geração, Rivaldo era conhecido por sua habilidade técnica, chutes precisos e visão de jogo. Eleito o melhor jogador do mundo em 1999, conquistou diversos títulos importantes na carreira.",
      pagina: "https://www.instagram.com/rivaldooficial/", // Ajustar se necessário
      clube: "Aposentado (2015)",
      time1: "Mogi_Mirim",
      time2: "Palmeiras",
      time3: "Barcelona",
      time4: "AC_Milan",
      nacionalidade: "Brasil",
      tags: "futebol, brasil, meia, plate",
      imagem:
        "https://i.pinimg.com/736x/ba/b9/8e/bab98e203e6860c6e92a29db981f8919.jpg",
      titulos:
        "Copa do Mundo (2002) - Seleção Brasileira<br>Copa América (1999) - Seleção Brasileira<br>Copa das Confederações (1997) - Seleção Brasileira<br>Supercopa da UEFA (1997, 2003) - Barcelona, AC Milan<br>UEFA Champions League (2002/03) - AC Milan",
      numero: "10",
      posicao: "Meia-atacante",
      dataNascimento: "19/04/1972",
      curiosidades:
        "Rivaldo ficou marcado por um gol antológico na Copa do Mundo de 2002, contra a Turquia, onde simulou uma falta para enganar o árbitro.",
    },

    // Rivellino
    {
      nome: "Rivellino",
      background: "gold",
      descricao:
        "Considerado um dos maiores meias da história do futebol, Rivellino era conhecido por sua habilidade com a bola, chutes precisos e a famosa 'folha seca'. Foi um dos principais jogadores da seleção brasileira campeã da Copa do Mundo de 1970.",
      pagina:
        "https://www.instagram.com/rivellinooficial/  // (Criar caso não exista uma página oficial)",
      clube: "Aposentado (1981)",
      time1: "Al-Hilal",
      time2: "Fluminense",
      time3: "Corinthians",
      time4: "Golden",
      nacionalidade: "Brasil",
      tags: "brasil, meia, gold",
      imagem:
        "https://cultura.uol.com.br/upload/tvcultura/esporte/20240701161939_f9mt18hxoaaxz0n-1-1-.jpg",
      titulos:
        "Copa do Mundo de 1970, Campeonato Brasileiro, Taça Libertadores da América",
      numero: "10",
      posicao: "Meia",
      dataNascimento: "01/01/1946",
      curiosidades:
        "Inventor da 'folha seca', um chute com efeito que confundia os goleiros. Foi um dos principais jogadores da seleção brasileira na década de 1970.",
    },

    // Roberto Carlos
    {
      nome: "Roberto Carlos",
      background: "gold",
      descricao:
        "Lateral-esquerdo brasileiro conhecido por seus chutes potentes e precisos, especialmente as faltas. Foi um dos principais jogadores da seleção brasileira campeã mundial em 2002.",
      pagina: "https://www.instagram.com/robertocarlosoficial/",
      clube: "Aposentado",
      time1: "Real_Madrid",
      time2: "Fenerbahçe",
      time3: "Internazionale",
      time4: "Palmeiras",
      nacionalidade: "Brasil",
      tags: "brasil, roberto carlos, lateral, gold",
      imagem:
        "https://istoedinheiro.com.br/wp-content/uploads/sites/17/Reuters_Direct_Media/BrazilOnlineReportSportsNews/tagreuters.com2022binary_LYNXMPEI0U112-BASEIMAGE.jpg",
      titulos: "Liga dos Campeões, Campeonato Espanhol, Copa do Mundo",
      numero: "6",
      posicao: "Lateral-esquerdo",
      dataNascimento: "10 de abril de 1973",
      curiosidades:
        "Roberto Carlos é conhecido por seu chute de falta que curva a bola de forma incrível.",
    },

    // Roberto Firmino
    {
      nome: "Roberto Firmino",
      descricao:
        "Atacante brasileiro conhecido por sua versatilidade e habilidade de criar jogadas. Foi peça fundamental no sucesso do Liverpool nos últimos anos.",
      pagina: "https://www.instagram.com/roberto_firmino9/",
      time: "Al-Ahli Saudi FC",
      nacionalidade: "Brasil",
      tags: "futebol, brasil, atacante, al-ahli",
      imagem:
        "https://i.pinimg.com/474x/0e/37/36/0e3736ca9c374f94dccc4ca844bccfec.jpg",
      titulos:
        "Premier League (2019/2020) - Liverpool<br>Liga dos Campeões da UEFA (2018/2019) - Liverpool<br>Mundial de Clubes da FIFA (2019) - Liverpool<br>Copa da Inglaterra (2021/2022) - Liverpool<br>Supercopa da UEFA (2019)<br>Copa América (2019) - Seleção Brasileira",
      numero: "9",
      posicao: "Atacante",
      dataNascimento: "02/10/1991",
      curiosidades:
        "Conhecido por sua celebração de 'calma', Firmino é um dos jogadores mais queridos da torcida do Liverpool.",
    },

    // Robinho
    {
      nome: "Robinho",
      descricao:
        "Um dos maiores dribladores do futebol brasileiro, Robinho era conhecido por sua velocidade, habilidade com a bola e finalizações precisas. Ele encantou torcidas por onde passou, principalmente no Santos.",
      pagina: "https://www.instagram.com/robinhooficial/", // Verifique o perfil oficial
      time1: "Santos",
      time2: "Real_Madrid",
      time3: "Manchester_City",
      time4: "AC_Milan",
      nacionalidade: "Brasil",
      tags: "atacante, Brasil",
      imagem: "https://static.poder360.com.br/2023/05/robinho-848x477.jpeg",
      titulos:
        "Campeonato Brasileiro, Copa Libertadores, Campeonato Espanhol, Copa da Inglaterra, Serie A",
      numero: "20",
      posicao: "Atacante",
      dataNascimento: "25/01/1984",
      curiosidades:
        "Robinho foi revelado pelo Santos e logo se tornou um dos principais jogadores do futebol brasileiro. Ele também teve passagens por grandes clubes europeus, como Real Madrid e Manchester City.",
    },

    // Rodinei
    {
      nome: "Rodinei",
      descricao:
        "Lateral-direito brasileiro conhecido por sua força física, velocidade e cruzamentos precisos. Atualmente joga no Olympiacos F.C.",
      pagina: "https://www.instagram.com/rodineioficial/",
      time: "Olympiacos F.C.",
      nacionalidade: "Brasil",
      tags: "brasil, lateral-direito, Olympiacos",
      imagem:
        "https://conteudo.imguol.com.br/c/esporte/57/2021/06/02/lateral-direito-rodinei-se-reapresentou-ao-flamengo-apos-defender-o-internacional-por-emprestimo-1622672201174_v2_3x4.jpg",
      titulos:
        "Campeonato Brasileiro (Flamengo)<br>Copa do Brasil (Flamengo)<br>Copa Libertadores da América (Flamengo)<br>Supercopa do Brasil (Flamengo)<br>Recopa Sul-Americana (Flamengo)",
      numero: "23",
      posicao: "Zagueiro",
      dataNascimento: "13/03/1992",
      curiosidades:
        "Rodinei iniciou sua carreira no futebol de base do Grêmio e se destacou no Internacional antes de chegar ao Flamengo onde conquistou vários titulos.",
    },

    // Rodrigo Caio
    {
      nome: "Rodrigo Caio",
      descricao:
        "Zagueiro brasileiro conhecido por sua boa técnica e liderança dentro de campo. Atuou por grandes clubes como São Paulo e Flamengo.",
      pagina: "https://www.instagram.com/rodrigocaio/",
      time: "Grêmio",
      nacionalidade: "Brasil",
      tags: "brasil, zagueiro, gremio",
      imagem:
        "https://tntsports.com.br/__export/1662748924441/sites/esporteinterativo/img/2022/09/09/gettyimages-1407905644.jpg",
      titulos:
        "Campeonato Brasileiro (São Paulo, Flamengo)<br>Copa do Brasil (São Paulo, Flamengo)<br>Campeonato Paulista (São Paulo, Flamengo)<br>Copa Libertadores da América (Flamengo)<br>Recopa Sul-Americana (Flamengo)",
      numero: "30",
      posicao: "Zagueiro",
      dataNascimento: "22/08/1993",
      curiosidades:
        "Rodrigo Caio foi convocado para a Seleção Brasileira e disputou a Copa do Mundo de 2018.",
    },

    // Rodrigo Muniz
    {
      nome: "Rodrigo Muniz",
      descricao:
        "Atacante promissor, Rodrigo Muniz é conhecido por sua força física e habilidade para marcar gols. Atualmente, ele defende o Fulham, na Inglaterra.",
      pagina: "https://www.instagram.com/rodrigomuniz/", // Verifique o perfil oficial
      time1: "Fulham",
      time2: "Middlesbrough",
      time3: "Coritiba",
      time4: "Flamengo",
      nacionalidade: "Brasil",
      tags: "atacante, Brasil, Fulham",
      imagem:
        "https://tntsports.com.br/__export/1712251727586/sites/esporteinterativo/img/2024/04/04/muniz_fulham.jpg",
      titulos:
        "Campeonato Carioca (2020), Campeonato Brasileiro (2020), Supercopa do Brasil (2021), EFL Championship (2021/22)",
      numero: "9",
      posicao: "Atacante",
      dataNascimento: "04/05/2001",
      curiosidades:
        "Rodrigo Muniz começou sua carreira nas categorias de base do Flamengo.",
    },

    // Rodrygo
    {
      nome: "Rodrygo",
      descricao:
        "Joia da nova geração do futebol brasileiro, Rodrygo se destacou por sua velocidade, dribles e finalização precisa. Revelado pelo Santos, logo chamou a atenção de grandes clubes europeus.",
      pagina: "https://www.instagram.com/rodrygogoes/",
      time: "Real Madrid CF",
      nacionalidade: "Brasil",
      tags: "brasil, atacante, real madrid, rodrigo",
      imagem:
        "https://conteudo.imguol.com.br/c/esporte/33/2023/11/29/rodrygo-do-real-madrid-comemora-gol-contra-o-napoli-na-liga-dos-campeoes-1701291003658_v2_3x4.jpg",
      titulos: "La Liga, Supercopa da Espanha, Liga dos Campeões da UEFA",
      numero: "21",
      posicao: "Atacante",
      dataNascimento: "9 de janeiro de 2001",
      curiosidades:
        "Rodrygo marcou um hat-trick histórico na Liga dos Campeões da UEFA, com apenas 19 anos, ajudando o Real Madrid a se classificar para as quartas de final.",
    },

    // Romário
    {
      nome: "Romário",
      background: "gold",
      descricao:
        "É um dos maiores artilheiros do história do futebol, e o quarto maior artilheiro da Seleção Brasileira segundo a FIFA, com 55 gols marcados contando apenas jogos oficiais, ficando em segundo lugar na posição até outubro de 2004[3] quando foi ultrapassado por Ronaldo, após a sua aposentadoria da Seleção.",
      pagina: "https://www.instagram.com/romario/",
      clube: "Aposentado",
      time1: "Flamengo",
      time2: "Barcelona",
      time3: "PSV_Eindhoven",
      time4: "Vasco_da_Gama",
      nacionalidade: "Brasil",
      tags: "brasil, atacante, gold",
      imagem:
        "https://i.pinimg.com/736x/0d/dc/02/0ddc026d4756d61834d8dd45d2fae54d.jpg",
      titulos:
        "Campeão da Copa do Mundo (1994), Copa América (1989, 1997), Campeonato Brasileiro, Campeonato Espanhol.",
      numero: "11",
      posicao: "Atacante",
      dataNascimento: "	29 de janeiro de 1966",
      curiosidades:
        "Romário é conhecido por sua habilidade excepcional de finalização e sua capacidade de marcar gols decisivos em momentos cruciais.",
    },

    // Ronaldinho Gaúcho
    {
      nome: "Ronaldinho Gaúcho",
      background: "gold",
      descricao:
        "Considerado um dos maiores jogadores de futebol de todos os tempos, Ronaldinho Gaúcho é conhecido por sua habilidade, dribles e visão de jogo excepcionais. Seu estilo de jogo alegre e criativo o tornou um ídolo mundial.",
      pagina: "https://www.instagram.com/ronaldinho/",
      clube: "Aposentado",
      time1: "AC_Milan",
      time2: "PSG",
      time3: "Barcelona",
      time4: "Flamengo",
      nacionalidade: "Brasil",
      tags: "brasil, meia, gold",
      imagem:
        "https://conteudo.imguol.com.br/c/esporte/77/2021/06/02/ronaldinho-gaucho-em-atuacao-pelo-barcelona-1622663451254_v2_3x4.jpg",
      titulos:
        "Copa do Mundo FIFA (2002) - Seleção Brasileira<br>Copa das Confederações FIFA (2005) - Seleção Brasileira<br>La Liga (2004, 2005) - Barcelona<br>Liga dos Campeões da UEFA (2005) - Barcelona<br>Copa Libertadores da América (2013) - Atlético Mineiro",
      numero: "10",
      posicao: "Meia-atacante",
      dataNascimento: "21/03/1980",
      curiosidades:
        "Ronaldinho já foi eleito duas vezes o melhor jogador do mundo pela FIFA e é conhecido por seus gols de falta espetaculares.",
    },

    // Ronaldo Nazário
    {
      nome: "Ronaldo Nazário",
      background: "gold",
      descricao:
        "Considerado um dos maiores atacantes de todos os tempos, Ronaldo Fenômeno era conhecido por sua velocidade, finalização e habilidade técnica. Atuou por grandes clubes como Inter de Milão, Real Madrid e Barcelona, conquistando diversos títulos e artilharias.",
      pagina: "https://www.instagram.com/ronaldofeno/",
      clube: "Aposentado",
      time1: "Real_Madrid",
      time2: "Internazionale",
      time3: "Barcelona",
      time4: "Cruzeiro",
      nacionalidade: "Brasil",
      tags: "brasil, atacante, Ronaldo Fenômeno, gold",
      imagem:
        "https://terceirotempo.uol.com.br/imagens/57/70/w500_h140_qfl_fto_15770.webp",
      titulos:
        "Copa do Mundo (2x), Copa América, Campeonato Espanhol, Campeonato Italiano, Campeonato Brasileiro, Copa UEFA",
      numero: "9",
      posicao: "Atacante",
      dataNascimento: "18/09/1976",
      curiosidades:
        "Ronaldo sofreu duas graves lesões nos joelhos, mas conseguiu se recuperar e voltar a brilhar nos gramados.",
    },

    // Thiago Silva
    {
      nome: "Thiago Silva",
      descricao:
        "Zagueiro experiente e líder nato, conhecido por sua habilidade no jogo aéreo, passes precisos e liderança dentro de campo. Um dos melhores defensores da sua geração.",
      pagina: "https://www.instagram.com/thiagosilva/",
      time: "Fluminense",
      nacionalidade: "Brasil",
      tags: "brasil, zagueiro, fluminense, seleção brasileira",
      imagem:
        "https://conteudo.imguol.com.br/c/esporte/26/2022/12/05/thiago-silva-durante-a-partida-do-brasil-contra-a-coreia-do-sul-1670294743840_v2_450x450.jpg", // Trocar por uma imagem do Thiago Silva
      titulos: "Ligue 1, Copa da França, Supercopa da França, Champions League",
      numero: "3",
      posicao: "Zagueiro",
      dataNascimento: "22/09/1984",
      curiosidades:
        "Começou sua carreira como volante, mas logo se destacou como zagueiro. É considerado um dos maiores ídolos do Paris Saint-Germain e da Seleção Brasileira.",
    },

    // Vinícius Júnior
    {
      nome: "Vinícius Júnior",
      descricao:
        "Uma das maiores promessas do futebol mundial, conhecido por sua velocidade e dribles eletrizantes.",
      pagina: "https://www.instagram.com/vinijr/",
      time: "Real Madrid CF",
      nacionalidade: "Brasil",
      tags: "brasil, real madrid, atacante",
      imagem:
        "https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2024/03/07/29438833-vinicius-junior-real-madrid-cf-v-rb-leipzig-round-of-16-second-leg-uefa-champions-league-2023-24-2048x1365.jpg",
      titulos:
        "Liga dos Campeões da UEFA (2021, 2023) - Real Madrid<br>La Liga (2019, 2021, 2023) Real Madrid<br>Mundial de Clubes da FIFA (2022) - Real Madrid<br>Supercopa da UEFA (2022, 2023) - Real Madrid",
      numero: "7",
      posicao: "Atacante",
      dataNascimento: "12/7/2000",
      curiosidades: "Revelado pelo Flamengo.",
    },

    // Vitinho
    {
      nome: "Vitinho",
      descricao:
        "Atacante brasileiro conhecido por sua habilidade nos dribles e velocidade. Teve passagens marcantes por clubes como Flamengo e Internacional.",
      pagina: "https://www.instagram.com/vitinhooficial/",
      time: "Al-Ettifaq",
      nacionalidade: "Brasil",
      imagem:
        "https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2022/10/11/1602259754-6345ec8f2ce7d.jpeg",
      tags: "Brasil, Vitinho, atacante, Al-Ettifaq",
      numero: "14",
      posicao: "Atacante",
      titulos:
        "Campeonato Brasileiro (2019, 2020) - Flamengo <br> Copa Libertadores (2019) - Flamengo",
      dataNascimento: "02/10/1993",
      curiosidades:
        "Conhecido por sua habilidade nos dribles e por sua comemoração característica com a camisa. Teve passagens por grandes clubes brasileiros e europeus.",
    },

    //Wesley
    {
      nome: "Wesley",
      descricao:
        "Meio-campista brasileiro conhecido por sua versatilidade e habilidade nos passes. Destaca-se por sua rápida adaptação ao time titular do Flamengo.",
      pagina: "https://www.instagram.com/wesleyfranca03_/?hl=pt",
      time: "Flamengo",
      nacionalidade: "Brasil",
      imagem:
        "https://images.flamengo.com.br/public/images/players/3/1710272030.png",
      tags: "Brasil, Flamengo, Wesley, meio-campista",
      numero: "43",
      posicao: "Meio-campista",
      titulos: "Copa do Brasil (2022)", // Adicione os títulos conquistados pelo Wesley
      dataNascimento: "06/09/2003",
      curiosidades:
        "Revelado nas categorias de base do Flamengo, Wesley tem se mostrado uma das grandes promessas do futebol brasileiro.",
    },

    // William Arão
    {
      nome: "William Arão",
      descricao:
        "Volante conhecido por sua força física, marcação e boa distribuição de bola. Arão é um dos líderes do time e fundamental para o equilíbrio da equipe.",
      pagina: "https://www.instagram.com/w_arao/", // Verificar o perfil oficial
      time: " Panathinaikos FC",
      nacionalidade: "Brasil",
      tags: "brasil, volante",
      imagem: "https://static.flaresenha.com/wp/willian-arao.jpg",
      titulos:
        "Campeonato Brasileiro (Flamengo)<br>Copa do Brasil (Flamengo)<br>Campeonato Carioca (Flamengo)<br>Recopa Sul-Americana (Flamengo)<br>Supercopa do Brasil (Flamengo)<br>Copa Libertadores da América (Flamengo)",
      numero: "55",
      posicao: "Meia",
      dataNascimento: "12/04/1992", // Data de nascimento aproximada
      curiosidades:
        "Arão iniciou sua carreira no Botafogo e é um dos jogadores mais experientes do elenco.",
    },

    // Willian
    {
      nome: "Willian Borges",
      descricao:
        "Meia-atacante habilidoso e veloz, Willian é conhecido por seus dribles e passes precisos. Ele já defendeu grandes clubes como Chelsea e Arsenal.",
      pagina: "https://www.instagram.com/willianborges88/", // Verifique o perfil oficial
      time1: "Olympiacos",
      time2: "Fulham",
      time3: "Chelsea",
      time4: "Corinthians",
      nacionalidade: "Brasil",
      tags: "futebol, meia, brasil",
      imagem:
        "https://www.olympiacos.org/wp-content/uploads/2024/09/02/STEF1798.jpg",
      titulos:
        "Copa da UEFA: (2008/09), Premier League (2014/15 e 2016/17), Copa da Inglaterra (2017/18), Copa da Liga Inglesa (2014/15), Liga Europa da UEFA (2018/19)",
      numero: "18",
      posicao: "Meia-atacante",
      dataNascimento: "09/08/1988",
      curiosidades:
        "Willian é conhecido por sua comemoração característica com os braços cruzados.",
    },

    //Yuri Alberto
    {
      nome: "Yuri Alberto",
      descricao:
        "Atacante promissor, Yuri Alberto é conhecido por sua finalização precisa e habilidade de se movimentar dentro da área. Atualmente, é um dos destaques do Corinthians.",
      pagina: "https://www.instagram.com/yurialberto/",
      time: "Corinthians",
      nacionalidade: "Brasil",
      tags: "brasil, corinthians, atacante",
      imagem:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Sulamericana_CUP_2023_Semifinal_-_Corinthians_x_Fortaleza-CE_%2853553783422%29_%28cropped%29.jpg/250px-Sulamericana_CUP_2023_Semifinal_-_Corinthians_x_Fortaleza-CE_%2853553783422%29_%28cropped%29.jpg", // Trocar por uma imagem do Yuri Alberto
      titulos: "Campeonato Brasileiro", // Adaptar conforme os títulos conquistados por Yuri
      numero: "9",
      posicao: "Atacante",
      dataNascimento: "10/01/2000",
      curiosidades:
        "Yuri Alberto começou sua carreira no Internacional e já foi convocado para a Seleção Brasileira de base.",
    },

    // Zico
    {
      nome: "Zico",
      background: "gold",
      descricao:
        "Considerado um dos maiores jogadores brasileiros de todos os tempos, Zico era conhecido por sua habilidade técnica, visão de jogo e chutes precisos. Ídolo do Flamengo, ele encantou o mundo com seu futebol artístico.",
      pagina: "https://www.instagram.com/zico/", // Ajustar se necessário
      time: "Aposentado (1993)",
      time1: "Flamengo",
      time2: "Udinese",
      time3: "Kashima_Antlers",
      time4: "Golden",
      nacionalidade: "Brasil",
      tags: "brasil, meia, gold",
      imagem:
        "https://i.pinimg.com/474x/8a/c0/e0/8ac0e02cc7457be239b42bedef643dbf.jpg",
      titulos:
        "Brasileirão (1980, 1982, 1983, 1987)<br>Copa Libertadores da América (1981) - Flamengo<br>Copa Intercontinental (1981) - Flamengo<br>Campeonato Carioca (Várias vezes) - Flamengo",
      numero: "10",
      posicao: "Meia",
      dataNascimento: "03/03/1953",
      curiosidades:
        "Zico era conhecido como o 'Galinho de Quintal' por sua habilidade de driblar e fazer gols de forma elegante. Ele também foi um dos maiores artilheiros da história do Flamengo.",
    },

    // BULGÁRIA ---------------------------------------------------------------------------------------------------

    // Hristo Stoichkov
    {
      nome: "Hristo Stoichkov",
      background: "gold",
      descricao:
        "Atacante búlgaro conhecido por sua habilidade, dribles e chutes poderosos. Stoichkov foi um dos maiores jogadores da história do Barcelona e um dos principais responsáveis por levar a Bulgária à semifinal da Copa do Mundo de 1994.",
      pagina: "https://www.instagram.com/hristo_stoichkov_official/", // Verificar se existe um perfil oficial
      clube: "Aposentado (2004)",
      time1: "Chicago_Fire",
      time2: "Parma",
      time3: "Barcelona",
      time4: "CSKA_Sofia",
      nacionalidade: "Bulgária",
      tags: "bulgaria, atacante, gold",
      imagem:
        "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/854_stoitxkov.jpg",
      titulos: "La Liga, Copa del Rey, Copa dos Campeões, Chuteira de Ouro",
      numero: "8",
      posicao: "Atacante",
      dataNascimento: "08/02/1966",
      curiosidades:
        "Stoichkov foi eleito o melhor jogador do mundo em 1994 e entrou na lista FIFA 100, formulada pelo ex-futebolista brasileiro Pelé, com 'os melhores jogadores de futebol vivos'.",
    },

    // CAMARÕES ---------------------------------------------------------------------------------------------------

    // Eric Maxim Choupo-Moting
    {
      nome: "Choupo-Moting",
      descricao:
        "Atacante camaronês conhecido por sua força física e habilidade aérea. Apesar de não ser um titular absoluto, Choupo-Moting já provou seu valor em grandes jogos, como nas finais da Liga dos Campeões com o Bayern de Munique.",
      pagina: "https://www.instagram.com/choupomoting/",
      time: "Sem clube (último: FC Bayern München)",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Cameroon.svg/640px-Flag_of_Cameroon.svg.png",
      tags: "camarões, atacante",
      imagem:
        "https://www.shutterstock.com/editorial/image-editorial/MeTdM433N4j2E1z6NTAwODA=/eric-maxim-choupo-moting-cameroon-during-fifa-world-440nw-13641138am.jpg", // Trocar por uma imagem do Choupo-Moting
      titulos: "Bundesliga, Copa da Alemanha, Liga dos Campeões",
      numero: "13",
      posicao: "Atacante",
      dataNascimento: "23/03/1989",
      curiosidades:
        "Choupo-Moting é conhecido por sua versatilidade, podendo atuar tanto como centroavante quanto como ponta de lança. Ele também é um grande fã de música.",
    },

    // CANADÁ -----------------------------------------------------------------------------------------------------

    // Alphonso Davies
    {
      nome: "Alphonso Davies",
      descricao:
        "Lateral-esquerdo canadense conhecido por sua velocidade e habilidade nos dribles, Davies se destaca no Bayern de Munique.",
      pagina: "https://www.instagram.com/alphonsodavies/",
      time: "FC Bayern München",
      nacionalidade:
        "https://s3.static.brasilescola.uol.com.br/be/2022/10/bandeira-do-canada.jpg",
      tags: "canadá, bayern munique, lateral-esquerdo",
      imagem:
        "https://tntsports.com.br/__export/1694365196315/sites/esporteinterativo/img/2023/09/10/gettyimages-1643058731_1.jpg_742406227.jpg",
      titulos: "Bundesliga, Champions League",
      numero: "19",
      posicao: "Lateral-esquerdo",
      dataNascimento: "02/11/2000",
      curiosidades:
        "Davies é o jogador mais jovem a representar o Canadá em uma Copa do Mundo.",
    },

    // CHILE ------------------------------------------------------------------------------------------------------

    // Alexis Sánchez
    {
      nome: "Alexis Sánchez",
      descricao:
        "Um dos maiores atacantes da história do futebol chileno! Conhecido por sua velocidade, dribles e habilidade de finalizar, Sánchez já vestiu as camisas de grandes clubes europeus como Barcelona, Arsenal e Manchester United. Sua experiência e talento o tornam um jogador completo e inspirador.",
      pagina: "https://www.instagram.com/alexis_official/", // Verifique o perfil oficial
      time1: "Udinese",
      time2: "Barcelona",
      time3: "Arsenal",
      time4: "Manchester_United",
      nacionalidade: "Chile",
      tags: "chile, atacante",
      imagem:
        "https://media.gettyimages.com/id/107931998/pt/foto/udine-italy-alexis-sanchez-of-udinese-calcio-in-action-during-the-serie-a-match-between-udinese.jpg?s=612x612&w=gi&k=20&c=PB1jyaAOfPgtmHL48vHQoIsTNgQ11mbpkXzSBIFOdWs=",
      titulos: "Copa América (2x), Copa das Confederações",
      numero: "7",
      posicao: "Atacante",
      dataNascimento: "19/12/1988",
      curiosidades:
        "Alexis Sánchez é conhecido por sua grande paixão pelo futebol e sua dedicação aos treinos. Ele é um ídolo nacional no Chile e já foi eleito o melhor jogador da América do Sul.",
    },

    // Arturo Vidal
    {
      nome: "Arturo Vidal",
      descricao:
        "Volante chileno conhecido por sua energia, combatividade e habilidade nos chutes de longa distância. Foi um dos principais jogadores da Juventus, Bayern de Munique e da seleção chilena.",
      pagina: "https://www.instagram.com/kingarturo23oficial/",
      time: "Colo-Colo",
      nacionalidade: "Chile",
      imagem:
        "https://images2-mega.cdn.mdstrm.com/meganoticias/2024/02/11/arturo-vidal_439046_1_65c8ee105733f.jpg",
      tags: "Chile, Arturo Vidal, volante",
      numero: "23",
      posicao: "Volante",
      titulos:
        "Serie A (2012, 2013, 2014) - Juventus <br> Bundesliga (2015, 2016, 2017) - Bayern de Munique <br> Copa América (2015, 2016) - Chile",
      dataNascimento: "22/05/1987",
      curiosidades:
        "Apelidado de 'O Guerreiro', é conhecido por sua comemoração característica de apontar para o céu. Teve passagens por grandes clubes europeus e é um dos maiores ídolos da história do futebol chileno.",
    },

    // Erick Pulgar
    {
      nome: "Erick Pulgar",
      descricao:
        "Meia-campo chileno conhecido por sua força física e qualidade na marcação. Chegou ao Flamengo em 2022.",
      pagina: "#",
      time: "Flamengo",
      nacionalidade: "Chile",
      imagem:
        "https://images.flamengo.com.br/public/images/players/5/1710272551.png",
      tags: "Chile, Flamengo, Erick Pulgar, meio-campo",
      numero: "5",
      posicao: "Meia",
      titulos: "Campeonato Carioca (2023) <br> Libertadores (2022)",
      dataNascimento: "15/01/1994",
      curiosidades:
        "Tem experiência em grandes clubes europeus como Fiorentina e Galatasaray. É um dos pilares da seleção chilena.",
    },

    // COLÔMBIA ---------------------------------------------------------------------------------------------------

    // Radamel Falcao
    {
      nome: "Radamel Falcao",
      descricao:
        "Um dos maiores artilheiros colombianos de todos os tempos, conhecido por sua força física e habilidade de marcar gols.",
      pagina: "https://www.instagram.com/falcaogarcia/",
      time: " Millonarios FC",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/255px-Flag_of_Colombia.svg.png",
      tags: "colômbia, atacante",
      imagem:
        "https://media.gettyimages.com/id/1367435292/pt/foto/barranquilla-colombia-radamel-falcao-of-colombia-stands-for-the-national-anthem-prior-to-a.jpg?s=612x612&w=gi&k=20&c=BeVAkl_gEcyxVfS9otsV0B5HEREkUZOdgOy8cVwcAaA=", // Substituir por uma imagem do Falcao
      titulos: "Liga Europa, Copa da França",
      numero: "9",
      posicao: "Centroavante",
      dataNascimento: "10/02/1986",
      curiosidades: "Conhecido como El Tigre.",
    },

    // James Rodríguez
    {
      nome: "James Rodríguez",
      descricao:
        "Um dos maiores talentos da sua geração, conhecido por sua visão de jogo e chutes precisos.",
      pagina: "https://www.instagram.com/jamesrodriguez10/",
      time: "Rayo Vallecano de Madrid",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/255px-Flag_of_Colombia.svg.png",
      tags: "colômbia, meia",
      imagem:
        "https://gmconline.com.br/wp-content/uploads/2024/07/libertadoresbr_1721048915_3412728108970842786_8277311211-1-819x1024.jpg",
      titulos: "La Liga, Copa do Mundo (Chuteira de Ouro)",
      numero: "10",
      posicao: "Meia",
      dataNascimento: "12/07/1991",
      curiosidades: "Vencedor da Chuteira de Ouro na Copa do Mundo de 2014.",
    },

    // Carlos Valderrama
    {
      nome: "Carlos Valderrama",
      descricao:
        "Um ícone do futebol colombiano, conhecido por seu cabelo loiro e seu estilo de jogo elegante.",
      pagina: "//", // Adicionar se tiver uma página oficial
      time: "Aposentado (2004)",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/255px-Flag_of_Colombia.svg.png",
      tags: "colômbia, meia",
      imagem:
        "https://lendasdofutebol.com/wp-content/uploads/2021/03/carlos-valderrama-em-movimento-3-optimized.jpg", // Substituir por uma imagem do Valderrama
      titulos: "Copa América",
      numero: "10",
      posicao: "Meia",
      dataNascimento: "02/09/1961",
      curiosidades:
        "Considerado um dos maiores jogadores da história da Colômbia.",
    },

    // Faustino Asprilla
    {
      nome: "Faustino Asprilla",
      descricao:
        "Um atacante rápido e habilidoso, conhecido por seus dribles e gols espetaculares.",
      pagina: "//", // Adicionar se tiver uma página oficial
      time: "Aposentado (2019)",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/255px-Flag_of_Colombia.svg.png",
      tags: "futebol, colômbia, atacante, dribles, gols",
      imagem:
        "https://media.gettyimages.com/id/733407681/pt/foto/colombian-footballer-faustino-asprilla-pictured-in-action-playing-for-colombia-in-the-1994-fifa.jpg?s=612x612&w=gi&k=20&c=827lgO_BsGW7zj0DfZfbguu5k0K-XAAgu7ELK882xAw=",
      titulos: "Copa Libertadores",
      numero: "10",
      posicao: "Atacante",
      dataNascimento: "10/11/1969",
      curiosidades: "Conhecido por sua personalidade extrovertida.",
    },

    //COREIA DO SUL -------------------------------------------------------------------------------------------

    //Son
    {
      nome: "Son Heung-min",
      descricao:
        "Atacante sul-coreano conhecido por sua velocidade, habilidade e gol, Son é um dos principais jogadores do Tottenham Hotspur.",
      pagina: "https://www.instagram.com/hm_son7/",
      time: "Tottenham Hotspur FC",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/300px-Flag_of_South_Korea.svg.png",
      tags: "coreia do sul, atacante",
      imagem:
        "https://cdn1-production-images-kly.akamaized.net/Vk_c5aMJUupK8TXYbbUKFt39XHc=/800x1066/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4621407/original/031600900_1698102412-AP23296724254352.jpg",
      titulos: "Premier League",
      numero: "7",
      posicao: "Atacante",
      dataNascimento: "08/07/1992",
      curiosidades:
        "Son Heung-min é um dos jogadores asiáticos mais famosos do mundo.",
    },

    //COSTA DO MARFIM---------------------------------------------------------------------------------------------

    // Yaya Touré
    {
      nome: "Yaya Touré",
      descricao:
        "Um dos maiores meio-campistas da sua geração, Yaya Touré era conhecido por sua força física, habilidade com a bola e visão de jogo. Ele foi fundamental para os sucessos do Barcelona e do Manchester City.",
      pagina: "https://www.instagram.com/yaya.toure/", // Verifique o perfil oficial
      time1: "Barcelona",
      time2: "Manchester_City",
      time3: "AS_Monaco",
      time4: "Olympiacos",
      nacionalidade: "Costa_do_Marfim",
      tags: "meia, Costa do Marfim",
      imagem:
        "https://s2-ge.glbimg.com/DXeJyG6LQgK7dEhF-bwMEF-iAkQ=/0x0:3000x2011/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2017/A/3/OzErNNTPiCAYZif5ozMA/020-450630754.jpg",
      titulos:
        "La Liga (3x), Copa do Rei (2x), Premier League (3x), FA Cup (1x), Liga dos Campeões (1x)",
      numero: "19",
      posicao: "Meia",
      dataNascimento: "13/05/1983",
      curiosidades:
        "Yaya Touré é conhecido por sua comemoração de gol única, inspirando a música 'Yaya Toure'. Ele também é um embaixador da boa vontade da ONU.",
    },

    // COSTA RICA ------------------------------------------------------------------------------------------------

    // Keylor Navas
    {
      nome: "Keylor Navas",
      descricao:
        "Goleiro costarriquenho conhecido por suas defesas espetaculares e reflexos rápidos. Campeão da UEFA Champions League com o Real Madrid, Navas é um dos melhores goleiros da sua geração.",
      pagina: "https://www.instagram.com/keylornavas/",
      time: "Sem clube (último: Paris Saint-Germain)",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Costa_Rica.svg/255px-Flag_of_Costa_Rica.svg.png",
      tags: "costa rica, goleiro",
      imagem:
        "https://media.gettyimages.com/id/1402932635/pt/foto/doha-qatar-keylor-navas-of-costa-rica-gives-their-team-instructions-during-the-2022-fifa-world.jpg?s=612x612&w=gi&k=20&c=7JkMKYl5-DPGVXUPrvNgrhcT1TWU6HBbS1309IfMAgk=", // Trocar por uma imagem mais recente de Navas
      titulos: "UEFA Champions League, La Liga, Mundial de Clubes",
      numero: "1",
      posicao: "Goleiro",
      dataNascimento: "15/12/1986",
      curiosidades:
        "Conhecido por sua concentração e liderança, Navas já foi eleito o melhor goleiro da La Liga e considerado um dos melhores do mundo na sua posição.",
    },

    // CROÁCIA ---------------------------------------------------------------------------------------------------

    //Ivan Perišić
    {
      nome: "Ivan Perišić",
      descricao:
        "Jogador croata versátil, conhecido por sua habilidade com a bola, cruzamentos precisos e chutes de longa distância. Atuou em diversos grandes clubes europeus.",
      pagina: "https://www.instagram.com/ivanperisic/", // Ajustar se necessário
      time: "PSV Eindhoven",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg",
      tags: "croácia, ponta",
      imagem:
        "https://www.thesun.co.uk/wp-content/uploads/2023/07/ivan-perisic-tottenham-hotspur-looks-795773625.jpg", // Trocar por uma imagem do Ivan Perišić
      titulos:
        "Liga dos Campeões da UEFA (2019) - Bayern de Munique<br>Bundesliga (2011, 2019) - Borussia Dortmund e Bayern de Munique<br>Série A (2020) - Inter de Milão",
      numero: "14",
      posicao: "Ponta Esquerda",
      dataNascimento: "02/02/1989",
      curiosidades:
        "Representou a Croácia em diversas Copas do Mundo e Eurocopas, sendo um dos principais jogadores da seleção.",
    },

    // Ivan Rakitica
    {
      nome: "Ivan Rakitic",
      descricao:
        "Meia croata conhecido por sua visão de jogo, passes precisos e chutes de média distância. Foi peça fundamental nos títulos do Barcelona, incluindo a Liga dos Campeões de 2015.",
      pagina: "https://www.instagram.com/ivanrakitic/",
      time: "HNK Hajduk Split",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg",
      tags: "croácia, meia, HNK Hajduk Split",
      imagem:
        "https://i.pinimg.com/736x/b6/26/44/b626446ced2fd5818fb00cf16a566692.jpg",
      titulos:
        "La Liga, Copa del Rey, Supercopa da Espanha, Liga dos Campeões, Mundial de Clubes",
      numero: "11",
      posicao: "Meia central",
      dataNascimento: "10/03/1988",
      curiosidades:
        "Rakitic celebrou seus gols com um beijo no gramado, em homenagem à sua esposa. Ele também é conhecido por sua personalidade alegre e carismática.",
    },

    //Joško Gvardiol
    {
      nome: "Joško Gvardiol",
      descricao:
        "Zagueiro croata conhecido por sua força física, velocidade e habilidade com a bola. É considerado um dos maiores talentos da nova geração do futebol.",
      pagina: "https://www.instagram.com/jgvardool/", // Ajustar se necessário
      time: "Manchester City FC",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg",
      tags: "croácia, manchester city, zagueiro",
      imagem:
        "https://media.gettyimages.com/id/1468623531/pt/foto/leipzig-germany-josko-gvardiol-of-rb-leipzig-celebrates-after-scoring-the-teams-first-goal.jpg?s=612x612&w=gi&k=20&c=jY93sZmKpMbI2BFozj_ccnIC-4TolSYVtiCsnJt8X9Y=", // Trocar por uma imagem do Joško Gvardiol
      titulos: "Bundesliga",
      numero: "24",
      posicao: "Zagueiro",
      dataNascimento: "23/01/2002",
      curiosidades:
        "Revelado pelo Dinamo Zagreb, Gvardiol chamou a atenção de grandes clubes europeus por suas atuações na Copa do Mundo de 2022.",
    },

    //Luka Modrić
    {
      nome: "Luka Modrić",
      background: "gold",
      descricao:
        "Meia croata, conhecido por sua habilidade técnica, visão de jogo e passes precisos. Líder da seleção croata e peça fundamental no Real Madrid.",
      pagina: "https://www.instagram.com/lukamodric10/",
      clube: "Real Madrid",
      time1: "Real_Madrid",
      time2: "Tottenham_Hotspur",
      time3: "Dinamo_Zagreb",
      time4: "Golden",
      nacionalidade: "Croácia",
      tags: "croácia, real madrid, meia, Modric, gold",
      imagem:
        "https://conteudo.imguol.com.br/c/esporte/11/2022/12/01/luka-modric-da-croacia-em-acao-contra-a-belgica-na-fase-de-grupos-da-copa-do-qatar-1669910441519_v2_450x600.jpg", // Trocar por uma imagem do Luka Modrić
      titulos: "Champions League, La Liga, Copa do Mundo (vice)",
      numero: "10",
      posicao: "Meia",
      dataNascimento: "09/09/1985",
      curiosidades:
        "Considerado um dos melhores meio-campistas da sua geração, Modrić teve uma infância difícil na Guerra da Croácia.",
    },

    //Marcelo Brozović
    {
      nome: "Marcelo Brozović",
      descricao:
        "Um volante croata conhecido por sua força física, excelente passe e habilidade de marcar. É um jogador fundamental para o meio-campo de sua equipe, com uma visão de jogo impressionante.",
      pagina: "https://www.instagram.com/marcelobrozovic/", // Ajustar se necessário
      time: " Al-Nassr FC",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg",
      tags: "croácia, al nassr, volante",
      imagem:
        "https://upload.wikimedia.org/wikipedia/commons/c/c9/Marcelo_Brozovi%C4%87_2021_%28cropped%29.jpg", // Trocar por uma imagem do Marcelo Brozović
      titulos: "Serie A, Copa da Itália, Supercopa Italiana", // Adaptar para os títulos conquistados no Al-Nassr
      numero: "11",
      posicao: "Volante",
      dataNascimento: "16/11/1992",
      curiosidades:
        "Brozović é conhecido por sua lealdade aos clubes que defende e por sua importância na seleção croata.",
    },

    //Mateo Kovačić
    {
      nome: "Mateo Kovačić",
      descricao:
        "Meio-campista croata conhecido por sua habilidade técnica, visão de jogo e passes precisos. Destaca-se por sua capacidade de controlar o ritmo da partida e criar oportunidades para seus companheiros.",
      pagina: "https://www.instagram.com/mateokova/",
      time: "Manchester City FC",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg",
      tags: "croácia, manchester city, meio-campo, meia",
      imagem:
        "https://upload.wikimedia.org/wikipedia/commons/d/d9/Chelsea_vs._Arsenal%2C_29_May_2019_18_Kovacic.jpg", // Trocar por uma imagem do Mateo Kovačić
      titulos: "Premier League, Copa da Inglaterra",
      numero: "8",
      posicao: "Meio-campista",
      dataNascimento: "06/05/1994",
      curiosidades:
        "Começou sua carreira na Croácia e teve passagens por grandes clubes europeus como Real Madrid e Chelsea antes de se transferir para o Manchester City.",
    },

    // DINAMARCA --------------------------------------------------------------------------------------------------

    // Andreas Christensen
    {
      nome: "Andreas Christensen",
      descricao:
        "Zagueiro dinamarquês conhecido por sua elegância e precisão nos passes. Destaca-se por sua capacidade de construir o jogo a partir da defesa e por sua liderança em campo.",
      pagina: "https://www.instagram.com/andreashchristensen/",
      time: "FC Barcelona",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/1200px-Flag_of_Denmark.svg.png",
      alt: "Dinamarca",
      tags: "dinamarca, barcelona, zagueiro",
      imagem:
        "https://media.lex.dk/media/164431/standard_compressed_20220908-075539-L-1760x2640ma.jpg",
      titulos: "La Liga",
      numero: "15",
      posicao: "Zagueiro",
      dataNascimento: "10/04/1996",
      curiosidades:
        "Revelado nas categorias de base do Chelsea, Christensen ganhou experiência em diversos clubes antes de se firmar como titular no Barcelona. É conhecido por sua versatilidade e por sua habilidade nos lançamentos longos.",
    },

    // Christian Eriksen
    {
      nome: "Christian Eriksen",
      descricao:
        "Meia dinamarquês conhecido por sua visão de jogo, passes precisos e chutes de longa distância. É um dos principais jogadores da seleção dinamarquesa e já atuou em grandes clubes europeus.",
      pagina: "https://www.instagram.com/christianeriksenofficial/",
      time: "Manchester United FC",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/1200px-Flag_of_Denmark.svg.png",
      alt: "Dinamarca",
      tags: "dinamarca, manchester united, meia",
      imagem:
        "https://conteudo.imguol.com.br/c/entretenimento/0f/2022/11/22/christian-eriksen-em-jogo-contra-a-tunisia-na-copa-do-qatar-1669128331095_v2_450x600.jpg",
      titulos: "Eredivisie, Copa da Dinamarca",
      numero: "14",
      posicao: "Meia",
      dataNascimento: "14/02/1992",
      curiosidades:
        "Eriksen passou por uma situação médica grave durante a Euro 2020, mas se recuperou e voltou a jogar profissionalmente. É conhecido por sua habilidade em cobranças de falta e por sua visão de jogo que o torna um dos melhores meias da atualidade.",
    },

    // Kasper Schmeichel
    {
      nome: "Kasper Schmeichel",
      descricao:
        "Goleiro dinamarquês conhecido por suas defesas espetaculares e por ser um líder nato. Filho do lendário goleiro Peter Schmeichel, Kasper seguiu os passos do pai e se tornou um dos melhores goleiros da sua geração.",
      pagina: "https://www.instagram.com/kschmeichel1/",
      time: "Celtic FC",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/1200px-Flag_of_Denmark.svg.png",
      alt: "Dinamarca",
      tags: "dinamarca, celtic, goleiro",
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk8wCJWWbwU8AjtTWhArzxOm7_XNWVmeoo7w&s",
      titulos: "Premier League, FA Cup",
      numero: "1",
      posicao: "Goleiro",
      dataNascimento: "05/11/1986",
      curiosidades:
        "Começou sua carreira nas categorias de base do Manchester City e teve passagens por diversos clubes antes de se destacar no Leicester City. É conhecido por suas reflexões rápidas e por sua habilidade em defender pênaltis.",
    },

    // Pierre-Emile Højbjerg
    {
      nome: "Pierre-Emile Højbjerg",
      descricao:
        "Meio-campista dinamarquês conhecido por sua força física, desarmes e passes precisos. Destaca-se por sua capacidade de recuperar a bola e distribuir o jogo, sendo um jogador fundamental na organização do meio-campo.",
      pagina: "https://www.instagram.com/hojbjerg/", // Assumindo um perfil oficial
      time: " Olympique de Marseille",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/1200px-Flag_of_Denmark.svg.png",
      alt: "Dinamarca",
      tags: "dinamarca, marseille, meio-campo",
      imagem:
        "https://cdn-s-www.ledauphine.com/images/E9E99855-90E3-4E8F-AC24-23392B11A674/NW_raw/pierre-emile-hojbjerg-photo-maxppp-nigel-french-1723487883.jpg",
      titulos:
        "Bundesliga (4x) - Bayern de Munique<br>UEFA Champions League (1x) - Bayern de Munique<br>Mundial de Clubes da FIFA (1x) - Bayern de Munique", // Atualmente, Højbjerg não possui títulos individuais de grande destaque.
      numero: "23",
      posicao: "Meio-campista",
      dataNascimento: "05/08/1995",
      curiosidades:
        "Começou sua carreira no Bayern de Munique e já atuou por clubes como Southampton e Tottenham Hotspur antes de chegar ao Marseille. É conhecido por sua liderança em campo e por sua versatilidade.",
    },

    // EGITO --------------------------------------------------------------------------------------------------

    // Mohamed Salah
    {
      nome: "Mohamed Salah",
      descricao:
        "Atacante egípcio conhecido por sua velocidade, finalização precisa e dribles. Um dos principais jogadores do Liverpool, Salah é ídolo nacional no Egito.",
      pagina: "https://www.instagram.com/mosalah/",
      time: " Liverpool FC",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/800px-Flag_of_Egypt.svg.png",
      alt: "Egito",
      tags: "egito, liverpool, atacante",
      imagem:
        "https://tntsports.com.br/__export/1638728661713/sites/esporteinterativo/img/2021/12/05/salah_em_axo_pelo_liverpool.jpg_1029893211.jpg", // Trocar por uma imagem do Salah
      titulos:
        "Premier League (2019/2020) - Liverpool <br>UEFA Champions League (2018/2019) - Liverpool <br>FIFA Club World Cup (2019) - Liverpool <br>UEFA Super Cup (2019) - Liverpool <br>FA Cup (2021/2022) - Liverpool",
      numero: "11",
      posicao: "Atacante",
      dataNascimento: "15/06/1992",
      curiosidades:
        "Salah é conhecido por sua comemoração característica, onde ele aponta para o céu em homenagem à sua filha. Ele também é um dos maiores artilheiros da história do Liverpool.",
    },

    // ESCÓCIA -------------------------------------------------------------------------------------------------

    // Andrew Robertson
    {
      nome: "Robertson",
      descricao:
        "Lateral-esquerdo escocês conhecido por sua habilidade nos cruzamentos e sua capacidade de atuar tanto na defesa quanto no ataque. É considerado um dos melhores laterais do mundo.",
      pagina: "https://www.instagram.com/andrewrobertson5/",
      time: "Liverpool FC",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/800px-Flag_of_Scotland.svg.png",
      alt: "Escócia",
      tags: "escocia, lateral, liverpool",
      imagem:
        "https://i.pinimg.com/474x/fd/fc/ab/fdfcab24b444121095318d4c3ef1016c.jpg",
      titulos:
        "Premier League (Liverpool FC)<br>UEFA Champions League (Liverpool FC)<br>Copa da Inglaterra (Liverpool FC)<br>Copa da Liga Inglesa (Liverpool FC)<br>Supercopa da UEFA (Liverpool FC)",
      numero: "26",
      posicao: "Lateral-esquerdo",
      dataNascimento: "11/03/1994",
      curiosidades:
        "Robertson iniciou sua carreira na Escócia e se transferiu para o Liverpool FC em 2017, onde se tornou um dos principais jogadores da equipe.",
    },

    // ESLOVÊNIA -----------------------------------------------------------------------------------------------

    // Jan Oblak
    {
      nome: "Jan Oblak",
      descricao:
        "Considerado um dos melhores goleiros do mundo, Oblak é conhecido por suas defesas espetaculares e reflexos rápidos. Fundamental para o sucesso do Atlético de Madrid, o goleiro esloveno é referência na posição.",
      pagina: "https://www.instagram.com/oblakjan/", // Verificar o perfil oficial
      time: "Atlético de Madrid",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Flag_of_Slovenia.svg/1200px-Flag_of_Slovenia.svg.png",
      alt: "Eslovênia",
      tags: "eslovênia, atlético de madrid, goleiro",
      imagem:
        "https://i.pinimg.com/736x/2c/81/69/2c8169b3ff4b81df38ddbc36e4e14634.jpg", // Trocar por uma imagem do Oblak
      titulos: "La Liga, Supercopa da Espanha",
      numero: "13",
      posicao: "Goleiro",
      dataNascimento: "07/01/1993",
      curiosidades:
        "Oblak já foi eleito o melhor goleiro da La Liga em diversas ocasiões e é conhecido por sua concentração e liderança dentro de campo.",
    },

    //ESPANHA---------------------------------------------------------------------------------------------------

    // Alfredo Di Stéfano
    {
      nome: "Alfredo Di Stéfano",
      background: "gold",
      descricao:
        "Atacante argentino-espanhol considerado um dos maiores jogadores de todos os tempos. Di Stéfano era conhecido por sua velocidade, habilidade técnica e faro de gol, sendo fundamental para o sucesso do Real Madrid nos anos 50 e 60.",
      pagina: "https://www.instagram.com/alfredodistefano/", // Verificar se existe um perfil oficial
      clube: "Aposentado (1966)",
      time1: "Espanyol",
      time2: "Real_Madrid",
      time3: "Millonarios",
      time4: "River_Plate",
      nacionalidade: "Argentino-espanhol",
      tags: "argentina, espanha, atacante, Alfredo Di Stefano, gold",
      imagem:
        "https://upload.wikimedia.org/wikipedia/commons/b/bb/Mcu_Alfredo_Di_Stefano.jpg",
      titulos: "La Liga, Copa dos Campeões, Bola de Ouro",
      numero: "9",
      posicao: "Atacante",
      dataNascimento: "04/07/1926",
      curiosidades:
        "Di Stéfano era conhecido como 'A Flecha Loira' devido à sua velocidade e cor dos cabelos.",
    },

    // Álvaro Morata
    {
      nome: "Álvaro Morata",

      descricao:
        "Atacante forte e completo, Morata é conhecido por sua habilidade no jogo aéreo e por marcar gols decisivos. É um dos principais atacantes da seleção espanhola.",
      pagina: "https://www.instagram.com/alvaromorata/", // Verificar o perfil oficial
      time: "AC Milan",
      nacionalidade: "Espanha",
      alt: "Espanha",
      tags: "espanha, atacante, milan",
      imagem:
        "https://media.gettyimages.com/id/2166654167/photo/milan-italy-alvaro-morata-of-ac-milan-looks-on-during-the-trofeo-berlusconi-match-between-ac.jpg?s=612x612&w=gi&k=20&c=lbB-9Al4947HAJ2qSA6SJoTrjQ-9AEy4PGD2b1HdgZM=", // Trocar por uma imagem do Álvaro Morata
      titulos: "La Liga, Champions League, Europa League",
      numero: "9",
      posicao: "Atacante",
      dataNascimento: "23/10/1992",
      curiosidades:
        "Morata começou sua carreira no Real Madrid e já jogou em clubes como Juventus e Chelsea.",
    },

    // Andrés Iniesta
    {
      nome: "Andrés Iniesta",
      background: "plate",
      descricao:
        "Um dos maiores meias da história do futebol, conhecido por sua habilidade e gols decisivos.",
      pagina: "https://www.instagram.com/andiniesta8/",
      clube: "Aposentado (2024)",
      time1: "Vissel_Kobe",
      time2: "Barcelona",
      time3: "Plate",
      time4: "Plate",
      nacionalidade: "Espanha",
      alt: "Espanha",
      tags: "espanha, meia, plate",
      imagem:
        "https://cdn-s-www.leprogres.fr/images/FB18B92B-D189-4989-8F3F-29180DDF0DAC/NW_raw/andres-iniesta-photo-afp-1522783770.jpg",
      titulos:
        "La Liga, Copa do Rei, Liga dos Campeões, Copa do Mundo, Eurocopa",
      numero: "8",
      posicao: "Meia",
      dataNascimento: "11/05/1984",
      curiosidades: "Marcou o gol do título da Copa do Mundo de 2010.",
    },

    // Carvajal
    {
      nome: "Carvajal",
      descricao:
        "Lateral-direito rápido e habilidoso, Carvajal é conhecido por seus cruzamentos precisos e sua solidez defensiva. Ele é um dos principais jogadores do Real Madrid e da seleção espanhola.",
      pagina:
        "https://www.realmadrid.com/pt-PT/futebol/primeira-equipa/plantel/daniel-carvajal-ramos",
      time1: "Real_Madrid",
      time2: "Bayer_Leverkusen",
      time3: "Vazio",
      time4: "Vazio",
      nacionalidade: "Espanha",
      tags: "lateral-direito, Real Madrid, Espanha",
      imagem:
        "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--e6263595-3f05-459b-b73a-ee23af676971/ND_CARVAJAL__AV13707.app.webp?preferwebp=true",
      titulos:
        "La Liga, Copa del Rey, Supercopa da Espanha, Liga dos Campeões, Supercopa da UEFA",
      numero: "2",
      posicao: "Lateral-direito",
      dataNascimento: "11/01/1992",
      curiosidades:
        "Carvajal é formado nas categorias de base do Real Madrid e já conquistou diversos títulos com o clube.",
    },

    // Carles Puyol
    {
      nome: "Carles Puyol",
      background: "plate",
      descricao:
        "Lenda do Barcelona, Puyol era um zagueiro central conhecido por sua liderança, força física e lealdade ao clube. Ele era o capitão do time em diversos títulos importantes e era muito querido pelos torcedores.",
      pagina: "https://www.instagram.com/carlespuyolofficial/", // (Verificar se existe)
      clube: "Aposentado (2014)",
      time1: "Barcelona",
      time2: "Plate",
      time3: "Plate",
      time4: "Plate",
      nacionalidade: "Espanha",
      tags: "espanha, zagueiro, plate",
      imagem:
        "https://preview.redd.it/g00wwalqrzq71.jpg?width=720&format=pjpg&auto=webp&s=e93d818b89b53619dece276056c1643b11ddc7ba",
      titulos:
        "La Liga, Copa del Rey, Liga dos Campeões da UEFA, Copa do Mundo FIFA",
      numero: "5",
      posicao: "Zagueiro",
      dataNascimento: "13/04/1978",
      curiosidades:
        "Puyol era conhecido por sua cabeçada poderosa e sua lealdade ao Barcelona. Ele jogou toda a sua carreira profissional no clube catalão.",
    },

    // David Silva
    {
      nome: "David Silva",
      descricao:
        "Meia criativo e elegante, Silva é conhecido por seus passes precisos, visão de jogo excepcional e habilidade de controlar o ritmo do jogo. Um dos maiores meio-campistas da sua geração.",
      pagina: "https://www.instagram.com/davidsilva21/", // Verificar o perfil oficial
      time: "Aposentado (2023)",
      nacionalidade: "Espanha",
      alt: "Espanha",
      tags: "espanha, meia, silva",
      imagem:
        "https://media.gettyimages.com/id/465226210/pt/foto/manchester-england-david-silva-of-manchester-city-celebrates-after-scoring-the-opening-goal.jpg?s=612x612&w=gi&k=20&c=3dkPb2PV71KVPr-AcieZ74C2fOBdNBM9vFKbZpJFay8=",
      titulos:
        "La Liga (2004) - Valencia <br> Copa del Rey (2008) - Valencia <br> Premier League (2012, 2014, 2018, 2019) - Manchester City <br> FA Cup (2011) - Manchester City <br> UEFA Champions League (2012) - Chelsea",
      numero: "21",
      posicao: "Meia",
      dataNascimento: "08/01/1986",
      curiosidades:
        "Silva se destacou no Valencia antes de se transferir para o Manchester City, onde se tornou um dos jogadores mais importantes da história do clube.",
    },

    // Diego Costa
    {
      nome: "Diego Costa",
      descricao:
        "Atacante brasileiro, naturalizado espanhol, conhecido por sua força física, estilo de jogo intenso e habilidade para marcar gols. Foi um dos principais jogadores do Atlético de Madrid e do Chelsea.",
      pagina: "https://www.instagram.com/diegoftcosta/",
      time: "Aposentado (2022)",
      nacionalidade: "Espanha",
      alt: "Espanha",
      imagem:
        "https://conteudo.imguol.com.br/c/esporte/da/2024/04/06/diego-costa-comemorando-o-gol-do-gremio-diante-do-juventude-1712436063964_v2_3x4.jpg",
      tags: "Brasil, Diego Costa, atacante",
      numero: "19",
      posicao: "Atacante",
      titulos:
        "La Liga (2013/2014) - Atlético de Madrid <br> Premier League (2014/2015, 2016/2017) - Chelsea",
      dataNascimento: "7 de outubro de 1988",
      curiosidades:
        "Conhecido por sua rivalidade com jogadores adversários e por suas comemorações exuberantes. Teve passagens marcantes por grandes clubes europeus.",
    },

    //Gerard Piqué
    {
      nome: "Gerard Piqué",
      descricao:
        "Zagueiro espanhol conhecido por sua liderança e habilidade no jogo aéreo, Piqué foi um dos maiores ídolos do Barcelona.",
      pagina: "https://www.instagram.com/3gerardpique/",
      time: "Aposentado (2022)",
      nacionalidade: "Espanha",
      alt: "Espanha",
      tags: "espanha, zagueiro",
      imagem:
        "https://i.pinimg.com/736x/81/22/82/8122821e9935101f424a159b1d36dc65.jpg",
      titulos:
        "La Liga (2009, 2010, 2011, 2013, 2015, 2016, 2018, 2019) - Barcelona <br> Copa del Rey (2009, 2012, 2015, 2016, 2018) - Barcelona <br> UEFA Champions League (2009, 2011, 2015) - Barcelona <br> Supercopa da Espanha (2009, 2010, 2011, 2013, 2016, 2018) - Barcelona <br> Copa do Mundo FIFA (2010) - Espanha",
      numero: "3",
      posicao: "Zagueiro",
      dataNascimento: "2/2/1987",
      curiosidades:
        "Piqué começou sua carreira no Barcelona e voltou para o clube após passagens por Manchester United e Zaragoza.",
    },

    // Iker Casillas
    {
      nome: "Iker Casillas",
      descricao:
        "Um dos maiores goleiros da história do futebol, conhecido por suas defesas espetaculares e liderança.",
      pagina: "https://www.instagram.com/ikercasillasoficial/",
      time: "Aposentado (2020)",
      nacionalidade: "Espanha",
      alt: "Espanha",
      tags: "espanha, goleiro",
      imagem:
        "https://s.glbimg.com/es/ge/f/original/2012/09/12/iker_casillas_real_madrid_2.jpg",
      titulos:
        "La Liga (2001, 2003, 2007, 2008, 2012) - Real Madrid <br> Copa del Rey (2011) - Real Madrid <br> UEFA Champions League (2010) - Real Madrid <br> Supercopa da Espanha (2001, 2003, 2008, 2012) - Real Madrid <br> Copa do Mundo FIFA (2010) - Espanha",
      numero: "1",
      posicao: "Goleiro",
      dataNascimento: "20/05/1981",
      curiosidades: "Considerado um dos maiores ídolos do Real Madrid.",
    },

    //Isco Alarcón
    {
      nome: "Isco Alarcón",
      descricao:
        "Meia espanhol conhecido por sua técnica e visão de jogo, Isco já atuou por Real Madrid e agora defende o [time atual].",
      pagina: "https://www.instagram.com/iscoalarcon/",
      time: "Real Betis",
      nacionalidade: "Espanha",
      alt: "Espanha",
      tags: "espanha, meia, Real Betis",
      imagem:
        "https://pbs.twimg.com/media/FT__o9JXEAMIakS?format=jpg&name=4096x4096",
      titulos:
        "La Liga, Copa del Rey, UEFA Champions League, Supercopa da UEFA, Mundial de Clubes",
      numero: "22",
      posicao: "Meia",
      dataNascimento: "21/04/1992",
      curiosidades:
        "Isco foi um dos pilares do Real Madrid durante vários anos.",
    },

    // Jordi Alba
    {
      nome: "Jordi Alba",
      descricao:
        "Lateral-esquerdo conhecido por sua velocidade, cruzamentos precisos e habilidade de apoiar o ataque. Campeão da Eurocopa e da Copa do Mundo com a Espanha, Alba é um dos melhores laterais do mundo.",
      pagina: "https://www.instagram.com/jordialba/",
      time: "Inter Miami CF",
      nacionalidade: "Espanha",
      alt: "Espanha",
      tags: "espanha, inter miami, lateral-esquerdo, Inter Miami CF",
      imagem:
        "https://conteudo.imguol.com.br/c/esporte/ed/2023/02/05/jordi-alba-do-barcelona-comemora-gol-contra-o-sevilla-pelo-espanhol-1675632855082_v2_450x600.jpg", // Trocar por uma imagem do Jordi Alba
      titulos:
        "La Liga (2013, 2015, 2016, 2018, 2019) - Barcelona <br> Copa del Rey (2015, 2016, 2018) - Barcelona <br> UEFA Champions League (2015) - Barcelona <br> Supercopa da Espanha (2013, 2016, 2018) - Barcelona <br>Campeonato Europeu (2012) - Espanha",
      numero: "18",
      posicao: "Lateral-esquerdo",
      dataNascimento: "21/03/1989",
      curiosidades:
        "Além de suas habilidades técnicas, Alba é conhecido por sua paixão pelo jogo e por sua liderança dentro de campo.",
    },

    //Lamine Yamal
    {
      nome: "Lamine Yamal",
      descricao:
        "Joia do Barcelona, Yamal é um dos jogadores mais promissores do mundo. Com apenas 17, ele já chama atenção pela habilidade e maturidade em campo.",
      pagina: "https://www.instagram.com/laminyamal/", // Adapte para o perfil oficial
      time: "FC Barcelona ",
      nacionalidade: "Espanha",
      alt: "Espanha",
      tags: "espanha, Barcelona",
      imagem:
        "https://tntsports.com.br/__export/1720996103480/sites/esporteinterativo/img/2024/07/14/yamal_melhor_jogador_jovem_da_euro_1.jpg_742406227.jpg",
      titulos: "LaLiga",
      numero: "19",
      posicao: "Atacante",
      dataNascimento: "13/07/2007",
      curiosidades:
        "Yamal se tornou o jogador mais jovem a estrear pelo Barcelona e pela seleção espanhola.",
    },

    //Pablo Marí
    {
      nome: "Pablo Marí",
      descricao:
        "Zagueiro central conhecido por sua serenidade e habilidade na construção de jogadas. Possui boa visão de jogo e é forte no jogo aéreo.",
      pagina: "https://www.instagram.com/pablomari/", // Verificar o perfil oficial
      time: "AC Monza",
      nacionalidade: "Espanha",
      alt: "Espanha",
      tags: "espanha, zagueiro, mari, AC Monza",
      imagem:
        "https://s2-ge.glbimg.com/qogF2UGSzzSn4gNmDqGN0o6TFnA=/0x0:2505x3248/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/u/j/ypDYBSQZ6DJjbPAJXFSQ/pablo-mari-monza.jpg",
      titulos:
        "La Liga (2021) - Villarreal <br> Copa do Brasil (2019) - Flamengo <br> Campeonato Carioca (2019) - Flamengo <br> Supercopa do Brasil (2020) - Flamengo <br> Campeonato Brasileiro (2019) - Flamengo",
      numero: "22", // Verificar o número atual
      posicao: "Zagueiro",
      dataNascimento: "31/08/1993",
      curiosidades:
        "Iniciou sua carreira no Deportivo La Coruña e teve passagens por Manchester City e Flamengo, onde conquistou a Libertadores.",
    },

    // Pep Guardiola
    {
      nome: "Pep Guardiola",
      descricao:
        "Ex-volante espanhol conhecido por sua inteligência tática e visão de jogo, Guardiola foi capitão do Barcelona e conquistou diversos títulos como jogador. Atualmente, é um dos treinadores mais renomados do mundo.",
      pagina: "https://www.instagram.com/pepguardiola/", // Verificar se existe um perfil oficial
      clube: "Aposentado (2006)",
      time1: "Al-Ahli",
      time2: "Roma",
      time3: "Brescia",
      time4: "Barcelona",
      nacionalidade: "Espanha",
      tags: "espanha, volante",
      imagem:
        "https://cdn.theathletic.com/app/uploads/2019/10/23004016/guardiola1-664x1024.png",
      titulos:
        "La Liga: 1990–91, 1991–92, 1992–93, 1993–94, 1997–98 e 1998–99 <br> Supercopa da Espanha: 1991, 1992, 1994 e 1996 <br> Taça dos Clubes Campeões Europeus: 1991–92 <br> Supercopa da UEFA: 1992 e 1997 <br> Recopa Europeia: 1996–97 <br> Copa do Rei: 1996–97 e 1997–98",
      numero: "4",
      posicao: "Volante",
      dataNascimento: "18/01/1971",
      curiosidades:
        "Guardiola foi capitão do Barcelona que conquistou a medalha de ouro nas Olimpíadas de 1992.",
    },

    // Raúl González
    {
      nome: "Raúl González",
      descricao:
        "Um dos maiores atacantes da história do Real Madrid, conhecido por sua eficiência e liderança.",
      pagina: "https://www.instagram.com/raulgonzalez/",
      time: "Aposentado (2015)",
      nacionalidade: "Espanha",
      alt: "Espanha",
      tags: "espanha, atacante",
      imagem:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Ra%C3%BAl_Gonz%C3%A1lez_in_Real_Madrid_2009.jpg/450px-Ra%C3%BAl_Gonz%C3%A1lez_in_Real_Madrid_2009.jpg",
      titulos: "La Liga, Copa del Rey, Liga dos Campeões",
      numero: "7",
      posicao: "Atacante",
      dataNascimento: "27/06/1977",
      curiosidades: "Um dos maiores artilheiros da história do Real Madrid.",
    },

    // Sergio Busquets
    {
      nome: "Sergio Busquets",
      descricao:
        "Volante conhecido por sua inteligência tática e passes precisos. Um dos pilares do Barcelona por muitos anos, Busquets é considerado um dos melhores volantes de sua geração.",
      pagina: "https://www.instagram.com/5sergiobusquets/",
      time: "Inter Miami CF",
      nacionalidade: "Espanha",
      alt: "Espanha",
      tags: "espanha, volante, Inter Miami CF",
      imagem:
        "https://upload.wikimedia.org/wikipedia/commons/7/71/Sergio_Busquets_2018_%28cropped%29.jpg",
      titulos:
        "La Liga, Copa del Rey, UEFA Champions League, Copa do Mundo, Eurocopa",
      numero: "5",
      posicao: "Volante",
      dataNascimento: "16/07/1988",
      curiosidades:
        "Busquets é conhecido por sua visão de jogo excepcional e capacidade de recuperar a bola. Ele é considerado um dos maiores volantes da história do futebol.",
    },

    // Gavi
    {
      nome: "Gavi",
      descricao:
        "Meia talentoso e promissor, Gavi é conhecido por sua técnica, visão de jogo e personalidade forte. É um dos pilares do meio-campo do Barcelona e da Seleção Espanhola.",
      pagina: "https://www.instagram.com/gavim10/", // Verificar o perfil oficial
      time: " FC Barcelona",
      nacionalidade: "Espanha",
      alt: "Espanha",
      tags: "espanha, barcelona, meio-campo",
      imagem:
        "https://i0.statig.com.br/bancodeimagens/imgalta/3h/8q/8o/3h8q8ojw0jskjajveof8osndc.jpg", // Trocar por uma imagem do Gavi
      titulos: "La Liga", // Adaptar conforme os títulos conquistados
      numero: "6",
      posicao: "Meia",
      dataNascimento: "05/08/2004",
      curiosidades:
        "Gavi é o jogador mais jovem a marcar um gol pela Seleção Espanhola em Copas do Mundo.",
    },

    //Marco Asensio
    {
      nome: "Marco Asensio",
      descricao:
        "Meia-atacante espanhol conhecido por sua técnica e finalização, Asensio é um dos jovens talentos do futebol espanhol, atualmente joga no PSG.",
      pagina: "https://www.instagram.com/marcoasensio10/",
      time: "Paris Saint-Germain FC",
      nacionalidade: "Espanha",
      alt: "Espanha",
      tags: "espanha, meia-atacante, Paris Saint Germain",
      imagem:
        "https://i.pinimg.com/736x/12/7b/39/127b39af9a1cd4b4f762bb6a4215b426.jpg",
      titulos: "La Liga, Champions League",
      numero: "10",
      posicao: "Meia-atacante",
      dataNascimento: "21/1/1996",
      curiosidades:
        "Asensio marcou um golaço na final da Champions League de 2017 pelo Real Madrid.",
    },

    // Pedri
    {
      nome: "Pedri",
      descricao:
        "Meia talentoso e elegante, Pedri é conhecido por sua técnica apurada, visão de jogo e habilidade de controlar o ritmo do jogo. É um dos pilares do meio-campo do Barcelona e da Seleção Espanhola.",
      pagina: "https://www.instagram.com/pedri/", // Verificar o perfil oficial
      time: "FC Barcelona",
      nacionalidade: "Espanha",
      alt: "Espanha",
      tags: "espanha, barcelona, meio-campo",
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ16ZnYJ1uRd7jU7W5NAY4QgY9e2Qu8LNYVcA&s", // Trocar por uma imagem do Pedri
      titulos: "La Liga", // Adaptar conforme os títulos conquistados
      numero: "8",
      posicao: "Meia",
      dataNascimento: "25/11/2002",
      curiosidades:
        "Pedri foi eleito o Golden Boy de 2021, prêmio dado ao melhor jogador sub-21 da Europa.",
    },

    // Sergio Ramos
    {
      nome: "Sergio Ramos",
      background: "plate",
      descricao:
        "Um dos maiores zagueiros da história do Real Madrid, Sergio Ramos é conhecido por sua liderança, força física e habilidade para marcar gols importantes. Com uma carreira vitoriosa, conquistou diversos títulos e se tornou um dos principais jogadores da Seleção Espanhola.",
      pagina: "https://pt.wikipedia.org/wiki/Sergio_Ramos",
      time: "Sevilla",
      time1: "Sevilla",
      time2: "PSG",
      time3: "Real_Madrid",
      time4: "Plate",
      nacionalidade: "Espanha",
      alt: "Espanha",
      tags: "espanha, paris saint-germain, zagueiro",
      imagem:
        "https://conteudo.imguol.com.br/c/galeria/f2/2023/03/08/sergio-ramos-apos-a-derrota-do-psg-para-o-bayern-de-munique-na-champions-1678314320553_v2_3x4.jpg",
      titulos:
        "La Liga (5x) - Real Madrid<br> Copa del Rey (2x) - Real Madrid<br> Liga dos Campeões da UEFA (4x) - Real Madrid<br> Copa do Mundo (2010) - Espanha",
      numero: "4",
      posicao: "Zagueiro",
      dataNascimento: "30/03/1986",
      curiosidades:
        "Ramos é conhecido por sua personalidade forte e por ter marcado gols decisivos em finais de Liga dos Campeões. Ele também é um dos jogadores com mais cartões vermelhos na história do futebol espanhol.",
    },

    // Thiago Alcântara
    {
      nome: "Thiago Alcântara",
      descricao:
        "Ex-meio-campista conhecido por sua habilidade técnica, visão de jogo e passes precisos. Foi um dos pilares de equipes como Barcelona, Bayern de Munique e Liverpool.",
      pagina: "https://www.instagram.com/thiagoalcantara/",
      time: "Aposentado (2024)",
      nacionalidade: "Espanha",
      alt: "Espanha",
      imagem:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/UEFA_EURO_qualifiers_Sweden_vs_Spain_20191015_Thiago_Alcantara_13_%28cropped%29.jpg/1200px-UEFA_EURO_qualifiers_Sweden_vs_Spain_20191015_Thiago_Alcantara_13_%28cropped%29.jpg",
      tags: "Espanha, Thiago Alcântara, meio-campista, meia",
      numero: "6",
      posicao: "Meio-campista",
      titulos:
        "La Liga (vários títulos) - Barcelona <br> Bundesliga (vários títulos) - Bayern Munich <br> Premier League (2019/2020) - Liverpool <br> Liga dos Campeões da UEFA (vários títulos) - Barcelona, Bayern Munich",
      dataNascimento: "11 de abril de 1991",
      curiosidades:
        "Considerado um dos melhores meio-campistas da sua geração. Filho do ex-jogador Mazinho, Thiago é conhecido por sua elegância e passes precisos.",
    },

    // Xabi Alonso
    {
      nome: "Xabi Alonso",
      descricao:
        "Meio-campista espanhol conhecido por sua visão de jogo, passes precisos e elegância. Foi um dos pilares de equipes como Real Madrid e Bayern de Munique.",
      pagina: "https://www.instagram.com/xabialonso/",
      time: "Aposentado (2017)",
      nacionalidade: "Espanha",
      alt: "Espanha",
      imagem:
        "https://i.pinimg.com/736x/1c/0d/b8/1c0db82837e8d1a0fd780e02d405cc9d.jpg",
      tags: "Espanha, Xabi Alonso, meio-campista",
      numero: "14",
      posicao: "Meio-campista",
      titulos:
        "Liga dos Campeões da UEFA (2005, 2012) <br> La Liga (2012) - Real Madrid <br> Bundesliga (2013, 2014, 2015) - Bayern Munich",
      dataNascimento: "25 de novembro de 1981",
      curiosidades:
        "Considerado um dos melhores meio-campistas da sua geração. Conhecido por sua habilidade nos passes longos e sua visão de jogo excepcional.",
    },

    // Xavi Hernández
    {
      nome: "Xavi Hernández",
      background: "plate",
      descricao:
        "Um dos maiores meias da história do futebol, conhecido por sua visão de jogo e passes precisos.",
      pagina: "https://www.instagram.com/xavi/",
      clube: "Aposentado (2019)",
      time1: "Al-Sadd_SC",
      time2: "Barcelona",
      time3: "Plate",
      time4: "Plate",
      nacionalidade: "Espanha",
      alt: "Espanha",
      tags: "espanha, meia, plate",
      imagem:
        "https://i.pinimg.com/736x/68/51/87/685187139f0d27413a67e2ac8947b448.jpg",
      titulos:
        "La Liga, Copa do Rei, Liga dos Campeões, Copa do Mundo, Eurocopa",
      numero: "6",
      posicao: "Meia",
      dataNascimento: "25/01/1980",
      curiosidades: "Cérebro do meio-campo do Barcelona por muitos anos.",
    },

    //FRANÇA----------------------------------------------------------------------------------------------------

    // Adrien Rabiot
    {
      nome: "Adrien Rabiot",
      descricao:
        "Meia de contenção conhecido por sua força física e habilidade de recuperar a bola. Rabiot é um jogador crucial na construção do jogo e tem se destacado em grandes clubes europeus.",
      pagina: "https://www.instagram.com/adrien_rabiot/",
      time: " Olympique de Marseille",
      nacionalidade: "França",
      alt: "França",
      tags: "futebol, frança, juventus, meio-campo, contenção",
      imagem:
        "https://cdn.resfu.com/media/img_news/afp_fr_7090ad802572c880439e0e0b17c87af2e83df926.jpg",
      titulos: "Ligue 1, Copa da França, Supercopa Italiana",
      numero: "25",
      posicao: "Meia de contenção",
      dataNascimento: "03/04/1995",
      curiosidades:
        "Formado nas categorias de base do Paris Saint-Germain, Rabiot é conhecido por sua personalidade forte e já foi capitão de diversas seleções de base da França.",
    },

    // Antoine Griezmann
    {
      nome: "Antoine Griezmann",
      descricao:
        "Um atacante versátil e habilidoso, conhecido por sua visão de jogo e capacidade de marcar gols.",
      pagina: "https://www.instagram.com/antogriezmann/",
      time: "Atlético de Madrid",
      nacionalidade: "França",
      alt: "França",
      tags: "futebol, frança, real madrid, atacante, versatilidade",
      imagem:
        "https://jpimg.com.br/uploads/2017/04/1897829755-griezmann-havia-afirmado-que-atletico-de-madrid-brigaria-contra-o-rebaixamento-na-temporada.jpg",
      titulos: "La Liga, Europa League, Copa do Mundo",
      numero: "7",
      posicao: "Atacante",
      dataNascimento: "21/3/1991",
      curiosidades: "Conhecido por suas comemorações de gol únicas.",
    },

    // Franck Ribéry
    {
      nome: "Franck Ribéry",
      descricao:
        "Uma lenda do futebol francês! Conhecido por sua habilidade, velocidade e dribles desconcertantes, Ribéry foi um dos maiores jogadores da sua geração. Ele conquistou títulos importantes com Bayern de Munique e seleção francesa.",
      pagina: "https://www.instagram.com/frankribery/", // Verifique o perfil oficial
      time1: "Boulogne",
      time2: "Olympique_de_Marseille",
      time3: "Bayern_de_Munique",
      time4: "Fiorentina",
      nacionalidade: "França",
      tags: "frança, meia, ribery",
      imagem:
        "https://media.gettyimages.com/id/146399315/pt/foto/donetsk-ukraine-franck-ribery-of-france-looks-on-during-the-uefa-euro-2012-group-d-match.jpg?s=612x612&w=gi&k=20&c=cCNZvnba7VWdLpQi4SgTM8ILdPAfsEJcCJ6-_X_Usik=",
      titulos:
        "Bundesliga (9x), Copa da Alemanha (5x), Champions League, Copa das Confederações",
      numero: "7",
      posicao: "Meia-atacante",
      dataNascimento: "7 de abril de 1983",
      curiosidades:
        "Ribéry é conhecido por seu estilo de jogo elegante e por sua forte personalidade. Ele sofreu uma lesão grave no rosto no início de sua carreira, que o deixou com uma cicatriz característica.",
    },

    //Hugo Lloris
    {
      nome: "Hugo Lloris",
      descricao:
        "Goleiro francês conhecido por suas defesas espetaculares, Lloris foi capitão do Tottenham Hotspur e da Seleção Francesa.",
      pagina: "https://www.instagram.com/hugolloris/",
      time: "Los Angeles FC",
      nacionalidade: "França",
      alt: "França",
      tags: "futebol, frança, goleiro, lloris",
      imagem:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6c947d2c-fd29-4e2e-9231-4c8b393c4e00/dcfvaon-5c2704e1-10b4-49f0-a7f2-3dd266de9403.jpg/v1/fill/w_800,h_1149,q_75,strp/hugo_lloris_france_hd__football2k_by_rimshad7_dcfvaon-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE0OSIsInBhdGgiOiJcL2ZcLzZjOTQ3ZDJjLWZkMjktNGUyZS05MjMxLTRjOGIzOTNjNGUwMFwvZGNmdmFvbi01YzI3MDRlMS0xMGI0LTQ5ZjAtYTdmMi0zZGQyNjZkZTk0MDMuanBnIiwid2lkdGgiOiI8PTgwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.dAHjtED9hWm10gXzMoRQH2Ko9TlECpvxuBehIk5q2Ps",
      titulos: "Premier League, Copa do Mundo",
      numero: "1",
      posicao: "Goleiro",
      dataNascimento: "26/12/1986",
      curiosidades:
        "Lloris foi fundamental para a conquista da Copa do Mundo de 2018 pela França.",
    },

    // Karim Benzema
    {
      nome: "Karim Benzema",
      background: "plate",
      descricao:
        "O atacante francês é conhecido por sua habilidade técnica, finalização precisa e visão de jogo. Ele é um dos principais jogadores do Real Madrid e da seleção francesa.",
      pagina: "https://www.instagram.com/karimbenzema/",
      clube: "Al-Ittihad",
      time3: "Lyon",
      time2: "Real_Madrid",
      time1: "Al-Ittihad",
      time4: "Plate",
      nacionalidade: "França",
      tags: "frança, atacante, plate",
      imagem:
        "https://tmssl.akamaized.net//images/foto/galerie/karim-benzema-real-madrid-2022-1665935878-94347.jpg",
      titulos:
        "La Liga, Copa del Rey, Liga dos Campeões da UEFA, Mundial de Clubes da FIFA",
      numero: "9",
      posicao: "Atacante",
      dataNascimento: "19/12/1987",
      curiosidades:
        "Benzema ganhou a Bola de Ouro em 2022, um reconhecimento por sua excelente temporada.",
    },

    // Kingsley Coman
    {
      nome: "Kingsley Coman",
      descricao:
        "Atacante francês conhecido por sua velocidade, dribles e habilidade nos cruzamentos, Coman é um dos principais jogadores do Bayern de Munique. Ele já conquistou diversos títulos importantes na Europa.",
      pagina: "https://www.instagram.com/king_coman/",
      clube: "Bayern de Munique",
      time1: "Bayern_de_Munique",
      time2: "Juventus",
      time3: "PSG",
      time4: "Vazio",
      nacionalidade: "França",
      tags: "frança, Bayern de Munique, ponta",
      imagem:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Kingsley_Coman_%282019%29_%28cropped%29.jpg/640px-Kingsley_Coman_%282019%29_%28cropped%29.jpg",
      titulos: "Bundesliga, Copa da Alemanha, Champions League",
      numero: "11",
      posicao: "Ponta",
      dataNascimento: "13/06/1996",
      curiosidades:
        "Coman marcou o gol da vitória do Bayern de Munique na final da Champions League de 2020.",
    },

    // Kylian Mbappé
    {
      nome: "Kylian Mbappé",
      background: "plate",
      descricao:
        "Um dos jogadores mais rápidos e habilidosos do mundo, conhecido por seus dribles e gols espetaculares.",
      pagina: "https://www.instagram.com/k.mbappe/",
      time: "Real Madrid",
      time1: "Real_Madrid",
      time2: "AS_Monaco",
      time3: "PSG",
      time4: "Plate",
      nacionalidade: "França",
      alt: "França",
      tags: "frança, Real Madrid, atacante, Mbappe, plate",
      imagem:
        "https://assets-us-01.kc-usercontent.com/31dbcbc6-da4c-0033-328a-d7621d0fa726/32e193b3-b8e8-437a-a24a-651f0b22c15f/mbappe%20trophy%203.jpg?ver=28-06-2024?w=3840&q=75",
      titulos: "Ligue 1, Copa da França, Copa do Mundo",
      numero: "7",
      posicao: "Atacante",
      dataNascimento: "20/12/1998",
      curiosidades: "Considerado um dos maiores talentos da nova geração.",
    },

    // Michel Platini
    {
      nome: "Michel Platini",
      background: "gold",
      descricao:
        "Meia-atacante francês considerado um dos maiores jogadores da história do futebol. Platini era conhecido por sua elegância, visão de jogo e chutes precisos, sendo fundamental para a conquista da Eurocopa de 1984.",
      pagina: "https://www.instagram.com/michelplatini/", // Verificar se existe um perfil oficial
      clube: "Aposentado",
      time1: "Nancy",
      time2: "Saint-Étienne",
      time3: "Juventus",
      time4: "Golden",
      nacionalidade: "França",
      tags: "frança, meia, gold",
      imagem:
        "https://i.pinimg.com/564x/e2/b5/e6/e2b5e6dc32a7da44771bba520bfe199c.jpg",
      titulos: "Serie A, Copa dos Campeões, Eurocopa, Bola de Ouro",
      numero: "10",
      posicao: "Meia-atacante",
      dataNascimento: "21/06/1955",
      curiosidades:
        "Platini foi eleito três vezes consecutivas o melhor jogador do mundo pela Bola de Ouro.",
    },

    // N'Golo Kanté
    {
      nome: "N'Golo Kanté",
      descricao:
        "Conhecido por sua incrível capacidade de desarme e pela energia incansável em campo, N'Golo Kanté é um dos melhores volantes do mundo. O francês se destaca por sua leitura de jogo e por sua importância na recuperação da bola para sua equipe.",
      pagina: "https://www.instagram.com/ngolokante/", // Verifique o perfil oficial
      time1: "Leicester_City",
      time2: "Chelsea",
      time3: "Al-Ittihad",
      time4: "Vazio",
      nacionalidade: "França",
      tags: "frança, volante, Kante",
      imagem:
        "https://external-preview.redd.it/romano-al-ittihad-stance-on-ngolo-kant%C3%A9-remains-very-clear-v0-O_QBn20zVfaUZkTZJidI9x6M27nR-aB3PIgxX3mxXfg.jpg?auto=webp&s=68f20b193ee5148fa645d9045092ca20b67e9c21",
      titulos:
        "Premier League (2016) - Leicester City<br>Premier League (2017) - Chelsea<br>Liga dos Campeões da UEFA (2021) - Chelsea",
      numero: "7",
      posicao: "Volante",
      dataNascimento: "29 de março de 1991",
      curiosidades:
        "Kanté é conhecido por sua simplicidade e humildade. Apesar de ser um dos melhores jogadores do mundo, ele mantém um estilo de vida discreto.",
    },

    // Ousmane Dembélé
    {
      nome: "Ousmane Dembélé",
      descricao:
        "Atacante veloz e habilidoso, Dembélé é conhecido por seus dribles rápidos e finalizações precisas. É uma das principais armas do seu time no ataque.",
      pagina: "https://www.instagram.com/ousmanedenbele/", // Verificar o perfil oficial
      time: " Paris Saint-Germain FC",
      nacionalidade: "França",
      alt: "França",
      tags: "futebol, frança, atacante, dembele",
      imagem:
        "https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2024/02/14/1387601427-ousmane-dembele-paris-saint-germain-v-ac-milan-group-f-uefa-champions-league-2023-24-2048x1365.jpg", // Trocar por uma imagem do Ousmane Dembélé
      titulos:
        "La Liga (2023) - Barcelona <br> Copa del Rey (2021) - Barcelona <br> Supercopa de España (2023) - Barcelona",
      numero: "11",
      posicao: "Atacante",
      dataNascimento: "15/05/1997",
      curiosidades:
        "Dembélé começou sua carreira no Rennes e chamou a atenção de grandes clubes europeus com suas atuações.",
    },

    // Paul Pogba
    {
      nome: "Paul Pogba",
      descricao:
        "Um dos meio-campistas mais talentosos da sua geração, conhecido por sua habilidade técnica, passes longos precisos e chutes poderosos. Já jogou por grandes clubes como Manchester United e Juventus.",
      pagina: "http://www.paulpogba.com/", // Verificar se existe um site oficial
      time: "Juventus",
      nacionalidade: "França",
      alt: "França",
      tags: "meio-campo, França, Juventus, meia",
      imagem:
        "https://conteudo.imguol.com.br/c/esporte/6a/2023/09/11/paul-pogba-durante-partida-do-campeonato-italiano-202324-1694447446172_v2_3x4.jpg",
      titulos:
        "Premier League (3x) - Manchester United<br>Copa da Itália (2x) - Juventus<br>Liga Europa da UEFA (1x) - Manchester United<br>Copa do Mundo (1x) - França",
      numero: "10",
      posicao: "Meio-campo",
      dataNascimento: "15/03/1993",
      curiosidades:
        "Pogba é conhecido por suas celebrações criativas e por seu estilo de jogo elegante. Ele também é um grande fã de música e dança.",
    },

    // Presnel Kimpembe
    {
      nome: "Presnel Kimpembe",
      descricao:
        "Zagueiro central francês conhecido por sua velocidade, força física e habilidade com a bola nos pés. É um dos pilares da defesa do Paris Saint-Germain.",
      pagina: "https://www.instagram.com/kimpembe/",
      time: "Paris Saint-Germain FC",
      nacionalidade: "França",
      alt: "França",
      tags: "futebol, frança, paris saint-germain, zagueiro, defesa",
      imagem:
        "https://tntsports.com.br/__export/1662910736253/sites/esporteinterativo/img/2022/09/11/gettyimages-1243099214.jpg_973455744.jpg",
      titulos:
        "Ligue 1, Coupe de France, Coupe de la Ligue, Supercopa da França",
      numero: "3",
      posicao: "Zagueiro",
      dataNascimento: "13/08/1995",
      curiosidades:
        "Formado nas categorias de base do Paris Saint-Germain, Kimpembe é um dos símbolos da nova geração de jogadores franceses.",
    },

    // Raphaël Varane
    {
      nome: "Raphaël Varane",
      descricao:
        "Zagueiro elegante e veloz, Varane é conhecido por sua habilidade no jogo aéreo e por sua liderança em campo. É um dos pilares defensivos da sua equipe.",
      pagina: "https://www.instagram.com/raphaelvarane/", // Verificar o perfil oficial
      time: "Aposentado (2024)",
      nacionalidade: "França",
      alt: "França",
      tags: "futebol, frança, zagueiro, defesa, liderança",
      imagem:
        "https://conteudo.imguol.com.br/c/esporte/45/2021/07/01/raphael-varane-pode-ser-o-proximo-reforco-do-manchester-united-1625152986904_v2_450x600.jpg", // Trocar por uma imagem do Raphaël Varane
      titulos: "La Liga, Champions League, Copa do Mundo",
      numero: "4",
      posicao: "Zagueiro",
      dataNascimento: "25/04/1993",
      curiosidades:
        "Varane começou sua carreira no Lens e se tornou um dos jogadores mais jovens a conquistar a Champions League.",
    },

    // Thierry Henry
    {
      nome: "Thierry Henry",
      background: "plate",
      descricao:
        "Considerado um dos maiores atacantes da história do Arsenal e da seleção francesa, Henry era conhecido por sua velocidade, habilidade e finalização precisa. Ele foi um dos principais jogadores da geração campeã da Copa do Mundo de 1998.",
      pagina: "https://www.instagram.com/thierryhenry/", // (Verificar se existe)
      clube: "Aposentado",
      time1: "AS_Monaco",
      time2: "Juventus",
      time3: "Arsenal",
      time4: "Barcelona",
      nacionalidade: "França",
      tags: "frança, atacante, plate",
      imagem:
        "https://tmssl.akamaized.net//images/foto/galerie/thierry-henry-1417524348-3352.jpg?lm=1483605830",
      titulos:
        "Premier League, FA Cup, Copa do Mundo FIFA, Eurocopa, La Liga, Copa del Rey",
      numero: "14",
      posicao: "Atacante",
      dataNascimento: "17/08/1977",
      curiosidades:
        "Henry é um dos maiores artilheiros da história do Arsenal. Ele é conhecido por sua comemoração característica, deslizando de joelhos no chão.",
    },

    // Zinédine Zidane
    {
      nome: "Zinédine Zidane",
      background: "gold",
      descricao:
        "Meia-atacante francês considerado um dos maiores jogadores de todos os tempos. Zidane era conhecido por sua técnica apurada, visão de jogo e gols espetaculares.",
      pagina: "https://www.instagram.com/zidane/",
      clube: "Aposentado (2006)",
      time1: "Real_Madrid",
      time2: "Juventus",
      time3: "Bordeaux",
      time4: "Cannes",
      nacionalidade: "França",
      tags: "frança, meia, gold",
      imagem:
        "https://cdn.artphotolimited.com/images/5a09bb8dcfe9056714cea41c/1000x1000/zinedine-zidane-2-2008-couleur.jpg",
      titulos:
        "Liga dos Campeões, Campeonato Espanhol, Copa do Mundo, Eurocopa",
      numero: "10",
      posicao: "Meia-atacante",
      dataNascimento: "23/06/1972",
      curiosidades:
        "Zidane marcou dois gols na final da Copa do Mundo de 1998, garantindo o título para a França.",
    },

    //HOLANDA--------------------------------------------------------------------------------------------------

    // Clarence Seedorf
    {
      nome: "Clarence Seedorf",
      descricao:
        "Um dos meio-campistas mais completos de sua geração, Seedorf era conhecido por sua força física, habilidade com a bola e versatilidade. Ele conquistou títulos em diversos países e é um dos poucos jogadores a vencer a Liga dos Campeões com três clubes diferentes.",
      pagina: "https://www.instagram.com/clarenceseedorf/", // Verifique o perfil oficial
      time1: "Ajax",
      time2: "Real_Madrid",
      time3: "Internazionale",
      time4: "AC_Milan",
      nacionalidade: "Holanda",
      tags: "meia, Holanda",
      imagem:
        "https://media.gettyimages.com/id/589693616/photo/holland-v-england.jpg?s=1024x1024&w=gi&k=20&c=anGIlaQ-aBLvdxFrsuHiLAoSqevxAvOx-YasXVxpIgQ=",
      titulos:
        "Liga dos Campeões (4x), Serie A, Eredivisie, Copa da Itália, Supercopa Italiana, La Liga",
      numero: "10",
      posicao: "Meio-campo",
      dataNascimento: "01/04/1976",
      curiosidades:
        "Seedorf foi um dos poucos jogadores a conquistar a Liga dos Campeões com três clubes diferentes: Ajax, Real Madrid e Milan. Ele também jogou pela seleção holandesa em diversas Copas do Mundo.",
    },

    // Edwin van der Sar
    {
      nome: "Edwin van der Sar",
      descricao:
        "Lendário goleiro holandês, conhecido por sua calma, reflexos rápidos e excelente jogo com os pés. Foi fundamental para os títulos do Ajax e do Manchester United.",
      pagina: "https://www.instagram.com/edwinvandersarofficial/", // Verificar se possui perfil oficial
      time: "Aposentado (2011)",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1200px-Flag_of_the_Netherlands.svg.png",
      alt: "Holanda",
      imagem:
        "https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2012/11/19/vandersargetty.jpg",
      tags: "Holanda, Van der Sar, goleiro, lenda, Ajax, Manchester United",
      numero: "1",
      posicao: "Goleiro",
      titulos:
        "Liga dos Campeões da UEFA (1995, 2008) <br> Eredivisie (vários títulos) - Ajax <br> Premier League (vários títulos) - Manchester United",
      dataNascimento: "29 de outubro de 1970",
      curiosidades:
        "Considerado um dos maiores goleiros da história. Foi fundamental para a conquista da Champions League com o Ajax e o Manchester United.",
    },

    // Johan Cruyff
    {
      nome: "Johan Cruyff",
      background: "gold",
      descricao:
        "Considerado um dos maiores jogadores e treinadores de futebol de todos os tempos. Johan Cruyff é o criador do 'futebol total', filosofia de jogo que valoriza a posse de bola e a criação de oportunidades de gol por todos os jogadores em campo.",
      pagina: "https://en.wikipedia.org/wiki/Johan_Cruyff",
      clube: "Aposentado (1978)",
      time1: "Feyenoord",
      time2: "Washington_Diplomats",
      time3: "Barcelona",
      time4: "Ajax",
      nacionalidade: "Holanda",
      alt: "Holanda",
      tags: "holanda, cruyff, meia, gold",
      imagem:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Johan_Cruyff_1974c.jpg/1200px-Johan_Cruyff_1974c.jpg",
      titulos:
        "Liga dos Campeões da UEFA (3x) - Ajax, Barcelona<br> Campeonato Holandês (8x) - Ajax<br> Campeonato Espanhol (4x) - Barcelona <br> Bola de Ouro (3x)",
      numero: "14",
      posicao: "Meia-atacante",
      dataNascimento: "25/04/1947",
      curiosidades:
        "Cruyff é conhecido por sua personalidade forte e suas declarações polêmicas.",
    },

    // Memphis Depay
    {
      nome: "Memphis Depay",
      descricao:
        "Atacante holandês conhecido por sua habilidade técnica e chutes potentes. Destacou-se no PSV Eindhoven e Manchester United antes de se transferir para o Barcelona. Atualmente joga no Corinthians.",
      pagina: "https://www.instagram.com/memphisdepay/",
      time: "Corinthians",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1200px-Flag_of_the_Netherlands.svg.png",
      alt: "Holanda",
      imagem:
        "https://conteudo.imguol.com.br/c/esporte/80/2024/09/21/memphis-depay-em-acao-durante-corinthians-x-atletico-go-duelo-do-campeonato-brasileiro-1726954580942_v2_3x4.jpg",
      tags: "Holanda, Corinthians, Memphis Depay, atacante",
      numero: "94",
      posicao: "Atacante",
      titulos:
        "Eredivisie (PSV Eindhoven) <br> Copa dos Países Baixos (PSV Eindhoven)",
      dataNascimento: "13/02/1994",
      curiosidades:
        "Representou a Holanda em diversas competições internacionais, como a Copa do Mundo.",
    },

    // Ruud Gullit
    {
      nome: "Ruud Gullit",
      background: "gold",
      descricao:
        "Um dos maiores jogadores de futebol de todos os tempos, Gullit era conhecido por sua elegância, habilidade e visão de jogo. Foi um dos principais jogadores da seleção holandesa e de grandes clubes europeus.",
      pagina: "https://pt.wikipedia.org/wiki/Ruud_Gullit",
      clube: "Aposentado",
      time1: "Chelsea",
      time2: "Sampdoria",
      time3: "AC_Milan",
      time4: "PSV_Eindhoven",
      nacionalidade: "Holanda",
      tags: "holanda, gullit, meia, gold",
      imagem:
        "https://www.imortaisdofutebol.com/wp-content/uploads/2021/06/gullit2.jpg",
      titulos: "Serie A, Copa dos Campeões da Europa, Copa Intercontinental",
      numero: "7",
      posicao: "Meia",
      dataNascimento: "1 de setembro de 1962",
      curiosidades:
        "Gullit foi um dos primeiros jogadores negros a se destacar no futebol europeu e foi um ícone de estilo dentro e fora de campo.",
    },

    // Van Basten
    {
      nome: "Van Basten",
      background: "gold",
      descricao:
        "Considerado um dos maiores atacantes da história do futebol, Van Basten era conhecido por sua técnica impecável, finalizações precisas e visão de jogo. Ele conquistou diversos títulos com o Milan e a seleção holandesa.",
      pagina:
        "https://www.instagram.com/marcovanbasten/" /* Verificar se existe */,
      clube: "Aposentado (1995)",
      time1: "Milan",
      time2: "Ajax",
      time3: "Golden",
      time4: "Golden",
      nacionalidade: "Holanda",
      tags: "holanda, atacante, gold",
      imagem:
        "https://i.pinimg.com/736x/23/fb/6e/23fb6e79e6a0a01c125d34e062eb156e.jpg",
      titulos:
        "Serie A, Copa dos Campeões da Europa, Copa Intercontinental, Eurocopa",
      numero: "9",
      posicao: "Atacante",
      dataNascimento: "31/10/1964",
      curiosidades:
        "Van Basten foi eleito três vezes o melhor jogador do mundo pela FIFA. Infelizmente, sua carreira foi abreviada por diversas lesões.",
    },

    //Virgil Van Dijk
    {
      nome: "Virgil van Dijk",
      descricao:
        "Zagueiro imponente e elegante, Van Dijk é conhecido por sua força física, excelente posicionamento e habilidade no jogo aéreo. É um dos pilares defensivos do Liverpool.",
      pagina: "https://www.instagram.com/virgilvandijk/",
      time: "Liverpool FC",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1200px-Flag_of_the_Netherlands.svg.png",
      alt: "Holanda",
      tags: "futebol, holanda, zagueiro, defesa, força, elegância",
      imagem:
        "https://conteudo.imguol.com.br/c/esporte/d6/2022/12/03/virgil-van-dijk-aplaude-classificacao-da-selecao-holandesa-as-quartas-1670089350999_v2_450x600.jpg", // Trocar por uma imagem do Virgil van Dijk
      titulos:
        "Premier League: 2019-20 <br> Liga dos Campeões da UEFA: 2018-19 <br> Supercopa da UEFA: 2019 <br> Mundial de Clubes da FIFA: 2019 <br> Copa da Inglaterra (FA Cup): 2021-22 <br> Copa da Liga Inglesa (Carabao Cup): 2021-22 <br> Community Shield: 2022",
      numero: "4",
      posicao: "Zagueiro",
      dataNascimento: "08/07/1991",
      curiosidades: "Van Dijk foi eleito o melhor jogador da UEFA em 2019.",
    },

    // HUNGRIA ------------------------------------------------------------------------------------------------

    // Ferenc Puskás
    {
      nome: "Ferenc Puskás",
      background: "gold",
      descricao:
        "Atacante húngaro considerado um dos maiores goleadores da história do futebol. Puskás era conhecido por sua força física, habilidade técnica e faro de gol, sendo um dos principais jogadores da seleção húngara que dominou o futebol nos anos 50.",
      pagina: "https://www.instagram.com/ferenc_puskas_official/", // Verificar se existe um perfil oficial
      clube: "Aposentado (1966)",
      time1: "Honvéd_Budapest",
      time2: "Real_Madrid",
      time3: "Golden",
      time4: "Golden",
      nacionalidade: "Hungria",
      tags: "hungria, atacante, gold",
      imagem:
        "https://static.wixstatic.com/media/c979db_0758bd87fc0f4abe8d3f09a2d1aa2c9c~mv2_d_1596_2500_s_2.jpg/v1/fill/w_568,h_890,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c979db_0758bd87fc0f4abe8d3f09a2d1aa2c9c~mv2_d_1596_2500_s_2.jpg",
      titulos: "La Liga, Copa dos Campeões, Bola de Ouro",
      numero: "9",
      posicao: "Atacante",
      dataNascimento: "02/04/1927",
      curiosidades:
        "Puskás era conhecido como 'O Galopante' devido à sua velocidade e força em campo.",
    },

    // INGLATERRA ---------------------------------------------------------------------------------------------

    //Alexander-Arnold
    {
      nome: "Alexander-Arnold",
      descricao:
        "Lateral-direito inglês, conhecido por suas habilidades de cruzamento e visão de jogo. Considerado um dos melhores da posição em sua geração.",
      pagina: "https://www.instagram.com/trentarnold/",
      time: " Liverpool FC",
      nacionalidade: "Inglaterra",
      alt: "Inglaterra",
      tags: "inglaterra, liverpool, lateral-direito",
      imagem:
        "https://pbs.twimg.com/media/GDZ6lloXIAApQ0r?format=jpg&name=4096x4096",
      titulos: "Premier League, Liga dos Campeões da UEFA",
      numero: "66",
      posicao: "Lateral-direito",
      dataNascimento: "07/10/1998",
      curiosidades:
        "Nascido e criado em Liverpool, Alexander-Arnold é torcedor do clube desde criança e fez toda sua base no time.",
    },

    // Bellingham
    {
      nome: "Jude Bellingham",
      descricao:
        "Meio-campista inglês com grande potencial, Bellingham se destaca por sua força física, habilidade técnica e visão de jogo. Atualmente joga no Borussia Dortmund.",
      pagina: "https://www.instagram.com/judebellingham/",
      time: "Real Madrid",
      nacionalidade: "Inglaterra",
      alt: "Inglaterra",
      tags: "inglaterra, meio-campista, meia",
      imagem:
        "https://conteudo.imguol.com.br/c/esporte/2f/2023/10/28/bellingham-comemora-apos-marcar-pelo-real-madrid-contra-o-barcelona-no-espanhol-1698508629877_v2_3x4.jpg",
      titulos:
        "Bundesliga, Liga dos Campeões, Supertaça Europeia, Supertaça de Espanha, Taça da Alemanha.",
      numero: "5",
      posicao: "Meio-campista",
      dataNascimento: "29/06/2003",
      curiosidades:
        "Bellingham é considerado uma das maiores promessas do futebol mundial.",
    },

    // Bobby Charlton
    {
      nome: "Bobby Charlton",
      background: "gold",
      descricao:
        "Meia-atacante inglês considerado um dos maiores jogadores da história do futebol. Charlton era conhecido por sua visão de jogo, habilidade técnica e chutes poderosos, sendo um dos pilares da seleção inglesa campeã da Copa do Mundo de 1966.",
      pagina: "https://www.instagram.com/bobbycharltonofficial/", // Verificar se existe um perfil oficial
      clube: "Aposentado (1976)",
      time1: "Waterford_United",
      time2: "Preston_North_End",
      time3: "Manchester_United",
      time4: "Golden",
      nacionalidade: "Inglaterra",
      tags: "inglaterra, meia, gold",
      imagem:
        "https://www.lequipe.fr/_medias/img-photo-jpg/en-1966-sir-bobby-charlton-recoit-son-ballon-d-or-a-old-trafford-l-equipe/1500000001870324/374:390,1578:1895-828-1035-75/dd11f",
      titulos:
        "Premier League, Copa da Inglaterra, Copa dos Campeões, Copa do Mundo",
      numero: "7",
      posicao: "Meia-atacante",
      dataNascimento: "11/10/1937",
      curiosidades:
        "Charlton sobreviveu ao desastre aéreo de Munique e se tornou um símbolo de superação.",
    },

    //Bukayo Saka
    {
      nome: "Bukayo Saka",
      descricao:
        "Um dos jovens mais promissores do futebol inglês, conhecido por sua habilidade nas duas pernas, dribles rápidos e visão de jogo. É peça fundamental no Arsenal e na seleção inglesa.",
      pagina: "https://www.instagram.com/bukayosaka87/",
      time: "Arsenal",
      nacionalidade: "Inglaterra",
      alt: "Inglaterra",
      tags: "inglaterra, arsenal, ponta",
      imagem:
        "https://conteudo.imguol.com.br/c/entretenimento/d5/2022/11/21/saka-comemora-gol-inglaterra-e-ira-1669042593393_v2_3x4.jpg", // Trocar por uma imagem do Bukayo Saka
      titulos:
        "Ainda não conquistou títulos importantes como jogador profissional.",
      numero: "7",
      posicao: "Ponta",
      dataNascimento: "05/09/2001",
      curiosidades:
        "Começou sua carreira nas categorias de base do Arsenal e rapidamente se tornou um dos principais jogadores do time. É conhecido por sua personalidade tranquila e focada.",
    },

    // David Beckham
    {
      nome: "David Beckham",
      descricao:
        "Um dos maiores ícones do futebol mundial, conhecido por sua habilidade com a bola parada, passes precisos e estilo elegante. Jogou por grandes clubes como Manchester United, Real Madrid e LA Galaxy, além de ter sido capitão da seleção inglesa.",
      pagina: "http://www.davidbeckham.com/",
      time: "Aposentado (2013)",
      nacionalidade: "Inglaterra",
      alt: "Inglaterra",
      tags: "inglaterra, meio-campo",
      imagem:
        "https://i.pinimg.com/474x/a8/4a/49/a84a49845a7f5536efa4cd416752e890.jpg",
      titulos:
        "Premier League (6x) - Manchester United<br>Liga dos Campeões da UEFA (1x) - Manchester United<br>Copa do Mundo FIFA (2x) - Sub-20<br>La Liga (1x) - Real Madrid<br>MLS Cup (2x) - LA Galaxy",
      numero: "7",
      posicao: "Meia",
      dataNascimento: "2 de maio de 1975",
      curiosidades:
        "Além de sua carreira no futebol, Beckham é um ícone da moda e um dos atletas mais bem pagos do mundo. É casado com a ex-Spice Girl Victoria Beckham e possui uma linha de roupas própria.",
    },

    //Declan Rice
    {
      nome: "Declan Rice",
      descricao:
        "Um volante inglês conhecido por sua força física, excelente passe e habilidade para desarmar jogadas adversárias. É considerado um dos melhores jovens jogadores da sua posição no mundo.",
      pagina: "https://www.instagram.com/declanrice/",
      time: "Arsenal",
      nacionalidade: "Inglaterra",
      alt: "Inglaterra",
      tags: "inglaterra, arsenal, volante",
      imagem:
        "https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2023/06/28/482743604-west-ham-united-v-az-alkmaar-semi-final-first-leg-uefa-europa-conference-league-2048x1366.jpg", // Trocar por uma imagem do Declan Rice
      titulos: "Europa Conference League, Supercopa da Inglaterra",
      numero: "41",
      posicao: "Volante",
      dataNascimento: "14/01/1999",
      curiosidades:
        "Começou sua carreira nas categorias de base do Chelsea, mas se transferiu para o West Ham United, onde se destacou antes de se mudar para o Arsenal.",
    },

    // Dele Alli
    {
      nome: "Dele Alli",
      descricao:
        "Meia-atacante talentoso e versátil, Alli é conhecido por sua visão de jogo, passes precisos e gols importantes. Sua habilidade de marcar gols de média distância o destaca.",
      pagina: "https://www.instagram.com/delealli/", // Verificar o perfil oficial
      time: "Sem clube (último: Tottenham Hotspur FC)",
      nacionalidade: "Inglaterra",
      alt: "Inglaterra",
      tags: "inglaterra, meia, alli",
      imagem:
        "https://s.yimg.com/ny/api/res/1.2/FKblAAN5IwHgVmwiLgHl8Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTgzOA--/https://media.zenfs.com/en/the_independent_635/226dd8556fb9af62fe8acb357b89a603",
      titulos:
        "Premier League (2016) - Tottenham Hotspur <br> FA Cup (2018) - Tottenham Hotspur",
      numero: "20",
      posicao: "Meia-atacante",
      dataNascimento: "11/04/1996",
      curiosidades:
        "Alli iniciou sua carreira no MK Dons e rapidamente se tornou um dos jovens talentos mais promissores do futebol inglês.",
    },

    // Harry Kane
    {
      nome: "Harry Kane",
      descricao:
        "Atacante inglês, capitão da seleção e conhecido por sua finalização precisa.",
      pagina: "https://www.instagram.com/hkane/",
      time: "FC Bayern München",
      nacionalidade: "Inglaterra",
      alt: "Inglaterra",
      tags: "inglaterra, atacante, bayern de munique",
      imagem:
        "https://conteudo.imguol.com.br/c/esporte/bf/2024/03/09/harry-kane-celebra-gol-pelo-bayern-contra-o-mainz-no-campeonato-alemao-1710011327149_v2_450x600.jpg", // Trocar por uma imagem do Harry Kane
      titulos: "Premier League",
      numero: "9",
      posicao: "Atacante",
      dataNascimento: "28/07/1993",
      curiosidades: "Artilheiro histórico da seleção inglesa.",
    },

    //Jack Grealish
    {
      nome: "Jack Grealish",
      descricao:
        "Meia-atacante inglês conhecido por sua habilidade com a bola, dribles e passes precisos. Um dos principais jogadores do Manchester City, Grealish é famoso por sua paixão pelo jogo e pela torcida.",
      pagina: "https://www.instagram.com/jackgrealish/",
      time: " Manchester City FC",
      nacionalidade: "Inglaterra",
      alt: "Inglaterra",
      tags: "inglaterra, manchester city, meia",
      imagem: "https://s.hs-data.com/bilder/spieler/gross/209502.jpg",
      titulos: "Premier League",
      numero: "10",
      posicao: "Meia-atacante",
      dataNascimento: "10/09/1995",
      curiosidades:
        "Grealish é um torcedor fanático do Aston Villa, clube onde começou sua carreira. Ele é conhecido por sua comemoração característica, deslizando de joelhos no gramado.",
    },

    //Kyle Walker
    {
      nome: "Kyle Walker",
      descricao:
        "Um dos laterais-direitos mais rápidos e habilidosos do mundo, conhecido por sua força física e cruzamentos precisos. É peça fundamental na defesa do Manchester City.",
      pagina: "https://www.instagram.com/kylewalker2/",
      time: "Manchester City FC",
      nacionalidade: "Inglaterra",
      alt: "Inglaterra",
      tags: "inglaterra, manchester city, lateral-direito",
      imagem:
        "https://www.mancity.com/features/ikyle-walker/assets/AWphNiiQ1I/ky2-683x1024.jpeg", // Trocar por uma imagem do Kyle Walker
      titulos: "Premier League",
      numero: "2",
      posicao: "Lateral-direito",
      dataNascimento: "28/05/1990",
      curiosidades:
        "Começou sua carreira no Sheffield United e já defendeu a seleção inglesa em diversas competições.",
    },

    //Marcus Rashford
    {
      nome: "Marcus Rashford",
      descricao:
        "Atacante inglês conhecido por sua velocidade, habilidade nos dribles e espírito de luta. É um dos principais jogadores do Manchester United e da seleção inglesa.",
      pagina: "https://www.instagram.com/marcusrashford/",
      time: " Manchester United FC",
      nacionalidade: "Inglaterra",
      alt: "Inglaterra",
      tags: "inglaterra, manchester united, atacante",
      imagem:
        "https://media.gettyimages.com/id/1467624269/pt/foto/manchester-england-marcus-rashford-of-manchester-united-celebrates-after-scoring-the-teams.jpg?s=612x612&w=gi&k=20&c=SMd31bml0Pi8XG8icrF1vykgs-9YghAC1-oq7u25s5c=", // Trocar por uma imagem do Marcus Rashford
      titulos: "Liga Europa, Supercopa da UEFA",
      numero: "10",
      posicao: "Atacante",
      dataNascimento: "31/10/1997",
      curiosidades:
        "Rashford é conhecido por seu trabalho social e por ter marcado gols importantes em jogos decisivos.",
    },

    // Michael Owen
    {
      nome: "Michael Owen",
      background: "plate",
      descricao:
        "Atacante inglês conhecido por sua velocidade e finalização. Foi um dos principais jogadores do Liverpool e da seleção inglesa.",
      pagina: "https://pt.wikipedia.org/wiki/Michael_Owen",
      clube: "Aposentado (2013)",
      time1: "Liverpool",
      time2: "Real_Madrid",
      time3: "Newcastle_United",
      time4: "Manchester_United",
      nacionalidade: "Inglaterra",
      tags: "inglaterra, michael owen, atacante, plate",
      imagem: "https://i.redd.it/yy22qn6a8pwc1.jpeg",
      titulos: "Premier League, Copa da UEFA, Copa da Inglaterra",
      numero: "10",
      posicao: "Atacante",
      dataNascimento: "14 de dezembro de 1979",
      curiosidades: "Owen foi eleito o melhor jogador jovem do mundo em 2001.",
    },

    //Phil Foden
    {
      nome: "Phil Foden",
      descricao:
        "Um dos jovens talentos mais brilhantes do futebol inglês, conhecido por sua habilidade com a bola, visão de jogo e dribles incríveis. É considerado uma das maiores promessas do Manchester City.",
      pagina: "https://www.instagram.com/philfoden/", // Ajustar se necessário
      time: "Manchester City FC",
      nacionalidade: "Inglaterra",
      alt: "Inglaterra",
      tags: "inglaterra, manchester city, meia-atacante, meia",
      imagem:
        "https://www.shutterstock.com/editorial/image-editorial/M0TcMd06NfzcAb52MzIyNjk=/phil-foden-manchester-city-440nw-13355492em.jpg", // Trocar por uma imagem do Phil Foden
      titulos: "Premier League, Copa da Liga Inglesa",
      numero: "47",
      posicao: "Meia-atacante",
      dataNascimento: "28/05/2000",
      curiosidades:
        "Torcedor do Manchester City desde criança, Foden se juntou à academia do clube aos 9 anos de idade.",
    },

    //Raheem Sterling
    {
      nome: "Raheem Sterling",
      descricao:
        "Atacante inglês conhecido por sua velocidade, habilidade nos dribles e finalização precisa. Teve passagens marcantes por Liverpool e Manchester City, e atualmente defende a camisa do Chelsea.",
      pagina: "https://www.instagram.com/sterling7/",
      time: "Arsenal FC",
      nacionalidade: "Inglaterra",
      alt: "Inglaterra",
      tags: "inglaterra, chelsea, atacante",
      imagem:
        "https://upload.wikimedia.org/wikipedia/commons/3/3f/Raheem_Sterling_2018.jpg", // Trocar por uma imagem do Raheem Sterling
      titulos: "Premier League, Copa da Liga Inglesa",
      numero: "30",
      posicao: "Atacante",
      dataNascimento: "08/12/1994",
      curiosidades:
        "Começou sua carreira profissional no Liverpool, onde se destacou rapidamente. É conhecido por seu engajamento em causas sociais.",
    },

    // Steven Gerrard
    {
      nome: "Steven Gerrard",
      descricao:
        "Meio-campista lendário, Gerrard é considerado um dos maiores jogadores da história do Liverpool. Conhecido por sua liderança e gols decisivos, ele é um ídolo para a torcida dos Reds.",
      pagina: "https://www.instagram.com/stevengerrard/", // Verifique o perfil oficial
      time1: "Los_Angeles_Galaxy",
      time2: "Liverpool",
      time3: "Vazio",
      time4: "Vazio",
      nacionalidade: "Inglaterra",
      tags: "meia, Inglaterra, guerrard",
      imagem:
        "https://www.imortaisdofutebol.com/wp-content/uploads/2020/04/g219387_u90838_England-Steven-Gerrard-.jpg",
      titulos:
        "Premier League, FA Cup, Copa da Liga Inglesa, Liga dos Campeões da UEFA, UEFA Cup",
      numero: "4",
      posicao: "Meio-campo",
      dataNascimento: "30/05/1980",
      curiosidades:
        "Gerrard é considerado um dos maiores capitães da história do futebol.",
    },

    // Wayne Rooney
    {
      nome: "Wayne Rooney",
      background: "plate",
      descricao:
        "Atacante inglês conhecido por sua força física, técnica apurada e espírito de luta. Foi um dos principais jogadores do Manchester United e da seleção inglesa.",
      pagina: "https://pt.wikipedia.org/wiki/Wayne_Rooney",
      clube: "Aposentado (2021)",
      time1: "Manchester_United",
      time2: "Everton",
      time3: "D.C._United",
      time4: "Derby_County",
      nacionalidade: "Inglaterra",
      tags: "inglaterra, wayne rooney, atacante, plate",
      imagem:
        "https://lendasdofutebol.com/wp-content/uploads/2021/02/wayne-rooney-captain-2-1-295x395-optimized.jpg",
      titulos: "Premier League, FA Cup, Liga dos Campeões",
      numero: "10",
      posicao: "Atacante",
      dataNascimento: "24 de outubro de 1985",
      curiosidades:
        "Rooney é o maior artilheiro da história do Manchester United.",
    },

    //IRLANDA DO NORTE -------------------------------------------------------------------------------------

    // George Best
    {
      nome: "George Best",
      background: "gold",
      descricao:
        "Considerado um dos maiores jogadores de futebol de todos os tempos, George Best era famoso por sua habilidade com a bola, dribles rápidos e visão de jogo. Ídolo do Manchester United, conquistou diversos títulos e encantou a Europa com seu talento.",
      pagina: "https://en.wikipedia.org/wiki/George_Best",
      clube: "Aposentado (1984)",
      time1: "Bournemouth",
      time2: "San_Jose_Earthquakes",
      time3: "Los_Angeles_Aztecs",
      time4: "Manchester_United",
      nacionalidade: "Irlanda_do_Norte",
      alt: "Irlanda do Norte",
      tags: "irlanda do norte, ponta esquerda, gold",
      imagem:
        "https://lendasdofutebol.com/wp-content/uploads/2021/01/george-best-jpeg-original-reedit-optimized.jpg", // Substituir por uma imagem do George Best
      titulos:
        "Primeira Divisão Inglesa (2x) - Manchester United<br> Copa da Europa (1x) - Manchester United",
      numero: "7",
      posicao: "Ponta esquerda",
      dataNascimento: "22/05/1946",
      curiosidades:
        "Além de sua habilidade em campo, George Best era conhecido por seu estilo de vida extravagante e sua beleza, o que o tornou um ícone da cultura pop. Infelizmente, seus problemas com o alcoolismo marcaram os últimos anos de sua vida.",
    },

    //ITÁLIA---------------------------------------------------------------------------------------------------

    // Alessandro Nesta
    {
      nome: "Alessandro Nesta",
      descricao:
        "Um dos maiores zagueiros da sua geração, Nesta era conhecido por sua elegância, classe e habilidades defensivas. Ele era um líder nato e um exemplo para os mais jovens.",
      pagina: "https://www.instagram.com/alessandronestaofficial/", // Verifique o perfil oficial
      time1: "Lazio",
      time2: "AC_Milan",
      time3: "CF_Montreal",
      time4: "Chennaiyin_FC",
      nacionalidade: "Italia",
      tags: "zagueiro, Italia",
      imagem:
        "https://i.pinimg.com/474x/1e/b6/00/1eb600e3edaade0b3a548dd5ca5b96b1.jpg",
      titulos:
        "Serie A, Copa da Itália, Supercopa Italiana, Liga dos Campeões, Copa do Mundo",
      numero: "13",
      posicao: "Zagueiro",
      dataNascimento: "19/03/1976",
      curiosidades:
        "Nesta era conhecido por sua elegância e por sua capacidade de sair jogando com a bola nos pés. Ele também foi um dos líderes da Seleção Italiana campeã do mundo em 2006.",
    },

    // Andrea Pirlo
    {
      nome: "Andrea Pirlo",
      descricao:
        "Considerado um dos maiores meias de sua geração, Pirlo era conhecido por sua elegância, passes precisos e visão de jogo excepcional. Ele era o maestro da equipe, ditando o ritmo do jogo com sua calma e classe.",
      pagina: "https://www.instagram.com/andreapirloofficial/", // Verifique o perfil oficial
      time1: "AC_Milan",
      time2: "Juventus",
      time3: "Internazionale",
      time4: "New_York_City_FC",
      nacionalidade: "Italia",
      tags: "meia, Itália",
      imagem:
        "https://sportsmatik.com/uploads/world-events/players/andrea-pirlo_1564485467.jpg",
      titulos:
        "Serie A, Copa da Itália, Supercopa Italiana, Liga dos Campeões, Copa do Mundo, Eurocopa",
      numero: "21",
      posicao: "Meia",
      dataNascimento: "19/05/1979",
      curiosidades:
        "Pirlo era conhecido por sua famosa execução de faltas, com a bola girando no ar. Ele também era um grande fã de vinho e um apreciador de arte.",
    },

    //Cannavaro
    {
      nome: "Cannavaro",
      descricao:
        "Um dos maiores zagueiros da história do futebol, Cannavaro era conhecido por sua liderança, força física e habilidade em desarmar os atacantes adversários. Ele foi fundamental para a conquista da Copa do Mundo de 2006 pela Itália.",
      pagina: "https://www.instagram.com/fabiocannavaroofficial/", // Verifique o perfil oficial
      time1: "Parma",
      time2: "Internazionale",
      time3: "Juventus",
      time4: "Real_Madrid",
      nacionalidade: "Italia",
      tags: "zagueiro, Italia, Itália",
      imagem:
        "https://i.pinimg.com/474x/48/b4/99/48b4999bc2a7dbc15ee80a0dfe19b661.jpg",
      titulos:
        "Serie A, Copa da Itália, Supercopa Italiana, Liga dos Campeões, Copa do Mundo, Bola de Ouro",
      numero: "5",
      posicao: "Zagueiro",
      dataNascimento: "13/09/1973",
      curiosidades:
        "Cannavaro foi o primeiro defensor a ganhar a Bola de Ouro, em 2006. Ele também é conhecido por sua rivalidade com o atacante Adriano.",
    },

    // Ciro Immobile
    {
      nome: "Ciro Immobile",
      apelido: "Il Ciro Immobile",
      descricao:
        "Atacante completo e artilheiro nato, Immobile é conhecido por sua finalização precisa, jogo aéreo e habilidade de marcar gols importantes. É um dos principais atacantes da Serie A.",
      pagina: "https://www.instagram.com/ciroimmobile/",
      time: "Beşiktaş Jimnastik Kulübü",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg",
      alt: "Itália",
      tags: "itália, atacante",
      imagem:
        "https://i.pinimg.com/736x/58/a7/6b/58a76ba1c00c05ab344675248c67dff7.jpg",
      titulos: "Serie A, Copa da Itália",
      numero: "17",
      posicao: "Atacante",
      dataNascimento: "20/02/1990",
      curiosidades:
        "Immobile foi artilheiro da Serie A em diversas temporadas e já vestiu a camisa da seleção italiana.",
    },

    // Federico Chiesa
    {
      nome: "Federico Chiesa",
      descricao:
        "Atacante veloz e habilidoso, Chiesa é conhecido por sua driblagem, cruzamentos precisos e finalizações de média distância. É uma das maiores promessas do futebol italiano.",
      pagina: "https://www.instagram.com/federicochiesa/",
      time: "Liverpool FC",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg",
      alt: "Itália",
      tags: "itália, atacante",
      imagem:
        "https://cdn.ilbianconero.com/images/2024-10/chiesa.liverpool.2024.25.sguardo.serio.750x450.jpg",
      titulos: "Serie A, Supercopa Italiana",
      numero: "7",
      posicao: "Atacante",
      dataNascimento: 25 / 10 / 1997,
      curiosidades:
        "Chiesa é filho do ex-jogador Enrico Chiesa e já conquistou a Eurocopa com a seleção italiana.",
    },

    // Gennaro Gattuso
    {
      nome: "Gennaro Gattuso",
      descricao:
        "Um dos meio-campistas mais duros e apaixonados do futebol italiano, conhecido por sua garra, combatividade e lealdade ao time. Foi fundamental para os sucessos do Milan nos anos 2000.",
      pagina: "https://www.instagram.com/gennarogattusoofficial/",
      time: "Aposentado (2013)",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg",
      alt: "Itália",
      tags: "Italia, meio-campo",
      imagem:
        "https://i.pinimg.com/736x/81/12/92/8112928960371b44ec9df1d956270d20.jpg",
      titulos:
        "Serie A (2x) - Milan<br>Liga dos Campeões da UEFA (2x) - Milan<br>Copa do Mundo (1x) - Itália",
      numero: "8",
      posicao: "Meio-campo",
      dataNascimento: "09/01/1978",
      curiosidades:
        "Gattuso era conhecido como 'Rino' e era famoso por sua marca registrada: a careca e a barba. Sua garra em campo o tornou um dos jogadores mais queridos pelos torcedores do Milan.",
    },

    //Gianluigi Buffon
    {
      nome: "Gianluigi Buffon",
      background: "plate",
      descricao:
        "Goleiro experiente e lendário, Buffon é conhecido por suas reflexos incríveis, liderança e longevidade. É considerado um dos maiores goleiros de todos os tempos.",
      pagina: "https://www.instagram.com/gianluigibuffon/",
      time: "Aposentado (2023)",
      time1: "Parma",
      time2: "Juventus",
      time3: "PSG",
      time4: "Plate",
      nacionalidade: "Itália",
      alt: "Itália",
      tags: "itália, goleiro, plate",
      imagem:
        "https://img.redbull.com/images/c_crop,x_171,y_0,h_627,w_501/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2018/05/17/326dcfdb-0050-430d-a51e-a90132a98bdb/buffon", // Trocar por uma imagem do Gianluigi Buffon
      titulos: "Serie A, Copa da Itália, Copa do Mundo, Copa da UEFA",
      numero: "1",
      posicao: "Goleiro",
      dataNascimento: "28/01/1978",
      curiosidades: "Buffon é o jogador com mais jogos na história da Serie A.",
    },

    // Gianluigi Donnarumma
    {
      nome: "Gianluigi Donnarumma",
      apelido: "Gigio Donnarumma",
      descricao:
        "Goleiro jovem e talentoso, Donnarumma é conhecido por sua altura, reflexos e tranquilidade em momentos decisivos. É considerado um dos maiores promessas do futebol mundial.",
      pagina: "https://www.instagram.com/gigiodonna/",
      time: "Paris Saint-Germain FC",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg",
      alt: "Itália",
      tags: "itália, goleiro, Paris Saint-Germain FC",
      imagem:
        "https://s.yimg.com/ny/api/res/1.2/kJAMCZwYMNf9SrhPlFxvRA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTgwMA--/https://media.zenfs.com/en/ligue_1_uber_eats_articles_507/a48137518162352d18042995c5ee6f2c", // Trocar por uma imagem do Gianluigi Donnarumma
      titulos: "Serie A, Supercopa Italiana, Eurocopa",
      numero: "99",
      posicao: "Goleiro",
      dataNascimento: "25/02/1999",
      curiosidades:
        "Donnarumma foi o goleiro mais jovem a jogar pela seleção italiana em uma grande competição.",
    },

    // Leonardo Bonucci
    {
      nome: "Leonardo Bonucci",
      descricao:
        "Zagueiro experiente e líder nato, Bonucci é conhecido por sua visão de jogo, passes precisos e habilidade no jogo aéreo. É um dos pilares defensivos da Juventus e da seleção italiana.",
      pagina: "https://www.instagram.com/bonuccileo19/",
      time: "Aposentado (2024)",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg",
      alt: "Itália",
      tags: "itália, zagueiro",
      imagem:
        "https://i.pinimg.com/736x/41/d4/94/41d494ec9223d92594c5a3c14b19bbaa.jpg",
      titulos: "Serie A, Copa da Itália, Champions League, Eurocopa",
      numero: "19",
      posicao: "Zagueiro",
      dataNascimento: "01/05/1987",
      curiosidades:
        "Bonucci é conhecido por sua parceria de longa data com Giorgio Chiellini na defesa da Juventus.",
    },

    // Marco Verratti
    {
      nome: "Marco Verratti",
      descricao:
        "Meia italiano conhecido por sua excelente visão de jogo, passes precisos e dribles rápidos. Fundamental para o PSG, Verratti é considerado um dos melhores meio-campistas do mundo.",
      pagina: "https://www.instagram.com/marco_verratti/",
      time: "Paris Saint-Germain FC",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg",
      alt: "Itália",
      tags: "itália, psg, meio-campo, meia, Paris Saint-Germain FC",
      imagem:
        "https://conteudo.imguol.com.br/c/esporte/79/2022/02/15/marco-verratti-recebeu-fortes-elogios-de-neymar-apos-vitoria-do-psg-sobre-o-real-madrid-1644965458522_v2_3x4.jpg",
      titulos: "Ligue 1, Coupe de France, Coupe de la Ligue",
      numero: "6",
      posicao: "Meio-campo",
      dataNascimento: "5/11/1992",
      curiosidades:
        "Apelidado de 'Petit Véron', Verratti é comparado ao lendário jogador italiano Marco Verratti por sua habilidade e estilo de jogo.",
    },

    // Nicolo Barella
    {
      nome: "Nicolò Barella",
      descricao:
        "Meia de muita energia e combatividade, Barella é conhecido por sua capacidade de desarmar, distribuir o jogo e chegar ao ataque. É uma das maiores promessas do futebol italiano.",
      pagina: "https://www.instagram.com/nicolobarrella/",
      time: "Inter de Milão",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg",
      alt: "Itália",
      tags: "itália, meio campo, meia, Inter de Milão",
      imagem:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Nicol%C3%B2_Barella_in_2021.jpg/1200px-Nicol%C3%B2_Barella_in_2021.jpg", // Trocar por uma imagem do Nicolò Barella
      titulos: "Serie A, Copa da Itália",
      numero: "23",
      posicao: "Meio-campo",
      dataNascimento: "07/02/1997",
      curiosidades:
        "Barella foi um dos destaques da seleção italiana na conquista da Eurocopa de 2021.",
    },

    // Maldini
    {
      nome: "Paolo Maldini",
      background: "gold",
      descricao:
        "Lenda do futebol italiano, conhecido por sua lealdade ao Milan e por sua habilidade defensiva. Considerado um dos maiores zagueiros da história do futebol.",
      pagina: "https://www.instagram.com/paolomaldini/",
      clube: "Aposentado",
      time1: "AC_Milan",
      time3: "Golden",
      time2: "Golden",
      time4: "Golden",
      nacionalidade: "Italia",
      tags: "italia, Itália, zagueiro, gold",
      imagem:
        "https://conteudo.imguol.com.br/c/esporte/c6/2017/06/18/paolo-maldini-foi-idolo-do-milan-1497826738095_v2_900x506.jpg",
      titulos:
        "Serie A, Liga dos Campeões da UEFA, Copa da Itália, Copa Intercontinental, Copa do Mundo de Clubes",
      numero: "3",
      posicao: "Zagueiro",
      dataNascimento: "26/06/1968",
      curiosidades:
        "Jogou toda a sua carreira profissional no Milan, sendo um dos símbolos do clube. É considerado um dos maiores capitães da história do futebol.",
    },

    //JAPÃO----------------------------------------------------------------------------------------------------

    // Shunsuke Nakamura
    {
      nome: "Shunsuke Nakamura",
      descricao:
        "Um dos maiores jogadores japoneses de todos os tempos, famoso por seus chutes livres precisos e sua visão de jogo. Shunsuke encantou os fãs do futebol com seu estilo elegante e habilidoso.",
      pagina: "http://www.shunsuke.com/",
      time1: "Yokohama_F._Marinos",
      time2: "Reggina",
      time3: "Celtic",
      time4: "Espanyol",
      nacionalidade: "Japão",
      tags: "japão, meia",
      imagem:
        "https://upload.wikimedia.org/wikipedia/commons/e/e4/Shunsuke2_20080622.png",
      titulos:
        "J. League (2x), Copa da Liga Escocesa (2x), Copa da Escócia (2x)",
      numero: "10",
      posicao: "Meia",
      dataNascimento: "24/06/1978",
      curiosidades:
        "Shunsuke Nakamura é considerado um dos maiores jogadores asiáticos de todos os tempos. Seus chutes livres eram uma marca registrada e ele foi eleito o melhor jogador estrangeiro da história do Celtic.",
    },

    //NIGÉRIA--------------------------------------------------------------------------------------------------

    // Jay-Jay Okocha
    {
      nome: "Jay-Jay Okocha",
      descricao:
        "Considerado um dos maiores craques da história do futebol nigeriano, Jay-Jay Okocha era conhecido por sua habilidade excepcional com a bola, dribles desconcertantes e passes precisos. Sua alegria em campo e seu carisma o tornaram um dos jogadores mais queridos pelos fãs.",
      pagina: "https://www.instagram.com/jayjayokocha/", // Verifique o perfil oficial
      time1: "Enugu_Rangers",
      time2: "Borussia_Neunkirchen",
      time3: "Eintracht_Frankfurt",
      time4: "Fenerbahçe",
      nacionalidade: "Nigéria",
      tags: "nigéria, meia",
      imagem:
        "https://i.pinimg.com/originals/16/0a/f3/160af3d6517dc8e7774826e82c9e2434.jpg",
      titulos:
        "Ouro nos Jogos Olímpicos de Atlanta 1996 com a seleção nigeriana",
      numero: "10",
      posicao: "Meia-atacante",
      dataNascimento: "14 de agosto de 1973",
      curiosidades:
        "Okocha era conhecido por seus dribles desconcertantes e sua capacidade de fazer a bola 'dançar' aos seus pés. Ele era um dos poucos jogadores ambidestros de alto nível, o que o tornava ainda mais imprevisível para os adversários.",
    },

    //NORUEGA--------------------------------------------------------------------------------------------------

    //Erling Haaland
    {
      nome: "Erling Haaland",
      descricao:
        "Atacante jovem e talentoso, Haaland é conhecido por sua força física, velocidade e habilidade de marcar gols. É um dos maiores artilheiros da atualidade.",
      pagina: "https://www.instagram.com/erlinghaaland/",
      time: "Manchester City FC",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/234px-Flag_of_Norway.svg.png",
      alt: "Noruega",
      tags: "noruega, atacante, Manchester City FC",
      imagem:
        "https://tmssl.akamaized.net//images/foto/galerie/erling-haaland-manchester-city-2024-1727103341-148917.jpg", // Trocar por uma imagem do Erling Haaland
      titulos: "Bundesliga, Champions League",
      numero: "9",
      posicao: "Atacante",
      dataNascimento: "21/07/2000",
      curiosidades:
        "Haaland é filho do ex-jogador Alf-Inge Haaland e já quebrou diversos recordes de gols em sua carreira.",
    },

    //PAÍS DE GALES---------------------------------------------------------------------------------------------

    // Gareth Bale
    {
      nome: "Gareth Bale",
      background: "plate",
      descricao:
        "Jogador de futebol galês conhecido por sua velocidade e chutes potentes. Atuou em grandes clubes como Tottenham e Real Madrid.",
      pagina: "https://pt.wikipedia.org/wiki/Gareth_Bale",
      clube: "Aposentado (2022)",
      time1: "Tottenham_Hotspur",
      time2: "Real_Madrid",
      time3: "Los_Angeles_FC",
      time4: "Southampton",
      nacionalidade: "País_de_Gales",
      tags: "pais de gales, gareth bale, ponta direita, plate",
      imagem:
        "https://s2-oglobo.glbimg.com/Qjgd1TSr70094ky2vERBsWiMDD4=/0x0:2346x1562/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/J/n/mH91NkS56mNCBRfFtpoQ/101259316-wales-forward-11-gareth-bale-celebrates-scoring-his-teams-first-goal-during-the-qat.jpg",
      titulos: "La Liga, Liga dos Campeões, Copa do Rei",
      numero: "11",
      posicao: "Ponta-direita",
      dataNascimento: "16 de julho de 1989",
      curiosidades:
        "Bale é conhecido por sua comemoração fazendo um coração com as mãos.",
    },

    //POLÔNIA---------------------------------------------------------------------------------------------------

    // Arkadiusz Milik
    {
      nome: "Arkadiusz Milik",
      apelido: "Arek",
      descricao:
        "Atacante completo e forte fisicamente, Milik é conhecido por sua finalização precisa e jogo aéreo. É um dos principais atacantes da seleção polonesa.",
      pagina: "https://www.instagram.com/arekmilik9/",
      time: "Juventus FC",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/800px-Flag_of_Poland.svg.png",
      alt: "Polônia",
      tags: "polônia, atacante, Juventus FC",
      imagem:
        "https://media.gettyimages.com/id/1387710130/sv/foto/glasgow-scotland-poland-player-arkadiusz-milik-in-action-during-the-international-friendly.jpg?s=612x612&w=gi&k=20&c=h84J1_CBlPRmy-vDEX5SQU_Or4meSfeyVN5JPWMMhCY=", // Trocar por uma imagem do Arkadiusz Milik
      titulos: "Eredivisie, Copa da Polônia",
      numero: "14",
      posicao: "Atacante",
      dataNascimento: "28/02/1994",
      curiosidades:
        "Milik sofreu uma grave lesão no joelho no início de sua carreira, mas conseguiu se recuperar e voltar a jogar em alto nível.",
    },

    // Kamil Glik
    {
      nome: "Kamil Glik",
      descricao:
        "Zagueiro forte e experiente, Glik é conhecido por sua força física, liderança e jogo aéreo. É um dos pilares defensivos da seleção polonesa.",
      pagina: "https://www.instagram.com/kamilglik/", // Verificar se existe
      time: "KS Cracovia",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/800px-Flag_of_Poland.svg.png",
      alt: "Polônia",
      tags: "polônia, zagueiro, KS Cracovia",
      imagem:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Kamil_Glik_2018.jpg/200px-Kamil_Glik_2018.jpg", // Trocar por uma imagem do Kamil Glik
      titulos: "Serie A, Ligue 1",
      numero: "15",
      posicao: "Zagueiro",
      dataNascimento: "03/02/1988",
      curiosidades:
        "Glik já jogou em grandes clubes como Monaco e Benevento e é um dos líderes da seleção polonesa.",
    },

    // Piotr Zieliński
    {
      nome: "Piotr Zieliński",
      descricao:
        "Meio-campista talentoso e elegante, Zieliński é conhecido por sua habilidade técnica, visão de jogo e passes precisos. É um dos principais jogadores da seleção polonesa.",
      pagina: "https://www.instagram.com/piotrzielinski/",
      time: "Inter de Milão",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/800px-Flag_of_Poland.svg.png",
      alt: "Polônia",
      tags: "polônia, meio campo, meia, Inter de Milão",
      imagem:
        "https://citynews-napolitoday.stgy.ovh/~media/original-hi/27935426413526/zielinski-foto-lapresse-3.jpg",
      titulos: "Serie A, Copa da Itália",
      numero: "7",
      posicao: "Meio-campista",
      dataNascimento: "20/05/1994",
      curiosidades:
        "Zieliński começou sua carreira no Ząbkowice Śląskie, na Polônia.",
    },

    // Robert Lewandowski
    {
      nome: "Robert Lewandowski",
      background: "plate",
      descricao:
        "Considerado um dos melhores atacantes do mundo, Lewandowski é conhecido por sua força física, precisão nos chutes e habilidade de marcar gols. Ele já quebrou diversos recordes e conquistou muitos títulos na carreira.",
      pagina: "https://www.instagram.com/robert_lewandowski/",
      clube: "Barcelona",
      time4: "Lech_Poznań",
      time3: "Borussia_Dortmund",
      time2: "Bayern_de_Munique",
      time1: "Barcelona",
      nacionalidade: "Polônia",
      tags: "polônia, atacante, plate",
      imagem:
        "https://tmssl.akamaized.net/images/foto/galerie/robert-lewandowski-fc-barcelona-2024-25-1730103967-152589.jpg",
      titulos:
        "Bundesliga, Copa da Alemanha, Liga dos Campeões da UEFA, La Liga",
      numero: "9",
      posicao: "Atacante",
      dataNascimento: "21/08/1988",
      curiosidades:
        "Lewandowski é conhecido por sua ética de trabalho e sua dedicação aos treinos. Ele é um dos maiores artilheiros da história da Bundesliga.",
    },

    // Wojciech Szczęsny
    {
      nome: "Wojciech Szczęsny",
      descricao:
        "Goleiro polonês, conhecido por suas defesas espetaculares, reflexos rápidos e liderança em campo. É um dos pilares da Juventus.",
      pagina: "https://www.instagram.com/wojciechszczesny1/",
      time: "FC Barcelona",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/800px-Flag_of_Poland.svg.png",
      alt: "Polônia",
      tags: "polônia, goleiro, FC Barcelona",
      imagem:
        "https://i.pinimg.com/474x/ec/80/1f/ec801f3925e34507b0869cc625193d3c.jpg",
      titulos: "Serie A, Copa da Itália",
      numero: "25",
      posicao: "Goleiro",
      dataNascimento: "18/04/1990",
      curiosidades:
        "Szczęsny começou sua carreira no Arsenal e já foi companheiro de equipe de grandes jogadores como Cristiano Ronaldo e Mesut Özil.",
    },

    //PORTUGAL--------------------------------------------------------------------------------------------------

    //Bruno Fernandes
    {
      nome: "Bruno Fernandes",
      descricao:
        "Meia português conhecido por sua visão de jogo e habilidade para marcar gols, Bruno Fernandes é um dos líderes do Manchester United.",
      pagina: "https://www.instagram.com/brunofernandes/",
      time: "Manchester United FC",
      nacionalidade: "Portugal",
      alt: "Portugal",
      tags: "portugal, meia, Manchester United FC",
      imagem: "https://pbs.twimg.com/media/Fy2qUkAWwAIYQ4g.jpg:large",
      titulos: "Europa League",
      numero: "8",
      posicao: "Meia",
      dataNascimento: "08/09/1994",
      curiosidades:
        "Bruno Fernandes é conhecido por suas cobranças de falta e pênaltis.",
    },

    // Cancelo
    {
      nome: "João Cancelo",
      descricao:
        "Lateral direito português conhecido por sua habilidade nos cruzamentos e visão de jogo, Cancelo se destacou no Juventus e Manchester City.",
      pagina: "https://www.instagram.com/joao.cancelo/",
      time: "Al-Hilal Saudi FC",
      nacionalidade: "Portugal",
      alt: "Portugal",
      tags: "portugal, Al-Hilal Saudi FC, lateral",
      imagem:
        "https://www.sportphotogallery.com/content/images/cmsfiles/product/46797/47874-zoom.jpg",
      titulos: "Premier League, Serie A, Copa da Itália",
      numero: "20",
      posicao: "Lateral-direito",
      dataNascimento: "27/05/1994",
      curiosidades:
        "Cancelo é considerado um dos melhores laterais do mundo na atualidade.",
    },

    //Cristiano Ronaldo
    {
      nome: "Cristiano Ronaldo",
      background: "gold",
      descricao:
        "Português, famoso por sua força, velocidade e habilidade aérea. Um dos maiores goleadores, jogou no Manchester United, Real Madrid, Juventus e atualmente no Al-Nassr.",
      pagina: "https://www.instagram.com/cristiano/",
      clube: "Al-Nassr",
      time1: "Al-Nassr",
      time2: "Manchester_United",
      time3: "Juventus",
      time4: "Real_Madrid",
      nacionalidade: "Portugal",
      alt: "Portugal",
      tags: "portugal, al nassr, Al-Nassr FC, gold",
      imagem:
        "https://conteudo.imguol.com.br/c/esporte/cc/2024/08/22/cristiano-ronaldo-comemora-gol-do-al-nassr-diante-do-al-raed-em-jogo-do-campeonato-saudita-1724354605510_v2_3x4.jpg",
      titulos:
        "liga dos campeões <br> premier league <br> la liga <br> eurocopa",
      numero: "7",
      posicao: "Atacante",
      dataNascimento: "05/02/1985",
      curiosidades:
        "Cristiano Ronaldo é conhecido por sua dedicação aos treinos e sua rotina de cuidados com o corpo. Ele também é um grande filantropo e utiliza sua fama para ajudar pessoas necessitadas.",
    },

    // Eusébio
    {
      nome: "Eusébio",
      background: "gold",
      descricao:
        "Considerado um dos maiores jogadores de futebol de todos os tempos, Eusébio era famoso por sua velocidade, força física e habilidade com a bola. Ídolo do Benfica, conquistou diversos títulos e encantou o mundo com seus gols memoráveis.",
      pagina: "https://en.wikipedia.org/wiki/Eusebio",
      clube: "Aposentado (1979)",
      time1: "Beira-Mar",
      time2: "Benfica",
      time3: "CD_Maxaquene_Maputo",
      time4: "Golden",
      nacionalidade: "Portugal",
      alt: "Portugal",
      tags: "portugal, atacante, eusebio, gold",
      imagem:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Eusebio_%281963_version2%29.jpg/300px-Eusebio_%281963_version2%29.jpg",
      titulos:
        "Campeonato Português (11x) - Benfica<br> Taça de Portugal (5x) - Benfica<br> Copa dos Campeões Europeus (2x) - Benfica<br> Bola de Ouro (1x)",
      numero: "8",
      posicao: "Atacante",
      dataNascimento: "25/01/1942",
      curiosidades:
        "Eusébio era conhecido por sua humildade e carisma. Apesar de ter sido um dos maiores jogadores da história, sempre manteve os pés no chão e era muito querido pelos fãs.",
    },

    // Luís Figo
    {
      nome: "Luís Figo",
      background: "plate",
      descricao:
        "Considerado um dos maiores jogadores portugueses de todos os tempos, Figo era conhecido por sua habilidade nos dribles, visão de jogo e chutes precisos. Atuou por grandes clubes europeus como Barcelona e Real Madrid, e foi eleito o melhor jogador do mundo pela FIFA em 2001.",
      pagina: "https://www.instagram.com/luisfigo/",
      clube: "Internazionale (último clube como jogador)",
      time1: "Sporting",
      time2: "Barcelona",
      time3: "Real_Madrid",
      time4: "Internazionale",
      nacionalidade: "Portugal",
      tags: "portugal, meia, plate",
      imagem:
        "https://cdn.record.pt/images/2021-10/img_834x600$2021_10_12_01_59_58_1914586.jpg",
      titulos:
        "La Liga, Copa del Rey, Liga dos Campeões da UEFA, Serie A, Copa da Itália",
      numero: "7",
      posicao: "Meia",
      dataNascimento: "04/11/1972",
      curiosidades:
        "Sua transferência do Barcelona para o Real Madrid foi uma das mais polêmicas do futebol mundial. Figo foi um dos principais jogadores da seleção portuguesa, participando de várias Copas do Mundo e Eurocopas.",
    },

    // Pepe
    {
      nome: "Pepe",
      descricao:
        "O zagueiro português Pepe é conhecido por sua força física, agressividade nas disputas e experiência. Tendo jogado por grandes clubes como Porto, Real Madrid e Porto novamente, conquistou diversos títulos e se tornou um dos principais defensores da sua geração.",
      pagina: "https://pt.wikipedia.org/wiki/Pepe_(futebolista)",
      time: "Aposentado (2024)",
      nacionalidade: "Portugal",
      alt: "Portugal",
      tags: "portugal, zagueiro",
      imagem:
        "https://conteudo.imguol.com.br/c/copadomundo/2018/Imagem/02/2018/06/29/pepe-zagueiro-da-selecao-de-portugal-1530308311434_v2_3x4.jpg",
      titulos:
        "Liga Portuguesa (vários) - Porto<br> La Liga (3x) - Real Madrid<br> Liga dos Campeões da UEFA (3x) - Real Madrid<br> Eurocopa (2016) - Portugal",
      numero: "3",
      posicao: "Zagueiro",
      dataNascimento: "28 de fevereiro de 1983",
      curiosidades:
        "Pepe é conhecido por sua lealdade aos clubes que defende e por sua capacidade de liderar a defesa. Ele já foi considerado um dos melhores zagueiros do mundo.",
    },

    // Rui Costa
    {
      nome: "Rui Costa",
      descricao:
        "Considerado um dos maiores meias da sua geração, Rui Costa era conhecido por sua elegância, técnica apurada e visão de jogo excepcional. Ele encantou os fãs com seus passes precisos e chutes de longa distância.",
      pagina: "https://www.instagram.com/ruicostaoficial/", // Verifique o perfil oficial
      time1: "Benfica",
      time2: "Fiorentina",
      time3: "AC_Milan",
      time4: "Sporting",
      nacionalidade: "Portugal",
      tags: "Portugal, meia",
      imagem:
        "https://tmssl.akamaized.net//images/foto/galerie/rui-costa-portugal-1492092580-9757.jpg?lm=1492092605",
      titulos:
        "Serie A, Copa da Itália, Supercopa Italiana, UEFA Champions League, UEFA Super Cup, Primeira Liga, Taça de Portugal",
      numero: "10",
      posicao: "Meia",
      dataNascimento: "29/03/1972",
      curiosidades:
        "Rui Costa foi apelidado de 'O Maestro' por sua habilidade de controlar o jogo. Ele também foi um dos líderes da Seleção Portuguesa.",
    },

    // REPÚBLICA TCHECA --------------------------------------------------------------------------------------

    // Peter Čech
    {
      nome: "Petr Čech",
      descricao:
        "Um dos goleiros mais icônicos da Premier League, conhecido por suas defesas espetaculares e pelo capacete que usava após uma lesão na cabeça. Defendeu as cores de grandes clubes como Chelsea e Arsenal.",
      pagina: "http://www.petercech.com/",
      time: "Aposentado (2020)",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/255px-Flag_of_the_Czech_Republic.svg.png",
      alt: "República Tcheca",
      tags: "goleiro, República Tcheca, peter, cech",
      imagem:
        "https://www.arsenalpics.com/p/5/petr-cech-arsenals-defiant-hero-arsenal-vs-14526700.jpg.webp",
      titulos:
        "Premier League (4x) - Chelsea<br>FA Cup (4x) - Chelsea<br>Liga dos Campeões da UEFA (1x) - Chelsea<br>Liga Europa da UEFA (1x) - Chelsea",
      numero: "1",
      posicao: "Goleiro",
      dataNascimento: "20 de maio de 1982",
      curiosidades:
        "Čech é conhecido por sua paixão por hóquei no gelo e por ser um grande fã de música. Ele também é um dos poucos goleiros a marcar um gol em uma partida oficial.",
    },

    // RÚSSIA --------------------------------------------------------------------------------------------------

    // Lev Yashin
    {
      nome: "Lev Yashin",
      background: "gold",
      descricao:
        "Considerado um dos maiores goleiros da história, Yashin era conhecido por sua agilidade, reflexos e estilo único. Apelidado de 'Aranha Negra', ele foi o único goleiro a ganhar a Bola de Ouro.",
      pagina: "https://pt.wikipedia.org/wiki/Lev_Yashin", // Página da Wikipédia com informações sobre Yashin
      clube: "Aposentado (1971)",
      time1: "Dínamo_Moscou",
      time2: "Golden",
      time3: "Golden",
      time4: "Golden",
      nacionalidade: "Rússia",
      tags: "goleiro, yashin, russia, rússia, gold",
      imagem:
        "https://mf.b37mrtl.ru/rbthmedia/images/2018.03/original/5aba45e485600a68cb09cda4.jpg",
      titulos:
        "Campeonato Soviético, Copa da União Soviética, Eurocopa, Ouro Olímpico",
      numero: "1",
      posicao: "Goleiro",
      dataNascimento: "22 de outubro de 1929",
      dataFalecimento: "20 de março de 1990",
      curiosidades:
        "Yashin foi o primeiro e único goleiro a ganhar a Bola de Ouro, o prêmio máximo do futebol individual.",
    },

    // SENEGAL -------------------------------------------------------------------------------------------------

    // Sadio Mané
    {
      nome: "Sadio Mané",
      descricao:
        "Atacante senegalês conhecido por sua velocidade, finalização e habilidade em driblar. Campeão da África com o Senegal em 2022, Mané é um dos jogadores mais importantes do futebol africano.",
      pagina: "https://www.instagram.com/sadiomaneofficial/",
      time: "Al-Nassr FC",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/800px-Flag_of_Senegal.svg.png",
      alt: "Senegal",
      tags: "senegal, atacante, Al-Nassr FC, al nassr",
      imagem:
        "https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2023/07/28/1258420502-fc-bayern-munchen-v-rb-leipzig-bundesligaeasy-resizecom.jpg",
      titulos:
        "Premier League, Copa da Liga Inglesa, Supercopa da Inglaterra, Champions League, Bundesliga",
      numero: "10",
      posicao: "Atacante",
      dataNascimento: "10/04/1992",
      curiosidades:
        "Mané começou sua carreira na França e se destacou no Southampton antes de se transferir para o Liverpool, onde conquistou diversos títulos. É conhecido por sua humildade e por suas ações sociais.",
    },

    //SUÉCIA----------------------------------------------------------------------------------------------------

    // Zlatan Ibrahimović
    {
      nome: "Zlatan Ibrahimović",
      background: "plate",
      descricao:
        "Considerado um dos maiores atacantes da história do futebol, Ibrahimović é conhecido por sua força física, técnica apurada e personalidade marcante. Ele já jogou por grandes clubes europeus como Inter de Milão, Barcelona e Paris Saint-Germain.",
      pagina: "https://www.instagram.com/zlatanibrahimovic/",
      clube: "Aposentado (2023)",
      time1: "AC_Milan",
      time2: "Los_Angeles_Galaxy",
      time3: "PSG",
      time4: "Barcelona",
      nacionalidade: "Suécia",
      tags: "suécia, atacante plate",
      imagem:
        "https://tmssl.akamaized.net//images/foto/galerie/zlatan-ibrahimovic-ac-mailand-1603008323-49388.jpg?lm=1603008348",
      titulos:
        "Serie A, La Liga, Ligue 1, Copa da França, Copa da Itália, Supercopa da Itália, Supercopa da Espanha, Copa da Liga Francesa",
      numero: "9",
      posicao: "Atacante",
      dataNascimento: "03/10/1981",
      curiosidades:
        "Ibrahimović é conhecido por suas frases marcantes e sua confiança em campo. Ele é um dos poucos jogadores a marcar gols por mais de 10 clubes diferentes.",
    },

    //UCRÂNIA --------------------------------------------------------------------------------------------------

    // Andriy Lunin
    {
      nome: "Andriy Lunin",
      descricao:
        "Um jovem goleiro ucraniano com grande potencial, conhecido por suas defesas espetaculares e reflexos rápidos. É considerado uma das promessas do futebol mundial e busca consolidar sua posição no Real Madrid.",
      pagina: "https://www.instagram.com/lunin_andriy/",
      time: "Real Madrid",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/290px-Flag_of_Ukraine.svg.png",
      alt: "Ucrânia",
      tags: "goleiro, Ucrânia, Real Madrid",
      imagem: "https://pbs.twimg.com/media/GQSfTQ1XgAAkyAt.jpg:large",
      titulos:
        "La Liga (2x) - Real Madrid<br>Liga dos Campeões da UEFA (1x) - Real Madrid",
      numero: "13",
      posicao: "Goleiro",
      dataNascimento: "11/02/1999",
      curiosidades:
        "Lunin chegou ao Real Madrid em 2018 e tem sido comparado a grandes goleiros ucranianos. Ele é conhecido por sua personalidade tranquila e concentração dentro de campo.",
    },

    //URUGUAI---------------------------------------------------------------------------------------------------

    // Álvaro Recoba
    {
      nome: "Álvaro Recoba",
      descricao:
        "Conhecido como 'El Chino', Recoba era famoso por sua habilidade com a perna esquerda, chutes potentes e visão de jogo. Sua técnica refinada e gols espetaculares o tornaram um dos maiores ídolos da Internazionale.",
      pagina: "https://www.instagram.com/alvarecoba/", // Verifique o perfil oficial
      time1: "Danubio",
      time2: "Nacional",
      time3: "Internazionale",
      time4: "Venezia",
      nacionalidade: "Uruguai",
      tags: "uruguai, Atacante, Meia",
      imagem:
        "https://i.pinimg.com/originals/d9/dd/b9/d9ddb9eef9448a34cb8cc1f952b39721.jpg",
      titulos:
        "Campeonato Uruguaio (1995) - Nacional<br>Copa da Itália (2005) - Internazionale<br>Copa da Uefa (1998) - Internazionale",
      numero: "20", // Número tradicionalmente associado a ele
      posicao: "Atacante/Meia",
      dataNascimento: "17/03/1976",
      curiosidades:
        "Recoba era conhecido por seus chutes de falta espetaculares e por sua lealdade ao Nacional do Uruguai, onde começou e encerrou sua carreira.",
    },

    // Diego Forlán
    {
      nome: "Diego Forlán",
      descricao:
        "Um dos maiores atacantes da história do Uruguai, conhecido por sua habilidade e gols importantes.",
      pagina: "https://www.instagram.com/diego.forlan/",
      time: "Aposentado (2019)",
      nacionalidade: "Uruguai",
      alt: "Uruguai",
      tags: "uruguai, atacante",
      imagem:
        "https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2019/08/07/2014-06-14t194452z1mt1aci12539594rtrmadp3sport.JPG", // Substituir por uma imagem do Forlán
      titulos: "Premier League, La Liga, Copa América",
      numero: "9",
      posicao: "Atacante",
      dataNascimento: "19/05/1979",
      curiosidades: "Artilheiro da Copa do Mundo de 2010.",
    },

    // Diego Godín
    {
      nome: "Diego Godín",
      descricao:
        "Um dos zagueiros mais fortes e experientes do futebol mundial, conhecido por sua liderança e jogo aéreo.",
      pagina: "https://www.instagram.com/diegogodin/",
      time: "Aposentado (2023)",
      nacionalidade: "Uruguai",
      alt: "Uruguai",
      tags: "uruguai, zagueiro, godin",
      imagem:
        "https://conteudo.imguol.com.br/c/copadomundo/2018/Imagem/f1/2018/07/03/diego-godin-orienta-os-jogadores-do-uruguai-em-partida-contra-a-russia-1530656436556_v2_3x4.jpg", // Substituir por uma imagem do Godín
      titulos:
        "La Liga (Atlético de Madrid) <br> Copa América (Uruguai) <br> UEFA Europa League (Atlético de Madrid) <br> Supercopa da UEFA (Atlético de Madrid) <br> Copa do Rei (Atlético de Madrid) <br> Supercopa da Espanha (Atlético de Madrid) <br> Campeonato Uruguaio (Nacional)",
      numero: "2",
      posicao: "Zagueiro",
      dataNascimento: "16/02/1986",
      curiosidades: "Capitão da seleção uruguaia por muitos anos.",
    },

    //Edinson Cavani
    {
      nome: "Edinson Cavani",
      background: "plate",
      descricao:
        "Atacante uruguaio conhecido por sua habilidade de finalização e força física, Cavani já atuou por grandes clubes europeus como Paris Saint-Germain e Manchester United.",
      pagina: "https://www.instagram.com/edinsoncavani/",
      clube: "Boca Juniors",
      time1: "Boca_Juniors",
      time2: "Valencia",
      time3: "Manchester_United",
      time4: "PSG",
      nacionalidade: "Uruguai",
      tags: "uruguai, Boca Juniors, atacante, plate",
      imagem:
        "https://tmssl.akamaized.net/images/foto/galerie/cavani-edinson-boca-2024-1721909203-143372.jpg",
      titulos:
        "Ligue 1, Copa da França, Copa da Liga Francesa, Supercopa da França, Serie A",
      numero: "10",
      posicao: "Atacante",
      dataNascimento: "14/02/1987",
      curiosidades:
        "Cavani é conhecido como 'El Matador' por sua habilidade de marcar gols importantes e sua celebração característica.",
    },

    // Giorgian De Arrascaeta
    {
      nome: "Giorgian De Arrascaeta",
      descricao:
        "Meia uruguaio conhecido por sua habilidade, visão de jogo e passes precisos. Um dos principais jogadores do Flamengo, chegou com tudo no time.",
      pagina: "https://www.instagram.com/g10dearrascaeta/",
      time: "Flamengo",
      nacionalidade: "Uruguai",
      alt: "Uruguai",
      imagem:
        "https://conteudo.imguol.com.br/c/esporte/30/2022/08/02/arrascaeta-comemora-gol-do-flamengo-sobre-o-corinthians-pela-libertadores-1659489351819_v2_3x4.jpg",
      tags: "Uruguai, Flamengo, Arrascaeta, meia",
      numero: "14",
      posicao: "Meia",
      titulos:
        "Campeonato Carioca (2019, 2020, 2021, 2023, 2024) <br> Brasileirão (2019, 2020) <br> Libertadores (2019, 2022) <br> Copa do Brasil (2022) <br> Recopa Sul-Americana (2020) <br> Supercopa do Brasil (2020, 2021)",
      dataNascimento: "01/06/1994",
      curiosidades:
        "Chegou ao Flamengo em 2019 e rapidamente se tornou um dos principais jogadores do time.",
    },

    // Guillermo Varela
    {
      nome: "Guillermo Varela",
      descricao:
        "Lateral-direito uruguaio conhecido por sua força física e habilidade nos cruzamentos. Chegou ao Flamengo em 2022. É um dos pilares da seleção uruguaia.",
      pagina: "https://www.instagram.com/guillermovarela4",
      time: "Flamengo",
      nacionalidade: "Uruguai",
      alt: "Uruguai",
      imagem:
        "https://images.flamengo.com.br/public/images/players/3/1710272112.png",
      tags: "Uruguai, Flamengo, Varela, lateral-direito",
      numero: "2",
      posicao: "Lateral-direito",
      titulos: "Campeonato Carioca (2023, 2024)",
      dataNascimento: "24/03/1993",
      curiosidades:
        "Revelado pelo Peñarol, teve passagens por clubes europeus como Manchester United e Benfica.",
    },

    // Luis Suárez
    {
      nome: "Luis Suárez",
      background: "plate",
      descricao:
        "Um dos atacantes mais completos do mundo, conhecido por sua habilidade, gols e personalidade forte.",
      pagina: "https://www.instagram.com/luis Suarez/",
      Clube: "Inter Miami",
      time1: "Grêmio",
      time2: "Atlético_de_Madrid",
      time3: "Barcelona",
      time4: "Ajax",
      nacionalidade: "Uruguai",
      alt: "Uruguai",
      tags: "uruguai, atacante, Inter Miami CF, plate",
      imagem:
        "https://es.coachesvoice.com/wp-content/uploads/2020/06/mobile-1.jpg", // Substituir por uma imagem do Suárez
      titulos: "Premier League, La Liga, Copa Libertadores",
      numero: "9",
      posicao: "Atacante",
      dataNascimento: "24/01/1987",
      curiosidades:
        "Conhecido por sua mordida em um adversário na Copa do Mundo de 2014.",
    },

    //Matías Viña
    {
      nome: "Matías Viña",
      descricao:
        "Lateral-esquerdo uruguaio conhecido por sua habilidade nos cruzamentos e marcação. Chegou ao Flamengo em 2021 e rapidamente se tornou titular.",
      pagina: "https://www.instagram.com/matiasv17/",
      time: "Flamengo",
      nacionalidade: "Uruguai",
      alt: "Uruguai",
      imagem:
        "https://images.flamengo.com.br/public/images/players/4/1710272288.png",
      tags: "Uruguai, Flamengo, Matias Vina, lateral-esquerdo",
      numero: "17",
      posicao: "Lateral-esquerdo",
      titulos: "Campeonato Carioca (2021) <br> Supercopa do Brasil (2021)", // Adicione os títulos conquistados pelo Viña
      dataNascimento: "09/11/1997", // Verifique a data de nascimento correta
      curiosidades:
        "Revelado pelo Nacional do Uruguai, Viña já defendeu a seleção uruguaia em diversas oportunidades.",
    },

    // Nicolás De La Cruz
    {
      nome: "Nicolás De La Cruz",
      descricao:
        "Meia uruguaio conhecido por sua habilidade técnica,. Chegou ao Flamengo em 2024 e rapidamente se tornou um dos destaques do time.",
      pagina: "#",
      time: "Flamengo",
      nacionalidade: "Uruguai",
      alt: "Uruguai",
      imagem:
        "https://conteudo.imguol.com.br/c/esporte/f2/2024/01/30/de-la-cruz-durante-jogo-entre-flamengo-e-orlando-city-1706644818936_v2_3x4.jpg",
      tags: "Uruguai, Flamengo, De La Cruz, meia, estrangeiro",
      numero: "18",
      posicao: "Meia",
      titulos:
        "Campeonato Argentino (2021, 2023) - River Plate <br> Supercopa Argentina (2019/20) - River Plate <br> Copa Argentina (2016/17, 2018/19) - River Plate <br> Recopa Sudamericana (2018/19) - River Plate <br> Copa Libertadores (2018) - River Plate <br> Campeonato Carioca (2024) - Flamengo",
      dataNascimento: "01/06/1997",
      curiosidades:
        "Revelado pelo Liverpool do Uruguai. É um dos principais jogadores da seleção uruguaia.",
    },
  ];

  if (!campoPesquisa) {
    section.innerHTML = "<p>Nada foi encontrado. Digite o nome do atleta</p>";
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados formatados
  let resultados = "";
  let nome = "";
  let tags = "";
  let clube = "";

  // Itera sobre cada dado na lista de dados
  for (let dado of dados) {
    nome = dado.nome.toLowerCase();
    tags = dado.tags.toLowerCase();
    clube = dado.tags.toLowerCase();

    // se titulo includes campoPesquisa
    if (
      nome.includes(campoPesquisa) ||
      tags.includes(campoPesquisa) ||
      clube.includes(campoPesquisa)
    ) {
      // Cria um novo elemento
      resultados += `
      <div class="item-resultado" id="${dado.background}">
        <img class="dado-imagem" src="${dado.imagem}" alt="">
          <div class="div-info">
            <div class="numero-nome-time">
              <h2 class="numero" >${dado.numero}</h2>
              <a class="link-pagina" href="${dado.pagina}" target="_blank"><h2 id="nome">${dado.nome}</h2></a>
              <img class="nacionalidade" src="./img/Logo_${dado.nacionalidade}.png" alt="${dado.alt}">
            </div>
            <h3>Status</h3>
            <p id="info">${dado.clube}</p>
            <h3>Principais Clubes</h3>
            <img class="clubes" src="./img/Logo_${dado.time1}.png">
            <img class="clubes" src="./img/Logo_${dado.time2}.png">
            <img class="clubes" src="./img/Logo_${dado.time3}.png">
            <img class="clubes" src="./img/Logo_${dado.time4}.png">
            <h3>Posição</h3>
            <p id="info">${dado.posicao}</p>
            <h3>Principais títulos</h3>
            <p id="info">${dado.titulos}</p>
            <h3>Nascimento</h3>
            <p id="info">${dado.dataNascimento}</p>
            <h3>Curiosidades</h3>
            <p id="info">${dado.curiosidades}</p>
          </div>
        <img class="dado-imgMarca" src="./img/${dado.imgMarca}.png" alt="">
        <p class="descricao-meta">${dado.descricao}</p>
      </div>
  `;
    }
  }

  if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>";
  }

  // Atribui o HTML gerado à seção de resultados
  section.innerHTML = resultados;
}
