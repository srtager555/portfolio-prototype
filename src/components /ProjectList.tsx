/* eslint-disable @next/next/no-img-element */

import {
  FlexContainer,
  ImageContainer,
  ProjectCard,
  ProjectName,
  TranslateContainer,
} from "@/styles/home/projectList.styles";
import { useEffect, useState } from "react";

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
              <img src={project_face} alt={name} />
            </ImageContainer>
            <ProjectName>{name}</ProjectName>
          </TranslateContainer>
        </ProjectCard>
      ))}
      <span style={{ opacity: 0 }}>a</span>
    </FlexContainer>
  );
}
