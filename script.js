const horas = document.querySelector('.horas');
const minutos = document.querySelector('.minutos');
const segundos = document.querySelector('.segundos');

const relogio = setInterval(function time() {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let s = date.getSeconds();

    if (hr < 10) {
        hr = '0' + hr;
    }
    
    if (min < 10) {
        min = '0' + min;
    }

    if (s < 10) {
        s = '0' + s;
    }

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
});