// lib/auth.js
import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET;

export function generateToken(payload) {
  return jwt.sign(payload, secret, { expiresIn: "1h" });
}

export function verifyToken(token) {
  return jwt.verify(token, secret);
}
