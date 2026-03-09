import { query } from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {

  const { id } = await params

  const result = await query(
    "SELECT * FROM products WHERE id=$1",
    [id]
  )

  const product = result.rows[0]

  return NextResponse.json(
    JSON.parse(JSON.stringify(product))
  )
}