const letters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
// document.container.style.backgroundColor = "red";

btn.addEventListener("click", function () {
  let appliedColor = "#";
  for (let i = 0; i < 6; i++) {
    appliedColor += letters[getRandomNumber()];
    // console.log(appliedColor);
  }
  //   console.log(appliedColor);
  color.textContent = appliedColor;
  document.body.style.backgroundColor = appliedColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * letters.length);
}
// console.log(getRandomNumber());
