import { getProductById } from "@/features/products/api/getProductById"
import ProductGallery from "@/components/product/ProductGallery"
import ProductInfo from "@/components/product/ProductInfo"
import ProductReviews from "@/components/product/ProductReviews"

export const dynamic = "force-dynamic"

type Props = {
  params: Promise<{
    id: string
  }>
}

export default async function ProductDetail({ params }: Props) {
  const { id } = await params
  const product = await getProductById(id)

  if (!product) {
    return (
      <main className="max-w-7xl mx-auto px-4 py-10">Không tìm thấy sản phẩm.</main>
    )
  }

  return (
    <div className="text-[#4a3f35]">
      <main className="max-w-7xl mx-auto px-4 py-10">
        <nav className="flex mb-8 text-sm text-gray-500">
          <a className="hover:text-[#8c7851]">Cửa hàng</a>
          <span className="mx-2">/</span>
          <a className="hover:text-[#8c7851]">Danh mục</a>
          <span className="mx-2">/</span>
          <span className="text-gray-800 font-semibold">{product.name}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-3/5 space-y-4">
            <ProductGallery imageUrl={product.image_url} name={product.name} />

            <div className="mt-8 bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4 border-b pb-2">
                Mô tả sản phẩm
              </h3>

              <div className="text-sm text-gray-600 space-y-3">
                <p>{product.description}</p>

                <ul className="list-disc pl-5 space-y-1">
                  <li>Chất liệu: Handmade</li>
                  <li>Xuất xứ: Việt Nam</li>
                  <li>Danh mục: Thủ công mỹ nghệ</li>
                </ul>
              </div>
            </div>

            <ProductReviews />
          </div>

          <ProductInfo product={product} />
        </div>
      </main>
    </div>
  )
}

