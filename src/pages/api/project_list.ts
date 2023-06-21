import { NextApiRequest, NextApiResponse } from "next";
import { GetProjectFace } from "@/ddbb/projects";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const projects = GetProjectFace();

  res.status(200).json(projects);
}
