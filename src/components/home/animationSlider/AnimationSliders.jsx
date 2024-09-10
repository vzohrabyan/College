import { Swiper, SwiperSlide } from 'swiper/react';
import './AnimationSliders.scss';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ProfessionsPic from '../../../assets/pictures/slidesPic/Professions.webp';
import AdmissionPic from '../../../assets/pictures/slidesPic/admission.jpg';
const AnimationSliders = () => {
  const { t } = useTranslation();
  const animationSlidesData = [
    {
      id: 1,
      image: ProfessionsPic,
      type: 'Profession'
    },
    {
      id: 2,
      image: AdmissionPic,
      type: 'Admission'
    }
  ];

  return (
    <Swiper
      className="slides"
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
              <h2>{t(type)}</h2>
              <button>
                <Link to={type}>{t('More')}</Link>
              </button>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default AnimationSliders;
