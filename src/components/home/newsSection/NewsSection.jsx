import React, { useState } from 'react';
import './NewsSection.scss'; // Assuming your styles are in App.css
import vid1 from '../../../assets/pictures/news/IMG1.mp4';
import vid2 from '../../../assets/pictures/news/IMG2.MOV';
import addmision from '../../../assets/pictures/news/addmision.jpg';
import pic from '../../../assets/pictures/aboutUs/Pic2.jpg';
import { FaRegCirclePlay } from "react-icons/fa6";
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
      heading: "Ընդունելություն",
      date: "19.08.2024",
      text: '🔈Սիրելի դիմորդներ՝🥰 Ա. Սեբաստացու անվան բժշկական քոլեջ կրթական հիմնադրամը կատարում է 2024-25 ուս. տարվա ընդունելություն📚Սիրով սպասում ենք Ձեզ🤍Հարցերի դեպքում կարող եք զանգահարել +37498127317 կամ գրել անձնական նամակ📩'
    },
    {
      id: 1,
      video: vid2,
      picture: pic,
      heading: "Նոր բժշկական մոդելներ",
      date: "30.01.2025",
      text: 'Մենք ներդրումներ ենք կատարում ձեր ապագայի համար: Այս նոր բժշկական մոդելները կօգնեն ձեզ ձեռք բերել գործնական փորձ և ձեր կրթությունն ավելի գործնական և արդյունավետ դարձնել:⚕️📚🧬'
    }
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
          {videos.map(({ video, text, picture,date, heading }, index) => (
            <div key={index} className="video-thumbnail" onClick={() => openVideo(video)}>
              <div className="video-thumbnail-pic" style={{backgroundImage: `url(${picture})`}}>
                <div className="video-thumbnail-pic-animation">
                  <FaRegCirclePlay />
                  <h1>{heading}</h1>
                </div>
              </div>
              <span>{date}</span>
              <p>{text}</p>
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
