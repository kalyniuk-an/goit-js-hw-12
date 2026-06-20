import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from './js/render-functions.js';

const searchForm = document.querySelector('.form');
const loadMoreButton = document.querySelector('.load-more');

let currentPage = 1;
let currentQuery = '';

let totalPages; ////******* */

searchForm.addEventListener('submit', handleSearch);
loadMoreButton.addEventListener('click', handleLoadMore);

async function handleSearch(event) {
  event.preventDefault();

  currentQuery = event.target.elements["search-text"].value.trim();

  if (!currentQuery) {
    iziToast.info({
      title: 'Info',
      message: 'Please enter a search query.',
      position: 'topRight',
    });
    return;
  }
  
  currentPage = 1;
  
  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }
    
      createGallery(data.hits);
      console.log(data.totalHits);
    checkLastPage(data.totalHits, currentPage);
    totalPages = Math.ceil(data.totalHits/ 15);
    
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

async function handleLoadMore() {
  currentPage += 1;
  
  hideLoadMoreButton();
  showLoader();
  
  try {
    const data = await getImagesByQuery(currentQuery, currentPage);
    
    createGallery(data.hits);

    checkLastPage(data.totalHits, currentPage);

    scrollToNewImages();

  } catch(error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
    });
  } finally {
      hideLoader();
    };
}

function checkLastPage(totalHits, currentPage) {
  const totalPages = Math.ceil(totalHits / 15);
  if (currentPage >= totalPages) {
    hideLoadMoreButton();
      iziToast.info({
        title: 'Info',
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
  }
  else {
    showLoadMoreButton();
  }
}

function scrollToNewImages() {
  
  const galleryItem = document.querySelector('.gallery-item');
  if (!galleryItem) {
    return;
  }
  const cardHeight = galleryItem.getBoundingClientRect().height;
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth'
  });
}

function lastMessage() {
  if (currentPage === totalPages) {
    console.log('Кінець колекції');
  }
}