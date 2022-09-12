

// import debounce from 'lodash.debounce';
import Notiflix, { Notify } from 'notiflix';
import './css/style.css'

import { searchImg } from './searchImg'; 
import { getRefs } from './getRefs';
// import {
//     clearCountryInfo,
//     clearCountryList} from './clearFunction';



const refs = getRefs();
refs.form.addEventListener('submit', onSearchInput);
console.dir(refs.form);
function onSearchInput(evt) {
  evt.preventDefault();
  const inputValue = evt.currentTarget.elements.searchQuery.value.trim();
  console.log(inputValue)
 
//     if (!inputValue) {
// // refs.countryList.innerHTML = '';
// // refs.countryInfo.innerHTML = '';
//         return
//     }
    searchImg(inputValue).then(searchImgSuccess)
}
function searchImgSuccess(data) {
   
  onCreateImgList(data.data.hits);
    
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
    refs.galerryList.innerHTML = markup;
    
};
