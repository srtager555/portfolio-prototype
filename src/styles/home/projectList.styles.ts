import styled from "styled-components";
import Link from "next/link";

export const FlexContainer = styled.div`
  /* position: fixed;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%); */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1420px;

  @media (max-width: 900px) {
    width: 80%;
    padding: 0;
    border-radius: 10px;
    overflow: scroll;
  }
`;

export const ProjectCard = styled(Link)`
  display: flex;
  justify-content: center;
  width: 70px;
  /* min-width: 225px; */
  max-width: 300px;
  margin: 0 10px;
  /* border-radius: 10px; */
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
    filter: drop-shadow(0px 0px 15px #0005);

    & p {
      opacity: 1;
    }
  }

  &:active {
    transform: scale(0.9);
  }

  @media (max-width: 1280px) {
    max-width: 275px;
  }

  @media (min-width: 900px) and (max-width: 1124px) {
    margin: 0 2%;
  }

  @media (max-width: 900px) {
    margin-right: 70px;

    &:hover {
      filter: none;
    }
  }

  @media (max-width: 414px) {
    min-width: 200px;
  }
`;

export const TranslateContainer = styled.div<{ loaded: boolean }>`
  transform: ${
    {
      /* ({ loaded }) => (loaded ? "translateY(0%)" : "translateY(100%)") */
    }
  };
  transition: ${({ loaded }) => (loaded ? "700ms ease-in-out" : "")};
`;

export const ImageContainer = styled.div`
  margin-bottom: -5px;
  width: 300px;
  & img {
    width: 100%;
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
    font-size: 1.2rem;
  }
`;
