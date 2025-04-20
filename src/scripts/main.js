// ### A loǵica abaixo será utilizada para apresentar o resultado da busca do campo de texto em dispositivos mobile
let buscaItens = document.querySelector("#busca-produtos");
let iconeLupaBusca = document.querySelector("#lupa-busca");
let resultadoBusca = document.querySelector(".resultado-busca");
let menuELogoContainer = document.querySelector(".menu-e-carrinho");
let carouselContainer = document.querySelector(".slide");

iconeLupaBusca.addEventListener('click', () => {
    let resultado = buscaItens.value;

    if(resultado == '') {
        resultadoBusca.textContent = '';
    }

    if(resultado != '') {
        resultadoBusca.textContent = `Você buscou por: '${resultado}'`;

        menuELogoContainer.style.marginTop = '.4em';
        buscaItens.style.marginTop = '.4em'
        carouselContainer.style.marginTop = '1em';
    }
})


// A lógica abaixo será utilizada para apresentar o resultado da busca do campo de texto em dispositivos desktop
let itemBuscaDesktop = document.querySelector("#busca-produtos-desktop");
let iconeLupaDesktop = document.querySelector("#lupa-busca-desktop");
let resultadoBuscaDesktop = document.querySelector(".resultado-busca-desktop");
let menuSuperior = document.querySelector(".menu-superior");

iconeLupaDesktop.addEventListener('click', () => {
    let resultadoDesktop = itemBuscaDesktop.value;

    if(resultadoDesktop == '') {
        resultadoBuscaDesktop.textContent = '';
    }

    if(resultadoDesktop != '') {
        resultadoBuscaDesktop.textContent = `Você buscou por: '${resultadoDesktop}'`;
        resultadoBuscaDesktop.style.marginLeft = '10.9em';
        resultadoBuscaDesktop.style.marginTop = '.7em';
        resultadoBuscaDesktop.style.marginBottom = '.1em';
    }
})