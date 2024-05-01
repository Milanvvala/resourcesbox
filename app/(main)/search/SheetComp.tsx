import React from "react"
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
import { Button } from "@/components/ui/button"
import { SlidersHorizontal } from "lucide-react"
import { db } from "@/lib/db"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import SelectComp from "../test/SelectComp"
import { ResourceFilterValues, resourceFilterSchema } from "@/lib/validation"
import { redirect } from "next/navigation"

interface Props {
  defaultValues: ResourceFilterValues
}

async function filterResources(formdata: FormData) {
  "use server"
  // console.log(formdata.get("q") as string)

  const values = Object.fromEntries(formdata.entries())
  const parseResult = resourceFilterSchema.parse(values)
  console.log(parseResult)

  let { q, category } = parseResult

  if (category == "all") category = ""

  const searchParams = new URLSearchParams({
    ...(q && { q: q.trim() }),
    ...(category && { category })
  })

  redirect(`/search?${searchParams.toString()}`)
}

export default async function SheetComp(props: Props) {
  const {} = props.defaultValues
  const locations = await db.resource.findMany({
    // where: { approved: true }, select: { location: true }, distinct: ["location"]
  })
  console.log(locations)

  const diffCat = (await db.category
    .findMany({
      select: { label: true }
    })
    .then((categories) =>
      categories.map(({ label }) => label).filter(Boolean)
    )) as string[]
    console.log(diffCat)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"secondary"} size={"sm"} className="text-lg gap-2">
          <SlidersHorizontal className="h-4 w-4" /> Filters
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="mb-4">
          <SheetTitle>Filters</SheetTitle>
          <SheetDescription>
            Filter Products based on Requirements
          </SheetDescription>
        </SheetHeader>

        <form action={filterResources}>
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <Label>Search</Label>
              <Input name="q" placeholder="Title,Company, etc." id="q" />
            </div>
            <SelectComp data={diffCat} label="category" defaultValue="all" />
            {/* <Button type="submit" className="w-full font-semibold text-md">
              Filter
            </Button> */}

            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit" className="w-full font-semibold text-md">
                  Save changes
                </Button>
              </SheetClose>
            </SheetFooter>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  )
}
