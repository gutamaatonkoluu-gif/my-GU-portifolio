import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#3e2723] text-center py-6 text-[#b0b0b0] text-sm">
      © {new Date().getFullYear()} Gutema Tonkolu. All rights reserved.
    </footer>
  );
}
