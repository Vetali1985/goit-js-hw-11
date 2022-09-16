export { lightbox };

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';



let lightbox = new SimpleLightbox('.gallery__link', {
  captions: true,
  captionDelay: 200,
  captionsData: 'alt',
});
