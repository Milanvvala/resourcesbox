import { z } from "zod"

export const productFilterSchema = z.object({
  q: z.string().optional(),
  type: z.string().optional(),
  location: z.string().optional(),
  remote: z.coerce.boolean().optional()
})

export type ProductFilterValues = z.infer<typeof productFilterSchema>

export const resourceFilterSchema = z.object({
  q: z.string().optional(),
  category: z.string().optional(),
  deal: z.string().optional(),
  price: z.string().optional()
  // availableOn : z.coerce.number().optional(),
})

export type ResourceFilterValues = z.infer<typeof resourceFilterSchema>

// coerce : change in string
