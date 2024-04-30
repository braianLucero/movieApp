import {useEffect, useState} from 'react';

export const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    loadMovie();
  }, []);

  const loadMovie = () => {};

  return {
    isLoading,
  };
};
