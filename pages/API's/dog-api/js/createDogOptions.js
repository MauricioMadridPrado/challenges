import fetchSelectedDog from "./fetchSelectedDog.js";
export default function createDogOptions(selectDogs, dogNamesJson) {
  dogNamesJson.message.forEach((dog) => {
    selectDogs.innerHTML += `
          <option data-dog value="${dog}">${dog}</option>
          `;
  });

  selectDogs.addEventListener("change", (event) => {
    fetchSelectedDog(event.target.value);
  });
}
