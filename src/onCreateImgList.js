import { getRefs } from "./getRefs";
import { lightbox } from "./lightBox";

const refs= getRefs()

 export function onCreateImgList(array) {
    const markup = array
      .map(({ tags,
        webformatURL,
        likes,
        views,
        comments,
        downloads,
        largeImageURL
      }) => {
        return `
            <div class="photo-card">
            <a class="gallery__link"
            href="${largeImageURL}">
  <img src="${webformatURL}" alt="${tags}" loading="lazy" /></a>
  <div class="info">
    <p class="info-item">
      <b>Likes:${likes}</b>
    </p>
    <p class="info-item">
      <b>Views:${views}</b>
    </p>
    <p class="info-item">
      <b>Comments:${comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads:${downloads}</b>
    </p>
  </div>
</div>
            `
        })
        .join('');
     refs.galerryList.insertAdjacentHTML("beforeend", markup); 
     
  lightbox.refresh();
    
}