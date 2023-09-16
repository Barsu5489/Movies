import React from 'react'
import './details.css'
function Details() {
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
            <img src="https://s3-alpha-sig.figma.com/img/1856/c95c/9af6d5a4107cc24f878e63ed529a275d?Expires=1695600000&Signature=AS86qp3truWPTvvqdnE0HulXiT-hc5sD39UynsclsNcznyHzn2c8GBQhLbMdvQtw92Amwo4Szvh7KdsIEZT~XwQOVrvqPsFzuRvmNO99MY3gV21sCV5GGUgwF8~xgHgi9rVRtdyemrWmojtnp5vU1XCmggLHTpllrQvFKOX0-bSOHdAHLWqJGXiBZzpVjnyWcrJa2456p5iTTSRI2dXLq1JAGM4V2jkvqdOS-YytO-FHjKOw4y3lGFE-fr9aFBFV2DTwv2toewMUN8YmcXVtusvjvdH5u-6~hew-4fCvVE~xydxRwW4j9GHmOXquhhldZQTAfAJXuRgWnj9gQ9Gm-A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className='mv-img' alt="" />

            <span className='play-now'><i className='bx bx-play'></i></span>
            <div className="single-movie-details">
            <div className="movie-information">
                <div></div>
            <div className="current-description">
                <h3 data-testid ="movie-title">Top Gun: Maverick • <span data-testid= "movie-release-date">2022 </span>2022 • PG-13 • <span data-testid= "movie-runtime">2h 10m</span></h3>
                <p>Action</p>
                <p>Drama</p>
            </div>
            <div className="movie-about">
                <p data-testid= "movie-overview">After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it.</p>
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