var popcatOne = document.getElementsByClassName('popcat')[0];
var popcatTwo = document.getElementsByClassName('popcat')[1];
var a = 0;
var b = 0;
var scoreOne = document.getElementsByClassName('countN')[0];
var scoreTwo = document.getElementsByClassName('countN')[1];

console.log(popcatOne)
console.log(popcatOne.src)
console.log(a)
console.log(scoreOne.text)

popcatOne.addEventListener('click', popA);
popcatTwo.addEventListener('click', popB);

function playSound() {
  var popSound = new Audio("audio/pop.mp3");
  popSound.volume = 0.2
  popSound.play();
};

document.addEventListener('keypress', function(event) {
  if (event.keyCode === 87) {
    console.log("gi")
    alert("press");
    popA();
  } else if (event.keyCode === 32) {
    popB();
  }
});

// PLAYER ONE

function popA() {
  playSound();
  popsA();
};

function popsA() {
  openA();
  setTimeout(closeA, 300);
  a = a+1;
  scoreOne.textContent = a;
}

function openA() {
  enlargeImgA();
  popcatOne.src = "img/popOpen.jpg";
};

function closeA() {
  resetImgA();
  popcatOne.src = "img/popClose.jpg";
};

function enlargeImgA() {
  popcatOne.style.transform = "scale(1.05)";
  popcatOne.style.transition = "transform 0.1s ease";
};

function resetImgA() {
  popcatOne.style.transform = "scale(1)";
  popcatOne.style.transition = "transform 0.1s ease";
}

//  PLAYER TWO

function popB() {
  playSound();
  popsB();
};

function popsB() {
  openB();
  setTimeout(closeB, 300);
  b = b+1;
  scoreTwo.textContent = b;
}

function openB() {
  enlargeImgB();
  popcatTwo.src = "img/popOpen.jpg";
};

function closeB() {
  resetImgB();
  popcatTwo.src = "img/popClose.jpg";
};

function enlargeImgB() {
  popcatTwo.style.transform = "scale(1.05)";
  popcatTwo.style.transition = "transform 0.1s ease";
};

function resetImgB() {
  popcatTwo.style.transform = "scale(1)";
  popcatTwo.style.transition = "transform 0.1s ease";
}