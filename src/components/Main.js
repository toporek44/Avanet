import React from "react";
import styled from "styled-components";
import Circle from "../components/Circles";
import { device } from "./device";
import {Link} from "react-router-dom";

const ColorOverlay = styled.div`
  background: linear-gradient(
    240.64deg,
    #ef2424 0%,
    #d00c0c 0.01%,
    #f91414 6.77%,
    #c81212 47.92%,
    #8c2c2c 99.97%,
    #761f1f 99.98%
  );
  z-index: -1;
  width: 100%;
  height: 100vh;
  margin: 0 0 10rem 0;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  overflow: hidden;
  padding-top: 4rem;
  z-index: 10;
`;

const Button = styled.button`
text-decoration: none;
font-family: Montserrat;
font-size: 2.8rem;
background:none;
border:none;
border-bottom: 3px solid red;
color: #fff;
cursor: pointer;
`
const Heading = styled.h1`
  color: #fff;
  text-shadow: 0 1px 0 #cccccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9,
    0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
    0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),
    0 20px 20px rgba(0, 0, 0, 0.15), 2px 2px 2px rgba(206, 89, 55, 0);
  font-size: 7rem;
  width: 60%;
  margin: 25rem 0 5rem 0;

  @media ${device.mobileS} {
    margin: 9rem 0 5rem 0;

    font-size: 3.8rem;
    width: 100%;
  }
  @media ${device.mobileM} {
    font-size: 4.1rem;
    width: 70%;
  }

  @media ${device.mobileL} {
    margin: 10rem 0 5rem 0;

    font-size: 5rem;
    width: 90%;
  }
  @media ${device.laptop}, ${device.tablet} {
    margin: 25rem 0 5rem 0;

    font-size: 7rem;
    width: 100%;
  }
  @media ${device.laptopL} {
    margin: 35rem 0 5rem 0;

    font-size: 8rem;
    width: 100%;
  }
`;
const Main = () => (
  <ColorOverlay>
    <Wrapper>
      <Heading>Naszybszy Internet Swiatlowodowy w Powiecie Dąbrowskim</Heading>
      <Button width="170px" height="45px" as={Link} to='/Internet'>
        Dołącz Teraz
      </Button>
    </Wrapper>
    <Circle />
  </ColorOverlay>
);
export default Main;
