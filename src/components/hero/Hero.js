import React from 'react'
import './hero.css'
import Navbar from '../navbar/Navbar'
import Movies from '../movies/Movies'

function Hero() {
  return (
    <>
    <div className="hero-wick-pic">
      <Navbar />
    <div className="hero-container">
    <div className='descriptio-box'>
        <div className="john-whick">
            <h3>John Wick 3 : Parabellum</h3>
        </div>
        <div className="rating">
            <div className="imdb">
            <img src="https://s3-alpha-sig.figma.com/img/a423/5182/5bf071206cd1f384cc337b8867ae5aeb?Expires=1695600000&Signature=GmjlYRtN7Bn0a000PlFfH7~PSPUqhjlmeVjeG78xahYPVsdYtx9OB4Xw~McOajU0VJdzWV~kOb9Y7BxuYGt9nLl4j3fa13J0CV-jFgkZYrbsnLqCsatzsp-GOBePlv11WtoU0Y-VyqcucOgQ4WtWOpm-CRHRxt6dyYhRTWnHDK6jTdwq450LeJJDrlGIXs7UR48IWEjn4CLtl-yFzrYzqgaEJFc4hhkYaRWHEHA5zq~9PMSRfatf1FMdVUmSY-f4dRF~XYj82h7PF5RCazgn8p-k6cF5zKaAZwg5mDRFcAa6L4dnBpVqub5ELdMya7wD4MgJe1KfHFUR-ipYPNEGEA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className='imdb-img' alt="" />
              <span>86.0 / 100</span>
            </div>
            <div className="roten-tomato">
              <img src="https://s3-alpha-sig.figma.com/img/8e6d/4012/82ace228929a9068f3eb189a3ea549a7?Expires=1695600000&Signature=qF~QGIuW0LhKdlzuXcioKGCczJNvscvmmfw3pgAXSbQ52prxwI9-Xim4eWdhQiBWp9IJmdhPMWUEd6h1hTVX0MZMfjSzN7KGWIg~K6crB4ucKBB2kGenYomk~GvlnFGnNQeNR5cNJtpRx8ZP0PQCYmdhLkay5A5nZJyxnpXAggdswF0osy6Fjkt9YG81WFkdC0A~mRZEtFm5SfDi-yi-PryjCvHBFC-TwQwloT-~aPsEOEzQYsuiiCK9ub32hslNLXDrRNTQNT~fVbndRlX8bIIhhjPLQtzp~b7pFAiJdAat~0~U2nLFTMMCbpeOHUy-9W4hSYpoHwKVxwVyQG8xZw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className ='rotten-img'alt="" srcset="" />
              <span>97%</span>
            </div>
            
        </div>
        <div className="description">
          <p>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million </p>
        </div>
        <div className="trailer">
          <button  className='watch'><i className='bx bx-play-circle' ></i> WATCH TRAILER</button>
        </div>

    </div>
    <div></div>
    <div className="pagination">
      <ol>
        <li>1</li>
        <li>2</li>
        <li className='selected-page-num'> <div className='selected-page'></div>3</li>
        <li>4</li>
        <li>5</li>
      </ol>
    </div>
    </div>
    </div>
    <Movies/>
    </>
  )
}

export default Hero