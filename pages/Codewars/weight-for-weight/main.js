console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));
console.log("11 11 2000 10003 22 123 1234000 44444444 9999");
function orderWeight(strng) {
  const newList = [];
  strng.split(" ").forEach((num) => {
    newList.push(num)
  });
  const finalList = newList.sort(function (a, b) {
    return a.split("").reduce((a, b) => +a + +b, 0) - b.split("").reduce((a, b) => +a + +b, 0);
  });
  return finalList.toString().replaceAll(',' , ' ');
}
