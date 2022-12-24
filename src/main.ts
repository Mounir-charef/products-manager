const btn = document.getElementById('btn'),
    menu = document.getElementById('menu'),
    main = document.getElementsByTagName('main')[0],
    buttons = document.querySelectorAll('.butt'),
    cards = document.querySelectorAll('.card'),
    hiddenElems = document.querySelectorAll('.hiddenL');


btn?.addEventListener('click', () => {
    menu.classList.toggle('open')
});

main?.addEventListener('click', () => {
    menu.classList.remove('open');
})

// @ts-ignore
const removeActive = e => {
    buttons.forEach(button => button.setAttribute('data-active', 'false'))
    cards.forEach(card => {
        if( card.getAttribute('data-index') === e.target.getAttribute('data-index')){
            card.setAttribute('data-active', 'true')
        }
        else{
            card.setAttribute('data-active', 'false')
        }
    })
}

buttons.forEach(button => button.addEventListener('click', e => {
    removeActive(e);
    // @ts-ignore
    e.target.setAttribute('data-active', 'true')
}))

const oberv = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    })

})

hiddenElems.forEach((elem) => oberv.observe(elem));