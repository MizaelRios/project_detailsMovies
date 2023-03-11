import { IMovie, Result } from "../interfaces";
import { Api } from "../providers";

const getTopMovies = () => Api.get<any[]>(`/3/movie/top_rated?${import.meta.env.VITE_API_KEY}&language=pt-BR`);

export const MovieService = {
    getTopMovies
}