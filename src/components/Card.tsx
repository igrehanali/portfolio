import grainImage from "@/assets/images/grain.jpg";
import { twMerge } from "tailwind-merge";

interface CardProps {
  className?: string;
  children?: React.ReactNode;
}

const Card = ({ className, children }: CardProps) => {
  const cardContainerClass = twMerge(
    "bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 after:outline after:rounded-3xl after:outline-white/20 after:pointer-events-none ",
    className
  );

  return (
    <div className="card-container">
      <div className={cardContainerClass}>
        <div
          className="card-background absolute inset-0 -z-10 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        />
        {children}
      </div>
    </div>
  );
};

export default Card;
