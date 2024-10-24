// lib/auth.js
import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET;

export function generateToken(payload) {
  console.log("JWT_SECRET during generation:", process.env.JWT_SECRET);
  if (!secret) {
    throw new Error("JWT secret is not defined");
  }
  return jwt.sign(payload, secret, { expiresIn: "1h" });
}

export function verifyToken(token) {
  if (!secret) {
    throw new Error("JWT secret is not defined");
  }
  return jwt.verify(token, secret);
}
