import {AxiosAdapter} from './http/axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '731f24a408a70c6bd83f9cb1cf12d64e',
    lenguage: 'es',
  },
});
