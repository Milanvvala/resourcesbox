"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { navbarLinks } from "@/lib/consts"
import NavMenu from "./Menu"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathName = usePathname()
  console.log("navbar", pathName)

  return (
    <header className="border-b mb-4">
      <nav className="max-w-screen-7xl m-auto flex px-5 py-3 items-center justify-between">
        <Link className="flex items-center gap-3" href={"/"}>
          <Image src="/plogo.png" width={40} height={40} alt="logo-image" />
          <span className="text-xl font-bold tracking-tight">
            Find Resources
          </span>
        </Link>

        <div className="hidden sm:flex flex-wrap gap-5 text-sm text-muted-foreground justify-center">
          {navbarLinks.map((ele) => {
            return (
              <Link
                href={ele.link}
                className={cn("hover:underline hover:text-primary", {
                  "underline text-primary": pathName == ele.link
                })}
                key={ele.label}
              >
                {ele.label}
              </Link>
            )
          })}
        </div>

        <Button asChild className="hidden sm:flex">
          <Link href={"/create"}>Submit Tool</Link>
        </Button>

        <NavMenu pathName={pathName}/>
      </nav>
    </header>
  )
}
