import About from '../components/about/About';
import Layout from '../layout/Layout';
import Seo from '../components/seo/Seo';

const AboutPage = () => {
  return (
    <>
      <Seo
        title="About A. SEBASTATSI MEDICAL COLLEGE, Ա․ ՍԵԲԱՍՏԱՑԻ ԲԺՇԿԱԿԱՆ ՔՈԼԵՋ, Ա. ՍԵԲԱՍՏԱՑՈՒ ԱՆՎԱՆ ԲԺՇԿԱԿԱՆ ՔՈԼԵՋ"
        description="Founded in 2010, our medical college has quickly established itself as a hub of excellence in medical education"
        canonical="/About"
      />
      <Layout>
        <About />
      </Layout>
    </>
  );
};

export default AboutPage;
