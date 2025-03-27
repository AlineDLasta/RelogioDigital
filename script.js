const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

function newTime(){
    // Cria um objeto Date que contém a data e hora atuais
    const date = new Date();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    /// Mostra no relógio (com formatação de 2 dígitos)
    hoursElement.textContent = fixTime(hours);
    minutesElement.textContent = fixTime(minutes);
    secondsElement.textContent = fixTime(seconds);
}


function fixTime(time){
    return time < 10 ? '0'+time : time
}
newTime()

// Atualiza o relógio a cada segundo
setInterval(newTime, 1000);
