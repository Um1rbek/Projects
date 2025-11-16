import React from "react";

const SectionHeader = ({ title }) => {
  return (
    <div className="relative w-fit mx-auto mb-12">
      <div className="text-center text-[#D72638] font-bold text-2xl uppercase">
        {title}
      </div>
      <div className="absolute left-1/2 -bottom-3 transform -translate-x-1/2 w-8 h-4 border-b-[6px] border-[#D72638] border-x-[6px] border-transparent rotate-45"></div>
      <div className="absolute left-1/2 -bottom-3 transform -translate-x-1/2 w-8 h-4 border-b-[6px] border-[#D72638] border-x-[6px] border-transparent -rotate-45"></div>
    </div>
  );
};

export default SectionHeader;
