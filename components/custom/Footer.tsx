"use client"
import { brandTagline, brandTitle, footerLinks } from "@/lib/consts"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  SiInstagram,
  SiProducthunt,
  SiTicktick,
  SiTwitter
} from "react-icons/si"

export default function Footer() {
  const pathName = usePathname()
  console.log("footer", pathName)

  return (
    <footer className="border-t mt-4">
      <div className="mx-auto max-w-5xl space-y-5 px-3 py-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center justify-between">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-xl font-semibold">{brandTitle}</h3>
            <p className="text-sm text-muted-foreground">{brandTagline}</p>
          </div>

          <div className="flex flex-col space-y-2 text-sm text-muted-foreground ">
            <div className="flex flex-wrap gap-5 text-sm text-muted-foreground justify-center">
              {footerLinks.map((ele) => {
                return (
                  <Link
                    href={ele.link}
                    className="hover:underline hover:text-primary"
                    key={ele.label}
                  >
                    {ele.label}
                  </Link>
                )
              })}
            </div>

            <span className="inline-flex sm:ml-auto sm:mt-0 justify-center sm:text-right ">
              <a className="text-gray-400">
                <SiInstagram size={16} className="hover:text-primary" />
              </a>
              <a className="ml-3 text-gray-400">
                <SiTwitter size={16} className="hover:text-primary" />
              </a>
              <a className="ml-3 text-gray-400">
                <SiProducthunt size={16} className="hover:text-primary" />
              </a>
              <a className="ml-3 text-gray-400">
                <SiTicktick size={16} className="hover:text-primary" />
              </a>
            </span>
          </div>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {brandTitle}, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
