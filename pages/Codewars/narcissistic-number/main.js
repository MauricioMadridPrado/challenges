const resultPlace = document.getElementById("result");
const btn = document.getElementById("checkNumber");
btn.addEventListener("click", isNarcissistic);

function isNarcissistic(value) {
    value.preventDefault()
  const getNumber = document.getElementById("number").value;
  const splitNumber = getNumber.toString().split("");
  const numberSquared = getNumber
    .toString()
    .split("")
    .map((num) => {
      const power = splitNumber.length;
      return num ** power;
    });
  console.log(getNumber);
  console.log(numberSquared);
  if (getNumber == numberSquared.reduce((a, b) => a + b, 0)) {
    resultPlace.classList.remove('vermelho')
    resultPlace.classList.add('verde')
    resultPlace.innerHTML = `<p>É narcisista!</p>`;
  } else {
    resultPlace.classList.remove('verde')
    resultPlace.classList.add('vermelho')
    resultPlace.innerHTML = `<p>Não é narcisista</p>`;
  }
}
style = "background-color: blue;";
