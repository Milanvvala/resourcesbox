import React from "react"
import ItemList from "./ItemList"
import { db } from "@/lib/db"
import { ResourceFilterValues } from "@/lib/validation"
import { Prisma } from "@prisma/client"

interface Props {
  filterValues: ResourceFilterValues
}

export default async function Results(props: Props) {
  let { q, category } = props.filterValues
  let categoryId

  if (category == "Development") categoryId = 1
  if (category == "Marketing") categoryId = 2
  if (category == "Design") categoryId = 3

  const searchString = q
    ?.split("")
    .filter((word) => word.length > 0)
    .join(" & ")

  const searchFilter: Prisma.ResourceWhereInput = searchString
    ? {
        OR: [
          { title: { search: searchString } }
          // { category: { search: searchString } },
        ]
      }
    : {}

  const where: Prisma.ResourceWhereInput = {
    AND: [searchFilter, categoryId ? {categoryId} : {}]
  }
  const data = await db.resource.findMany({
    where,
    orderBy: { createdAt: "desc" }
  })
  return (
    <div className="grow grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {data.map((i) => {
        return <ItemList item={i} key={i.id} />
      })}

      {data.length === 0 && (
        <p className="m-auto text-center">No Product Found</p>
      )}
    </div>
  )
}
