const container = document.querySelector('[data-joke]');
async function chuckNorrisJoke() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((r) => r.json())
    .then((joke) => {
      console.log(joke.value)
      container.innerHTML = `<p>${joke.value}<p> `;
    });
}
const btn = document.querySelector('[data-btn]')
btn.addEventListener('click', chuckNorrisJoke)

// setInterval(chuckNorrisJoke, 1000 * 30)
chuckNorrisJoke()
