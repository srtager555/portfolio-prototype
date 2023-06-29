import styled from "styled-components";
import { ImageDefault } from "../index.styles";

export const ImageContainer = styled.div<{ inView?: boolean }>`
  width: 100%;
  margin-bottom: 20px;
  overflow: hidden;

  & img {
    transform: translateY(${({ inView }) => (inView ? "0%" : "100%")});
  }
`;

export const Img = styled(ImageDefault)`
  width: 100%;
  transition: transform 1.5s ease-in-out;
`;
