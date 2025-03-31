// FUNÇÃO CONTEÚDO DO BOTÃO ----------------------------------------------------------------------------------------------

function gerarConteudoBotao() {
  const btnPesquisar = document.getElementById("pagina__btn");
  const termoPesquisa = document
    .getElementById("campo-pesquisa")
    .value.toLowerCase();

  if (termoPesquisa === "") {
    btnPesquisar.textContent = "Pesquisar todos";
  } else {
    btnPesquisar.textContent = "Pesquisar";
  }
}

document
  .getElementById("campo-pesquisa")
  .addEventListener("input", gerarConteudoBotao);

// Chama a função inicialmente para definir o texto do botão

gerarConteudoBotao();
