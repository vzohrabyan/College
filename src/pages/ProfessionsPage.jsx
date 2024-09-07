import React from 'react';
import Layout from '../layout/Layout';
import Professions from '../components/professions/Professions.jsx';
import Seo from '../components/seo/Seo';

const ProfessionsPage = () => {
  return (
    <>
      <Seo
        title="Professions in SEBASTATSI MEDICAL COLLEGE"
        description="Professions of SEBASTATSI MEDICAL COLLEGE The Faculty of Obstetrics, Nursing, Designer, Accounting, Dental Technology, Pharmacy"
        canonical="/Professions"
      />
      <Layout>
        <Professions />
      </Layout>
    </>
  );
};

export default ProfessionsPage;
