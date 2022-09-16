

import { Notify } from 'notiflix';
import { lightbox } from './lightBox';
import "simplelightbox/dist/simple-lightbox.min.css";
import './css/style.css';

import { searchImg } from './searchImg'; 
import { getRefs } from './getRefs';
import { formReset, galleryReset } from './clearFunction';
import {
  galleryReset,
  formReset
} from './clearFunction';
import { onCreateImgList } from './onCreateImgList';
const refs = getRefs();

refs.form.addEventListener('submit', onSearchInput);
refs.loadMoreBtn.addEventListener('click',onLoadMore)


function onSearchInput(evt) {
  evt.preventDefault();
  const inputValue = evt.currentTarget.elements.searchQuery.value.trim();
    if (!inputValue) {
      return
    }
  searchImg(inputValue).then(searchImgSuccess);
  formReset()
}




function searchImgSuccess({hits}) {
    if (hits.length === 0) {
      Notify.warning(
        "Sorry, there are no images matching your search query. Please try again.");  
 }
  galleryReset()
  onCreateImgList(hits);
  
    
}


function onLoadMore() {
 
}



