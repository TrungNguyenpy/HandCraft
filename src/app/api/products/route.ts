import { NextResponse, type NextRequest } from "next/server"
import { prisma } from "@/lib/prisma/client"
import { productsQuerySchema } from "./schemas"
import type { Prisma } from "@prisma/client"

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url)

    const parsed = productsQuerySchema.safeParse({
      q: url.searchParams.get("q") ?? undefined,
      categoryId: url.searchParams.get("categoryId"),
      minPrice: url.searchParams.get("minPrice"),
      maxPrice: url.searchParams.get("maxPrice"),
      page: url.searchParams.get("page"),
      limit: url.searchParams.get("limit"),
    })

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Invalid query parameters",
          details: parsed.error.flatten(),
        },
        { status: 400 }
      )
    }

    const { q, categoryId, minPrice, maxPrice } = parsed.data
    const page = parsed.data.page
    const limit = Math.min(parsed.data.limit, 100)
    const skip = (page - 1) * limit

    const and: Prisma.ProductWhereInput[] = []

    if (q) {
      and.push({
        OR: [
          { name: { contains: q, mode: "insensitive" } },
          { description: { contains: q, mode: "insensitive" } },
        ],
      })
    }
    if (categoryId !== undefined) and.push({ categoryId })
    if (minPrice !== undefined) and.push({ price: { gte: minPrice } })
    if (maxPrice !== undefined) and.push({ price: { lte: maxPrice } })

    const where: Prisma.ProductWhereInput = and.length ? { AND: and } : {}

    const [total, products] = await Promise.all([
      prisma.product.count({ where }),
      prisma.product.findMany({
        where,
        skip,
        take: limit,
        orderBy: { id: "desc" },
      }),
    ])

    return NextResponse.json({
      data: products.map((p) => ({
        id: p.id,
        name: p.name,
        description: p.description,
        price: p.price,
        stock: p.stock,
        image_url: p.imageUrl,
        category_id: p.categoryId,
      })),
      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    })
  } catch (err) {
    return NextResponse.json(
      { error: "Unexpected server error" },
      { status: 500 }
    )
  }
}