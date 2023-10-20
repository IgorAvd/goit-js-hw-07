import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');
galleryList.addEventListener('click', openImageModal);

const GalleryItemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryList.insertAdjacentHTML('beforeend', GalleryItemsMarkup);

function openImageModal(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  const clickedImageSource = evt.target.dataset.source;
  console.log(clickedImageSource);

  createModal(clickedImageSource);
}

function createModal(clickedImageSource) {
  const instance = basicLightbox.create(`
    <img src="${clickedImageSource}" width="800" height="600">
  `);

  instance.show();
  document.onkeydown = function (evt) {
    evt = evt || window.evt;
    let isEscape = false;
    if ('key' in evt) {
      isEscape = evt.key === 'Escape' || evt.key === 'Esc';
    } else {
      isEscape = evt.keyCode === 27;
    }
    if (isEscape) {
      instance.close();
    }
  };
}

function createGalleryItemsMarkup(array) {
  return array
    .map(
      ({ original, preview }) => `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="Image description"
        />
      </a>
    </li>`,
    )
    .join('');
}
