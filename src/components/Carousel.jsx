import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { carouselItems } from '../data/carouselData'; // Asumimos que importas los datos de tus imágenes

const Carousel = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {carouselItems.map((slide, index) => (
        <SwiperSlide key={index} className="relative w-full">
          <div className="relative w-full h-[500px] flex justify-center group">
            <img
              src={slide.imageUrl}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
              loading="lazy"
              sizes="(max-width: 479px) 171px, (max-width: 991px) 163px, 268px"
              srcSet={`${slide.imageUrl}?w=500 500w, ${slide.imageUrl}?w=800 800w, ${slide.imageUrl}?w=1080 1080w, ${slide.imageUrl}?w=1600 1600w`}
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-25 group-hover:opacity-0 transition-opacity"></div>

            {/* Title Overlay */}
            <div className="absolute inset-0 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-semibold">{slide.title}</h3>
            </div>
          </div>
        </SwiperSlide>
      ))}
      
      <div className="swiper-pagination custom-pagination" />
    </Swiper>
  );
};

export default Carousel;
