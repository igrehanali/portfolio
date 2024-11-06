import Javascript from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import Chrome from "@/assets/icons/chrome.svg";
import React from "@/assets/icons/react.svg";
import Github from "@/assets/icons/github.svg";
import TechIcon from "@/components/TechIcon";
import { twMerge } from "tailwind-merge";
import { Fragment } from "react";

const toolbox = [
  { title: "JavaScript", icon: Javascript },
  { title: "HTML 5", icon: HtmlIcon },
  { title: "CSS 3", icon: CssIcon },
  { title: "Chrome", icon: Chrome },
  { title: "React", icon: React },
  { title: "GitHub", icon: Github },
];

const ToolBoxIcon = ({
  className,
  itemWrapperClassName,
}: {
  className?: string;
  itemWrapperClassName?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_70%,transparent)]",
        className
      )}
    >
      <div
        className={twMerge(
          "flex flex-none  py-0.5 gap-6 pr-6 my-1",
          itemWrapperClassName
        )}
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <Fragment key={index}>
            {toolbox.map((tool) => (
              <div
                key={tool.title}
                className="inline-flex items-center gap-2 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
              >
                <TechIcon component={tool.icon} />
                <span className="font-semibold">{tool.title}</span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default ToolBoxIcon;
