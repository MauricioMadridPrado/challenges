import { pessoas } from "../main.js";
import { renovaLista } from "./renovaLista.js";

export function initDeleteLine(event) {
  const linhaQueVaiDeletar = event.target.parentNode.parentNode;
  const linhaAlvo = Array.from(linhaQueVaiDeletar.getElementsByTagName("td"));

  pessoas.forEach((pessoa) => {
    linhaAlvo.forEach((item) => {
      if (pessoa.nome == item.innerText) {
        const index = pessoas.indexOf(pessoa);
        pessoas.splice(index, 1);
      }
    });

    localStorage.setItem("pessoas", JSON.stringify(pessoas));
    renovaLista()
  });
}
