import { HttpAdapter } from "../../../adapters/http/http.adapter";
import { MovieDBMoviesResponse } from "../../../infrastructure";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import type { Movie } from "../../entities/movie.entity";


export const moviesTopRatedUseCase = async (fetchet:HttpAdapter):Promise<Movie[]>=>{
    try {
        const topRated = await fetchet.get<MovieDBMoviesResponse>('/top_rated');
        return topRated.results.map(result => MovieMapper.fromMovieDBResultToEntity(result)); //);
    } catch (error) {
        console.log(error);
        throw new Error('Error fetching movies top rated');
    }

}