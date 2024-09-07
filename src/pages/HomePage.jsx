import Home from '../components/home/Home.jsx';
import Layout from '../layout/Layout';
import Seo from '../components/seo/Seo';

const HomePage = () => {
  return (
    <>
      <Seo
        title="SEBASTATSI MEDICAL COLLEGE"
        description="Sebastatsi medical college is a Medical College in Abovyan founded in 2010, our medical college has quickly established itself as a hub of excellence in medical education"
      />
      <Layout>
        <Home />
      </Layout>
    </>
  );
};

export default HomePage;
