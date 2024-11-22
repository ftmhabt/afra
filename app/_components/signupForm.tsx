"use client";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import useAuth from "../_hooks/use-auth";
import { AuthorizationContext } from "../_context/auth-context";
import { redirect } from "next/navigation";

export default function SignupForm() {
  const { data, error, loading, setAuthState } =
    useContext(AuthorizationContext);
  useEffect(() => {
    setAuthState({
      data: null,
      error: null,
      loading: false,
    });
  }, []);

  if (data) redirect("/dashboard");

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const [disabled, setDisabled] = useState(true);
  const { signup } = useAuth();

  useEffect(() => {
    if (inputs.email && inputs.password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [inputs]);

  return (
    <>
      <div>welcome</div>
      <div>register</div>
      <form
        className="flex flex-col gap-4 *:w-60 *:rounded-md *:p-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          value={inputs.email}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          value={inputs.password}
          onChange={(e) => handleChange(e)}
        />
        <button
          disabled={disabled && !loading}
          className="bg-primary text-white disabled:text-secondary"
          onClick={(e) => {
            e.preventDefault();
            signup(inputs);
          }}
        >
          {loading ? "Loading" : "Sign Up"}
        </button>
      </form>
      <h1>{error ? error : ""}</h1>
    </>
  );
}
