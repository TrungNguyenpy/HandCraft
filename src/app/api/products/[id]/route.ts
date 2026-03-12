import { NextResponse } from "next/server"
import { getProductById } from "@/features/products/api/getProductById"

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const product = await getProductById(id)
  return NextResponse.json(product)
}