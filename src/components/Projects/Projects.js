import React,{useEffect} from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, ProjectCount } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import DynamicText from "../DynamicText/DynamicText";
import Aos from "aos";


const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
}, []);
  return (
    <>
      <Section nopadding id="projects">
    <SectionDivider />
    <DynamicText />
        <SectionTitle>Projects</SectionTitle>
        {/* <ProjectCount> Total Projects: {projects.length}</ProjectCount> */}

        <GridContainer data-aos="fade-right" data-aos-duration="700">
      {projects.map(({ id, image, title, description, tags, source, visit }) => (
        <BlogCard key={id}>
          <img src={image} alt="" />
          <TitleContent><HeaderThree title> {title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit} target="_blank">Source Code</ExternalLinks>
            <ExternalLinks href={source} target="_blank">Demo</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
    </>

  )
 
  
};

export default Projects;