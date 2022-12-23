const btn = document.getElementById('btn'),
    menu = document.getElementById('menu');

btn?.addEventListener('click', () => {
    menu.classList.toggle('open')
});