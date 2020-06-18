import React from "react";
import styled, { css } from "styled-components";
import Button from "../components/Button";
import { device } from "./device";
import { JumbotronDatas } from "../assets/JumbotronDatas";

const Jumbotron = styled.div`
  position: relative;
  display: flex;
  width: 70%;
  height: 400px;
  background-color: #c81212;
  padding: 6rem;
  margin: 13rem auto 13rem auto;
  border:3px solid #ff0000;

  ::before{
    content:"";
    position:absolute;
    top:0;
    left:0;
    transform:translate(40px, 30px);
    width:100%;
    height:100%;
    border:3px solid #ff0000;
    z-index:-2;
  }
  @media ${device.mobileS},
  ${device.tablet},
  ${device.laptopL},
  ${device.desktop} {
    padding: 6rem 4rem;
    margin: 14rem auto;
    height: inherit;
    width:80%;
    ::before{
      transform:translate(20px, 20px);

    }
  }

  ${({ secondary }) =>
    secondary &&
    css`
      flex-direction: row-reverse;
    `}
 
    @media ${device.laptop} {
    height: 400px;
    margin: 13rem auto 13rem auto;
    padding: 6rem;
    width:70%;
  ::before{
      transform:translate(40px, 30px);

    }
    }
 
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
  text-align: right;
  h4 {
    font-size: 6rem;
    margin: 0;
  }
  p {
    font-weight: 300;
    font-size: 2rem;
  }

  ${({ secondary }) =>
    secondary &&
    css`
      align-items: flex-start;
      text-align: left;
    `}
  @media ${device.mobileS},
  ${device.tablet},
  ${device.laptopL},
  ${device.desktop} {
    align-items: center;
    justify-content: center;
    margin:8rem 0 0 0;
    width: 100%;
    text-align: left;

    h4{
      font-size: 4rem;
    text-align:center;

    }
  }

  @media ${device.laptop} {
    align-items: flex-end;
    width: 50%;
    text-align: right;
    margin:0 0 0 0;

    ${({ secondary }) =>
      secondary &&
      css`
        align-items: flex-start;
        text-align: left;
      `}
  }
`;
const IconContainer = styled.div`
  width: 40%;

  @media ${device.mobileS},
    ${device.tablet},
    ${device.laptopL},
    ${device.desktop} {
    width: 0;
  }
`;
const Icon = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(-60px, -60px);
  height: 400px;
  width: 500px;

  @media ${device.mobileS},
   ${device.tablet},
   ${device.desktop} 
{
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 180px;
  }
  ${({ secondary }) =>
    secondary &&
    css`
      left: 0;
      transform: translate(30px, -60px);
    `}

    @media ${device.laptop} {
      right:0;
      left:initial;
      height: 350px;
      width: 450px;
      transform: translate(80px, 20px);
    
   
  ${({ secondary }) =>
    secondary &&
    css`
      left: 0;
      transform: translate(-80px, 20px);
    `}
  }

  @media  ${device.laptopL}{
      
      height: 400px;
      width: 500px;
      transform: translate(-40px, -60px);

   

   ${({ secondary }) =>
     secondary &&
     css`
       left: 0;
       transform: translate(40px, -60px);
     `}
  }
`;

function JumbotronComp() {
  return (
    <div>
      {JumbotronDatas.map(({ heading, desc, icon }, i) =>
        (i + 1) % 2 === 0 ? (
          <>
            <Jumbotron key={heading}>
              <Container secondary>
                <h4>{heading}</h4>
                <p>{desc}</p>
                <Button secondary>Więcej</Button>
              </Container>
              <IconContainer>
                <Icon src={icon} />
              </IconContainer>
            </Jumbotron>
          </>
        ) : (
          <Jumbotron secondary>
            <Container>
              <h4>{heading}</h4>
              <p>{desc}</p>
              <Button secondary>Więcej</Button>
            </Container>
            <IconContainer>
              <Icon src={icon} secondary />
            </IconContainer>
          </Jumbotron>
        )
      )}
    </div>
  );
}

export default JumbotronComp;
