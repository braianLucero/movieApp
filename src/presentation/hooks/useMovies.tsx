/* eslint-disable @typescript-eslint/no-unused-vars */
import {useEffect, useState} from 'react';
import type {Movie} from '../../core/entities/movie.entiti';
import * as UseCases from '../../core/use-cases';
import {movieDBFetcher} from '../../config/adapters/movieDb.adapter';

export const useMovies = () => {
  const [isLoading, setIsloading] = useState(true);
  const [nowPlaying, seNowPlaying] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoader();
  }, []);

  const initialLoader = async () => {
    const nowPlayingMovies = await UseCases.moviesNowPlayingUseCase(
      movieDBFetcher,
    );
  };

  return {
    isLoading,
    nowPlaying,
  };
};
