import { pessoas } from "../main.js";
import { insereDadosNaTabela } from "./insereDadosNaTabela.js";
export function renovaLista() {
    const pessoaContainer = document.querySelector('[data-tabela="corpo"]');  
  pessoaContainer.innerHTML = 
  `
   
  `;
  ajustaLista();
  function ajustaLista() {
    pessoas.forEach((pessoa) => {
      insereDadosNaTabela(pessoa.nome, pessoa.dataDeNascimento);
    });

  }

}
