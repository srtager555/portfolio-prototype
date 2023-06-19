import styled from "styled-components";

export const FlexContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ProjectCard = styled.div`
  margin: 0 auto;
  width: 350px;
  border-radius: 10px;
  overflow: hidden;
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
`;
