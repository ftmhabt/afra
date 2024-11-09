export default function Filter({
  category,
  handleCategory,
}: {
  category: string;
  handleCategory: (c: string) => void;
}) {
  return (
    <section className="flex *:rounded-xl *:px-4 *:py-1 hover:*:bg-white ">
      <div
        className={`${category === "all" && "bg-white"}`}
        onClick={() => handleCategory("all")}
      >
        همه
      </div>
      <div
        className={`${category === "plate" && "bg-white"}`}
        onClick={() => handleCategory("plate")}
      >
        بشقاب
      </div>
      <div
        className={`${category === "vase" && "bg-white"}`}
        onClick={() => handleCategory("vase")}
      >
        گلدان
      </div>
      <div
        className={`${category === "incense burner" && "bg-white"}`}
        onClick={() => handleCategory("incense burner")}
      >
        گردسوز
      </div>
    </section>
  );
}
