const arrays = [
    {
        id: '1',
        array:[1, 0, 0]
    },
    {
        id: '2',
        array:[0, 1, 0]
    },
    {
        id: '3',
        array:[0, 0, 1]
    },
    {
        id: '4',
        array:[1, 1, 1, 2, 1]
    },
    {
        id: '5',
        array:[1, 1, 2, 1, 1]
    },
    {
        id: '6',
        array:[1, 2, 1, 1, 1]
    },
    {
        id: '7',
        array:[3, 10, 3, 3, 3]
    },
]
const container = document.querySelector('[data-container]')
arrays.forEach(array =>{
    container.innerHTML += 
    `
    <button data-button>
        ${array.id}
    </button>
    `
})
const btns = document.querySelectorAll('[data-button]');
btns.forEach(btn=>{
    btn.addEventListener('click', (event) =>{
        showNumber(event.target.innerText)
    })
})

function showNumber(id){
    arrays.forEach(array =>{
        if(array.id == id){
            findUniq(array.array)
        }
    })
}
function findUniq(arr) {
  let comunValue;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1] ||arr[i] == arr[i + 2] ) {
      comunValue = arr[i];
      i = arr.length;
      const result = document.querySelector('[data-result]')
      result.innerHTML = 
      `
      <h2>${arr} </h2>
      <h1>${arr.find((number) => number != comunValue)} </h1>
      `

    } 
  }
}
