import ShopHeader from "@/components/products/ShopHeader"
import ProductGrid from "@/components/products/ProductGrid"
import ProductSidebar from "@/components/products/ProductSidebar"
import { getProducts } from "@/features/products/api/getProducts"
import Pagination from "@/components/products/Pagination"

export const dynamic = "force-dynamic"

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">

      <ShopHeader />

      <div className="flex flex-col lg:flex-row gap-12">

        <ProductSidebar />

        <section className="flex-1">

          {/* sort */}
          <div className="flex justify-between items-center mb-6">

            <p className="text-gray-500 text-sm">
              Hiển thị {products.length} sản phẩm
            </p>

          </div>

          <ProductGrid products={products} />

          {/* pagination đúng vị trí */}
          <Pagination />

        </section>

      </div>

    </main>
  )
}