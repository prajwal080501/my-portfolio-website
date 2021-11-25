import styled from 'styled-components';
import {Link} from "react-router-dom";
import { motion } from 'framer-motion';

export const LeftSection = styled(motion.div)`
  width: 100%;
  padding:10px;
  word-spacing:10px;
  height: fit-content;
  @media screen and (max-width: 640px) {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media screen and (max-width: 768px)} {
    width: 70%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
 
export const HeroSection = styled.section`
display: ${(props) => props.grid ? "grid" : "flex" };
  flex-direction: ${(props) => props.row ? "row" : "column" };
  padding: ${(props) => props.nopadding ? "0" : "32px 48px 0" } ;
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  margin-right: 17%;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 768px) {
   display: none;
  }
  @media screen and (max-width: 640px) {
    padding: ${(props) => props.nopadding ? "0" : "16px 16px 0" } ;

    width: calc(100vw - 32px);
    flex-direction: column;
  }
`

