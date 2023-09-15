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
        <>
        <div className="fluid-container App border" style={{borderRadius: "10px"}}>
        <div className="d-flex flex-shrink-0 p-3 bg-light" style={{width: "280px"}}>
        <ul className="nav nav-pills flex-column mb-auto" style={{marginTop:"80px"}}>
        <li className="nav-item">
            <button href="" class="nav-link text-black p-2" aria-current="page">
                <i class="fa fa-home" aria-hidden="true"> </i>
                <span className="p-4">Home</span>
            </button>
        </li>
        <hr/>
        <li>
            <button className="nav-link text-dark p-2">
            <i class="fa fa-file-movie-o" aria-hidden="true"></i>
            <span className="p-4">Movies</span>
            </button>
        </li>
        <hr/>
        <li>
            <button href="" className="nav-link link-dark p-2">
            <i class="fa fa-tv" aria-hidden="true"></i>
            <span className="p-4">Tv Series</span>
            </button>
        </li>
        <hr/>
        <li>
            <button href="" className="nav-link link-dark p-2">
            <i class="fa fa-calendar" aria-hidden="true"></i>
            <span className="p-4">Upcoming</span>
            </button>
        </li>
        <hr/>
        <li>
            <div className="container border mt-4 p-3" style={{width:"250px",height:"220px", backgroundColor:"pink",  borderRadius:"20px", fontSize:"15px", fontWeight:"bold"}}>
                <p>Play movies quizes<br/>and earn<br/>free tickets</p>
                <p>50k people are playing now</p>
                <br/>
                <p className="btn p-2 border-danger" style={{color:"deeppink", borderRadius:"20px",fontWeight:"bold"}}>Start playing</p>
            </div>
        </li>
        <li>
        <button href="" className="nav-link link-dark p-2">
            <i class="fa fa-mobile" aria-hidden="true"></i>
            <span className="p-4">Logout</span>
            </button>
        </li>
        </ul>
        <div className="" style={{marginLeft:"50px"}}>
                <img data-testid="movie-poster-path" src={`https://image.tmdb.org/t/p/w300/${movieDetails.poster_path}`} style={{height:"400px", width:"700px", padding:"0", margin:"0"}} alt="img1"/>
                <h1 data-testid="movie-title">{movieDetails.title || movieDetails.original_name}</h1>
                <p data-testid="movie-release-date">{movieDetails.release_date || movieDetails.first_air_date}</p>
                <p data-testid="movie-runtime">{movieDetails.runtime || "0"} minutes</p>
                <p data-testid="movie-overview">{movieDetails.overview}</p>
            </div>
                
        </div>
  </div>  
            
        </>
       
    );
}

export default  MovieDetails;