import capturaOsDados from "./modules/capturaOsDados.js";
import { renovaLista } from "./modules/renovaLista.js";
export const pessoas = JSON.parse(localStorage.getItem('pessoas')) || [];
renovaLista()
capturaOsDados()

