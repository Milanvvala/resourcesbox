import SheetComp from "./SheetComp"
import Results from "./Results"
import { ResourceFilterValues } from "@/lib/validation"

interface PageProps {
  searchParams: {
    q?: string
    category?: string
    deal?: string
    price?: string
  }
}

export default async function page(props: PageProps) {
  const { q, category, deal, price } = props.searchParams

  const filterValues: ResourceFilterValues = {
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
            <SheetComp defaultValues={filterValues} />
          </div>
          <Results filterValues={filterValues} />
        </section>
      </main>
    </>
  )
}
