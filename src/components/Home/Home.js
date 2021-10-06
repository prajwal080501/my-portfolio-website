import Acomplishments from '../Acomplishments/Acomplishments';
import BgAnimation from '../BackgrooundAnimation/BackgroundAnimation';
import Hero from '../Hero/Hero';
import Projects from '../Projects/Projects';
import Technologies from '../Technologies/Technologies';
import { Layout } from '../../layout/Layout';
import { Section } from '../../styles/GlobalComponents/index';
import Footer from "../Footer/Footer";




import theme from "../../themes/default";

const Home = () => {
  return (
      <Layout>
      <Section id="home" grid>
        <Hero />
        <BgAnimation />
       </Section>
      <Projects />
      <Technologies />
      <Acomplishments />
      <Footer />
    </Layout>
    
  );
};

export default Home;
