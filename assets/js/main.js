const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');


let s = 0;
let m = 0;
let h = 0;

let timer = `${doisNumeros(h)}:${doisNumeros(m)}:${doisNumeros(s)}`;

iniciar.addEventListener('click', function (event) {
    relogio.className = 'relogio';
    timer = setInterval(function() {
        s++;
        if (s > 59) {
            s = 0;
            m += 1;
            
            if (m > 59) {
                m = 0;
                h += 1;
            } 
        }
        relogio.innerHTML = `${doisNumeros(h)}:${doisNumeros(m)}:${doisNumeros(s)}`;
    }, 1000)
});

pausar.addEventListener('click', function (event) {
    relogio.className = 'relogio2';
    clearInterval(timer);
});

zerar.addEventListener('click', function (event) {
    relogio.className = 'relogio';
    clearInterval(timer);
    s = 0;
    m = 0;
    h = 0;
    relogio.innerHTML = `${doisNumeros(h)}:${doisNumeros(m)}:${doisNumeros(s)}`
});

function doisNumeros (n) {
    if (n < 10) {n = "0" + n}
    return n;
}