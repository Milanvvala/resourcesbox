import Results from "./Results"
import { Button, Checkbox, Input, Label, SelectComp } from "@/components/comps"
import { SlidersHorizontal } from "lucide-react"
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
import { searchUrl } from "@/lib/search-url"
import { ProductFilterValues } from "@/lib"
import { price_types } from "@/components/custom/Pricing"
import { CodeXml, PencilRuler, Volume2 } from "lucide-react"
import { SelectDataType } from "@/components/utils/SelectComp"

interface PageProps {
  searchParams: {
    q?: string
    category?: string
    deal?: string
    price?: string
  }
}

const category_types: SelectDataType[] = [
  { id: 1, label: "Design", link: "/search/design", icon: <PencilRuler /> },
  {
    id: 2,
    label: "Development",
    link: "/search/development",
    icon: <CodeXml />
  },
  { id: 3, label: "Marketing", link: "/search/marketing", icon: <Volume2 /> }
]

interface FilterFormProps {
  defaultValues: ProductFilterValues
}

function FilterForm(props: FilterFormProps) {
  const {} = props.defaultValues

  return (
    <>
      <form action={searchUrl}>
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <Label>Search</Label>
            <Input name="q" placeholder="Title, Company, etc." id="q" />
          </div>
          <SelectComp
            data={category_types}
            label="category"
            defaultValue="all"
          />
          <SelectComp data={price_types} label="price" defaultValue="all" />

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

function FilterSidebar() {
  const defaultValues = {}

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant={"secondary"}
          size={"sm"}
          className="text-lg gap-2 w-fit "
        >
          <SlidersHorizontal className="h-4 w-4" /> Filters
        </Button>
      </SheetTrigger>
      <SheetContent side={"right"}>
        <SheetHeader className="mb-4">
          <SheetTitle>Filters</SheetTitle>
          <SheetDescription>
            Filter Products based on Requirements
          </SheetDescription>
        </SheetHeader>
        <FilterForm defaultValues={defaultValues} />
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default async function page(props: PageProps) {
  const { q, category, deal, price } = props.searchParams

  const filterValues: ProductFilterValues = {
    q,
    category,
    deal,
    price
  }

  return (
    <>
      <main className="m-auto my-10 space-y-10 px-5">
        <div className="space-y-5 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Best Resources
          </h1>
          <p className="text-muted-foreground">Find your dream job.</p>
        </div>
        <section className="flex flex-col gap-4">
          <div className="text-right mb-2">
            <FilterSidebar />
          </div>
          <Results filtervalues={filterValues} />
        </section>
      </main>
    </>
  )
}
