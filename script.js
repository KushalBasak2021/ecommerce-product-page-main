let counter = 0;
let minusBtn = document.querySelector(".minus-button");
let plusBtn = document.querySelector(".plus-button");
let quantity = document.querySelector(".number-of-product");
let mainImg = document.querySelector(".main-img");
let previewDiv = document.querySelector(".preview");
let previewImg = document.querySelector(".preview-img");
let closeBtn = document.querySelector(".close");
minusBtn.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    quantity.innerHTML = counter;
  }
});

plusBtn.addEventListener("click", () => {
  if (counter >= 0) {
    counter++;
    quantity.innerHTML = counter;
  }
});

function clickImg(e) {
  mainImg.src = e;
}

mainImg.addEventListener("click", () => {
  previewImg.src = mainImg.src;
  previewDiv.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  previewDiv.classList.remove("active");
});

function clickPreviewImg(e) {
  previewImg.src = e;
}
