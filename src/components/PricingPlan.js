import React from "react";
import styled, { css } from "styled-components";
import { device } from "./device";
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: #e01818;
  padding: 4rem 10%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 9rem;
    font-weight: 700;
    margin: 0;
  }

  @media ${device.mobileS} {
    h2 {
      font-size: 3rem;
    }
  }
  @media ${device.mobileM} {
    h2 {
      font-size: 3.5rem;
      padding-bottom: 0rem;
    }
  }
  @media ${device.mobileL} {
    h2 {
      font-size: 3.5rem;
      padding-bottom: 0rem;
    }
  }
  @media ${device.laptop}, ${device.tablet} {
    h2 {
      font-size: 6.6rem;
      padding-bottom: 0rem;
    }
  }
  @media ${device.laptopL} {
    h2 {
      font-size: 8.6rem;
      padding-bottom: 3rem;
    }
  }
`;

const PlanContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0;
  width: 80%;
  min-width: 1300px;
  height: 700px;
  margin: 2rem 0 7rem 0;
  align-items: center;

  @media ${device.mobileS} {
    transform: scale(0.22);
    margin: 2rem 0 10rem 0;
    height: 120px;
  }
  @media ${device.mobileM} {
    transform: scale(0.27);
    margin: 2rem 0 10rem 0;
    height: 100px;
  }
  @media (min-width: 530px) {
    transform: scale(0.37);
    margin: 2rem 0 10rem 0;
    height: 100px;
  }
  @media ${device.tablet} {
    min-width: 1300px;
    height: 300px;
    transform: scale(0.55);
  }
  @media ${device.laptop} {
    transform: scale(0.75);
    height: 550px;
  }
  @media ${device.laptopL} {
    transform: scale(0.85);
  }
`;

const Box = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-width: 100%;
  height: 550px;
  background-color: #e01818;
  border: 9px solid #fff;
  padding: 4rem 6rem;
  font-size: 3rem;


  h3 {
    position: absolute;
    top: 0;
    height: 200px;
    width: 100%;
    margin: 0 !important;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 6rem;
  }

  .middleText {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 180px;
    background-color: #fff;
    color: red;
    font-size: 8rem;
    font-weight: 700;
    transform-origin: 50%;
  }
  .bottomText {
    position: absolute;
    bottom: 0;
    height: 200px;
    width: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 10rem;
    font-weight: 700;
  }

  ${({ secondary }) =>
    secondary &&
    css`
      height: 650px;
      transform: scaleX(1.1);
      z-index: 100;

      h3 {
        font-size: 9rem;
      }

      .middleText {
        font-size: 10rem;
        font-weight: 700;
        height: 250px;
      }
      .bottomText {
        font-size: 12rem;
      }
    `}
`;

const Footer = styled.div`
  font-size: 3rem;
  margin-top: 2rem;
  padding-bottom: 4rem;

  @media ${device.mobileS} {
    font-size: 2rem;
  }
  @media ${device.mobileM} {
    font-size: 2rem;
    margin-top: 6rem;
    padding-top: 4rem;
  }
  @media (min-width: 530px) {
    padding-top: 10rem;
  }
  @media ${device.tablet} {
    font-size: 3rem;
    margin-top: 3rem;
    padding-top: 8rem;
  }
  @media ${device.laptop} {
    font-size: 3rem;
    margin-top: 3rem;
    padding-top: 4rem;
  }
`;

function PricingPlan() {
  return (
    <Wrapper>
      <h2>Dlaczego AvaNET ?</h2>
      <PlanContainer>
        <Box>
          <h3>Światłowód</h3>
          <div className="middleText">DO</div>
          <div className="bottomText">1 Gb/s</div>
        </Box>
        <Box secondary>
          <h3>Cena</h3>
          <div className="middleText">OD</div>
          <div className="bottomText">49 zł</div>
        </Box>
        <Box>
          <h3>Szybka</h3>
          <div className="middleText">OBSŁUGA</div>
          <div className="bottomText">Klienta</div>
        </Box>
      </PlanContainer>
      <Footer>
        * I wiele innych powodów dla których powinieneś wybrać AvaNET
      </Footer>
    </Wrapper>
  );
}

export default PricingPlan;
