import styled from "styled-components";

export const BGTitleDesktop = styled.div<{ loaded: boolean }>`
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

export const BGTitleMobile = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

export const TextAnimation = styled.div<{ loaded: boolean; reverse?: boolean; absolute?: boolean }>`
  ${({ absolute }) =>
    absolute &&
    `
    position: absolute;
    top: 0;
    left: 0;
  `}
  overflow: hidden;

  & span {
    font-family: "League Gothic";
    font-size: 10rem;
    display: inline-block;
    transform: translateY(
      ${({ loaded, reverse }) => {
        if (reverse) return loaded ? "0%" : "100%";
        else return loaded ? "-100%" : "0%";
      }}
    );
    transition: ${({ loaded, reverse }) => {
      if (loaded && reverse) return "transform 500ms ease-in-out";
      else if (reverse) return "none";
      else return "transform 500ms ease-in-out";
    }};
  }
`;
