import { NextResponse } from "next/server"
import { getProducts } from "@/features/products/api/getProducts"

export async function GET() {
  const products = await getProducts()
  return NextResponse.json(products)
}