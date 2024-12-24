import axios from "axios";

const API_KEY = "EfRzRy1zLJ8fhBAdhkwX1z-xmM9Ij80iydVzG0zm98Y";
axios.defaults.baseURL = "https://api.unsplash.com/";

const fetchImg = async (query, per_page = 10, page = 1) => {
  const params = {
    headers: {
      Authorization: `Client-ID ${API_KEY}`,
    },
    params: {
      per_page,
      page,
      query,
    },
  };
  const response = await axios(`search/photos?`, params);
  // console.log(response.data.results);
  return response.data;
};

export default fetchImg;
