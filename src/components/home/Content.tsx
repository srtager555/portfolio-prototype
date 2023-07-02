import {
  Container,
  CorrectFSizeContainer,
  Description,
  Introduction,
  ScriptFont,
} from "@/styles/home/index.new.styles";
import WL from "wrapping-letters-react";

export function Content() {
  return (
    <Container>
      <CorrectFSizeContainer>
        <Introduction>Hello, I&apos;m Carlos && Ponce!</Introduction>
        <Description>
          <WL
            text="Front-end dev based in Honduras"
            textOptions={{
              SpecialWrapp: {
                wordToSearch: ["based", "in"],
                structureToAdd: ScriptFont as unknown as JSX.Element,
              },
              PerWord: true,
            }}
          />
        </Description>
      </CorrectFSizeContainer>
    </Container>
  );
}
