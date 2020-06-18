import { createGlobalStyle } from "styled-components";
import { device } from "../components/device";
const GlobalStyle = createGlobalStyle`

@import url("https://fonts.googleapis.com/css?family=Montserrat:300,500,700");

*, *::before, *::after{
    box-sizing:border-box;
}

html{
font-size:62.5%;

@media ${device.mobileS}{
    font-size:50%;
}
}

body{
    font-family:'Montserrat', sans-serif;
    font-size: 1.6rem;

}


`;

export default GlobalStyle;
