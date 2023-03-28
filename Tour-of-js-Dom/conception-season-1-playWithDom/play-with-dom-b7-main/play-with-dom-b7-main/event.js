function makeRed() {
  document.body.style.backgroundColor = "red";
  document.getElementById("heading").innerText = "Testing Events";
}
// console.log(document.body);

// function makeBlue() {
//   document.body.style.backgroundColor = "black";
//   document.getElementById("heading").innerText =
//     "Making blur and changing text together";
// }

document.getElementById("btn-success").addEventListener("click", function () {
  document.body.style.backgroundColor = "black";
  document.getElementById("heading").innerText =
    "Making blur and changing text together";
});

const myEvent = document.getElementById("blue-btn");
myEvent.addEventListener("click", function () {
  document.body.style.backgroundColor = "tomato";
  document.getElementById("h2-container").innerText = "Hello Teddy";
});
