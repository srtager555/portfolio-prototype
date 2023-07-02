import styled from "styled-components";

export const Container = styled.div`
  padding-top: 50px;
`;

export const CorrectFSizeContainer = styled.div`
  font-size: 20rem;

  & h1,
  p,
  span {
    font-family: "League Gothic";
  }
`;

export const Introduction = styled.h1`
  font-size: 7rem;
`;

export const Description = styled.p`
  line-height: 85%;
  overflow: hidden;
`;
