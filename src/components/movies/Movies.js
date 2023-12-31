import React, { useEffect, useState } from 'react';

import './movies.css'
import Card from '../card/Card';

const Movies = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null)
    console.log(data)
    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=158edbaf63d53e4ad7b56237b05d5776'
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNThlZGJhZjYzZDUzZTRhZDdiNTYyMzdiMDVkNTc3NiIsInN1YiI6IjY1MDBmZGZkZTBjYTdmMDEwZGVhMzM1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sG80GayNjweSDow9rjWkMTPkwF8X3OXMuit1QR3H-AY'
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                console.log(response)
                console.log(data)
                setData(data.results.slice(0,10));
            } catch (error) {
                setError(error)
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    },[]);

    return (
        
        <div className='all-mvs'>
             {error && <div>Error: {error.message}</div>}
            <div className="featured-movies">
                <p>Featured Movie</p>
                <p>See more {'>'}</p>
            </div>
        <div className="grid-container">
        {data.map((movie) => (
        <Card 
          key={movie.id}
          movieID={movie.id}
          poster={movie.poster_path}
          title={movie.title}
          releaseDate={movie.release_date}
        />
      ))}
        </div>
        </div>
    );
};

export default Movies;