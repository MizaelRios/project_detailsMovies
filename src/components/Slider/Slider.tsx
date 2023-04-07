import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper';
import { IMovie } from "../../interfaces";

import 'swiper/swiper-bundle.min.css';
import '../Slider/Slider.css';

const Slider: React.FC<IMovie> = ({ results }) => {

  return (
    <div className="slider">
      <Swiper
        className='mySlider'
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        effect={"cube"}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
      >
        {results?.map((movie) => (
          <SwiperSlide key={movie.id}>
            <img src={`${import.meta.env.VITE_URL_IMAGE + movie.poster_path}`} alt={movie.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider;