export function findOutlier(integers) {
  const generalContainer = document.querySelector("[data-list]");
  const resultContainer = document.querySelector("[data-result]");

  generalContainer.innerHTML = `<h2>Original list:</h2> `;

  const oddNumbers = [];
  const evenNumbers = [];

  integers.forEach((int) => {
    generalContainer.innerHTML += `<span>${int}</span>, `;
    const checkInter = Number.isInteger(+int / 2);
    !checkInter ? oddNumbers.push(int) : evenNumbers.push(int);
  });
  
  resultContainer.innerHTML = `
    <h3>Even numbers: - ${evenNumbers} -   </h3>
    <h3>Odd numbers:  -  ${oddNumbers} - </h3>
    `;
    resultContainer.classList.add('border')
  return oddNumbers.length < evenNumbers.length ? +oddNumbers : +evenNumbers;
}
