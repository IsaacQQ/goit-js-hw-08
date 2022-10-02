// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

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
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
    overlayOpacity: 0.9,

});




