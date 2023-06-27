import Link from "next/link";
import styled from "styled-components";

export const Container = styled(Link)`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  text-decoration: none;
  margin-top: 200px;
  margin-bottom: 100px;
  overflow: hidden;
  color: #000;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1440px) {
    padding-left: 10px;
  }
`;

export const Name = styled.h2`
  font-size: 10rem;
  font-family: "League Gothic";
`;

export const Next = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
`;

export const ImageContainer = styled.div`
  width: 50%;
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
`;
