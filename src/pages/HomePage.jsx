import { Helmet } from "react-helmet-async";
import Home from "../components/home/Home.jsx";
import Layout from "../layout/Layout";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>A. SEBASTATSI MEDICAL COLLEGE</title>
        <meta name="description" content="Founded in 2010, our medical college has quickly established itself as a hub of excellence in medical education and healthcare training. With a commitment to nurturing the next generation of healthcare professionals, we offer a dynamic curriculum that combines rigorous academic training with hands-on clinical experience. Our state-of-the-art facilities, experienced faculty, and a strong focus on research and innovation make us a leading institution in the medical field. Whether you're aspiring to be a doctor, nurse, or researcher, our college provides the foundation and support you need to succeed in the ever-evolving world of medicine." />
        <meta name="keywords" content="sebastaci, college, bjshkakan, medical, colege" />
        <meta name="author" content="Vardan Zohrabyan" />
        <link rel="canonical" href="/" />
        <meta property="og:title" content="A. SEBASTATSI MEDICAL COLLEGE" />
        <meta property="og:description" content="Founded in 2010, our medical college has quickly established itself as a hub of excellence in medical education and healthcare training. With a commitment to nurturing the next generation of healthcare professionals, we offer a dynamic curriculum that combines rigorous academic training with hands-on clinical experience. Our state-of-the-art facilities, experienced faculty, and a strong focus on research and innovation make us a leading institution in the medical field. Whether you're aspiring to be a doctor, nurse, or researcher, our college provides the foundation and support you need to succeed in the ever-evolving world of medicine." />
        <meta property="og:url" content="https://www.sebastaci-college.com/" />
        <meta property="og:type" content="website" />
      </Helmet>    
      <Layout> 
        <Home /> 
      </Layout>
    </>
    );
};

export default HomePage;