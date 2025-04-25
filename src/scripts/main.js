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
let menuNavegacao = document.querySelector(".menu-navegação");

iconeLupaDesktop.addEventListener('click', () => {
    let resultadoDesktop = itemBuscaDesktop.value;

    if(resultadoDesktop == '') {
        resultadoBuscaDesktop.textContent = '';
    }

    if(resultadoDesktop != '') {
        resultadoBuscaDesktop.textContent = `Você buscou por: '${resultadoDesktop}'`;
        resultadoBuscaDesktop.style.width = '80%';
        resultadoBuscaDesktop.style.marginLeft = '1.5rem';
        resultadoBuscaDesktop.style.marginTop = '.5em';

        menuSuperior.style.marginTop = '2.5rem';
    }
})


// A lógica abaixo refere-se ao comportamento de passar o mouse sobre os itens do menu superior e mostrar o menu e submenus
let menuSuperior = document.querySelector(".menu-superior-desktop");
let listItems = document.querySelectorAll("ul li");

listItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        menuSuperior.style.display = "flex";
    })

    item.addEventListener('mouseleave', () => {
        menuSuperior.style.display = "none";
    })
})

menuSuperior.innerHTML = `
    <h2 class="titulo-menu-superior">Departamento</h2>

    <article class="itens-categoria">

        <div class="itens-container">
            <span>Categoria</span>

            <p>Categoria</p>
            <p>Categoria</p>
            <p>Categoria</p>
            <p>Categoria</p>
            <p>Categoria</p>
            <p>Categoria</p>
            <p>Categoria</p>
        </div>

        <div class="itens-container">
            <span>Categoria</span>

            <p>Categoria</p>
            <p>Categoria</p>
            <p>Categoria</p>
            <p>Categoria</p>
            <p>Categoria</p>
            <p>Categoria</p>
            <p>Categoria</p>
        </div>

        <div class="itens-container">
            <span>Categoria</span>

            <p>Categoria</p>
            <p>Categoria</p>
            <p>Categoria</p>
            <p>Categoria</p>
            <p>Categoria</p>
            <p>Categoria</p>
            <p>Categoria</p>
        </div>
    </article>

    <div class="imagem-caneca-container">
        <img 
    </div>
`;