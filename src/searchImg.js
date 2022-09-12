

import axios from 'axios';
import { getRefs } from './getRefs';
const refs = getRefs();
const URL = 'https://pixabay.com/api/'



export
  async function searchImg(name) {

 try {
   const response = await axios.get(URL, {
     params: {
       key: '29851600-77a83c2f849f78e300f57ecf1',
       q: `${name}`,
       image_type: 'photo',
       orientation: 'horizontal',
       safesearch: true
     }

   }).then(onCreateImgList(data));
    // return response.json();
   
      
  } catch (error) {
   
  }
}





//     function searchImg(name) {
//     return fetch(`${URL}?key=29851600-77a83c2f849f78e300f57ecf1&q=${name}`)
//         .then(response => {
//     if (!response.ok || response.status === 404) {
//       throw new Error(response.status);
//           }
         
         
//           return response.json();
          
//   })
            

// }

 
  
// export async function searchImg(inputValue) {
   
//   try {
//     const response = await axios.get(URL, {
//       params:{
//       key: '29851600-77a83c2f849f78e300f57ecf1',
//         q: `${inputValue}`,
//       image_type:'photo',
//         orientation:'horizontal',
//         safesearch:true
//       }

//     });
//     return response.json();
   
      
//   } catch (error) {
//     // console.error(error);
//   }
// }
// searchImg()





