import { listaDeCompras } from "./adicionaItemNaLista.js";
import { localDoConteudo } from "./main.js";
import { criaCards } from "./criaCard.js";
import { cardAddItem } from "./criaFormularioAddItem.js";
export const categorias = [];
const localDaListaDeCompras = document.getElementById("lista__de__compras");
export function mostraListaDeCompras() {
  localDaListaDeCompras.innerHTML = ` `;
  selecionaCategorias();
}

function selecionaCategorias() {
  localDoConteudo.innerHTML = 
    ` 
      <div class="esqueci__container">
        <label for="esqueci">Esqueceu algo e quer adicionar?</label>
        <button name="esqueci" value="esqueci" class="esqueci" id="esqueci">
          Sim!
        </button>
        <h1>Lista de compras</h1>
      <div>
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
  const botaoEsqueci = document.getElementById('esqueci')
  botaoEsqueci.addEventListener('click', (event) =>{
    event.preventDefault()
    cardAddItem()
  })
}
