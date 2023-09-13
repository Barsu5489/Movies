import React, { useEffect, useState } from 'react';
// import Card from '../card/Card';

const Movies = () => {
    const [data, setData] = useState([]);
    console.log(data)
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'
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
                const response = await fetch(url, options);
                const data = await response.json();
                console.log(response)
                console.log(data)
                setData(data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
        <img src="https://image.tmdb.org/t/p/w500/" alt="" />
        </div>
    );
};

export default Movies;
