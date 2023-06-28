import { ImageDefault } from "@/styles/index.styles";
import { Container, DataContainer, Go, ImageContainer, Name, Next } from "@/styles/projects/NextProject.styles";
import Link from "next/link";
import { useEffect, useState } from "react";

interface props {
  id: string;
}

export function NextProject({ id }: props) {
  const [data, setData] = useState<CardData | undefined>();

  useEffect(() => {
    async function getNextProject() {
      await fetch("/api/getNextProject", { method: "POST", body: JSON.stringify({ id }) }).then(async (_) => {
        if (_.ok) {
          setData(await _.json());
        }
      });
    }

    getNextProject();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!data) return <></>;

  return (
    <Container href={`${data.project_url}`}>
      <DataContainer>
        <div>
          <Name>{data.name}</Name>
          <Next>Next project</Next>
        </div>
        <Go>Go</Go>
      </DataContainer>
      <ImageContainer>
        <ImageDefault
          src={data.project_face.image}
          alt={data.name}
          placeholder="blur"
          blurDataURL={data.project_face.imageBlur}
        />
      </ImageContainer>
    </Container>
  );
}
