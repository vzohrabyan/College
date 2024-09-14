import React, { useEffect } from 'react';
import './About.scss';
//pictures
import pic1 from '../../assets/pictures/aboutUs/Pic1.png';
import pic2 from '../../assets/pictures/aboutUs/Pic2.png';
import pic3 from '../../assets/pictures/aboutUs/Pic3.png';
import pic4 from '../../assets/pictures/aboutUs/Pic4.png';
import { useTranslation } from 'react-i18next';
import QuestionsForm from '../home/questionsForm/QuestionsForm';

const About = () => {
  const { t } = useTranslation();

  return (
    <main className="about">
      <div className="about-pic">
        <img className="pic1" src={pic1} alt="Logo" />
        <img className="pic2" src={pic2} alt="Logo" />
        <img className="pic4" src={pic4} alt="Logo" />
        <img className="pic3" src={pic3} alt="Logo" />
      </div>
      <div className="about-main">
        <h1>{t('About')}</h1>
        <span
          dangerouslySetInnerHTML={{
            __html: t('AboutUsMain')
          }}
        />
      </div>
    </main>
  );
};

export default About;
