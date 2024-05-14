import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { brandTagline, brandTitle, cn, navbarLinks } from "@/lib"
import Image from "next/image"
import Link from "next/link"
import { Button, Separator } from "@/components/comps"

interface Props {
  pathName: string
}

export default function NavMenu(props: Props) {
  const { pathName } = props

  function NavLinks() {
    return (
      <div className="flex flex-col flex-wrap space-y-2 text-sm text-muted-foreground justify-center my-2">
        {navbarLinks.map((ele) => {
          return (
            <div className="space-y-2" key={ele.label}>
              <SheetClose asChild>
                <Link
                  href={ele.link}
                  className={cn(
                    "hover:underline hover:text-primary font-semibold text-lg",
                    {
                      "underline text-primary": pathName == ele.link
                    }
                  )}
                  key={ele.label}
                >
                  {ele.label}
                </Link>
              </SheetClose>
              <Separator />
            </div>
          )
        })}
      </div>
    )
  }

  function header() {
    return (
      <div>
        <div className="flex gap-3 items-center">
          <Image src="/plogo.png" width={40} height={40} alt="logo-image" />
          <SheetTitle>{brandTitle}</SheetTitle>
        </div>
        <SheetDescription className="text-left">
          {brandTagline}
        </SheetDescription>
      </div>
    )
  }

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"outline"} className="sm:hidden" size={"icon"}>
            <Menu size={16} />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader className="mb-4">
            <div className="flex gap-3 items-center">
              <Image src="/plogo.png" width={40} height={40} alt="logo-image" />
              <SheetTitle>{brandTitle}</SheetTitle>
            </div>
            <SheetDescription className="text-left">
              {brandTagline}
            </SheetDescription>
          </SheetHeader>
          <Separator />
          <NavLinks />
          <SheetFooter>
            <Button
              asChild
              type="submit"
              className="w-full font-semibold text-md"
            >
              <Link href="/create">Submit Tool</Link>
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  )
}
