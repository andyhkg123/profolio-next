// pages/api/projects/[id].js
import { connectToDatabase } from "../../../lib/mongodb.js";

export default async (req, res) => {
  if (req.method === "GET") {
    try {
      const db = await connectToDatabase();
      const projects = db.collection("projects");
      const project = await projects.findOne({
        idprojects: parseInt(req.query.id),
      });

      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }

      return res.status(200).json(project);
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
