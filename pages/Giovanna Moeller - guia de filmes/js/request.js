import { key } from "./key.js";
import { createCard } from "./createCard.js";
console.log(key);
export async function requestApi() {
  for (let i = 550; i < 570; i++) {
    const url = `https://api.themoviedb.org/3/movie/${i}?api_key=${key}`;
    const conection = await fetch(url);
    const convertedConection = await conection.json();
    console.log(convertedConection);
    const image = `https://image.tmdb.org/t/p/w500${convertedConection.poster_path}`;
    createCard(
      image,
      convertedConection.title,
      convertedConection.popularity,
      convertedConection.overview
    );
  }
}
