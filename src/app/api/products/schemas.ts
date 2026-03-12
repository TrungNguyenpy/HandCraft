import { z } from "zod"

const optionalNumber = z.preprocess((v) => {
  if (v === null || v === undefined) return undefined
  if (typeof v !== "string") return v
  const t = v.trim()
  if (t === "") return undefined
  return Number(t)
}, z.number().finite().optional())

const positiveIntDefault = (def: number) =>
  z.preprocess((v) => {
    if (v === null || v === undefined) return def
    if (typeof v !== "string") return v
    const t = v.trim()
    if (t === "") return def
    return Number(t)
  }, z.number().int().positive().default(def))

export const productsQuerySchema = z.object({
  q: z.string().trim().min(1).optional(),
  categoryId: optionalNumber,
  minPrice: optionalNumber,
  maxPrice: optionalNumber,
  page: positiveIntDefault(1),
  limit: positiveIntDefault(24),
})

export const productIdParamSchema = z.object({
  id: z.coerce.number().int().positive(),
})

