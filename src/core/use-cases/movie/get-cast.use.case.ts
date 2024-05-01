import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieDBMoviesResponse} from '../../../infrastrustura/interfaces/movie-db.responses';

export const getMovieCastUseCase = async (
  fetcher: HttpAdapter,
  movieId: number,
) => {
  try {
    const {cast} = await fetcher.get<MovieDBMoviesResponse>(
      `/${movieId}/credits `,
    );

    const actors = cast.map(CastMapper.fromMovieDBCastToEntity);

    return actors;
  } catch (error) {
    throw new Error('CAnoot get movie cast ');
  }
};
