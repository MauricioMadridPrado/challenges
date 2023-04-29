function jogoNumeroAleatorio() {
  const numeroAleatorio = Math.round(Math.random() * 10);
  let contaTentativas = 1;
  const formulario = document.getElementById('formulario')
  const localDaApresentacaoDoResultado =
    document.getElementById("local__resultado");
  const input = document.getElementById("input");
  input.addEventListener("change", (event) => {
    event.preventDefault()
    fazAVerificacao()
});

  function fazAVerificacao() {
    let numeroSelecionado = input.value;
    let numeroFaltaDeTentativas = +3 - contaTentativas;

    if (contaTentativas < 3) {
      if (numeroAleatorio == numeroSelecionado) {
        localDaApresentacaoDoResultado.innerHTML =
        `
            <h1>Acertou!! Parabens!</h1>
        `
        formulario.innerHTML = 
        `   
            <button>
                Jogar novamente
            </button>
        `

      } else {
        localDaApresentacaoDoResultado.innerHTML =
        `
            <h2>Numero Errado, favor tentar novamente</h2>
            <h3>Numero de tentativas: ${numeroFaltaDeTentativas}</h3>
        `
                  contaTentativas++;
      }
    } else {

        formulario.innerHTML = 
        `
            <h1> Sem tentativas disponíveis!!  </h1>
            <h3> O numero era ${numeroAleatorio}</h3>
            <button>
            Jogar novamente
            </button>
        `
        localDaApresentacaoDoResultado.innerHTML =``
    }
  }
}
jogoNumeroAleatorio();
