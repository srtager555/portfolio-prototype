import { Container, CorrectFSizeContainer, Description, Introduction } from "@/styles/home/index.new.styles";
import WL from "wrapping-letters-react";

export function Content() {
  return (
    <Container>
      <CorrectFSizeContainer>
        <Introduction>Hello, I&apos;m Carlos && Ponce!</Introduction>
        <Description>
          <WL text="Front-end dev based in Honduras" />
        </Description>
      </CorrectFSizeContainer>
    </Container>
  );
}
