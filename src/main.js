import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';

const searchForm = document.querySelector('.form');
let currentPage = 1;

searchForm.addEventListener('submit', handleSearch);
  
async function handleSearch(event) {
  event.preventDefault();

  const query = event.target.elements["search-text"].value.trim();

  console.log('Search query:', query);

  if (!query) {
    iziToast.info({
      title: 'Info',
      message: 'Please enter a search query.',
      position: 'topRight',
    });
    return;
  }
  
  currentPage = 1;

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query, currentPage);
        if (data.hits.length === 0) {
          iziToast.error({
            title: 'Error',
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
          });
          return;
        }
    
        createGallery(data.hits);
      
  } catch(error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
    });
    
  } finally {
      hideLoader();
    };
  
  searchForm.reset();
};