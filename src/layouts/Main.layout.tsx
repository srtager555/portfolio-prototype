import { Nav } from "@/components/navbar";
import { Background, Container, Filter } from "@/styles/index.styles";

export function Main__layout({ children }: { children: children }) {
  return (
    <Container>
      <Nav />
      <Filter />
      <Background />
      {children}
    </Container>
  );
}
