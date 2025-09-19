let startX = 0;

document.querySelector('.carousel-track').addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

document.querySelector('.carousel-track').addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) nextSlide();
  else if (endX - startX > 50) prevSlide();
});


let currentSlide = 0;

function renderDots() {
  const dotsContainer = document.getElementById("carousel-dots");
  const slides = document.querySelectorAll(".carousel-track .slide");
  dotsContainer.innerHTML = "";

  slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === currentSlide) dot.classList.add("active");
    dot.addEventListener("click", () => {
      currentSlide = index;
      updateCarousel();
    });
    dotsContainer.appendChild(dot);
  });
}

function updateCarousel() {
  const track = document.querySelector(".carousel-track");
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
  renderDots();
}

document.addEventListener("DOMContentLoaded", () => {
  updateCarousel();
});



let currentImageIndex = 0;
let activeStrainImages = [];

const strainData = {
  fire: {
    images: [
      { src: "assets/images/exampleReview.png", note: "Dense nugs with frosty trichomes." },
      { src: "assets/images/exampleReview.png", note: "Smooth burn, ideal for glass." },
      { src: "assets/images/exampleReview.png", note: "Bright green with purple flecks." }
    ]
  },
  budget: {
    images: [
      { src: "assets/images/SourDieselNGD.jpg", note: "Small tight nugs, Not sticky but solid aroma." },
      { src: "assets/images/SourDieselTerpsNGD.jpg", note: "Lightly frosted, bland exhale." },
    ]
  }
  // Add more strains as needed
};

function openModal(type) {
  const modal = document.getElementById("strain-modal");
  activeStrainImages = strainData[type].images;
  currentImageIndex = 0;
  updateModalImage();
  modal.style.display = "flex";
}

function updateModalImage() {
  const image = activeStrainImages[currentImageIndex];
  document.getElementById("modal-image").src = image.src;
  document.getElementById("modal-notes-text").textContent = image.note;
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % activeStrainImages.length;
  updateModalImage();
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + activeStrainImages.length) % activeStrainImages.length;
  updateModalImage();
}

function closeModal() {
  document.getElementById("strain-modal").style.display = "none";
}