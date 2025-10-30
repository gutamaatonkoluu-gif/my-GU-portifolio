import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#180e01] shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo / Brand Name */}
        <h1 className="text-[#f57c00] text-2xl font-bold tracking-wide">
          Gutema Tonkolu
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-[#f5f5f5]">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-[#ffa726] transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#f57c00] text-3xl focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Items */}
      {open && (
        <div className="md:hidden bg-[#3e2723] flex flex-col items-center py-4 space-y-4">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[#f5f5f5] hover:text-[#ffa726]"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
