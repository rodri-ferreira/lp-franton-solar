const btnMenu = document.querySelector('.header-buttonMenu');

const imgs = document.getElementById('img');
const img = document.querySelectorAll("#img img");


const ativarMenuResponsivo = () => {
    const nav = document.querySelector('.header-navegacao')
    const header = document.getElementById('header');
    nav.classList.toggle('ativar');
    header.classList.toggle('ativar')
}

const mudarCorHeader = () => {
    const header = document.getElementById('header');
    const headerNav = document.querySelector('.header-navegacao')
    const scrollPosition = window.scrollY;
    
    if(scrollPosition > 15) {
        header.style.backgroundColor = "#000"
        headerNav.classList.add('transform-add')
    } else {
        header.style.backgroundColor = "transparent"
        headerNav.classList.remove('transform-add')
    }
}

const verificarLarguraTela = () => {
    let larguraTela = window.innerWidth;

    if(larguraTela > 992) {
        const nav = document.querySelector('.header-navegacao')
        nav.classList.remove('ativar');
    }

}

let idx = 0;

function carroussel() {
    idx++

    if(idx > img.length - 4) {
        
    }

    imgs.style.transform = `translateX(${-idx *300}px)`;
}

    

setInterval(carroussel, 3000);


btnMenu.addEventListener('click', ativarMenuResponsivo);
window.addEventListener('scroll', mudarCorHeader)
window.addEventListener('resize', verificarLarguraTela);
