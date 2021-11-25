import React, {useEffect} from "react";
import "./Accomplishment.css";
import { CircularProgressbar } from "react-circular-progressbar";
import {
  Box,
  Card,
  CardTitle,
  Circle,
  Container,
  Digits,
  Number,
  Percentage,
} from "./AcomplishmentsStyles";
import Aos from "aos";

const Accomplishment = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
}, []);
  return (
    <Container>
      <Card data-aos="flip-right" data-aos-duration="700" className="card">
        <Box>
          <Percentage className="percent">
            <svg className="circle">
              <circle className="circlebar" cx="70" cy="70" r="70"></circle>
              <circle className="circlebar" cx="70" cy="70" r="70"></circle>
            </svg>
            <Number className="number">
              <Digits className="digits">
                90 <span>%</span>
              </Digits>
            </Number>
          </Percentage>
          <CardTitle>HTML</CardTitle>
        </Box>
      </Card>
      <Card data-aos="flip-up" data-aos-duration="700" className="card">
        <Box>
          <Percentage className="percent">
            <svg className="circle">
              <circle className="circlebar" cx="70" cy="70" r="70"></circle>
              <circle className="circlebar" cx="70" cy="70" r="70"></circle>
            </svg>
            <Number className="number">
              <Digits className="digits">
                85 <span>%</span>
              </Digits>
            </Number>{" "}
          </Percentage>
          <CardTitle>CSS</CardTitle>
        </Box>
      </Card>
      <Card data-aos="flip-left" data-aos-duration="700" className="card">
        <Box>
          <Percentage className="percent">
            <svg className="circle">
              <circle className="circlebar" cx="70" cy="70" r="70"></circle>
              <circle className="circlebar" cx="70" cy="70" r="70"></circle>
            </svg>
            <Number className="number">
              <Digits className="digits">
                60 <span>%</span>
              </Digits>
            </Number>{" "}
          </Percentage>
          <CardTitle>JAVASCRIPT</CardTitle>
        </Box>
      </Card>
    </Container>
  );
};

export default Accomplishment;
