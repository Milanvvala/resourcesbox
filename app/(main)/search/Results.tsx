import React from "react"
import ItemList from "./ItemList"
import { db } from "@/lib/db"
import { ResourceFilterValues } from "@/lib/validation"
import { Prisma } from "@prisma/client"
import Link from "next/link"

interface Props {
  filterValues: ResourceFilterValues
}

export default async function Results(props: Props) {
  let { q, category, price, deal } = props.filterValues
  let categoryId
  let Pricing
  console.log(deal, "result")

  if (category == "Development") categoryId = 1
  if (category == "Marketing") categoryId = 2
  if (category == "Design") categoryId = 3

  // if (price == '') Pricing = ''
  if (price == "Free") Pricing = 1
  if (price == "Freemium") Pricing = 2
  if (price == "Free + Paid") Pricing = 3
  if (price == "One Time Payment") Pricing = 4
  if (price == "Subscription") Pricing = 5

  const searchString = q
    ?.split(" ")
    .filter((word) => word.length > 0)
    .join(" & ")

  const searchFilter: Prisma.ResourceWhereInput = searchString
    ? {
        OR: [{ title: { search: searchString } }, ]
      }
    : {}

  const where: Prisma.ResourceWhereInput = {
    AND: [
      searchFilter,
      categoryId ? { categoryId } : {},
      price ? { price: Pricing } : {},
      deal === "on" ? { badge: "Deal" } : {}
    ]
  }

  const data = await db.resource.findMany({
    where,
    orderBy: { createdAt: "desc" }
  })

  return (
    <div className="grow grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {data.map((i) => {
        return (
          <Link key={i.id} href={`/resource/${i.slug}`} className="block">
            <ItemList item={i} />
          </Link>
        )
      })}

      {data.length === 0 && (
        <p className="m-auto text-center">No Product Found</p>
      )}
    </div>
  )
}
