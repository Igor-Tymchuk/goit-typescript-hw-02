import axios from "axios";

const API_KEY: string = "EfRzRy1zLJ8fhBAdhkwX1z-xmM9Ij80iydVzG0zm98Y";
axios.defaults.baseURL = "https://api.unsplash.com/";

interface Params {
  headers: { Authorization: string };
  params: {
    per_page: number;
    page: number;
    query: string;
  };
}

const fetchImg = async <T>(
  query: string,
  per_page: number = 10,
  page: number = 1
): Promise<T> => {
  const params: Params = {
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
  const data: T = response.data;
  return data;
};

export default fetchImg;