let currentSlide = 0;

function updateCarousel() {
  const track = document.querySelector('.carousel-track');
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  const slides = document.querySelectorAll('.carousel-track .slide');
  currentSlide = (currentSlide + 1) % slides.length;
  updateCarousel();
}

function prevSlide() {
  const slides = document.querySelectorAll('.carousel-track .slide');
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateCarousel();
}

document.addEventListener("DOMContentLoaded", updateCarousel);


let currentImageIndex = 0;
let activeStrainImages = [];

const strainData = {
  fire: {
    images: [
      { src: "assets/images/blue-dream-1.jpg", note: "Dense nugs with frosty trichomes." },
      { src: "assets/images/blue-dream-2.jpg", note: "Smooth burn, ideal for glass." },
      { src: "assets/images/blue-dream-3.jpg", note: "Bright green with purple flecks." }
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