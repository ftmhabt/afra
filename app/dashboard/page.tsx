"use client";
import { useContext, useEffect } from "react";
import { AuthorizationContext } from "../_context/auth-context";
import { redirect } from "next/navigation";

export default function UserPage() {
  const { data } = useContext(AuthorizationContext);

  useEffect(() => {
    if (!data) {
      redirect("/signin");
    }
  }, []);

  return <div>dashboard</div>;
}
