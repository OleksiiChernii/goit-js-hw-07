import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

gallery.append(...insertImages(galleryItems));

gallery.addEventListener('click', event => event.preventDefault);

function insertImages(elements) {
  return elements.map((element) => {
    let link = createLink(element);
    link.appendChild(createImage(element));
    return link;
  });
}

function createLink(element){
    let link = document.createElement('a');
    link.classList.add('gallery__item');
    link.setAttribute('href', element.original);
    return link;
}

function createImage(element){
    let img = document.createElement('img');
    img.classList.add('gallery__image');
    img.setAttribute('src', element.preview);
    img.setAttribute('alt', element.description);
    return img;
}

let lightbox = new SimpleLightbox('.gallery a', { docClose: true, captionsData: 'alt', captionDelay: 250});