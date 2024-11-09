"use client";
import Image from "next/image";
import plate from "../../public/pottrans.png";
import { useEffect } from "react";
import Link from "next/link";
export default function Welcome() {
  useEffect(() => {
    localStorage.setItem("isFirstTime", "true");
  });

  return (
    <div className="overflow-hidden bg-white h-screen">
      <div className="h-2/3 flex flex-col justify-evenly bg-primary">
        <Image
          src={plate}
          width={280}
          height={280}
          alt="plate"
          className="-mr-20"
        />
        <Image
          src={plate}
          width={280}
          height={280}
          alt="plate"
          className="self-end -ml-20 -mt-20"
        />
      </div>
      <div className="bg-divider bg-no-repeat bg-bottom bg-cover h-9 -my-1"></div>
      <div className="h-1/3 flex flex-col justify-evenly items-center">
        <p className="text-2xl">به گالری افرا خوش اومدین!</p>
        <Link
          href="/"
          className="bg-primary py-3 text-center w-[90vw] rounded-2xl text-white text-xl"
        >
          برو به فروشگاه
        </Link>
      </div>
    </div>
  );
}
