import React from 'react'
import './card.css'
function Card() {
  return (
    <div>
        <div className="movie-card">
            <div className="poster-img">
                <img src="https://s3-alpha-sig.figma.com/img/5789/e4a9/55bc9e1a21c68b2b31a33af82b284df6?Expires=1695600000&Signature=ZYva9mE2V1lavQ1AgRB~I0tVttb~Qw7g9Nu-Mt8TAiNlVPcLfZPLtIhkFGzrViuyAu7uKKvEt5U0QoeC4SbYPQJ4j-FJJQE8bvNvdMAy-~D1qdecxAPil0bjIROFTPBhVmIpxNmUt8c54fUO1poHzlQ0gBPsFnoZi9vLHRIiP2Yl19Zz4AcvHYywUPEPR515xPHjTmP9c3Zg89J8oHJAnuhZAO72t-7NdDiqsoatiwq-uqcDLt0TkWP1EHstLrNXK-UjmeZAKOW5xwizebIODoOu~V8Qz8AlAmnp0NOpBzSmOJ02Kvxi5-LccSDqZeY9Mip5OyhvO120mfi60JXevA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
              <p className='watchlist'><i class='bx bxs-heart-circle'  ></i></p>
            </div>
            <p>USA, 2016 - Current</p>
            <span>Strager Things</span>
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