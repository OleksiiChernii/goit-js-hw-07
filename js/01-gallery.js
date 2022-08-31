import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector('.gallery');
galleryItems.forEach(element => {
  gallery.insertAdjacentElement("beforeend", insertImage(element));
});

let instance;

function insertImage(parent) {
  let element = document.createElement('div');
  element.classList.add('gallery__item');
  let link =createLink();
  let img = createImage(parent);
  element.appendChild(link);
  link.appendChild(img);
  return element;
}

function createLink(){
  let link = document.createElement('a');
  link.classList.add('gallery__link');
  link.setAttribute('href', parent.original);
  link.addEventListener('click', event => event.preventDefault());
  return link;
}

function createImage(parent){
  let img = document.createElement('img');
  img.classList.add('gallery__image');
  img.addEventListener('click', () => showOriginalImage(parent));
  img.setAttribute('src', parent.preview);
  img.setAttribute('alt', parent.description);
  img.setAttribute('data-source', parent.original);
  return img;
}

function showOriginalImage(parent) {
  instance = basicLightbox.create(`
    <div class="modal">
        <img src=${parent.original} alt=${parent.description}/>
    </div>
  `);

  instance.show();
}

document.onkeydown = function(evt) {
  evt = evt || window.event;
  var isEscape = false;
  if ("key" in evt) {
      isEscape = (evt.key === "Escape" || evt.key === "Esc");
  } 
  if (isEscape && instance) {
      instance.close();
      instance = null;
  }
};