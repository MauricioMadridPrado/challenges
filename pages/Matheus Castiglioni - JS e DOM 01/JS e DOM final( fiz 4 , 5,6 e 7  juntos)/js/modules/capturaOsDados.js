import { pessoas } from "../main.js";
import { insereDadosNaTabela } from "./insereDadosNaTabela.js";
import { renovaLista } from "./renovaLista.js";

export default function capturaOsDados() {

  const formulario = document.querySelector('[data-form="formulario"]');

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

    localStorage.setItem('pessoas', JSON.stringify(pessoas))
    renovaLista(pessoas)

  });

}



