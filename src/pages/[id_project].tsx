import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Project() {
  const { id_project } = useRouter().query;
  const [data, setData] = useState<ProjectData>();
  const [notFound, setNotFound] = useState<ProjectData>();

  useEffect(() => {
    async function getProject() {
      if (!id_project) return;

      const project = await fetch("/api/getProject/", {
        method: "POST",
        body: JSON.stringify({
          id_project,
        }),
      }).then((data) => data.json());

      if (!project) return;

      setData(project);
    }
  }, [id_project]);

  if (!data) <>loading</>;

  if (notFound) <>404</>;

  return <>a</>;
}
