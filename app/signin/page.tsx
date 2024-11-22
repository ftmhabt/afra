"use client";
import { useState } from "react";
import SigninForm from "../_components/signinForm";
import SignupForm from "../_components/signupForm";

export default function SignIn() {
  const [signin, setSignin] = useState(true);
  return (
    <div className="flex flex-col items-center justify-between h-screen">
      <div className="h-1/3 w-full bg-primary flex items-center justify-center">
        {signin ? "ورود" : "ثبت نام"}
      </div>
      <div className="flex w-full flex-col items-center p-10 gap-10 h-2/3">
        <div className="flex items-center justify-center w-60 text-center p-2 rounded-md bg-slate-200 *:rounded-md *:flex-1 *:p-1 *:leading-4">
          <div
            onClick={() => setSignin(true)}
            className={`${signin && "bg-slate-400"} `}
          >
            ورود
          </div>
          <div
            onClick={() => setSignin(false)}
            className={`${!signin && "bg-slate-400"} `}
          >
            ثبت نام
          </div>
        </div>
        {signin ? <SigninForm /> : <SignupForm />}
      </div>
    </div>
  );
}
