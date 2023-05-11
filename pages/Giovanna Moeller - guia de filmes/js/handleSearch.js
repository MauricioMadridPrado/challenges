import { requestApi } from "./request.js"


export function handleSearch(){
    const inputSearch = document.querySelector('[data-search="input"]')
    inputSearch.addEventListener('change', (event)=>{
       requestApi(event.target.value)
    })
}