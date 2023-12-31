import { Galery } from "@/components/projects/Galery";
import { Header } from "@/components/projects/Header";
import { NextProject } from "@/components/projects/NextProject";
import { Helmet } from "@/layouts/Helmet.layout";
import { Content } from "@/styles/projects/Content.styles";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Project() {
  const { id_project } = useRouter().query;
  const [data, setData] = useState<ProjectData>();
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function getProject() {
      if (!id_project) return;

      setData(undefined);

      const project = await fetch("/api/getProject/", {
        method: "POST",
        body: JSON.stringify({
          id_project,
        }),
      }).then((data) => {
        if (data.ok) return data.json();
        else if (data.status === 404) setNotFound(true);
      });

      if (!project) return;

      setData(project);
    }

    getProject();
  }, [id_project]);

  if (notFound && !data) return <>404</>;

  if (!data) return <>loading</>;

  return (
    <>
      <Helmet title={data.title} image={data.image.image} desc={data.desc}>
        <Header title={data.title} image={data.image} description={data.desc} />
        <Content>{data.content}</Content>
        <Galery galery={data.galery} />
        <NextProject id={id_project as unknown as string} />
      </Helmet>
    </>
  );
}
