const grid = document.querySelector(".grid-series");
const campoBusca = document.querySelector(".busca");
const selectAno = document.querySelector(".select-ano");
const selectPais = document.querySelector(".select-pais");
const contador = document.querySelector(".contador");


function renderizarAtores(lista) {

  grid.innerHTML = "";

  lista.forEach((ator) => {

    grid.innerHTML += `
      <div class="serie">
        <img src="${ator.foto}" alt="${ator.nome}">

        <div class="info">
          <h2>${ator.nome}</h2>
          <p>${ator.pais} · ${ator.nascimento}</p>
        </div>
      </div>
    `;

  });

  contador.textContent = `${lista.length} de ${atores.length} pessoas`;
}


function aplicarFiltros() {

  const termo = campoBusca.value.toLowerCase().trim();
  const anoEscolhido = selectAno.value;
  const paisEscolhido = selectPais.value;

  const filtrados = atores.filter((ator) => {

    // Busca pelo nome
    const bateNome = ator.nome
      .toLowerCase()
      .includes(termo);


    // Filtro por década
    const anoNascimento = Number(
      ator.nascimento.substring(0, 4)
    );

    const bateAno =
      anoEscolhido === "todos" ||
      (
        anoNascimento >= Number(anoEscolhido) &&
        anoNascimento < Number(anoEscolhido) + 10
      );


    // Filtro por país
    const batePais =
      paisEscolhido === "todos" ||
      ator.pais === paisEscolhido;


    return bateNome && bateAno && batePais;
  });

  renderizarAtores(filtrados);
}


renderizarAtores(atores);
