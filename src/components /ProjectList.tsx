import {
  FlexContainer,
  ImageContainer,
  ProjectCard,
  ProjectName,
  TranslateContainer,
} from "@/styles/home/projectList.styles";
import { ImageDefault } from "@/styles/index.styles";

interface props {
  CardData: CardData[];
  loaded: boolean;
}

export function ProjectList({ CardData, loaded }: props) {
  return (
    <FlexContainer>
      {CardData.map(({ project_face, project_url, name }, index) => (
        <ProjectCard href={project_url} key={`${index} - ${name}`}>
          <TranslateContainer loaded={loaded}>
            <ImageContainer>
              <ImageDefault
                src={project_face.image}
                blurDataURL={project_face.imageBlur}
                placeholder="blur"
                alt={name}
              />
            </ImageContainer>
            <ProjectName>{name}</ProjectName>
          </TranslateContainer>
        </ProjectCard>
      ))}
    </FlexContainer>
  );
}
