import styled from "styled-components";

export const BGTitle = styled.div<{ loaded: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  font-family: "Montserrat";
  font-size: 15rem;
  white-space: nowrap;
  text-transform: uppercase;
  font-weight: 700;
  overflow: hidden;

  & span {
    display: inline-block;
    transition: transform 250ms ease-in-out, top 250ms ease-in-out;
  }

  & span:nth-child(1) {
    transform: translateY(${({ loaded }) => (loaded ? "-100%" : "0")});
  }

  & span:nth-child(2) {
    position: absolute;
    top: ${({ loaded }) => (loaded ? "0%" : "100%")};
    left: 50%;
    transform: translateX(-50%);
  }
`;
