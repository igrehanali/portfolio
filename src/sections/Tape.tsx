import StarIcon from "@/assets/icons/star.svg";

const word = [
  "Performant",
  "Accessible",
  "Secure",
  "Intuitive",
  "Maintainable",
  "Scalable",
  "Interactive",
  "User Friendly",
  "Search Optimized",
  "Usable",
  "Reliable",
  "Responsive",
  "Efficient",
  "Modern",
  "Flexible",
  "Cross-Platform",
  "Fast Loading",
  "Engaging",
  "High Quality",
  "Customizable",
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className=" bg-gradient-to-r from-emerald-300 to-sky-400  -rotate-3 -mx-1">
        <div className=" flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex-none gap-4 flex py-3">
            {word.map((word) => (
              <div key={word} className=" inline-flex gap-4 items-center">
                <span className="text-gray-900 uppercase font-extrabold text-sm">
                  {word}
                </span>
                <StarIcon className="size-6 text-gray-900 -rotate-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
