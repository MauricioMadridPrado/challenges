export default function createListAddress(cep){
    const addressContainer = document.querySelector('[data-address=container]')
    addressContainer.innerHTML =
    `
     <li>logradouro: ${cep.logradouro}</li>
     <li>complemento: ${cep.complemento}</li>
     <li>bairro: ${cep.bairro}</li>
     <li>localidade: ${cep.localidade}</li>
     <li>uf: ${cep.uf}</li>
     <li>ddd: ${cep.ddd}</li>

    `
}