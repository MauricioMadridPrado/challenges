import { mostraListaDeCompras } from "./mostraListaDeCompras.js";
export function verListaDeItens() {
    const botaoVerLista = document.getElementById("botao__ver__lista");
    botaoVerLista.addEventListener("click", (event) => {
      event.preventDefault();
      mostraListaDeCompras();
    });
  }