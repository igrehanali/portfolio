import React from "react";

interface SectionHeaderProps {
  title: string;
  eyebrow: string;
  description: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  eyebrow,
  description,
}) => {
  return (
    <div>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-400 to-sky-400 text-transparent bg-clip-text text-center">
          {eyebrow}
        </p>
      </div>

      <h2 className="font-bold font-serif text-3xl text-center mt-5 md:text-5xl">
        {title}
      </h2>
      <p className="text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto lg:text-xl">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
