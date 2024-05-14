"use client"
import Image from "next/image"
import Link from "next/link"
import { Button, NavMenu, Separator, ThemeToggle } from "@/components/comps"
import { cn, navbarLinks } from "@/lib"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathName = usePathname()
  console.log("navbar", pathName)

  const NavLinks = navbarLinks.map((ele) => {
    return (
      <Link
        href={ele.link}
        className={cn("hover:underline hover:text-primary text-md", {
          "underline text-primary": pathName == ele.link
        })}
        key={ele.label}
      >
        {ele.label}
      </Link>
    )
  })

  return (
    <header className="border-b mb-4">
      <nav className="max-w-screen-7xl m-auto flex px-6 py-3 items-center justify-between">
        <div className="flex justify-center gap-6 items-center">
          <Link className="flex items-center gap-3" href={"/"}>
            <Image src="/plogo.png" width={40} height={40} alt="logo-image" />
            <span className="text-xl font-bold tracking-tight">
              Find Resources
            </span>
          </Link>
          <Separator orientation="vertical" className="" />
          <p className="hidden md:block">
            Press <span className="text-primary mx-1">⌘ + D</span>or
            <span className="text-primary mx-1">ctrl + D</span> to bookmark this
            page
          </p>
        </div>

        <div className="flex gap-4">
          <div className="flex gap-4">
            <div className="hidden sm:flex flex-wrap gap-5 text-sm text-muted-foreground items-center">
              {NavLinks}
            </div>

            <ThemeToggle />

            <Button asChild className="hidden sm:flex">
              <Link href={"/create"}>Submit Tool</Link>
            </Button>
          </div>

          <NavMenu pathName={pathName} />
        </div>
      </nav>
    </header>
  )
}
