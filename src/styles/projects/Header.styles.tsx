import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  margin-bottom: 50px;
`;

export const ImageContainer = styled.div`
  width: 100%;
`;

export const Img = styled.img`
  width: 100%;
`;

export const Title = styled.h1`
  margin-bottom: 2rem;
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

export const Description = styled.p`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  font-weight: 300;
  font-size: 1.5rem;

  @media (max-width: 514px) {
    font-size: 1.3rem;
    width: 90%;
  }
`;
