import Link from "next/link"
import { Badge } from "@/components/comps"
import { db, ProductFilterValues } from "@/lib"
import { Product } from "@prisma/client"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import { filterProducts } from "@/lib/filter-products"

interface Props {
  filtervalues: ProductFilterValues
}

interface ProductListProps {
  item: Product
}

async function ProductList(props: ProductListProps) {
  const { title, categoryId, badge, logoUrl, description } = props.item

  const cat = await db.category.findFirst({
    where: { id: categoryId || 0 }
  })

  return (
    <article className="flex gap-3 border hover:border-primary rounded p-3 hover:bg-muted/60 h-fit relative">
      <Image
        src={logoUrl || "/plogo.png"}
        alt="logo"
        width={64}
        height={64}
        className="rounded self-center w-16 h-16"
      />
      <section className="flex-grow space-y-3">
        <div className="">
          <h2 className="text-md font-semibold line-clamp-1">{title}</h2>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {description}
          </p>
        </div>
      </section>
      <div className="flex flex-col shrink-0 items-end justify-between">
        {badge && (
          <Badge
            className="rounded absolute -top-3 right-3  md:flex items-center space-x-1"
            variant={"secondary"}
          >
            {badge}
          </Badge>
        )}
      </div>

      <ExternalLink
        size={16}
        className="absolute text-muted-foreground right-3 bottom-3"
      />
    </article>
  )
}

export default async function Results(props: Props) {
  const { filtervalues } = props
  const data = await filterProducts(filtervalues)

  return (
    <div className="grow grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map((i) => {
        return (
          <Link key={i.id} href={`/p/${i.slug}`} className="block">
            <ProductList item={i} />
          </Link>
        )
      })}

      {data.length === 0 && (
        <p className="m-auto text-center">No Product Found</p>
      )}
    </div>
  )
}
