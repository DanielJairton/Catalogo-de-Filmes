import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import MovieCard from "./MovieCard";

import '../pages/MoviesGrid.css'

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const TopMovies = () => {
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
    }, [])

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
        </>
      )
  }
  
  export default TopMovies