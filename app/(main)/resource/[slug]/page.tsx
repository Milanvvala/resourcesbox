import { db } from "@/lib/db"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import React, { cache } from "react"
import Details from "./Details"
import Markdown from "@/components/utils/Markdown"

interface PageProps {
  params: { slug: string }
}

const getResource = cache(async (slug: string) => {
  const details = await db.resource.findUnique({
    where: { slug }
  })

  if (!details) notFound()

  return details
})

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { slug } = props.params
  const resource = await getResource(slug)
  const title = resource.title

  return { title }
}

export default async function page(props: PageProps) {
  const { slug } = props.params

  const resource = await getResource(slug)

  if (!resource.visitLink) {
    console.log("Resource has No Visit Link")
    notFound()
  }

  return (
    <main className=" max-w-5xl m-auto flex flex-col md:flex-raw items-center gap-5 md:items-start">
      <section className="w-full grow space-y-4">
        <Details resource={resource} />
        <div>
          {resource.markdown && <Markdown>{resource.markdown}</Markdown>}
        </div>
      </section>
    </main>
  )
}
