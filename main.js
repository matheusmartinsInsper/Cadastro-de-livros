let Livros = [];

function Cadastrar() {
  let livro = {
    Nome: document.getElementById("nome").value,
    Ano: document.getElementById("ano").value,
    Categoria: document.getElementById("categoria").value,
    Preco: `${document.getElementById("preco").value}-R$`,
    id: makeId(),
  };
  // if (livro.Nome == Livros.find(({ Nome }) => Nome == livro.Nome)) {
  //   console.log("deu bom");
  // } else {
  //   console.log("deu ruim");
  // }
  if (validarLivro(livro) == true) {
    //chamar a função que verifica a repetição aqui
    const nomes = Livros.map(({ Nome }) => Nome);
    const anos = Livros.map(({ Ano }) => Ano);
    const categorias = Livros.map(({ Categoria }) => Categoria);
    const precos = Livros.map(({ Preco }) => Preco);

    if (
      livro.Nome == nomes.find((element) => element == livro.Nome) &&
      livro.Ano == anos.find((element) => element == livro.Ano)
    ) {
      alert("livro ja cadastrado");
    } else {
      salvarLivros(livro);
    }
  } else {
    return;
  }
}

function salvarLivros(element) {
  Livros.push(element);
  console.log(Livros);
  document.getElementById("nome").value = "";
  document.getElementById("ano").value = "";
  document.getElementById("categoria").value = "";
  document.getElementById("preco").value = "";
  livroCadastrado();
  renderizarLivros();
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
  let number = Math.round(Math.random().toFixed(7) * 1000000);
  return number;
};
// let repeticaoLivros = (array, value) => {
//   let number = array.reduce((contador, item) => {
//     value.Nome == item.Nome &&
//     value.Ano == item.Ano &&
//     value.Categoria == item.Categoria &&
//     value.Preco == item.Preco
//       ? contador + 1
//       : contador;
//   }, 0);
//   return number;
// };
let livroCadastrado = function () {
  window.document.getElementById("form").style.display = "none";
  window.document.getElementById("adicionar").style.display = "block";
  window.document.getElementById("titulo").style.color = "#eaeaea";
};
let adicionarLivro = function () {
  window.document.getElementById("adicionar").style.display = "none";
  window.document.getElementById("form").style.display = "flex";
  window.document.getElementById("titulo").style.color = "#3c4048";
};
function renderizarLivros() {
  let containerDeLivros = document.getElementById("livrosAdicionados");

  if (Livros[0] == "") {
    containerDeLivros.innerHTML = "<h2>texto</h2>";
  } else {
    let livrosSalvos = Livros.map(
      (element) => `<div class='cardizinho'>
      <div><span onclick='removerLivro(${element.id})'><i class="fa-solid fa-trash"></i></span></div>
      <h3>Livro: ${element.Nome}</h3>
      <h3>Ano: ${element.Ano}</h3>
      <h3>Categ: ${element.Categoria}</h3>
      <h3>Preço: ${element.Preco}</h3>
      <h3>ID: ${element.id}</h3>
      
      </div>`
    ).join("");
    containerDeLivros.innerHTML = livrosSalvos;
  }
}
function removerLivro(idDoLivro) {
  let newLivros = [];
  newLivros = Livros.filter((element) => element.id != idDoLivro);
  Livros = newLivros.map((element) => element);
  renderizarLivros();
  console.log(Livros);
}
