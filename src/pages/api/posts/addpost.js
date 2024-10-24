import { connectToDatabase } from "../../../lib/mongodb.js";
import jwt from "jsonwebtoken";
import { parse } from "cookie";

export default async function addPost(req, res) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000"); // Adjust this to match your client URL
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { fullname_blog, title, content } = req.body;
  const cookies = parse(req.headers.cookie || "");
  const token = cookies.access_token;
  console.log("Received token:", token);

  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, process.env.JWT_SECRET, async (err, userInfo) => {
    if (err) {
      console.log("Verification error:", err);
      return res.status(403).json("Token is not valid!");
    }
    console.log("User info:", userInfo.id);

    try {
      const db = await connectToDatabase();
      const blog = db.collection("blog");
      const newPost = {
        title,
        content,
        email_blog: userInfo.id,
        date: new Date(),
        fullname_blog,
      };
      const result = await blog.insertOne(newPost);
      console.log("Insert result:", result);
      return res.json("Post has been created.");
    } catch (err) {
      console.log("Database error:", err);
      return res.status(500).json({ error: "Database error", details: err });
    }
  });
}
