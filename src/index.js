

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
import { scroll } from './scroll';
const refs = getRefs();

refs.form.addEventListener('submit', onSearchInput);

let page = 1;
let currentHits = 0;
let inputValue = '';
refs.loadMoreBtn.classList.add('is-hidden');
 
async function onSearchInput(evt) {
  evt.preventDefault();
  inputValue = evt.currentTarget.elements.searchQuery.value.trim();
  page = 1;
  if (!inputValue) {
    formReset()
      return
  }
  const response = await searchImg(inputValue, page);
  console.log(response)
  currentHits = response.hits.length;

  if (response.totalHits > 40) {
    refs.loadMoreBtn.classList.remove('is-hidden');
  } else {
    refs.loadMoreBtn.classList.add('is-hidden');
  }
  if (response.totalHits > 0) {
    Notify.success(`Hooray! We found ${response.totalHits} images.`);
    formReset();
    onCreateImgList(response.hits);
    scroll(-100);
  }
  if (response.totalHits === 0) {
    formReset();
    Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
    refs.loadMoreBtn.classList.add('is-hidden');
  }
}

refs.loadMoreBtn.addEventListener('click',onMore)

async function onMore() {
  page += 1;

  const response = await searchImg(inputValue, page);
  onCreateImgList(response.hits);
  
  currentHits += response.hits.length;

  scroll(2);

  if (currentHits >= response.totalHits) {
    refs.loadMoreBtn.classList.add('is-hidden');
    Notify.info("We're sorry, but you've reached the end of search results.");
  }
}

