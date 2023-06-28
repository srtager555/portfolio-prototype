import { GetNextProjectFace } from "@/ddbb/projects";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(405).json("Only post is available");
  } else {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    const project = GetNextProjectFace(body.id);

    res.status(200).json(project);
  }
}
