import { Create } from "@/components/comps"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/utils/ThemeToggle"
import Details from "./p/[slug]/Details"
import { Type } from "@prisma/client"

const md = `
**About**

Hello World 
`

const product = {
  slug: "test1234",
  title: "test Product",
  description: "desc Notion",
  markdown: md,
  availableOn: 123,
  badge: "Deal",
  price: 1,
  logoUrl: "/plogo.png",
  visitLink: "www.google.com",
  categoryId: 1,
  type: Type.TOOL,
  id: 0,
  published: false,
  createdAt: null,
  updatedAt: null
}

export default function Home() {
  return (
    <main className=" max-w-5xl m-auto flex flex-col md:flex-raw items-center gap-5 md:items-start">
      <section className="w-full grow space-y-4">
        {/* <Button>Click me</Button>
      <ThemeToggle /> */}
        <Create />

        {/* <Details product={product} /> */}
      </section>
    </main>
  )
}
