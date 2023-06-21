import { Background, Filter } from "@/styles/index.styles";

export function Main__layout({ children }: { children: children }) {
  return (
    <>
      <Filter />
      <Background />
      {children}
    </>
  );
}
