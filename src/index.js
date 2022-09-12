


import Notiflix, { Notify } from 'notiflix';
import { searchImg } from './searchImg'; 
import { getRefs } from './getRefs';




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
    searchImg(inputValue)
}
function searchImgSuccess(data) {
   
  onCreateImgList(data);
    
}


function searchImgErorr() {
   console.log('не работает')
}
function onCreateImgList(data) {
  console.log(data);
    const markup = data
        .map(data => {
            return `
            <span>${data.tags}</span>
            </li>`
        })
        .join('');
    refs.galerryList.innerHTML = markup;
    
};
