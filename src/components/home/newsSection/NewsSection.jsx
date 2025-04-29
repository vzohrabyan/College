import React, { useState } from 'react';
import './NewsSection.scss'; // Assuming your styles are in App.css
import vid1 from '../../../assets/pictures/news/IMG1.mp4';
import vid2 from '../../../assets/pictures/news/IMG2.MOV';
import vid3 from '../../../assets/pictures/news/IMG3.mp4';
import addmision from '../../../assets/pictures/news/addmision.jpg';
import pic from '../../../assets/pictures/aboutUs/Pic2.jpg';
import pic1 from '../../../assets/pictures/news/pic1.jpg';
import { FaRegCirclePlay } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';

const NewsSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const { t } = useTranslation();

  const videos = [
    {
      id: 0,
      video: vid1,
      picture: addmision,
      heading: 'Ընդունելություն',
      date: '29.04.2025',
      text: `Սկսի՛ր քո մասնագիտական ուղին հենց հիմա⚕️📚
      <br />«Ա. Սեբաստացու անվան բժշկական քոլեջ» կրթական հիմնադրամը հայտարարում է 2025-2026 ուսումնական տարվա ընդունելություն 🔈:<br /><br />Դիմորդները կարող են ներկայացնել փաստաթղթերը այցելելով քոլեջ՝<br />📍Ք. Աբովյան, Օգոստոսի 23, շենք 1/14/4<br /><br />Լրացուցիչ տեղեկատվության համար կարող եք զանգահարել՝<br />📞Հեռ․՝ 094 44 02 42<br /><br />Կամ դիմե՛ք առցանց՝ մտնելով մեր պաշտոնական կայքը՝<br />💻 <a<a href="/addmission">sebastatsi.am</a> <br /><br />Մի թող այս հնարավորությունը անցնի կողքովդ։ Քո ապագան սկսվում է այսօր։ Պատրաստվիր դառնալու վաղվա պահանջված մասնագետը։ 📚📖⚕️<br />`
    },
    {
      id: 1,
      video: vid2,
      picture: pic,
      heading: 'Նոր բժշկական մոդելներ',
      date: '30.01.2025',
      text: 'Մենք ներդրումներ ենք կատարում ձեր ապագայի համար: Այս նոր բժշկական մոդելները կօգնեն ձեզ ձեռք բերել գործնական փորձ և ձեր կրթությունն ավելի գործնական և արդյունավետ դարձնել:⚕️📚🧬'
    },
    {
      id: 2,
      video: vid3,
      picture: pic1,
      heading: 'Կրթությունը սկսվում է կարգից',
      date: '27.04.2025',
      text: 'Կան բաներ, որոնք պարզապես հաճելի են աչքին։ Մաքուր շարքեր, դասավորվածություն, հավասարակշռություն։ Այս ամենը մի նպատակ ունի՝ ապահովել որակյալ կրթություն ապագա մասնագետների համար։ Ա. ՍԵԲԱՍՏԱՑԻ ԲԺՇԿԱԿԱՆ ՔՈԼԵՋ՝ որտեղ կրթությունը սկսվում է կարգից։'
    },
  ];

  const openVideo = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setIsOpen(true);
  };

  const closeVideo = () => {
    setIsOpen(false);
    setCurrentVideo(null);
  };

  return (
    <div>
      <div className="video-grid">
        <h1>{t('news')}</h1>
        <div className="videos-container">
          {videos.map(({ video, text, picture, date, heading }, index) => (
            <div key={index} className="video-thumbnail" onClick={() => openVideo(video)}>
              <div className="video-thumbnail-pic" style={{ backgroundImage: `url(${picture})` }}>
                <div className="video-thumbnail-pic-animation">
                  <FaRegCirclePlay />
                  <h1>{heading}</h1>
                </div>
              </div>
              <span>{date}</span>
              <p dangerouslySetInnerHTML={{ __html: (text) }}></p>
            </div>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="modal" onClick={closeVideo}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <video className="enlarged-video" src={currentVideo} controls autoPlay></video>
            <IoClose className="close-button" onClick={closeVideo} />
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsSection;
