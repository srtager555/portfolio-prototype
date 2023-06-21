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
  opacity: 0.02;
`;
