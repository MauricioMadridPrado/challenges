export default function animImg(image, sentido) {

  const imgSlide = [
    { transform: `translate${sentido}(150px)`,opacity :0 },
    { transform: `translate${sentido}(0px)`,opacity :1 },
  ];

  const imgTime = {
    duration: 1000,
    iterations: 1,
  };
  image.animate(imgSlide, imgTime);
}
