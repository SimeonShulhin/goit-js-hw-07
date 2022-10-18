import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const getListOfItems = () =>
  galleryItems.map((image) => {
    const itemEl = document.createElement('div');
    itemEl.className = 'gallery__item';

    const linkEl = document.createElement('a');
    linkEl.className = 'gallery__link';
    linkEl.href = image.original;

    const imageEl = document.createElement('img');
    imageEl.src = image.preview;
    imageEl.alt = image.description;
    imageEl.className = 'gallery__image';
    imageEl.dataset.source = image.original;

    linkEl.appendChild(imageEl);
    itemEl.appendChild(linkEl);
    return itemEl;
  });

gallery.append(...getListOfItems());

gallery.addEventListener('click', (e) => {
  e.preventDefault();
  const instanse = basicLightbox.create(`<img src="${e.target.dataset.source}">`, {
    onShow: (instance) => {
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Esc' || e.key === 'Escape') {
          instance.close();
        }
      });
    },
  });
  instanse.show();
});
