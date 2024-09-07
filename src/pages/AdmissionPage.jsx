import React from 'react';
import Layout from '../layout/Layout';
import Admission from '../components/admission/Admission';
import Seo from '../components/seo/Seo';

const AdmissionPage = () => {
  return (
    <>
      <Seo
        title="Admission procedure"
        description="The following documents must be submitted for admission 9th grade certificate or 12th grade certificate (original), ID and social card (copy),8 3x4 size photographs"
        canonical="/Admission"
      />
      <Layout>
        <Admission />
      </Layout>
    </>
  );
};

export default AdmissionPage;
