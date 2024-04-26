import {useEffect, useState} from 'react';
import type {Movie} from '../../core/entities/movie.entiti';
import * as UseCases from '../../core/use-cases';
import {movieDBFetcher} from '../../config/adapters/movieDb.adapter';

export const useMovies = () => {
  const [isLoading, setIsloading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoader();
  }, []);

  const initialLoader = async () => {
    const nowPlayingPromise = await UseCases.moviesNowPlayingUseCase(
      movieDBFetcher,
    );
    const popularPromise = await UseCases.moviesPopularUseCase(movieDBFetcher);
    const topRatedPromise = await UseCases.moviesTopRatedUseCase(
      movieDBFetcher,
    );
    const upcomingPromise = await UseCases.moviesUpcomingUseCase(
      movieDBFetcher,
    );

    const [nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies] =
      await Promise.all([
        nowPlayingPromise,
        popularPromise,
        topRatedPromise,
        upcomingPromise,
      ]);

    setNowPlaying(nowPlayingMovies);
    setPopular(popularMovies);
    setTopRated(topRatedMovies);
    setUpcoming(upcomingMovies);

    setIsloading(false);
  };

  return {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upcoming,
  };
};
