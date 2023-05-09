const input = document.querySelector("[data-text]");
const result = document.querySelector("[data-result]");
input.addEventListener("change", (event) => {
  isPangram(event.target.value);
});
function isPangram(string) {
  console.log(string);
  const normalizeString = string
    .normalize()
    .toLowerCase()
    .replace(/[0-9]/g, "")
    .replace(/,/g, "")
    .replace(/\'/g, "")
    .replace(/\./g, "")
    .replaceAll(" ", "")
    .split("");

  let allChars = [];
  for (let i = 97; i < 123; i++) allChars.push(String.fromCharCode(i));

  const allLetters = [...new Set(normalizeString)];
  const isPangram = allLetters.length == allChars.length;
  isPangram
    ? (result.innerHTML = `<span>${string} <br> É um panagrama!</span>`)
    : (result.innerHTML = `<span>${string} <br> Não é um panagrama!</span>`);
}
