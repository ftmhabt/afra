import React from "react";
import { FiSearch } from "react-icons/fi";

export default function Search() {
  return (
    <div className="bg-white flex gap-4 rounded-xl px-2 py-1 items-center">
      <input type="text" name="" id="" className="focus:outline-0 grow p-1" />
      <FiSearch size={20} />
    </div>
  );
}
