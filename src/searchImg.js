

import axios from 'axios';
import { getRefs } from './getRefs';
const refs = getRefs();
const URL = 'https://pixabay.com/api/'

const axios = require('axios').default;

 
  
export async function searchImg(inputValue) {
   
  try {
    const response = await axios.get(URL, {
      params:{
      key: '29851600-77a83c2f849f78e300f57ecf1',
        q: `${inputValue}`,
      image_type:'photo',
        orientation:'horizontal',
        safesearch:true
      }
    });
    // return response.json();
   
      
  } catch (error) {
    // console.error(error);
  }
}
searchImg()





