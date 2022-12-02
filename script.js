const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.95
    item.forEach(element => {
        if(windowTop > element.offsetTop){ 
            element.classList.add('ativo')
        } else { 
            element.classList.remove('ativo')
        }
    })
} 

animeScroll()

window.addEventListener('scroll', () => {
    animeScroll();
}) 




const numeros = document.querySelectorAll('[data-numero]');

   

numeros.forEach((numero) => {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100)

    let start = 4;
    const timer = setInterval(() => {
        start = start + incremento;
        numero.innerText = start;
        if(start > total){
            numero.innerText = total;
            clearInterval(timer);
        }
    }, 200 * Math.random())
})  

