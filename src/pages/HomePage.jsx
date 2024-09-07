import Home from '../components/home/Home.jsx';
import Layout from '../layout/Layout';
import Seo from '../components/seo/Seo';

const HomePage = () => {
  return (
    <>
      <Seo
        title="A. SEBASTATSI MEDICAL COLLEGE, Ա․ ՍԵԲԱՍՏԱՑԻ ԲԺՇԿԱԿԱՆ ՔՈԼԵՋ"
        description="Sebastatsi medical college is a Medical College in Abovyan founded in 2010, our medical college has quickly established itself as a hub of excellence in medical education"
      />
      <Layout>
        <Home />
      </Layout>
    </>
  );
};

export default HomePage;
