import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BsGraphUp, BsWallet2, BsHourglass, BsFillFileEarmarkTextFill, BsHourglassSplit, BsFillCalendarEventFill
} from 'react-icons/bs';

import MovieCard from "../components/MovieCard";

import './Movie.css';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState(null)

    const getMovie = async(url) => {
        const res = await fetch(url);
        const data = await res.json();

        // console.log(data);
        setMovie(data);
    }

    const formatCurrency = (number) => {
        return number.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })
    }

    useEffect(() => {
        const movieURL = `${moviesURL}${id}?language=pt-BR&region=BR&${apiKey}`;
        // console.log("Movie URL: " + movieURL);
        getMovie(movieURL);
    }, [])

    return (
        <div className="movie-page">
            {movie && (<>
                <MovieCard movie={movie} showLink={false} />
                <p className="tagline">{movie.tagline}</p>

                <div className="info">
                    <h3 className="subtitulo">
                        <BsFillCalendarEventFill /> Laçamento:
                    </h3>
                    <input type="date" disabled value={movie.release_date} className="dateLancamento"/>
                </div>

                <div className="info">
                    <h3 className="subtitulo" >
                        <BsWallet2/> Orçamento:
                    </h3>
                    <p>{formatCurrency(movie.budget)}</p>
                </div>

                <div className="info">
                    <h3 className="subtitulo">
                        <BsGraphUp/> Receita:
                    </h3>
                    <p>{formatCurrency(movie.revenue)}</p>
                </div>

                <div className="info">
                    <h3 className="subtitulo">
                        <BsHourglassSplit/> Duração:
                    </h3>
                    <p>{movie.runtime} Minutos</p>
                </div>

                <div className="info description">
                    <h3 className="subtitulo">
                        <BsFillFileEarmarkTextFill/> Descrição:
                    </h3>
                    <p>{movie.overview}</p>
                </div>
                
            </>
            )}
        </div>
    )
}

export default Movie;