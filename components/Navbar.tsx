import Image from "next/image"
import Link from "next/link"
import React from "react"
import { Button } from "./ui/button"

export default function Navbar() {
  return (
    <header className="shadow-sm">
      <nav className="max-w-screen-7xl m-auto flex px-5 py-3 items-center justify-between">
        <Link className="flex items-center gap-3" href={"/"}>
          <Image src="/plogo.png" width={40} height={40} alt="logo-image" />
          <span className="text-xl font-bold tracking-tight">
            Find Resources
          </span>
        </Link>
        <Button asChild>
          <Link href={"/create"}>Submit Tool</Link>
        </Button>
      </nav>
    </header>
  )
}
