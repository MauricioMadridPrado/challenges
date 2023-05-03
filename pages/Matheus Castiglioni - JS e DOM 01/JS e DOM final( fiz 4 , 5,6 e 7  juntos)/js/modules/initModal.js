
import { pessoas } from "../main.js";
import { insereDadosNaTabela } from "./insereDadosNaTabela.js";
import { renovaLista } from "./renovaLista.js";

export function initModal(itens) {
  const modal = document.querySelector('[data-modal="container"]');
  modal.classList.add("ativa__modal");

  const form = document.querySelector('[data-modal="formulario"]');
  const novoNome = document.getElementById("name-Edit");
  const novaData = document.getElementById("birth-date-edit");

  pessoas.forEach((pessoa) => {
    itens.forEach((item) => {
      if (pessoa.nome == item.innerText) {
        const index = pessoas.indexOf(pessoa);

        pessoas.splice(index, 1);
        renovaLista()
      }
    });
  });

  itens.forEach((item) => {
    if (item.dataset.tabela == "nome") {
      novoNome.value = item.innerText;
    }
    if (item.dataset.tabela == "data") {
      novaData.value = item.innerText;
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    localStorage.setItem("pessoas", JSON.stringify(pessoas));
    insereDadosNaTabela(pessoas);
    const pessoaEditada = {
      nome: novoNome.value,
      dataDeNascimento: novaData.value,
    };
    pessoas.push(pessoaEditada)
    localStorage.setItem("pessoas", JSON.stringify(pessoas));
    location.reload()
    modal.classList.remove("ativa__modal");
  });

}
