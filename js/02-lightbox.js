import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryPhotos = galleryItems;
const gallery = document.querySelector(".gallery");

// creating gallery
galleryPhotos.forEach((el) => {
  const galleryItem = document.createElement("div");
  const galleryLink = document.createElement("a");
  const galleryImage = document.createElement("img");
  galleryItem.setAttribute("class", "gallery__item");
  galleryLink.setAttribute("class", "gallery__link");
  galleryLink.setAttribute("href", `${el.original}`);
  galleryImage.setAttribute("class", "gallery__image");
  galleryImage.setAttribute("src", `${el.preview}`);
  galleryImage.setAttribute("data-source", `${el.original}`);
  galleryImage.setAttribute("alt", `${el.description}`);

  gallery.append(galleryItem);
  galleryItem.append(galleryLink);
  galleryLink.append(galleryImage);
});

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
 });