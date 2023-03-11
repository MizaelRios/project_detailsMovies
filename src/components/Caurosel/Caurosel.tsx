
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow, Autoplay } from 'swiper';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import '../Caurosel/Caurosel.css';
import { MovieService } from '../../services/MovieService';
import { useEffect, useRef, useState } from 'react';
import { IMovie,Result } from '../../interfaces';

const Carousel = () => {
  const [movies, setMovies] = useState<any[]>([]);
  useEffect(() => {
    (async () => {
      const { status, data } = await MovieService.getTopMovies();
      setMovies(data.results);
      if (status === 200)
        console.log(data); 
    })(); 
  }, [])


  return (
    <div className='carousel'>
      <Swiper
        className='myswiper'
        modules={[Pagination, EffectCoverflow, Autoplay]}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true
        }}
        loop={true}
        pagination={{ clickable: true }}

        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        breakpoints={{
          640: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 1
          },
          1024: {
            slidesPerView: 2
          },
          1560: {
            slidesPerView: 3
          },
        }}

      >
        {
          movies.map(movie => (
            <SwiperSlide
              key={movie.id}
              style={{ backgroundImage: `url(${'https://image.tmdb.org/t/p/w500' + movie.poster_path})` }}
              className="myswiper-slider">
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default Carousel;