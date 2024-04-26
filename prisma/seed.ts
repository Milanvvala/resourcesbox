import { PrismaClient } from "@prisma/client"
import { CodeXml, Palette, Volume2 } from "lucide-react"
const prisma = new PrismaClient()

const categories = [
  { rank: 1, label: "Design", link: "/search/design", icon: "Palette" },
  {
    rank: 2,
    label: "Development",
    link: "/search/development",
    icon: "CodeXml"
  },
  { rank: 3, label: "Marketing", link: "/search/marketing", icon: "Volume2" }
]

const resources = [
  // { title:'', description:'', markdown:'', availableOn:123, badge:'', price:1,logoUrl:'', visitLink:'', },
  {
    title: "Default Title",
    slug:'p1',
    description: "Default Desc",
    markdown: `
    **About OpenAI:**
    
    OpenAI is an AI research and deployment company dedicated to ensuring that artificial general intelligence (AGI) benefits all of humanity. We're leading the field in developing advanced AI models, like ChatGPT.
    `,
    availableOn: 123,
    badge: "Deal",
    price: 1,
    logoUrl: "/plogo.png",
    visitLink: "www.google.com",
    categoryId: 1
  },
  {
    title: "Default Title 2",
    slug:'p2',
    description: "Default Desc 2",
    markdown: `
    **About OpenAI:**
    
    OpenAI is an AI research and deployment company dedicated to ensuring that artificial general intelligence (AGI) benefits all of humanity. We're leading the field in developing advanced AI models, like ChatGPT.
    `,
    availableOn: 456,
    badge: "Deal",
    price: 1,
    logoUrl: "/iconlogo.svg",
    visitLink: "www.example.com",
    categoryId: 2
  },
  {
    title: "Default Title 2",
    slug:'p3',
    description: "Default Desc 2",
    markdown: `
    **About OpenAI:**
    
    OpenAI is an AI research and deployment company dedicated to ensuring that artificial general intelligence (AGI) benefits all of humanity. We're leading the field in developing advanced AI models, like ChatGPT.
    `,
    availableOn: 135,
    badge: "Deal",
    price: 1,
    logoUrl: "/logo.svg",
    visitLink: "www.ebay.com",
    categoryId: 3
  }
]

async function main() {
  // await Promise.all(
  //   categories.map(async (category: any) => {
  //     await prisma.category.create({ data: category })
  //   })
  // )
  await Promise.all(
    resources.map(async (resource: any) => {
      await prisma.resource.create({ data: resource })
    })
  )
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error("Error while seeding database:", e)
    await prisma.$disconnect()
    process.exit(1)
  })
