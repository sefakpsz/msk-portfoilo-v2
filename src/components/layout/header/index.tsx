import React from "react";
import { MainNav } from "./main-nav";
import Social from "./social";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

function Header() {
  return (
    <div className="border-b fixed top-0 inset-x-0">
      <div className="flex justify-between h-16 items-center px-4 max-w-7xl mx-auto">
        <h1 className="font-extrabold mr-5">Sefakpsz.</h1>
        <div className="w-full items-center hidden sm:flex">
          <MainNav className="mx-6" />
          <Social />
        </div>
        <Button variant="ghost" className="px-2 sm:hidden">
            <Menu height={25} strokeWidth={1.5} />
        </Button>
      </div>
    </div>
  );
}

export default Header;
