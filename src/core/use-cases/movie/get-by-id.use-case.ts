import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieMapper} from '../../../infrastrustura/mapper/movie.mapper';
import {FullMovie} from '../../entities/movie.entiti';
export const getMovieByIdUseCase = async (
  fetcher: HttpAdapter,
  movieId: number,
): Promise<FullMovies> => {
  try {
    const movie = await fetcher.get<MovieDBMovie>(`/${movieId}`);
    const fullMovie = MovieMapper.fromMovieDBResultToEntity(movie);
  } catch (error) {
    throw new Error(`Cannot get movie by id ${movieId} `);
  }
};
