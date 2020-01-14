// Je veux afficher 100 etoiles
const numbStars = 100;

// Pour chaques etoiles je veux afficher des positions aléatoires
for (let i = 0; i < numbStars; i++){
    let star = document.createElement('div');
    star.classname = 'star';
    var xy = getRandomPositon();
    star.style.top = xy[0] + 'px';
    star.style.left = xy[1] + 'px';
    document.body.append(star);
}
    
// je crée ma fonction de position aléatoire
function getRandomPositon() {
    var y = window.innerWidth;
    var x = window.innerHeight;
    var randomX = Math.floor(Math.random()*x);
    var randomY = Math.floor(Math.random()*y);
    return [randomX, randomY];
 
}
//    console.log(random);