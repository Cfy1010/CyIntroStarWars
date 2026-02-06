// Sets the number of stars we wish to display
const numStars = 100;
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
const fragment = document.createDocumentFragment();

//Si quelqu’un a réduit les animations, on n’affiche pas les étoiles.
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
);

if (!prefersReducedMotion.matches) {
  // génération des étoiles
}

if (!prefersReducedMotion.matches) {
  // Generate the specified number of stars
  for (let i = 0; i < numStars; i++) {
    // Create a new div element for each star
    const star = document.createElement("div");
    star.className = "star";
    star.setAttribute("aria-hidden", "true");

    // Get random position for the star
    const [top, left] = getRandomPosition();
    star.style.top = `${top}px`;
    star.style.left = `${left}px`;

    // Append the star to the document fragment
    fragment.appendChild(star);
  }
  // Append the document fragment to the body of the webpage
  document.body.appendChild(fragment);
}

// Function to generate random position for a star
function getRandomPosition() {
  // Generate random x and y coordinates within the dimensions of the window
  var randomX = Math.floor(Math.random() * window.innerHeight);
  var randomY = Math.floor(Math.random() * window.innerWidth);
  return [randomX, randomY];
}
