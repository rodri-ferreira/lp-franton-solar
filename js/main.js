const btnMenu = document.querySelector('.header-buttonMenu');
const imgsModal = document.querySelectorAll('.img-modal');
const btnModalFechar = document.querySelector('.btnDialog')
const imgArray = [
    "img/banner-mobile-1.webp",
    "img/banner-mobile-2.webp",
    "img/banner-mobile-3.webp",
    "img/banner-mobile-4.webp",
    "img/banner-mobile-5.webp"
]
const faqClick = document.querySelectorAll('.faq-h3')

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

const exibirModal = (e) => {
    let att = e.target.getAttribute('data-img')
    const dialog = document.querySelector('.projetos-dialog')
    const imgDialog = document.querySelector('.exibir-dialog')
    imgDialog.src = imgArray[att]
    dialog.style.display = 'flex'

}

const exibirFaq = (e) => {
    const numeroAtributo = e.target.getAttribute('data-faq')
    console.log(numeroAtributo)
    const faqP = document.querySelectorAll('.faq-p');
    
    faqP[numeroAtributo].classList.toggle('ativar-faq-p')
}

const fecharDialog = () => {
    document.querySelector('.projetos-dialog').style.display = 'none'
}

btnMenu.addEventListener('click', ativarMenuResponsivo);
window.addEventListener('scroll', mudarCorHeader)
window.addEventListener('resize', verificarLarguraTela);
imgsModal.forEach((elemento) => {
    elemento.addEventListener('click', exibirModal)
})
btnModalFechar.addEventListener('click', fecharDialog)
faqClick.forEach((elemento) => {
    elemento.addEventListener('click', exibirFaq)
} )


