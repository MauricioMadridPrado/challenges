const container = document.querySelector('[data-buyRRL]');
async function importBlockchain() {
  fetch("https://blockchain.info/ticker")
    .then((r) => r.json())
    .then((btcJson) => {
      container.innerHTML = `Valor em R$: ${btcJson.BRL.buy} `;
    });
}


setInterval(importBlockchain, 1000 * 30)
importBlockchain()
