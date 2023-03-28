// console.log("connected");
let value = 0;
document.getElementById("blue-btn").addEventListener("click", function () {
  //   value = value + 1;
  value += 1;

  //   console.log(value);
  document.getElementById("counter").innerText = value;
});

// function makeMinus() {
//   value -= 1;
//   document.getElementById("counter").innerText = value;
// }

document.getElementById("btn-success").addEventListener("click", function () {
  value -= 1;
  document.getElementById("counter").innerText = value;
});
