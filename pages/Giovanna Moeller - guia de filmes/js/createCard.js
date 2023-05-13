import { favList } from "./main.js";

export async function createCard(img, title, grade, descrip) {

  const cardContainer = document.querySelector('[data-card="container"]');
  cardContainer.innerHTML += `
    <section class="card__movie">
    <div style= 'background-image: url(${img})' class="img__container">

    </div>
        <div class="card__info">
          <h3 class="card__info__titulo">${title}</h3>
          <h4 class="card__icon card__info__star car"><img src="./assets/icons/star.svg" />${grade}</h4>
          <h4 [data-img="fav"] class="emptyHeart card__icon card__info__favorite"> Favorito<h4> </div>
        <div class="card__text__container">
          <p class="card__text">${descrip}
          </p>
        </div>
      </section>
    `;
    const hearts = document.querySelectorAll('.emptyHeart');
    hearts.forEach((heart) => {
       heart.addEventListener("click", (event) => {
        const fav = event.target;
        fav.classList.toggle('heart')
        const content = event.target.parentNode.nextElementSibling;
        const content1 =  event.target.parentNode.previousElementSibling;
        const content2 = event.target.parentNode;
        favList.push(content)
        console.log(content, content1, content2)
      });
    });
}
