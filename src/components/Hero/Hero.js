import React from "react";
import Aos from "aos";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, HeroSection, ResumeDownloadButton } from "./HeroStyles";
import DynamicText from "../DynamicText/DynamicText";

const Hero = (props) => {
  return (
    <>
      <HeroSection id="home" row nopadding>
        <LeftSection
          initial={{ opacity: 0, x: -100, y: 0, z: 0 }}
          animate={{ opacity: 1, x: 0, y: 0, z: 0 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0 }}
        >
          <SectionTitle
            initial={{ opacity: 0, x: -100, y: 0, z: 0 }}
            animate={{ opacity: 1, x: 0, y: 0, z: 0 }}
            transition={{ duration: 1 }}
          >Hello I'm Prajwal Ladkat</SectionTitle>

          <SectionText
            initial={{ opacity: 0, x: -100, y: 0, z: 0 }}
            animate={{ opacity: 1, x: 0, y: 0, z: 0 }}
            transition={{ duration: 1 }}
          >
            Experience in React JS and can build optimized and modern web apps.
          </SectionText>
          <Button
            onClick={() =>
              (window.location = "https://github.com/prajwal080501")
            }
          >
            Learn more
          </Button>
        </LeftSection>
      </HeroSection>
    </>
  );
};

export default Hero;
