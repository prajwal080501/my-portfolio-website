import styled, {  } from "styled-components";
import { Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiFillFile } from "react-icons/ai";
import { FaFileDownload } from "react-icons/fa";
import DownloadLink from "react-download-link";
import {AiFillPlayCircle} from "react-icons/ai";



export const WhatsappContainer = styled.a`
  // position: fixed;
  // width: 60px;
  // height: 60px;
  // bottom: 40px;
  // right: 40px;
  // color: #fff;
  // border-radius: 50px;
  // text-align: center;
  // font-size: 30px;
  // box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2), 0 4px 18px 0 rgba(0, 0, 0, 0.19);
  // z-index: 100;
  // transition: all 0.5s ease;
  
  }

  @media screen and (max-width: 768px) {
    width: 70px;
    height: 70px;
    bottom: 20px;
    right: 10px;
    font-size: 22px;
  }
`;
export const DownLoadContainer = styled.a`
  // position: fixed;
  // width: 60px;
  // height: 60px;
  // bottom: 40px;
  // right: 40px;
  // color: #fff;
  // border-radius: 50px;
  // text-align: center;
  // font-size: 30px;
  // box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2), 0 4px 18px 0 rgba(0, 0, 0, 0.19);
  // z-index: 100;
  // transition: all 0.5s ease;


  
  }

  @media screen and (max-width: 768px) {
    width: 70px;
    height: 70px;
    bottom: 20px;
    right: 10px;
    font-size: 22px;
  }

  
`;

export const WhatsappIcon = styled(AiOutlineArrowUp)`
  margin-top: 16px;
  transition: all 0.3s ease;

  @media screen and (max-width: 768px) {
    margin: 22px;
    font-size: 1.5rem;
  }

  &:hover{
    transition: all 0.3s ease;
    transform: scale(1.08);
  }
`;

export const DownloadIcon = styled(AiFillFile)`
margin-top: 16px;
transition: all 0.3s ease;

  @media screen and (max-width: 768px) {
    margin: 22px;
    font-size: 1.5rem;
  }
  
  &:hover{
    transition: all 0.3s ease;
    transform: scale(1.08);
  }
  `

export const Title = styled.p`
color: white;
font-size: .2rem;

`;

export const PlayContainer = styled.a`
@media screen and (max-width: 768px) {
  width: 60px;
  height: 60px;
  bottom: 20px;
  right: 10px;
  font-size: 22px;
}
`;

export const PlayIcon = styled(AiFillPlayCircle)`
margin-top: 16px;
transition: all 0.3s ease;

  @media screen and (max-width: 768px) {
    margin: 20px;
    font-size: 1.9rem;
  }

  &:hover{
    transition: all 0.3s ease;
    transform: scale(1.08);
  }

`;
