import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, HeroSection } from './HeroStyles';
import DynamicText from "../DynamicText/DynamicText";

const Hero = (props) => (
  <HeroSection id="home" row nopadding>
    <LeftSection >
      <SectionTitle>
        Hello I'm Prajwal Ladkat
      </SectionTitle>
      
      <SectionText>
        Experience in React JS and can build optimized and modern web apps. 
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/prajwal080501'}>Learn more</Button>
    </LeftSection>
    
   
    
  </HeroSection>
);

export default Hero;