document.addEventListener("DOMContentLoaded", function () {
  const starContainer = document.querySelector(".stars");
  for (let i = 0; i < 100; i++) {
    let star = document.createElement("div");
    star.classList.add("star");
    let size = Math.random() * 3 + "px";
    star.style.width = size;
    star.style.height = size;
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    star.style.animationDuration = Math.random() * 3 + 2 + "s";
    starContainer.appendChild(star);
  }
});
