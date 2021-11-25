import styled from "styled-components";
import { useSpring, animated } from 'react-spring';
import { MdComputer } from "react-icons/md";
import { motion } from "framer-motion";



export const ImageContainer = styled(motion.img)`
border-radius: 50%;
border: 2px solid #fff;
width: 200px;
height: auto;
box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2), 0 4px 18px 0 rgba(0, 0, 0, 0.19);



`;

export const Container = styled(animated.div)`
display: inlin-block;
padding :2em;
width: 90%;
height: 100%;
background: #c7d2fe66;
backdrop-filter: blur(10px);
border-radius: 10px;
z-index: 1;
position: relative;
border:2px solid transparent;
background-clip: border-box;
box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2), 0 4px 18px 0 rgba(0, 0, 0, 0.19);
margin-top: 10px;
margin-bottom: 20px;

cursor: pointer;
@media screen and (max-width: 768px) {
    width: 90%;
    height: auto;
    margin: auto;
    margin-left: -2px;
    margin-bottom: 10px;
    

}


`

export const NameContainer = styled.h2`
color: black;
font-weight: 700;
margin: 10px;
font-family: 'Roboto', sans-serif;`;

export const SkillContainer = styled.h3`
color: black;
font-weight: 500;
`