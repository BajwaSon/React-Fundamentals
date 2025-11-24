import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-8 px-18">
      <h4 className=" text-white font-semibold uppercase tracking-wide px-6 py-2 bg-black rounded-full">
        Target Audience
      </h4>
      <span className="inline-block text-sm font-medium uppercase tracking-widest px-6 py-2 bg-gray-200 rounded-full">
        Digital Banking
      </span>
    </div>
  );
};

export default Navbar;
