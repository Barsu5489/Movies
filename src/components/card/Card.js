  import React from 'react'
  import './card.css'
import { useNavigate } from 'react-router-dom'
  function Card({poster, title, releaseDate, imdbRating}) {
    const navigate = useNavigate()
    function handleDetails(){
      navigate('details')
    }
    return (
      <div>
          <div className="movie-card" data-testid="movie-card" onClick={handleDetails}>
              <div className="poster-img">
                  <img src={`https://image.tmdb.org/t/p/w500/${poster}`} data-testid="movie-poster" alt="Movie" />
                  {/* <img src={``} alt="m" /> */}
                <p className='watchlist'><i class='bx bxs-heart' ></i></p>
              </div>
              <p data-testid="movie-release-date">{releaseDate} - Current</p>
              <span>{title}</span>
            <div className="movie-info">
              <div className="movie-rates">
                  <img src="https://s3-alpha-sig.figma.com/img/a423/5182/5bf071206cd1f384cc337b8867ae5aeb?Expires=1695600000&Signature=GmjlYRtN7Bn0a000PlFfH7~PSPUqhjlmeVjeG78xahYPVsdYtx9OB4Xw~McOajU0VJdzWV~kOb9Y7BxuYGt9nLl4j3fa13J0CV-jFgkZYrbsnLqCsatzsp-GOBePlv11WtoU0Y-VyqcucOgQ4WtWOpm-CRHRxt6dyYhRTWnHDK6jTdwq450LeJJDrlGIXs7UR48IWEjn4CLtl-yFzrYzqgaEJFc4hhkYaRWHEHA5zq~9PMSRfatf1FMdVUmSY-f4dRF~XYj82h7PF5RCazgn8p-k6cF5zKaAZwg5mDRFcAa6L4dnBpVqub5ELdMya7wD4MgJe1KfHFUR-ipYPNEGEA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                  <h6>86/100</h6>
              </div>
              <div className="movie-tomatoe">
                  <img src="https://s3-alpha-sig.figma.com/img/8e6d/4012/82ace228929a9068f3eb189a3ea549a7?Expires=1695600000&Signature=qF~QGIuW0LhKdlzuXcioKGCczJNvscvmmfw3pgAXSbQ52prxwI9-Xim4eWdhQiBWp9IJmdhPMWUEd6h1hTVX0MZMfjSzN7KGWIg~K6crB4ucKBB2kGenYomk~GvlnFGnNQeNR5cNJtpRx8ZP0PQCYmdhLkay5A5nZJyxnpXAggdswF0osy6Fjkt9YG81WFkdC0A~mRZEtFm5SfDi-yi-PryjCvHBFC-TwQwloT-~aPsEOEzQYsuiiCK9ub32hslNLXDrRNTQNT~fVbndRlX8bIIhhjPLQtzp~b7pFAiJdAat~0~U2nLFTMMCbpeOHUy-9W4hSYpoHwKVxwVyQG8xZw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                  <h6>97%</h6>
              </div>
            </div>
              <p>Action, Adventure, Horror</p>

          </div>
      </div>
    )
  }

  export default Card