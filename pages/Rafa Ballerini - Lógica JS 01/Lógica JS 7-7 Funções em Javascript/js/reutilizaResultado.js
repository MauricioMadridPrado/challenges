import { container } from "./main.js";
import { operacoes } from "./operacoes.js";
import { mensagemFechar } from "./mensagemFechar.js";
import { apresentaOResultado } from "./apresentaOResultado.js";
export function reutilizaOResultado(total) {
  container.innerHTML = `
    <section class="valores" id="valores">
    <h2 class="valores__titulo">Defina os valores</h2>
    <div class="valores__select">
      <div>
        <label for="primeiro__valor">Coloque o primeiro valor aqui</label>
        <input id="primeiro__valor" name="primeiro__valor" type="number" value="${total}" readonly />
      </div>

      <div>
      <section class="operacoes" id="operacoes">
      <h2 class="operacoes__titulo">Selecione a operação</h2>
      <select id="operacoes__select" class="operacoes__select">
        <option value="+">Soma</option>
        <option value="-">Subtração</option>
        <option value="/">Divisão</option>
        <option value="*">Multiplicação</option>
        <option value="sair">Sair</option>
      </select>
    </section>
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
  const selectOperacao = document.getElementById("operacoes__select");
  let operacaoSelecionada = selectOperacao.value;

  selectOperacao.addEventListener("change", (event) => {
    operacaoSelecionada = event.target.value;

    operacaoSelecionada == "sair"
      ? (botaoCalcula.innerHTML = "Sair")
      : (botaoCalcula.innerHTML = "Realizar calculo");
  });
  botaoCalcula.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(operacaoSelecionada);
    if (operacaoSelecionada == "sair") {
      mensagemFechar();
    } else {
      event.preventDefault();
      const total = operacoes(primeiroValor, segundoValor, operacaoSelecionada);
      apresentaOResultado(total);
    }
  });
}
