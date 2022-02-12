import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryItem = ({ preview, original, description }) => {
    return `
    <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      style="display:block"
    />
  </a>
</div>`
    
};

const galleryMarkUp = galleryItems.map(galleryItem).join('');

const galleryCollection = document.querySelector('.gallery');
galleryCollection.insertAdjacentHTML('beforeend', galleryMarkUp);
galleryCollection.addEventListener('click', onGalleryCollectionClick);

function onGalleryCollectionClick(event) {
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    modalView(event.target.dataset.source);
    event.preventDefault();
};

let previewImage;

function modalView(src) {
    previewImage = basicLightbox.create(
        `<div class='modal'>
        <img src="${src}" style="height:100vh display:block"></img>
        </div>`,
        {
            onShow: previewImage => {
                window.addEventListener('keydown', escapeClick);
            },

            onClose: previewImage => {
                window.removeEventListener('keydown', escapeClick);
            },
        },
    );

    previewImage.show();
};


function escapeClick(event) {
    if (event.code === 'Escape') {
        previewImage.close();
    }
};


    
