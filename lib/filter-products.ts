"use server"

import { db, ProductFilterValues } from "@/lib"
import { Prisma } from "@prisma/client"

function idPrice(p: string | undefined): number | undefined {
  switch (p) {
    case "Free":
      return 1
    case "Freemium":
      return 2
    case "Free + Paid":
      return 3
    case "One Time Payment":
      return 4
    case "Subscription":
      return 5
    default:
      return undefined
  }
}

function idCategory(c: string | undefined): number | undefined {
  switch (c) {
    case "Development":
      return 1
    case "Marketing":
      return 2
    case "Design":
      return 3
    default:
      return undefined
  }
}

export async function filterProducts(filterValues: ProductFilterValues) {
  const { q, category, price, deal } = filterValues

  const searchString = q
    ?.split(" ")
    .filter((word: string) => word.length > 0)
    .join(" & ")

  const searchFilter: Prisma.ProductWhereInput = searchString
    ? {
        OR: [{ title: { search: searchString } }]
      }
    : {}

  const where: Prisma.ProductWhereInput = {
    AND: [
      searchFilter,
      category ? { categoryId: idCategory(category) } : {},
      price ? { price: idPrice(price) } : {},
      deal === "on" ? { badge: "Deal" } : {}
    ]
  }

  const data = await db.product.findMany({
    where,
    orderBy: { createdAt: "desc" }
  })

  return data
}
