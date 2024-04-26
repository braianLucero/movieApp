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

// Este código es un hook personalizado de React llamado useMovies, que se encarga de manejar el estado de una lista de películas en diferentes categorías (nowPlaying, popular, topRated, upcoming) y de cargar los datos iniciales de esas listas utilizando casos de uso definidos en la carpeta core/use-cases. Aquí tienes una explicación general de cómo funciona:

//Importaciones: Se importan las funciones useEffect y useState de React, así como el tipo Movie desde un archivo que contiene la definición de la entidad Movie y las funciones de casos de uso (UseCases) necesarias para obtener los datos de las películas desde una API externa.
//Estado inicial: Se inicializan los estados isLoading (para indicar si se están cargando los datos) y los estados para las diferentes categorías de películas (nowPlaying, popular, topRated, upcoming).
//Hook useEffect: Se utiliza useEffect con un array de dependencias vacío para ejecutar la función initialLoader una vez, al momento de montar el componente.
//Función initialLoader: Esta función se encarga de cargar los datos iniciales de las películas utilizando los casos de uso correspondientes (moviesNowPlayingUseCase, moviesPopularUseCase, moviesTopRatedUseCase, moviesUpcomingUseCase) y el adaptador movieDBFetcher que se encarga de hacer las solicitudes a la API de películas (en este caso, parece ser la API de The Movie Database).
//Promesas y Promise.all: Se utilizan promesas para obtener los datos de las películas de cada categoría de manera asíncrona, y Promise.all para esperar a que todas las promesas se resuelvan antes de actualizar el estado con los datos obtenidos.
//Actualización del estado: Una vez que se obtienen los datos de todas las categorías, se actualizan los estados correspondientes (nowPlaying, popular, topRated, upcoming) con los datos obtenidos y se cambia el estado isLoading a false para indicar que la carga ha finalizado.
//Retorno del hook: Se devuelve un objeto con los estados isLoading, nowPlaying, popular, topRated, upcoming, que pueden ser utilizados en el componente que llama a este hook para mostrar la información de las películas y gestionar el estado de carga.
