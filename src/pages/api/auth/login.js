// pages/api/auth/login.js
import { connectToDatabase } from "../../../lib/mongodb";
import bcrypt from "bcryptjs";
import { generateToken } from "../../../lib/auth";

export default async (req, res) => {
  if (req.method === "POST") {
    const { email, password } = req.body;

    try {
      const db = await connectToDatabase();
      const users = db.collection("users");
      const user = await users.findOne({ email });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const isPasswordValid = bcrypt.compareSync(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: "Incorrect password" });
      }

      const token = generateToken({ id: user.email });
      res.setHeader(
        "Set-Cookie",
        `access_token=${token}; HttpOnly; SameSite=Strict`
      );

      return res.status(200).json({ message: "User logged in", user });
    } catch (err) {
      console.error("Database query error:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
