import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom'
import axios from "axios";
import './App.css';
import './index.css'
import imdb from './img/imdb.png'
import tomato from './img/tomato.png'
import Header from './Header'
import Footer from "./footer";
import getUtcTime from "./getUtcTime";

const LandingPage = () => {
    const [movieData, setMovieData] = useState([]);
    const [loading, setLoading] = useState(true);
    const {newDate} = getUtcTime();

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
                    <span className="justify-item-end btn btn-danger" style={{marginRight: "20px"}}>See More <i className="fa fa-angle-right" aria-hidden="true"></i></span>
                </nav>
                <div className="movie-grid" style={{marginLeft:"45px", paddingLeft:"0px"}}>
                        {loading ? (
                            <p>Loading...</p>
                        ): (
                        movieData.map((movie) => (
                                <Link to={`/movies/${movie.id}`} key={movie.id} style={{textDecoration:"none"}}>
                                                <div key={movie.id} data-testid="movie-card" className="movie-card" style={{width: '20rem', marginTop: "20px", marginLeft:"20px"}}>
                                                    <img data-testid="movie-poster" className="movie-poster" src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title}/>
                                                    <div className="movie-details">
                                                        <h5 data-testid="movie-title" className="movie-title">{movie.title || movie.name}</h5>
                                                        <p data-testid="movie-release-date" className="movie-release-date">{newDate(movie.release_date) || newDate(movie.first_air_date)}</p>
                                                        <span>
                                                            <span style={{marginRight:"20px"}}><img src={imdb} style={{width:"35px",height:"17px", marginLeft:"0", marginRight:"8px"}}  alt="imdb"/>{movie.vote_average * 10}/100</span>
                                                            <span><img src={tomato} style={{width:"20px",height:"17px", marginRight:"10px"}}  alt="imdb"/>{movie.vote_average * 10}%</span>
                                                        </span>
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