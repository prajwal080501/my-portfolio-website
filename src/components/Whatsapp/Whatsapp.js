import { IoLogoWhatsapp } from "react-icons/io";
import React, { useState } from "react";
import "./Whatsapp.css";
import audio from "../../audio/gta.mp3";
import pdf from "./Resume.pdf";
import ReactAudioPlayer from "react-audio-player";

import {
  DownLoadContainer,
  PlayButton,
  DownloadIcon,
  Title,
  WhatsappContainer,
  WhatsappIcon,
  PlayContainer,
  PlayIcon,
} from "./WhatsappElement";
import { AiOutlineArrowUp } from "react-icons/ai";

const Whatsapp = () => {
  const [button, showButton] = useState(false);
  const [status, setStatus] = useState(false);
  const DisplayButton = () => {
    if (window.scrollY >= 580) {
      showButton(true);
    } else {
      showButton(false);
    }
  };
  window.addEventListener("scroll", DisplayButton);

  function play() {
    var audio = document.getElementById("audio");
    audio.play();
  }
  function pause() {
    var audio = document.getElementById("audio");
    audio.pause();
  }
  return (
    <>
      <WhatsappContainer
        className={button ? "button active" : "button  "}
        href="#header"
        title="Go to top"
      >
        <WhatsappIcon />
      </WhatsappContainer>
      <DownLoadContainer
        onClick={() => {
          alert("Downloading");
        }}
        href={pdf}
        download="Resume"
        className={button ? "button2 active" : "button2  "}
        title="Download Resume"
      >
        <DownloadIcon />
      </DownLoadContainer>
      <PlayContainer
        className={button ? "button3 active" : "button3  "}
        onClick={() => {
          setStatus(!status);
          if (status) {
            pause();
          } else {
            play();
          }
        }}
        title="Play/Pause"
      >
        <PlayIcon />
      </PlayContainer>
      <ReactAudioPlayer
        id="audio"
        style={{ display: "none" }}
        src={audio}
        autoPlay
        controls
      />{" "}
    </>
  );
};

export default Whatsapp;
