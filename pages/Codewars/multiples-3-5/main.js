const input__number = document.querySelector('[data-number="input"]')
const button__number = document.querySelector('[data-number="button"]')
const result = document.querySelector('[data-result]')
button__number.addEventListener('click', (event)=>{

    console.log(calculaMultiplos(input__number.value))
})
function calculaMultiplos(number) {
  let cont = 1;
  const mult1 = 3;
  const mult2 = 5;

  let total = 0;
  for (cont = 1; cont < number; cont++) {
    if (number > 0) {
      Number.isInteger(cont / mult1) || Number.isInteger(cont / mult2)
        ? (total += cont)
        : "";
    } else { 
        return 0
    }
  }
  result.innerHTML = `O resultado é ${total}`
  return (total);
}

