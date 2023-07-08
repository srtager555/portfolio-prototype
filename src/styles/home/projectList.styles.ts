import styled from "styled-components";
import Link from "next/link";

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1420px;

  @media (max-width: 900px) {
    justify-content: flex-start;
    padding: 0;
    border-radius: 10px;
  }
`;

export const ProjectCard = styled(Link)`
  display: flex;
  justify-content: center;
  width: 70px;
  max-width: 300px;
  margin: 0 10px;
  overflow: hidden;
  transition: 200ms ease;
  color: #000;
  text-decoration: none;
  overflow: hidden;

  & p {
    opacity: 0;
  }

  &:hover {
    width: 300px;
    box-shadow: 0px 0px 25px #0005;
    /* filter: drop-shadow(0px 0px 15px #0005); */

    & p {
      opacity: 1;
    }
  }

  @media (max-width: 1280px) {
    max-width: 275px;
  }

  @media (min-width: 900px) and (max-width: 1124px) {
    margin: 0 2%;
  }

  @media (max-width: 900px) {
    margin-right: 10px;

    &:hover {
      filter: none;
      width: auto;
    }
  }

  @media (max-width: 414px) {
    min-width: auto;
    width: auto;
  }
`;

export const TranslateContainer = styled.div<{ loaded: boolean }>`
  transition: ${({ loaded }) => (loaded ? "700ms ease-in-out" : "")};
`;

export const ImageContainer = styled.div`
  margin-bottom: -5px;
  width: 300px;

  & img {
    width: 100%;
  }

  @media (max-width: 414px) {
    width: 150px;
  }
`;

export const ProjectName = styled.p`
  position: fixed;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 3rem;
  font-weight: 300;
  padding: 10px;
  margin-top: -5px;
  transition: opacity 200ms;
  pointer-events: none;

  @media (max-width: 414px) {
    display: none;
    font-size: 1.2rem;
  }
`;
