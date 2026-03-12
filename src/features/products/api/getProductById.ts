import type { Product } from "@/types/product"
import { prisma } from "@/lib/prisma/client"
import type { Product as PrismaProduct } from "@prisma/client"

export async function getProductById(
  id: string
): Promise<Product | null> {
  const productId = Number(id)
  if (!Number.isFinite(productId)) return null

  const p: PrismaProduct | null = await prisma.product.findUnique({
    where: { id: productId },
  })
  if (!p) return null

  return {
    id: p.id,
    name: p.name,
    description: p.description,
    price: p.price,
    stock: p.stock,
    image_url: p.imageUrl,
    category_id: p.categoryId,
  }
}

