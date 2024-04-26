// // new changes

// model User {
//   id            String    @id @default(cuid())
//   name          String?
//   email         String?   @unique
//   emailVerified DateTime?
//   image         String?
//   accounts      Account[]

//   @@map("User") // Manually map the table name to "User" since it's a reserved keyword in SQLite
// }

// model Account {
//   id                String  @id @default(cuid())
//   userId            String
//   type              String
//   provider          String
//   providerAccountId String
//   refresh_token     String?
//   access_token      String?
//   expires_at        Int?
//   token_type        String?
//   scope             String?
//   id_token          String?
//   session_state     String?

//   user User @relation(fields: [userId], references: [id], onDelete: Cascade)

//   @@unique([provider, providerAccountId])
// }

// model Product {
//   id          Int     @id @default(autoincrement())
//   slug        String
//   title       String
//   description String
//   availableOn Int?
//   badge       String?
//   price       Int?
//   published   Boolean @default(false)

//   links Link?
//   tags  Tags[]

//   categoryId Int?
//   category   Category? @relation(fields: [categoryId], references: [id])

//   createdAt DateTime? @default(now())
//   updatedAt DateTime? @updatedAt
// }

export const placeholderProducts = [
  {
    title: "Full-Stack Developer at Stripe",
    type: "Full-time",
    companyName: "Stripe",
    locationType: "Remote",
    location: "San Francisco, California, United States",
    applicationEmail: "apply@stripe.com",
    applicationUrl: "https://stripe.com/apply",
    slug: "full-stack-developer-at-stripe-1",
    salary: 150000,
    approved: true,
    description: `
**About Stripe**

Stripe is a global technology company that builds economic infrastructure for the internet. Our suite of products and services are designed to power commerce for online businesses of all sizes. At Stripe, we're looking for passionate, creative, and innovative developers to help build the next generation of payment platforms.

**Key Responsibilities**

- Design, develop, test, deploy, maintain, and improve software across the stack.
- Work closely with other engineering teams to integrate and develop new features.

**Benefits**

- Competitive salary and equity package.
- Health, dental, and vision insurance.

Stripe is an equal opportunity employer. We value diversity and are committed to creating an inclusive environment for all employees.
`
  },
  {
    title: "Full-Stack Developer at Vercel",
    type: "Full-time",
    companyName: "Vercel",
    locationType: "Hybrid",
    location: "San Francisco, California, United States",
    applicationEmail: "apply@vercel.com",
    applicationUrl: "https://vercel.com/apply",
    slug: "full-stack-developer-at-vercel-2",
    salary: 120000,
    approved: true,
    description: `
**About Vercel:** 

Vercel is a cloud platform for static sites and Serverless Functions that fits perfectly with your workflow. It enables developers to host Jamstack websites with ease.

**Key Responsibilities:**

-   Develop and maintain front-end and back-end components of our web applications.
-   Collaborate with cross-functional teams to define, design, and ship new features.

Join us at Vercel and be a part of shaping the future of web development!
`
  },
  {
    title: "ChatGPT Backend Developer at OpenAI",
    type: "Part-time",
    companyName: "OpenAI",
    locationType: "On-site",
    location: "San Francisco, California, United States",
    applicationUrl: "https://openai.com/apply",
    slug: "chatgpt-backend-developer-at-openai-3",
    salary: 250000,
    approved: true,
    description: `
**About OpenAI:**

OpenAI is an AI research and deployment company dedicated to ensuring that artificial general intelligence (AGI) benefits all of humanity. We're leading the field in developing advanced AI models, like ChatGPT.
`
  },
  {
    title: "Intern at Coding in Flow",
    type: "Internship",
    companyName: "Coding in Flow",
    locationType: "Remote",
    applicationUrl: "https://codinginflow.com",
    slug: "intern-at-coding-in-flow-4",
    salary: 500,
    approved: true,
    description: `
**Help build the best coding tutorials**

I might not be able to pay you a lot, but I can offer you a lot of experience and a lot of fun. I'm looking for someone who is passionate about coding and wants to help me create the best coding tutorials on YouTube.
`
  },
  {
    title: "Contractor at SmartDiary.co",
    type: "Contract",
    companyName: "SmartDiary.co",
    locationType: "Remote",
    applicationUrl: "https://smartdiary.co",
    slug: "contractor-at-smartdiary-co-5",
    salary: 30000,
    approved: true,
    description: `
**Help build the future of journaling**

Smart Diary is the intelligent journaling app with AI integration. I'm looking for someone who can help me build this website. 

Try it out for free at [https://smartdiary.co](https://smartdiary.co).
`
  },
  {
    title: "Software Engineer at Microsoft",
    type: "Temporary",
    companyName: "Microsoft",
    locationType: "On-site",
    location: "Redmond, Washington, United States",
    applicationEmail: "applications@microsoft.com",
    applicationUrl: "https://careers.microsoft.com",
    slug: "software-engineer-at-microsoft-6",
    salary: 180000,
    approved: true,
    description: `
**Key Responsibilities:**

-   Diagnose, troubleshoot, and resolve software issues.
-   Write clean, maintainable, and efficient code.
-   Participate in code reviews and contribute to team meetings.
`
  },
  {
    title: "Full-Stack Developer at Apple",
    type: "Full-time",
    companyName: "Apple Inc.",
    locationType: "Hybrid",
    location: "Cupertino, California, United States",
    applicationUrl: "https://apple.com/apply",
    slug: "full-stack-developer-at-apple-7",
    salary: 200000,
    approved: true,
    description: `
**Qualifications:**

-   Bachelor's or Master's degree in Computer Science, Software Engineering, or a related field.
-   Proficiency with front-end frameworks such as React, Angular, or Vue.js.
`
  },
  {
    title: "Junior Web Developer at Shopify",
    type: "Part-time",
    companyName: "Shopify",
    locationType: "Hybrid",
    location: "Ottawa, Ontario, Canada",
    applicationEmail: "career@shopify.com",
    applicationUrl: "https://shopify.com/apply",
    slug: "junior-web-developer-at-shopify-8",
    salary: 90000,
    approved: true,
    description: `
**Benefits:**

-   Flexible working hours to accommodate your schedule.
-   Competitive hourly rate.
-   Mentorship from experienced developers.
`
  }
]
