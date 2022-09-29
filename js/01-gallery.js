import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
  
gallery.append(...insertImage(galleryItems));

gallery.addEventListener('click', event => {
  if(event.target.nodeName == 'IMG'){
    event.preventDefault();
    let imgOriginal = event.target.dataset.source;
    let imgAlt = event.target.alt;
    showOriginalImage(imgOriginal, imgAlt);
  }
});

let instance;

function insertImage(items) {
  return items.map(item => createElement(item));
}

function createElement(item){
  let element = document.createElement('div');
  element.classList.add('gallery__item');
  let link = createLink(item);
  let img = createImage(item);
  element.appendChild(link);
  link.appendChild(img);
  return element;
}

function createLink(item) {
  let link = document.createElement('a');
  link.classList.add('gallery__link');
  link.setAttribute('href', item.original);
  return link;
}

function createImage(item) {
  let img = document.createElement('img');
  img.classList.add('gallery__image');
  img.setAttribute('src', item.preview);
  img.setAttribute('alt', item.description);
  img.setAttribute('data-source', item.original);
  return img;
}

function showOriginalImage(original, description) {
  instance = basicLightbox.create(`
    <div class="modal">
        <img src=${original} alt=${description}/>
    </div>
  `);

  instance.show();
}

document.onkeydown = function (evt) {
  evt = evt || window.event;
  var isEscape = false;
  if ('key' in evt) {
    isEscape = evt.key === 'Escape' || evt.key === 'Esc';
  }
  if (isEscape && instance) {
    instance.close();
    instance = null;
  }
};
