import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 0.5rem;
  padding-top: 2rem;
  margin-bottom:10px;

  @media screen and (max-width: 640px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
  
`;
export const Div1 = styled(motion.div)`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;  flex-direction: row;
  align-content: center;
  @media screen and (max-width: 768px) {
    grid-area: 1 / 1 / 2 / 3;
   
  
    
   
  }
`;
export const Div2 = styled(motion.div)`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 640px) {
    grid-area: 2 / 2 / 3 / 5;
  align-items: center;
  justify-content: center;
  }
`;
export const Div3 = styled(motion.div)`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 640px) {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
    margin-bottom:18%;
   
  }
`;

// Navigation Links
export const NavLink = styled.a`
transition: all 0.5s ease-in-out;
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 1);
  transition: 0.4s ease;
  &:hover {
    color: #f0e79d;
    opacity: 1;
    cursor: pointer;
    border-bottom: 3px solid white;
   }
  @media screen and (max-width: 640px) {
    padding: 1.9rem;
    margin: 5px;
    
  }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media screen and (max-width: 640px) {
    padding: 0.4rem 0;
  }
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const Span = styled.span`
font-size: 3rem;
font-family: 'Poppins', sans-serif;
margin-top:0px;
margin-left:15px;
@media screen and (max-width: 640px) {
  font-size: 1.5rem;
  margin-right: 15%;
}

`;
export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: 640px) {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;


// Social Icons 

export const LinkedinSocialIcons = styled.a`
transition: 0.3s ease;
color: white;
border-radius: 80px;
  padding:10px;
  font-size:4rem;
  margin: 3%;
&:hover {
    background-color:white; 
    transform: scale(1.1);
    cursor: pointer;
    padding: 10px;
    color: #3244a8;
    
  }
  @media screen and (max-width:640px){
    font-size:2.3rem;
    
  }
`
export const GithubSocialIcons = styled.a`
transition: 0.3s ease;
color: white;
border-radius: 80px;
  padding:10px;
  font-size:4rem;
  margin: 3%;
&:hover {
    background-color:white; 
    transform: scale(1.1);
    cursor: url(https://cdn.iconscout.com/icon/free/png-256/github-1-1169416.png);
    padding: 10px;
    color: black;
    
  }
  @media screen and (max-width:640px){
    font-size:2.3rem;
    
  }
`
export const InstagramSocialIcons = styled.a`
transition: 0.3s ease-in-out;
color: white;
border-radius: 80px;
  padding:10px;
  font-size:4rem;
  margin: 3%;
&:hover {
    background-color:white; 
    transform: scale(1.1);
    cursor: pointer;
    padding: 10px;
    color: red;
 
    
  }
  @media screen and (max-width:640px){
    font-size:2.3rem;
    
  }
`

export const Link = styled.li`
@media screen and (max-width:640px){
  margin-left:100px;
}
`
export const logo = styled.li`
margin-right: 1px;
padding: 10px;
display: flex;
flex-direction: row;
font-size:5rem;
@media screen and (max-width: 768px) {

}

`