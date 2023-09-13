import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import './App.css'
import axios from 'axios';

const MovieDetails = () => {
    const {id} = useParams();
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
        const getMovieDetails = async () => {
            try{
                const apiKey = "e241f338347529bcd4ccb2c30e035bde"
                const response = await axios.get(
                `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`);
                const movieGeneral = response.data;
                setMovieDetails(movieGeneral);

            } catch (error) {
                console.error("Error fetching movie detail:", error);
            }
        };

        getMovieDetails();

    }, [id]);


    if(!movieDetails){
        return(
            <div className="fluid-container m-4 p-4 bg-primary" style={{width: "200px", borderRadius:"20px"}}>
                 <p className="m-4 text-white">Loading <i className="fa fa-hourglass-start"></i></p>
            </div>
           
        ) 
    }


    return(
        <div className="fluid-container m-4 p-4 App" style={{backgroundColor:"gray"}}>
            <h1 data-testid="movie-title">{movieDetails.title || movieDetails.original_name}</h1>
            <p data-testid="movie-release-date">{movieDetails.release_date || movieDetails.first_air_date}</p>
            <p data-testid="movie-runtime">{movieDetails.runtime || "0"} minutes</p>
            <p data-testid="movie-overview">{movieDetails.overview}</p>
        </div>
    );
}

export default  MovieDetails;