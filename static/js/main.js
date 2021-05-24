const burgerSlider = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav')

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active')
    })
}

window.addEventListener('scroll', ()=>{
    var nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 0);
})

burgerSlider()