import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.png';
import LanguageSelector from '../languageSelector/LanguageSelector';
import Menu from './menu/Menu';
import './Header.scss';
const Header = () => {
  const headerRef = useRef(null);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 0) {
        headerRef.current.className = 'fixedHeader';
      } else if (currentScrollY === 0) {
        headerRef.current.className = 'initialHeader';
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  return (
    <header className="initialHeader" ref={headerRef}>
      <Menu />
      <div>
        <div className="collegeName left">
          <h1>Ա․ ՍԵԲԱՍՏԱՑԻ ԲԺՇԿԱԿԱՆ ՔՈԼԵՋ</h1>
          <h2>ԿՐԹԱԿԱՆ ՀԻՄՆԱԴՐԱՄ</h2>
        </div>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <div className="collegeName right">
          <h1>
            {headerRef.current ? (
              headerRef.current.className == 'initialHeader' ? (
                'A. SEBASTATSI MEDICAL COLLEGE'
              ) : (
                <>
                  <b
                    className={
                      currentLanguage === 'am'
                        ? 'leftHeading leftHeadingam'
                        : currentLanguage === 'ru'
                          ? 'leftHeading leftHeadingru'
                          : 'leftHeading leftHeadingen'
                    }>
                    {t('College').split(' ')[0] + ' ' + t('College').split(' ')[1] + ' '}
                  </b>{' '}
                  <b
                    className={
                      currentLanguage === 'am'
                        ? 'rightHeading rightHeadingam'
                        : currentLanguage === 'ru'
                          ? 'rightHeading rightHeadingru'
                          : 'rightHeading rightHeadingen'
                    }>
                    {t('College').split(' ')[2] + ' ' + t('College').split(' ')[3]}
                  </b>
                </>
              )
            ) : (
              'A. SEBASTATSI MEDICAL COLLEGE'
            )}
          </h1>
          <h2>EDUCATION FOUNDATION</h2>
        </div>
      </div>
      <nav>
        <ul>
          <Link to="/">
            <li>
              {t('Home')}
              <div className="line"></div>
            </li>
          </Link>
          <Link to="/Professions">
            <li>
              {t('Professions')}
              <div className="line"></div>
            </li>
          </Link>
          <Link to="/Admission">
            <li>
              {t('Admission')}
              <div className="line"></div>
            </li>
          </Link>
          <Link to="/About">
            <li>
              {t('About')}
              <div className="line"></div>
            </li>
          </Link>
        </ul>
      </nav>
      <LanguageSelector className="selectLang" />
    </header>
  );
};

export default Header;
