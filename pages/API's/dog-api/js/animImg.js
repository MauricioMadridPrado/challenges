export default function animImg() {
  const image = document.querySelector('[data-img="img"]');
  const imgSlide = [
    { transform: `translateX(150px)`,opacity :0 },
    { transform: `translateX(0px)`,opacity :1 },
  ];

  const imgTime = {
    duration: 1000,
    iterations: 1,
  };
  image.animate(imgSlide, imgTime);
}
