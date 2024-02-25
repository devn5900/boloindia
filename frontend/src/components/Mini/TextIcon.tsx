import React from "react";

const TextIcon = ({ text, color }: { text: string; color: string }) => {
  return (
    <div >
      <span className={`${color} xs:text-xs sm:text-xs md:text-sm py-1 px-2 rounded-sm text-white`}>{text}</span>
    </div>
  );
};

export default TextIcon;
