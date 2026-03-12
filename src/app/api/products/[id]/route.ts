import { NextResponse, type NextRequest } from "next/server"
import { getProductById } from "@/features/products/api/getProductById"
import { productIdParamSchema } from "../schemas"

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const rawParams = await params
  const parsed = productIdParamSchema.safeParse(rawParams)
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid product id" }, { status: 400 })
  }

  try {
    const product = await getProductById(String(parsed.data.id))
    if (!product) {
      return NextResponse.json({ error: "Not found" }, { status: 404 })
    }
    return NextResponse.json({ data: product })
  } catch {
    return NextResponse.json(
      { error: "Unexpected server error" },
      { status: 500 }
    )
  }
}