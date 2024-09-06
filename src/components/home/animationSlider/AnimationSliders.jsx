import {Swiper, SwiperSlide} from "swiper/react"
import "./AnimationSliders.scss"
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const AnimationSliders = () => {
    const { t } = useTranslation();
    const animationSlidesData = [
      {
        id: 1,
        image: "https://www.dotefl.com/wp-content/uploads/2023/07/Professions.png",
        type: "Profession"
      },
      {
        id: 2,
        image: "https://t4.ftcdn.net/jpg/04/31/67/23/360_F_431672384_lvTzMUjvsaID7i2ToZaa1L9WEW8kk1lM.jpg",
        type: "Admission"
      }
    ]

  return (
    <Swiper
    className="slides"
    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
    spaceBetween={0}
    slidesPerView={1}
    navigation
    speed = {1500}
    autoplay={{ delay: 5000 }}
    loop={true}
    >
      {animationSlidesData.map(({id,image, type}) => {
          return (
            <SwiperSlide key={id}>
              <div style={{backgroundImage: `url(${image})`}} className={"slider" + id + " slider"}>
                <h2>{t(type)}</h2>
                <button><Link to={"/Categories/" + type}>{t("More")}</Link></button>
              </div>
            </SwiperSlide>
          )
      })}
    </Swiper>
  )
}

export default AnimationSliders