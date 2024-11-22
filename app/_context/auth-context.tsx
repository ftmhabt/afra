"use client";

import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import { getCookie } from "cookies-next";

interface User {
  id: number;
  email: string;
}
interface State {
  loading: boolean;
  data: User | null;
  error: string | null;
}

interface AuthState extends State {
  setAuthState: React.Dispatch<React.SetStateAction<State>>;
}

export const AuthorizationContext = createContext<AuthState>({
  loading: false,
  data: null,
  error: null,
  setAuthState: () => {},
});

export default function AuthContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authState, setAuthState] = useState<State>({
    loading: true,
    data: null,
    error: null,
  });

  const fetchUser = async () => {
    try {
      const jwt = getCookie("jwt");
      console.log("jwt", jwt);
      if (!jwt) {
        setAuthState({
          data: null,
          error: null,
          loading: false,
        });
        return;
      }

      const response = await axios.get(`/api/auth/me`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
      console.log("r", response);
      setAuthState({
        data: response.data.user,
        error: null,
        loading: false,
      });
    } catch (error: unknown) {
      const errorMessage = axios.isAxiosError(error)
        ? error.message
        : "An unexpected error occurred";

      setAuthState({
        data: null,
        error: errorMessage,
        loading: false,
      });
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <AuthorizationContext.Provider
      value={{
        ...authState,
        setAuthState,
      }}
    >
      {children}
    </AuthorizationContext.Provider>
  );
}
