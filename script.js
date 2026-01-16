
alert('Please enter fullscreen mode (F11)');


document.getElementById('playBtn').addEventListener('click', () => {
    window.open('https://kuklaks2512.github.io/click_it-game/');
});

document.getElementById('subscribeForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Дякуємо за підписку!');
    e.target.reset();
});