import {useEffect, useState} from 'react';
import type {Movie} from '../../core/entities/movie.entity';
import * as UseCase from '../../core/use-cases';
import {movieDBAdapter} from '../../adapters/movieDB.adapter';

let popularPageNumber = 1;

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const nowPlayingPromise = UseCase.moviesNowPlayingUseCase(movieDBAdapter);
    const popularPromise = UseCase.moviesPopularUseCase(movieDBAdapter);
    const topRatedPromise = UseCase.moviesTopRatedUseCase(movieDBAdapter);
    const upcomingPromise = UseCase.moviesUpComingUseCase(movieDBAdapter);

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
    setIsLoading(false);
  };

  const popularNextPage = async () => {
    popularPageNumber++;
    const newPopularMovies = await UseCase.moviesPopularUseCase(
      movieDBAdapter,
      {
        page: popularPageNumber,
      },
    );
    // setPopular([...popular, ...newPopularMovies]);
    // evitar que se repitar el id
    setPopular((prev) => {
      return [...new Set([...prev, ...newPopularMovies])];
    });
   
  };

  return {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upcoming,
    popularNextPage,
  };
};
