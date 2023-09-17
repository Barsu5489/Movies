import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './details.css'
function Details() {
    
    const { id } = useParams();
    const [movieData, setMovieData] = useState(null);
    console.log(movieData)
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=158edbaf63d53e4ad7b56237b05d5776`)
          .then(response => response.json())
          .then(data => setMovieData(data))
          .catch(error => console.error(error));
      }, [id]);
    
      if (!movieData) return <div>Loading...</div>;
  return (
    <div className='details-container'>
        <div className="sidebar">
            <div className="sidebar-logo">
                <img src="https://s3-alpha-sig.figma.com/img/a73b/9b32/376a54ffd2dfb11ef1f3a8b513491895?Expires=1695600000&Signature=PwVvK6KfdUw4JIzipR9rZvRmFJnvPO5O1aDWcC3-72QgXOG7EHZ1VxMy46eaqGN3vT9Y7NbePvbvSkUVgPVmMQ61xpnsWTRz00MAb5PIKPwjjVhkO7T30OqqpVW5i105r5HXrD2qdnu5gEzHN3fN3rwqkC58dDRBvkRDuBLpQIsb5kr7fMPGUvecD46K~ZhPvfSloW1m8re5yL-DWnQiY78WqoYidxryuXmPrT8mWF5HULiRCo1MwLUWlfxONKaUTbuFBI1aCOb77EwX5fFlA8akB6EHBTnceY6jmbyt-cw9QK-Bc3Z4IsYoS8MNfYxZPQY8z2HJ0ANwp4bQieTnrw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" srcset="" />

                <p>MovieBox</p>

            </div>
            <ul className='li-sidebar'>
                <li>Home</li>
                <li>Movies</li>
                <li>TV Series</li>
                <li>Upcoming</li>
            </ul>
            {/* <div className="home">
                <p>Home</p>
            </div>
            <div className="movies-link">
                <p>Movies</p>
                <span className='vector'></span>
            </div>
            <div className="series">
                <p>TV series</p>
            </div>
            <div className="upcoming">
                <p>Upcoming</p>
            </div> */}
            <div className="start">
                <p>Play movie quizes and earn free tickets</p>
                <span>50k people are now playing</span>
                <button>Start Playing</button>
            </div>
            <p>logout</p>

        </div>
       
        <div className="movie-content">
            <img src={`https://image.tmdb.org/t/p/w500/${movieData.backdrop_path}`}className='mv-img' alt="" />

            <span className='play-now'><i className='bx bx-play'></i></span>
            <div className="single-movie-details">
            <div className="movie-information">
                <div></div>
            <div className="current-description">
                <h3 data-testid ="movie-title">{movieData.title} • <span data-testid= "movie-release-date">{movieData.release_date
} </span>2022 • PG-13 • <span data-testid= "movie-runtime">{movieData.runtime}</span></h3>
                <p>Action</p>
                <p>Drama</p>
            </div>
            <div className="movie-about">
                <p data-testid= "movie-overview">{movieData.overview}</p>
            </div>
            <div className="credits">
                <p className='credit-details'>Director: <span className='director-name'>Joseph Kosinski</span></p>
                <p className='credit-details'>Writers: <span className='director-name'>Writers : Jim Cash, Jack Epps Jr, Peter Craig</span></p>
                <p className='credit-details'>Stars: <span className='director-name'>Stars : Tom Cruise, Jennifer Connelly, Miles Teller</span></p>
            </div>
            <div className="movie-rate">
                <p>Top rated  movie #65</p>
                <select name="" id="" class="styled-select">
                <option value="d" id='option'>Awards nomination</option>
            </select>
   

            </div>
            </div>
            <div className="more-movies">
            <div className="stars-rating">
            <i class='bx bxs-star'></i>
            <h>8.5 | 350k</h>
            </div>
            <div className="more">
            <button className="show-time">See Showtimes</button>
            <button className="watch-more">More watch options</button>
            </div>
            <div className="similar-movies">
                <img src="https://s3-alpha-sig.figma.com/img/5789/e4a9/55bc9e1a21c68b2b31a33af82b284df6?Expires=1695600000&Signature=ZYva9mE2V1lavQ1AgRB~I0tVttb~Qw7g9Nu-Mt8TAiNlVPcLfZPLtIhkFGzrViuyAu7uKKvEt5U0QoeC4SbYPQJ4j-FJJQE8bvNvdMAy-~D1qdecxAPil0bjIROFTPBhVmIpxNmUt8c54fUO1poHzlQ0gBPsFnoZi9vLHRIiP2Yl19Zz4AcvHYywUPEPR515xPHjTmP9c3Zg89J8oHJAnuhZAO72t-7NdDiqsoatiwq-uqcDLt0TkWP1EHstLrNXK-UjmeZAKOW5xwizebIODoOu~V8Qz8AlAmnp0NOpBzSmOJ02Kvxi5-LccSDqZeY9Mip5OyhvO120mfi60JXevA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                <img src="https://s3-alpha-sig.figma.com/img/5789/e4a9/55bc9e1a21c68b2b31a33af82b284df6?Expires=1695600000&Signature=ZYva9mE2V1lavQ1AgRB~I0tVttb~Qw7g9Nu-Mt8TAiNlVPcLfZPLtIhkFGzrViuyAu7uKKvEt5U0QoeC4SbYPQJ4j-FJJQE8bvNvdMAy-~D1qdecxAPil0bjIROFTPBhVmIpxNmUt8c54fUO1poHzlQ0gBPsFnoZi9vLHRIiP2Yl19Zz4AcvHYywUPEPR515xPHjTmP9c3Zg89J8oHJAnuhZAO72t-7NdDiqsoatiwq-uqcDLt0TkWP1EHstLrNXK-UjmeZAKOW5xwizebIODoOu~V8Qz8AlAmnp0NOpBzSmOJ02Kvxi5-LccSDqZeY9Mip5OyhvO120mfi60JXevA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                <img src="https://s3-alpha-sig.figma.com/img/5789/e4a9/55bc9e1a21c68b2b31a33af82b284df6?Expires=1695600000&Signature=ZYva9mE2V1lavQ1AgRB~I0tVttb~Qw7g9Nu-Mt8TAiNlVPcLfZPLtIhkFGzrViuyAu7uKKvEt5U0QoeC4SbYPQJ4j-FJJQE8bvNvdMAy-~D1qdecxAPil0bjIROFTPBhVmIpxNmUt8c54fUO1poHzlQ0gBPsFnoZi9vLHRIiP2Yl19Zz4AcvHYywUPEPR515xPHjTmP9c3Zg89J8oHJAnuhZAO72t-7NdDiqsoatiwq-uqcDLt0TkWP1EHstLrNXK-UjmeZAKOW5xwizebIODoOu~V8Qz8AlAmnp0NOpBzSmOJ02Kvxi5-LccSDqZeY9Mip5OyhvO120mfi60JXevA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
            </div>
            <div className="mv-list">
                <i class='bx bx-list-ul list-show'></i>
            
            <p>The Best Movies and Shows in September</p>
            </div>
        </div>
        </div>
        </div>
     
        </div>
    
  )
}

export default Details