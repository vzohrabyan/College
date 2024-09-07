import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { FaViber } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaLocationDot } from 'react-icons/fa6';
import logo from '../../assets/icons/logo.png';
import './Footer.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer id="fotter">
      <div className="footer-container">
        <img src={logo} alt="" />
        <h1>{t('College')}</h1>
        <div className="contact">
          <FaPhone />
          <a style={{ textDecoration: 'none' }} href="tel:+37498127317">
            +374 ( 98 ) 127 - 317
          </a>
          <a style={{ textDecoration: 'none' }} href="tel:+37494130602">
            {' '}
            +374 ( 94 ) 130 - 602
          </a>
        </div>
        <div className="loc">
          <FaLocationDot className="small" />
          <span>{t('location')}</span>
        </div>
        <div className="sites">
          <Link to="https://www.instagram.com/a.sebastatsi/" target="_blank">
            <AiFillInstagram className="small" />
          </Link>
          <Link to="https://www.facebook.com/profile.php?id=100037239120627" target="_blank">
            <FaFacebookF />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
