export default function animImg() {
  const image = document.querySelector('[data-img="img"]');
  const imgSlide = [
    { transform: `translateX(150px)` },
    { transform: `translateX(0px)` },
  ];

  const imgTime = {
    duration: 1000,
    iterations: 1,
  };
  image.animate(imgSlide, imgTime);
}
