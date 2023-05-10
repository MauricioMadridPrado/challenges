showRestul() 
function showRestul() {
  const array1 = [1, 2, 2, 2, 3];
  const array2 = [2];
  const resultValue = arrayDiff(array1, array2)
  const result = document.querySelector('[data-result]')
  result.innerHTML =
  `
  <h2>Array 1 = ${array1}</h2>
  <h2>Array 2 = ${array2}</h2>
  <h2>Diff Array 1 e 2: ${resultValue}</h2>
  `
}
function arrayDiff(a, b) {
  const result = [];
  a.forEach((num) => {
    !b.includes(num) ? result.push(num) : "";
  });
  return result;
}


// function array_diff(a, b) {
//   return a.filter(e => !b.includes(e));
// }