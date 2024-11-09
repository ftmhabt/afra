import { ReactNode } from "react";

export default function Navbar({ children }: { children: ReactNode }) {
  return (
    <div
      className="fixed bottom-0 bg-secondary w-screen 
    shadow-[0px_-39px_69px_23px_rgba(0,_0,_0,_0.1)]
    flex justify-evenly px-6 py-3"
    >
      {children}
    </div>
  );
}
