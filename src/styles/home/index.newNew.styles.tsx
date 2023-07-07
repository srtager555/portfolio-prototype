import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 3%;

  @media (max-width: 900px) {
    justify-content: flex-end;
  }
`;

export const Content = styled.div`
  position: fixed;
  top: 15%;
  left: 2%;
  transform: translateY(-50%);
  color: #fff;
  mix-blend-mode: difference;
  z-index: -1;

  @media (max-width: 900px) {
    top: 0%;
    transform: translateY(0%);
  }
`;

export const Name = styled.h1`
  font-family: "league Gothic";
  font-size: 10rem;
  text-transform: uppercase;
  letter-spacing: -5px;
  line-height: 90%;

  @media (max-width: 414px) {
    font-size: 7.1rem;
  }
`;

export const Rol = styled.h1`
  font-family: "league Gothic";
  font-size: 5rem;
  text-transform: uppercase;
  letter-spacing: -3px;

  @media (max-width: 414px) {
    font-size: 3rem;
  }
`;

export const Footer = styled.div`
  position: fixed;
  bottom: 0%;
  right: 2%;
  color: #fff;
  mix-blend-mode: difference;
  z-index: -1;
  text-align: end;

  @media (max-width: 900px) {
    top: 0%;
    bottom: auto;
  }
`;

export const Portfolio = styled.p`
  font-family: "League Gothic";
  font-size: 5rem;

  @media (max-width: 900px) {
    font-size: 2rem;
  }
`;
