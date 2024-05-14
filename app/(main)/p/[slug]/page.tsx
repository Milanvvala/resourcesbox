import { db } from "@/lib"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import React, { cache } from "react"
import Details from "./Details"
import Markdown from "@/components/utils/Markdown"

interface PageProps {
  params: { slug: string }
}

const getProduct = cache(async (slug: string) => {
  const details = await db.product.findUnique({
    where: { slug }
  })

  if (!details) notFound()

  return details
})

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { slug } = props.params
  const product = await getProduct(slug)
  const title = product.title

  return { title }
}

export default async function page(props: PageProps) {
  const { slug } = props.params

  const product = await getProduct(slug)

  if (!product.visitLink) {
    console.log("Product has No Visit Link")
    notFound()
  }

  return (
    <main className=" max-w-5xl m-auto flex flex-col md:flex-raw items-center gap-5 md:items-start">
      <section className="w-full grow space-y-4">
        <Details product={product} />
        <div>
          {product.markdown && (
            <Markdown children={product.description || "**Descripton**"} />
          )}
        </div>
      </section>
    </main>
  )
}
