import createDogOptions from "./createDogOptions.js";

export default async function fetchDogNames() {
  const selectDogs = document.getElementById("dogsSelection");
  const dogNames = await fetch("https://dog.ceo/api/breeds/list");
  const dogNamesJson = await dogNames.json();

  createDogOptions(selectDogs, dogNamesJson);

}
