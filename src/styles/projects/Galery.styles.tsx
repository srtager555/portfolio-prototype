import styled from "styled-components";
import { ImageDefault } from "../index.styles";

export const ImageContainer = styled.div<{ inView?: boolean }>`
  width: 100%;
  margin-bottom: 20px;
  overflow: hidden;

  & img {
    opacity: ${({ inView }) => (inView ? "1" : "0")};
    transform: translateY(${({ inView }) => (inView ? "0%" : "10%")});
  }
`;

export const Img = styled(ImageDefault)`
  width: 100%;
  transition: opacity 1s ease-in-out, transform 1.5s ease-in-out;
`;
