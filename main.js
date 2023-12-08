// Sets the number of stars we wish to display
const numStars = 100;
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
const fragment = document.createDocumentFragment();

// For every star we want to display
for (let i = 0; i < numStars; i++) {
  let star = document.createElement("div");
  star.className = "star";
  var xy = getRandomPosition();
  star.style.top = xy[0] + "px";
  star.style.left = xy[1] + "px";
  document.body.append(star);
}

function getRandomPosition() {
  var randomX = Math.floor(Math.random() * window.innerHeight);
  var randomY = Math.floor(Math.random() * window.innerWidth);
  return [randomX, randomY];
}
