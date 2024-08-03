const slides = [
  {
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1722100466194-3896a8ad0279?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tagLine:
      "Blog One <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna anime. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut farhan ex ea commodo consequat. </span>",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1719937206109-7f4e933230c8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tagLine:
      "Blog One<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna anime. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut farhan ex ea commodo consequat.</span>",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1722412878204-d13c6210a1b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tagLine:
      "Blog One <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna anime. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut farhan ex ea commodo consequat.</span>",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1721763606314-2ffd52334bb3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tagLine:
      "Blog One <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna anime. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut farhan ex ea commodo consequat.</span>",
  },
];

const dotsContainer = document.querySelector(".dots");
const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");

const img = document.querySelector(".banner-img");
const tagLine = document.querySelector(".banner-h p");

/* Initialise l'index à 0, représentant la position actuelle dans le carrousel. */
let index = 0;

/*=============== BULLET POINTS ===============*/

function createDot(i) {
  /* Crée un élément div dans le DOM et lui ajoute la classe "dot" */
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dotsContainer.appendChild(dot);

  dot.addEventListener("click", () => {
    updateCarousel(i);
  });

  if (i === index) {
    dot.classList.add("dot_selected");
  }
}

function displayDots() {
  for (let i = 0; i < slides.length; i++) {
    createDot(i);
  }
}

/*=============== CARROUSEL ===============*/

function updateCarousel(i) {
  const selectDots = document.querySelectorAll(".dots .dot");

  selectDots[index].classList.remove("dot_selected");
  index = i;

  img.src = slides[index].imageUrl;
  tagLine.innerHTML = slides[index].tagLine;
  selectDots[index].classList.add("dot_selected");
}

function slide(direction) {
  const selectDots = document.querySelectorAll(".dots .dot");
  selectDots[index].classList.remove("dot_selected");
  if (direction === "right") {
    index = (index + 1) % slides.length;
  } else {
    index = (index - 1 + slides.length) % slides.length;
  }
  img.src = slides[index].imageUrl;
  tagLine.innerHTML = slides[index].tagLine;
  selectDots[index].classList.add("dot_selected");
}

/*=============== INTERACTION ===============*/
function slideRight() {
  slide("right");
}

function slideLeft() {
  slide("left");
}

function autoSlide() {
  autoSlideInterval = setInterval(() => {
    slideRight();
  }, 5000);
}

arrowRight.addEventListener("click", slideRight);
arrowLeft.addEventListener("click", slideLeft);
dotsContainer.addEventListener("click", () => {
  clearInterval(autoSlideInterval);
  autoSlide();
});

function preloadImages() {
  for (let i = 0; i < slides.length; i++) {
    const imageObj = new Image();
    imageObj.src = slides[i].imageUrl;
  }
}

preloadImages();
autoSlide();
displayDots();
