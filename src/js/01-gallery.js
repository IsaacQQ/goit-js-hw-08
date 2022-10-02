// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(simpleLightbox);
console.log(galleryItems);

import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
import simpleLightbox from 'simplelightbox';

const galleryDiv = document.querySelector('.gallery')
const store ={lightbox : null}
const markup = galleryItems.reduce(
  (acc, {preview, original, description}) =>
  acc +
  `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
    class = "gallery__image"
    src = "${preview}"
    data-source="${original}"
    alt="${description}"
    />
    </a>
    </div>`,
    ""
);

galleryDiv.insertAdjacentHTML("beforeend", markup);

galleryDiv.addEventListener("click", onGalleryClick);

function onGalleryClick(evt){
  console.log(evt)
  evt.preventDefault();
  const galleryItem = evt.target.closest('.gallery__item');
  if(!galleryItem) return;
  
  const img = galleryItem.querySelector('.gallery__image')
  const src = img.dataset.source;
  showModal(src);
}
function showModal(src){
  const basicLightbox = window.basicLightbox;
  const instance = basicLightbox.create(getBigImgTemplate(src));
  instance.show();
  store.lightbox = instance


function getBigImgTemplate(src){
  return `
  <img src="${src}" width="800" height="600">
  `;
}

}

window.addEventListener("keydown", onKeyDown);
function onKeyDown(evt){
  if(evt.key !== "Escape") return;
  if (store.lightbox && store.lightbox.close){
    instance.close();
  }
}