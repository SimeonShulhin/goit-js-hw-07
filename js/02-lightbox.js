import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const getListOfItems = () =>
  galleryItems.map((image) => {
    const linkEl = document.createElement('a');
    linkEl.className = 'gallery__link';
    linkEl.href = image.original;

    const imageEl = document.createElement('img');
    imageEl.src = image.preview;
    imageEl.alt = image.description;
    imageEl.className = 'gallery__image';

    linkEl.appendChild(imageEl);
    return linkEl;
  });

gallery.append(...getListOfItems());

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
