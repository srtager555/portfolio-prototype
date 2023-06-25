import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  margin-bottom: 150px;
`;

export const ImageContainer = styled.div`
  width: 100%;
`;

export const Img = styled.img`
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 10rem;
  font-family: "League Gothic";
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 6rem;
  }

  @media (max-width: 414px) {
    font-size: 4rem;
  }

  @media (max-width: 375px) {
    font-size: 2rem;
  }
`;
