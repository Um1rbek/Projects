import React from 'react';

const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-md px-4 md:px-8 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
 
        <div className="flex items-center space-x-4">
          <div className="w-[60px] h-[60px] bg-[#348C44] rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-xl">A</span>
          </div>
          <h2 className="text-2xl font-bold text-[#348C44]">Admin Panel</h2>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <p className="text-gray-600 font-medium">Welcome, Admin</p>
          <div className="w-10 h-10 rounded-full bg-[#FFDC4A] flex items-center justify-center font-bold text-[#348C44]">
            A
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
