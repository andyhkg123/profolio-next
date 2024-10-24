import { connectToDatabase } from "../../../lib/mongodb.js";

export default async (req, res) => {
  try {
    const db = await connectToDatabase();

    const blog = db.collection("blog");

    const posts = await blog.find({}).toArray();

    console.log(posts);
    return res.status(200).json(posts);
  } catch (err) {
    return res.status(500).json(err); // Handle the error appropriately
  }
};
