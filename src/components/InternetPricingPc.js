import React from 'react';
import styled from "styled-components";
import {ReactComponent as Speedmeter} from "../assets/svg/speedmeter.svg";
import InternetPricingData from "../assets/InternetPricingData";


const Wrapper = styled.div`
displa:flex;
flex-direction: column;
width:95%;
margin:0 auto;
border:2px solid #fff;
padding: 1rem;
`

const Container = styled.div`
display:flex;
justify-content: space-around;
flex-direction: row;
align-items: center;

`
const ContainerPrice = styled.div`
display:flex;
justify-content: center;
flex-direction: column;
align-items: center;
height: 100%;
width: 100%;
text-align: center;
`
const Download = styled.div`
font-size: 4.5rem;
font-weight: 700;
margin:0 1rem;
width: 100%;
padding: 2rem 0 0 0;
`

const Price = styled.div`
margin-top: 2rem;
display:flex;
flex-direction: column;
align-items: center;
font-size: 7rem;
font-weight: 700;
 text-align: center;
 width: 100%;
 //border-left:2px solid #fff;

span{
font-size: 4rem;
}


`

const Text = styled.div`
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

const StyledSpeedmeter = styled(Speedmeter)`
margin-top: 2rem;
width:180px;
height: 180px;
padding:0 1rem;
`

const Button = styled.button`
position: relative;
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
const InternetPricingPc = () => {
    return (
        <Wrapper>
            <Container>
                {InternetPricingData.map(({download,price})=>(
                    <>
                        <ContainerPrice>
                            <Download>{download} Mb/s</Download>
                            <Price>{price} <span>zł/mies</span></Price>
                        </ContainerPrice>
                    </>
                    ))}
            </Container>

            <Text>Aktywacja od 100zł</Text>
            <Container>
                <StyledSpeedmeter/>
            </Container>
            <Text>Wifi 6 zł</Text>
            <Container>
                {InternetPricingData.map(({upload})=><><Upload><span>Upload</span>{upload} Mb/s</Upload><Button>More</Button></>)}
            </Container>
        </Wrapper>
    );
};

export default InternetPricingPc;