import { querAdicionarMaisItens } from "./querAddMaisItens.js";
export const listaDeCompras = [];
let i = 0;
export function adicionaItemNaLista(){

      const nomeDoItem = document.getElementById('nomte__item');
      const categoriaDoItem = document.getElementById('categorias').value;

      const item = {
        'nomeDoItem' : nomeDoItem.value,
        'categoriaDoItem': categoriaDoItem,
        'id': i
      }
      listaDeCompras.push(item)
      i++
      nomeDoItem.value = ' ';

      querAdicionarMaisItens()
}