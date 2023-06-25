import { Background, Container, Filter } from "@/styles/index.styles";

export function Main__layout({ children }: { children: children }) {
  return (
    <Container>
      <Filter />
      <Background />
      {children}
    </Container>
  );
}
