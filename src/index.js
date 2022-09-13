

// import debounce from 'lodash.debounce';
import { Notify } from 'notiflix';
import './css/style.css'

import { searchImg } from './searchImg'; 
import { getRefs } from './getRefs';
import { formReset, galleryReset } from './clearFunction';
import {
  galleryReset,
  formReset
} from './clearFunction';



const refs = getRefs();

refs.form.addEventListener('submit', onSearchInput);
console.dir(refs.form);
function onSearchInput(evt) {
  evt.preventDefault();
  const inputValue = evt.currentTarget.elements.searchQuery.value.trim();
    if (!inputValue) {
      return
    }
  searchImg(inputValue).then(searchImgSuccess);
  formReset()
}
function searchImgSuccess(data) {
  const responceArray = data.data.hits;
    if (responceArray.length === 0) {
      Notify.warning(
        "Sorry, there are no images matching your search query. Please try again.");  
 }
  galleryReset()
  onCreateImgList(responceArray);
  
    
}

function onCreateImgList(array) {
    const markup = array
        .map(({tags,webformatURL,likes,views,comments,downloads}) => {
            return `
            <div class="photo-card">
  <img src="${webformatURL}" alt="${tags}" loading="lazy" />
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
    
};
