import React, {useEffect} from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import { SiAdobexd, SiFirebase } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import "./Technologies.css";
import { motion } from "framer-motion"
import Aos from "aos";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  LinkIcons
} from "./TechnologiesStyles";

const Technologies = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
}, []);
  return (
    <>
      <Section  id="tech">
        <SectionDivider />
        <SectionTitle data-aos="fade-left" data-aos-duration="500">Skills</SectionTitle>
        <SectionText data-aos="fade-up" data-aos-duration="300">
          Worked with top technologies like ReactJS Android Developement UI
          Designing using Adobe XD and Figma{" "}
        </SectionText>
        <List>
          <ListItem data-aos="fade-right" data-aos-duration="700">
            <LinkIcons href="https://reactjs.org/docs/getting-started.html" target="_blank">
              <FaReact className="icon" style={{ color: "lightblue" }} />
            </LinkIcons>
            <ListContainer>
              <ListTitle>Front-end</ListTitle>
              <ListParagraph>
                Experience in <br /> developing responsive and modern looking front-end for websites using React Js.
              </ListParagraph>
            </ListContainer>
          </ListItem>
          <ListItem data-aos="fade-up" data-aos-duration="700">
            <LinkIcons href="https://firebase.com" target="_blank">
              <SiFirebase className="icon" style={{ color: "#e3bd34" }} />
            </LinkIcons>
            <ListContainer>
              <ListTitle>Back-end</ListTitle>
              <ListParagraph>
                Experience with <br />
                Firebase Hosting deployment and database
              </ListParagraph>
            </ListContainer>
          </ListItem>
          <ListItem data-aos="fade-left" data-aos-duration="700">
            <LinkIcons target="_blank" href="https://www.adobe.com/products/xd.html?sdid=12B9F15S&mv=Search&ef_id=CjwKCAjwhuCKBhADEiwA1HegOfVlMiQey5hcuRV0EcFyfGYeVxqD3wNO-vMT5mux1LhVraY8zjAdPBoCP5cQAvD_BwE:G:s&s_kwcid=AL!3085!3!526748867465!e!!g!!adobe%20xd!1641846448!65452677551">
              <SiAdobexd className="icon" style={{ color: "#e83ae5 " }} />
            </LinkIcons>
            <ListContainer>
              <ListTitle>UI-UX Designing</ListTitle>
              <ListParagraph>
                Experience with <br /> UI and UX designing using Adobe XD and Figma{" "}
              </ListParagraph>
            </ListContainer>
          </ListItem>
        </List>
      </Section>
    </>
  );
};

export default Technologies;
