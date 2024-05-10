import SheetComp from "@/components/utils/SheetComp"
import Results from "./Results"
import { ResourceFilterValues } from "@/lib/validation"
import { Button, FilterForm } from "@/components/comps"
import { SlidersHorizontal } from "lucide-react"

interface PageProps {
  searchParams: {
    q?: string
    category?: string
    deal?: string
    price?: string
  }
}

function trigger() {
  return (
    <Button variant={"secondary"} size={"sm"} className="text-lg gap-2">
      <SlidersHorizontal className="h-4 w-4" /> Filters
    </Button>
  )
}

export default async function page(props: PageProps) {
  const { q, category, deal, price } = props.searchParams

  const filterValues: ResourceFilterValues = {
    q,
    category,
    deal,
    price
  }
  const defaultValues = {}

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
            <SheetComp
              trigger={trigger()}
              title="Filters"
              description="Filter Products based on Requirements"
              side='right'
            >
              <FilterForm defaultValues={defaultValues} />
            </SheetComp>
          </div>
          <Results filterValues={filterValues} />
        </section>
      </main>
    </>
  )
}
