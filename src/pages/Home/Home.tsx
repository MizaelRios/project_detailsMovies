import { useEffect, useState } from "react";
import Caurosel from "../../components/Caurosel";
import { IMovie } from "../../interfaces";
import { MovieService } from "../../services/MovieService";
import "../Home/Home.css";

const Home = () => {
    const [movies, setMovies] = useState<IMovie>();

    useEffect(() => {
        (async () => {
            const { status, data } = await MovieService.getTopMovies();
            setMovies(data);
            if (status === 200)
                console.log(data);
        })();
    }, [])
    return (
        <div className='home'>
            <div>
                <div className='home-content'>
                    <h1>Filmes, séries e TV</h1>
                    <hr />
                    <p>Detalhes sobre seus filmes favoritos.</p>
                </div>
            </div>
        <Caurosel/>
        </div>
    );
};

export default Home;