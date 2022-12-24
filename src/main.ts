const btn = document.getElementById('btn'),
    menu = document.getElementById('menu'),
    main = document.getElementsByTagName('main')[0],
    buttons = document.querySelectorAll('.butt'),
    cards = document.querySelectorAll('.card'),
    hiddenElems = document.querySelectorAll('.hiddenL');
let i = 0;

btn?.addEventListener('click', () => {
    menu.classList.toggle('open')
});

main?.addEventListener('click', () => {
    menu.classList.remove('open');
})

// @ts-ignore
const removeActive = element => {
    buttons.forEach(button => button.setAttribute('data-active', 'false'))
    cards.forEach(card => {
        if( card.getAttribute('data-index') === element.getAttribute('data-index')){
            card.setAttribute('data-active', 'true')
        }
        else{
            card.setAttribute('data-active', 'false')
        }
    })
}

buttons.forEach(button => button.addEventListener('click', e => {
    removeActive(e.target);
    // @ts-ignore
    i = parseInt(e.target.getAttribute('data-index')) - 1;
    // @ts-ignore
    e.target.setAttribute('data-active', 'true');
    resetTimeout()
}))

let timer;

const resetTimeout = () => {
    window.clearTimeout(timer);
    timer = setInterval(() => {
        i = (i + 1) % buttons.length;
        removeActive(buttons[i])
        buttons[i].setAttribute('data-active', 'true');
    }, 2500)
}

resetTimeout()

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