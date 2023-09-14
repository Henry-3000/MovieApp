import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom'
import axios from "axios";
import './App.css';
import './index.css'
import Header from './Header'
import Footer from "./footer";

const LandingPage = () => {
    const [movieData, setMovieData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getMovieData = async () => {
            try{
                const apiKey = "e241f338347529bcd4ccb2c30e035bde"
                const response = await axios.get(
                `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`);
                const PopularMovies = response.data.results
                //const lengthArr = PopularMovies.length;
                const randomMovies = PopularMovies.slice(0, 10)
                setLoading(false);
                setMovieData(randomMovies);

            } catch (error) {
                console.error("Error fetching random movie:", error);
                setLoading(false)
            }
        };

        getMovieData();
    }, []);

    return(
        <div className="fluid-container">
                <Header/>
                <nav className="navbar bg-transparent" style={{marginTop: "20px", marginLeft:"80px"}}>
                    <span className="navbar-brand mb-0 h1">Featured Movies</span>
                </nav>
                <div className="movie-grid" style={{marginLeft:"0px", paddingLeft:"0px"}}>
                        {loading ? (
                            <p>Loading...</p>
                        ): (
                        movieData.map((movie) => (
                                <Link to={`/movies/${movie.id}`} key={movie.id}>
                                                <div key={movie.id} className="movie-card" style={{width: '18rem', marginTop: "20px", marginLeft:"20px"}}>
                                                    <img className="movie-poster" src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title}/>
                                                    <div className="movie-details">
                                                        <h5 className="movie-title">{movie.title || movie.name}</h5>
                                                        <p className="movie-release-date">{movie.release_date || movie.first_air_date}</p>
                                                    </div>
                                                </div>
                                </Link>
                        ))
                        )}
                </div>
            <Footer/>
        </div>
    );
}

export default LandingPage;