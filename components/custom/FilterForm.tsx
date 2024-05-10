import { filterResources } from "@/actions/filter-resources"
import { db } from "@/lib/db"
import { ResourceFilterValues } from "@/lib/validation"
import { Button, Checkbox, Input, Label, SelectComp } from "@/components/comps"
import { SheetClose, SheetFooter } from "@/components/ui/sheet"

interface Props {
  defaultValues: ResourceFilterValues
}
export default async function FilterForm(props: Props) {
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
    <>
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
    </>
  )
}
