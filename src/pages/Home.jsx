import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { FaStar } from "react-icons/fa";

import './MoviesGrid.css'

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
    //Mostrar os filmes melhor avaliados
    const [topMovies, setTopMovies] = useState([])
    
    const getTopRatedMovies = async (url) => {

        const resTopMovies = await fetch(url);
        const dataTopMovies = await resTopMovies.json();

        setTopMovies(dataTopMovies.results);
    };

    useEffect(() => {
        const topRatedUrl = `${moviesURL}top_rated?language=pt-BR&${apiKey}`;

        console.log("Top Movies URL: " + topRatedUrl);
        getTopRatedMovies(topRatedUrl);


        /*const popularURL = `${moviesURL}popular?language=pt-BR&${apiKey}`;
        console.log("Popular Movies URL: " + popularURL);
        getTopRatedMovies(popularURL);*/
    }, [])

    //Mostrar filmes populares
    const [popularMovies, setPopularMovies] = useState([])
    
    const getPopularMovies = async (url) => {

        const resPopularMovies = await fetch(url);
        const dataPopularMovies = await resPopularMovies.json();

        setPopularMovies(dataPopularMovies.results);
    };

    /*useEffect(() => {
        const popularURL = `${moviesURL}popular?language=pt-BR&${apiKey}`;

        console.log("Top Movies URL: " + popularURL);
        getTopRatedMovies(popularURL);
    }, [])*/

    return (
        <>
        {/* Filmes melhores avaliados */}
        <div className="container" >
            <h2 className="title"><FaStar /> Melhores filmes</h2>
            <div className="movies-container">
                {topMovies.length === 0 && <p>Carregando...</p> }
                {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>

        {/* Filmes populares */}
        <div className="container" >
            <h2 className="title"> Populares</h2>
            <div className="movies-container">
                {popularMovies.length === 0 && <p>Carregando...</p> }
                {popularMovies.length > 0 && popularMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
        </>
    )
}

export default Home;