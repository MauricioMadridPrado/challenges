import { localDoConteudo } from "./main.js";
import { cardAddItem } from "./criaFormularioAddItem.js";
import { mostraListaDeCompras } from "./mostraListaDeCompras.js";
export function querAdicionarMaisItens() {

  localDoConteudo.innerHTML = 
        `

          <h2 class="titulo__aviso__adicionado">Item Adicionado!</h2>
          <ul class="aviso__adicionado">
            <li class="aviso__adicionado__itens">
              <label class="gostaria__add__itens" for="gostaria__add__itens"> Gostaria de adicionar mais itens?</label>
            </li>
            <div class="container__selecao">
              <li class="aviso__adicionado__itens" ">
                <button name="sim__item" value="sim" class="botao__selecao">
                  Sim!
                </button>
              </li>
              <li class="aviso__adicionado__itens">
                <button name="nao__item" value="nao" class="botao__selecao">
                  Não
                </button>
              </li>
            </div>
          </ul>
        `
        ;
        const botoesSelecao = document.querySelectorAll('.botao__selecao')
        botoesSelecao.forEach(botao =>{
          botao.addEventListener('click', ()=>{
            if(botao.value == 'sim'){
              cardAddItem()
              
            } else{
              mostraListaDeCompras()
            }
          })
        })
}
