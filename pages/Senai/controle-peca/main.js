let totalPeca = 100;

const total = document.querySelector("[data-total]");

imprimeTotal(totalPeca);

function imprimeTotal(totalPeca) {
  total.innerHTML = `
        Temos ${totalPeca} em estoque
    `;
}
const sair = document.querySelector("[data-sair]");
sair.addEventListener("click", fechaTudo);
function fechaTudo() {
  document.body.innerHTML = `
            <h1> Sistema encerrado! </h1>
        `;
}
const botao = document.querySelector("[data-botao]");
botao.addEventListener("click", (event) => {
  event.preventDefault();
  const input = document.querySelector("[data-input]").value;
  const select = document.querySelector("[data-select]").value;
  totalPeca >= input
    ? verificaPeca(input, select)
    : alert("Não temos tantas peças desse modelo em estoque!");
});

function verificaPeca(input, select) {

  select == "entrada" && somaValor();
  select == "saida" && subtraiValor();

  function somaValor() {
    totalPeca += +input;
    imprimeTotal(totalPeca);
  }
  function subtraiValor() {
    totalPeca -= +input;
    imprimeTotal(totalPeca);
  }
}
