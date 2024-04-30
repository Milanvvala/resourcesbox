import { ProductFilterValues } from "@/lib/validation"
import ProductResults from "./ProductResults"
import Sidebar from "./Sidebar"

interface PageProps {
  searchParams: {
    q?: string
    type?: string
    location?: string
    remote?: string
  }
}

export default async function page(props: PageProps) {
  const { q, type, location, remote } = props.searchParams

  const filterValues: ProductFilterValues = {
    q,
    type,
    location,
    remote: remote === "true"
  }

  return (
    <main className="m-auto my-10  space-y-10 px-3">
      <div className="space-y-5 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Developer jobs
        </h1>
        <p className="text-muted-foreground">Find your dream job.</p>
      </div>
      <section className="flex flex-col md:flex-row gap-4">
        <Sidebar defaultValues={filterValues} />
        <ProductResults filterValues={filterValues} />
      </section>
    </main>
  )
}
