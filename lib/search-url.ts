"use server"

import { productFilterSchema } from "@/lib"
import { redirect } from "next/navigation"

export async function searchUrl(formdata: FormData) {
  "use server"
  // console.log(formdata.get("q") as string)

  const values = Object.fromEntries(formdata.entries())
  const parseResult = productFilterSchema.parse(values)
  console.log(parseResult)

  let { q, category, deal, price } = parseResult

  if (category == "all") category = ""
  if (price == "all") price = ""

  const searchParams = new URLSearchParams({
    ...(q && { q: q.trim() }),
    ...(category && { category }),
    ...(price && { price }),
    ...(deal && { deal })
  })

  redirect(`/search?${searchParams.toString()}`)
}
