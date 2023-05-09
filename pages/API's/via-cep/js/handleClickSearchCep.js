import findCep from "./findCep.js";
export default function handleClickSearchCep() {
    const btn = document.querySelector('[data-cep="button"]');
    btn.addEventListener("click", (event) => {
      event.preventDefault()
      const estado = document.getElementById('estado');
      const cidade = document.getElementById('cidade');
      const rua = document.getElementById('rua');
  
      const endereco = {
        'estado':estado.value,
         'cidade':cidade.value, 
        'rua':rua.value
        }
        findCep(endereco);
    });
  }
  