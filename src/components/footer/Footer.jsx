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
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12176.159739558849!2d44.6269976!3d40.2748631!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa1a31d899b5f%3A0x646e4cb7e23a44fc!2sA.%20Sebastatsi%20Medical%20College!5e0!3m2!1sru!2sam!4v1726008700153!5m2!1sru!2sam"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"></iframe>
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
