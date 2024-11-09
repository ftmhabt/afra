"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Search from "./_ui/search";
import Filter from "./_ui/filter";
import BrandCard from "./_ui/brand-card";
import Card from "./_ui/card";
import Pot1 from "./_img/1.png";
import Pot2 from "./_img/2.png";
import Pot3 from "./_img/3.png";
import Pot4 from "./_img/4.png";
import Pot5 from "./_img/5.png";
import Pot6 from "./_img/6.png";
import Pot7 from "./_img/7.png";
import Pot8 from "./_img/8.png";

const images = [Pot1, Pot2, Pot3, Pot4, Pot5, Pot6, Pot7, Pot8];
export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("isFirstTime")) {
      router.push("/welcome");
    }
  });

  const [category, setCategory] = useState("all");

  const handleCategory = (c: string) => {
    setCategory(c);
  };
  return (
    <div>
      <header className="flex flex-col gap-4 p-6">
        <BrandCard />
        <Search />
        <Filter category={category} handleCategory={handleCategory} />
      </header>
      <div className="flex flex-col gap-4 p-6 pt-0">
        {new Array(12)
          .fill("all")
          .map(
            (item, index) =>
              item === category && (
                <Card key={index} imageSource={images[index % images.length]} />
              )
          )}
      </div>
    </div>
  );
}
