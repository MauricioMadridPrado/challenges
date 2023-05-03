import { pessoas } from "../main.js";

export function insereDadosNaTabela(){
    const pessoaContainer = document.querySelector('[data-tabela="corpo"]')
    pessoas.forEach(pessoa =>{
        
        pessoaContainer.innerHTML +=
        `
        <tr class="tabela__corpo">
          <td>${pessoa.nome}</td>
          <td>${pessoa.dataDeNascimento}</td>
        </tr>
        
        
        `
    })
}