import { Header } from "@/components /projects/Header";
import { Helmet } from "@/layouts/Helmet.layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Project() {
  const { id_project } = useRouter().query;
  const [data, setData] = useState<ProjectData>();
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function getProject() {
      if (!id_project) return;

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
      <Helmet title={data.title} image={data.image}>
        <Header title={data.title} image={data.image} />
      </Helmet>
    </>
  );
}
