import {
  Container,
  CorrectFSizeContainer,
  DefaultWrapp,
  Description,
  Introduction,
  ScriptFont,
} from "@/styles/home/index.new.styles";
//@ts-ignore
import WL from "wrapping-letters-react";

interface props {
  loaded: boolean;
}

//@ts-ignore
function structure({ letter, specialWrapp, loaded }) {
  const { hasCustomWrapp, NewWrappStructure, hasCustomProps } = specialWrapp;

  let props = {
    letter,
    loaded,
  };

  let Component = () =>
    hasCustomWrapp
      ? typeof NewWrappStructure === "object"
        ? NewWrappStructure.structureToAdd
        : NewWrappStructure
      : letter;

  if (hasCustomProps) {
    Component = NewWrappStructure.structureToAdd;

    return (
      <DefaultWrapp loaded={loaded}>
        <Component {...props} {...NewWrappStructure.props} />
      </DefaultWrapp>
    );
  }

  return (
    <DefaultWrapp loaded={loaded}>
      {/* @ts-ignore */}
      <Component {...props} />
    </DefaultWrapp>
  );
}

export function Content({ loaded }: props) {
  return (
    <Container>
      <CorrectFSizeContainer>
        {/* <Introduction>Hello, I&apos;m Carlos Ponce!</Introduction> */}
        <Description>
          <WL
            text="Frontend dev. living in Honduras"
            textOptions={{
              SpecialWrapp: {
                wordToSearch: ["living", "in"],
                structureToAdd: { structureToAdd: ScriptFont as unknown as JSX.Element, props: { loaded } },
              },
              PerWord: true,
            }}
            structure={{ structure: structure, props: { loaded } }}
          />
        </Description>
      </CorrectFSizeContainer>
    </Container>
  );
}
