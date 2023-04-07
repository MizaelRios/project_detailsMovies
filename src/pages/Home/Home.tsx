import Caurosel from "../../components/Caurosel";
import "../Home/Home.css";

const Home = () => {
    return (
        <div className='home'>
            <div>
                <div className='home-content'>
                    <h1>Filmes, séries e TV</h1>
                    <hr />
                    <p>Conheça todos os detalhes sobre seus filmes favoritos.</p>
                </div>
            </div>
            <Caurosel />
        </div>
    );
};

export default Home;