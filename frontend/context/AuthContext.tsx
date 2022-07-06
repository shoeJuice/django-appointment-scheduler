import { createContext, useState } from "react";
import axios from "axios";
import type { AxiosError } from "axios";
import { useRouter } from "next/router";

// @ts-ignore
const AuthContext = createContext();

interface LoginInfo {
  email?: string;
  password?: string;
}

interface RegisterInfo {
  email?: String;
  password?: String;
  first_name?: String;
  last_name?: String;
  username?: String;
}

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState();
  const [accessToken, setAccessToken] = useState();
  const [error, setError] = useState<any>();

  const router = useRouter();

  const login = async ({ email, password }: LoginInfo) => {
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const body = {
      email,
      password,
    };
    try {
      const { data: accessResponse } = await axios.post(
        "http://localhost:3000/api/login",
        body,
        config
      );
      console.log(accessResponse.user);

      if (accessResponse && accessResponse.user) {
        setUser(accessResponse.user);
      }

      if (accessResponse && accessResponse.access) {
        setAccessToken(accessResponse.access);
      }
      router.push("/");
    } catch (error: AxiosError | any) {
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.data) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          setError(error.response.data.message);
          return;
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          setError("Something went wrong.");
          return;
        } else {
          // Something happened in setting up the request that triggered an Error
          setError("Something went wrong");
          return;
        }
      } else {
        setError(error);
      }
    }
  };

  const register = async ({ username, email, password, first_name, last_name } : RegisterInfo) => {
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const body = {
      username,
      email,
      password,
      first_name,
      last_name
    };
    try {
      const { data: accessResponse } = await axios.post(
        "http://localhost:3000/api/register",
        body,
        config
      );
      console.log(accessResponse.user);

      if (accessResponse && accessResponse.user) {
        setUser(accessResponse.user);
      }

      if (accessResponse && accessResponse.access) {
        setAccessToken(accessResponse.access);
      }
      router.push("/");
    } catch (error: AxiosError | any) {
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.data) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          setError(error.response.data.message);
          return;
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          setError("Something went wrong.");
          return;
        } else {
          // Something happened in setting up the request that triggered an Error
          setError("Something went wrong");
          return;
        }
      } else {
        setError(error);
      }
    }
  };

  return (
    <AuthContext.Provider value={{ user, accessToken, error, login, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
export type { LoginInfo };
