var popcatOne = document.getElementsByClassName('popcat')[0];
var popcatTwo = document.getElementsByClassName('popcat')[1];
var a = 50;
var b = 50;
var scoreOne = document.getElementsByClassName('countN')[0];
var scoreTwo = document.getElementsByClassName('countN')[1];

var progBar = document.getElementsByClassName('progress')[0];
var progFillOne = document.getElementsByClassName('progFillOne');
var progFillTwo = document.getElementsByClassName('progFillTwo');

var modalOne = document.getElementById("modalOne");
var modalTwo = document.getElementById("modalTwo");
var spanOne = document.getElementsByClassName("close")[0];
var spanTwo = document.getElementsByClassName("close")[1];

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
  checkWinner();
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
  checkWinner();
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
}

function checkWinner() {
  console.log(a,b)
  if (a === 100) {
    openModal(modalOne);
    resetScore(); 
  } else if (b === 100) {
    openModal(modalTwo);
    resetScore();
  };
}

// open modal

function openModal(modal) {
  modal.style.display = "flex";
}

spanOne.onclick = function() {
  modalOne.style.display = "none";
}

spanTwo.onclick = function() {
  modalTwo.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalOne) {
    modalOne.style.display = "none";
  } else if (event.target == modalTwo) {
    modalTwo.style.display = "none";
  }
}

// reset

function resetScore() {
  a = 50;
  b = 50;
  scoreOne.textContent = a;
  scoreTwo.textContent = b;
  updateProgBar(progBar, a, "progFillOne", "progTxtOne");
  updateProgBar(progBar, b, "progFillTwo", "progTxtTwo");
  console.log("reset");
}