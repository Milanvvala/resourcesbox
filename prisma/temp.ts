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



