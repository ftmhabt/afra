"use client";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import useAuth from "../_hooks/use-auth";
import { AuthorizationContext } from "../_context/auth-context";
import { redirect } from "next/navigation";
import { PropagateLoader } from "react-spinners";

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
    <div className="flex flex-col items-center justify-around">
      <form
        className="flex flex-col gap-4 *:w-60 *:rounded-md *:p-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email@email.com"
          value={inputs.email}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="رمز عبور"
          value={inputs.password}
          onChange={(e) => handleChange(e)}
        />
        <button
          disabled={disabled && !loading}
          className="bg-primary text-white disabled:text-secondary h-10 flex items-center justify-center"
          onClick={(e) => {
            e.preventDefault();
            signup(inputs);
          }}
        >
          {loading ? <PropagateLoader color="#fff" /> : "ثبت نام"}
        </button>
      </form>
      <h1>{error ? error : ""}</h1>
    </div>
  );
}
