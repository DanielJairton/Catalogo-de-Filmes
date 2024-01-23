import { useState, useEffect } from "react";
import { FaStar, FaFireAlt } from "react-icons/fa";

import MovieCard from "../components/MovieCard";
import TopMovies from "../components/TopMovies";

import './MoviesGrid.css'

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
    //Mostrar filmes populares
    const [popularMovies, setPopularMovies] = useState([])
    
    const getPopularMovies = async (url) => {

        const resPopularMovies = await fetch(url);
        const dataPopularMovies = await resPopularMovies.json();

        setPopularMovies(dataPopularMovies.results);
    };

    useEffect(() => {
        const popularURL = `${moviesURL}popular?language=pt-BR&${apiKey}`;

        console.log("Top Movies URL: " + popularURL);
        getPopularMovies(popularURL);
    }, [])

    return (
        <>
        {/* Filmes populares */}
        <div className="container" >
            <h2 className="title"> <FaFireAlt /> Populares</h2>
            <div className="movies-container">
                {popularMovies.length === 0 && <p>Carregando...</p> }
                {popularMovies.length > 0 && popularMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>

        <TopMovies />
        </>
    )
}

export default Home;