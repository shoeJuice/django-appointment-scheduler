import cookie from "cookie";
import type { Request, Response, NextFunction } from "express";

export default async (req: Request, res: Response) => {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("refresh", "", {
      httpOnly: true,
      secure: false,
      expires: new Date(0),
      sameSite: "strict",
      path: "/",
    })
  );
  res.status(200).json({ message: "User has been logged out." });
};
