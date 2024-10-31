import React from "react";

interface TechIconProps {
  component: React.ReactNode;
}

const TechIcon: React.FC<TechIconProps> = ({ component }) => {
  const Component = component;
  return;
  <>
    <Component className="size-10" />
  </>;
};

export default TechIcon;
