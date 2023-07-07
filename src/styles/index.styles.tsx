import Image, { ImageProps } from "next/image";
import styled from "styled-components";

export const ImageDefault = (props: ImageProps) => (
  <Image {...props} alt={props.alt} width="160" height="90" sizes="100vw" style={{ width: "100%", height: "auto" }} />
);

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

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

export const Ampersand = styled.span`
  font-family: "Poppins" !important;
`;

// loader styles
export const LoaderC = styled.div<{ loaded: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Poppins";
  font-size: 45rem;
  color: #0003;
  opacity: ${({ loaded }) => (loaded ? `0` : `1`)};
  mix-blend-mode: difference;
  transition: 200ms ease-in-out;
  pointer-events: none;
  z-index: 99999999;
`;
