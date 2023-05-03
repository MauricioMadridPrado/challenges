import { pessoas } from "../main.js";
import { insereDadosNaTabela } from "./insereDadosNaTabela.js";

export function colocaOsDadosNovos(novosDados){
    const pessoaEditada = {
      'nome': novosDados.novoNome,
      'dataDeNascimento':novosDados.novaData
    }

    pessoas.push(pessoaEditada)
    localStorage.setItem('pessoas', JSON.stringify(pessoas))
    insereDadosNaTabela(pessoas)

}