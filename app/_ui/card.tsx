import Image, { StaticImageData } from "next/image";

export default function Card({
  imageSource,
}: {
  imageSource: StaticImageData;
}) {
  return (
    <div className="rounded-xl bg-white flex gap-4 p-4 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
      <Image
        src={imageSource}
        alt="pot"
        width={150}
        height={150}
        className="rounded-xl grow"
      />
      <div className="flex flex-col gap-4">
        <div className="h-full flex flex-col justify-between">
          <h1 className="font-bold">بشقاب میناکاری شده</h1>
          <div className="text-sm">16 روز تا آماده شدن</div>
          <div className="text-sm">250000 تومن</div>
        </div>
        <button className="bg-primary text-white px-3 py-1 rounded-lg">
          سفارش
        </button>
      </div>
    </div>
  );
}
