'use server'

import { resourceFilterSchema } from "@/lib/validation"
import { redirect } from "next/navigation"

export async function filterResources(formdata: FormData) {
  "use server"
  // console.log(formdata.get("q") as string)

  const values = Object.fromEntries(formdata.entries())
  const parseResult = resourceFilterSchema.parse(values)
  console.log(parseResult)

  let { q, category, deals } = parseResult

  if (category == "all") category = ""

  const searchParams = new URLSearchParams({
    ...(q && { q: q.trim() }),
    ...(category && { category }),
    ...(deals && { deals: "true" })
  })

  redirect(`/search?${searchParams.toString()}`)
}