import {
  FlexContainer,
  ImageContainer,
  ProjectCard,
  ProjectName,
  TranslateContainer,
} from "@/styles/home/projectList.styles";
import { useEffect, useState } from "react";

export function ProjectList() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1600);
  }, []);

  return (
    <FlexContainer>
      <ProjectCard>
        <TranslateContainer loaded={loaded}>
          <ImageContainer>
            <img src="https://i.ibb.co/b56T388/Orianna-full-body.jpg" />
          </ImageContainer>
          <ProjectName>Barbershop app</ProjectName>
        </TranslateContainer>
      </ProjectCard>
      <ProjectCard>
        <TranslateContainer loaded={loaded}>
          <ImageContainer>
            <img src="https://i.ibb.co/b56T388/Orianna-full-body.jpg" />
          </ImageContainer>
          <ProjectName>Wrapping letters</ProjectName>
        </TranslateContainer>
      </ProjectCard>
      <ProjectCard>
        <TranslateContainer loaded={loaded}>
          <ImageContainer>
            <img src="https://i.ibb.co/b56T388/Orianna-full-body.jpg" />
          </ImageContainer>
          <ProjectName>Portafolio 2022</ProjectName>
        </TranslateContainer>
      </ProjectCard>

      <div>
        <span></span>
      </div>
    </FlexContainer>
  );
}
