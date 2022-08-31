import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

galleryItems.forEach(element => gallery.insertAdjacentElement('beforeend', insertImage(element)));

function insertImage(element){
    let link = createLink(element);
    let image = createImage(element);
    link.appendChild(image);
    return link;
}

function createLink(parent){
    let link = document.createElement('a');
    link.classList.add('gallery__item');
    link.setAttribute('href', parent.original);
    link.addEventListener('click', event => event.preventDefault());
    return link;
}

function createImage(parent){
    let img = document.createElement('img');
    img.classList.add('gallery__image');
    img.setAttribute('src', parent.preview);
    img.setAttribute('alt', parent.description);
    return img;
}

let lightbox = new SimpleLightbox('.gallery a', { docClose: true});