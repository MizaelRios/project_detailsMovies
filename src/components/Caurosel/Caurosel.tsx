import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import '../Caurosel/Caurosel.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow, Autoplay } from 'swiper';
import { MovieService } from '../../services/MovieService';
import { useEffect, useState } from 'react';
import { IMovie } from '../../interfaces';

const Carousel = () => {
  const [movies, setMovies] = useState<IMovie>();

  useEffect(() => {
    (async () => {
      const { status, data } = await MovieService.getTopMovies();
      setMovies(data);
      if (status === 200)
        console.log(data);
    })();
  }, [])

  return (
    <div className='carousel'>
      <h1>Melhores Filmes Avaliados</h1>
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
          movies?.results.map(movie => (
            <SwiperSlide
              key={movie.id}
              style={{ backgroundImage: `url(${import.meta.env.VITE_URL_IMAGE + movie.poster_path})` }}
              className="myswiper-slider">
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default Carousel;