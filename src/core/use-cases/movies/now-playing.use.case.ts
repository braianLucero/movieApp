import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {NowPlayingResponse} from '../../../infrastrustura/interfaces/movie-db.responses';
import {MovieMapper} from '../../../infrastrustura/mapper/movie.mapper';
import type {Movie} from '../../entities/movie.entiti';

export const moviesNowPlayingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const nowPlaying = await fetcher.get<NowPlayingResponse>('/now_playing');

    return nowPlaying.results.map(MovieMapper.fromMovieDBResultToEntity());
  } catch (error) {
    throw new Error('Error fetching movies - NowPlaying');
  }
};
