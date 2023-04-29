import capturaOsDados from "./modules/capturaOsDados.js";
export const pessoas = JSON.parse(localStorage.getItem('pessoas')) || []

capturaOsDados()
