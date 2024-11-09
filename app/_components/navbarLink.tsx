import Link from "next/link";
import React, { ReactNode } from "react";

export default function NavbarLink({
  children,
  url,
}: {
  children: ReactNode;
  url: string;
}) {
  return (
    <Link href={url} className="p-3 rounded-full">
      {children}
    </Link>
  );
}
