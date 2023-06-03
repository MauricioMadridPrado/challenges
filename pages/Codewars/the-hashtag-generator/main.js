const button = document.querySelector('[data-botao]')
const result = document.querySelector('[data-result]')
button.addEventListener('click', (event)=>{
  event.preventDefault()
  const str = document.querySelector('[data-palavra]')
  generateHashtag(str.value)
})

function generateHashtag(str) {
  if (str.length > 1 &&  str.length < 140) {
    const array = str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join()
      .replaceAll(",", "");
      result.innerHTML = `<h2>#${array}</h2>`
  } else {
    return false
  }
}
