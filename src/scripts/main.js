// ### A loǵica abaixo será utilizada para apresentar o resultado da busca do campo de texto
let buscaItens = document.querySelector("#busca-produtos");
let iconeLupaBusca = document.querySelector("#lupa-busca");
let resultadoBusca = document.querySelector(".resultado-busca");
let menuELogoContainer = document.querySelector(".menu-e-carrinho");

iconeLupaBusca.addEventListener('click', () => {
    let resultado = buscaItens.value;
    resultadoBusca.textContent = `Você buscou por: ${resultado}`;

    menuELogoContainer.style.marginTop = '.4em';
    buscaItens.style.marginTop = '.4em'
})