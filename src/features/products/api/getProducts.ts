import { query } from "@/lib/db"
import type { Product } from "@/types/product"

export async function getProducts(): Promise<Product[]> {
  const result = await query<Product>("SELECT * FROM products")
  return result.rows
}

