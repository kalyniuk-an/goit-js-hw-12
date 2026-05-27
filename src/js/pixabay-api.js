import axios from 'axios';

export default function getImagesByQuery(query) {
  const searchParam = new URLSearchParams({
    key: '56012300-f086c257a570084238c9733eb',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const URL = `https://pixabay.com/api/`;

  return axios.get(URL, { params: searchParam })
    .then(response => response.data);
}

