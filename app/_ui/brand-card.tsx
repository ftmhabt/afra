import Image from "next/image";
import Logo from "../../public/logo.png";

export default function BrandCard() {
  return (
    <div className="flex gap-3 items-center">
      <Image src={Logo} alt="لوگوی افرا" width={25} height={50} />
      <div>
        <h1 className="text-xl font-bold">گالری افرا</h1>
        <p>رنگ ها و طرح های مختلف</p>
      </div>
    </div>
  );
}
