import React from "react";
import styled from "styled-components";
import HeaderNav from "../components/HeaderNav";

const HeaderWrapper = styled.div`
  /* position: absolute;
  line-height: 50px;
  width: 100%;
  margin: 0 auto;
  height: 100px; */
`;
const Header = () => (
  <HeaderWrapper>
    <HeaderNav />
  </HeaderWrapper>
);

export default Header;
