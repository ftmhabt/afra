"use client";
import { useContext, useEffect } from "react";
import { AuthorizationContext } from "../_context/auth-context";
import { redirect } from "next/navigation";

export default function UserPage() {
  const { data, loading } = useContext(AuthorizationContext);

  useEffect(() => {
    if (!data) {
      redirect("/signin");
    }
  }, []);

  return loading && <div>dashboard</div>;
}
