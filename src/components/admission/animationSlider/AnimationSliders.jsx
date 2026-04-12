import { Swiper, SwiperSlide } from 'swiper/react';
import './AnimationSliders.scss';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Slide1Pic from '../../../assets/pictures/slidesPic/slide1.png';
import Slide2Pic from '../../../assets/pictures/slidesPic/slide2.png';
import Slide3Pic from '../../../assets/pictures/slidesPic/slide3.jpg';
import Slide4Pic from '../../../assets/pictures/slidesPic/slide4.jpg';
const AnimationSliders = () => {
  const animationSlidesData = [
    {
      id: 1,
      image: Slide1Pic,
    },
    {
      id: 2,
      image: Slide2Pic,
    },
    {
      id: 3,
      image: Slide3Pic,
    },
    {
      id: 4,
      image: Slide4Pic,
    }
  ];

  return (
    <Swiper
      className="admissionSlides"
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      speed={1500}
      autoplay={{ delay: 5000 }}
      loop={true}>
      {animationSlidesData.map(({ id, image, type }) => {
        return (
          <SwiperSlide key={id}>
            <div style={{ backgroundImage: `url(${image})` }} className={'slider' + id + ' slider'}>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default AnimationSliders;
