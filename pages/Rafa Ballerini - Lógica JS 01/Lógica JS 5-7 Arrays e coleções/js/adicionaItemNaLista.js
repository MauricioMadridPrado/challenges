import { querAdicionarMaisItens } from "./querAddMaisItens.js";
export const listaDeCompras = [];
export function adicionaItemNaLista(){

      const nomeDoItem = document.getElementById('nomte__item');
      const categoriaDoItem = document.getElementById('categorias').value;
      const item = {
        'nomeDoItem' : nomeDoItem.value,
        'categoriaDoItem': categoriaDoItem
      }
      listaDeCompras.push(item)
      nomeDoItem.value = ' ';

      querAdicionarMaisItens()
}