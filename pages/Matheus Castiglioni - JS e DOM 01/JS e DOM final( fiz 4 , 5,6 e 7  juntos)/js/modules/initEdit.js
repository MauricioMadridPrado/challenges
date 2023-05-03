import { initModal } from "./initModal.js";

export function initEdit(event) {
  const editItens = event.target.parentNode.parentNode;
  const itens = Array.from(editItens.getElementsByTagName("td"));
  initModal(itens);
}
