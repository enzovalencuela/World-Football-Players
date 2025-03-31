// Obtém a seção onde os resultados da pesquisa serão exibidos
const dadosSel = document.getElementById("resultados-pesquisa");

const botao3 = document.getElementById("mostrarSelecoes");

const selecoes = [
  //Seleção Alemã
  {
    nome: "Seleção Alemã",
    confederacao: "União das Federações Europeias de Futebol (UEFA)",
    fundacao: "1900",
    titulos:
      "Copa do Mundo FIFA (4 vezes): 1954, 1974, 1990, 2014<br>Campeonato Europeu (3 vezes)<br>Confederações (2 vezes)",
    mascote: "Mannschaft (A equipe)",
    cores: "Branco, preto e vermelho",
    curiosidades:
      "A Alemanha é uma das seleções mais tradicionais e bem-sucedidas do futebol mundial.<br>A Alemanha é conhecida por sua organização tática e por formar grandes jogadores.<br>A Copa do Mundo de 2014, vencida pela Alemanha, foi realizada no Brasil.",
    pagina: "https://www.dfb.de/",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/a/a9/DFBEagle.png",
  },

  //Seleção Argentina
  {
    nome: "Seleção Argentina",
    confederacao: "Confederação Sul-Americana de Futebol (CONMEBOL)",
    fundacao: 1903,
    titulos:
      "Copa do Mundo FIFA (3 vezes): 1978, 1986, 2022<br>Copa América (15 vezes)<br>Confederações (1 vez)<br>Jogos Olímpicos (2 vezes)",
    mascote: "La Albiceleste",
    cores: "Celeste e branco",
    curiosidades:
      "A Argentina é uma das seleções mais apaixonantes do futebol mundial.<br>Maradona e Messi são considerados lendas do futebol argentino e mundial.<br>O estádio Monumental de Núñez, em Buenos Aires, é a casa da seleção argentina e um dos mais famosos da América Latina.",
    pagina: "https://www.afa.org.ar/",
    imagem:
      "https://upload.wikimedia.org/wikipedia/pt/f/fc/230px-Afa_logo.svg.png",
  },

  //Seleção Belga
  {
    nome: "Seleção Belga",
    confederacao: "União das Federações Europeias de Futebol (UEFA)",
    fundacao: 1895,
    titulos: "Nenhum título em Copas do Mundo ou Campeonatos Europeus",
    mascote: "Os Diabos Vermelhos",
    cores: "Vermelho, preto e amarelo",
    curiosidades:
      "A Bélgica tem uma geração de ouro de jogadores, com nomes como Kevin De Bruyne e Romelu Lukaku.<br>A Bélgica tem sido uma das favoritas em diversas competições nos últimos anos.<br>O Estádio Rei Balduíno, em Bruxelas, é o estádio da seleção belga.",
    pagina: "https://www.rbfa.be/",
    imagem:
      "https://upload.wikimedia.org/wikipedia/pt/b/b0/Royal_Belgian_FA_logo_2019.png",
  },

  //Seleção Brasileira
  {
    nome: "Seleção Brasileira",
    confederacao: "Confederação Brasileira de Futebol (CBF)",
    fundacao: "1914",
    titulos:
      "Copa do Mundo FIFA (5 vezes): 1958, 1962, 1970, 1994, 2002<br>Copa América (9 vezes)<br>Confederações (4 vezes)",
    mascote: "Canarinho",
    cores: "Amarelo, verde e branco",
    curiosidades:
      "A Seleção Brasileira é considerada por muitos a melhor seleção de futebol de todos os tempos.<br>Pelé, considerado o maior jogador de futebol de todos os tempos, fez parte da Seleção Brasileira.<br>O estádio do Maracanã, no Rio de Janeiro, é um dos mais famosos estádios de futebol do mundo e já foi palco de diversas partidas da Seleção.",
    pagina: "https://www.cbf.com.br/",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Brazilian_Football_Confederation_logo.svg/1200px-Brazilian_Football_Confederation_logo.svg.png",
  },

  //Seleção Espanhola
  {
    nome: "Seleção Espanhola",
    confederacao: "União das Federações Europeias de Futebol (UEFA)",
    fundacao: 1909,
    titulos:
      "Copa do Mundo FIFA (1 vez): 2010<br>Campeonato Europeu (3 vezes): 1964, 2008, 2012<br>Liga das Nações da UEFA (1 vez): 2023",
    mascote: "La Roja (A Vermelha)",
    cores: "Vermelho e amarelo",
    curiosidades:
      "A Espanha é conhecida por seu estilo de jogo técnico e elegante, chamado de 'tiki-taka'.<br>A Copa do Mundo de 2010, vencida pela Espanha, foi marcada por uma campanha invicta.<br>A Espanha já foi campeã da Europa em três oportunidades, mostrando sua força no continente.",
    pagina: "https://www.rfef.es/",
    imagem:
      "https://upload.wikimedia.org/wikipedia/pt/3/31/Spain_National_Football_Team_badge.png",
  },

  //Seleção Francesa
  {
    nome: "Seleção Francesa",
    confederacao: "União das Federações Europeias de Futebol (UEFA)",
    fundacao: "1904",
    titulos:
      "Copa do Mundo FIFA (2 vezes): 1998, 2018<br>Campeonato Europeu (2 vezes)<br>Confederações (1 vez)",
    mascote: "Le coq gaulois (O galo gaulês)",
    cores: "Azul, branco e vermelho",
    curiosidades:
      "A Seleção Francesa é uma das mais tradicionais e populares do futebol mundial.<br>A França sediou e venceu a Copa do Mundo de 1998, com Zinedine Zidane como um dos principais jogadores.<br>O Estádio de France, em Saint-Denis, é o estádio da Seleção Francesa e um dos mais modernos da Europa.",
    pagina: "https://www.fff.fr/",
    imagem:
      "https://upload.wikimedia.org/wikipedia/pt/2/25/Logo_Sele%C3%A7%C3%A3o_Francesa_2018.png",
  },

  //Seleção Inglesa
  {
    nome: "Seleção Inglesa",
    confederacao: "União das Federações Europeias de Futebol (UEFA)",
    fundacao: 1872,
    titulos: "Copa do Mundo FIFA (1 vez): 1966<br>Campeonato Europeu (0 vezes)",
    mascote: "Os Três Leões",
    cores: "Branco e vermelho",
    curiosidades:
      "A Inglaterra é uma das seleções mais antigas do mundo, tendo disputado o primeiro jogo internacional da história.<br>A Inglaterra é conhecida por sua paixão pelo futebol e por ter uma grande base de torcedores.<br>Wembley, em Londres, é o estádio mais famoso da Inglaterra e palco de grandes jogos da seleção.",
    pagina: "https://www.thefa.com/",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Arms_of_The_Football_Association_%28include_star%29.svg/150px-Arms_of_The_Football_Association_%28include_star%29.svg.png",
  },

  //
  {
    nome: "Seleção Italiana",
    confederacao: "União das Federações Europeias de Futebol (UEFA)",
    fundacao: "1898",
    titulos:
      "Copa do Mundo FIFA (4 vezes): 1934, 1938, 1982, 2006<br>Campeonato Europeu (2 vezes): 1968, 2020",
    mascote: "Azzurri (Os Azuis)",
    cores: "Azul e branco",
    curiosidades:
      "A Itália é uma das seleções mais tradicionais e bem-sucedidas do futebol mundial.<br>A Azzurri é conhecida por sua defesa sólida e estilo de jogo tático.<br>O Estádio Olímpico de Roma é um dos estádios mais importantes da Itália e já sediou diversas partidas da seleção.",
    pagina: "https://www.figc.it/",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Logo_Italy_National_Football_Team_-_2023.svg/120px-Logo_Italy_National_Football_Team_-_2023.svg.png",
  },

  //Seleção Uruguaia
  {
    nome: "Seleção Uruguaia",
    confederacao: "Confederação Sul-Americana de Futebol (CONMEBOL)",
    fundacao: 1900,
    titulos:
      "Copa do Mundo FIFA (2 vezes): 1930, 1950<br>Copa América (15 vezes)",
    mascote: "La Celeste",
    cores: "Celeste e branco",
    curiosidades:
      "O Uruguai foi o primeiro país a conquistar a Copa do Mundo, em 1930, como país sede.<br>A Celeste é conhecida por sua garra e por ter jogadores históricos como Suárez e Cavani.<br>O Estádio Centenário, em Montevidéu, é um dos estádios mais tradicionais do futebol sul-americano.",
    pagina: "https://www.auf.org.uy/",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/0/04/AUF.png",
  },
];

botao3.addEventListener("click", () => {
  let htmlContent = "";

  selecoes.forEach((selecao) => {
    htmlContent += `
        <div class="jogador selecao-clube">
        <div class="div-superior">
          <img class="dado-imagem-clube-selecao" src="${selecao.imagem}" alt="">
            <div class="div-info">
              <div class="numero-nome-selecao">
                <a href="${selecao.pagina}" target="_blank"><h2 id="nome">${selecao.nome}</h2></a>
                <h3 id="sub-info">${selecao.confederacao}</h3>
              </div>
              <h3>Fundação</h3>
              <p id="info">${selecao.fundacao}</p>
              <h3>Principais Títulos</h3>
              <p id="info">${selecao.titulos}</p>
              <h3>Mascote</h3>
              <p id="info">${selecao.mascote}</p>
              <h3>Cores</h3>
              <p id="info">${selecao.cores}</p>
              <h3>Curiosidades</h3>
              <p id="info">${selecao.curiosidades}</p>
            </div>
          </div>
        </div>
        `;
  });

  dadosSel.innerHTML = htmlContent;
});
