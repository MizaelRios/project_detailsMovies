import { IMovie } from "../interfaces";
import { Api } from "../providers";

const getTopMovies = () => Api.get<IMovie>(`/4/list/1?${import.meta.env.VITE_API_KEY}&language=pt-BR`);

export const MovieService = {
    getTopMovies
}