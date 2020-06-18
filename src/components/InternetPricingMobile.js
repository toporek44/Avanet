import React from "react";
import styled from "styled-components";
import {ReactComponent as Speedmeter} from "../assets/svg/speedmeter.svg";
import {device} from "./device";

const Wrapper = styled.div`
position: relative;
width:310px;
margin:0 auto;
border:2px solid #fff;
padding: 2rem 0;
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 8rem;



`;
const Download = styled.div`
margin-top:1rem;
font-size: 5rem;
font-weight: 700;
`
const Price = styled.div`
margin-top: 2rem;
display:flex;
flex-direction: column;
align-items: center;
font-size: 7rem;
font-weight: 700;

span{
font-size: 4rem;
}
`

const Activation = styled.div`
font-size: 3rem;
font-weight: 500;
margin-top: 4rem;
width:100%;
height: 55px;
background: #fff;
color:#E30E0E;
text-align: center;
line-height: 55px;
`
const StyledSpeedmeter = styled(Speedmeter)`
margin-top: 2rem;
width:180px;
height: 180px;
`

const Upload = styled.div`
margin-top: 4rem;
display: flex;
flex-direction: column;
align-items: center;
font-size: 5rem;
font-weight: 700;
margin-bottom: 4rem;
span{
font-size: 3rem;

}
`

const Button = styled.button`
position: absolute;
bottom: -20px;
z-index: 1000;
color:#fff;
font-size: 3rem;
padding: .6rem 2rem;
width:200px;
background:#FF3434;
border:2px solid #fff;
cursor: pointer;
&:hover{
background:#ff6b62;
}
`
function InternetPricingMobile({download, price, upload}) {
  return (

    <Wrapper>
      <Download>{download} Mb/s</Download>
      <Price>{price}<span>zł/mies</span></Price>
      <Activation>Aktywacja od 99 zł</Activation>
        <StyledSpeedmeter/>
        <Activation>Wifi 6 zł</Activation>
        <Upload><span>Upload</span>{upload} Mb/s</Upload>
        <Button>Zainteresowany</Button>
    </Wrapper>
  );
}

export default InternetPricingMobile;
