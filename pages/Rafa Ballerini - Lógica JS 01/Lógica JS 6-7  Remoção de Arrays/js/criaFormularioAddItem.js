import { localDoConteudo } from "./main.js";
import { adicionaItemNaLista, listaDeCompras } from "./adicionaItemNaLista.js";
import { criaORemoveItens } from "./criaORemoveItens.js";
const primeiroBotao = document.getElementById("botao__primeiro__item");

function criaFormularioAddItem() {
  primeiroBotao.addEventListener("click", cardAddItem);
}
function cardAddItem() {
  localDoConteudo.innerHTML = `
      <form class="formulario">
      <ul class="adiciona__container">
        <li class="adiciona__item">
          <label for="itens">Qual nome do item?</label>
          <input 
              id = "nomte__item"
              type="text" 
              name="itens" 
              min="3">
        </li>
        <li class="adiciona__item">
          <label for="categorias">Qual a categoria desse item?</label>
          <select class="menu__suspenso" name="categorias" id="categorias">
              <option value="Frutas">Frutas</option>
              <option value="Laticíneos">Laticíneos</option>
              <option value="Frios">Frios</option>
              <option value="Carnes">Carnes</option>
              <option value="Padaria">Padaria</option>
          </select>
        </li>
        <li class="adiciona__item">
          <button id="botao__adiciona__item" class="botao__adiciona_item">
  
              Add item
  
          </button>

          <div class="deleta__item" id ="deleta__item">

          </div>
        </li>
      </ul>
    </form>
      `;
  const localDeletaItem = document.getElementById("deleta__item");

  if (listaDeCompras.length > 0) {
    criaORemoveItens(localDeletaItem);
  }
  const btnAdddItem = document.getElementById("botao__adiciona__item");

  btnAdddItem.addEventListener("click", (event) => {
    event.preventDefault();
    adicionaItemNaLista();
  });
}

export { criaFormularioAddItem, cardAddItem };
