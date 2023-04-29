import { listaDeCompras } from "./adicionaItemNaLista.js";
import { colocaOsNomesNaLista } from "./criaListaDeNomes.js";
import { removeOItem } from "./removeOItem.js";
import { verListaDeItens } from "./verListadeItens.js";

export function criaORemoveItens(local) {
  const nomesDaLista = [];
  listaDeCompras.forEach((item) => {
    nomesDaLista.push(item.nomeDoItem);
  });
  local.innerHTML += `
        <li class="remove__item">
        <label for="nomes">Deseja remover algum item da lista?</label>

        <select class="menu__suspenso" name="nomes" id="nomes">

        </select>

        <div class="deleta__item" id ="deleta__item">
        <button id="botao__remove__item" class="botao__remove_item">
    
            Remover item

        </button>

        </div>
        <button id="botao__ver__lista" class="botao__ver__lista">
    
        Ver lista de compras

      </button>

    `;

  colocaOsNomesNaLista(nomesDaLista);
  removeOItem();
  verListaDeItens();
  

  
}
