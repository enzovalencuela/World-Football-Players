// Obtém a seção onde os resultados da pesquisa serão exibidos
const dadosTec = document.getElementById("resultados-pesquisa");

const botao2 = document.getElementById("mostrarTecnicos");

// Array com os dados dos times
const tecnicos = [
  //Carlo Ancelotti
  {
    nome: "Carlo Ancelotti",
    descricao:
      "Conhecido por seu estilo de jogo elegante e ofensivo, Ancelotti é um dos treinadores mais experientes e bem-sucedidos do futebol mundial.",
    carreira:
      "Com passagens por diversos clubes de elite da Europa, Ancelotti conquistou títulos em diferentes países.",
    clubes:
      "Juventus, AC Milan, Chelsea, Paris Saint-Germain, Real Madrid, Bayern de Munique, Everton",
    titulos:
      "Múltiplos títulos da Liga dos Campeões da UEFA, além de outros títulos nacionais e internacionais.",
    curiosidades:
      "É conhecido por sua calma e por sua capacidade de lidar com grandes jogadores.",
    pagina: "https://pt.wikipedia.org/wiki/Carlo_Ancelotti",
    tags: "futebol, treinador, liga dos campeões, real madrid, bayern",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/d0/2023/12/29/carlo-ancelotti-tecnico-do-real-madrid-1703865270046_v2_450x600.jpg",
  },

  //Diego Simeone
  {
    nome: "Diego Simeone",
    descricao:
      "Conhecido por sua intensidade, disciplina tática e espírito de luta, Simeone transformou o Atlético de Madrid em uma força a ser respeitada no futebol mundial.",
    carreira:
      "Como jogador, foi um volante de muita raça e determinação. Como treinador, se destacou por sua capacidade de montar equipes competitivas e difíceis de serem batidas.",
    clubes:
      "Atlético de Madrid (jogador e treinador), Racing Club, Lazio, Inter de Milão, River Plate",
    titulos:
      "Vários títulos nacionais e internacionais com o Atlético de Madrid, incluindo a Liga Europa e a Supercopa da UEFA.",
    curiosidades:
      "É conhecido por suas comemorações intensas e por sua paixão pelo jogo.",
    pagina: "https://pt.wikipedia.org/wiki/Diego_Simeone",
    tags: "futebol, treinador, atlético de madrid, intenso, disciplina",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Diego_Simeone.jpg/640px-Diego_Simeone.jpg",
  },

  //Filipe Luís
  {
    nome: "Filipe Luís",
    descricao:
      "Lenda do futebol brasileiro, Filipe Luís iniciou sua carreira como treinador com a proposta de implementar um jogo ofensivo e dinâmico, aproveitando sua experiência como lateral para desenvolver jogadores e criar um sistema de jogo eficiente.",
    carreira:
      "Após encerrar a carreira como jogador, Filipe Luís decidiu seguir os passos de grandes ídolos e se tornou treinador, buscando transmitir sua paixão pelo futebol e sua visão de jogo para as novas gerações.",
    clubes: "CR Flamengo",
    titulos: "nenhum titulo conquistado até o momento",
    curiosidades:
      "Conhecido por sua disciplina tática e por sua capacidade de motivar os jogadores, Filipe Luís busca construir equipes sólidas e competitivas.",
    pagina: "https://www.instagram.com/filipeluis/",
    tags: "futebol, treinador, brasil, lateral, ofensivo, desenvolvimento",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/cd/2024/11/06/filipe-luis-tecnico-do-flamengo-durante-jogo-contra-o-cruzeiro-1730943460720_v2_450x600.jpg",
  },

  //José Mourinho
  {
    nome: "José Mourinho",
    descricao:
      "Conhecido por seu estilo de jogo defensivo e por suas declarações polêmicas, Mourinho é um dos treinadores mais bem-sucedidos da história.",
    carreira:
      "Iniciou sua carreira como auxiliar técnico e rapidamente se destacou como treinador principal. Comandou clubes como Porto, Chelsea, Inter de Milão, Real Madrid, Manchester United e atualmente treina a Roma.",
    clubes:
      "Porto, Chelsea, Inter de Milão, Real Madrid, Manchester United, Roma",
    titulos:
      "Numerosos títulos nacionais e internacionais, incluindo a Liga dos Campeões da UEFA com Porto e Inter de Milão.",
    curiosidades:
      "É conhecido como 'O Especial Um' e por sua rivalidade com Pep Guardiola.",
    pagina: "https://pt.wikipedia.org/wiki/José_Mourinho",
    tags: "futebol, treinador, porto, chelsea, inter, real madrid, manchester united, roma",
    imagem:
      "https://img.redbull.com/images/c_crop,x_442,y_0,h_912,w_729/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2018/11/13/7ed099f1-8aeb-4cd5-88c5-e8096400ab7b/josemourinho",
  },

  //Jürgen Klopp
  {
    nome: "Jürgen Klopp",
    descricao:
      "Conhecido por seu estilo de jogo intenso e ofensivo, Klopp é adorado pelos torcedores por sua paixão e carisma.",
    carreira:
      "Iniciou sua carreira na Alemanha e se destacou no comando do Borussia Dortmund. Atualmente, comanda o Liverpool.",
    clubes: "Mainz 05, Borussia Dortmund, Liverpool",
    titulos:
      "Venceu a Premier League, a Liga dos Campeões da UEFA e a Supercopa da UEFA com o Liverpool.",
    curiosidades:
      "É conhecido por suas comemorações animadas e por sua frase de efeito 'Mentality Monsters' (Monstros mentais).",
    pagina: "https://pt.wikipedia.org/wiki/Jürgen_Klopp",
    tags: "futebol, treinador, bvb, liverpool, premier league, liga dos campeões",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/8/81/J%C3%BCrgen_Klopp%2C_Liverpool_vs._Chelsea%2C_UEFA_Super_Cup_2019-08-14_04.jpg",
  },

  //Marcelo Bielsa
  {
    nome: "Marcelo Bielsa",
    descricao:
      "Conhecido como 'El Loco', Bielsa é um dos treinadores mais intensos e apaixonados do futebol. Seu estilo de jogo, caracterizado por alta intensidade e pressão constante, revolucionou o futebol de vários clubes.",
    carreira:
      "Com uma longa e bem-sucedida carreira, Bielsa treinou equipes como Athletic Bilbao, Marseille, e mais recentemente o Leeds United.",
    clubes:
      "Athletic Bilbao, Newell's Old Boys, Chile, Argentina, Marseille, Lazio, Atlas, América, Vélez Sarsfield, Leeds United",
    titulos:
      "Vários títulos nacionais e internacionais, incluindo a Copa América com a seleção chilena.",
    curiosidades:
      "É conhecido por seus treinos intensos e por sua filosofia de jogo única.",
    pagina: "https://pt.wikipedia.org/wiki/Marcelo_Bielsa",
    tags: "futebol, treinador, bielsa, intenso, pressão, tática",
    imagem:
      "https://www.tupi.fm/wp-content/uploads/2022/12/Captura-de-tela-2022-12-03-181632.png",
  },

  //Massimiliano Allegri
  {
    nome: "Massimiliano Allegri",
    descricao:
      "Conhecido por sua capacidade de montar equipes equilibradas e por sua experiência em competições europeias, Allegri é um dos treinadores mais respeitados da Itália.",
    carreira:
      "Com passagens por diversos clubes italianos, Allegri conquistou diversos títulos e reconhecimento internacional.",
    clubes: "Cagliari, Milan, Juventus, Sassuolo",
    titulos:
      "Múltiplos títulos da Serie A com a Juventus, além de outros títulos nacionais e internacionais.",
    curiosidades:
      "É conhecido por sua calma e por sua capacidade de lidar com grandes jogadores.",
    pagina: "https://pt.wikipedia.org/wiki/Massimiliano_Allegri",
    tags: "futebol, treinador, juventus, série a, experiência",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/fd/2024/05/17/massimiliano-allegri-ex-tecnico-da-juventus-durante-a-final-da-copa-italia-1715970603963_v2_450x600.jpg",
  },

  //Pep Guardiola
  {
    nome: "Pep Guardiola",
    descricao:
      "Considerado um dos maiores treinadores de futebol de todos os tempos, conhecido por seu estilo de jogo ofensivo e dominador.",
    carreira:
      "Iniciou como treinador em 2008 pelo Barcelona B, posteriormente comandando o Barcelona, Bayern de Munique e atualmente o Manchester City.",
    clubes: "Barcelona B, Barcelona, Bayern de Munique, Manchester City",
    titulos:
      "Numerosos títulos nacionais e internacionais, incluindo múltiplos campeonatos e copas em cada clube que treinou, além de títulos da Liga dos Campeões da UEFA.",
    curiosidades:
      "Foi jogador de futebol e atuava como volante. É conhecido por sua atenção aos detalhes táticos e por desenvolver jovens talentos.",
    pagina: "https://pt.wikipedia.org/wiki/Josep_Guardiola", // Sugestão de uma página com informações sobre Guardiola
    tags: "futebol, treinador, barcelona, bayern, manchester city, tática",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/b/be/Pep_2017_%28cropped%29.jpg",
  },

  //Sir Alex Ferguson
  {
    nome: "Sir Alex Ferguson",
    descricao:
      "Considerado um dos maiores treinadores de todos os tempos, Ferguson construiu uma dinastia no Manchester United, conquistando diversos títulos e formando uma geração de grandes jogadores.",
    carreira:
      "Passou a maior parte de sua carreira no Manchester United, onde dominou o futebol inglês por décadas.",
    clubes: "Aberdeen, Manchester United",
    titulos:
      "Numerosos títulos da Premier League, Copas da Inglaterra e Liga dos Campeões da UEFA com o Manchester United.",
    curiosidades:
      "É conhecido por sua liderança forte e por sua capacidade de motivar seus jogadores.",
    pagina: "https://pt.wikipedia.org/wiki/Alex_Ferguson",
    tags: "futebol, treinador, manchester united, premier league, lenda",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Alex_Ferguson.jpg/1200px-Alex_Ferguson.jpg",
  },

  //Thomas Tuchel
  {
    nome: "Thomas Tuchel",
    descricao:
      "Conhecido por seu estilo de jogo tático e por suas adaptações rápidas durante as partidas, Tuchel é um dos treinadores mais inovadores do futebol moderno.",
    carreira:
      "Com passagens por clubes como Mainz 05, Borussia Dortmund, Paris Saint-Germain e Chelsea, Tuchel conquistou diversos títulos e reconhecimento internacional.",
    clubes: "Mainz 05, Borussia Dortmund, Paris Saint-Germain, Chelsea",
    titulos:
      "Liga dos Campeões da UEFA com o Chelsea, além de outros títulos nacionais e internacionais.",
    curiosidades:
      "É conhecido por suas táticas complexas e por sua intensa preparação para os jogos.",
    pagina: "https://pt.wikipedia.org/wiki/Thomas_Tuchel",
    tags: "futebol, treinador, tática, chelsea, psg, bvb",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/6/6f/2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93175.jpg",
  },

  //Tite
  {
    nome: "Tite",
    nomeCompleto: "Adenor Bacchi",
    descricao:
      "Considerado um dos melhores treinadores da história do futebol brasileiro, Tite é conhecido por sua organização tática e por sua gestão de grupo.",
    carreira:
      "Iniciou sua carreira como jogador e logo se destacou como treinador. Comandou diversos clubes brasileiros, como Corinthians, Atlético Mineiro e Seleção Brasileira.",
    clubes: "Corinthians, Atlético Mineiro, Seleção Brasileira",
    titulos:
      "Numerosos títulos nacionais e internacionais, incluindo a Copa América e a Copa do Mundo de Clubes com o Corinthians, e o título da Copa América com a Seleção Brasileira.",
    estiloDeJogo:
      "Pragmático, com forte organização tática e foco na eficiência.",
    curiosidades:
      "É conhecido por suas entrevistas sinceras e por sua paixão pelo futebol.",
    pagina: "https://pt.wikipedia.org/wiki/Tite",
    tags: "futebol, treinador, brasil, seleção brasileira, corinthians, atletico mineiro",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Tite_850_0231.jpg/800px-20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Tite_850_0231.jpg",
  },

  //Zinedine Zidane
  {
    nome: "Zinedine Zidane",
    descricao:
      "Lenda do futebol como jogador, Zidane se tornou um dos treinadores mais bem-sucedidos do Real Madrid.",
    carreira:
      "Após encerrar a carreira como jogador, iniciou sua trajetória como treinador no Real Madrid, conquistando diversos títulos.",
    clubes: "Real Madrid Castilla, Real Madrid",
    titulos:
      "Múltiplos títulos da Liga dos Campeões da UEFA com o Real Madrid.",
    curiosidades:
      "Conquistou a Liga dos Campeões da UEFA três vezes consecutivas com o Real Madrid.",
    pagina: "https://pt.wikipedia.org/wiki/Zinedine_Zidane",
    tags: "futebol, treinador, real madrid, liga dos campeões, zidane",
    imagem:
      "https://conteudo.imguol.com.br/c/esporte/5d/2020/07/18/zinedine-zidane-comanda-o-real-madrid-em-partida-do-campeonato-espanhol-em-julho-de-2020-1595095769421_v2_3x4.jpg",
  },
];

botao2.addEventListener("click", () => {
  let htmlContent = "";

  tecnicos.forEach((tecnico) => {
    htmlContent += `
        <div class="item-resultado">
          <div class="div-superior">
            <img class="dado-imagem" src="${tecnico.imagem}" alt="">
              <div class="div-info">
                <div class="numero-nome-time">
                  <a class="link-pagina" href="${tecnico.pagina}" target="_blank"><h2 id="nome">${tecnico.nome}</h2></a>
                </div>
                <h3>Início de carreira</h3>
                <p id="info">${tecnico.carreira}</p>
                <h3>Clube</h3>
                <p id="info">${tecnico.clubes}</p>
                <h3>Principais Títulos</h3>
                <p id="info">${tecnico.titulos}</p>
                <h3>Curiosidades</h3>
                <p id="info">${tecnico.curiosidades}</p>
              </div>
          </div>
          <p class="descricao-meta">${tecnico.descricao}</p>
        </div>
      `;
  });

  dadosTec.innerHTML = htmlContent;
});
