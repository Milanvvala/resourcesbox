export const pricingTypes = [
  "One Time Payment",
  "Freemium",
  "Free + Paid",
  "Subscription"
]

export const brandTitle = "Resources Box"
export const brandTagline = "Collaction of Best Resources for Pros"

export const footerLinks = [
  // {label:'', link:''},
  { label: "About Us", link: "/about" },
  { label: "Contact", link: "/contact" },
  { label: "Terms of Service", link: "/terms" },
  { label: "Privacy Policy", link: "/privacy" }
]

export const navbarLinks = [
  // {label:'', link:''},
  { label: "Featured", link: "/contact" },
  { label: "Explore", link: "/search" },
  { label: "Login", link: "/terms" }
]

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

const md = `
**About**

Hello World 
`

const resources = [
  // { title:'', description:'', markdown:'', availableOn:123, badge:'', price:1,logoUrl:'', visitLink:'', },
  {
    title: "Notion",
    slug: "p1",
    description: "desc Notion",
    markdown: md,
    availableOn: 123,
    badge: "Deal",
    price: 1,
    logoUrl: "/plogo.png",
    visitLink: "www.google.com",
    categoryId: 1
  },
  {
    title: "VS Code",
    slug: "p2",
    description: "desc VS Code",
    markdown: md,
    availableOn: 456,
    badge: "Deal",
    price: 1,
    logoUrl: "/plogo.png",
    visitLink: "www.example.com",
    categoryId: 2
  },
  {
    title: "Unsplash",
    slug: "p3",
    description: "desc Unsplash",
    markdown: md,
    availableOn: 135,
    badge: "Deal",
    price: 1,
    logoUrl: "/plogo.png",
    visitLink: "www.ebay.com",
    categoryId: 3
  },
  {
    title: "Pixels",
    slug: "p4",
    description: "desc Pixels",
    markdown: md,
    availableOn: 123,
    badge: "Deal",
    price: 1,
    logoUrl: "/plogo.png",
    visitLink: "www.google.com",
    categoryId: 1
  },
  {
    title: "Vercel",
    slug: "p5",
    description: "desc Vercel",
    markdown: md,
    availableOn: 456,
    badge: "Deal",
    price: 1,
    logoUrl: "/plogo.png",
    visitLink: "www.example.com",
    categoryId: 2
  },
  {
    title: "Youtube",
    slug: "p6",
    description: "desc Youtube",
    markdown: md,
    availableOn: 135,
    badge: "Deal",
    price: 1,
    logoUrl: "/plogo.png",
    visitLink: "www.ebay.com",
    categoryId: 3
  },
  {
    title: "LinkedIn",
    slug: "p7",
    description: "desc LinkedIn",
    markdown: md,
    availableOn: 123,
    badge: "Deal",
    price: 1,
    logoUrl: "/plogo.png",
    visitLink: "www.google.com",
    categoryId: 1
  },
  {
    title: "Twitter",
    slug: "p8",
    description: "desc Twitter",
    markdown: md,
    availableOn: 456,
    badge: "Deal",
    price: 1,
    logoUrl: "/plogo.png",
    visitLink: "www.example.com",
    categoryId: 2
  },
  {
    title: "Design Resources",
    slug: "p9",
    description: "desc Design Resources",
    markdown: md,
    availableOn: 135,
    badge: "Deal",
    price: 1,
    logoUrl: "/plogo.png",
    visitLink: "www.ebay.com",
    categoryId: 3
  },
  {
    title: "FlowCV",
    slug: "p10",
    description: "desc FlowCV",
    markdown: md,
    availableOn: 456,
    badge: "Deal",
    price: 1,
    logoUrl: "/plogo.png",
    visitLink: "www.example.com",
    categoryId: 2
  },
  {
    title: "Design Resources",
    slug: "p3",
    description: "desc Design Resources",
    markdown: md,
    availableOn: 135,
    badge: "Deal",
    price: 1,
    logoUrl: "/plogo.png",
    visitLink: "www.ebay.com",
    categoryId: 3
  }
]
