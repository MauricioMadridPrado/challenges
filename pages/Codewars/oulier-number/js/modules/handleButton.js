import { listOfNumbers } from "./listOfNumbers.js";
import { findOutlier } from "./findOutlier.js";
export function hangleButton(){
    const btn = document.querySelectorAll("[data-button]");
    btn.forEach((btn) =>
      btn.addEventListener("click", (event) => {
        let typeOfNumber = event.target.dataset.button;
        const list = listOfNumbers.find(numbers =>numbers.type == typeOfNumber)
        const numbersToTry = list.numbers
        findOutlier(numbersToTry)
      })
    );}