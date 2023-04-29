import { localDoConteudo } from "./main.js";
import { adicionaItemNaLista } from "./adicionaItemNaLista.js";
const primeiroBotao = document.getElementById("botao__primeiro__item");

function criaFormularioAddItem() {

primeiroBotao.addEventListener("click", cardAddItem)
}
function cardAddItem() {
    localDoConteudo.innerHTML = 
    `
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
        </li>
      </ul>
    </form>
      `;
    const btnAdddItem = document.getElementById("botao__adiciona__item");

    btnAdddItem.addEventListener("click", (event) => {
      event.preventDefault()
      adicionaItemNaLista()
      
    });
  };

export {criaFormularioAddItem, cardAddItem}