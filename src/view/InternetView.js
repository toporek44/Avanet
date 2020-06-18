import React from "react";
import styled from "styled-components";
import InternetPricingData from "../assets/InternetPricingData";
import InternetPricingPc from "../components/InternetPricingPc";
import InternetPricingMobile from "../components/InternetPricingMobile";
import {device} from "../components/device";
const Wrapper = styled.div`
  width: 100%;
  background-color:#E02A2A;
  position: relative;
  padding: 10rem 0;
  display: flex;
flex-direction: column;

@media ${device.tablet}{
flex-direction:row;
}
   `
const InternetView = () => (
  <Wrapper>
      {/*{InternetPricingData.map(({download,price,upload})=>(*/}
      {/*    <InternetPricingMobile*/}
      {/*    download={download}*/}
      {/*    price={price}*/}
      {/*    upload={upload}*/}
      {/*    key={download}*/}
      {/*    />*/}

      {/*))}*/}

      <InternetPricingPc />
  </Wrapper>
);
export default InternetView;
