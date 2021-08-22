import React from "react";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className="relative bottom-0 px-2 py-12 w-full flex flex-col z-10 text-gray-800 text-center dark:text-white dark:bg-gray-800 ease-in duration-100 justify-center">
      <div className="mx-1">© 2021 - Hexagon</div>
    </div>
  );
};
