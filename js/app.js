const galleries = {
  baby: ["assets/images/babyshower.png"],
  cumple: ["assets/images/cumpleanos.png"],
  bodas: ["assets/images/bodas.png"],
  corporativo: ["assets/images/corporativo.png"],
  flores: ["assets/images/flores.png"],
  catering: ["assets/images/catering.png"]
};

const modal = document.getElementById("galleryModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentGallery = [];
let currentIndex = 0;

document.querySelectorAll(".btn-card").forEach(btn => {
  btn.addEventListener("click", () => {
    const type = btn.dataset.gallery;
    currentGallery = galleries[type];
    currentIndex = 0;

    modal.classList.add("active");
    showImage();
  });
});

function showImage() {
  modalImg.src = currentGallery[currentIndex];
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % currentGallery.length;
  showImage();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
  showImage();
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});