import { Background } from "@/styles/index.styles";

export function Main__layout({ children }: { children: children }) {
  return (
    <>
      <Background />
      {children}
    </>
  );
}
