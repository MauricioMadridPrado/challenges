import findAddress from "./findAddress.js"
export default function handleClick(){
    const button = document.querySelector('[data-address="button"]')
    const input = document.querySelector('[data-address="input"]')
    button.addEventListener('click', (event)=>{
        event.preventDefault()
        findAddress(input.value)
    })
}