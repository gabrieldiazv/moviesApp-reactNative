import { HttpAdapter } from "../../../adapters/http/http.adapter";
import { NowPlayingResponse } from "../../../infrastructure";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Movie } from "../../entities/movie.entity";

export const moviesUpComingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
    try {
        const upComing = await fetcher.get<NowPlayingResponse>('/upcoming');
        return upComing.results.map(result => MovieMapper.fromMovieDBResultToEntity(result));
    } catch (error) {
        console.log(error);
        throw new Error('Error fetching movies up coming');
    }

}