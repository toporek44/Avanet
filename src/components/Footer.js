import React from "react";
import styled from "styled-components";
import { device } from "./device";
const Wrapper = styled.div`
  position: relative;
  bottom: 0;
  width: 100%;
  background: linear-gradient(
    232.65deg,
    #ef2424 0%,
    #d00c0c 0.01%,
    #f91414 6.77%,
    #c81212 47.92%,
    #8c2c2c 99.97%,
    #761f1f 99.98%
  );
`;

const FooterItem = styled.div`
  height: 100%;
  margin-bottom: 5rem;
  color: #fff;
  font-size: 2.4rem;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .openHours {
    line-height: 4.5rem;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  padding: 5rem 0;
  margin: 0 auto;

  .info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 8rem;
    width: 90%;
  }
  @media ${device.mobileS} {
    flex-direction: column;
    .info {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  @media ${device.tablet} {
    flex-direction: column;
    .info {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media ${device.laptop} {
    flex-direction: row;
    .info {
      grid-gap: 4rem;
    }
  }
`;
const FirstCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const Copyright = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 50px;
`;

const Map = styled.iframe`
  width: 100%;
  height: 500px;
  border: none;
  margin: 0 0 0 2rem;

  @media ${device.mobileS} {
    height: 200px;
  }
  @media ${device.tablet} {
    height: 400px;
  }
  @media ${device.laptop} {
    height: 400px;
  }
  @media ${device.laptopL} {
    height: 500px;
  }
`;
function Footer() {
  return (
    <Wrapper>
      <Container>
        <div className="info">
          <FirstCol>
            <FooterItem>
              <h3>Kontakt</h3>
              <ul>
                <li>AVANET Bartłomiej Czyż</li>
                <li>ul.Kościuszki 8</li>
                <li>33-230 Szczucin</li>
                <li>NIP: 871-164-20-62</li>
              </ul>
            </FooterItem>
            <FooterItem>
              <h3>Godziny otwarcia:</h3>
              <ul>
                <li>pn - pt 9:00 - 17:00</li>
                <li>sb 9:00 - 13:00</li>
              </ul>
            </FooterItem>
          </FirstCol>
          <FooterItem>
            <h3>Przejdź do</h3>
            <ul className="openHours">
              <li>Oferta</li>
              <li>Sklep</li>
              <li>Serwis</li>
              <li>Kontakt</li>
              <li>Internet</li>
              <li>Telewizja</li>
              <li>Telefon</li>
            </ul>
          </FooterItem>
        </div>
        <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4284.968231926039!2d21.070900430398645!3d50.31325403659779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473d6393aec83c27%3A0x3d41414ed9e6667f!2sAVANET%20B.%20CZY%C5%BB!5e0!3m2!1spl!2spl!4v1584546822937!5m2!1spl!2spl" />
      </Container>

      <Copyright>All rights reserved AvaNET Ⓒ 2020</Copyright>
    </Wrapper>
  );
}

export default Footer;
