
function bounceBall(h, bounce, window) {
  let i = -1;
  if (h > 0 && bounce < 1 && bounce > 0 && window < h) {
    while (h > window) {
      h *= bounce;
      i += 2;
    }
  } else{
    console.log('erro nos valores')
  }
  console.log(i)
  return i;
}
const botao = document.querySelector('[data-valor="botao"]');
botao.addEventListener("click", (event) => {
  event.preventDefault();
  const inicial = document.querySelector('[data-valor="inicial"]').value;
  const quique = document.querySelector('[data-valor="quique"]').value;
  const mae = document.querySelector('[data-valor="mae"]').value;
  bounceBall(+inicial, +quique, +mae);
});
