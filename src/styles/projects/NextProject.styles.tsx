import Link from "next/link";
import styled from "styled-components";

export const Container = styled(Link)`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  text-decoration: none;
  margin-top: 200px;
  padding: 7%;
  overflow: hidden;
  color: #000;

  @media (min-height: 1500px) and (min-width: 1200px) {
    max-height: 900px;
  }

  @media (max-width: 1224px) {
    padding: 4%;
  }
`;

export const DataContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1024px) {
    padding-left: 10px;
  }
`;

export const Name = styled.h2`
  font-size: 10rem;
  font-family: "League Gothic";

  @media (max-width: 500px) {
    font-size: 7rem;
  }

  @media (max-width: 380px) {
    font-size: 5rem;
  }
`;

export const Next = styled.p`
  font-size: 1.5rem;
  font-weight: 300;

  @media (max-width: 450px) {
    font-size: 1.3rem;
  }
`;

export const ImageContainer = styled.div`
  width: 50%;

  @media (max-width: 1024px) and (min-height: 768px) {
    position: absolute;
    right: 0%;
    bottom: -10%;
    width: 60%;
    z-index: -1;
  }

  @media (max-width: 800px) {
    position: absolute;
    right: -15%;
    width: 65%;
  }
`;

export const Go = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 100%;
  border: solid 1px #000;
  font-size: 5rem;
  font-family: "League Gothic";
  mix-blend-mode: difference;

  @media (max-width: 500px) {
    width: 150px;
    height: 150px;
    font-size: 3rem;
  }

  @media (max-width: 380px) {
    width: 100px;
    height: 100px;
    font-size: 2.5rem;
  }
`;
