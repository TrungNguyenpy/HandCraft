import ProductGrid from "@/components/products/ProductGrid"
import ProductSidebar from "@/components/products/ProductSidebar"
import { getProducts } from "@/features/products/api/getProducts"

export const dynamic = "force-dynamic"

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <main className="flex gap-8 p-10">
      <ProductSidebar />

      <section className="flex-1">
        <h1 className="text-3xl font-bold mb-8">Cửa hàng</h1>
        <ProductGrid products={products} />
      </section>
    </main>
  )
}

