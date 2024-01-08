import axios from 'axios';

const API_KEY = '6208dbf494b073582cbec032d91cb9c8';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  const response = await axios.get(`/trending/all/day?api_key=${API_KEY}`);
  return response.data;
};

export const searchMovies = async searchQuery => {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${searchQuery}`
  );
  return response.data;
};

export const getMovieDetails = async movieId => {
  const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
};

export const getMovieCredits = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return response.data;
};

export const getMovieReviews = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return response.data;
};
