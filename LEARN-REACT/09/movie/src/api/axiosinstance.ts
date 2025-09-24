import axios from 'axios';

const API_KEY = 'ff72d53733a85f9e692d11ded5a89ec1';

export const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: API_KEY,
    language: 'ko-KR',
  },
});
