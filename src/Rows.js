import { useState, React, useEffect } from 'react';
import axios from './Axios';
import './Rows.css';

//The row component is going to take in a title, a fetchUrl, and an isLargeRow prop from the HomeScreen component 

function Rows({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/"
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    console.log(movies);


    return (
        <div className="row">
            <h2>
                {title}
            </h2>
            <div className="row__posters">
                {movies.map(movie => (
                    
                    // making sure that the movie has a poster path or a backdrop path 
                    ((isLargeRow && movie.poster_path) ||
                    (!isLargeRow && movie.backdrop_path)) && (
                        
                        // if the movie is large row and the movie has a poster path, then use the poster path, otherwise use the backdrop path 
                        <img className={`row__poster ${isLargeRow && "row__posterLarge"}`} key={movie.id}
                            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                    ))
                )
                }
            </div>
        </div>
    )
}

export default Rows;