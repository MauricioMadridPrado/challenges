import { categorias  } from "./mostraListaDeCompras.js";
import { localDoConteudo } from "./main.js";
import { listaDeCompras } from "./adicionaItemNaLista.js";
export function criaCards() {

    categorias.forEach((categoria) => {
      localDoConteudo.innerHTML += 
      ` 
          <ul class="lista__itens">
              <h3 class="lista__itens__titulo">${categoria}</h3>
              <div id=${categoria}>
  
              <div>
          </ul>
          `;
      const categoriaId = document.getElementById(categoria);
      listaDeCompras.forEach((item) => {
        if (item.categoriaDoItem === categoria) {
          categoriaId.innerHTML +=
           `
                <li class="lista__item"> -> ${item.nomeDoItem}</li>
          `;
        } 
      });
    });
  }
  