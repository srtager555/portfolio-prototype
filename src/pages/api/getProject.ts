import { NextApiRequest, NextApiResponse } from "next";
import { findProject } from "@/ddbb/projects/project_data/index";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
  const { id_project } = body;

  // the atteibute "id_project" must be a strig
  if (typeof id_project != "string") {
    res.status(406).json("the api require a id that must be a string");
  } else {
    const project = findProject({ id: id_project as any });

    if (!project) {
      res.status(404).json({ notFound: "not found" });
    } else {
      res.status(200).json(project);
    }
  }
}
