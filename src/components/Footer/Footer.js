import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { LinkedinSocialIcons, InstagramSocialIcons, GithubSocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  BackToTopButton,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle style={{color: "#f0e79d"}}>Call</LinkTitle>
          <LinkItem style={{fontSize:"1.2rem"}} href="tel:+919834477319">+919834477319</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle style={{color: "#f0e79d"}}>Email</LinkTitle>
          <LinkItem style={{fontSize:"1.2rem",  marginLeft:"38px"}} href="mailto:contact@jsmastery.com">
            prajwalladkat08@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan style={{color: "#f0e79d" , fontWeight:'700', fontStyle:"cursive"}}>Prajwal's Portfolio 2021©</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <GithubSocialIcons href="https://github.com/prajwal080501">
            <AiFillGithub  />
          </GithubSocialIcons>
          <LinkedinSocialIcons href="https://www.linkedin.com/in/prajwal-ladkat-0389931a7/">
            <AiFillLinkedin />
          </LinkedinSocialIcons>
          <InstagramSocialIcons href="https://www.instagram.com/prajwalladkat0805/">
            <AiFillInstagram />
          </InstagramSocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
      <BackToTopButton>Back</BackToTopButton>
    </FooterWrapper>
  );
};

export default Footer;
