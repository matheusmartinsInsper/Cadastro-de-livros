let Livros = [];

function Cadastrar() {
  let livro = {
    Nome: document.getElementById("nome").value,
    Ano: document.getElementById("ano").value,
    Categoria: document.getElementById("categoria").value,
    Preco: `${document.getElementById("preco").value}-R$`,
    id: makeId(),
  };
  if (validarLivro(livro) == true) {
    //chamar a função que verifica a repetição aqui

    salvarLivros(livro);
  } else {
    return;
  }
}
function salvarLivros(element) {
  Livros.push(element);
  console.log(Livros);
}
function validarLivro(Livro) {
  if (Livro.Nome == "") {
    alert("Insira o nome do Livro");
    return false;
  } else if (Livro.Ano == "") {
    alert("Insira o ano do Livro");
    return false;
  } else if (Livro.Preco == "") {
    alert("Insira o preço do Livro");
    return false;
  } else if (Livro.Categoria == "") {
    alert("Insira a categoria do Livro");
    return false;
  }
  return true;
}
let makeId = () => {
  let number = Math.round(Math.random().toFixed(7) * 10000000);
  return number;
};
let repeticaoLivros = (Livro) => {
  for (let i = 0; i < Livros.length; i++) {
    Livro.Nome == Livros[i].Nome &&
    Livro.Ano == Livros[i].Ano &&
    Livro.categoria == Livros[i].Categoria &&
    Livro.Preco == Livros[i].Preco
      ? true
      : false;
  }
};
