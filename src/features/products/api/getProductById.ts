import { query } from "@/lib/db"
import type { Product } from "@/types/product"

export async function getProductById(
  id: string
): Promise<Product | null> {
  const result = await query<Product>(
    "SELECT * FROM products WHERE id = $1",
    [id]
  )
  return result.rows[0] ?? null
}

