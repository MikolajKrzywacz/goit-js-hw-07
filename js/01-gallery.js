import { galleryItems } from "./gallery-items.js";
// Change code below this line

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

gallery.addEventListener("click", onImageClick);

function onImageClick(evt) {
  preventDefaultAction(evt);

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src ="${evt.target.dataset.source}" width= 800 height = 600>`
  );
  instance.show();

  gallery.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
}

function preventDefaultAction(evt) {
  evt.preventDefault();
}
