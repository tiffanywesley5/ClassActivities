document.querySelector("button").addEventListener("click", () =>
  {console.log("You Clicked Me");

  });
document.querySelector("button").addEventListener("mouseover", event => {
  event.target.style.color = "purple";
})
