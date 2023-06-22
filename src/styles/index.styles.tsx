import styled from "styled-components";

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: conic-gradient(at 50% 130.83%, #f8f8f8, #a1a1a1 15%, #595959, #a1a1a1 85%, #f8f8f8);
  z-index: -10;
`;

export const Filter = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: url("https://i.ibb.co/WgB2W5y/filter.jpg");
  background-repeat: repeat;
  z-index: 999;
  pointer-events: none;
  opacity: 0.09;
  animation: filter 1s infinite;

  @keyframes filter {
    0%,
    50% {
      background-position: 50% 10%;
    }
    25%,
    75% {
      background-position: 10% 50%;
    }
    100% {
      background-position: 99% 1%;
    }
  }
`;

export const Opacity = styled.div<{ loaded: boolean }>`
  opacity: ${({ loaded }) => (loaded ? 1 : 0)};
`;
