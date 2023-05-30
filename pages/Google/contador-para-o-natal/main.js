import Countdown from "./countdown.js";

const tempoParaONatal = new Countdown('25 December 2023 00:00:00');

setInterval(()=>{
document.body.innerHTML = 

`
<h1> Quanto tempo falta para o Natal? </h1>
<h2>${tempoParaONatal.total.days} dias, ${tempoParaONatal.total.hours} horas, ${tempoParaONatal.total.minutes} minutos, ${tempoParaONatal.total.seconds} segundos</h2>

`
},1000)


