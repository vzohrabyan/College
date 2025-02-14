import React, { useState } from 'react';
import './About.scss';
import { useTranslation } from 'react-i18next';
import QuestionsForm from '../home/questionsForm/QuestionsForm';
import line from "../../assets/pictures/aboutUs/Frame.png"
import star from "../../assets/pictures/aboutUs/Star.png"
import star2 from "../../assets/pictures/aboutUs/Star2.png"
import frame from "../../assets/pictures/aboutUs/Frame3.png"

const About = () => {
  const { t } = useTranslation();
  
  // State to track the visibility of the full text
  const [showFullText1, setShowFullText1] = useState(false);
  const [showFullText2, setShowFullText2] = useState(false);
  const [showFullText3, setShowFullText3] = useState(false);
  const [showFullText4, setShowFullText4] = useState(false);

  // Function to truncate text if length exceeds 300 characters
  const truncateText = (text) => {
    return text.length > 300 ? text.slice(0, 300) + "..." : text;
  };

  const toggleFullText = (section) => {
    switch(section) {
      case 1:
        setShowFullText1(!showFullText1);
        break;
      case 2:
        setShowFullText2(!showFullText2);
        break;
      case 3:
        setShowFullText3(!showFullText3);
        break;
      case 4:
        setShowFullText4(!showFullText4);
        break;
      default:
        break;
    }
  };

  return (
    <main className="about">
      <div className="about-slide">
        <h1>{t('About')}</h1>
      </div>
      <div className="about-main">
        <div className='about-main-1'>
          <section className="about-main-1-section">
            <span
              dangerouslySetInnerHTML={{
                __html: showFullText1 ? t('AboutUsMain1') : truncateText(t('AboutUsMain1'))
              }}
            />
            {t('AboutUsMain1').length > 300 && (
              <button onClick={() => toggleFullText(1)}>
                {showFullText1 ? t('showLess') : t('showMore')}
              </button>
            )}
          </section>
          <div className="about-main-1-pic">
            <div className="about-main-1-pic-picture"></div>
            <img className='line' src={line} alt="line" />
            <img className='star' src={star} alt="star" />
            <img className='frame' src={frame} alt="star" />
          </div>
        </div>
        <div className='about-main-2'>
          <div className="about-main-2-pic">
            <div className="about-main-2-pic-picture"></div>
            <img className='line' src={line} alt="line" />
            <img className='star' src={star2} alt="star" />
            <img className='frame' src={frame} alt="star" />
          </div>
          <section className="about-main-2-section">
            <span
              dangerouslySetInnerHTML={{
                __html: showFullText2 ? t('AboutUsMain2') : truncateText(t('AboutUsMain2'))
              }}
            />
            {t('AboutUsMain2').length > 300 && (
              <button onClick={() => toggleFullText(2)}>
                {showFullText2 ? t('showLess') : t('showMore')}
              </button>
            )}
          </section>
        </div>
        <div className='about-main-3'>
          <section className="about-main-3-section">
            <span
              dangerouslySetInnerHTML={{
                __html: showFullText3 ? t('AboutUsMain3') : truncateText(t('AboutUsMain3'))
              }}
            />
            {t('AboutUsMain3').length > 300 && (
              <button onClick={() => toggleFullText(3)}>
                {showFullText3 ? t('showLess') : t('showMore')}
              </button>
            )}
          </section>
          <div className="about-main-3-pic">
            <div className="about-main-3-pic-picture"></div>
            <img className='line' src={line} alt="line" />
            <img className='star' src={star} alt="star" />
            <img className='frame' src={frame} alt="star" />
          </div>
        </div>
        <div className='about-main-4'>
          <div className="about-main-4-pic">
            <div className="about-main-4-pic-picture"></div>
            <img className='line' src={line} alt="line" />
            <img className='star' src={star2} alt="star" />
            <img className='frame' src={frame} alt="star" />
          </div>
          <section className="about-main-4-section">
            <span
              dangerouslySetInnerHTML={{
                __html: showFullText4 ? t('AboutUsMain4') : truncateText(t('AboutUsMain4'))
              }}
            />
            {t('AboutUsMain4').length > 300 && (
              <button onClick={() => toggleFullText(4)}>
                {showFullText4 ? t('showLess') : t('showMore')}
              </button>
            )}
          </section>
        </div>
      </div>
      <QuestionsForm />
    </main>
  );
};

export default About;
