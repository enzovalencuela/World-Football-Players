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
      pagina: "https://www.instagram.com/julian_draxler/",
      time: "Al-Ahli",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
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
      descricao:
        "Considerado um dos maiores defensores da história do futebol, Beckenbauer era conhecido por sua elegância e visão de jogo. Ele foi capitão da Alemanha na conquista da Copa do Mundo de 1974.",
      pagina: "https://www.instagram.com/franzbeckenbauer/", // (Verificar se existe)
      time: "Aposentado",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
      tags: "alemanha, defensor",
      imagem:
        "https://destaqueregional.jor.br/images/noticias/1767/7a05deec0feab99a37bb0c03a2958c8e.jpeg",
      titulos: "Copa do Mundo, Copa da Europa, Bundesliga",
      numero: "5",
      posicao: "Defensor",
      dataNascimento: "11/09/1945",
      curiosidades:
        "Apelidado de 'Kaiser', Beckenbauer também teve uma brilhante carreira como treinador, conquistando a Copa do Mundo de 1990.",
    },

    // Jerome Boateng
    {
      nome: "Jerome Boateng",
      descricao:
        "Zagueiro alemão conhecido por sua força física, velocidade e habilidade nos passes longos. Atuou por grandes clubes como Bayern de Munique e Lyon.",
      pagina: "https://www.instagram.com/jeromeboateng/",
      time: "LASK",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
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
      pagina: "https://www.instagram.com/joshuakimmich/",
      time: "FC Bayern München",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
      tags: "alemanha, bayern munique, meio-campo",
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
      pagina: "https://www.instagram.com/jamalmusiala/",
      time: "FC Bayern München",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
      tags: "alemanha, bayern munique, meia",
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
      pagina: "https://www.instagram.com/lotharmatthaus/", // Verifique se possui perfil oficial
      time: "Aposentado",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
      tags: "alemanha, meio-campista",
      imagem:
        "https://lendasdofutebol.com/wp-content/uploads/2021/03/lothar-matthaus-bayern1993-350-x-optimized.jpg",
      titulos: "Bundesliga, Copa da Alemanha, Copa da UEFA, Copa do Mundo",
      numero: "7", // Número icônico de Matthäus
      posicao: "Meio-campista",
      dataNascimento: "21/3/1961",
      curiosidades:
        "Jogou por diversos clubes europeus, como Bayern de Munique, Inter de Milão e Bayern de Munique.",
    },

    // Manuel Neuer
    {
      nome: "Manuel Neuer",
      descricao:
        "Considerado um dos melhores goleiros da história, Neuer revolucionou a posição com seu estilo de jogo. Conhecido por sua agilidade e habilidade com os pés.",
      pagina: "https://www.instagram.com/manuelneuer/",
      time: "FC Bayern München",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
      tags: "alemanha, goleiro, bayern munique",
      imagem:
        "https://i.pinimg.com/originals/80/66/13/806613e477a532fab94809bac5cc8a5d.jpg",
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
      pagina: "https://www.instagram.com/marcoreus/", // Verificar se existe
      time: " Los Angeles Galaxy",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
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
      time: "Aposentado",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
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
      pagina: "https://www.instagram.com/miroslavklose/", // Verifique se possui perfil oficial
      time: "Aposentado",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
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
      pagina: "https://www.instagram.com/niclasfullkrug/",
      time: "West Ham",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
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
      descricao:
        "Um dos maiores goleiros da história, Kahn era conhecido por sua agressividade e liderança. Ele foi fundamental para a conquista da Copa do Mundo de 2002 pela Alemanha.",
      pagina: "https://www.instagram.com/oliver_kahn/", // (Verificar se existe)
      time: "Aposentado (2008)",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
      tags: "alemanha, goleiro",
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

    //Ter Stegen
    {
      nome: "Ter Stegen",
      descricao:
        "Goleiro alemão conhecido por suas defesas difíceis e habilidade com os pés, Ter Stegen foi um dos pilares do Barcelona por muitos anos.",
      pagina: "https://www.instagram.com/mterstegen1/",
      time: "FC Barcelona",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
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
      time: "FC Bayern München",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
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
      time: "Aposentado (2024)",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
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
      time: "Flamengo",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/255px-Flag_of_Argentina.svg.png",
      imagem:
        "https://images.flamengo.com.br/public/images/players/1/1710271411.png", // Substitua pela imagem do Rossi
      tags: "Argentina, Flamengo, Agustín Rossi, goleiro",
      numero: "1",
      posicao: "Goleiro",
      titulos: "Campeonato Carioca (2023) <br> Libertadores (2022)", // Adicione os títulos conquistados pelo Rossi
      dataNascimento: "09/01/1995", // Verifique a data de nascimento correta
      curiosidades:
        "Chegou ao Flamengo em 2022 e logo se tornou ídolo da torcida. Conhecido por sua liderança e habilidade em cobranças de pênalti.",
    },

    //Alejandro Garnacho
    {
      nome: "Alejandro Garnacho",
      descricao:
        "Joia argentina do Manchester United, Garnacho é um dos jovens mais promissores do futebol mundial.",
      pagina: "https://www.instagram.com/alegarnacho7/",
      time: "Manchester United",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/255px-Flag_of_Argentina.svg.png",
      tags: "futebol, argentina, Manchester United",
      imagem:
        "https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2023/10/26/1729330721-00033yz2zr-scaled.jpg",
      titulos: "Copa América, Copa da Inglaterra, FA Youth Cup",
      numero: "17",
      posicao: "Atacante",
      dataNascimento: "01/07/2004",
      curiosidades:
        "Garnacho já foi comparado a Cristiano Ronaldo por sua habilidade e potencial.",
    },

    // Ángel Di María
    {
      nome: "Ángel Di María",
      descricao:
        "Extremo veloz e habilidoso, conhecido por suas arrancadas e cruzamentos precisos. Foi fundamental nas conquistas da Copa do Mundo de 2022 e da Champions League com o Real Madrid.",
      pagina: "https://www.instagram.com/angeldimariajm/",
      time: "Benfica",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/255px-Flag_of_Argentina.svg.png",
      tags: "futebol, argentina, benfica, ponta",
      imagem:
        "https://conteudo.imguol.com.br/c/galeria/0f/2022/12/18/di-maria-celebra-seu-gol-sobre-a-franca-na-final-da-copa-1671379257343_v2_450x600.jpg",
      titulos:
        "Liga 1 (2015/2016, 2017/2018, 2018/2019, 2019/2020, 2021/2022) - Paris Saint-Germain <br> Copa da França (2016/2017, 2017/2018, 2019/2020, 2020/2021) - Paris Saint-Germain <br> Copa da Liga Francesa (2015/2016, 2017/2018, 2019/2020) - Paris Saint-Germain <br> UEFA Champions League (2015/2016) - Real Madrid <br> Copa do Mundo FIFA (2022) - Argentina",
      numero: "11",
      posicao: "Ponta",
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
      time: "Flamengo",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/255px-Flag_of_Argentina.svg.png",
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
      time: "Aposentado (2022)",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/255px-Flag_of_Argentina.svg.png",
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
      descricao:
        "Considerado um dos maiores jogadores de todos os tempos, Maradona era conhecido por sua habilidade, dribles desconcertantes e visão de jogo. Foi campeão mundial em 1986 com a Argentina.",
      pagina: "https://www.instagram.com/diegoarmandomaradona/", // Verificar se existe
      time: "Aposentado",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/255px-Flag_of_Argentina.svg.png",
      tags: "futebol, argentina, meia",
      imagem:
        "https://lendasdofutebol.com/wp-content/uploads/2021/02/maradona-selecao-1986-350-x-262-optimized.jpg",
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
      time: "Chelsea FC",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/255px-Flag_of_Argentina.svg.png",
      tags: "futebol, argentina, Chelsea Football Club, meio-campista",
      imagem:
        "https://upload.wikimedia.org/wikipedia/commons/d/df/Enzo_Fern%C3%A1ndez_WC2022.jpg",
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
      time: "Fluminense",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/255px-Flag_of_Argentina.svg.png",
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
      time: "Aposentado",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/255px-Flag_of_Argentina.svg.png",
      tags: "futebol, argentina, atacante, higuain",
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
      time: "Aposentado (2020)",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/255px-Flag_of_Argentina.svg.png",
      tags: "futebol, argentina, volante",
      imagem:
        "https://upload.wikimedia.org/wikipedia/commons/c/c8/Mascherano_2017.png",
      titulos:
        "La Liga (2009, 2010, 2011, 2013, 2015) - Barcelona <br>Copa del Rey (2009, 2012, 2015, 2016, 2018) - Barcelona <br>UEFA Champions League (2009, 2011, 2015) - Barcelona <br>Copa do Mundo FIFA (2014) - Vice-campeão",
      numero: "14",
      posicao: "Volante",
      dataNascimento: "08/06/1984",
      curiosidades:
        "Mascherano também atuou como zagueiro em algumas oportunidades, mostrando sua versatilidade.",
    },

    // Juan Román Riquelme
    {
      nome: "Juan Román Riquelme",
      descricao:
        "Meia armador elegante e visionário, Riquelme era conhecido por seus passes precisos e chutes de falta. Foi ídolo do Boca Juniors e da seleção argentina.",
      pagina: "https://www.instagram.com/juanromanriquelme/",
      time: "Aposentado (2015)",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/255px-Flag_of_Argentina.svg.png",
      tags: "futebol, argentina, meia",
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
      time: "Atlético de Madrid",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/255px-Flag_of_Argentina.svg.png",
      tags: "futebol, argentina, Club Atlético de Madrid, atacante",
      imagem:
        "https://i3.wp.com/iansportalimages.s3.amazonaws.com/thumbnails/202409063217514.jpg?w=1200&resize=1200,0&ssl=1", // Trocar por uma imagem do Álvarez
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
      descricao:
        "Considerado um dos maiores jogadores de futebol de todos os tempos, o argentino Messi é conhecido por sua habilidade excepcional, dribles rápidos, visão de jogo e precisão nos chutes. Após uma brilhante carreira no Barcelona, onde conquistou inúmeros títulos, atualmente defende as cores do Inter Miami.",
      pagina: "https://www.instagram.com/leomessi/",
      time: "Inter Miami CF",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/255px-Flag_of_Argentina.svg.png",
      tags: "futebol, argentina, inter miami",
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
      time: "AS Roma",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/255px-Flag_of_Argentina.svg.png",
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
      time: "Aposentado (2021)",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/255px-Flag_of_Argentina.svg.png",
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

    // BÉLGICA --------------------------------------------------------------------------------------------------

    // Eden Hazard
    {
      nome: "Eden Hazard",
      descricao:
        "Considerado um dos jogadores mais habilidosos de sua geração, Hazard é conhecido por seus dribles desconcertantes e finalizações precisas. Teve destaque no Chelsea e na seleção belga.",
      pagina: "https://www.instagram.com/hazardeden10/",
      time: "Aposentado (2023)",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/1200px-Flag_of_Belgium.svg.png",
      tags: "futebol, bélgica, atacante",
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
      time: "Manchester City FC",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/1200px-Flag_of_Belgium.svg.png",
      tags: "futebol, bélgica, manchester city, meia",
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
      time: "AS Roma",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/1200px-Flag_of_Belgium.svg.png",
      tags: "bélgica, roma, atacante",
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
      time: " Real Madrid CF",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/1200px-Flag_of_Belgium.svg.png",
      tags: "futebol, bélgica, real madrid, goleiro",
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

    //Alex Sandro
    {
      nome: "Alex Sandro",
      descricao:
        "Lateral-esquerdo brasileiro com vasta experiência no futebol europeu. Chegou ao Flamengo em 2024 e traz consigo muita experiência e qualidade.",
      pagina: "https://www.instagram.com/alxsndro12/", // Atualize com o link correto
      time: "Flamengo",
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
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
      time: "Liverpool FC",
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
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
      time: "Manchester United FC",
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
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
      time: "Juventus FC",
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
      tags: "futebol, brasil, volante, Juventus Football Club",
      imagem:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/FC_Zenit_Saint_Petersburg_vs._Juventus%2C_20_October_2021_52_%28Arthur_Melo%29.jpg/640px-FC_Zenit_Saint_Petersburg_vs._Juventus%2C_20_October_2021_52_%28Arthur_Melo%29.jpg",
      titulos:
        "La Liga (2018/2019) - Barcelona <br> Copa do Rei (2018) - Barcelona <br> Copa da Itália (2020) - Juventus <br> Copa do Brasil (2016) - Grêmio <br> Copa Libertadores (2017) - Grêmio",
      numero: "8",
      posicao: "Volante",
      dataNascimento: "12/05/1996",
      curiosidades:
        "Arthur foi um dos destaques do Grêmio na conquista da Libertadores de 2017.",
    },

    // Ayrton Lucas Ferreira da Silva
    {
      nome: "Ayrton Lucas",
      descricao:
        "Lateral-esquerdo brasileiro conhecido por sua velocidade e habilidade nos cruzamentos. Um dos pilares da defesa do Flamengo.",
      pagina: "https://www.instagram.com/ayrtonlucas/",
      time: "Flamengo",
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
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

    // Bruno Henrique
    {
      nome: "Bruno Henrique",
      descricao:
        "Atacante brasileiro conhecido por sua velocidade, finalização e versatilidade. Um dos principais jogadores do Flamengo titular absoluto.",
      pagina: "https://www.instagram.com/b.henrique/",
      time: "Flamengo",
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
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

    // Cafu
    {
      nome: "Cafu",
      descricao:
        "Lendário lateral-direito brasileiro, conhecido por sua energia, velocidade e cruzamentos precisos. Foi um dos principais jogadores da Seleção Brasileira e de grandes clubes europeus.",
      pagina: "https://www.instagram.com/cafuoficial/",
      time: "Aposentado (2008)",
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
      imagem:
        "https://lh4.googleusercontent.com/proxy/pxRBTZDCQLe1ADLqKHx9r1xenBRBP_Y_EO18dbtTFPZuQCamdYASC75XWYbQUit0Dvh6oZxsiyq_u9XBNwln6Msfo168_UkemDnjTGQKwQlezjBipQ",
      tags: "Brasil, Cafu, lateral-direito",
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
      time: "Flamengo",
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
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

    // Casemiro
    {
      nome: "Casemiro",
      descricao:
        "Um dos melhores volantes do mundo, conhecido por sua força física e marcação implacável.",
      pagina: "https://www.instagram.com/casemiro/",
      time: "Manchester United FC",
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
      tags: "futebol, brasil, manchester united, volante",
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
      time: "Cruzeiro",
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
      tags: "brasil, cruzeiro, goleiro",
      imagem:
        "https://i.pinimg.com/736x/8a/12/a2/8a12a2fbb94de06eda7d951104f6ebd4.jpg", // Trocar por uma imagem do Cássio
      titulos:
        "Brasileirão <br> Copa Libertadores <br> Copa do Mundo de Clubes <br> Campeonato Paulista",
      numero: "12",
      posicao: "Goleiro",
      dataNascimento: "#",
      curiosidades:
        "Cássio é considerado um dos maiores goleiros da história do Corinthians.",
    },

    // Daniel Alves
    {
      nome: "Daniel Alves",
      descricao:
        "Lateral-direito conhecido por sua energia e experiência. Um dos maiores vencedores da história do futebol, com títulos importantes por clubes como Barcelona e Juventus.",
      pagina: "https://www.instagram.com/danialves/",
      time: "Aposentado (2023)",
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
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

    // David Luiz
    {
      nome: "David Luiz",
      descricao:
        "Zagueiro brasileiro conhecido por sua habilidade com a bola nos pés e liderança em campo. Teve passagens por grandes clubes europeus.",
      pagina: "https://www.instagram.com/davidluiz23/",
      time: "Flamengo",
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
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

    // Dida
    {
      nome: "Dida",
      descricao:
        "Lendário goleiro brasileiro, conhecido por suas defesas espetaculares e personalidade marcante. Foi fundamental para os títulos da Seleção Brasileira e do Milan.",
      pagina: "https://www.instagram.com/didaoficial/", // Verificar se o perfil é público e atualizado
      time: "Aposentado (2012)",
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
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
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
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
      time: "Aposentado (2022)",
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
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

    // Éder Militão
    {
      nome: "Éder Militão",
      descricao:
        "Zagueiro brasileiro conhecido por sua velocidade e força física, Militão se destacou no Porto antes de se transferir para o Real Madrid.",
      pagina: "https://www.instagram.com/edermilitao/",
      time: "Real Madrid CF",
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
      tags: "futebol, brasil, real madrid, zagueiro, eder",
      imagem:
        "https://es.coachesvoice.com/wp-content/uploads/2019/03/MilitaoMobile.jpg",
      titulos:
        "La Liga (2019/20, 2021/22, 2022/23) - Real Madrid<br>Liga dos Campeões (2021/22, 2022/23) - Real Madrid<br>Supercopa da Espanha (2019/20, 2021/22, 2022/23) - Real Madrid<br>Supercopa da UEFA (2022) - Real Madrid<br>Copa do Mundo de Clubes (2022) - Real Madrid<br>Copa do Rei (2022/23) - Real Madrid<br>Copa América (2019)- Seleção Brasileira",
      numero: "3",
      posicao: "Zagueiro",
      dataNascimento: "18/01/1998",
      curiosidades: "Militão é uma das promessas da defesa do Real Madrid.",
    },

    // Ederson
    {
      nome: "Ederson",
      descricao:
        "Goleiro brasileiro conhecido por seus reflexos rápidos, habilidade com os pés e passes precisos. É um dos principais goleiros do mundo e fundamental para o jogo ofensivo do Manchester City.",
      pagina: "https://www.instagram.com/edersonmoraes93/",
      time: "Manchester City",
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
      imagem:
        "https://i.pinimg.com/474x/09/72/1a/09721af7435e7ecf2298a0689e558f21.jpg",
      tags: "Brasil, Ederson Moraes, goleiro, Manchester City",
      numero: "31",
      posicao: "Goleiro",
      titulos: "Premier League (vários títulos) - Manchester City",
      dataNascimento: "17/08/1993",
      curiosidades:
        "Considerado um dos melhores goleiros da atualidade. É conhecido por iniciar jogadas com passes longos e precisos, ajudando o Manchester City a construir o jogo desde a defesa.",
    },

    //Endrick
    {
      nome: "Endrick",
      descricao:
        "Um jovem talento brasileiro, conhecido por sua habilidade, velocidade e faro de gol. Considerado um dos maiores promessas do futebol mundial, Endrick já chama a atenção de grandes clubes europeus.",
      pagina: "https://www.instagram.com/endrickfm/", // Ajustar se necessário
      time: "Real Madrid CF",
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
      tags: "futebol, brasil, real madrid, atacante",
      imagem:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Endrick-Palmeiras-Liverpool-abr24.jpg/1200px-Endrick-Palmeiras-Liverpool-abr24.jpg", // Trocar por uma imagem do Endrick
      titulos:
        "Brasileirão (2022 e 2023) - Palmeiras<br>Supercopa do Brasil (2023) - Palmeiras<br>Campeonato Paulista (2023 e 2024) - Palmeiras<br>Copa São Paulo de Futebol Júnior (2022) - Palmeiras",
      numero: "9",
      posicao: "Atacante",
      dataNascimento: "21/07/2006",
      curiosidades:
        "Revelado pelo Palmeiras, Endrick foi comparado a grandes atacantes brasileiros por sua habilidade e potencial.",
    },

    // Everton Cebolinha
    {
      nome: "Everton Cebolinha",
      descricao:
        "Atacante brasileiro conhecido por sua velocidade e habilidade nos dribles. Chegou ao Flamengo em 2022 e não conquistou muitos títulos pelo time.",
      pagina: "#",
      time: "Flamengo",
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
      imagem:
        "https://conteudo.imguol.com.br/c/esporte/11/2023/04/27/everton-cebolinha-do-flamengo-comemora-gol-marcado-diante-do-maringa-1682627268756_v2_450x600.jpg",
      tags: "Brasil, Flamengo, Cebolinha, atacante",
      numero: "11",
      posicao: "Atacante",
      titulos:
        "Campeonato Carioca (2023, 2024) <br> Libertadores (2022) <br> Copa do Brasil (2022)",
      dataNascimento: "22/07/1996",
      curiosidades:
        "Teve destaque no Grêmio e conquistou a Copa América de 2019 com a Seleção Brasileira.",
    },

    // Everton Ribeiro
    {
      nome: "Everton Ribeiro",
      descricao:
        "Meia habilidoso e com excelente visão de jogo, Everton Ribeiro é conhecido por suas assistências e gols decisivos. Atualmente, é um dos principais jogadores do futebol brasileiro.",
      pagina: "https://www.instagram.com/evertonribeiro/",
      time: "Bahia",
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
      tags: "brasil, bahia, meia",
      imagem:
        "https://conteudo.imguol.com.br/c/esporte/72/2024/01/24/everton-ribeiro-comemora-primeiro-gol-pelo-bahia-1706143661502_v2_450x600.jpg", // Trocar por uma imagem do Everton Ribeiro
      titulos:
        "Brasileirão <br> Copa do Brasil <br> Campeonato Carioca <br> Copa Libertadores <br> Recopa Sul-Americana",
      numero: "10",
      posicao: "Meia",
      dataNascimento: "10/4/1989",
      curiosidades:
        "Everton Ribeiro foi eleito o melhor jogador do Campeonato Brasileiro por duas vezes.",
    },

    //Fabrício Bruno
    {
      nome: "Fabrício Bruno",
      descricao:
        "Zagueiro brasileiro conhecido por sua força física e liderança dentro de campo. Um dos pilares da defesa do Flamengo.",
      pagina: "https://www.instagram.com/fabriciobruno96/",
      time: "Flamengo",
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
      imagem:
        "https://static.gazetaesportiva.com/uploads/Flamengo-Fabricio-Bruno.png", // Substitua pela imagem do Fabrício Bruno
      tags: "Brasil, Flamengo, Fabrício Bruno, zagueiro",
      numero: "3",
      posicao: "Zagueiro",
      titulos: "Campeonato Carioca (2023) <br> Libertadores (2022)", // Adicione os títulos conquistados pelo Fabrício Bruno
      dataNascimento: "22/09/1996", // Verifique a data de nascimento correta
      curiosidades:
        "Revelado pelo Botafogo, chegou ao Flamengo em 2021 e rapidamente se tornou titular absoluto.",
    },

    // Fernandinho
    {
      nome: "Fernandinho",
      descricao:
        "Volante brasileiro conhecido por sua versatilidade e capacidade de marcação, Fernandinho se destacou no Shakhtar Donetsk e Manchester City, atualmente joga no Athletico-PR.",
      pagina: "https://www.instagram.com/fernandinho/",
      time: "Athletico Paranaense",
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
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
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
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
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
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
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
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
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
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

    // Gerson Santos da Silva
    {
      nome: "Gerson",
      descricao:
        "Meia brasileiro conhecido por sua força física, desarmes e passes precisos. Um dos pilares do meio-campo do Flamengo que completa o time.",
      pagina: "https://www.instagram.com/gersonsantoss/",
      time: "Flamengo",
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
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

    // Gustavo Scarpa
    {
      nome: "Gustavo Scarpa",
      descricao:
        "Meia talentoso e elegante, Gustavo Scarpa é conhecido por sua visão de jogo e passes precisos. Atualmente, é um dos principais jogadores do Atlético Mineiro.",
      pagina: "https://www.instagram.com/gustavoscarpa/", // Verificar o perfil oficial
      time: "Atlético-MG",
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
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

    // Hulk
    {
      nome: "Hulk",
      descricao:
        "Atacante forte e rápido, Hulk é conhecido por seus dribles potentes e chutes poderosos. Atualmente, é um dos principais jogadores do futebol brasileiro.",
      pagina: "https://www.instagram.com/hulkparaiba/",
      time: "Atlético-MG",
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
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

    // Juninho Pernambucano
    {
      nome: "Juninho Pernambucano",
      descricao:
        "Um dos maiores meio-campistas da história do futebol, conhecido mundialmente por suas cobranças de falta perfeitas. Foi ídolo em clubes como Vasco da Gama e Olympique Lyonnais.",
      pagina: "https://www.instagram.com/juninhopeoficial/",
      time: "Aposentado (2013)",
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
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
      descricao:
        "Um dos maiores meio-campistas da história do futebol, conhecido por sua técnica apurada, visão de jogo e passes precisos. Venceu a Bola de Ouro e a Copa do Mundo, além de ter brilhado em grandes clubes como Milan e Real Madrid.",
      pagina: "http://www.kakaww.com/",
      time: "Aposentado (2017)",
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
      tags: "futebol, brasil, meio-campo",
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
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
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
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
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
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
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
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
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
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
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
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
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

    // Mané Garrincha
    {
      nome: "Mané Garrincha",
      descricao:
        "Considerado um dos maiores gênios do futebol, Garrincha era famoso por seus dribles desconcertantes e sua alegria dentro de campo. Sua habilidade era tão grande que compensava suas pernas tortas, que o tornaram ainda mais especial.",
      pagina:
        "https://www.transfermarkt.com.br/mane-garrincha/profil/spieler/151263",
      time: "Aposentado (1972)",
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
      tags: "futebol, brasil, ponta direita, atacante",
      imagem:
        "https://bonifacio.net.br/wp-content/uploads/201031-Mane-Garrincha.jpg", // Substituir por uma imagem do Garrincha
      titulos:
        "Copa do Mundo (1958 e 1962) - Seleção Brasileira<br>Copa Roca (1957, 1960 e 1963) - Seleção Brasileira<br>Campeonato Carioca (1957, 1961 e 1962) - Botafogo<br>Torneio Rio-São Paulo (1962, 1964 e 1966) - Botafogo",
      numero: "7",
      posicao: "Ponta-direita",
      dataNascimento: "28/10/1933",
      curiosidades:
        "Garrincha nasceu com uma deformidade nas pernas, mas isso não o impediu de se tornar um dos maiores jogadores da história. Ele era conhecido por sua vida simples e alegre, e sua história é um exemplo de superação.",
    },

    //Marcelo
    {
      nome: "Marcelo",
      descricao:
        "Lateral-esquerdo habilidoso e ofensivo, Marcelo é considerado um dos maiores laterais da história do futebol. Famoso por seus dribles, cruzamentos e visão de jogo, ele conquistou diversos títulos pelo Real Madrid e pela Seleção Brasileira.",
      pagina: "https://www.instagram.com/marceloviieira/", // Verificar o perfil oficial
      time: "Fluminense",
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
      tags: "brasil, lateral esquerdo",
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
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
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
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
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
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
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
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
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
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
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
      descricao:
        "Considerado um dos melhores jogadores de futebol do mundo, Neymar Jr. é famoso por seus dribles rápidos e habilidade em cobranças de faltas. Iniciou sua carreira no Santos FC e, após brilhar no Barcelona, atualmente defende as cores do Al-Hilal.",
      pagina: "https://www.instagram.com/neymarjr/",
      time: "Al-Hilal FC",
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
      tags: "brasil, al hilal, ponta esquerda, Neymar Jr.",
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
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
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
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
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
      descricao:
        "Considerado o maior jogador de futebol de todos os tempos, Pelé era conhecido por sua habilidade incrível com a bola, dribles mágicos e muitos gols. Ele conquistou o mundo com seu futebol e é um símbolo do esporte.",
      pagina: "https://www.instagram.com/pele/", // Página oficial (caso exista)
      time: "Aposentado (1977)",
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
      tags: "futebol, brasil, atacante",
      imagem:
        "https://upload.wikimedia.org/wikipedia/commons/5/5e/Pele_con_brasil_%28cropped%29.jpg",
      titulos:
        "Campeonato Brasileiro (1961, 1962, 1963, 1964, 1965, 1968) - Santos FC<br>Copa Libertadores da América (1962, 1963) - Santos FC<br>Copa Intercontinental (1962, 1963) - Santos FC<br>Copa do Mundo (1958, 1962, 1970) - Seleção Brasleira",
      numero: "10",
      posicao: "Atacante",
      dataNascimento: "23/10/1940",
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
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
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
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
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
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
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
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
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
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
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
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
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
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
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
      descricao:
        "Considerado um dos maiores jogadores brasileiros de sua geração, Rivaldo era conhecido por sua habilidade técnica, chutes precisos e visão de jogo. Eleito o melhor jogador do mundo em 1999, conquistou diversos títulos importantes na carreira.",
      pagina: "https://www.instagram.com/rivaldooficial/", // Ajustar se necessário
      time: "Aposentado (2015)",
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
      tags: "futebol, brasil, meia-atacante",
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

    // Roberto Firmino
    {
      nome: "Roberto Firmino",
      descricao:
        "Atacante brasileiro conhecido por sua versatilidade e habilidade de criar jogadas. Foi peça fundamental no sucesso do Liverpool nos últimos anos.",
      pagina: "https://www.instagram.com/roberto_firmino9/",
      time: "Al-Ahli Saudi FC",
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
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

    // Rodinei
    {
      nome: "Rodinei",
      descricao:
        "Lateral-direito brasileiro conhecido por sua força física, velocidade e cruzamentos precisos. Atualmente joga no Olympiacos F.C.",
      pagina: "https://www.instagram.com/rodineioficial/",
      time: "Olympiacos F.C.",
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
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
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
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

    // Rodrygo
    {
      nome: "Rodrygo",
      descricao:
        "Joia da nova geração do futebol brasileiro, Rodrygo se destacou por sua velocidade, dribles e finalização precisa. Revelado pelo Santos, logo chamou a atenção de grandes clubes europeus.",
      pagina: "https://www.instagram.com/rodrygogoes/",
      time: "Real Madrid CF",
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
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

    // Ronaldinho Gaúcho
    {
      nome: "Ronaldinho Gaúcho",
      descricao:
        "Considerado um dos maiores gênios do futebol, Ronaldinho Gaúcho era conhecido por sua habilidade única, dribles mágicos e personalidade contagiante. Eleito duas vezes o melhor jogador do mundo, conquistou diversos títulos e encantou milhões de fãs ao redor do globo.",
      pagina: "https://www.instagram.com/ronaldinhooficial/",
      time: "Aposentado (2018)",
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
      tags: "brasil, meia-atacante",
      imagem:
        "https://conteudo.imguol.com.br/c/esporte/77/2021/06/02/ronaldinho-gaucho-em-atuacao-pelo-barcelona-1622663451254_v2_3x4.jpg", // Substituir por uma imagem do Ronaldinho Gaúcho
      titulos:
        "Copa do Mundo FIFA (2002) - Seleção Brasileira<br>Copa das Confederações FIFA (2005) - Seleção Brasileira<br>La Liga (2004, 2005) - Barcelona<br>Liga dos Campeões da UEFA (2005) - Barcelona<br>Copa Libertadores da América (2013) - Atlético Mineiro",
      numero: "10",
      posicao: "Meia-atacante",
      dataNascimento: "21/03/1980",
      curiosidades:
        "Ronaldinho ficou marcado por seus gols de falta espetaculares, sua comemoração do 'sorriso' e por ter sido um dos principais responsáveis pela recuperação do Barcelona no início dos anos 2000.",
    },

    // Ronaldo Fenômeno
    {
      nome: "Ronaldo Fenômeno",
      descricao:
        "Considerado um dos maiores atacantes de todos os tempos, Ronaldo Fenômeno era conhecido por sua velocidade, dribles e finalizações poderosas. Campeão mundial por duas vezes, conquistou diversos títulos importantes na Europa e no Brasil.",
      pagina: "https://www.instagram.com/ronaldo/",
      time: "Aposentado (2011)",
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
      tags: "brasil, atacante, Ronaldo Luís Nazário de Lima",
      imagem:
        "https://media.gazetadopovo.com.br/2011/02/ec00c9f479847bfef4f99b8c7857f2bf-gpLarge.jpg", // Troque por uma imagem do Ronaldo Fenômeno
      titulos:
        "Copa do Mundo FIFA (1994 e 2002) Seleção Brasileira<br>Copa América (1997) - Seleção Brasileira<br>La Liga (1996, 2002) - Barcelona e Real Madrid<br>Serie A (1997, 1998, 2001) - Inter de Milão",
      numero: "9",
      posicao: "Atacante",
      dataNascimento: "18 de setembro de 1976",
      curiosidades:
        "Ronaldo Fenômeno ficou marcado por sua recuperação de lesões graves, voltando a jogar em alto nível após diversas cirurgias.",
    },

    // Thiago Silva
    {
      nome: "Thiago Silva",
      descricao:
        "Zagueiro experiente e líder nato, conhecido por sua habilidade no jogo aéreo, passes precisos e liderança dentro de campo. Um dos melhores defensores da sua geração.",
      pagina: "https://www.instagram.com/thiagosilva/",
      time: "Fluminense",
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
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
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
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
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
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
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
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
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
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

    //Yuri Alberto
    {
      nome: "Yuri Alberto",
      descricao:
        "Atacante promissor, Yuri Alberto é conhecido por sua finalização precisa e habilidade de se movimentar dentro da área. Atualmente, é um dos destaques do Corinthians.",
      pagina: "https://www.instagram.com/yurialberto/",
      time: "Corinthians",
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
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
      descricao:
        "Considerado um dos maiores jogadores brasileiros de todos os tempos, Zico era conhecido por sua habilidade técnica, visão de jogo e chutes precisos. Ídolo do Flamengo, ele encantou o mundo com seu futebol artístico.",
      pagina: "https://www.instagram.com/zico/", // Ajustar se necessário
      time: "Aposentado (1993)",
      nacionalidade:
        "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg",
      tags: "brasil, meia",
      imagem:
        "https://media.gettyimages.com/id/172814042/pt/foto/02-july-1982-fifa-world-cup-argentina-v-brazil-zico-of-brazil.jpg?s=612x612&w=gi&k=20&c=3YhKJz9l0Ey6yyA28GIg6eLGGvYlM2nqogez3O4ntZM=",
      titulos:
        "Brasileirão (1980, 1982, 1983, 1987)<br>Copa Libertadores da América (1981) - Flamengo<br>Copa Intercontinental (1981) - Flamengo<br>Campeonato Carioca (Várias vezes) - Flamengo",
      numero: "10",
      posicao: "Meia",
      dataNascimento: "03/03/1953",
      curiosidades:
        "Zico era conhecido como o 'Galinho de Quintal' por sua habilidade de driblar e fazer gols de forma elegante. Ele também foi um dos maiores artilheiros da história do Flamengo.",
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

    // Arturo Vidal
    {
      nome: "Arturo Vidal",
      descricao:
        "Volante chileno conhecido por sua energia, combatividade e habilidade nos chutes de longa distância. Foi um dos principais jogadores da Juventus, Bayern de Munique e da seleção chilena.",
      pagina: "https://www.instagram.com/kingarturo23oficial/",
      time: "Colo-Colo",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/255px-Flag_of_Chile.svg.png",
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
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/255px-Flag_of_Chile.svg.png",
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
      descricao:
        "Meia croata, conhecido por sua habilidade técnica, visão de jogo e passes precisos. Líder da seleção croata e peça fundamental no Real Madrid.",
      pagina: "https://www.instagram.com/lukamodric10/",
      time: "Real Madrid CF",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg",
      tags: "croácia, real madrid, meia, Modric",
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

    // Álvaro Morata
    {
      nome: "Álvaro Morata",

      descricao:
        "Atacante forte e completo, Morata é conhecido por sua habilidade no jogo aéreo e por marcar gols decisivos. É um dos principais atacantes da seleção espanhola.",
      pagina: "https://www.instagram.com/alvaromorata/", // Verificar o perfil oficial
      time: "AC Milan",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/255px-Flag_of_Spain.svg.png",
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
      descricao:
        "Um dos maiores meias da história do futebol, conhecido por sua habilidade e gols decisivos.",
      pagina: "https://www.instagram.com/andiniesta8/",
      time: "Aposentado (2024)",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/255px-Flag_of_Spain.svg.png",
      alt: "Espanha",
      tags: "espanha, meia",
      imagem:
        "https://cdn-s-www.leprogres.fr/images/FB18B92B-D189-4989-8F3F-29180DDF0DAC/NW_raw/andres-iniesta-photo-afp-1522783770.jpg",
      titulos:
        "La Liga, Copa do Rei, Liga dos Campeões, Copa do Mundo, Eurocopa",
      numero: "8",
      posicao: "Meia",
      dataNascimento: "11/05/1984",
      curiosidades: "Marcou o gol do título da Copa do Mundo de 2010.",
    },

    // David Silva
    {
      nome: "David Silva",
      descricao:
        "Meia criativo e elegante, Silva é conhecido por seus passes precisos, visão de jogo excepcional e habilidade de controlar o ritmo do jogo. Um dos maiores meio-campistas da sua geração.",
      pagina: "https://www.instagram.com/davidsilva21/", // Verificar o perfil oficial
      time: "Aposentado (2023)",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/255px-Flag_of_Spain.svg.png",
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
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/255px-Flag_of_Spain.svg.png",
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
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/255px-Flag_of_Spain.svg.png",
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
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/255px-Flag_of_Spain.svg.png",
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
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/255px-Flag_of_Spain.svg.png",
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
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/255px-Flag_of_Spain.svg.png",
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
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/255px-Flag_of_Spain.svg.png",
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
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/255px-Flag_of_Spain.svg.png",
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

    // Raúl González
    {
      nome: "Raúl González",
      descricao:
        "Um dos maiores atacantes da história do Real Madrid, conhecido por sua eficiência e liderança.",
      pagina: "https://www.instagram.com/raulgonzalez/",
      time: "Aposentado (2015)",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/255px-Flag_of_Spain.svg.png",
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
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/255px-Flag_of_Spain.svg.png",
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
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/255px-Flag_of_Spain.svg.png",
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
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/255px-Flag_of_Spain.svg.png",
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
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/255px-Flag_of_Spain.svg.png",
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
      descricao:
        "Um dos maiores zagueiros da história do Real Madrid, Sergio Ramos é conhecido por sua liderança, força física e habilidade para marcar gols importantes. Com uma carreira vitoriosa, conquistou diversos títulos e se tornou um dos principais jogadores da Seleção Espanhola.",
      pagina: "https://pt.wikipedia.org/wiki/Sergio_Ramos",
      time: "Paris Saint-Germain",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/255px-Flag_of_Spain.svg.png",
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
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/255px-Flag_of_Spain.svg.png",
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
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/255px-Flag_of_Spain.svg.png",
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
      descricao:
        "Um dos maiores meias da história do futebol, conhecido por sua visão de jogo e passes precisos.",
      pagina: "https://www.instagram.com/xavi/",
      time: "Aposentado (2019)",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/255px-Flag_of_Spain.svg.png",
      alt: "Espanha",
      tags: "futebol, espanha, barcelona, meia, visão de jogo",
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
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/255px-Flag_of_France.svg.png",
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
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/255px-Flag_of_France.svg.png",
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

    //Hugo Lloris
    {
      nome: "Hugo Lloris",
      descricao:
        "Goleiro francês conhecido por suas defesas espetaculares, Lloris foi capitão do Tottenham Hotspur e da Seleção Francesa.",
      pagina: "https://www.instagram.com/hugolloris/",
      time: "Los Angeles FC",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/255px-Flag_of_France.svg.png",
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
      descricao:
        "Um dos principais atacantes da atualidade, conhecido por sua habilidade técnica, finalização precisa e visão de jogo. Foi fundamental para o sucesso do Real Madrid nos últimos anos.",
      pagina: "https://www.instagram.com/karimbenzema/",
      time: "Real Madrid",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/255px-Flag_of_France.svg.png",
      alt: "França",
      tags: "atacante, França, Real Madrid",
      imagem:
        "https://i0.wp.com/portalcontexto.com.br/wp-content/uploads/2022/03/FNcMjEgXsAcpr6f.jpg?resize=1020%2C1275&ssl=1",
      titulos:
        "La Liga (5x) - Real Madrid<br>Liga dos Campeões da UEFA (5x) - Real Madrid<br>Copa do Mundo de Clubes da FIFA (4x) - Real Madrid<br>Supercopa da UEFA (4x) - Real Madrid<br>Eurocopa (1x) - França",
      numero: "9",
      posicao: "Atacante",
      dataNascimento: "19/12/1987",
      curiosidades:
        "Benzema é conhecido por sua calma diante do gol e por sua habilidade de criar jogadas para seus companheiros. Ele também é um grande fã de basquete e costuma assistir aos jogos da NBA.",
    },

    // Kylian Mbappé
    {
      nome: "Kylian Mbappé",
      descricao:
        "Um dos jogadores mais rápidos e habilidosos do mundo, conhecido por seus dribles e gols espetaculares.",
      pagina: "https://www.instagram.com/k.mbappe/",
      time: "Real Madrid",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/255px-Flag_of_France.svg.png",
      alt: "França",
      tags: "futebol, frança, psg, atacante, velocidade, Mbappe",
      imagem:
        "https://assets-us-01.kc-usercontent.com/31dbcbc6-da4c-0033-328a-d7621d0fa726/32e193b3-b8e8-437a-a24a-651f0b22c15f/mbappe%20trophy%203.jpg?ver=28-06-2024?w=3840&q=75",
      titulos: "Ligue 1, Copa da França, Copa do Mundo",
      numero: "7",
      posicao: "Atacante",
      dataNascimento: "20/12/1998",
      curiosidades: "Considerado um dos maiores talentos da nova geração.",
    },

    // N'Golo Kanté
    {
      nome: "N'Golo Kanté",
      descricao:
        "Volante de contenção conhecido por sua energia incansável e capacidade de recuperar bolas. É fundamental para a equipe, tanto na defesa quanto no ataque.",
      pagina: "https://www.instagram.com/ngolokante/", // Verificar o perfil oficial
      time: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/255px-Flag_of_France.svg.png",
      alt: "França",
      tags: "futebol, frança, volante, contenção, energia",
      imagem:
        "https://premierleaguebrasil.com.br/wp-content/uploads/2021/08/Kante.jpg", // Trocar por uma imagem do N'Golo Kanté
      titulos: "Premier League, Champions League, Copa do Mundo",
      numero: "7",
      posicao: "Volante",
      dataNascimento: "29/03/1991",
      curiosidades:
        "Kanté começou sua carreira em clubes menores da França e surpreendeu a todos com suas atuações no Leicester City e Chelsea.",
    },

    // Ousmane Dembélé
    {
      nome: "Ousmane Dembélé",
      descricao:
        "Atacante veloz e habilidoso, Dembélé é conhecido por seus dribles rápidos e finalizações precisas. É uma das principais armas do seu time no ataque.",
      pagina: "https://www.instagram.com/ousmanedenbele/", // Verificar o perfil oficial
      time: " Paris Saint-Germain FC",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/255px-Flag_of_France.svg.png",
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
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/255px-Flag_of_France.svg.png",
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
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/255px-Flag_of_France.svg.png",
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
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/255px-Flag_of_France.svg.png",
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

    // Zinedine Zidane
    {
      nome: "Zinedine Zidane",
      descricao:
        "Uma lenda do futebol francês, conhecido por sua habilidade, visão de jogo e liderança.",
      pagina: "https://www.instagram.com/zidane/",
      time: "Aposentado (2006)",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/255px-Flag_of_France.svg.png",
      alt: "França",
      tags: "futebol, frança, real madrid, meia, lenda",
      imagem:
        "https://i.pinimg.com/474x/21/d9/35/21d93521800dc2058755ef04471d39a8.jpg",
      titulos: "Copa do Mundo, Eurocopa, Liga dos Campeões",
      numero: "10",
      posicao: "Meia",
      dataNascimento: "23/6/1972",
      curiosidades: "Considerado um dos maiores jogadores de todos os tempos.",
    },

    //HOLANDA--------------------------------------------------------------------------------------------------

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
      descricao:
        "Considerado um dos maiores jogadores e treinadores de futebol de todos os tempos, Johan Cruyff revolucionou o esporte com seu estilo de jogo ofensivo e elegante. Foi ídolo do Ajax e do Barcelona, onde também conquistou grandes títulos como treinador.",
      pagina: "https://en.wikipedia.org/wiki/Johan_Cruyff",
      time: "Aposentado (1978)",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1200px-Flag_of_the_Netherlands.svg.png",
      alt: "Holanda",
      tags: "holanda, cruyff, meia",
      imagem:
        "https://ofutebolnewsreal.wordpress.com/wp-content/uploads/2020/04/whatsapp-image-2020-04-12-at-16.12.33.jpeg",
      titulos:
        "Liga dos Campeões da UEFA (3x) - Ajax, Barcelona<br> Campeonato Holandês (8x) - Ajax<br> Campeonato Espanhol (4x) - Barcelona<br> Copa da Holanda (5x) - Ajax<br> Copa do Rei (1x) - Barcelona<br> Bola de Ouro (3x)",
      numero: "14",
      posicao: "Meia-atacante",
      dataNascimento: "25/04/1947",
      curiosidades:
        "Criador do 'futebol total', filosofia de jogo que valoriza a posse de bola e a criação de oportunidades de gol por todos os jogadores em campo. Cruyff também é conhecido por sua personalidade forte e suas declarações polêmicas.",
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

    // INGLATERRA ---------------------------------------------------------------------------------------------

    //Alexander-Arnold
    {
      nome: "Alexander-Arnold",
      descricao:
        "Lateral-direito inglês, conhecido por suas habilidades de cruzamento e visão de jogo. Considerado um dos melhores da posição em sua geração.",
      pagina: "https://www.instagram.com/trentarnold/",
      time: " Liverpool FC",
      nacionalidade:
        "https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/10/1-bandeira-da-inglaterra.jpg",
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
      nacionalidade:
        "https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/10/1-bandeira-da-inglaterra.jpg",
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

    //Bukayo Saka
    {
      nome: "Bukayo Saka",
      descricao:
        "Um dos jovens mais promissores do futebol inglês, conhecido por sua habilidade nas duas pernas, dribles rápidos e visão de jogo. É peça fundamental no Arsenal e na seleção inglesa.",
      pagina: "https://www.instagram.com/bukayosaka87/",
      time: "Arsenal",
      nacionalidade:
        "https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/10/1-bandeira-da-inglaterra.jpg",
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
      nacionalidade:
        "https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/10/1-bandeira-da-inglaterra.jpg",
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
      nacionalidade:
        "https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/10/1-bandeira-da-inglaterra.jpg",
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
      nacionalidade:
        "https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/10/1-bandeira-da-inglaterra.jpg",
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

    //Jack Grealish
    {
      nome: "Jack Grealish",
      descricao:
        "Meia-atacante inglês conhecido por sua habilidade com a bola, dribles e passes precisos. Um dos principais jogadores do Manchester City, Grealish é famoso por sua paixão pelo jogo e pela torcida.",
      pagina: "https://www.instagram.com/jackgrealish/",
      time: " Manchester City FC",
      nacionalidade:
        "https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/10/1-bandeira-da-inglaterra.jpg",
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

    //Marcus Rashford
    {
      nome: "Marcus Rashford",
      descricao:
        "Atacante inglês conhecido por sua velocidade, habilidade nos dribles e espírito de luta. É um dos principais jogadores do Manchester United e da seleção inglesa.",
      pagina: "https://www.instagram.com/marcusrashford/",
      time: " Manchester United FC",
      nacionalidade:
        "https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/10/1-bandeira-da-inglaterra.jpg",
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

    //Phil Foden
    {
      nome: "Phil Foden",
      descricao:
        "Um dos jovens talentos mais brilhantes do futebol inglês, conhecido por sua habilidade com a bola, visão de jogo e dribles incríveis. É considerado uma das maiores promessas do Manchester City.",
      pagina: "https://www.instagram.com/philfoden/", // Ajustar se necessário
      time: "Manchester City FC",
      nacionalidade:
        "https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/10/1-bandeira-da-inglaterra.jpg",
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

    // Harry Kane
    {
      nome: "Harry Kane",
      descricao:
        "Atacante inglês, capitão da seleção e conhecido por sua finalização precisa.",
      pagina: "https://www.instagram.com/hkane/",
      time: "FC Bayern München",
      nacionalidade:
        "https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/10/1-bandeira-da-inglaterra.jpg",
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

    //Raheem Sterling
    {
      nome: "Raheem Sterling",
      descricao:
        "Atacante inglês conhecido por sua velocidade, habilidade nos dribles e finalização precisa. Teve passagens marcantes por Liverpool e Manchester City, e atualmente defende a camisa do Chelsea.",
      pagina: "https://www.instagram.com/sterling7/",
      time: "Arsenal FC",
      nacionalidade:
        "https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/10/1-bandeira-da-inglaterra.jpg",
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
        "Um dos maiores ídolos do Liverpool, conhecido por sua paixão, liderança e habilidade em campo. Foi capitão do time por muitos anos e um dos principais responsáveis pelos grandes momentos do Liverpool.",
      pagina: "https://www.instagram.com/stevengerrard/",
      time: "Aposentado (2016)",
      nacionalidade:
        "https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/10/1-bandeira-da-inglaterra.jpg",
      alt: "Inglaterra",
      tags: "meio-campo, Inglaterra",
      imagem: "https://m.media-amazon.com/images/I/91R1ezXrXpL._AC_SL1500_.jpg",
      titulos:
        "Premier League (1x) - Liverpool<br>UEFA Champions League (1x) - Liverpool<br>FA Cup (2x) - Liverpool<br>Copa da Liga Inglesa (3x) - Liverpool",
      numero: "8",
      posicao: "Meio-campo",
      dataNascimento: "30/05/1980",
      curiosidades:
        "Gerrard é considerado um dos maiores jogadores ingleses de todos os tempos. Sua famosa final da Liga dos Campeões de 2005, onde o Liverpool virou o jogo contra o Milan, é um dos momentos mais icônicos da história do futebol.",
    },

    //Kyle Walker
    {
      nome: "Kyle Walker",
      descricao:
        "Um dos laterais-direitos mais rápidos e habilidosos do mundo, conhecido por sua força física e cruzamentos precisos. É peça fundamental na defesa do Manchester City.",
      pagina: "https://www.instagram.com/kylewalker2/",
      time: "Manchester City FC",
      nacionalidade:
        "https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/10/1-bandeira-da-inglaterra.jpg",
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

    //IRLANDA DO NORTE -------------------------------------------------------------------------------------

    // George Best
    {
      nome: "George Best",
      descricao:
        "Considerado um dos maiores jogadores de futebol de todos os tempos, George Best era famoso por sua habilidade com a bola, dribles rápidos e visão de jogo. Ídolo do Manchester United, conquistou diversos títulos e encantou a Europa com seu talento.",
      pagina: "https://en.wikipedia.org/wiki/George_Best",
      time: "Aposentado (1984)",
      nacionalidade:
        "https://media.istockphoto.com/id/1063901808/pt/vetorial/flag-of-northern-ireland.jpg?s=612x612&w=0&k=20&c=hROAJ3dsZnu56uEl3EJx8Mu3w9CkwYG_aqITqc0oAx8=",
      alt: "Irlanda do Norte",
      tags: "irlanda do norte, ponta esquerda",
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
      apelido: "Gigi Buffon",
      descricao:
        "Goleiro experiente e lendário, Buffon é conhecido por suas reflexos incríveis, liderança e longevidade. É considerado um dos maiores goleiros de todos os tempos.",
      pagina: "https://www.instagram.com/gianluigibuffon/",
      time: "Aposentado (2023)",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg",
      alt: "Itália",
      tags: "itália, goleiro",
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
      descricao:
        "Extremo veloz e habilidoso, Bale é conhecido por seus chutes poderosos, dribles rápidos e gols de falta. É um dos jogadores mais rápidos do futebol mundial.",
      pagina: "https://www.instagram.com/garethbale11/",
      time: "Aposentado (2023)",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Flag_of_Wales.svg/255px-Flag_of_Wales.svg.png",
      alt: "País de Gales",
      tags: "pais de gales, ponta",
      imagem:
        "https://upload.wikimedia.org/wikipedia/commons/1/1e/2022_FIFA_World_Cup_United_States_1%E2%80%931_Wales_-_%2832%29_%28cropped%29.jpg",
      titulos: "La Liga, Champions League, Copa do Rei",
      numero: "11",
      posicao: "Ponta",
      dataNascimento: "16/07/1989",
      curiosidades:
        "Bale é considerado um dos maiores jogadores galeses de todos os tempos e já marcou gols espetaculares em finais da Champions League.",
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
      descricao:
        "Atacante completo e artilheiro nato, Lewandowski é conhecido por sua finalização precisa, força física e inteligência tática. É um dos maiores atacantes da atualidade.",
      pagina: "https://www.instagram.com/robert_lewandowski/",
      time: "FC Barcelona",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/800px-Flag_of_Poland.svg.png",
      alt: "Polônia",
      tags: "polônia, atacante, FC Barcelona",
      imagem:
        "https://www.thesun.co.uk/wp-content/uploads/2023/12/robert-lewandowski-fc-barcelona-reacts-861987434.jpg?strip=all&w=640",
      titulos: "Bundesliga, Copa da Alemanha, Champions League, La Liga",
      numero: "9",
      posicao: "Atacante",
      dataNascimento: "21/08/1988",
      curiosidades:
        "Lewandowski é conhecido por sua capacidade de marcar gols de todas as formas e já quebrou diversos recordes de gols em sua carreira.",
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
      nacionalidade:
        "https://s1.static.brasilescola.uol.com.br/be/2022/10/bandeira-portugal-2.jpg",
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
      nacionalidade:
        "https://s1.static.brasilescola.uol.com.br/be/2022/10/bandeira-portugal-2.jpg",
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
      descricao:
        "Português, famoso por sua força, velocidade e habilidade aérea. Um dos maiores goleadores, jogou no Manchester United, Real Madrid, Juventus e atualmente no Al-Nassr.",
      pagina: "https://www.instagram.com/cristiano/",
      time: "Al-Nassr FC",
      nacionalidade:
        "https://s1.static.brasilescola.uol.com.br/be/2022/10/bandeira-portugal-2.jpg",
      alt: "Portugal",
      tags: "portugal, al nassr, Al-Nassr FC",
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
      descricao:
        "Considerado um dos maiores jogadores de futebol de todos os tempos, Eusébio era famoso por sua velocidade, força física e habilidade com a bola. Ídolo do Benfica, conquistou diversos títulos e encantou o mundo com seus gols memoráveis.",
      pagina: "https://en.wikipedia.org/wiki/Eusebio",
      time: "Aposentado (1979)",
      nacionalidade:
        "https://s1.static.brasilescola.uol.com.br/be/2022/10/bandeira-portugal-2.jpg",
      alt: "Portugal",
      tags: "portugal, atacante",
      imagem:
        "https://external-preview.redd.it/b24-10-years-without-the-king-eus%C3%A9bio-10-years-of-saudade-v0-gRIms1Rw7fiI-CLDbCmRhomSus9z9mAwngfR4PgxqNo.jpg?auto=webp&s=25a749ad2c58d95399ca681c9343bc9125d709d2",
      titulos:
        "Campeonato Português (11x) - Benfica<br> Taça de Portugal (5x) - Benfica<br> Copa dos Campeões Europeus (2x) - Benfica<br> Bola de Ouro (1x)",
      numero: "8",
      posicao: "Atacante",
      dataNascimento: "25/01/1942",
      curiosidades:
        "Eusébio era conhecido por sua humildade e carisma. Apesar de ter sido um dos maiores jogadores da história, sempre manteve os pés no chão e era muito querido pelos fãs.",
    },

    // Pepe
    {
      nome: "Pepe",
      descricao:
        "O zagueiro português Pepe é conhecido por sua força física, agressividade nas disputas e experiência. Tendo jogado por grandes clubes como Porto, Real Madrid e Porto novamente, conquistou diversos títulos e se tornou um dos principais defensores da sua geração.",
      pagina: "https://pt.wikipedia.org/wiki/Pepe_(futebolista)",
      time: "Aposentado (2024)",
      nacionalidade:
        "https://s1.static.brasilescola.uol.com.br/be/2022/10/bandeira-portugal-2.jpg",
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

    //Ibrahimović
    {
      nome: "Zlatan Ibrahimović",
      descricao:
        "Atacante sueco, conhecido por sua força física, técnica apurada e personalidade marcante. É considerado um dos maiores jogadores da história do futebol sueco.",
      pagina: "https://www.instagram.com/zlatanibrahimovic/",
      time: "Aposentado (2023)",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/1200px-Flag_of_Sweden.svg.png",
      alt: "Suécia",
      tags: "suécia, atacante",
      imagem:
        "https://conteudo.imguol.com.br/c/esporte/be/2021/09/12/ibrahimovic-comemora-gol-marcado-com-a-camisa-do-milan-diante-da-lazio-1631469353167_v2_600x800.jpg.webp", // Trocar por uma imagem do Zlatan Ibrahimović
      titulos:
        "Serie A, Ligue 1, Eredivisie, Copa da Itália, Supercopa Italiana",
      numero: "11",
      posicao: "Atacante",
      dataNascimento: "03/10/1981",
      curiosidades:
        "Zlatan é conhecido por suas frases marcantes e por ter jogado em diversos grandes clubes da Europa, como Milan, Inter de Milão, Barcelona, Paris Saint-Germain e Manchester United.",
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

    // Diego Forlán
    {
      nome: "Diego Forlán",
      descricao:
        "Um dos maiores atacantes da história do Uruguai, conhecido por sua habilidade e gols importantes.",
      pagina: "https://www.instagram.com/diego.forlan/",
      time: "Aposentado (2019)",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/640px-Flag_of_Uruguay.svg.png",
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
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/640px-Flag_of_Uruguay.svg.png",
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

    // Edinson Cavani
    {
      nome: "Edinson Cavani",
      descricao:
        "Um atacante forte e habilidoso, conhecido por sua cabeçada e gols decisivos.",
      pagina: "https://www.instagram.com/edinsoncavani21/",
      time: "Boca Juniors",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/640px-Flag_of_Uruguay.svg.png",
      alt: "Uruguai",
      tags: "uruguai, atacante, Boca Juniors",
      imagem:
        "https://upload.wikimedia.org/wikipedia/commons/9/9f/Edinson_Cavani_2018_%28cropped%29.jpg", // Substituir por uma imagem do Cavani
      titulos: "Ligue 1, Ligue 2",
      numero: "9",
      posicao: "Atacante",
      dataNascimento: "14/02/1987",
      curiosidades: "Conhecido por sua celebração com gesto de arco e flecha.",
    },

    // Giorgian De Arrascaeta
    {
      nome: "Giorgian De Arrascaeta",
      descricao:
        "Meia uruguaio conhecido por sua habilidade, visão de jogo e passes precisos. Um dos principais jogadores do Flamengo, chegou com tudo no time.",
      pagina: "https://www.instagram.com/g10dearrascaeta/",
      time: "Flamengo",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/640px-Flag_of_Uruguay.svg.png",
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
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/640px-Flag_of_Uruguay.svg.png",
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
      descricao:
        "Um dos atacantes mais completos do mundo, conhecido por sua habilidade, gols e personalidade forte.",
      pagina: "https://www.instagram.com/luis Suarez/",
      time: "Inter Miami CF",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/640px-Flag_of_Uruguay.svg.png",
      alt: "Uruguai",
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/640px-Flag_of_Uruguay.svg.png",
      alt: "Uruguai",
      tags: "uruguai, atacante, Inter Miami CF",
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
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/640px-Flag_of_Uruguay.svg.png",
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
      nacionalidade:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/640px-Flag_of_Uruguay.svg.png",
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
  let time = "";

  // Itera sobre cada dado na lista de dados
  for (let dado of dados) {
    nome = dado.nome.toLowerCase();
    tags = dado.tags.toLowerCase();
    time = dado.tags.toLowerCase();

    // se titulo includes campoPesquisa
    if (
      nome.includes(campoPesquisa) ||
      tags.includes(campoPesquisa) ||
      time.includes(campoPesquisa)
    ) {
      // Cria um novo elemento
      resultados += `
      <div class="item-resultado">
        <img class="dado-imagem" src="${dado.imagem}" alt="">
          <div class="div-info">
            <div class="numero-nome-time">
              <h2 id="numero">${dado.numero}</h2>
              <a class="link-pagina" href="${dado.pagina}" target="_blank"><h2 id="nome">${dado.nome}</h2></a>
              <img class="nacionalidade" src="${dado.nacionalidade}" alt="${dado.alt}">
            </div>
            <h3>Clube</h3>
            <p id="info">${dado.time}</p>
            <h3>Posição</h3>
            <p id="info">${dado.posicao}</p>
            <h3>Principais títulos</h3>
            <p id="info">${dado.titulos}</p>
            <h3>Nascimento</h3>
            <p id="info">${dado.dataNascimento}</p>
            <h3>Curiosidades</h3>
            <p id="info">${dado.curiosidades}</p>
          </div>
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
