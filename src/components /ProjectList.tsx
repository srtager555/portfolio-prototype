import { FlexContainer, ImageContainer, ProjectCard, TranslateContainer } from "@/styles/home/projectList.styles";
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
          Wrapping letters
        </TranslateContainer>
      </ProjectCard>
      <ProjectCard>
        <TranslateContainer loaded={loaded}>
          <ImageContainer>
            <img src="https://i.ibb.co/b56T388/Orianna-full-body.jpg" />
          </ImageContainer>
          Wrapping letters
        </TranslateContainer>
      </ProjectCard>
      <ProjectCard>
        <TranslateContainer loaded={loaded}>
          <ImageContainer>
            <img src="https://i.ibb.co/b56T388/Orianna-full-body.jpg" />
          </ImageContainer>
          Wrapping letters
        </TranslateContainer>
      </ProjectCard>
      <div>
        <span></span>
      </div>
    </FlexContainer>
  );
}
