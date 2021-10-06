import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import DynamicText from "../DynamicText/DynamicText";



const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <DynamicText />
    <SectionTitle>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({id, image, title, description, tags, source, visit} )=> (
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
            <ExternalLinks href ={visit}>Source Code</ExternalLinks>
            <ExternalLinks href ={source}>Demo</ExternalLinks>
          </UtilityList>
      </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;