import styled from "styled-components";
import Link from "next/link";

export const FlexContainer = styled.div`
  position: fixed;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 1920px;
  padding: 20px;
  overflow: scroll;

  @media (max-width: 900px) {
    padding: 0 10%;
  }
`;

export const ProjectCard = styled(Link)`
  margin: 0 auto;
  min-width: 225px;
  max-width: 350px;
  border-radius: 10px;
  overflow: hidden;
  transition: 200ms ease;
  color: #000;
  text-decoration: none;

  &:hover {
    box-shadow: 0 0 15px #0005;
  }

  @media (max-width: 1280px) {
    max-width: 325px;
  }

  @media (min-width: 900px) and (max-width: 1124px) {
    margin: 0 2%;
  }

  @media (max-width: 900px) {
    margin-right: 70px;
  }

  @media (max-width: 414px) {
    min-width: 200px;
  }
`;

export const TranslateContainer = styled.div<{ loaded: boolean }>`
  transform: ${({ loaded }) => (loaded ? "translateY(0%)" : "translateY(100%)")};
  transition: ${({ loaded }) => (loaded ? "700ms ease-in-out" : "")};
`;

export const ImageContainer = styled.div`
  & img {
    width: 100%;
  }
`;

export const ProjectName = styled.p`
  text-align: center;
  font-size: 1.5rem;
  padding: 10px;
  background-color: #fff;
  margin-top: -5px;

  @media (max-width: 414px) {
    font-size: 1.2rem;
  }
`;
