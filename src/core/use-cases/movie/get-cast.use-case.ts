import { HttpAdapter } from "../../../adapters/http/http.adapter";
import { MovieDBCastResponse } from "../../../infrastructure";
import { CastMapper } from "../../../infrastructure/mappers/cast.mapper";

export const getMovieCastUseCase = async (fetcher: HttpAdapter, movieId: number) => {
    try {

        const { cast } = await fetcher.get<MovieDBCastResponse>(`/${movieId}/credits`)
        return cast.map((actor) => CastMapper.fromMovieDBCastToEntity(actor))

    } catch (error) {
        throw new Error(`Error getting movie cast`)
    }
}