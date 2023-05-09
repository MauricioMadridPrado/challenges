import createListAddress from "./createListAddress.js";
export default function findAddress(cepSelecionado){
    const cep = fetch(`https://viacep.com.br/ws/${cepSelecionado}/json/`);
    cep.then(r =>r.json()).then( cep=>{
        createListAddress(cep)
    })
}