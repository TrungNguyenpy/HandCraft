import type { Product } from "@/types/product"
import { prisma } from "@/lib/prisma/client"
import type { Product as PrismaProduct } from "@prisma/client"

export async function getProducts(): Promise<Product[]> {
  const products: PrismaProduct[] = await prisma.product.findMany()
  return products.map((p) => ({
    id: p.id,
    name: p.name,
    description: p.description,
    price: p.price,
    stock: p.stock,
    image_url: p.imageUrl,
    category_id: p.categoryId,
  }))
}

