import { z } from "zod"

export const productFilterSchema = z.object({
  q: z.string().optional(),
  type: z.string().optional(),
  location: z.string().optional(),
  remote: z.coerce.boolean().optional()
})

export type ProductFilterValues = z.infer<typeof productFilterSchema>