function pesquisar2() {
  // Obtém a seção onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-selecoes");

  let campoSelecoes = document.getElementById("campo-selecoes").value;

  if (!campoSelecoes) {
    section.innerHTML = "<p>Nada foi encontrado. Digite o nome da seleção</p>";
    return;
  }

  campoSelecoes = campoSelecoes.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados formatados
  let resultados2 = "";
  let nome = "";
  let descricao = "";
  let tags = "";
  let titulos = "";

  // Itera sobre cada dado na lista de dados
  for (let dadosel of dadossel) {
    nome = dadosel.nome.toLowerCase();
    descricao = dadosel.descricao.toLowerCase();
    tags = dadosel.tags.toLowerCase();
    titulos = dadosel.titulos.toLowerCase();

    // se titulo includes campoPesquisa
    if (
      nome.includes(campoSelecoes) ||
      descricao.includes(campoSelecoes) ||
      tags.includes(campoSelecoes) ||
      titulos.includes(campoSelecoes)
    ) {
      // Cria um novo elemento
      resultados2 += `
        <div class="item-resultado2">
          <h2>
            <a href="${dadosel.pagina}" target="_blank">${dadosel.nome}</a>
          </h2>
          <p class="descricao-meta2">${dadosel.descricao}</p>
          <a href="${dadosel.link}" target="_blank"
            >Mais informações</a
          >
          <img class="imagem-selecoes" src="${dadosel.imagem}" alt="">
        </div>
      `;
    }
  }

  if (!resultados2) {
    resultados2 = "<p>Nada foi encontrado</p>";
  }

  // Atribui o HTML gerado à seção de resultados
  section.innerHTML = resultados2;
}
