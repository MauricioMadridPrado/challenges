import { listaDeCompras } from "./adicionaItemNaLista.js";
import { localDoConteudo } from "./main.js";
import { criaCards } from "./criaCard.js";
export const categorias = [];
const localDaListaDeCompras = document.getElementById("lista__de__compras");
export function mostraListaDeCompras() {
  localDaListaDeCompras.innerHTML = ` `;
  selecionaCategorias();
}

function selecionaCategorias() {
  localDoConteudo.innerHTML = ` 
    <h1>Lista de compras</h1>
    `;
  listaDeCompras.forEach((item) => {
    const existe = categorias.find(
      (elemento) => elemento == item.categoriaDoItem
    );
    if (!existe) {
      categorias.push(item.categoriaDoItem);
    }
  });
  criaCards();
}
