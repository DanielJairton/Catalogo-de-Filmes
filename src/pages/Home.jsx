import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { FaStar } from "react-icons/fa";

import './MoviesGrid.css'

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
    const [topMovies, setTopMovies] = useState([])
    
    const getTopRatedMovies = async (url) => {

        const res = await fetch(url);
        const data = await res.json();

        setTopMovies(data.results);
    };

    useEffect(() => {
        const topRatedUrl = `${moviesURL}top_rated?language=pt-BR&${apiKey}`;

        // console.log("Top Movies URL: " + topRatedUrl);
        getTopRatedMovies(topRatedUrl);
    }, [])

    /*useEffect(() => {
        const popularURL = `${moviesURL}popular?language=pt-BR&${apiKey}`;

        console.log("Top Movies URL: " + popularURL);
        getTopRatedMovies(popularURL);
    }, [])*/

    return (
        <>
        <div className="container" >
            <h2 className="title"><FaStar /> Melhores filmes</h2>
            <div className="movies-container">
                {topMovies.length === 0 && <p>Carregando...</p> }
                {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>

        <div className="container" >
            <h2 className="title"> Populares</h2>
            <div className="movies-container">
                {topMovies.length === 0 && <p>Carregando...</p> }
                {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
        </>
    )
}

export default Home;