// pages/api/auth/logout.js
export default (req, res) => {
  if (req.method === "POST") {
    res.setHeader(
      "Set-Cookie",
      `access_token=; HttpOnly; expires=Thu, 01 Jan 1970 00:00:00 GMT;`
    );

    res.status(200).json({ message: "User has been logged out" });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
