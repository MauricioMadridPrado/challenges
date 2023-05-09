export default async function findCep(endereco) {
    const address = await fetch(
      `https://viacep.com.br/ws/${endereco.estado}/${endereco.cidade}/${endereco.rua}/json/`
    );

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