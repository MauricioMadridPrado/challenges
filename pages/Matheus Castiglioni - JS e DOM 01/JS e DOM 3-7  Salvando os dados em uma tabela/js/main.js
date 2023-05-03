import capturaOsDados from "./modules/capturaOsDados.js";
import { insereDadosNaTabela } from "./modules/insereDadosNaTabela.js";
export const pessoas = JSON.parse(localStorage.getItem('pessoas')) || []

capturaOsDados()
insereDadosNaTabela()