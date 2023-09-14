// eslint-disable-next-line
import React from "react";
import img from './img/wallpaper.jpg'
import movieIcon from './img/movieIcon.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import imdb from './img/imdb.png'
import tomato from './img/tomato.png'

const Header = () => {
    return (
        <div className="fluid-container">
            <div className="border">
                <div className="card bg-dark text-white" style={{borderRadius: '0px'}}>
                    <img className="card-img" src={img} width="1500px" height="600px" alt="Card"/>
                    <div className="card-img-overlay">
                        <div className="row" style={{marginLeft: 60+'px', marginRight:60+'px'}}>
                            <div className="col-sm-3">
                                <span><img src={movieIcon} width={50+'px'} alt='card' height={50 + 'px'}/></span><h3 style={{display: 'inline'}}>MovieBox</h3>
                            </div>
                            <div className="col-md-6">
                                <form className="form-inline">
                                <span>
                                  <input className="form-control bg-transparent" style={{height: 35+'px', color:"white"}} type="text" placeholder="What do you want to watch?" />
                                  <button className="btn btn-outline-success" type="submit">Search</button>
                                </span>
                                </form>
                            </div>
                            <div className="col-sm-3" style={{textAlign: 'end'}}>
                                <p>Sign In <span ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.59998 8.40001C3.59998 7.73727 4.13723 7.20001 4.79998 7.20001H19.2C19.8627 7.20001 20.4 7.73727 20.4 8.40001C20.4 9.06275 19.8627 9.60001 19.2 9.60001H4.79998C4.13723 9.60001 3.59998 9.06275 3.59998 8.40001Z" fill="white"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.59998 15.6C3.59998 14.9373 4.13723 14.4 4.79998 14.4H19.2C19.8627 14.4 20.4 14.9373 20.4 15.6C20.4 16.2628 19.8627 16.8 19.2 16.8H4.79998C4.13723 16.8 3.59998 16.2628 3.59998 15.6Z" fill="white"/>
                                </svg></span>
                                </p>
                            </div>
                        </div>
                        <div className="jTagContainer">
                        <div className="container">
                            <h2 className="jTag">John Wick 3 : </h2>
                            <h2 className="jTag">Parabellum</h2>
                        </div>
                        <div class="container">
                            <img src={imdb} width="35px" height="17px" alt="img"/><span className="ratingTag">86.0/100</span> <span className="ratingTag" style={{marginLeft: 30+'px'}}><img src={tomato} height="17px" width="16px" alt="tomato"/></span><span className="ratingTag" style={{marginLeft: 15+'px'}}>97%</span>
                        </div>
                        <div className="container" style={{width: 302+'px', marginTop: '18px', marginLeft: 0+'px'}}>
                            <span className="synopsis1">John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</span>
                        </div>
                        <div className="container rose" style={{width:"200px", marginLeft: 10+"px", marginTop:10+"px"}}>
                            <button className="btn rose">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.5547 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z" fill="white"/></svg>
                            <span className="trailerLink">Watch trailer</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}


export default Header;