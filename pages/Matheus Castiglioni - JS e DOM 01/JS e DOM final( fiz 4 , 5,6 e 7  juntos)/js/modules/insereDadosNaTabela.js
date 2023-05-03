import { initEdit } from "./initEdit.js";
import { initDeleteLine } from "./initDeleteLine.js";

export function insereDadosNaTabela(nome, data) {
  const pessoaContainer = document.querySelector('[data-tabela="corpo"]');

  pessoaContainer.innerHTML += `
        <tr class="tabela__corpo">
          <td data-tabela="nome">${nome}</td>
          <td data-tabela="data">${data}</td>
          <td class="tabela__botao"><span class="edit" data-tabela="edit">&#9998;</span></td>
          <td class="tabela__botao"><span class="delete" data-tabela="delete">	
          &#128465;</span></td>
        </tr>
    `;

  const btn__editar = document.querySelectorAll('[data-tabela="edit"]');

  btn__editar.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      initEdit(event);
    });
  });
  const btn__delete = document.querySelectorAll('[data-tabela="delete"]');

  btn__delete.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      initDeleteLine(event);
    });
  });
}
