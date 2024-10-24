// pages/api/auth/register.js
import { connectToDatabase } from "../../../lib/mongodb.js";
import bcrypt from "bcryptjs";

export default async (req, res) => {
  if (req.method === "POST") {
    const { fullname, email, password } = req.body;

    if (!fullname || !email || !password) {
      return res
        .status(400)
        .json({ error: "All fields (fullname, email, password) are required" });
    }

    try {
      const db = await connectToDatabase();
      const users = db.collection("users");
      const existingUser = await users.findOne({ email });

      if (existingUser) {
        return res.status(409).json({ error: "User email already exists" });
      }

      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
      const newUser = { fullname, email, password: hash };
      await users.insertOne(newUser);

      return res.status(201).json({ message: "User has been created" });
    } catch (err) {
      console.error("Database query error:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
