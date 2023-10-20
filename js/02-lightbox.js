import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryList = document.querySelector('.gallery');

const GalleryItemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryList.insertAdjacentHTML('beforeend', GalleryItemsMarkup);

function createGalleryItemsMarkup(array) {
  return array
    .map(
      ({ original, preview, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>`,
    )
    .join('');
}
new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
