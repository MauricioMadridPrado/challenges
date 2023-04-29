import { pessoas } from "../main.js";

export default function capturaOsDados() {
  const formulario = document.querySelector('[data-form="formulario"]');

  console.log(pessoas);
  formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const nome = document.getElementById("name");
    const dataDeNascimento = document.getElementById("birth-date");
    const pessoa = {
      nome: nome.value,
      dataDeNascimento: dataDeNascimento.value,
    };


    pessoas.push(pessoa);
    nome.value = "";
    dataDeNascimento.value = "";
    console.log(pessoas);
  });
}



