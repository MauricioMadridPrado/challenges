

const btn = document.getElementById('btn');
const result = document.getElementById('result')

btn.addEventListener('click', (event)=>{
    event.preventDefault()
    const value = document.getElementById('value').value;
    squareDigits(value)
})

function squareDigits(num){

    const numSplit = num.toString().split("");

    const numSquare = numSplit.map((n) =>{
     return n**2

    })
    const finalValue = numSquare.toString().replaceAll(',','')
    console.log(finalValue)
    result.innerHTML += finalValue
}
