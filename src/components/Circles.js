import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as Scene } from "../assets/svg/circles.svg";
import { device } from "./device";
import gsap from "gsap";

function Circles() {
  const wrapper = useRef(null);

  const Wrapperr = styled.div`
    position: relative;
    right: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    overflow: hidden;
    width: 100%;
    height: 100vh;
    margin-right: auto;

    .child {
      position: relative;
      width: 867px;
      height: 867px;
    }

    @media ${device.mobileS} {
      .child {
        transform: scale(1.8) translate(15%, 10%);
      }
    }
    @media ${device.laptopL} {
      .child {
        transform: scale(1.8) translate(10%, 10%);
      }
    }
  `;

  useEffect(() => {
    const [elements] = wrapper.current.children;
    const FirstCircle = elements.getElementById("1");
    const SecondCircle = elements.getElementById("2");
    const ThirdCircle = elements.getElementById("3");
    const FourthCircle = elements.getElementById("4");
    const FifthCircle = elements.getElementById("5");
    const ImgsInside = elements.getElementById("imagesInside");

    gsap.set(
      [
        FirstCircle,
        SecondCircle,
        ThirdCircle,
        FourthCircle,
        FifthCircle,
        ...ImgsInside.children
      ],
      { transformOrigin: "50%" }
    );

    const tl = gsap.timeline({
      defaults: { ease: "Power3.inOut", repeat: -1 }
    });

    tl.to([FirstCircle, SecondCircle, FourthCircle], 18, {
      rotation: 360
    })
      .to(
        [ThirdCircle, FifthCircle],
        18,
        {
          rotation: -360
        },
        "-=18"
      )
      .fromTo(
        ImgsInside.children,
        { scale: 0.8, autoAlpha: 0 },
        {
          duration: 10,
          scale: 1.1,
          autoAlpha: 1,
          stagger: 1
        },
        "-=17"
      );
  });
  return (
    <Wrapperr ref={wrapper}>
      <Scene className="child" />
    </Wrapperr>
  );
}

export default Circles;
