import React from 'react';
import Layout from '../layout/Layout';
import logo from '../assets/icons/logo.png';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Layout>
        <main className='notFound'>
          <div>
            <h1>4</h1>
            <img src={logo} alt="Logo" />
            <h1>4</h1>
          </div>
          <span>{t('NotFound')}</span>
          <Link to="/">{t('main')}</Link>
        </main>
      </Layout>
    </>
  );
};

export default NotFoundPage;
