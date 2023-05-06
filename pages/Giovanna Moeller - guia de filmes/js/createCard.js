import { moviesInfo } from "./moviesInfo.js";
export function createCard() {
  const cardContainer = document.querySelector('[data-card="container"]');
  moviesInfo.forEach((movie) => {
    cardContainer.innerHTML += 
    `
    <section class="card__movie">
        <img class="card__img" src="${movie.img}" alt="${movie.alt}" />
        <div class="card__info">
          <h3 class="card__info__titulo">${movie.title}</h3>
          <h4 class="card__icon card__info__star car"><img src="./assets/icons/star.svg" />${movie.grade}</h4>
          <h4 class="card__icon card__info__favorite"><img src="./assets/icons/heart.svg"/>Favoritar</h4>
        </div>
        <div class="card__text__container">
          <p class="card__text">${movie.descrip}
          </p>
        </div>
      </section>
    `;
  });
}
