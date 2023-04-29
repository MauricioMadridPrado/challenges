export function colocaOsNomesNaLista(nomesDaLista) {
    const localDosNomes = document.getElementById("nomes");

    nomesDaLista.forEach((nome) => {
      localDosNomes.innerHTML += `
        <option value="${nome}">${nome}</option>
        `;
    
    });
  }