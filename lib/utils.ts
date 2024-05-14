import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

//validations
import { z } from "zod"

export const productFilterSchema = z.object({
  q: z.string().optional(),
  category: z.string().optional(),
  deal: z.string().optional(),
  price: z.string().optional()
  // availableOn : z.coerce.number().optional(),  // coerce : change in string
})

export type ProductFilterValues = z.infer<typeof productFilterSchema>

// db
import { PrismaClient } from "@prisma/client"

declare global {
  var prisma: PrismaClient | undefined
}

export const db = globalThis.prisma || new PrismaClient()

if (process.env.NODE_ENV !== "production") globalThis.prisma = db

// Extra functions


