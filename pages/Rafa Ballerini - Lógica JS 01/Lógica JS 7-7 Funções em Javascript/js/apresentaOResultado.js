import { container } from "./main.js";
import { selecaoOperacao } from "./selecaoOperacao.js";
import { mensagemFechar } from "./mensagemFechar.js";
import { reutilizaOResultado } from "./reutilizaResultado.js";
export function apresentaOResultado(total) {
    container.innerHTML = 
    `
      <section class="valores" id="valores">
      <h2 class="valores__titulo">Resultado:<span id="resultado">${total}</span></h2>
      <div>
      <button class="botao__rutiliza" id="botao__rutiliza">Utilizar o resultado em<br> um novo calculo</button>
      </div>
      <div>
      <button class="botao__reseta" id="botao__reseta">Novo calculo</button>
      </div>
      <div>
      <button class="botao__fechar" id="botao__fechar">Sair</button>
      </div>

      </section>
    `
    ;
    const reutiliza = document.getElementById('botao__rutiliza')
    reutiliza.addEventListener('click', (event)=>{
      event.preventDefault()
      reutilizaOResultado(total)
    })
    const reseta = document.getElementById('botao__reseta')
    reseta.addEventListener('click',(event)=>{
      event.preventDefault()
      selecaoOperacao()
    })
    const fechar = document.getElementById('botao__fechar')
    fechar.addEventListener('click',(event)=>{
      event.preventDefault()
      mensagemFechar()  
    })
}
