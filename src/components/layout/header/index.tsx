import React from "react";
import { MainNav } from "./main-nav";
import Social from "./social";

function Header() {
  return (
    <div className="border-b fixed top-0 inset-x-0">
      <div className="flex h-16 items-center px-4 max-w-7xl mx-auto">
        <h1 className="font-extrabold mr-5">Sefakpsz.</h1>
        <MainNav className="mx-6" />
        <Social />
      </div>
    </div>
  );
}

export default Header;
