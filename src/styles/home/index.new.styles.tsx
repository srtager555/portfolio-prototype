import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  mix-blend-mode: difference;
  color: #fff;
`;

export const CorrectFSizeContainer = styled.div`
  font-size: 17rem;

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
  text-transform: uppercase;
  line-height: 80%;
`;

const Wrapp = styled.span`
  overflow: hidden;
`;
const Letter = styled.span<{ loaded: boolean }>`
  display: inline-block;
  transform: translateY(${({ loaded }) => (loaded ? "100%" : "0%")});
  transition: 1s ease-in-out;
  white-space: break-spaces;
  letter-spacing: -7px;
`;

export function DefaultWrapp({ children, loaded }: { children: children; loaded: boolean }) {
  return (
    <Wrapp>
      <Letter loaded={loaded}>{children}</Letter>
    </Wrapp>
  );
}

export const CourgetteFont = styled.span`
  text-transform: none !important;
  font-family: "Courgette" !important;
  font-size: 6rem;
  white-space: break-spaces;
`;

export function ScriptFont({ letter }: { letter: string }) {
  return <CourgetteFont>{letter}</CourgetteFont>;
}
