const btn = document.getElementById('btn'),
    menu = document.getElementById('menu'),
    main = document.getElementsByTagName('main')[0],
    buttons = document.querySelectorAll('.butt'),
    cards = document.querySelectorAll('.card');


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