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
import { SlidersHorizontal } from "lucide-react"
import { db } from "@/lib/db"
import { Button, Label, Input, Checkbox } from "@/components/comps"
import SelectComp from "../test/SelectComp"
import { ResourceFilterValues } from "@/lib/validation"
import { filterResources } from "@/actions/filter-resources"

interface Props {
  defaultValues: ResourceFilterValues
}

export default async function SheetComp(props: Props) {
  const {} = props.defaultValues

  const diffCat = (await db.category
    .findMany({
      select: { label: true }
    })
    .then((categories) =>
      categories.map(({ label }) => label).filter(Boolean)
    )) as string[]

  const pricing = [
    "Free",
    "Freemium",
    "Free + Paid",
    "One Time Payment",
    "Subscription"
  ]

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
              <Input name="q" placeholder="Title, Company, etc." id="q" />
            </div>
            <SelectComp data={diffCat} label="category" defaultValue="all" />
            <SelectComp data={pricing} label="price" defaultValue="all" />

            <div className="flex items-center gap-2">
              <Checkbox id="deal" name="deal" className="rounded" />
              <Label htmlFor="deal">Deals</Label>
            </div>

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
