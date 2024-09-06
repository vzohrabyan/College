import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import ProfessionsSection from './professionsSection/ProfessionsSection.jsx';
import AnimationSliders from './animationSlider/AnimationSliders.jsx'
import "./Home.scss"
const Home = () => {
  const {t} = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  return (
    <main className='homePage'>
      <AnimationSliders />
      <section className='collegeSection'>
        <div>
          <p>
            {t("CollegeSection")}
          </p>
        </div>
      </section>
      <ProfessionsSection />
    </main>
  )
}

export default Home