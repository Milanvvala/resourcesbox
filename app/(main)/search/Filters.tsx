import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { db } from "@/lib/db"
import SelectComp from "../test/SelectComp"
import { Button } from "@/components/ui/button"

async function filterResources(formdata: FormData) {
  "use server"
  console.log(formdata.get("q") as string)
}

export default async function Sidebar() {
  const locations = await db.resource.findMany({
    // where: { approved: true }, select: { location: true }, distinct: ["location"]
  })

  const diffCat = (await db.category
    .findMany({
      select: { label: true }
    })
    .then((categories) =>
      categories.map(({ label }) => label).filter(Boolean)
    )) as string[]

  return (
    <div className="md:-[260px] sticky top-0 h-fit bg-background border rounded p-4">
      <form action={filterResources}>
      <div className="space-y-4">
        <div className="flex flex-col gap-2">
          <Label>Search</Label>
          <Input name="q" placeholder="Title,Company, etc." id="q" />
        </div>
        <SelectComp data={diffCat} label="category" defaultValue="all"/>
        <Button type="submit" className="w-full font-semibold text-md">
            Filter
          </Button>
        </div>
      </form>
    </div>
  )
}
