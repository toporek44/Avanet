import styled, { css } from "styled-components";
import { device } from "./device";
const Button = styled.button`
  background: #ff0000;
  padding: 0.4em 1em;
  border: none;
  color: #fff;
  font-size: 1.8rem;
  margin: 0 1em 0 0;
  cursor: pointer;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.35);
  transition: all 0.2s ease-out;
  font-weight: normal;
  outline: none;
  width: ${({ width }) => width || "110px"};
  height: ${({ height }) => height || "35px"};

  @media ${device.laptopL} {
    margin: 0 3rem 0 0;

    width: ${({ width }) => width || "140px"};
    height: ${({ height }) => height || "40px"};
  }

  :hover {
    box-shadow: 9px 9px 0px -3px #e91a039e;

    transition: all 0.2s ease-in;
  }

  ${({ secondary }) =>
    secondary &&
    css`
      min-width: 200px;
      min-height: 50px;
      background: #fff;
      box-shadow: 8px 7px 0px 0 #ef2424;
      color: #ff5b5b;
      font-size: 2rem;
      transition: all 0.1s ease-out;
      padding: 0;
      margin-right: 0;
      margin-top: auto;

      @media ${device.laptopL} {
        margin-right: 0;
        margin-top: auto;
      }
      :hover {
        transform: translate(3px, 3px);
        box-shadow: 4px 3px 0px 0 #ef2424;

        transition: all 0.1s ease-in;
      }
    `}
`;

export default Button;
