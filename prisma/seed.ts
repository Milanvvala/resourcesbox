// import { PrismaClient, Type } from "@prisma/client"
// const prisma = new PrismaClient()

// const categories = [
//   { rank: 1, label: "Design", link: "/search/design", icon: "Palette" },
//   {
//     rank: 2,
//     label: "Development",
//     link: "/search/development",
//     icon: "CodeXml"
//   },
//   { rank: 3, label: "Marketing", link: "/search/marketing", icon: "Volume2" }
// ]

// const md = `
// **About**

// Hello World 
// `

// const products = [
//   // { title:'', description:'', markdown:'', availableOn:123, badge:'', price:1,logoUrl:'', visitLink:'', },
//   {
//     title: "Notion",
//     slug: "p12",
//     description: "desc Notion",
//     markdown: md,
//     availableOn: 123,
//     badge: "Deal",
//     price: 1,
//     logoUrl: "/plogo.png",
//     visitLink: "www.google.com",
//     categoryId: 1,
//     type: Type.TOOL
//   },
//   {
//     title: "VS Code",
//     slug: "p13",
//     description: "desc VS Code",
//     markdown: md,
//     availableOn: 456,
//     badge: "Deal",
//     price: 1,
//     logoUrl: "/plogo.png",
//     visitLink: "www.example.com",
//     categoryId: 2,
//     type: Type.TOOL
//   },
//   {
//     title: "Unsplash",
//     slug: "p14",
//     description: "desc Unsplash",
//     markdown: md,
//     availableOn: 135,
//     badge: "Deal",
//     price: 1,
//     logoUrl: "/plogo.png",
//     visitLink: "www.ebay.com",
//     categoryId: 3,
//     type: Type.TOOL
//   },
//   {
//     title: "Pixels",
//     slug: "p4",
//     description: "desc Pixels",
//     markdown: md,
//     availableOn: 123,
//     badge: "Deal",
//     price: 1,
//     logoUrl: "/plogo.png",
//     visitLink: "www.google.com",
//     categoryId: 1,
//     type: Type.TOOL
//   },
//   {
//     title: "Vercel",
//     slug: "p5",
//     description: "desc Vercel",
//     markdown: md,
//     availableOn: 456,
//     badge: "Deal",
//     price: 1,
//     logoUrl: "/plogo.png",
//     visitLink: "www.example.com",
//     categoryId: 2,
//     type: Type.TOOL
//   },
//   {
//     title: "Youtube",
//     slug: "p6",
//     description: "desc Youtube",
//     markdown: md,
//     availableOn: 135,
//     badge: "Deal",
//     price: 1,
//     logoUrl: "/plogo.png",
//     visitLink: "www.ebay.com",
//     categoryId: 3,
//     type: Type.TOOL
//   },
//   {
//     title: "LinkedIn",
//     slug: "p7",
//     description: "desc LinkedIn",
//     markdown: md,
//     availableOn: 123,
//     badge: "Deal",
//     price: 1,
//     logoUrl: "/plogo.png",
//     visitLink: "www.google.com",
//     categoryId: 1,
//     type: Type.TOOL
//   },
//   {
//     title: "Twitter",
//     slug: "p8",
//     description: "desc Twitter",
//     markdown: md,
//     availableOn: 456,
//     badge: "Deal",
//     price: 1,
//     logoUrl: "/plogo.png",
//     visitLink: "www.example.com",
//     categoryId: 2,
//     type: Type.TOOL
//   },
//   {
//     title: "Design Resources",
//     slug: "p9",
//     description: "desc Design Resources",
//     markdown: md,
//     availableOn: 135,
//     badge: "Deal",
//     price: 1,
//     logoUrl: "/plogo.png",
//     visitLink: "www.ebay.com",
//     categoryId: 3,
//     type: Type.TOOL
//   },
//   {
//     title: "FlowCV",
//     slug: "p10",
//     description: "desc FlowCV",
//     markdown: md,
//     availableOn: 456,
//     badge: "Deal",
//     price: 1,
//     logoUrl: "/plogo.png",
//     visitLink: "www.example.com",
//     categoryId: 2,
//     type: Type.TOOL
//   },
//   {
//     title: "Design Resources",
//     slug: "p11",
//     description: "desc Design Resources",
//     markdown: md,
//     availableOn: 135,
//     badge: "Deal",
//     price: 1,
//     logoUrl: "/plogo.png",
//     visitLink: "www.ebay.com",
//     categoryId: 3,
//     type: Type.TOOL
//   }
// ]

// async function main() {
//   // await Promise.all(
//   //   categories.map(async (category: any) => {
//   //     await prisma.category.create({ data: category })
//   //   })
//   // )
//   await Promise.all(
//     products.map(async (product: any) => {
//       await prisma.product.create({ data: products })
//     })
//   )
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error("Error while seeding database:", e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })
