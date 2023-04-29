import { listaDeCompras } from "./adicionaItemNaLista.js";
import { querAdicionarMaisItens } from "./querAddMaisItens.js";

export function removeOItem() {
    const botaoRemover = document.getElementById("botao__remove__item");
    botaoRemover.addEventListener("click", (event) => {
      event.preventDefault();
      let itemSelecionado = document.getElementById("nomes").value;

      listaDeCompras.splice(
        listaDeCompras.findIndex(
          (elemento) => elemento.nomeDoItem === itemSelecionado
        ),
        1
      );
      querAdicionarMaisItens();
    });
  }