import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieDBMoviesResponse} from '../../../infrastrustura/interfaces/movie-db.responses';
import {MovieMapper} from '../../../infrastrustura/mapper/movie.mapper';
import type {Movie} from '../../entities/movie.entiti';

export const moviesPopularUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const popular = await fetcher.get<MovieDBMoviesResponse>('/popular');

    return popular.results.map(MovieMapper.fromMovieDBResultToEntity());
  } catch (error) {
    throw new Error('Error fetching movies - popular');
  }
};
