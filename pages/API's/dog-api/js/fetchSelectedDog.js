import animImg from "./animImg.js";
import createSearch from "./createSearch.js";

export default async function fetchSelectedDog(dogSelected) {

  const selectedDogContainer = document.querySelector('[data-dog="select"]');

  selectedDogContainer.innerHTML = `<h2>...carregando info do ${dogSelected}</h2>`;
  const selectedDog = await fetch(
    `https://dog.ceo/api/breed/${dogSelected}/images/random`
  );

  const selectedDogJson = await selectedDog.json();
  selectedDogContainer.innerHTML = `
    <img data-img="selected" src="${selectedDogJson.message}" alt="" />
  `;

  const imgSelected = document.querySelector('[data-img="selected"]');

  createSearch(dogSelected);
  animImg(imgSelected, "Y");
}
