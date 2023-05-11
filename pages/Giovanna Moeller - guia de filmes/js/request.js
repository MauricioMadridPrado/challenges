import { key } from "./key.js";
import { createCard } from "./createCard.js";

export async function requestApi(movieTitle) {
  const cardContainer = document.querySelector('[data-card="container"]');
  cardContainer.innerHTML = ` `
  const url = `https://api.themoviedb.org/3/search/movie?api_key=72dcf5c390413b12fb37d86954f2273a&query=${movieTitle}&page=1`;
  const conection = await fetch(url);
  const convertedConection = await conection.json();
  convertedConection.results.forEach((conect) => {
    const image = `https://image.tmdb.org/t/p/w500${conect.poster_path}`;
    createCard(
      image,
      conect.title,
      conect.popularity,
      conect.overview
    );
  });
}
