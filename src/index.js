

import Notiflix, { Notify } from 'notiflix';
// import './fetchCountries'
import { searchImg } from './searchImg';
import { getRefs } from './getRefs';
// import axios from 'axios';

const refs = getRefs();
refs.form.addEventListener('input', onSearchInput);
// refs.form.addEventListener('submit', onSearchInput);
function onSearchInput(evt) {
    const inputValue = evt.target.value.trim();
   
    if (!inputValue) {
         return 
    }
   
    console.log('input', inputValue)
    console.log( )
    
    searchImg(inputValue).then(onSucsess).catch('fuck')
}

function onSucsess(data) {
    create(data);
}
function create(data) {
    const markup = data
        .map(data => {
            
            return `
            <div class="photo-card">
  <img src="'${data.largeImageURL}'" alt="${data.tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes: '${data.likes}'</b>
    </p>
    <p class="info-item">
      <b>Views:'${data.views}' </b>
    </p>
    <p class="info-item">
      <b>Comments'${data.comments}'</b>
    </p>
    <p class="info-item">
      <b>Downloads '${data.downloads}'</b>
    </p>
  </div>
</div>`
        })
        .join('');
    refs.fg.innerHTML = markup;
    console.log('kbjhbbhjhkbjhk')
}

// function onSearchInput(evt) {
//     const inputValue = evt.target.value.trim();
//     if (!inputValue) {
// refs.countryList.innerHTML = '';
//         refs.countryInfo.innerHTML = '';
        
//         return
//     }console.log(inputValue)
//     searchImg(inputValue).then(onFetchSuccess).catch()
// }
// function onFetchSuccess(data) {
     
        
//         onCreateCountryList(data)
     

    
       
// }
// function onCreateCountryList(data) {
//     const markup = data
//         .map(data => {
//             return `<img src= '${data.webformatURL} >
//             <span>${data.tags}</span>`
//         })
//         .join('');
//     refs.fg.innerHTML = markup;
//     console.log(data)

// function onFetchErorr() {
//     Notify.failure("Oops, there is no country with that name")
// }

// };
// function onCreateCountryInfo(data) {
//     const markup= data
//         .map(data => {
//             return `<div class="card-svg" >
//             <img src= '${data.flags.png} ' width="320">
//             <h1>Country: ${data.name.official}</h1>
//             <h2>Capital: ${data.capital}</h2>
//             <span>Population: ${data.population}</span>
//             <span>languages: ${Object.values(data.languages)}</span></div>
//             `
//         })
//             .join('');
//     refs.countryInfo.innerHTML = markup
    
// };