import styled from "styled-components";

export const BGTitle = styled.div<{ loaded: boolean }>`
  position: fixed;
  top: ${({ loaded }) => (loaded ? "25%" : "50%")};
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  font-size: 25rem;
  white-space: nowrap;
  text-transform: uppercase;
  font-weight: 700;
  overflow: hidden;
  color: #fff;
  mix-blend-mode: exclusion;
  pointer-events: none;
  transition: top 500ms ease-in-out;

  @media (max-width: 600px) {
    white-space: normal;
  }

  & span {
    font-family: "League Gothic";
    display: inline-block;
    transition: transform 500ms ease-in-out, top 500ms ease-in-out;
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
