import Acomplishments from "../Acomplishments/Accomplishments";
import BgAnimation from "../BackgrooundAnimation/BackgroundAnimation";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import Technologies from "../Technologies/Technologies";
import { Layout } from "../../layout/Layout";
import { Section } from "../../styles/GlobalComponents/index";
import Footer from "../Footer/Footer";
import img from "./face.png";
import { MdComputer } from "react-icons/md";

import theme from "../../themes/default";
import {
  ImageContainer,
  Container,
  NameContainer,
  SkillContainer,
  CardSection,
  LeftSection
} from "./HomeElements";
import { useSpring, animated } from "react-spring";
import Accomplishment from "../Acomplishments/Accomplishments";
import BackgroundAnimation from "../BackgrooundAnimation/BackgroundAnimation";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Home = () => {
  let parallax;
  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1,
  ];
  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 10, tension: 200, friction: 50 },
  }));
  return (
    <Layout>
      <Section
        initial={{ opacity: 0, x:100, y: 0, z: 0 }}
        animate={{ opacity: 1, x: 0, y: 0, z: 0 }}
        transition={{duration: 1}}
        exit={{ opacity: 0 }}
        id="home" grid>
        <Hero />
        <Section>
          <Container
            onMouseMove={({ clientX: x, clientY: y }) =>
              set({ xys: calc(x, y) })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{
              transform: props.xys.interpolate(trans),
            }}
          >
            <ImageContainer
              initial={{ oapcity: 1 }}
              animate={{ rotate: 360 }}
              transition= {{duration: 1}}
              exit={{opacity: 1}}
              src={img}
              alt=""
            ></ImageContainer>
            <NameContainer>Prajwal Ladkat</NameContainer>
            <SkillContainer>
              Web Developer, Designer, UI & UX Design 
            </SkillContainer>
            <MdComputer
              style={{
                color: "black",
                fontWeight: "600",
                fontSize: "5rem",
                marginTop: "2px",
              }}
            />
          </Container>
        </Section>
      </Section>
      <Projects />
      <Technologies />
      <Accomplishment/>
      <Footer />
    </Layout>
  );
};

export default Home;
