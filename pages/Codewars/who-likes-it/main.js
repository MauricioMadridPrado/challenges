// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
const  array = document.querySelector('[data-array]')
const  result = document.querySelector('[data-result]')
const array1 = [];
const array2 = ["Peter"];
const array3 = ["Jacob", "Alex"];
const array4 = ["Max", "John", "Mark"];
const array5 = ["Alex", "Jacob", "Mark", "Max"];
array.innerHTML =
`
<button class="botao">${array1}</buttom>
<button class="botao">${array2}</button>
<button class="botao">${array3}</button>
<button class="botao">${array4}</button>
<button class="botao">${array5}</button>
`
const btns = document.querySelectorAll(".botao")
btns.forEach(btn=>{
    btn.addEventListener('click', (event)=>{
        console.log(event.target.innerText)
        likes(event.target.innerText)
    })
})


function likes(names) {
  const quant = Array.from(names.toString().split(",")).length;
  console.log()
  let teste;
  if (names.toString() == '') {
    result.innerHTML = `<h2>no one likes this</h2>`;
  } else {

    quant == 1 && (result.innerHTML = `<h2>${names} likes this</h2>`);
    quant == 2 && ( result.innerHTML =  `<h2>${names} and ${names} likes this</h2>`);
    quant == 3 &&
      (result.innerHTML =  `<h2>${names} ,${names} and ${names} likes this</h2>`);
    quant >= 4 &&
      (result.innerHTML =  `<h2>${names} ,${names} and and ${
        quant - 2
      } others likes this</h2>`);
  }
  return teste;
}

// function likes(names) {
//     names = names || [];
//     switch(names.length){
//       case 0: return 'no one likes this'; break;
//       case 1: return names[0] + ' likes this'; break;
//       case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
//       case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
//       default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
//     }
//   }
