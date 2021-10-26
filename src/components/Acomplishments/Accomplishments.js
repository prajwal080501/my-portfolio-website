import React from "react";
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

const Accomplishment = () => {
  return (
    <Container>
      <Card className="card">
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
      <Card className="card">
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
      <Card className="card">
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
