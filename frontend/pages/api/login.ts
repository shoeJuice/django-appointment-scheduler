import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";
import type { Request, Response, NextFunction } from "express";
import axios from "axios";
import type { AxiosRequestConfig, AxiosError } from "axios";
import cookie from "cookie";

type UserInfo = {
  email: String;
  password: String;
};

export default async (req: Request, res: Response) => {
  let accessToken = null;

  if (req.method === "POST") {
    const { email, password }: UserInfo = req.body;

    const config: AxiosRequestConfig = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    const body: UserInfo = {
      email,
      password,
    };

    try {
      const { data: accessResponse } = await axios.post(
        "http://localhost:8000/auth/token",
        body,
        config
      );
      accessToken = accessResponse.access;
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("refresh", accessResponse.refresh, {
          httpOnly: true,
          secure: false,
          sameSite: "strict",
          maxAge: 60 * 60 * 24,
          path: "/",
        })
      );
    } catch (error: AxiosError | any) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error(error.response.data);
          console.error(error.response.status);
          console.error(error.response.headers);
          return res.status(401).json({ message: error.response.data.detail });
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.error(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error("Error", error.message);
        }
        console.error(error.config);
      } else {
        console.error(error.message);
      }
      return res.status(500).json({ message: "Something went wrong." });
    }

    if (accessToken) {
      const userConfig: AxiosRequestConfig = {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      };

      const { data: userData } = await axios.get(
        "http://localhost:8000/api/user/",
        userConfig
      );
      res.status(200).json({ user: userData, access: accessToken });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method: ${req.method} is not allowed` });
  }
};
