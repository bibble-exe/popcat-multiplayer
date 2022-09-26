var popcatOne = document.getElementsByClassName('popcat')[0];
var popcatTwo = document.getElementsByClassName('popcat')[1];
var a = 50;
var b = 50;
var scoreOne = document.getElementsByClassName('countN')[0];
var scoreTwo = document.getElementsByClassName('countN')[1];

var progBar = document.getElementsByClassName('progress')[0];
var progFillOne = document.getElementsByClassName('progFillOne');
var progFillTwo = document.getElementsByClassName('progFillTwo');



// console.log(popcatOne)
// console.log(popcatOne.src)
// console.log(a)
// console.log(scoreOne.text)

popcatOne.addEventListener('click', popA);
popcatTwo.addEventListener('click', popB);

function playSound() {
  var popSound = new Audio("audio/pop.mp3");
  popSound.volume = 0.2
  popSound.play();
};

document.addEventListener('keypress', function(event) {
  if (event.code === "KeyA") {
    popA();
  } else if (event.code === "KeyL") {
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
  b = b-1;
  scoreOne.textContent = a;
  scoreTwo.textContent = b;
  updateProgBar(progBar, a, "progFillOne", "progTxtOne");
  updateProgBar(progBar, b, "progFillTwo", "progTxtTwo");
  console.log(a,b)
  if (a === 100) {
    alert("Player One Wins!")
  } else if (b === 100) {
    alert("Player Two Wins!")
  };
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
  a = a-1;
  scoreOne.textContent = a;
  scoreTwo.textContent = b;
  updateProgBar(progBar, a, "progFillOne", "progTxtOne");
  updateProgBar(progBar, b, "progFillTwo", "progTxtTwo");
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

// score

function updateProgBar(progBar, value, classFill, classTxt) {
  value = Math.round(value);
  classFill = "." + classFill;
  classTxt = "." + classTxt;
  progBar.querySelector(classFill).style.height = `${value}%`;
  console.log(progBar.querySelector(classFill).style.height);
  // progBar.querySelector(classTxt).textContent = `${value}%`;
}