import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const HeroOrbit = ({
  children,
  size,
  rotation,
  spinDuration,
  shouldOrbit = false,
  shouldSpin = false,
  orbitDuration,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  spinDuration?: string;
  shouldSpin: boolean;
  shouldOrbit?: boolean;
  orbitDuration: string;
}>) => {
  return (
    <div className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <div
        className={twMerge(shouldOrbit === true && "animate-spin")}
        style={{
          animationDuration: `${orbitDuration}`,
        }}
      >
        <div
          className="flex items-start justify-start"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            transform: `rotate(${rotation}deg)`,
          }}
        >
          <div
            className={twMerge(shouldSpin === true && "animate-spin")}
            style={{
              animationDuration: `${spinDuration}`,
            }}
          >
            <div
              className="inline-flex"
              style={{
                transform: `rotate({${rotation * -1}deg})`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOrbit;
