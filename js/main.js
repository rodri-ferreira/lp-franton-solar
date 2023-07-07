const btnMenu = document.querySelector('.header-buttonMenu');

const ativarMenuResponsivo = () => {
    const nav = document.querySelector('.header-navegacao')
    nav.classList.toggle('ativar');
}

btnMenu.addEventListener('click', ativarMenuResponsivo)
