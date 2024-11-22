"use client";
import axios from "axios";
import { useContext, useEffect } from "react";
import { deleteCookie } from "cookies-next";
import { AuthorizationContext } from "../_context/auth-context";

const useAuth = () => {
  const { setAuthState, data } = useContext(AuthorizationContext);

  useEffect(() => {
    console.log("Updated auth data: ", data);
  }, [data]);

  const signin = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setAuthState({
      data: null,
      error: null,
      loading: true,
    });

    try {
      const response = await axios.post("/api/auth/signin", {
        email,
        password,
      });

      setAuthState({
        data: response.data.user,
        error: null,
        loading: false,
      });
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        // Log the error response for debugging
        console.log("Error response: ", error.response?.data);

        setAuthState({
          data: null,
          error:
            error.response?.data?.message || "An unexpected error occurred",
          loading: false,
        });
      } else {
        setAuthState({
          data: null,
          error: "An unexpected error occurred",
          loading: false,
        });
      }
    }
  };

  const signup = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setAuthState({
      data: null,
      error: null,
      loading: true,
    });

    try {
      const response = await axios.post("/api/auth/signup", {
        email,
        password,
      });
      if (response) {
        console.log("response is: ", response);
        setAuthState({
          data: response.data.user,
          error: null,
          loading: false,
        });
        console.log("setAuthState is: ", data);
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        // Log the error response for debugging
        console.log("Error response: ", error.response?.data);

        setAuthState({
          data: null,
          error:
            error.response?.data?.message || "An unexpected error occurred",
          loading: false,
        });
      } else {
        setAuthState({
          data: null,
          error: "An unexpected error occurred",
          loading: false,
        });
      }
    }
  };

  const signout = () => {
    deleteCookie("jwt");
    setAuthState({
      data: null,
      error: null,
      loading: false,
    });
  };
  return {
    signin,
    signup,
    signout,
  };
};

export default useAuth;
