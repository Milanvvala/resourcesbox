import {
  SheetClose,
  SheetDescription,
  SheetHeader,
  SheetTitle
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { brandTagline, brandTitle, cn, navbarLinks } from "@/lib"
import Image from "next/image"
import Link from "next/link"
import { Button, SheetComp, Separator } from "@/components/comps"

interface Props {
  pathName: string
}

export default function NavMenu(props: Props) {
  const { pathName } = props

  function trigger() {
    return (
      <Button variant={"outline"} className="sm:hidden" size={"icon"}>
        <Menu size={16} />
      </Button>
    )
  }

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
      <SheetHeader className="mb-4">
        <div className="flex gap-3 items-center">
          <Image src="/plogo.png" width={40} height={40} alt="logo-image" />
          <SheetTitle>{brandTitle}</SheetTitle>
        </div>
        <SheetDescription className="text-left">
          {brandTagline}
        </SheetDescription>
      </SheetHeader>
    )
  }

  function close() {
    return (
      <Button asChild type="submit" className="w-full font-semibold text-md">
        <Link href={"/create"}>Submit Tool</Link>
      </Button>
    )
  }

  return (
    <>
      <SheetComp
        trigger={trigger()}
        side="left"
        header={header()}
        close={close()}
      >
        <Separator />
        <NavLinks />
      </SheetComp>
    </>
  )
}
