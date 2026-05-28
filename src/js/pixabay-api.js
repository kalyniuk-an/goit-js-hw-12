import axios from 'axios';

export async function getImagesByQuery(query, page = 1) {
  const searchParam = new URLSearchParams({
    key: '56012300-f086c257a570084238c9733eb',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 15,
  });
  const URL = `https://pixabay.com/api/`;

  return await (await axios.get(URL, { params: searchParam })).data;
   
  // const data = await axios.get(URL, { params: searchParam });
  //   return data.data;
  
}

