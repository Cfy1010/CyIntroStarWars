// Sets the number of stars we wish to display
const numStars = 100;
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
const fragment = document.createDocumentFragment();

if (!prefersReducedMotion.matches) {
  for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.setAttribute("aria-hidden", "true");

    const [top, left] = getRandomPosition();
    star.style.top = `${top}px`;
    star.style.left = `${left}px`;

    fragment.appendChild(star);
  }

  document.body.appendChild(fragment);
}

function getRandomPosition() {
  var randomX = Math.floor(Math.random() * window.innerHeight);
  var randomY = Math.floor(Math.random() * window.innerWidth);
  return [randomX, randomY];
}
