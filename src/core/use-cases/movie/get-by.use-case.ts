import { HttpAdapter } from "../../../adapters/http/http.adapter";
import { ResultFullMovie } from "../../../infrastructure";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { FullMovie } from "../../entities/movie.entity";

export const getMovieByIdUseCase = async (fetcher: HttpAdapter, movieId: number): Promise<FullMovie> => {
    try {
        const movie = await fetcher.get<ResultFullMovie>(movieId.toString());
        return MovieMapper.fromMovieDBToEntity(movie);

    } catch (error) {
        throw new Error(`Error getMovieByIdUseCase`);
    }
}