export function hideShowNextContent(listContent) {
  const item = localStorage.getItem("alvo") || "";
  if (item) {
    listContent.forEach((element) => {
      const atualiza = element.nextElementSibling.dataset.desafios;
      const line = element.nextElementSibling;
      const container = line.parentNode;
      if (atualiza == item) {
        listContent.forEach((content) => {
          line.classList.add("mostra");
          container.classList.add("mostra");
        });
      }
    });
  }
  listContent.forEach((content) => {
    content.addEventListener("click", (event) => {
      const targetcontent = event.target.nextElementSibling;
      const salvo = targetcontent.dataset.desafios;
      if (salvo != undefined) {
        localStorage.setItem("alvo", salvo);
      }
      toggleContent(targetcontent);
    });
  });
  function toggleContent(content) {
    content.classList.toggle("mostra");
  }
}
