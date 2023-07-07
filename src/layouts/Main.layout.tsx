import { Loader } from "@/components/Loader.interface";
import { Nav } from "@/components/navbar";
import { Background, Container, Filter } from "@/styles/index.styles";
import { Dispatch, SetStateAction, createContext, useState } from "react";

export const Context = createContext<{ setLoaded: Dispatch<SetStateAction<boolean>> } | null>(null);

export function Main__layout({ children }: { children: children }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Context.Provider value={{ setLoaded }}>
      <Container>
        {/* <Nav /> */}
        <Filter />
        <Background />
        <Loader loaded={loaded} />
        {children}
      </Container>
    </Context.Provider>
  );
}
