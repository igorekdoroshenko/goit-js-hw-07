import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imagesEl = document.querySelector(".gallery");
let instance;

const galleryEl = galleryItems.map((image) => `<li class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</li>`).join("");

imagesEl.insertAdjacentHTML("beforeend", galleryEl);

imagesEl.addEventListener('click', clickOpenModal)

function clickOpenModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
  `);
    instance.show();
    
}

imagesEl.addEventListener('click', clickCloseModal)

function clickCloseModal() {
  if (instance) { 
    instance.close();
  }
}

// window.addEventListener("keydown", closeModalOnEscape)

// // imagesEl.removeEventListener("keydown", closeModalOnEscape)

// function closeModalOnEscape(event) {
//     if (event.code === 'Escape'&& instance) {
//         instance.close();
//         instance = null;
//         window.removeEventListener("keydown", closeModalOnEscape); 
//     }
      
// }



// НЕ МОГУ ПОНЯТЬ ПОЧЕМУ ПО Escape не срабатывает




