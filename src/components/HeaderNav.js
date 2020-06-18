import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";
import Hamburger from "../components/Hamburger";
import { device } from "./device";

const Styles = styled.div`
  background: linear-gradient(
    189.26deg,
    #ef2424 0%,
    #d00c0c 0.01%,
    #f91414 6.77%,
    #c81212 47.92%,
    #8c2c2c 99.97%,
    #761f1f 99.98%
  );
  position: fixed;
  width: 100%;
  z-index: 999;
  box-shadow: 0 5px 10px -10px #000;
  user-select: none;
  top: 0;
  transition: all 0.5s ease-in-out;

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 1em 0;
    width: 80%;
    height: 60px;
    
    @media ${device.laptop}{
    height:100px;
    }
  }

  .navItem {
    list-style: none;

    &Link {
      font-weight: 300;
      text-decoration: none;
      color: #e60505;

      &Active {
        font-weight: 700;
      }
    }
  }

  .logo {
    display: block;
    color: #fff;
    font-size: 3rem;
    font-weight: 700;
    line-height: 50px;
    z-index: 3;
    cursor: pointer;
    user-select: none;
    text-decoration: none;

    span {
      color: rgb(255, 0, 0);
      text-shadow: 2px 1px 0 rgb(54, 45, 45);
    }
    
    @media ${device.tablet}{
    font-size:4.5rem;
    }
  }

  .ulWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 1023px) {
    .ulWrapper {
      display: none;
    }
  }
`;

const HeaderNav = () => {
  const wrapper = useRef(null);
  let prevScrollpos = window.pageYOffset;

  const handleMenuHide = () => {
    const currScrollPos = window.pageYOffset;

    prevScrollpos > currScrollPos
      ? (wrapper.current.style.top = "0px")
      : (wrapper.current.style.top = "-100%");
    prevScrollpos = currScrollPos;
  };
  window.addEventListener("scroll", handleMenuHide);
  return (
    <Styles ref={wrapper}>
      <div className="wrapper">
        <NavLink className="logo" to="/">
          Ava<span>NET</span>
        </NavLink>
        <Hamburger />
        <ul className="ulWrapper">
          <li className="navItem">
            <NavLink
              exact
              className="navItemLink"
              activeClassName="navItemLinkActive"
              to="/"
            >
              <Button>Home</Button>
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink
              exact
              className="navItemLink"
              activeClassName="navItemLinkActive"
              to="/Internet"
            >
              <Button>Internet</Button>
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink
              className="navItemLink"
              activeClassName="navItemLinkActive"
              to="/Telewizja"
            >
              <Button>Telewizja</Button>
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink
              className="navItemLink"
              activeClassName="navItemLinkActive"
              to="/Telefon"
            >
              <Button>Telefon</Button>
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink
              className="navItemLink"
              activeClassName="navItemLinkActive"
              to="/Kontakt"
            >
              <Button>Kontakt</Button>
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink
              className="navItemLink"
              activeClassName="navItemLinkActive"
              to="/Inne"
            >
              <Button>Inne</Button>
            </NavLink>
          </li>
        </ul>
      </div>
    </Styles>
  );
};

export default HeaderNav;
