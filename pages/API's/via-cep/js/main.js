import handleClick from "./handleClick.js";
// import handleForms from "./handleForms.js";
// handleForms();
handleClick();


handleClickSearchCep();

function handleClickSearchCep() {
  const btn = document.querySelector('[data-cep="button"]');
  btn.addEventListener("click", (event) => {
    event.preventDefault()
    const estado = document.getElementById('estado');
    const cidade = document.getElementById('cidade');
    const rua = document.getElementById('rua');

    const endereco = {
      'estado':estado.value,
       'cidade':cidade.value, 
      'rua':rua.value
      }
      findCep(endereco);
  });
}
async function findCep(endereco) {
  const address = await fetch(
    `https://viacep.com.br/ws/${endereco.estado}/${endereco.cidade}/${endereco.rua}/json/`
  );
  //   const listAddress = address.then(r=> r.json()).then((body)=> body ).then(list =>{
  //     return list
  //   });
  const listAddress = await address.json();
  const addressContainer = document.querySelector("[data-addresContainer]");
  addressContainer.innerHTML = ``
  listAddress.forEach((add) => {

    addressContainer.innerHTML += `
    <ul class="address__info">
      <li>
        "cep": ${add.cep},
      </li>
      <li>
        "logradouro": ${add.logradouro},
      </li>
      <li>
        "bairro": ${add.bairro},
      </li>   
    </ul>
    `;
  });
}
