// verificar se ta logado
if (!localStorage.getItem("@name")) {
  const ctas = document.getElementById('ctas');
  ctas.remove()
}

let filmesArray = [
  {
    nome: "Interstellar",
    photo:
      "https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?b=1&k=20&m=1357365823&s=170667a&w=0&h=y6ufWZhEt3vYWetga7F33Unbfta2oQXCZLUsEa67ydM=",
    descricao:
      "As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem...",
    midia: "Filme",
    genero: "Suspense",
    avaliacao: "5 de 5",
    lancamento: "2019",
  },
  {
    nome: "Algum Terror",
    photo:
      "https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?b=1&k=20&m=1357365823&s=170667a&w=0&h=y6ufWZhEt3vYWetga7F33Unbfta2oQXCZLUsEa67ydM=",
    descricao:
      "As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem...",
    midia: "Filme",
    genero: "Terror",
    avaliacao: "5 de 5",
    lancamento: "2019",
  },
  {
    nome: "Algum Terror",
    photo:
      "https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?b=1&k=20&m=1357365823&s=170667a&w=0&h=y6ufWZhEt3vYWetga7F33Unbfta2oQXCZLUsEa67ydM=",
    descricao:
      "As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem...",
    midia: "Filme",
    genero: "Terror",
    avaliacao: "4 de 5",
    lancamento: "2018",
  },
  {
    nome: "Alguma serie suspense",
    photo:
      "https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?b=1&k=20&m=1357365823&s=170667a&w=0&h=y6ufWZhEt3vYWetga7F33Unbfta2oQXCZLUsEa67ydM=",
    descricao:
      "As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem...",
    midia: "Série",
    genero: "Suspense",
    avaliacao: "5 de 5",
    lancamento: "2019",
  },
  {
    nome: "Algum livro de terror",
    photo:
      "https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?b=1&k=20&m=1357365823&s=170667a&w=0&h=y6ufWZhEt3vYWetga7F33Unbfta2oQXCZLUsEa67ydM=",
    descricao:
      "As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem...",
    midia: "Livro",
    genero: "Terror",
    avaliacao: "5 de 5",
    lancamento: "2019",
  },
];

// procurar por filmed no cache
const filmesCache = localStorage.getItem('@filmes')
if(filmesCache){
  let filmesParsed = JSON.parse(filmesCache);
  filmesParsed.map((itemzinho) => {
    filmesArray.push(itemzinho)
  })
}


let midia = "";
let genero = "";
let avaliacao = "";
let lancamento = "";

const getMidiaValue = () => {
  const valorNovo = document.getElementById("midia").value;
  if (valorNovo != "Qualquer") {
    midia = valorNovo;
  } else {
    midia = "";
  }
  search();
};

const getGeneroValue = () => {
  const valorNovo = document.getElementById("genero").value;
  if (valorNovo != "Qualquer") {
    genero = valorNovo;
  } else {
    genero = "";
  }
  search();
};

const getAvaliacaoValue = () => {
  const valorNovo = document.getElementById("avaliacao").value;
  if (valorNovo != "Qualquer") {
    avaliacao = valorNovo;
  } else {
    avaliacao = "";
  }
  search();
};

const getLancamentoValue = () => {
  const valorNovo = document.getElementById("lancamento").value;
  if (valorNovo != "Qualquer") {
    lancamento = valorNovo;
  } else {
    lancamento = "";
  }
  search();
};

const search = () => {
  console.log({
    midia,
    genero,
    avaliacao,
    lancamento,
  });

  let novoArray = [];

  filmesArray.map((item) => {
    // procurar midia
    if (item.midia == (midia == "" ? item.midia : midia)) {
      // procurar genero
      if (item.genero == (genero == "" ? item.genero : genero)) {
        // procurar avaliacao
        if (item.avaliacao == (avaliacao == "" ? item.avaliacao : avaliacao)) {
          // procurar lancamento
          if (
            item.lancamento == (lancamento == "" ? item.lancamento : lancamento)
          ) {
            novoArray.push(item);
          }
        }
      }
    }
  });

  console.log(novoArray);

  // mostrar na tela:
  // remover os items atuais da tela >>
  document.getElementsByClassName("movies-list")[0].textContent = "";

  let HTMLCollectionString = "";

  if (novoArray.length == 0) {
  } else {
    novoArray.map((item) => {
      HTMLCollectionString += `        <div class="filme-component">
        <img src="${item.photo}" class="imagem">
        <h1>${item.nome}</h1>
        <p>${item.descricao}</p>
      </div>`;
    });
  }

  document.getElementsByClassName("movies-list")[0].innerHTML =
    HTMLCollectionString;
};

const handleOk = () => {
  const midia = document.getElementById("midia").value;
  const genero = document.getElementById("genero").value;
  const lancamento = document.getElementById("lancamento").value;
  const avaliacao = document.getElementById("avaliacao").value;

  const titulo = document.getElementById("title").value;
  const sumario = document.getElementById("sumario").value;

  if (
    midia != "" &&
    midia != "Qualquer" &&
    genero != "" &&
    genero != "Qualquer" &&
    lancamento != "" &&
    lancamento != "Qualquer" &&
    avaliacao != "" &&
    avaliacao != "Qualquer" &&
    titulo.length > 1 &&
    sumario.length > 1
  ) {
    document.getElementsByClassName("login-cta")[0].style = "";
    return true;
  } else {
    document.getElementsByClassName("login-cta")[0].style = "background-color: #7c7a80; box-shadow: none;";
  
  }
};

const handleAdd = () => {
  if (handleOk()) {
    const midia = document.getElementById("midia").value;
    const genero = document.getElementById("genero").value;
    const lancamento = document.getElementById("lancamento").value;
    const avaliacao = document.getElementById("avaliacao").value;

    const titulo = document.getElementById("title").value;
    const sumario = document.getElementById("sumario").value;

    const info = {
      nome: titulo,
      photo:
        "https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?b=1&k=20&m=1357365823&s=170667a&w=0&h=y6ufWZhEt3vYWetga7F33Unbfta2oQXCZLUsEa67ydM=",
      descricao: sumario,
      midia: midia,
      genero,
      avaliacao,
      lancamento,
    };

    // verificar se existe um cache
    const filmesCache = localStorage.getItem('@filmes')
    if(!filmesCache){
      localStorage.setItem('@filmes', JSON.stringify([info]))
    } else {
      let filmesParsed = JSON.parse(filmesCache)
      filmesParsed.push(info)
      localStorage.setItem('@filmes', JSON.stringify(filmesParsed))
    }

    location.href = 'galeria.html'

  } else {
    console.log("Campos invalidos");
  }
};
