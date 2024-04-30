import { db } from "@/lib/db"
import ProductList from "./ProductList"
import { ProductFilterValues } from "@/lib/validation"
import { Prisma } from "@prisma/client"

interface Props {
  filterValues: ProductFilterValues
}

export default async function ProductResults(props: Props) {
  const { q, type, location, remote } = props.filterValues

  const searchString = q
    ?.split("")
    .filter((word) => word.length > 0)
    .join(" & ")

  const searchFilter: Prisma.ProductWhereInput = searchString
    ? {
        OR: [
          { title: { search: searchString } },
          { type: { search: searchString } },
          { location: { search: searchString } },
          { locationType: { search: searchString } },
          { companyName: { search: searchString } }
        ]
      }
    : {}

  const where: Prisma.ProductWhereInput = {
    AND: [
      searchFilter,
      type ? { type } : {},
      location ? { location } : {},
      remote ? { locationType: "Remote" } : {},
      { approved: true }
    ]
  }

  const data = await db.product.findMany({
    where,
    orderBy: { createdAt: "desc" }
  })
  return (
    <div className="space-y-4 grow">
      {data.map((p) => {
        return <ProductList product={p} key={p.id} />
      })}

      {data.length === 0 && (
        <p className="m-auto text-center">No Product Found</p>
      )}
    </div>
  )
}
