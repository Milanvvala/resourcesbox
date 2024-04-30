import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { db } from "@/lib/db"
import SelectComp from "./SelectComp"
import { jobTypes } from "./SelectTypes"
import { Button } from "@/components/ui/button"
import { ProductFilterValues, productFilterSchema } from "@/lib/validation"
import { redirect } from "next/navigation"
import FormSubmitButton from "@/components/FormSubmitButton"

interface Props {
  defaultValues: ProductFilterValues
}

async function filterJobs(formdata: FormData) {
  "use server"
  // console.log(formdata.get("q") as string)
  // console.log(formdata)

  const values = Object.fromEntries(formdata.entries())
  const parseResult = productFilterSchema.parse(values)
  console.log(parseResult)

  let { q, type, location, remote } = parseResult

  if (type == "all") type = ""
  if (location == "all") location = ""

  const searchParams = new URLSearchParams({
    ...(q && { q: q.trim() }),
    ...(type && { type }),
    ...(location && { location }),
    ...(remote && { remote: "true" })
  })
  // console.log(values, parseResult, searchParams)

  redirect(`/test?${searchParams.toString()}`)
}

export default async function Sidebar(props: Props) {
  const { q, location, type, remote } = props.defaultValues

  const diffLocations = (await db.product
    .findMany({
      where: { approved: true },
      select: { location: true },
      distinct: ["location"]
    })
    .then((locations) =>
      locations.map(({ location }) => location).filter(Boolean)
    )) as string[]

  return (
    <div className="md:-[260px] sticky top-0 h-fit bg-background border rounded p-4">
      <form action={filterJobs}>
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <Label>Search</Label>
            <Input
              name="q"
              placeholder="Title,Company, etc."
              id="q"
              defaultValue={q}
            />
          </div>

          <SelectComp
            data={diffLocations}
            label="location"
            defaultValue={location}
          />
          <SelectComp data={jobTypes} label="type" defaultValue={type} />
          <div className="flex items-center gap-2">
            <input
              name="remote"
              id="remote"
              type="checkbox"
              className=" accent-blue-700 text-white"
              defaultChecked={remote}
            />
            <Label htmlFor="remote">Remote</Label>
          </div>
          <FormSubmitButton className="w-full font-semibold text-md">
            Filter
          </FormSubmitButton>
        </div>
      </form>
    </div>
  )
}
