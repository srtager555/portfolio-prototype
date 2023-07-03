import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 50px;
  overflow: hidden;
  mix-blend-mode: difference;
  color: #fff;
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
  margin-left: 9px;
`;

export const Description = styled.p`
  line-height: 70%;
`;

export const CourgetteFont = styled.span`
  /* line-height: 70%; */
  font-family: "Courgette" !important;
  font-size: 11rem;
`;

export function ScriptFont({ letter }: { letter: string }) {
  return <CourgetteFont>{letter}</CourgetteFont>;
}
