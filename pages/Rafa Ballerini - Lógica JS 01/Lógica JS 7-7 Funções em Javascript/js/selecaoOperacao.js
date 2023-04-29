import { container } from "./main.js";
import { fazAConta } from "./fazAConta.js";
import { mensagemFechar } from "./mensagemFechar.js";
import { alteraBotao } from "./alteraBotao.js";
export function selecaoOperacao() {
  container.innerHTML = `
    <section class="operacoes" id="operacoes">
        <h2 class="operacoes__titulo">Selecione a operação</h2>
        <select id="operacoes__select" class="operacoes__select">
          <option value="+">Soma</option>
          <option value="-">Subtração</option>
          <option value="/">Divisão</option>
          <option value="*">Multiplicação</option>
          <option value="sair">Sair</option>
        </select>
        <button class="operacoes__botao" id="operacoes__botao">
          Definir valores
        </button>
      </section>
    `;

  let selectOperacao = document.getElementById("operacoes__select");
  const botaoSelecionaOperacao = document.getElementById("operacoes__botao");

  alteraBotao(selectOperacao, botaoSelecionaOperacao);

  botaoSelecionaOperacao.addEventListener("click", (event) => {
    let operacaoSelecionada = selectOperacao.value;
    event.preventDefault();
    operacaoSelecionada == "sair"
      ? mensagemFechar()
      : fazAConta(operacaoSelecionada);
  });
}
