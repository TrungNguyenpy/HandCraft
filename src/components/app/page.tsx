import ProductCard from "@/components/ProductCard"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import Footer from "@/components/Footer"
import { getProducts } from "@/lib/products"
import { Product } from "@/types/product"

export default async function Home() {

  const products = await getProducts()

  return (
    <div>
      <Navbar />

      <div className="flex gap-8 p-10 bg-[#f4f1ea] min-h-screen">

        <Sidebar />

        <div className="flex-1">

          <h1 className="text-3xl font-bold mb-8">
            Sản phẩm nổi bật
          </h1>

          <div className="grid grid-cols-4 gap-6">

            {products.map((p: Product) => (
              <ProductCard
                key={p.id}
                id={p.id}
                name={p.name}
                price={p.price}
                image_url={p.image_url}
              />
            ))}

          </div>

        </div>

      </div>

      <Footer />
    </div>
  )
}