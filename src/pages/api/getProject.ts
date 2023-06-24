import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const body: { id_project: string } = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
  const { id_project } = body;
}
