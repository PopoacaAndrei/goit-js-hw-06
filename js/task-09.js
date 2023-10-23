const changeColorButton = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

changeColorButton.addEventListener("click", function () {
  const randomColor = getRandomHexColor();

  // Schimbați culoarea de fundal a body prin stiluri inline.
  document.body.style.backgroundColor = randomColor;

  // Afișați valoarea culorii în span.color.
  colorSpan.textContent = randomColor;
});
