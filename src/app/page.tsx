import SiteFooter from "@/components/layout/SiteFooter"
import SiteHeader from "@/components/layout/SiteHeader"
import ProductGrid from "@/components/products/ProductGrid"
import ProductSidebar from "@/components/products/ProductSidebar"
import { getProducts } from "@/features/products/api/getProducts"

export const dynamic = "force-dynamic"

export default async function Home() {

  const products = await getProducts()

  return (
    <div className="bg-[#f4f1ea] min-h-screen">
      <SiteHeader />

      <main className="flex gap-8 p-10">
        <ProductSidebar />

        <section className="flex-1">
          <h1 className="text-3xl font-bold mb-8">Sản phẩm nổi bật</h1>
          <ProductGrid products={products} />
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}