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
      <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d831.8704491736042!2d44.627173958623096!3d40.275114138769496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa1d1e8985a25%3A0xfe97313e5122a345!2s7JFG%2BWRH%2C%20Ogostosi%2023%20Street%2C%20Abovyan%202204!5e0!3m2!1sru!2sam!4v1725913800699!5m2!1sru!2sam"
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map"
    ></iframe>
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
