import ArrowRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
export const ContactSection = () => {
  return (
    <div className="py-16 pt-12">
      <div className=" container">
        <div className=" bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center overflow-y-hidden z-0 relative md:text-left">
          <div
            className=" absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col gap-8 items-center md:flex-row md:gap-16">
            <div className="">
              <h2 className="text-2xl font-serif md:text-3xl">
                Let’s Build Something Extraordinary Together
              </h2>
              <p className="text-sm mt-2 md:text-base">
                Ready to turn your vision into reality? Let’s connect and
                explore how I can bring your project to life with creativity and
                precision.
              </p>
            </div>
            <div className="">
              <button className=" text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max">
                <span className=" font-semibold">Conatct Me</span>
                <span>
                  <ArrowRightIcon className="size-4" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
