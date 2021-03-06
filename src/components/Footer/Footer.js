import React, {useEffect} from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import Aos from "aos";
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
import "aos/dist/aos.css";


const Footer = () => {
  Aos.init();
window.onload = function(){
	setTimeout(function () {
		var x = document.querySelectorAll(".yourNexthigherObject");
		for (var i = 0; i < x.length; i++) {
			x[i].style.display = "block";
			x[i].style.overflowX = "hidden";
		}
	}, 500);
}
  return (
    <FooterWrapper id="footer">
      <LinkList data-aos="fade-right" data-aos-duration="700" >
        <LinkColumn>
          <LinkTitle style={{color: "#f0e79d"}}>Call</LinkTitle>
          <LinkItem style={{fontSize:"1.2rem"}} href="tel:+919834477319">+919834477319</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle style={{color: "#f0e79d"}}>Email</LinkTitle>
          <LinkItem style={{fontSize:"1.2rem",  marginLeft:"38px"}} href="mailto:mail@prajwalladkat.tech">
            mail@prajwalladkat.tech
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan data-aos="fade-right" data-aos-duration="700" style={{color: "#f0e79d" , fontWeight:'700', fontStyle:"cursive"}}>Prajwal's Portfolio 2022©</Slogan>
        </CompanyContainer>
        <SocialContainer data-aos="fade-left" data-aos-duration="700">
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
