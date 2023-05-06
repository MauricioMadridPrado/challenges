const result = document.querySelector('[data-result]')
const word = document.querySelector('[data-string="input"]')
const btn = document.querySelector('[data-string="button"]')
btn.addEventListener('click', (event)=>{
    event.preventDefault()
    isIsogram(word.value)? result.innerHTML = `It is an isogram!`: result.innerHTML = `It is not an isogram!` 
})

function isIsogram(str) {

  const checkLetter = [];
  const repeatLetter = [];
  const letters = str.toLowerCase().split("");
  letters.forEach((letter) => {
    const index = letters.indexOf(letter);
    !checkLetter.includes(index)
      ? checkLetter.push(index)
      : repeatLetter.push(index);
  });
  if (repeatLetter.length > 0)
  return false;
  return true;
}
