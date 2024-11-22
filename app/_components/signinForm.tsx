"use client";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import useAuth from "../_hooks/use-auth";
import { AuthorizationContext } from "../_context/auth-context";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function SigninForm() {
  const { data, error, loading, setAuthState } =
    useContext(AuthorizationContext);
  useEffect(() => {
    setAuthState({
      data: null,
      error: null,
      loading: false,
    });
  }, []);
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
  const { signin } = useAuth();

  if (data) redirect("/dashboard");
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
      <div>sign in</div>
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
          onClick={() => {
            signin(inputs);
            console.log(inputs);
          }}
        >
          {loading ? "Loading" : "Sign In"}
        </button>
      </form>
      <Link href="/signup">sign up</Link>
      <h1>{error ? error : ""}</h1>
    </>
  );
}
