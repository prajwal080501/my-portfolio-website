
import React from 'react';
import {Link} from "react-router-dom";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, logo } from 'react-icons/ai';
import { DiCssdeck, ImUserTie } from 'react-icons/im';
import img from "./logo512.png";

import { Container, Div1, Div2, Div3, NavLink, LinkedinSocialIcons, InstagramSocialIcons, GithubSocialIcons ,Span } from './HeaderStyles';

const Header = () =>  (
  <Container
  initial={{ opacity: 0, x: 0, y: -100, z: 0 }}
  animate={{ opacity: 1, x: 0, y: 0, z: 0 }}
  transition={{ duration: 1 }}
  >
    <div1 id="header"
      initial={{ opacity: 0, x: 0, y: -100, z: 0 }}
      animate={{ opacity: 1, x: 0, y: 0, z: 0 }}
      transition={{ duration: 1 }}
    >
      <Link href="#">
        <a href="/" style={{ display: "flex", alignItems: "center", color: "white", fontWeight: "500" }}>
          <logo><img src={img} style={{height: "2.2rem", marginLeft: "30%"}} href="/" alt="" /></logo><Span>Portfolio</Span>
          
        </a>
      </Link>
    </div1>
    <Div2 style={{ marginRight: "20%" }}
      initial={{ opacity: 0, x: 0, y: -100, z: 0 }}
      animate={{ opacity: 1, x: 0, y: 0, z: 0 }}
      transition={{ duration: 1 }}
    >
      <li>
        <a href="#projects">
          <NavLink>Projects</NavLink>
        </a>
      </li>
      <li>
        <a href="#tech">
          <NavLink>Skills</NavLink>
        </a>
      </li>
      <li>
        <a href="#footer">
          <NavLink>Contact</NavLink>
        </a>
      </li>
    </Div2>
    <Div3 style={{ marginRight: "20%" }}
      initial={{ opacity: 0, x: 0, y: -100, z: 0 }}
      animate={{ opacity: 1, x: 0, y: 0, z: 0 }}
      transition={{ duration: 1 }}
    >
      <GithubSocialIcons href="https://github.com/prajwal080501" target="_blank">
        <AiFillGithub />
      </GithubSocialIcons>
      <LinkedinSocialIcons  href="https://www.linkedin.com/in/prajwal-ladkat-0389931a7/">
        <AiFillLinkedin />
      </LinkedinSocialIcons>
      <InstagramSocialIcons style={{color:"linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); "}} href="https://www.instagram.com/prajwalladkat0805/">
        <AiFillInstagram />
      </InstagramSocialIcons>
    </Div3>
  </Container>
);

export default Header;
