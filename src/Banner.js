import { useState ,useEffect } from 'react';
import axios from './Axios';
import requests from './Requests';
import './Banner.css';


function Banner() {
    // state that keeps track of the movie
    const [movie, setMovie] = useState([]);
    const [genre, setGenre] = useState([]);

    useEffect(() => {
        // function that makes a request to the movie database and gets a random movie
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            // set the movie state to a random movie from the list of movies
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();

        // async function fetchGenre() {
        //     const request = await axios.get(requests.fetchGenres);
        //     setGenre(
        //         request.data
        //     );
        //     return request;
        // }
        // fetchGenre();
        
    },[]);

    console.log(movie);

    // function that truncates(shortens) the description to 150 characters and adds '...' to the end
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n-1) + '...' : str;
    }

    return (
        <header className='banner'
        style={{
            backgroundSize: "cover",
            backgroundImage: "url('https://image.tmdb.org/t/p/original/" + movie?.backdrop_path + "')",
            backgroundPosition: "center center",
        }}
        >
            <div className='banner__contents'>

                {/* title */}
                <h1 className='banner__title'>{movie?.name || movie?.title|| movie?.original_title}</h1>

                {/* div with 2 buttons */}
                <div className='banner__buttons'>
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My List</button>
                </div>

                {/* description */}
                <h1 className='banner__description'>
                    {truncate(movie?.overview,500)}
                
                </h1>
            </div>

            <div className='banner--fadeBottom'/>
        </header>
    )
}


export default Banner;

