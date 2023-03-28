document.querySelector("div").addEventListener("click", function (e) {
  console.log(e.target.tagName);
  e.stopPropagation();
  console.log("clicked");
  if ((e.target.tagName = "BUTTON")) {
    console.log("got alll buttons");
    e.stopPropagation();
  }
});
