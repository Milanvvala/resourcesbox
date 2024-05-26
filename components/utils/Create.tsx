"use client"
import { Product, Type } from "@prisma/client"
import { Button } from "@/components/comps"
import { db } from "@/lib"
import { handleCreate } from "@/lib/filter-products"

const md = `
**About**

Hello World 
`

export default function Create() {
  return (
    <div>
      <Button onClick={() => handleCreate()}>Create Products</Button>
    </div>
  )
}
