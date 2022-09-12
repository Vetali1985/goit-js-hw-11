

// import debounce from 'lodash.debounce';
import Notiflix, { Notify } from 'notiflix';
// import './css/styles.css';

import { searchImg } from './searchImg'; 
import { getRefs } from './getRefs';
// import {
//     clearCountryInfo,
//     clearCountryList} from './clearFunction';



const refs = getRefs();
refs.form.addEventListener('input', onSearchInput);

function onSearchInput(evt) {
  const inputValue = evt.target.value.trim();
  console.log(inputValue)
    if (!inputValue) {
// refs.countryList.innerHTML = '';
// refs.countryInfo.innerHTML = '';
        return
    }
    searchImg(inputValue).then(searchImgSuccess).catch(searchImgErorr)
}
function searchImgSuccess(data) {
   
  onCreateImgList(data);
    
}


function searchImgErorr() {
   console.log('не работает')
}
function onCreateImgList(data) {
 
    const markup = data
        .map(data => {
            return `
            <span>${data.tags}</span>
            `
        })
        .join('');
    refs.galerryList.innerHTML = markup;
    
};
