import animImg from "./animImg.js";
export default async function fetchRandomImg() {
  const containerImg = document.querySelector("[data-img]");
  const db = await fetch("https://dog.ceo/api/breeds/image/random");
  const dbJson = await db.json();
  containerImg.innerHTML = 
  `
  <img
  class="intro__img"
  data-img="img"
  src="${dbJson.message}"
  />
  `;
  animImg();
}
