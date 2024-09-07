function pesquisar() {
  // Obtém a seção onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  if (!campoPesquisa) {
    section.innerHTML = "<p>Nada foi encontrado. Digite o nome do atleta</p>";
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados formatados
  let resultados = "";
  let nome = "";
  let descricao = "";
  let tags = "";
  let titulos = "";

  // Itera sobre cada dado na lista de dados
  for (let dado of dados) {
    nome = dado.nome.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();
    titulos = dado.titulos.toLowerCase();

    // se titulo includes campoPesquisa
    if (
      nome.includes(campoPesquisa) ||
      descricao.includes(campoPesquisa) ||
      tags.includes(campoPesquisa) ||
      titulos.includes(campoPesquisa)
    ) {
      // Cria um novo elemento
      resultados += `
      <div class="item-resultado">
        <h2>
          <a href="${dado.pagina}" target="_blank">${dado.nome}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href="${dado.link}" target="_blank"
          >Mais informações</a
        >
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
