import { selecaoOperacao } from "./selecaoOperacao.js";
export const container = document.getElementById('calculadora')

const vamosCalcular = document.getElementById('vamosCalcular')
vamosCalcular.addEventListener('click', (event)=>{
    event.preventDefault()
    selecaoOperacao()
})


