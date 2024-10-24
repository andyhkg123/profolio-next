import { connectToDatabase } from "../../../lib/mongodb.js";
import jwt from "jsonwebtoken";

export default async (req, res) => {
  const { fullname_blog, title, content } = req.body;

  const token = req.cookies.access_token;
  console.log(token);
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", async (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    console.log(userInfo.id);

    try {
      await client.connect();
      const database = client.db("profolio");
      const blog = database.collection("blog");

      const newPost = {
        title,
        content,
        email_blog: userInfo.id,
        date: new Date(),
        fullname_blog,
      };

      const result = await blog.insertOne(newPost);

      console.log(result);
      return res.json("Post has been created.");
    } catch (err) {
      return res.status(500).json(err); // Handle the error appropriately
    }
  });
};
