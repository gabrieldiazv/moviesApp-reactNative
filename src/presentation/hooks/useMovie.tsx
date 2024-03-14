import {useEffect, useState} from 'react';
import * as CaseUse from '../../core/use-cases/index';
import { movieDBAdapter } from '../../adapters/movieDB.adapter';
import { FullMovie } from '../../core/entities/movie.entity';
import { Cast } from '../../core/entities/cast.entity';

export const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<FullMovie>();
  const [cast, setCast] = useState<Cast[]>();

  useEffect(() => {
    loadMovie();
  }, [movieId]);

  const loadMovie = async () => {
    setIsLoading(true);
    const fullMoviePromise =  CaseUse.getMovieByIdUseCase(movieDBAdapter, movieId);
    const castPromise = CaseUse.getMovieCastUseCase(movieDBAdapter, movieId);

    const [movie, cast] = await Promise.all([fullMoviePromise, castPromise]);
    setMovie(movie);
    setCast(cast);
    setIsLoading(false);
      
  };

  return {
    isLoading,
    movie,
    cast,
  };
};
