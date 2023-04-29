import { container } from "./main.js";
import { operacoes } from "./operacoes.js";
import { apresentaOResultado } from "./apresentaOResultado.js";

export function fazAConta(sinal) {
  container.innerHTML = `
    <section class="valores" id="valores">
    <h2 class="valores__titulo">Defina os valores</h2>
    <div class="valores__select">
      <div>
        <label for="primeiro__valor">Coloque o primeiro valor aqui</label>
        <input id="primeiro__valor" name="primeiro__valor" type="number" />
      </div>
      <div>
        <h3 class="operacao__simbolo" id="operacao__simbolo">${sinal}</h3>
      </div>
      <div>
        <label for="segundo__valor">Coloque o segundo valor aqui</label>
        <input id="segundo__valor" name="segundo__valor" type="number" />
      </div>
    </div>
    <button class="calculo__botao" id="calculo__botao">
      Realizar calculo
    </button>
  </section>
    `;
  const primeiroValor = document.getElementById("primeiro__valor");
  const segundoValor = document.getElementById("segundo__valor");
  const botaoCalcula = document.getElementById("calculo__botao");

    botaoCalcula.addEventListener("click", (event) => {

      event.preventDefault();
      const total =  operacoes(primeiroValor, segundoValor, sinal)
      
      apresentaOResultado(total)
      });

}
