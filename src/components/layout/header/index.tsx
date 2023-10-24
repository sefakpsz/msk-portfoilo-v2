import React from "react"
import { MainNav } from "./main-nav"
import Social from "./social"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"

function Header() {
  return (
    <div className="border-b fixed top-0 inset-x-0 bg-white z-10">
      <div className="flex justify-between h-16 items-center px-4 max-w-7xl mx-auto">
        <a href="/" className="font-extrabold mr-5">MSK</a>
        <div className="w-full items-center hidden sm:flex">
          <MainNav className="mx-6" />
          <Social />
        </div>
        <Button variant="ghost" className="px-2 sm:hidden">
          <Menu height={25} strokeWidth={1.5} />
        </Button>
      </div>
    </div>
  )
}

export default Header
