import styled from "styled-components";

export const Content = styled.p`
  width: 90%;
  max-width: 1024px;
  margin: 0 auto;
  margin-bottom: 100px;
  font-size: 1.7rem;
  font-weight: 300;

  @media (max-width: 514px) {
    font-size: 1.5rem;
    margin-bottom: 70px;
  }
`;
